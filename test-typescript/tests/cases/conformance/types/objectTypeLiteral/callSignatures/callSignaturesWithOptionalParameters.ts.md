__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 63,
  "end": 640,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 63,
      "end": 91,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 88,
        "end": 91,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 75,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 76,
          "end": 86,
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 78,
            "end": 86,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 80,
              "end": 86
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 92,
      "end": 128,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 128,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 97,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 100,
            "end": 128,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 125,
              "end": 128,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 109,
              "end": 112,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [
              {
                "type": "Identifier",
                "start": 113,
                "end": 123,
                "decorators": [],
                "name": "x",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 115,
                  "end": 123,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 117,
                    "end": 123
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 129,
      "end": 168,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 168,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 135,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 138,
            "end": 168,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 165,
              "end": 168,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 139,
                "end": 148,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 140,
                  "end": 148,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 142,
                    "end": 148
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 150,
                "end": 160,
                "decorators": [],
                "name": "y",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 152,
                  "end": 160,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 154,
                    "end": 160
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 170,
      "end": 177,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 170,
        "end": 176,
        "arguments": [
          {
            "type": "Literal",
            "start": 174,
            "end": 175,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 170,
          "end": 173,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 178,
      "end": 184,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 178,
        "end": 183,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 178,
          "end": 181,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 185,
      "end": 190,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 185,
        "end": 189,
        "arguments": [
          {
            "type": "Literal",
            "start": 187,
            "end": 188,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 185,
          "end": 186,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 191,
      "end": 195,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 191,
        "end": 194,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 191,
          "end": 192,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 196,
      "end": 202,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 196,
        "end": 201,
        "arguments": [
          {
            "type": "Literal",
            "start": 199,
            "end": 200,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 196,
          "end": 198,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 203,
      "end": 212,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 203,
        "end": 211,
        "arguments": [
          {
            "type": "Literal",
            "start": 206,
            "end": 207,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 209,
            "end": 210,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 203,
          "end": 205,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 214,
      "end": 249,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 222,
        "end": 249,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 228,
            "end": 247,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 228,
              "end": 231,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 231,
              "end": 247,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 244,
                "end": 247,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 232,
                  "end": 242,
                  "decorators": [],
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 234,
                    "end": 242,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 236,
                      "end": 242
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 220,
        "end": 221,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 251,
      "end": 260,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 255,
          "end": 259,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 255,
            "end": 259,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 256,
              "end": 259,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 258,
                "end": 259,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 258,
                  "end": 259,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 261,
      "end": 269,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 261,
        "end": 268,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 261,
          "end": 266,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 261,
            "end": 262,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 263,
            "end": 266,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 270,
      "end": 279,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 270,
        "end": 278,
        "arguments": [
          {
            "type": "Literal",
            "start": 276,
            "end": 277,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 270,
          "end": 275,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 270,
            "end": 271,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 272,
            "end": 275,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 281,
      "end": 346,
      "body": {
        "type": "TSInterfaceBody",
        "start": 293,
        "end": 346,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 299,
            "end": 312,
            "params": [
              {
                "type": "Identifier",
                "start": 300,
                "end": 310,
                "decorators": [],
                "name": "x",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 302,
                  "end": 310,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 304,
                    "end": 310
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 317,
            "end": 344,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 317,
              "end": 320,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 321,
                "end": 330,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 322,
                  "end": 330,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 324,
                    "end": 330
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 332,
                "end": 342,
                "decorators": [],
                "name": "y",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 334,
                  "end": 342,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 336,
                    "end": 342
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": null,
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 291,
        "end": 292,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 348,
      "end": 357,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 352,
          "end": 356,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 352,
            "end": 356,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 353,
              "end": 356,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 355,
                "end": 356,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 355,
                  "end": 356,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 358,
      "end": 362,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 358,
        "end": 361,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 358,
          "end": 359,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 363,
      "end": 368,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 363,
        "end": 367,
        "arguments": [
          {
            "type": "Literal",
            "start": 365,
            "end": 366,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 363,
          "end": 364,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 369,
      "end": 378,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 369,
        "end": 377,
        "arguments": [
          {
            "type": "Literal",
            "start": 375,
            "end": 376,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 369,
          "end": 374,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 369,
            "end": 370,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 371,
            "end": 374,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 379,
      "end": 391,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 379,
        "end": 390,
        "arguments": [
          {
            "type": "Literal",
            "start": 385,
            "end": 386,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 388,
            "end": 389,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 379,
          "end": 384,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 379,
            "end": 380,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 381,
            "end": 384,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 393,
      "end": 442,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 397,
          "end": 442,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 397,
            "end": 442,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 398,
              "end": 442,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 400,
                "end": 442,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 406,
                    "end": 419,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 407,
                        "end": 417,
                        "decorators": [],
                        "name": "x",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 409,
                          "end": 417,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 411,
                            "end": 417
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 424,
                    "end": 440,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 424,
                      "end": 427,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 428,
                        "end": 438,
                        "decorators": [],
                        "name": "x",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 430,
                          "end": 438,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 432,
                            "end": 438
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": null,
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 444,
      "end": 448,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 444,
        "end": 447,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 444,
          "end": 445,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 449,
      "end": 454,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 449,
        "end": 453,
        "arguments": [
          {
            "type": "Literal",
            "start": 451,
            "end": 452,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 449,
          "end": 450,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 455,
      "end": 463,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 455,
        "end": 462,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 455,
          "end": 460,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 455,
            "end": 456,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 457,
            "end": 460,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 464,
      "end": 473,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 464,
        "end": 472,
        "arguments": [
          {
            "type": "Literal",
            "start": 470,
            "end": 471,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 464,
          "end": 469,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 464,
            "end": 465,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 466,
            "end": 469,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 475,
      "end": 586,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 479,
          "end": 586,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 479,
            "end": 480,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 483,
            "end": 586,
            "properties": [
              {
                "type": "Property",
                "start": 489,
                "end": 508,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 489,
                  "end": 492,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 492,
                  "end": 508,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 505,
                    "end": 508,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 493,
                      "end": 503,
                      "decorators": [],
                      "name": "x",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 495,
                        "end": 503,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 497,
                          "end": 503
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 514,
                "end": 556,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 514,
                  "end": 515,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 517,
                  "end": 556,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 553,
                    "end": 556,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 526,
                    "end": 529,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 530,
                      "end": 539,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 531,
                        "end": 539,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 533,
                          "end": 539
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 541,
                      "end": 551,
                      "decorators": [],
                      "name": "y",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 543,
                        "end": 551,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 545,
                          "end": 551
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 562,
                "end": 584,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 562,
                  "end": 563,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 565,
                  "end": 584,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 581,
                    "end": 584,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 566,
                      "end": 576,
                      "decorators": [],
                      "name": "x",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 568,
                        "end": 576,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 570,
                          "end": 576
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
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
      "start": 588,
      "end": 596,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 588,
        "end": 595,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 588,
          "end": 593,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 588,
            "end": 589,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 590,
            "end": 593,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 597,
      "end": 606,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 597,
        "end": 605,
        "arguments": [
          {
            "type": "Literal",
            "start": 603,
            "end": 604,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 597,
          "end": 602,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 597,
            "end": 598,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 599,
            "end": 602,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 607,
      "end": 614,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 607,
        "end": 613,
        "arguments": [
          {
            "type": "Literal",
            "start": 611,
            "end": 612,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 607,
          "end": 610,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 607,
            "end": 608,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 609,
            "end": 610,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 615,
      "end": 625,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 615,
        "end": 624,
        "arguments": [
          {
            "type": "Literal",
            "start": 619,
            "end": 620,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 622,
            "end": 623,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 615,
          "end": 618,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 615,
            "end": 616,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 617,
            "end": 618,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 626,
      "end": 632,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 626,
        "end": 631,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 626,
          "end": 629,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 626,
            "end": 627,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 628,
            "end": 629,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 633,
      "end": 640,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 633,
        "end": 639,
        "arguments": [
          {
            "type": "Literal",
            "start": 637,
            "end": 638,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 633,
          "end": 636,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 633,
            "end": 634,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 635,
            "end": 636,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

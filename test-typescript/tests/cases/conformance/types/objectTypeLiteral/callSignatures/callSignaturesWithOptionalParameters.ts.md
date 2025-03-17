__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 63,
  "end": 641,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 63,
      "end": 91,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 75,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 76,
          "end": 86,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 78,
            "end": 86,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 80,
              "end": 86
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 88,
        "end": 91,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 97,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 100,
            "end": 128,
            "id": {
              "type": "Identifier",
              "start": 109,
              "end": 112,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 113,
                "end": 123,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 115,
                  "end": 123,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 117,
                    "end": 123
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 125,
              "end": 128,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 135,
            "name": "f2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 138,
            "end": 168,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 139,
                "end": 148,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 140,
                  "end": 148,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 142,
                    "end": 148
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 150,
                "end": 160,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 152,
                  "end": 160,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 154,
                    "end": 160
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 165,
              "end": 168,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 170,
      "end": 177,
      "expression": {
        "type": "CallExpression",
        "start": 170,
        "end": 176,
        "callee": {
          "type": "Identifier",
          "start": 170,
          "end": 173,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 174,
            "end": 175,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 178,
      "end": 184,
      "expression": {
        "type": "CallExpression",
        "start": 178,
        "end": 183,
        "callee": {
          "type": "Identifier",
          "start": 178,
          "end": 181,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 185,
      "end": 190,
      "expression": {
        "type": "CallExpression",
        "start": 185,
        "end": 189,
        "callee": {
          "type": "Identifier",
          "start": 185,
          "end": 186,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 187,
            "end": 188,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 191,
      "end": 195,
      "expression": {
        "type": "CallExpression",
        "start": 191,
        "end": 194,
        "callee": {
          "type": "Identifier",
          "start": 191,
          "end": 192,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 196,
      "end": 202,
      "expression": {
        "type": "CallExpression",
        "start": 196,
        "end": 201,
        "callee": {
          "type": "Identifier",
          "start": 196,
          "end": 198,
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 199,
            "end": 200,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 203,
      "end": 212,
      "expression": {
        "type": "CallExpression",
        "start": 203,
        "end": 211,
        "callee": {
          "type": "Identifier",
          "start": 203,
          "end": 205,
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 206,
            "end": 207,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 209,
            "end": 210,
            "value": 2,
            "raw": "2"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 214,
      "end": 249,
      "id": {
        "type": "Identifier",
        "start": 220,
        "end": 221,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 222,
        "end": 249,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 228,
            "end": 247,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 228,
              "end": 231,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 231,
              "end": 247,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 232,
                  "end": 242,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 234,
                    "end": 242,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 236,
                      "end": 242
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 244,
                "end": 247,
                "body": []
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 255,
            "end": 259,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 256,
              "end": 259,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 258,
                "end": 259,
                "typeName": {
                  "type": "Identifier",
                  "start": 258,
                  "end": 259,
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 261,
      "end": 269,
      "expression": {
        "type": "CallExpression",
        "start": 261,
        "end": 268,
        "callee": {
          "type": "MemberExpression",
          "start": 261,
          "end": 266,
          "object": {
            "type": "Identifier",
            "start": 261,
            "end": 262,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 263,
            "end": 266,
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
    },
    {
      "type": "ExpressionStatement",
      "start": 270,
      "end": 279,
      "expression": {
        "type": "CallExpression",
        "start": 270,
        "end": 278,
        "callee": {
          "type": "MemberExpression",
          "start": 270,
          "end": 275,
          "object": {
            "type": "Identifier",
            "start": 270,
            "end": 271,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 272,
            "end": 275,
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
            "type": "Literal",
            "start": 276,
            "end": 277,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 281,
      "end": 346,
      "id": {
        "type": "Identifier",
        "start": 291,
        "end": 292,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 293,
        "end": 346,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 299,
            "end": 312,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 300,
                "end": 310,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 302,
                  "end": 310,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 304,
                    "end": 310
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": null
          },
          {
            "type": "TSMethodSignature",
            "start": 317,
            "end": 344,
            "key": {
              "type": "Identifier",
              "start": 317,
              "end": 320,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 321,
                "end": 330,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 322,
                  "end": 330,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 324,
                    "end": 330
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 332,
                "end": 342,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 334,
                  "end": 342,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 336,
                    "end": 342
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 352,
            "end": 356,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 353,
              "end": 356,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 355,
                "end": 356,
                "typeName": {
                  "type": "Identifier",
                  "start": 355,
                  "end": 356,
                  "name": "I",
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
      "type": "ExpressionStatement",
      "start": 358,
      "end": 362,
      "expression": {
        "type": "CallExpression",
        "start": 358,
        "end": 361,
        "callee": {
          "type": "Identifier",
          "start": 358,
          "end": 359,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 363,
      "end": 368,
      "expression": {
        "type": "CallExpression",
        "start": 363,
        "end": 367,
        "callee": {
          "type": "Identifier",
          "start": 363,
          "end": 364,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 365,
            "end": 366,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 369,
      "end": 378,
      "expression": {
        "type": "CallExpression",
        "start": 369,
        "end": 377,
        "callee": {
          "type": "MemberExpression",
          "start": 369,
          "end": 374,
          "object": {
            "type": "Identifier",
            "start": 369,
            "end": 370,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "arguments": [
          {
            "type": "Literal",
            "start": 375,
            "end": 376,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 379,
      "end": 391,
      "expression": {
        "type": "CallExpression",
        "start": 379,
        "end": 390,
        "callee": {
          "type": "MemberExpression",
          "start": 379,
          "end": 384,
          "object": {
            "type": "Identifier",
            "start": 379,
            "end": 380,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 381,
            "end": 384,
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
            "type": "Literal",
            "start": 385,
            "end": 386,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 388,
            "end": 389,
            "value": 2,
            "raw": "2"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 397,
            "end": 442,
            "name": "a",
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
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 407,
                        "end": 417,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 409,
                          "end": 417,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 411,
                            "end": 417
                          }
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
                    "returnType": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 424,
                    "end": 440,
                    "key": {
                      "type": "Identifier",
                      "start": 424,
                      "end": 427,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 428,
                        "end": 438,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 430,
                          "end": 438,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 432,
                            "end": 438
                          }
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false
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
      "type": "ExpressionStatement",
      "start": 444,
      "end": 448,
      "expression": {
        "type": "CallExpression",
        "start": 444,
        "end": 447,
        "callee": {
          "type": "Identifier",
          "start": 444,
          "end": 445,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 449,
      "end": 454,
      "expression": {
        "type": "CallExpression",
        "start": 449,
        "end": 453,
        "callee": {
          "type": "Identifier",
          "start": 449,
          "end": 450,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 451,
            "end": 452,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 455,
      "end": 463,
      "expression": {
        "type": "CallExpression",
        "start": 455,
        "end": 462,
        "callee": {
          "type": "MemberExpression",
          "start": 455,
          "end": 460,
          "object": {
            "type": "Identifier",
            "start": 455,
            "end": 456,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 457,
            "end": 460,
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
    },
    {
      "type": "ExpressionStatement",
      "start": 464,
      "end": 473,
      "expression": {
        "type": "CallExpression",
        "start": 464,
        "end": 472,
        "callee": {
          "type": "MemberExpression",
          "start": 464,
          "end": 469,
          "object": {
            "type": "Identifier",
            "start": 464,
            "end": 465,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 466,
            "end": 469,
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
            "type": "Literal",
            "start": 470,
            "end": 471,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 479,
            "end": 480,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 489,
                  "end": 492,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 492,
                  "end": 508,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 493,
                      "end": 503,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 495,
                        "end": 503,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 497,
                          "end": 503
                        }
                      },
                      "decorators": [],
                      "optional": true
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 505,
                    "end": 508,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 514,
                "end": 556,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 514,
                  "end": 515,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 517,
                  "end": 556,
                  "id": {
                    "type": "Identifier",
                    "start": 526,
                    "end": 529,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 530,
                      "end": 539,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 531,
                        "end": 539,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 533,
                          "end": 539
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 541,
                      "end": 551,
                      "name": "y",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 543,
                        "end": 551,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 545,
                          "end": 551
                        }
                      },
                      "decorators": [],
                      "optional": true
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 553,
                    "end": 556,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 562,
                "end": 584,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 562,
                  "end": 563,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 565,
                  "end": 584,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 566,
                      "end": 576,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 568,
                        "end": 576,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 570,
                          "end": 576
                        }
                      },
                      "decorators": [],
                      "optional": true
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 581,
                    "end": 584,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
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
      "type": "ExpressionStatement",
      "start": 588,
      "end": 596,
      "expression": {
        "type": "CallExpression",
        "start": 588,
        "end": 595,
        "callee": {
          "type": "MemberExpression",
          "start": 588,
          "end": 593,
          "object": {
            "type": "Identifier",
            "start": 588,
            "end": 589,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 590,
            "end": 593,
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
    },
    {
      "type": "ExpressionStatement",
      "start": 597,
      "end": 606,
      "expression": {
        "type": "CallExpression",
        "start": 597,
        "end": 605,
        "callee": {
          "type": "MemberExpression",
          "start": 597,
          "end": 602,
          "object": {
            "type": "Identifier",
            "start": 597,
            "end": 598,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 599,
            "end": 602,
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
            "type": "Literal",
            "start": 603,
            "end": 604,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 607,
      "end": 614,
      "expression": {
        "type": "CallExpression",
        "start": 607,
        "end": 613,
        "callee": {
          "type": "MemberExpression",
          "start": 607,
          "end": 610,
          "object": {
            "type": "Identifier",
            "start": 607,
            "end": 608,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 609,
            "end": 610,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 611,
            "end": 612,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 615,
      "end": 625,
      "expression": {
        "type": "CallExpression",
        "start": 615,
        "end": 624,
        "callee": {
          "type": "MemberExpression",
          "start": 615,
          "end": 618,
          "object": {
            "type": "Identifier",
            "start": 615,
            "end": 616,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 617,
            "end": 618,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 619,
            "end": 620,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 622,
            "end": 623,
            "value": 2,
            "raw": "2"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 626,
      "end": 632,
      "expression": {
        "type": "CallExpression",
        "start": 626,
        "end": 631,
        "callee": {
          "type": "MemberExpression",
          "start": 626,
          "end": 629,
          "object": {
            "type": "Identifier",
            "start": 626,
            "end": 627,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 628,
            "end": 629,
            "name": "b",
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
    },
    {
      "type": "ExpressionStatement",
      "start": 633,
      "end": 640,
      "expression": {
        "type": "CallExpression",
        "start": 633,
        "end": 639,
        "callee": {
          "type": "MemberExpression",
          "start": 633,
          "end": 636,
          "object": {
            "type": "Identifier",
            "start": 633,
            "end": 634,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 635,
            "end": 636,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 637,
            "end": 638,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

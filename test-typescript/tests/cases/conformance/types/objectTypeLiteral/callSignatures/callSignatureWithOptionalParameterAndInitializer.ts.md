__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 87,
  "end": 684,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 87,
      "end": 119,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 99,
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
          "type": "AssignmentPattern",
          "start": 100,
          "end": 114,
          "left": {
            "type": "Identifier",
            "start": 100,
            "end": 110,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 110,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 104,
                "end": 110
              }
            },
            "decorators": [],
            "optional": true
          },
          "right": {
            "type": "Literal",
            "start": 113,
            "end": 114,
            "value": 1,
            "raw": "1"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 116,
        "end": 119,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 160,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 125,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 128,
            "end": 160,
            "id": {
              "type": "Identifier",
              "start": 137,
              "end": 140,
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
                "type": "AssignmentPattern",
                "start": 141,
                "end": 155,
                "left": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 151,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 143,
                    "end": 151,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 145,
                      "end": 151
                    }
                  },
                  "decorators": [],
                  "optional": true
                },
                "right": {
                  "type": "Literal",
                  "start": 154,
                  "end": 155,
                  "value": 1,
                  "raw": "1"
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 157,
              "end": 160,
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
      "start": 161,
      "end": 196,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 196,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 167,
            "name": "f2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 170,
            "end": 196,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 171,
                "end": 180,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 172,
                  "end": 180,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 174,
                    "end": 180
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "AssignmentPattern",
                "start": 182,
                "end": 188,
                "left": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 184,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": true
                },
                "right": {
                  "type": "Literal",
                  "start": 187,
                  "end": 188,
                  "value": 1,
                  "raw": "1"
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 193,
              "end": 196,
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
      "start": 198,
      "end": 205,
      "expression": {
        "type": "CallExpression",
        "start": 198,
        "end": 204,
        "callee": {
          "type": "Identifier",
          "start": 198,
          "end": 201,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 202,
            "end": 203,
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
      "start": 206,
      "end": 212,
      "expression": {
        "type": "CallExpression",
        "start": 206,
        "end": 211,
        "callee": {
          "type": "Identifier",
          "start": 206,
          "end": 209,
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
      "start": 213,
      "end": 218,
      "expression": {
        "type": "CallExpression",
        "start": 213,
        "end": 217,
        "callee": {
          "type": "Identifier",
          "start": 213,
          "end": 214,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 215,
            "end": 216,
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
      "start": 219,
      "end": 223,
      "expression": {
        "type": "CallExpression",
        "start": 219,
        "end": 222,
        "callee": {
          "type": "Identifier",
          "start": 219,
          "end": 220,
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
      "start": 224,
      "end": 230,
      "expression": {
        "type": "CallExpression",
        "start": 224,
        "end": 229,
        "callee": {
          "type": "Identifier",
          "start": 224,
          "end": 226,
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 227,
            "end": 228,
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
      "start": 231,
      "end": 240,
      "expression": {
        "type": "CallExpression",
        "start": 231,
        "end": 239,
        "callee": {
          "type": "Identifier",
          "start": 231,
          "end": 233,
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 234,
            "end": 235,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 237,
            "end": 238,
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
      "start": 242,
      "end": 281,
      "id": {
        "type": "Identifier",
        "start": 248,
        "end": 249,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 250,
        "end": 281,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 256,
            "end": 279,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 256,
              "end": 259,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 259,
              "end": 279,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 260,
                  "end": 274,
                  "left": {
                    "type": "Identifier",
                    "start": 260,
                    "end": 270,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 262,
                      "end": 270,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 264,
                        "end": 270
                      }
                    },
                    "decorators": [],
                    "optional": true
                  },
                  "right": {
                    "type": "Literal",
                    "start": 273,
                    "end": 274,
                    "value": 1,
                    "raw": "1"
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 276,
                "end": 279,
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
      "start": 283,
      "end": 292,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 287,
          "end": 291,
          "id": {
            "type": "Identifier",
            "start": 287,
            "end": 291,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 288,
              "end": 291,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 290,
                "end": 291,
                "typeName": {
                  "type": "Identifier",
                  "start": 290,
                  "end": 291,
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
      "start": 293,
      "end": 301,
      "expression": {
        "type": "CallExpression",
        "start": 293,
        "end": 300,
        "callee": {
          "type": "MemberExpression",
          "start": 293,
          "end": 298,
          "object": {
            "type": "Identifier",
            "start": 293,
            "end": 294,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 295,
            "end": 298,
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
      "start": 302,
      "end": 311,
      "expression": {
        "type": "CallExpression",
        "start": 302,
        "end": 310,
        "callee": {
          "type": "MemberExpression",
          "start": 302,
          "end": 307,
          "object": {
            "type": "Identifier",
            "start": 302,
            "end": 303,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 304,
            "end": 307,
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
            "start": 308,
            "end": 309,
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
      "start": 313,
      "end": 378,
      "id": {
        "type": "Identifier",
        "start": 323,
        "end": 324,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 325,
        "end": 378,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 331,
            "end": 340,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 332,
                "end": 338,
                "left": {
                  "type": "Identifier",
                  "start": 332,
                  "end": 334,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": true
                },
                "right": {
                  "type": "Literal",
                  "start": 337,
                  "end": 338,
                  "value": 1,
                  "raw": "1"
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null
          },
          {
            "type": "TSMethodSignature",
            "start": 345,
            "end": 376,
            "key": {
              "type": "Identifier",
              "start": 345,
              "end": 348,
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
                "start": 349,
                "end": 358,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 350,
                  "end": 358,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 352,
                    "end": 358
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "AssignmentPattern",
                "start": 360,
                "end": 374,
                "left": {
                  "type": "Identifier",
                  "start": 360,
                  "end": 370,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 362,
                    "end": 370,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 364,
                      "end": 370
                    }
                  },
                  "decorators": [],
                  "optional": true
                },
                "right": {
                  "type": "Literal",
                  "start": 373,
                  "end": 374,
                  "value": 1,
                  "raw": "1"
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
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
      "start": 380,
      "end": 389,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 384,
          "end": 388,
          "id": {
            "type": "Identifier",
            "start": 384,
            "end": 388,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 385,
              "end": 388,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 387,
                "end": 388,
                "typeName": {
                  "type": "Identifier",
                  "start": 387,
                  "end": 388,
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
      "start": 390,
      "end": 394,
      "expression": {
        "type": "CallExpression",
        "start": 390,
        "end": 393,
        "callee": {
          "type": "Identifier",
          "start": 390,
          "end": 391,
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
      "start": 395,
      "end": 400,
      "expression": {
        "type": "CallExpression",
        "start": 395,
        "end": 399,
        "callee": {
          "type": "Identifier",
          "start": 395,
          "end": 396,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 397,
            "end": 398,
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
      "start": 401,
      "end": 410,
      "expression": {
        "type": "CallExpression",
        "start": 401,
        "end": 409,
        "callee": {
          "type": "MemberExpression",
          "start": 401,
          "end": 406,
          "object": {
            "type": "Identifier",
            "start": 401,
            "end": 402,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 403,
            "end": 406,
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
            "start": 407,
            "end": 408,
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
      "start": 411,
      "end": 423,
      "expression": {
        "type": "CallExpression",
        "start": 411,
        "end": 422,
        "callee": {
          "type": "MemberExpression",
          "start": 411,
          "end": 416,
          "object": {
            "type": "Identifier",
            "start": 411,
            "end": 412,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 413,
            "end": 416,
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
            "start": 417,
            "end": 418,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 420,
            "end": 421,
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
      "start": 425,
      "end": 474,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 429,
          "end": 474,
          "id": {
            "type": "Identifier",
            "start": 429,
            "end": 474,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 430,
              "end": 474,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 432,
                "end": 474,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 438,
                    "end": 455,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "start": 439,
                        "end": 453,
                        "left": {
                          "type": "Identifier",
                          "start": 439,
                          "end": 449,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 441,
                            "end": 449,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 443,
                              "end": 449
                            }
                          },
                          "decorators": [],
                          "optional": true
                        },
                        "right": {
                          "type": "Literal",
                          "start": 452,
                          "end": 453,
                          "value": 1,
                          "raw": "1"
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 460,
                    "end": 472,
                    "key": {
                      "type": "Identifier",
                      "start": 460,
                      "end": 463,
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
                        "type": "AssignmentPattern",
                        "start": 464,
                        "end": 470,
                        "left": {
                          "type": "Identifier",
                          "start": 464,
                          "end": 466,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": true
                        },
                        "right": {
                          "type": "Literal",
                          "start": 469,
                          "end": 470,
                          "value": 1,
                          "raw": "1"
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
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
      "start": 476,
      "end": 480,
      "expression": {
        "type": "CallExpression",
        "start": 476,
        "end": 479,
        "callee": {
          "type": "Identifier",
          "start": 476,
          "end": 477,
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
      "start": 481,
      "end": 486,
      "expression": {
        "type": "CallExpression",
        "start": 481,
        "end": 485,
        "callee": {
          "type": "Identifier",
          "start": 481,
          "end": 482,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 483,
            "end": 484,
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
      "start": 487,
      "end": 495,
      "expression": {
        "type": "CallExpression",
        "start": 487,
        "end": 494,
        "callee": {
          "type": "MemberExpression",
          "start": 487,
          "end": 492,
          "object": {
            "type": "Identifier",
            "start": 487,
            "end": 488,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 489,
            "end": 492,
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
      "start": 496,
      "end": 505,
      "expression": {
        "type": "CallExpression",
        "start": 496,
        "end": 504,
        "callee": {
          "type": "MemberExpression",
          "start": 496,
          "end": 501,
          "object": {
            "type": "Identifier",
            "start": 496,
            "end": 497,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 498,
            "end": 501,
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
            "start": 502,
            "end": 503,
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
      "start": 507,
      "end": 629,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 511,
          "end": 629,
          "id": {
            "type": "Identifier",
            "start": 511,
            "end": 512,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 515,
            "end": 629,
            "properties": [
              {
                "type": "Property",
                "start": 521,
                "end": 544,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 521,
                  "end": 524,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 524,
                  "end": 544,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 525,
                      "end": 539,
                      "left": {
                        "type": "Identifier",
                        "start": 525,
                        "end": 535,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 527,
                          "end": 535,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 529,
                            "end": 535
                          }
                        },
                        "decorators": [],
                        "optional": true
                      },
                      "right": {
                        "type": "Literal",
                        "start": 538,
                        "end": 539,
                        "value": 1,
                        "raw": "1"
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 541,
                    "end": 544,
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
                "start": 550,
                "end": 597,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 550,
                  "end": 551,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 553,
                  "end": 597,
                  "id": {
                    "type": "Identifier",
                    "start": 562,
                    "end": 565,
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
                      "start": 566,
                      "end": 575,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 567,
                        "end": 575,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 569,
                          "end": 575
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "AssignmentPattern",
                      "start": 577,
                      "end": 592,
                      "left": {
                        "type": "Identifier",
                        "start": 577,
                        "end": 587,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 579,
                          "end": 587,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 581,
                            "end": 587
                          }
                        },
                        "decorators": [],
                        "optional": true
                      },
                      "right": {
                        "type": "Literal",
                        "start": 590,
                        "end": 592,
                        "value": "",
                        "raw": "''"
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 594,
                    "end": 597,
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
                "start": 603,
                "end": 627,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 603,
                  "end": 604,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 606,
                  "end": 627,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 607,
                      "end": 619,
                      "left": {
                        "type": "Identifier",
                        "start": 607,
                        "end": 614,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 609,
                          "end": 614,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 611,
                            "end": 614
                          }
                        },
                        "decorators": [],
                        "optional": true
                      },
                      "right": {
                        "type": "Literal",
                        "start": 617,
                        "end": 619,
                        "value": "",
                        "raw": "''"
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 624,
                    "end": 627,
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
      "start": 631,
      "end": 639,
      "expression": {
        "type": "CallExpression",
        "start": 631,
        "end": 638,
        "callee": {
          "type": "MemberExpression",
          "start": 631,
          "end": 636,
          "object": {
            "type": "Identifier",
            "start": 631,
            "end": 632,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 633,
            "end": 636,
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
      "start": 640,
      "end": 649,
      "expression": {
        "type": "CallExpression",
        "start": 640,
        "end": 648,
        "callee": {
          "type": "MemberExpression",
          "start": 640,
          "end": 645,
          "object": {
            "type": "Identifier",
            "start": 640,
            "end": 641,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 642,
            "end": 645,
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
            "start": 646,
            "end": 647,
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
      "start": 650,
      "end": 657,
      "expression": {
        "type": "CallExpression",
        "start": 650,
        "end": 656,
        "callee": {
          "type": "MemberExpression",
          "start": 650,
          "end": 653,
          "object": {
            "type": "Identifier",
            "start": 650,
            "end": 651,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 652,
            "end": 653,
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
            "start": 654,
            "end": 655,
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
      "start": 658,
      "end": 668,
      "expression": {
        "type": "CallExpression",
        "start": 658,
        "end": 667,
        "callee": {
          "type": "MemberExpression",
          "start": 658,
          "end": 661,
          "object": {
            "type": "Identifier",
            "start": 658,
            "end": 659,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 660,
            "end": 661,
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
            "start": 662,
            "end": 663,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 665,
            "end": 666,
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
      "start": 669,
      "end": 675,
      "expression": {
        "type": "CallExpression",
        "start": 669,
        "end": 674,
        "callee": {
          "type": "MemberExpression",
          "start": 669,
          "end": 672,
          "object": {
            "type": "Identifier",
            "start": 669,
            "end": 670,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 671,
            "end": 672,
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
      "start": 676,
      "end": 683,
      "expression": {
        "type": "CallExpression",
        "start": 676,
        "end": 682,
        "callee": {
          "type": "MemberExpression",
          "start": 676,
          "end": 679,
          "object": {
            "type": "Identifier",
            "start": 676,
            "end": 677,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 678,
            "end": 679,
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
            "start": 680,
            "end": 681,
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

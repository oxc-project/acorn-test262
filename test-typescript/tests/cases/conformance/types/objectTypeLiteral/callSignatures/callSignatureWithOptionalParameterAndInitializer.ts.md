__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 87,
  "end": 683,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 87,
      "end": 119,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 116,
        "end": 119,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 99,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 100,
          "end": 114,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 100,
            "end": 110,
            "decorators": [],
            "name": "x",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 110,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 104,
                "end": 110
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 113,
            "end": 114,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 125,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 128,
            "end": 160,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 157,
              "end": 160,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 137,
              "end": 140,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 141,
                "end": 155,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 151,
                  "decorators": [],
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 143,
                    "end": 151,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 145,
                      "end": 151
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 154,
                  "end": 155,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                },
                "typeAnnotation": null
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
      "start": 161,
      "end": 196,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 196,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 167,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 170,
            "end": 196,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 193,
              "end": 196,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 171,
                "end": 180,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 172,
                  "end": 180,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 174,
                    "end": 180
                  }
                }
              },
              {
                "type": "AssignmentPattern",
                "start": 182,
                "end": 188,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 184,
                  "decorators": [],
                  "name": "y",
                  "optional": true,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 187,
                  "end": 188,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                },
                "typeAnnotation": null
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
      "start": 198,
      "end": 205,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 198,
        "end": 204,
        "arguments": [
          {
            "type": "Literal",
            "start": 202,
            "end": 203,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 198,
          "end": 201,
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
      "start": 206,
      "end": 212,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 206,
        "end": 211,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 206,
          "end": 209,
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
      "start": 213,
      "end": 218,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 213,
        "end": 217,
        "arguments": [
          {
            "type": "Literal",
            "start": 215,
            "end": 216,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 213,
          "end": 214,
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
      "start": 219,
      "end": 223,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 219,
        "end": 222,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 219,
          "end": 220,
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
      "start": 224,
      "end": 230,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 224,
        "end": 229,
        "arguments": [
          {
            "type": "Literal",
            "start": 227,
            "end": 228,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 224,
          "end": 226,
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
      "start": 231,
      "end": 240,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 231,
        "end": 239,
        "arguments": [
          {
            "type": "Literal",
            "start": 234,
            "end": 235,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 237,
            "end": 238,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 231,
          "end": 233,
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
      "start": 242,
      "end": 281,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 250,
        "end": 281,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 256,
            "end": 279,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 256,
              "end": 259,
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
              "start": 259,
              "end": 279,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 276,
                "end": 279,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 260,
                  "end": 274,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 260,
                    "end": 270,
                    "decorators": [],
                    "name": "x",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 262,
                      "end": 270,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 264,
                        "end": 270
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 273,
                    "end": 274,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  },
                  "typeAnnotation": null
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
        "start": 248,
        "end": 249,
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
      "start": 283,
      "end": 292,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 287,
          "end": 291,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 287,
            "end": 291,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 288,
              "end": 291,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 290,
                "end": 291,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 290,
                  "end": 291,
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
      "start": 293,
      "end": 301,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 293,
        "end": 300,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 293,
          "end": 298,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 293,
            "end": 294,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 295,
            "end": 298,
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
      "start": 302,
      "end": 311,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 302,
        "end": 310,
        "arguments": [
          {
            "type": "Literal",
            "start": 308,
            "end": 309,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 302,
          "end": 307,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 302,
            "end": 303,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 304,
            "end": 307,
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
      "start": 313,
      "end": 378,
      "body": {
        "type": "TSInterfaceBody",
        "start": 325,
        "end": 378,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 331,
            "end": 340,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 332,
                "end": 338,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 332,
                  "end": 334,
                  "decorators": [],
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 337,
                  "end": 338,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                },
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 345,
            "end": 376,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 345,
              "end": 348,
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
                "start": 349,
                "end": 358,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 350,
                  "end": 358,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 352,
                    "end": 358
                  }
                }
              },
              {
                "type": "AssignmentPattern",
                "start": 360,
                "end": 374,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 360,
                  "end": 370,
                  "decorators": [],
                  "name": "y",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 362,
                    "end": 370,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 364,
                      "end": 370
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 373,
                  "end": 374,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                },
                "typeAnnotation": null
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
        "start": 323,
        "end": 324,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 384,
            "end": 388,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 385,
              "end": 388,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 387,
                "end": 388,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 387,
                  "end": 388,
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
      "start": 390,
      "end": 394,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 390,
        "end": 393,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 390,
          "end": 391,
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
      "start": 395,
      "end": 400,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 395,
        "end": 399,
        "arguments": [
          {
            "type": "Literal",
            "start": 397,
            "end": 398,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 395,
          "end": 396,
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
      "start": 401,
      "end": 410,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 401,
        "end": 409,
        "arguments": [
          {
            "type": "Literal",
            "start": 407,
            "end": 408,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 401,
          "end": 406,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 401,
            "end": 402,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 403,
            "end": 406,
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
      "start": 411,
      "end": 423,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 411,
        "end": 422,
        "arguments": [
          {
            "type": "Literal",
            "start": 417,
            "end": 418,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 420,
            "end": 421,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 411,
          "end": 416,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 411,
            "end": 412,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 413,
            "end": 416,
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
      "start": 425,
      "end": 474,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 429,
          "end": 474,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 429,
            "end": 474,
            "decorators": [],
            "name": "a",
            "optional": false,
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
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "start": 439,
                        "end": 453,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 439,
                          "end": 449,
                          "decorators": [],
                          "name": "x",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 441,
                            "end": 449,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 443,
                              "end": 449
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 452,
                          "end": 453,
                          "raw": "1",
                          "value": 1,
                          "regex": null,
                          "bigint": null
                        },
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 460,
                    "end": 472,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 460,
                      "end": 463,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "start": 464,
                        "end": 470,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 464,
                          "end": 466,
                          "decorators": [],
                          "name": "x",
                          "optional": true,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 469,
                          "end": 470,
                          "raw": "1",
                          "value": 1,
                          "regex": null,
                          "bigint": null
                        },
                        "typeAnnotation": null
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
      "start": 476,
      "end": 480,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 476,
        "end": 479,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 476,
          "end": 477,
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
      "start": 481,
      "end": 486,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 481,
        "end": 485,
        "arguments": [
          {
            "type": "Literal",
            "start": 483,
            "end": 484,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 481,
          "end": 482,
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
      "start": 487,
      "end": 495,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 487,
        "end": 494,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 487,
          "end": 492,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 487,
            "end": 488,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 489,
            "end": 492,
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
      "start": 496,
      "end": 505,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 496,
        "end": 504,
        "arguments": [
          {
            "type": "Literal",
            "start": 502,
            "end": 503,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 496,
          "end": 501,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 496,
            "end": 497,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 498,
            "end": 501,
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
      "start": 507,
      "end": 629,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 511,
          "end": 629,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 511,
            "end": 512,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 521,
                  "end": 524,
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
                  "start": 524,
                  "end": 544,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 541,
                    "end": 544,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 525,
                      "end": 539,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 525,
                        "end": 535,
                        "decorators": [],
                        "name": "x",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 527,
                          "end": 535,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 529,
                            "end": 535
                          }
                        }
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 538,
                        "end": 539,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      },
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 550,
                "end": 597,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 550,
                  "end": 551,
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
                  "start": 553,
                  "end": 597,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 594,
                    "end": 597,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 562,
                    "end": 565,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 566,
                      "end": 575,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 567,
                        "end": 575,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 569,
                          "end": 575
                        }
                      }
                    },
                    {
                      "type": "AssignmentPattern",
                      "start": 577,
                      "end": 592,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 577,
                        "end": 587,
                        "decorators": [],
                        "name": "y",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 579,
                          "end": 587,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 581,
                            "end": 587
                          }
                        }
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 590,
                        "end": 592,
                        "raw": "''",
                        "value": "",
                        "regex": null,
                        "bigint": null
                      },
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 603,
                "end": 627,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 603,
                  "end": 604,
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
                  "start": 606,
                  "end": 627,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 624,
                    "end": 627,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 607,
                      "end": 619,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 607,
                        "end": 614,
                        "decorators": [],
                        "name": "x",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 609,
                          "end": 614,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 611,
                            "end": 614
                          }
                        }
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 617,
                        "end": 619,
                        "raw": "''",
                        "value": "",
                        "regex": null,
                        "bigint": null
                      },
                      "typeAnnotation": null
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
      "start": 631,
      "end": 639,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 631,
        "end": 638,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 631,
          "end": 636,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 631,
            "end": 632,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 633,
            "end": 636,
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
      "start": 640,
      "end": 649,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 640,
        "end": 648,
        "arguments": [
          {
            "type": "Literal",
            "start": 646,
            "end": 647,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 640,
          "end": 645,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 640,
            "end": 641,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 642,
            "end": 645,
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
      "start": 650,
      "end": 657,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 650,
        "end": 656,
        "arguments": [
          {
            "type": "Literal",
            "start": 654,
            "end": 655,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 650,
          "end": 653,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 650,
            "end": 651,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 652,
            "end": 653,
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
      "start": 658,
      "end": 668,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 658,
        "end": 667,
        "arguments": [
          {
            "type": "Literal",
            "start": 662,
            "end": 663,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 665,
            "end": 666,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 658,
          "end": 661,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 658,
            "end": 659,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 660,
            "end": 661,
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
      "start": 669,
      "end": 675,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 669,
        "end": 674,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 669,
          "end": 672,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 669,
            "end": 670,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 671,
            "end": 672,
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
      "start": 676,
      "end": 683,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 676,
        "end": 682,
        "arguments": [
          {
            "type": "Literal",
            "start": 680,
            "end": 681,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 676,
          "end": 679,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 676,
            "end": 677,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 678,
            "end": 679,
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

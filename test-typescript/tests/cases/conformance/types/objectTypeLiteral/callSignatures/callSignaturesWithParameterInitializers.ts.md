__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 77,
  "end": 640,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 77,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 89,
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
          "start": 90,
          "end": 95,
          "left": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 94,
            "end": 95,
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
        "start": 97,
        "end": 100,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 132,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 132,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 106,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 109,
            "end": 132,
            "id": {
              "type": "Identifier",
              "start": 118,
              "end": 121,
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
                "start": 122,
                "end": 127,
                "left": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 126,
                  "end": 127,
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
              "start": 129,
              "end": 132,
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
      "start": 133,
      "end": 167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 167,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 139,
            "name": "f2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 142,
            "end": 167,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 143,
                "end": 152,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 144,
                  "end": 152,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 146,
                    "end": 152
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "AssignmentPattern",
                "start": 154,
                "end": 159,
                "left": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 155,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 158,
                  "end": 159,
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
              "start": 164,
              "end": 167,
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
      "start": 169,
      "end": 176,
      "expression": {
        "type": "CallExpression",
        "start": 169,
        "end": 175,
        "callee": {
          "type": "Identifier",
          "start": 169,
          "end": 172,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 173,
            "end": 174,
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
      "start": 177,
      "end": 183,
      "expression": {
        "type": "CallExpression",
        "start": 177,
        "end": 182,
        "callee": {
          "type": "Identifier",
          "start": 177,
          "end": 180,
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
      "start": 184,
      "end": 189,
      "expression": {
        "type": "CallExpression",
        "start": 184,
        "end": 188,
        "callee": {
          "type": "Identifier",
          "start": 184,
          "end": 185,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 186,
            "end": 187,
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
      "start": 190,
      "end": 194,
      "expression": {
        "type": "CallExpression",
        "start": 190,
        "end": 193,
        "callee": {
          "type": "Identifier",
          "start": 190,
          "end": 191,
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
      "start": 195,
      "end": 201,
      "expression": {
        "type": "CallExpression",
        "start": 195,
        "end": 200,
        "callee": {
          "type": "Identifier",
          "start": 195,
          "end": 197,
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 198,
            "end": 199,
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
      "start": 202,
      "end": 211,
      "expression": {
        "type": "CallExpression",
        "start": 202,
        "end": 210,
        "callee": {
          "type": "Identifier",
          "start": 202,
          "end": 204,
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 205,
            "end": 206,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 208,
            "end": 209,
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
      "start": 213,
      "end": 243,
      "id": {
        "type": "Identifier",
        "start": 219,
        "end": 220,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 221,
        "end": 243,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 227,
            "end": 241,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 227,
              "end": 230,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 230,
              "end": 241,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 231,
                  "end": 236,
                  "left": {
                    "type": "Identifier",
                    "start": 231,
                    "end": 232,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 235,
                    "end": 236,
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
                "start": 238,
                "end": 241,
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
      "start": 245,
      "end": 254,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 249,
          "end": 253,
          "id": {
            "type": "Identifier",
            "start": 249,
            "end": 253,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 250,
              "end": 253,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 252,
                "end": 253,
                "typeName": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 253,
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
      "start": 255,
      "end": 263,
      "expression": {
        "type": "CallExpression",
        "start": 255,
        "end": 262,
        "callee": {
          "type": "MemberExpression",
          "start": 255,
          "end": 260,
          "object": {
            "type": "Identifier",
            "start": 255,
            "end": 256,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 257,
            "end": 260,
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
      "start": 264,
      "end": 273,
      "expression": {
        "type": "CallExpression",
        "start": 264,
        "end": 272,
        "callee": {
          "type": "MemberExpression",
          "start": 264,
          "end": 269,
          "object": {
            "type": "Identifier",
            "start": 264,
            "end": 265,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 266,
            "end": 269,
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
            "start": 270,
            "end": 271,
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
      "start": 295,
      "end": 350,
      "id": {
        "type": "Identifier",
        "start": 305,
        "end": 306,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 307,
        "end": 350,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 313,
            "end": 321,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 314,
                "end": 319,
                "left": {
                  "type": "Identifier",
                  "start": 314,
                  "end": 315,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 318,
                  "end": 319,
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
            "start": 326,
            "end": 348,
            "key": {
              "type": "Identifier",
              "start": 326,
              "end": 329,
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
                "start": 330,
                "end": 339,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 331,
                  "end": 339,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 333,
                    "end": 339
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "AssignmentPattern",
                "start": 341,
                "end": 346,
                "left": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 342,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 345,
                  "end": 346,
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
      "start": 352,
      "end": 361,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 356,
          "end": 360,
          "id": {
            "type": "Identifier",
            "start": 356,
            "end": 360,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 357,
              "end": 360,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 359,
                "end": 360,
                "typeName": {
                  "type": "Identifier",
                  "start": 359,
                  "end": 360,
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
      "start": 362,
      "end": 366,
      "expression": {
        "type": "CallExpression",
        "start": 362,
        "end": 365,
        "callee": {
          "type": "Identifier",
          "start": 362,
          "end": 363,
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
      "start": 367,
      "end": 372,
      "expression": {
        "type": "CallExpression",
        "start": 367,
        "end": 371,
        "callee": {
          "type": "Identifier",
          "start": 367,
          "end": 368,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 369,
            "end": 370,
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
      "start": 373,
      "end": 382,
      "expression": {
        "type": "CallExpression",
        "start": 373,
        "end": 381,
        "callee": {
          "type": "MemberExpression",
          "start": 373,
          "end": 378,
          "object": {
            "type": "Identifier",
            "start": 373,
            "end": 374,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 375,
            "end": 378,
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
            "start": 379,
            "end": 380,
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
      "start": 383,
      "end": 395,
      "expression": {
        "type": "CallExpression",
        "start": 383,
        "end": 394,
        "callee": {
          "type": "MemberExpression",
          "start": 383,
          "end": 388,
          "object": {
            "type": "Identifier",
            "start": 383,
            "end": 384,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 385,
            "end": 388,
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
            "start": 389,
            "end": 390,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 392,
            "end": 393,
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
      "start": 417,
      "end": 456,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 421,
          "end": 456,
          "id": {
            "type": "Identifier",
            "start": 421,
            "end": 456,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 422,
              "end": 456,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 424,
                "end": 456,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 430,
                    "end": 438,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "start": 431,
                        "end": 436,
                        "left": {
                          "type": "Identifier",
                          "start": 431,
                          "end": 432,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 435,
                          "end": 436,
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
                    "start": 443,
                    "end": 454,
                    "key": {
                      "type": "Identifier",
                      "start": 443,
                      "end": 446,
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
                        "start": 447,
                        "end": 452,
                        "left": {
                          "type": "Identifier",
                          "start": 447,
                          "end": 448,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 451,
                          "end": 452,
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
      "start": 458,
      "end": 462,
      "expression": {
        "type": "CallExpression",
        "start": 458,
        "end": 461,
        "callee": {
          "type": "Identifier",
          "start": 458,
          "end": 459,
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
      "start": 463,
      "end": 468,
      "expression": {
        "type": "CallExpression",
        "start": 463,
        "end": 467,
        "callee": {
          "type": "Identifier",
          "start": 463,
          "end": 464,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 465,
            "end": 466,
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
      "start": 469,
      "end": 477,
      "expression": {
        "type": "CallExpression",
        "start": 469,
        "end": 476,
        "callee": {
          "type": "MemberExpression",
          "start": 469,
          "end": 474,
          "object": {
            "type": "Identifier",
            "start": 469,
            "end": 470,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 471,
            "end": 474,
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
      "start": 478,
      "end": 487,
      "expression": {
        "type": "CallExpression",
        "start": 478,
        "end": 486,
        "callee": {
          "type": "MemberExpression",
          "start": 478,
          "end": 483,
          "object": {
            "type": "Identifier",
            "start": 478,
            "end": 479,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 480,
            "end": 483,
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
            "start": 484,
            "end": 485,
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
      "start": 489,
      "end": 585,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 493,
          "end": 585,
          "id": {
            "type": "Identifier",
            "start": 493,
            "end": 494,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 497,
            "end": 585,
            "properties": [
              {
                "type": "Property",
                "start": 503,
                "end": 517,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 503,
                  "end": 506,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 506,
                  "end": 517,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 507,
                      "end": 512,
                      "left": {
                        "type": "Identifier",
                        "start": 507,
                        "end": 508,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 511,
                        "end": 512,
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
                    "start": 514,
                    "end": 517,
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
                "start": 523,
                "end": 560,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 523,
                  "end": 524,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 526,
                  "end": 560,
                  "id": {
                    "type": "Identifier",
                    "start": 535,
                    "end": 538,
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
                      "start": 539,
                      "end": 548,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 540,
                        "end": 548,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 542,
                          "end": 548
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "AssignmentPattern",
                      "start": 550,
                      "end": 555,
                      "left": {
                        "type": "Identifier",
                        "start": 550,
                        "end": 551,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 554,
                        "end": 555,
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
                    "start": 557,
                    "end": 560,
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
                "start": 566,
                "end": 583,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 566,
                  "end": 567,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 569,
                  "end": 583,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 570,
                      "end": 575,
                      "left": {
                        "type": "Identifier",
                        "start": 570,
                        "end": 571,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 574,
                        "end": 575,
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
                    "start": 580,
                    "end": 583,
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
      "start": 587,
      "end": 595,
      "expression": {
        "type": "CallExpression",
        "start": 587,
        "end": 594,
        "callee": {
          "type": "MemberExpression",
          "start": 587,
          "end": 592,
          "object": {
            "type": "Identifier",
            "start": 587,
            "end": 588,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 589,
            "end": 592,
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
      "start": 596,
      "end": 605,
      "expression": {
        "type": "CallExpression",
        "start": 596,
        "end": 604,
        "callee": {
          "type": "MemberExpression",
          "start": 596,
          "end": 601,
          "object": {
            "type": "Identifier",
            "start": 596,
            "end": 597,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 598,
            "end": 601,
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
            "start": 602,
            "end": 603,
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
      "start": 606,
      "end": 613,
      "expression": {
        "type": "CallExpression",
        "start": 606,
        "end": 612,
        "callee": {
          "type": "MemberExpression",
          "start": 606,
          "end": 609,
          "object": {
            "type": "Identifier",
            "start": 606,
            "end": 607,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 608,
            "end": 609,
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
            "start": 610,
            "end": 611,
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
      "start": 614,
      "end": 624,
      "expression": {
        "type": "CallExpression",
        "start": 614,
        "end": 623,
        "callee": {
          "type": "MemberExpression",
          "start": 614,
          "end": 617,
          "object": {
            "type": "Identifier",
            "start": 614,
            "end": 615,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 616,
            "end": 617,
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
            "start": 618,
            "end": 619,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 621,
            "end": 622,
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
      "start": 625,
      "end": 631,
      "expression": {
        "type": "CallExpression",
        "start": 625,
        "end": 630,
        "callee": {
          "type": "MemberExpression",
          "start": 625,
          "end": 628,
          "object": {
            "type": "Identifier",
            "start": 625,
            "end": 626,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 627,
            "end": 628,
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
      "start": 632,
      "end": 639,
      "expression": {
        "type": "CallExpression",
        "start": 632,
        "end": 638,
        "callee": {
          "type": "MemberExpression",
          "start": 632,
          "end": 635,
          "object": {
            "type": "Identifier",
            "start": 632,
            "end": 633,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 634,
            "end": 635,
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
            "start": 636,
            "end": 637,
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

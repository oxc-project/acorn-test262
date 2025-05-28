__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 95,
  "end": 775,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 95,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 106,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 107,
        "end": 122,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 109,
            "end": 120,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 112,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 112,
              "end": 120,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 114,
                "end": 120
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
      "type": "TSInterfaceDeclaration",
      "start": 123,
      "end": 161,
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 134,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 143,
          "end": 144,
          "expression": {
            "type": "Identifier",
            "start": 143,
            "end": 144,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 145,
        "end": 161,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 147,
            "end": 159,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 150,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 150,
              "end": 158,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 152,
                "end": 158
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
      "type": "TSInterfaceDeclaration",
      "start": 162,
      "end": 201,
      "id": {
        "type": "Identifier",
        "start": 172,
        "end": 173,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 182,
          "end": 183,
          "expression": {
            "type": "Identifier",
            "start": 182,
            "end": 183,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 184,
        "end": 201,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 186,
            "end": 199,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 186,
              "end": 189,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 189,
              "end": 198,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 191,
                "end": 198
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
      "start": 202,
      "end": 211,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 206,
          "end": 210,
          "id": {
            "type": "Identifier",
            "start": 206,
            "end": 210,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 207,
              "end": 210,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 209,
                "end": 210,
                "typeName": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 210,
                  "decorators": [],
                  "name": "A",
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
      "start": 212,
      "end": 221,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 220,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 220,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 217,
              "end": 220,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 219,
                "end": 220,
                "typeName": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 220,
                  "decorators": [],
                  "name": "B",
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
      "start": 222,
      "end": 231,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 230,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 230,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 227,
              "end": 230,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 229,
                "end": 230,
                "typeName": {
                  "type": "Identifier",
                  "start": 229,
                  "end": 230,
                  "decorators": [],
                  "name": "C",
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
      "type": "FunctionDeclaration",
      "start": 233,
      "end": 289,
      "id": {
        "type": "Identifier",
        "start": 242,
        "end": 245,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 245,
        "end": 254,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 246,
            "end": 247,
            "name": {
              "type": "Identifier",
              "start": 246,
              "end": 247,
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
            "start": 249,
            "end": 250,
            "name": {
              "type": "Identifier",
              "start": 249,
              "end": 250,
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
            "start": 252,
            "end": 253,
            "name": {
              "type": "Identifier",
              "start": 252,
              "end": 253,
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
      "params": [
        {
          "type": "Identifier",
          "start": 255,
          "end": 259,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 261,
          "end": 265,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 262,
            "end": 265,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 264,
              "end": 265,
              "typeName": {
                "type": "Identifier",
                "start": 264,
                "end": 265,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 267,
          "end": 271,
          "decorators": [],
          "name": "z",
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
                "name": "V",
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
        "start": 272,
        "end": 275,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 274,
          "end": 275,
          "typeName": {
            "type": "Identifier",
            "start": 274,
            "end": 275,
            "decorators": [],
            "name": "V",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 276,
        "end": 289,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 278,
            "end": 287,
            "argument": {
              "type": "Identifier",
              "start": 285,
              "end": 286,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 370,
      "end": 383,
      "expression": {
        "type": "CallExpression",
        "start": 370,
        "end": 382,
        "callee": {
          "type": "Identifier",
          "start": 370,
          "end": 373,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 374,
            "end": 375,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 377,
            "end": 378,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 380,
            "end": 381,
            "value": 3,
            "raw": "3"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 384,
      "end": 441,
      "expression": {
        "type": "CallExpression",
        "start": 384,
        "end": 440,
        "callee": {
          "type": "Identifier",
          "start": 384,
          "end": 387,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 388,
            "end": 396,
            "properties": [
              {
                "type": "Property",
                "start": 390,
                "end": 394,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 390,
                  "end": 391,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 393,
                  "end": 394,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 398,
            "end": 413,
            "properties": [
              {
                "type": "Property",
                "start": 400,
                "end": 404,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 400,
                  "end": 401,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 403,
                  "end": 404,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 406,
                "end": 411,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 406,
                  "end": 407,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 409,
                  "end": 411,
                  "value": "",
                  "raw": "''"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 415,
            "end": 439,
            "properties": [
              {
                "type": "Property",
                "start": 417,
                "end": 421,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 417,
                  "end": 418,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 420,
                  "end": 421,
                  "value": 2,
                  "raw": "2"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 423,
                "end": 428,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 423,
                  "end": 424,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 426,
                  "end": 428,
                  "value": "",
                  "raw": "''"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 430,
                "end": 437,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 430,
                  "end": 431,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 433,
                  "end": 437,
                  "value": true,
                  "raw": "true"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 442,
      "end": 455,
      "expression": {
        "type": "CallExpression",
        "start": 442,
        "end": 454,
        "callee": {
          "type": "Identifier",
          "start": 442,
          "end": 445,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 446,
            "end": 447,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 449,
            "end": 450,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 452,
            "end": 453,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 456,
      "end": 497,
      "expression": {
        "type": "CallExpression",
        "start": 456,
        "end": 496,
        "callee": {
          "type": "Identifier",
          "start": 456,
          "end": 459,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 460,
            "end": 461,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 463,
            "end": 464,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "ObjectExpression",
            "start": 466,
            "end": 495,
            "properties": [
              {
                "type": "Property",
                "start": 468,
                "end": 474,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 471,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 473,
                  "end": 474,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 476,
                "end": 483,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 476,
                  "end": 479,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 481,
                  "end": 483,
                  "value": "",
                  "raw": "''"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 485,
                "end": 493,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 485,
                  "end": 487,
                  "decorators": [],
                  "name": "hm",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 489,
                  "end": 493,
                  "value": true,
                  "raw": "true"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 498,
      "end": 548,
      "expression": {
        "type": "CallExpression",
        "start": 498,
        "end": 547,
        "callee": {
          "type": "Identifier",
          "start": 498,
          "end": 501,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 502,
            "end": 523,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 503,
                "end": 512,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 504,
                  "end": 512,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 506,
                    "end": 512
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 514,
                "end": 515,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 520,
              "end": 523,
              "body": []
            },
            "id": null,
            "generator": false
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 525,
            "end": 535,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 526,
                "end": 527,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 532,
              "end": 535,
              "body": []
            },
            "id": null,
            "generator": false
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 537,
            "end": 546,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 543,
              "end": 546,
              "body": []
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 550,
      "end": 617,
      "id": {
        "type": "Identifier",
        "start": 559,
        "end": 563,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 563,
        "end": 582,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 564,
            "end": 575,
            "name": {
              "type": "Identifier",
              "start": 564,
              "end": 565,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 574,
              "end": 575,
              "typeName": {
                "type": "Identifier",
                "start": 574,
                "end": 575,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 577,
            "end": 578,
            "name": {
              "type": "Identifier",
              "start": 577,
              "end": 578,
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
            "start": 580,
            "end": 581,
            "name": {
              "type": "Identifier",
              "start": 580,
              "end": 581,
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
      "params": [
        {
          "type": "Identifier",
          "start": 583,
          "end": 587,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 584,
            "end": 587,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 586,
              "end": 587,
              "typeName": {
                "type": "Identifier",
                "start": 586,
                "end": 587,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 589,
          "end": 593,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 590,
            "end": 593,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 592,
              "end": 593,
              "typeName": {
                "type": "Identifier",
                "start": 592,
                "end": 593,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 595,
          "end": 599,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 596,
            "end": 599,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 598,
              "end": 599,
              "typeName": {
                "type": "Identifier",
                "start": 598,
                "end": 599,
                "decorators": [],
                "name": "V",
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
        "start": 600,
        "end": 603,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 602,
          "end": 603,
          "typeName": {
            "type": "Identifier",
            "start": 602,
            "end": 603,
            "decorators": [],
            "name": "V",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 604,
        "end": 617,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 606,
            "end": 615,
            "argument": {
              "type": "Identifier",
              "start": 613,
              "end": 614,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 708,
      "end": 721,
      "expression": {
        "type": "CallExpression",
        "start": 708,
        "end": 720,
        "callee": {
          "type": "Identifier",
          "start": 708,
          "end": 711,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 712,
            "end": 713,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 715,
            "end": 716,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 718,
            "end": 719,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 722,
      "end": 735,
      "expression": {
        "type": "CallExpression",
        "start": 722,
        "end": 734,
        "callee": {
          "type": "Identifier",
          "start": 722,
          "end": 725,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 726,
            "end": 727,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 729,
            "end": 730,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 732,
            "end": 733,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 736,
      "end": 775,
      "expression": {
        "type": "CallExpression",
        "start": 736,
        "end": 774,
        "callee": {
          "type": "Identifier",
          "start": 736,
          "end": 739,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 740,
            "end": 741,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 743,
            "end": 744,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "ObjectExpression",
            "start": 746,
            "end": 773,
            "properties": [
              {
                "type": "Property",
                "start": 748,
                "end": 754,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 748,
                  "end": 751,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 753,
                  "end": 754,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 756,
                "end": 763,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 756,
                  "end": 759,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 761,
                  "end": 763,
                  "value": "",
                  "raw": "''"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 765,
                "end": 771,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 765,
                  "end": 767,
                  "decorators": [],
                  "name": "hm",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 769,
                  "end": 771,
                  "value": "",
                  "raw": "''"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

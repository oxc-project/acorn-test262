__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1317,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 20,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSDeclareFunction",
      "start": 23,
      "end": 79,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 43,
        "decorators": [],
        "name": "f03",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 43,
        "end": 70,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 44,
            "end": 69,
            "name": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 54,
              "end": 60
            },
            "default": {
              "type": "TSNumberKeyword",
              "start": 63,
              "end": 69
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 72,
        "end": 78,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 74,
          "end": 78
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 89,
      "end": 158,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 109,
        "decorators": [],
        "name": "f04",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 109,
        "end": 149,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 110,
            "end": 126,
            "name": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 120,
              "end": 126
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 128,
            "end": 148,
            "name": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 138,
              "end": 144
            },
            "default": {
              "type": "TSTypeReference",
              "start": 147,
              "end": 148,
              "typeName": {
                "type": "Identifier",
                "start": 147,
                "end": 148,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 151,
        "end": 157,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 153,
          "end": 157
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 168,
      "end": 222,
      "id": {
        "type": "Identifier",
        "start": 185,
        "end": 188,
        "decorators": [],
        "name": "f05",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 188,
        "end": 213,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 189,
            "end": 190,
            "name": {
              "type": "Identifier",
              "start": 189,
              "end": 190,
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
            "start": 192,
            "end": 212,
            "name": {
              "type": "Identifier",
              "start": 192,
              "end": 193,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 202,
              "end": 208
            },
            "default": {
              "type": "TSTypeReference",
              "start": 211,
              "end": 212,
              "typeName": {
                "type": "Identifier",
                "start": 211,
                "end": 212,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 215,
        "end": 221,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 217,
          "end": 221
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 232,
      "end": 286,
      "id": {
        "type": "Identifier",
        "start": 249,
        "end": 252,
        "decorators": [],
        "name": "f06",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 252,
        "end": 277,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 253,
            "end": 254,
            "name": {
              "type": "Identifier",
              "start": 253,
              "end": 254,
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
            "start": 256,
            "end": 276,
            "name": {
              "type": "Identifier",
              "start": 256,
              "end": 257,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 266,
              "end": 267,
              "typeName": {
                "type": "Identifier",
                "start": 266,
                "end": 267,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSNumberKeyword",
              "start": 270,
              "end": 276
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 279,
        "end": 285,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 281,
          "end": 285
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 297,
      "end": 344,
      "id": {
        "type": "Identifier",
        "start": 314,
        "end": 317,
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 317,
        "end": 335,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 318,
            "end": 319,
            "name": {
              "type": "Identifier",
              "start": 318,
              "end": 319,
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
            "start": 321,
            "end": 322,
            "name": {
              "type": "Identifier",
              "start": 321,
              "end": 322,
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
            "start": 324,
            "end": 334,
            "name": {
              "type": "Identifier",
              "start": 324,
              "end": 325,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSNumberKeyword",
              "start": 328,
              "end": 334
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 337,
        "end": 343,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 339,
          "end": 343
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 345,
      "end": 351,
      "expression": {
        "type": "CallExpression",
        "start": 345,
        "end": 350,
        "callee": {
          "type": "Identifier",
          "start": 345,
          "end": 348,
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 358,
      "end": 367,
      "expression": {
        "type": "CallExpression",
        "start": 358,
        "end": 366,
        "callee": {
          "type": "Identifier",
          "start": 358,
          "end": 361,
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 361,
          "end": 364,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 362,
              "end": 363,
              "literal": {
                "type": "Literal",
                "start": 362,
                "end": 363,
                "value": 1,
                "raw": "1"
              }
            }
          ]
        },
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 377,
      "end": 389,
      "expression": {
        "type": "CallExpression",
        "start": 377,
        "end": 388,
        "callee": {
          "type": "Identifier",
          "start": 377,
          "end": 380,
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 380,
          "end": 386,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 381,
              "end": 382,
              "literal": {
                "type": "Literal",
                "start": 381,
                "end": 382,
                "value": 1,
                "raw": "1"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 384,
              "end": 385,
              "literal": {
                "type": "Literal",
                "start": 384,
                "end": 385,
                "value": 2,
                "raw": "2"
              }
            }
          ]
        },
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 396,
      "end": 411,
      "expression": {
        "type": "CallExpression",
        "start": 396,
        "end": 410,
        "callee": {
          "type": "Identifier",
          "start": 396,
          "end": 399,
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 399,
          "end": 408,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 400,
              "end": 401,
              "literal": {
                "type": "Literal",
                "start": 400,
                "end": 401,
                "value": 1,
                "raw": "1"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 403,
              "end": 404,
              "literal": {
                "type": "Literal",
                "start": 403,
                "end": 404,
                "value": 2,
                "raw": "2"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 406,
              "end": 407,
              "literal": {
                "type": "Literal",
                "start": 406,
                "end": 407,
                "value": 3,
                "raw": "3"
              }
            }
          ]
        },
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 418,
      "end": 436,
      "expression": {
        "type": "CallExpression",
        "start": 418,
        "end": 435,
        "callee": {
          "type": "Identifier",
          "start": 418,
          "end": 421,
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 421,
          "end": 433,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 422,
              "end": 423,
              "literal": {
                "type": "Literal",
                "start": 422,
                "end": 423,
                "value": 1,
                "raw": "1"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 425,
              "end": 426,
              "literal": {
                "type": "Literal",
                "start": 425,
                "end": 426,
                "value": 2,
                "raw": "2"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 428,
              "end": 429,
              "literal": {
                "type": "Literal",
                "start": 428,
                "end": 429,
                "value": 3,
                "raw": "3"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 431,
              "end": 432,
              "literal": {
                "type": "Literal",
                "start": 431,
                "end": 432,
                "value": 4,
                "raw": "4"
              }
            }
          ]
        },
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 447,
      "end": 491,
      "id": {
        "type": "Identifier",
        "start": 464,
        "end": 467,
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 467,
        "end": 477,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 468,
            "end": 469,
            "name": {
              "type": "Identifier",
              "start": 468,
              "end": 469,
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
            "start": 471,
            "end": 476,
            "name": {
              "type": "Identifier",
              "start": 471,
              "end": 472,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 475,
              "end": 476,
              "typeName": {
                "type": "Identifier",
                "start": 475,
                "end": 476,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 478,
          "end": 483,
          "decorators": [],
          "name": "a",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 480,
            "end": 483,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 482,
              "end": 483,
              "typeName": {
                "type": "Identifier",
                "start": 482,
                "end": 483,
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
        "start": 484,
        "end": 490,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 486,
          "end": 490
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 492,
      "end": 506,
      "expression": {
        "type": "CallExpression",
        "start": 492,
        "end": 505,
        "callee": {
          "type": "Identifier",
          "start": 492,
          "end": 495,
          "decorators": [],
          "name": "f12",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 495,
          "end": 503,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 496,
              "end": 502
            }
          ]
        },
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 513,
      "end": 530,
      "expression": {
        "type": "CallExpression",
        "start": 513,
        "end": 529,
        "callee": {
          "type": "Identifier",
          "start": 513,
          "end": 516,
          "decorators": [],
          "name": "f12",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 516,
          "end": 524,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 517,
              "end": 523
            }
          ]
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 525,
            "end": 528,
            "value": "a",
            "raw": "\"a\""
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 541,
      "end": 561,
      "id": {
        "type": "Identifier",
        "start": 551,
        "end": 554,
        "decorators": [],
        "name": "i00",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 554,
        "end": 557,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 555,
            "end": 556,
            "name": {
              "type": "Identifier",
              "start": 555,
              "end": 556,
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
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 558,
        "end": 561,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 568,
      "end": 597,
      "id": {
        "type": "Identifier",
        "start": 578,
        "end": 581,
        "decorators": [],
        "name": "i00",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 581,
        "end": 593,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 582,
            "end": 592,
            "name": {
              "type": "Identifier",
              "start": 582,
              "end": 583,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSNumberKeyword",
              "start": 586,
              "end": 592
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 594,
        "end": 597,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 608,
      "end": 637,
      "id": {
        "type": "Identifier",
        "start": 618,
        "end": 621,
        "decorators": [],
        "name": "i01",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 621,
        "end": 633,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 622,
            "end": 632,
            "name": {
              "type": "Identifier",
              "start": 622,
              "end": 623,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSNumberKeyword",
              "start": 626,
              "end": 632
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 634,
        "end": 637,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 644,
      "end": 673,
      "id": {
        "type": "Identifier",
        "start": 654,
        "end": 657,
        "decorators": [],
        "name": "i01",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 657,
        "end": 669,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 658,
            "end": 668,
            "name": {
              "type": "Identifier",
              "start": 658,
              "end": 659,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSStringKeyword",
              "start": 662,
              "end": 668
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 670,
        "end": 673,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 684,
      "end": 716,
      "id": {
        "type": "Identifier",
        "start": 694,
        "end": 697,
        "decorators": [],
        "name": "i04",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 697,
        "end": 712,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 698,
            "end": 708,
            "name": {
              "type": "Identifier",
              "start": 698,
              "end": 699,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSNumberKeyword",
              "start": 702,
              "end": 708
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 710,
            "end": 711,
            "name": {
              "type": "Identifier",
              "start": 710,
              "end": 711,
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
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 713,
        "end": 716,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 726,
      "end": 770,
      "id": {
        "type": "Identifier",
        "start": 736,
        "end": 739,
        "decorators": [],
        "name": "i05",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 739,
        "end": 766,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 740,
            "end": 765,
            "name": {
              "type": "Identifier",
              "start": 740,
              "end": 741,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 750,
              "end": 756
            },
            "default": {
              "type": "TSNumberKeyword",
              "start": 759,
              "end": 765
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 767,
        "end": 770,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 780,
      "end": 837,
      "id": {
        "type": "Identifier",
        "start": 790,
        "end": 793,
        "decorators": [],
        "name": "i06",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 793,
        "end": 833,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 794,
            "end": 810,
            "name": {
              "type": "Identifier",
              "start": 794,
              "end": 795,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 804,
              "end": 810
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 812,
            "end": 832,
            "name": {
              "type": "Identifier",
              "start": 812,
              "end": 813,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 822,
              "end": 828
            },
            "default": {
              "type": "TSTypeReference",
              "start": 831,
              "end": 832,
              "typeName": {
                "type": "Identifier",
                "start": 831,
                "end": 832,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 834,
        "end": 837,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 847,
      "end": 889,
      "id": {
        "type": "Identifier",
        "start": 857,
        "end": 860,
        "decorators": [],
        "name": "i07",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 860,
        "end": 885,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 861,
            "end": 862,
            "name": {
              "type": "Identifier",
              "start": 861,
              "end": 862,
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
            "start": 864,
            "end": 884,
            "name": {
              "type": "Identifier",
              "start": 864,
              "end": 865,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 874,
              "end": 880
            },
            "default": {
              "type": "TSTypeReference",
              "start": 883,
              "end": 884,
              "typeName": {
                "type": "Identifier",
                "start": 883,
                "end": 884,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 886,
        "end": 889,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 899,
      "end": 941,
      "id": {
        "type": "Identifier",
        "start": 909,
        "end": 912,
        "decorators": [],
        "name": "i08",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 912,
        "end": 937,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 913,
            "end": 914,
            "name": {
              "type": "Identifier",
              "start": 913,
              "end": 914,
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
            "start": 916,
            "end": 936,
            "name": {
              "type": "Identifier",
              "start": 916,
              "end": 917,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 926,
              "end": 927,
              "typeName": {
                "type": "Identifier",
                "start": 926,
                "end": 927,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSNumberKeyword",
              "start": 930,
              "end": 936
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 938,
        "end": 941,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 952,
      "end": 987,
      "id": {
        "type": "Identifier",
        "start": 962,
        "end": 965,
        "decorators": [],
        "name": "i09",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 965,
        "end": 983,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 966,
            "end": 967,
            "name": {
              "type": "Identifier",
              "start": 966,
              "end": 967,
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
            "start": 969,
            "end": 970,
            "name": {
              "type": "Identifier",
              "start": 969,
              "end": 970,
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
            "start": 972,
            "end": 982,
            "name": {
              "type": "Identifier",
              "start": 972,
              "end": 973,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSNumberKeyword",
              "start": 976,
              "end": 982
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 984,
        "end": 987,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 988,
      "end": 1006,
      "id": {
        "type": "Identifier",
        "start": 993,
        "end": 999,
        "decorators": [],
        "name": "i09t00",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1002,
        "end": 1005,
        "typeName": {
          "type": "Identifier",
          "start": 1002,
          "end": 1005,
          "decorators": [],
          "name": "i09",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1016,
      "end": 1037,
      "id": {
        "type": "Identifier",
        "start": 1021,
        "end": 1027,
        "decorators": [],
        "name": "i09t01",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1030,
        "end": 1036,
        "typeName": {
          "type": "Identifier",
          "start": 1030,
          "end": 1033,
          "decorators": [],
          "name": "i09",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1033,
          "end": 1036,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 1034,
              "end": 1035,
              "literal": {
                "type": "Literal",
                "start": 1034,
                "end": 1035,
                "value": 1,
                "raw": "1"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1047,
      "end": 1071,
      "id": {
        "type": "Identifier",
        "start": 1052,
        "end": 1058,
        "decorators": [],
        "name": "i09t02",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1061,
        "end": 1070,
        "typeName": {
          "type": "Identifier",
          "start": 1061,
          "end": 1064,
          "decorators": [],
          "name": "i09",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1064,
          "end": 1070,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 1065,
              "end": 1066,
              "literal": {
                "type": "Literal",
                "start": 1065,
                "end": 1066,
                "value": 1,
                "raw": "1"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 1068,
              "end": 1069,
              "literal": {
                "type": "Literal",
                "start": 1068,
                "end": 1069,
                "value": 2,
                "raw": "2"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1078,
      "end": 1105,
      "id": {
        "type": "Identifier",
        "start": 1083,
        "end": 1089,
        "decorators": [],
        "name": "i09t03",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1092,
        "end": 1104,
        "typeName": {
          "type": "Identifier",
          "start": 1092,
          "end": 1095,
          "decorators": [],
          "name": "i09",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1095,
          "end": 1104,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 1096,
              "end": 1097,
              "literal": {
                "type": "Literal",
                "start": 1096,
                "end": 1097,
                "value": 1,
                "raw": "1"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 1099,
              "end": 1100,
              "literal": {
                "type": "Literal",
                "start": 1099,
                "end": 1100,
                "value": 2,
                "raw": "2"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 1102,
              "end": 1103,
              "literal": {
                "type": "Literal",
                "start": 1102,
                "end": 1103,
                "value": 3,
                "raw": "3"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1112,
      "end": 1142,
      "id": {
        "type": "Identifier",
        "start": 1117,
        "end": 1123,
        "decorators": [],
        "name": "i09t04",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1126,
        "end": 1141,
        "typeName": {
          "type": "Identifier",
          "start": 1126,
          "end": 1129,
          "decorators": [],
          "name": "i09",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1129,
          "end": 1141,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 1130,
              "end": 1131,
              "literal": {
                "type": "Literal",
                "start": 1130,
                "end": 1131,
                "value": 1,
                "raw": "1"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 1133,
              "end": 1134,
              "literal": {
                "type": "Literal",
                "start": 1133,
                "end": 1134,
                "value": 2,
                "raw": "2"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 1136,
              "end": 1137,
              "literal": {
                "type": "Literal",
                "start": 1136,
                "end": 1137,
                "value": 3,
                "raw": "3"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 1139,
              "end": 1140,
              "literal": {
                "type": "Literal",
                "start": 1139,
                "end": 1140,
                "value": 4,
                "raw": "4"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1153,
      "end": 1176,
      "id": {
        "type": "Identifier",
        "start": 1163,
        "end": 1166,
        "decorators": [],
        "name": "i10",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1167,
        "end": 1176,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1169,
            "end": 1174,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1169,
              "end": 1170,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1170,
              "end": 1173,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1172,
                "end": 1173,
                "typeName": {
                  "type": "Identifier",
                  "start": 1172,
                  "end": 1173,
                  "decorators": [],
                  "name": "T",
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
      "type": "TSInterfaceDeclaration",
      "start": 1186,
      "end": 1214,
      "id": {
        "type": "Identifier",
        "start": 1196,
        "end": 1199,
        "decorators": [],
        "name": "i10",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1199,
        "end": 1211,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1200,
            "end": 1210,
            "name": {
              "type": "Identifier",
              "start": 1200,
              "end": 1201,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSNumberKeyword",
              "start": 1204,
              "end": 1210
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1212,
        "end": 1214,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1272,
      "end": 1317,
      "id": {
        "type": "Identifier",
        "start": 1282,
        "end": 1295,
        "decorators": [],
        "name": "SelfReference",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1295,
        "end": 1314,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1296,
            "end": 1313,
            "name": {
              "type": "Identifier",
              "start": 1296,
              "end": 1297,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 1300,
              "end": 1313,
              "typeName": {
                "type": "Identifier",
                "start": 1300,
                "end": 1313,
                "decorators": [],
                "name": "SelfReference",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1315,
        "end": 1317,
        "body": []
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

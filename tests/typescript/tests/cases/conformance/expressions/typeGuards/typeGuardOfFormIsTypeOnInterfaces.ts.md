__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 23,
                  "end": 25
                },
                "typeArguments": null,
                "start": 23,
                "end": 25
              },
              "start": 21,
              "end": 25
            },
            "start": 19,
            "end": 26
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 40
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 44
                },
                "typeArguments": null,
                "start": 42,
                "end": 44
              },
              "start": 40,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 31,
            "end": 45
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 52
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 54,
                "end": 60
              },
              "start": 52,
              "end": 60
            },
            "accessibility": null,
            "static": false,
            "start": 50,
            "end": 61
          }
        ],
        "start": 13,
        "end": 63
      },
      "declare": false,
      "start": 0,
      "end": 63
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 76
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 89
                },
                "typeArguments": null,
                "start": 87,
                "end": 89
              },
              "start": 85,
              "end": 89
            },
            "start": 83,
            "end": 90
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 104
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 106,
                  "end": 108
                },
                "typeArguments": null,
                "start": 106,
                "end": 108
              },
              "start": 104,
              "end": 108
            },
            "accessibility": null,
            "static": false,
            "start": 95,
            "end": 109
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 116
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 118,
                "end": 124
              },
              "start": 116,
              "end": 124
            },
            "accessibility": null,
            "static": false,
            "start": 114,
            "end": 125
          }
        ],
        "start": 77,
        "end": 127
      },
      "declare": false,
      "start": 64,
      "end": 127
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D1",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 140
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "C1",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 151
          },
          "typeArguments": null,
          "start": 149,
          "end": 151
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 158,
              "end": 167
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 171
                },
                "typeArguments": null,
                "start": 169,
                "end": 171
              },
              "start": 167,
              "end": 171
            },
            "accessibility": null,
            "static": false,
            "start": 158,
            "end": 172
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 179
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 181,
                "end": 187
              },
              "start": 179,
              "end": 187
            },
            "accessibility": null,
            "static": false,
            "start": 177,
            "end": 188
          }
        ],
        "start": 152,
        "end": 190
      },
      "declare": false,
      "start": 128,
      "end": 190
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 200,
                "end": 206
              },
              "start": 198,
              "end": 206
            },
            "start": 195,
            "end": 206
          },
          "init": null,
          "definite": false,
          "start": 195,
          "end": 206
        }
      ],
      "declare": false,
      "start": 191,
      "end": 207
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 217,
                "end": 223
              },
              "start": 215,
              "end": 223
            },
            "start": 212,
            "end": 223
          },
          "init": null,
          "definite": false,
          "start": 212,
          "end": 223
        }
      ],
      "declare": false,
      "start": 208,
      "end": 224
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 239,
                    "end": 245
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 248,
                    "end": 254
                  }
                ],
                "start": 239,
                "end": 254
              },
              "start": 237,
              "end": 254
            },
            "start": 229,
            "end": 254
          },
          "init": null,
          "definite": false,
          "start": 229,
          "end": 254
        }
      ],
      "declare": false,
      "start": 225,
      "end": 255
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isC1",
        "optional": false,
        "typeAnnotation": null,
        "start": 267,
        "end": 271
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 275,
              "end": 278
            },
            "start": 273,
            "end": 278
          },
          "start": 272,
          "end": 278
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 281,
            "end": 282
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null,
                "start": 286,
                "end": 288
              },
              "typeArguments": null,
              "start": 286,
              "end": 288
            },
            "start": 286,
            "end": 288
          },
          "start": 281,
          "end": 288
        },
        "start": 279,
        "end": 288
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 302,
              "end": 306
            },
            "start": 295,
            "end": 307
          }
        ],
        "start": 289,
        "end": 309
      },
      "expression": false,
      "start": 258,
      "end": 309
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isC2",
        "optional": false,
        "typeAnnotation": null,
        "start": 320,
        "end": 324
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 328,
              "end": 331
            },
            "start": 326,
            "end": 331
          },
          "start": 325,
          "end": 331
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 334,
            "end": 335
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null,
                "start": 339,
                "end": 341
              },
              "typeArguments": null,
              "start": 339,
              "end": 341
            },
            "start": 339,
            "end": 341
          },
          "start": 334,
          "end": 341
        },
        "start": 332,
        "end": 341
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 355,
              "end": 359
            },
            "start": 348,
            "end": 360
          }
        ],
        "start": 342,
        "end": 362
      },
      "expression": false,
      "start": 311,
      "end": 362
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isD1",
        "optional": false,
        "typeAnnotation": null,
        "start": 373,
        "end": 377
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 381,
              "end": 384
            },
            "start": 379,
            "end": 384
          },
          "start": 378,
          "end": 384
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 387,
            "end": 388
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D1",
                "optional": false,
                "typeAnnotation": null,
                "start": 392,
                "end": 394
              },
              "typeArguments": null,
              "start": 392,
              "end": 394
            },
            "start": 392,
            "end": 394
          },
          "start": 387,
          "end": 394
        },
        "start": 385,
        "end": 394
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 408,
              "end": 412
            },
            "start": 401,
            "end": 413
          }
        ],
        "start": 395,
        "end": 415
      },
      "expression": false,
      "start": 364,
      "end": 415
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 425,
                  "end": 427
                },
                "typeArguments": null,
                "start": 425,
                "end": 427
              },
              "start": 423,
              "end": 427
            },
            "start": 421,
            "end": 427
          },
          "init": null,
          "definite": false,
          "start": 421,
          "end": 427
        }
      ],
      "declare": false,
      "start": 417,
      "end": 428
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 437,
                  "end": 439
                },
                "typeArguments": null,
                "start": 437,
                "end": 439
              },
              "start": 435,
              "end": 439
            },
            "start": 433,
            "end": 439
          },
          "init": null,
          "definite": false,
          "start": 433,
          "end": 439
        }
      ],
      "declare": false,
      "start": 429,
      "end": 440
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 449,
                  "end": 451
                },
                "typeArguments": null,
                "start": 449,
                "end": 451
              },
              "start": 447,
              "end": 451
            },
            "start": 445,
            "end": 451
          },
          "init": null,
          "definite": false,
          "start": 445,
          "end": 451
        }
      ],
      "declare": false,
      "start": 441,
      "end": 452
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c1Orc2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 465,
                      "end": 467
                    },
                    "typeArguments": null,
                    "start": 465,
                    "end": 467
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 470,
                      "end": 472
                    },
                    "typeArguments": null,
                    "start": 470,
                    "end": 472
                  }
                ],
                "start": 465,
                "end": 472
              },
              "start": 463,
              "end": 472
            },
            "start": 457,
            "end": 472
          },
          "init": null,
          "definite": false,
          "start": 457,
          "end": 472
        }
      ],
      "declare": false,
      "start": 453,
      "end": 473
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 474,
          "end": 477
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "isC1",
              "optional": false,
              "typeAnnotation": null,
              "start": 480,
              "end": 484
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c1Orc2",
                "optional": false,
                "typeAnnotation": null,
                "start": 485,
                "end": 491
              }
            ],
            "optional": false,
            "start": 480,
            "end": 492
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1Orc2",
              "optional": false,
              "typeAnnotation": null,
              "start": 496,
              "end": 502
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 503,
              "end": 505
            },
            "optional": false,
            "computed": false,
            "start": 496,
            "end": 505
          },
          "start": 480,
          "end": 505
        },
        "start": 474,
        "end": 505
      },
      "directive": null,
      "start": 474,
      "end": 506
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 513,
          "end": 516
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "isC2",
              "optional": false,
              "typeAnnotation": null,
              "start": 519,
              "end": 523
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c1Orc2",
                "optional": false,
                "typeAnnotation": null,
                "start": 524,
                "end": 530
              }
            ],
            "optional": false,
            "start": 519,
            "end": 531
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1Orc2",
              "optional": false,
              "typeAnnotation": null,
              "start": 535,
              "end": 541
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 542,
              "end": 544
            },
            "optional": false,
            "computed": false,
            "start": 535,
            "end": 544
          },
          "start": 519,
          "end": 544
        },
        "start": 513,
        "end": 544
      },
      "directive": null,
      "start": 513,
      "end": 545
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 552,
          "end": 555
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "isD1",
              "optional": false,
              "typeAnnotation": null,
              "start": 558,
              "end": 562
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c1Orc2",
                "optional": false,
                "typeAnnotation": null,
                "start": 563,
                "end": 569
              }
            ],
            "optional": false,
            "start": 558,
            "end": 570
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1Orc2",
              "optional": false,
              "typeAnnotation": null,
              "start": 574,
              "end": 580
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 581,
              "end": 583
            },
            "optional": false,
            "computed": false,
            "start": 574,
            "end": 583
          },
          "start": 558,
          "end": 583
        },
        "start": 552,
        "end": 583
      },
      "directive": null,
      "start": 552,
      "end": 584
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 591,
          "end": 594
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "isD1",
              "optional": false,
              "typeAnnotation": null,
              "start": 597,
              "end": 601
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c1Orc2",
                "optional": false,
                "typeAnnotation": null,
                "start": 602,
                "end": 608
              }
            ],
            "optional": false,
            "start": 597,
            "end": 609
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1Orc2",
              "optional": false,
              "typeAnnotation": null,
              "start": 613,
              "end": 619
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 620,
              "end": 622
            },
            "optional": false,
            "computed": false,
            "start": 613,
            "end": 622
          },
          "start": 597,
          "end": 622
        },
        "start": 591,
        "end": 622
      },
      "directive": null,
      "start": 591,
      "end": 623
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c2Ord1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 643,
                      "end": 645
                    },
                    "typeArguments": null,
                    "start": 643,
                    "end": 645
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 648,
                      "end": 650
                    },
                    "typeArguments": null,
                    "start": 648,
                    "end": 650
                  }
                ],
                "start": 643,
                "end": 650
              },
              "start": 641,
              "end": 650
            },
            "start": 635,
            "end": 650
          },
          "init": null,
          "definite": false,
          "start": 635,
          "end": 650
        }
      ],
      "declare": false,
      "start": 631,
      "end": 651
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 652,
          "end": 655
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "isC2",
              "optional": false,
              "typeAnnotation": null,
              "start": 658,
              "end": 662
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c2Ord1",
                "optional": false,
                "typeAnnotation": null,
                "start": 663,
                "end": 669
              }
            ],
            "optional": false,
            "start": 658,
            "end": 670
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c2Ord1",
              "optional": false,
              "typeAnnotation": null,
              "start": 674,
              "end": 680
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 681,
              "end": 683
            },
            "optional": false,
            "computed": false,
            "start": 674,
            "end": 683
          },
          "start": 658,
          "end": 683
        },
        "start": 652,
        "end": 683
      },
      "directive": null,
      "start": 652,
      "end": 684
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 691,
          "end": 694
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "isD1",
              "optional": false,
              "typeAnnotation": null,
              "start": 697,
              "end": 701
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c2Ord1",
                "optional": false,
                "typeAnnotation": null,
                "start": 702,
                "end": 708
              }
            ],
            "optional": false,
            "start": 697,
            "end": 709
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c2Ord1",
              "optional": false,
              "typeAnnotation": null,
              "start": 713,
              "end": 719
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 720,
              "end": 722
            },
            "optional": false,
            "computed": false,
            "start": 713,
            "end": 722
          },
          "start": 697,
          "end": 722
        },
        "start": 691,
        "end": 722
      },
      "directive": null,
      "start": 691,
      "end": 723
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 730,
          "end": 733
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "isD1",
              "optional": false,
              "typeAnnotation": null,
              "start": 736,
              "end": 740
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c2Ord1",
                "optional": false,
                "typeAnnotation": null,
                "start": 741,
                "end": 747
              }
            ],
            "optional": false,
            "start": 736,
            "end": 748
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c2Ord1",
              "optional": false,
              "typeAnnotation": null,
              "start": 752,
              "end": 758
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 759,
              "end": 761
            },
            "optional": false,
            "computed": false,
            "start": 752,
            "end": 761
          },
          "start": 736,
          "end": 761
        },
        "start": 730,
        "end": 761
      },
      "directive": null,
      "start": 730,
      "end": 762
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 777,
                      "end": 779
                    },
                    "typeArguments": null,
                    "start": 777,
                    "end": 779
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 782,
                      "end": 784
                    },
                    "typeArguments": null,
                    "start": 782,
                    "end": 784
                  }
                ],
                "start": 777,
                "end": 784
              },
              "start": 775,
              "end": 784
            },
            "start": 773,
            "end": 784
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isC1",
                "optional": false,
                "typeAnnotation": null,
                "start": 787,
                "end": 791
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2Ord1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 792,
                  "end": 798
                }
              ],
              "optional": false,
              "start": 787,
              "end": 799
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c2Ord1",
              "optional": false,
              "typeAnnotation": null,
              "start": 803,
              "end": 809
            },
            "start": 787,
            "end": 809
          },
          "definite": false,
          "start": 773,
          "end": 809
        }
      ],
      "declare": false,
      "start": 769,
      "end": 810
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 821
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 10,
    "end": 12,
    "range": [
      10,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 23,
    "end": 25,
    "range": [
      23,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 31,
    "end": 40,
    "range": [
      31,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 42,
    "end": 44,
    "range": [
      42,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 50,
    "end": 52,
    "range": [
      50,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 54,
    "end": 60,
    "range": [
      54,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 64,
    "end": 73,
    "range": [
      64,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 74,
    "end": 76,
    "range": [
      74,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 87,
    "end": 89,
    "range": [
      87,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 95,
    "end": 104,
    "range": [
      95,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 106,
    "end": 108,
    "range": [
      106,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 114,
    "end": 116,
    "range": [
      114,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 118,
    "end": 124,
    "range": [
      118,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 128,
    "end": 137,
    "range": [
      128,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 138,
    "end": 140,
    "range": [
      138,
      140
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 141,
    "end": 148,
    "range": [
      141,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 149,
    "end": 151,
    "range": [
      149,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 158,
    "end": 167,
    "range": [
      158,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 169,
    "end": 171,
    "range": [
      169,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 177,
    "end": 179,
    "range": [
      177,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 181,
    "end": 187,
    "range": [
      181,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 191,
    "end": 194,
    "range": [
      191,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 195,
    "end": 198,
    "range": [
      195,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 200,
    "end": 206,
    "range": [
      200,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 208,
    "end": 211,
    "range": [
      208,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 212,
    "end": 215,
    "range": [
      212,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 217,
    "end": 223,
    "range": [
      217,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 225,
    "end": 228,
    "range": [
      225,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 229,
    "end": 237,
    "range": [
      229,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 239,
    "end": 245,
    "range": [
      239,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 248,
    "end": 254,
    "range": [
      248,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 258,
    "end": 266,
    "range": [
      258,
      266
    ]
  },
  {
    "type": "Identifier",
    "value": "isC1",
    "start": 267,
    "end": 271,
    "range": [
      267,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 275,
    "end": 278,
    "range": [
      275,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 283,
    "end": 285,
    "range": [
      283,
      285
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 286,
    "end": 288,
    "range": [
      286,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 295,
    "end": 301,
    "range": [
      295,
      301
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 302,
    "end": 306,
    "range": [
      302,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 311,
    "end": 319,
    "range": [
      311,
      319
    ]
  },
  {
    "type": "Identifier",
    "value": "isC2",
    "start": 320,
    "end": 324,
    "range": [
      320,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 328,
    "end": 331,
    "range": [
      328,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 336,
    "end": 338,
    "range": [
      336,
      338
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 339,
    "end": 341,
    "range": [
      339,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 348,
    "end": 354,
    "range": [
      348,
      354
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 355,
    "end": 359,
    "range": [
      355,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 364,
    "end": 372,
    "range": [
      364,
      372
    ]
  },
  {
    "type": "Identifier",
    "value": "isD1",
    "start": 373,
    "end": 377,
    "range": [
      373,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 381,
    "end": 384,
    "range": [
      381,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 389,
    "end": 391,
    "range": [
      389,
      391
    ]
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 392,
    "end": 394,
    "range": [
      392,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 401,
    "end": 407,
    "range": [
      401,
      407
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 408,
    "end": 412,
    "range": [
      408,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 417,
    "end": 420,
    "range": [
      417,
      420
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 421,
    "end": 423,
    "range": [
      421,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 425,
    "end": 427,
    "range": [
      425,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 429,
    "end": 432,
    "range": [
      429,
      432
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 433,
    "end": 435,
    "range": [
      433,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 437,
    "end": 439,
    "range": [
      437,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 441,
    "end": 444,
    "range": [
      441,
      444
    ]
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 445,
    "end": 447,
    "range": [
      445,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 449,
    "end": 451,
    "range": [
      449,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 453,
    "end": 456,
    "range": [
      453,
      456
    ]
  },
  {
    "type": "Identifier",
    "value": "c1Orc2",
    "start": 457,
    "end": 463,
    "range": [
      457,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 465,
    "end": 467,
    "range": [
      465,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 470,
    "end": 472,
    "range": [
      470,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 474,
    "end": 477,
    "range": [
      474,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Identifier",
    "value": "isC1",
    "start": 480,
    "end": 484,
    "range": [
      480,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Identifier",
    "value": "c1Orc2",
    "start": 485,
    "end": 491,
    "range": [
      485,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 493,
    "end": 495,
    "range": [
      493,
      495
    ]
  },
  {
    "type": "Identifier",
    "value": "c1Orc2",
    "start": 496,
    "end": 502,
    "range": [
      496,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 503,
    "end": 505,
    "range": [
      503,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 513,
    "end": 516,
    "range": [
      513,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Identifier",
    "value": "isC2",
    "start": 519,
    "end": 523,
    "range": [
      519,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Identifier",
    "value": "c1Orc2",
    "start": 524,
    "end": 530,
    "range": [
      524,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 532,
    "end": 534,
    "range": [
      532,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "c1Orc2",
    "start": 535,
    "end": 541,
    "range": [
      535,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 542,
    "end": 544,
    "range": [
      542,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 552,
    "end": 555,
    "range": [
      552,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Identifier",
    "value": "isD1",
    "start": 558,
    "end": 562,
    "range": [
      558,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Identifier",
    "value": "c1Orc2",
    "start": 563,
    "end": 569,
    "range": [
      563,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 571,
    "end": 573,
    "range": [
      571,
      573
    ]
  },
  {
    "type": "Identifier",
    "value": "c1Orc2",
    "start": 574,
    "end": 580,
    "range": [
      574,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 581,
    "end": 583,
    "range": [
      581,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 591,
    "end": 594,
    "range": [
      591,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Identifier",
    "value": "isD1",
    "start": 597,
    "end": 601,
    "range": [
      597,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Identifier",
    "value": "c1Orc2",
    "start": 602,
    "end": 608,
    "range": [
      602,
      608
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 610,
    "end": 612,
    "range": [
      610,
      612
    ]
  },
  {
    "type": "Identifier",
    "value": "c1Orc2",
    "start": 613,
    "end": 619,
    "range": [
      613,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 620,
    "end": 622,
    "range": [
      620,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 631,
    "end": 634,
    "range": [
      631,
      634
    ]
  },
  {
    "type": "Identifier",
    "value": "c2Ord1",
    "start": 635,
    "end": 641,
    "range": [
      635,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 643,
    "end": 645,
    "range": [
      643,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 648,
    "end": 650,
    "range": [
      648,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 652,
    "end": 655,
    "range": [
      652,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Identifier",
    "value": "isC2",
    "start": 658,
    "end": 662,
    "range": [
      658,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Identifier",
    "value": "c2Ord1",
    "start": 663,
    "end": 669,
    "range": [
      663,
      669
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 671,
    "end": 673,
    "range": [
      671,
      673
    ]
  },
  {
    "type": "Identifier",
    "value": "c2Ord1",
    "start": 674,
    "end": 680,
    "range": [
      674,
      680
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 681,
    "end": 683,
    "range": [
      681,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 691,
    "end": 694,
    "range": [
      691,
      694
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 695,
    "end": 696,
    "range": [
      695,
      696
    ]
  },
  {
    "type": "Identifier",
    "value": "isD1",
    "start": 697,
    "end": 701,
    "range": [
      697,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Identifier",
    "value": "c2Ord1",
    "start": 702,
    "end": 708,
    "range": [
      702,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 710,
    "end": 712,
    "range": [
      710,
      712
    ]
  },
  {
    "type": "Identifier",
    "value": "c2Ord1",
    "start": 713,
    "end": 719,
    "range": [
      713,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 720,
    "end": 722,
    "range": [
      720,
      722
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 722,
    "end": 723,
    "range": [
      722,
      723
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 730,
    "end": 733,
    "range": [
      730,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Identifier",
    "value": "isD1",
    "start": 736,
    "end": 740,
    "range": [
      736,
      740
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 740,
    "end": 741,
    "range": [
      740,
      741
    ]
  },
  {
    "type": "Identifier",
    "value": "c2Ord1",
    "start": 741,
    "end": 747,
    "range": [
      741,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 749,
    "end": 751,
    "range": [
      749,
      751
    ]
  },
  {
    "type": "Identifier",
    "value": "c2Ord1",
    "start": 752,
    "end": 758,
    "range": [
      752,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 759,
    "end": 761,
    "range": [
      759,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 769,
    "end": 772,
    "range": [
      769,
      772
    ]
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 773,
    "end": 775,
    "range": [
      773,
      775
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 777,
    "end": 779,
    "range": [
      777,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 782,
    "end": 784,
    "range": [
      782,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Identifier",
    "value": "isC1",
    "start": 787,
    "end": 791,
    "range": [
      787,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Identifier",
    "value": "c2Ord1",
    "start": 792,
    "end": 798,
    "range": [
      792,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 800,
    "end": 802,
    "range": [
      800,
      802
    ]
  },
  {
    "type": "Identifier",
    "value": "c2Ord1",
    "start": 803,
    "end": 809,
    "range": [
      803,
      809
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  }
]
```

__ESTREE_TEST__:PASS:
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

__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 19
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 21
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 30,
              "end": 36
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 20,
            "end": 36
          }
        ],
        "start": 19,
        "end": 37
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 42
          },
          "typeArguments": null,
          "start": 41,
          "end": 42
        },
        "start": 39,
        "end": 42
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 43
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 63
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 65
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 74,
              "end": 80
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 64,
            "end": 80
          }
        ],
        "start": 63,
        "end": 81
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 87
              },
              "typeArguments": null,
              "start": 86,
              "end": 87
            }
          ],
          "start": 85,
          "end": 88
        },
        "start": 83,
        "end": 88
      },
      "body": null,
      "expression": false,
      "start": 44,
      "end": 89
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 109
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 111
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 120,
              "end": 126
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 110,
            "end": 126
          }
        ],
        "start": 109,
        "end": 127
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 134
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 136,
                    "end": 137
                  },
                  "typeArguments": null,
                  "start": 136,
                  "end": 137
                },
                "start": 134,
                "end": 137
              },
              "accessibility": null,
              "static": false,
              "start": 133,
              "end": 137
            }
          ],
          "start": 131,
          "end": 139
        },
        "start": 129,
        "end": 139
      },
      "body": null,
      "expression": false,
      "start": 90,
      "end": 140
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 148
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 153
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 151,
            "end": 155
          },
          "definite": false,
          "start": 146,
          "end": 155
        }
      ],
      "declare": false,
      "start": 142,
      "end": 156
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null,
                "start": 180,
                "end": 182
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 179,
            "end": 183
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 188
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 186,
            "end": 190
          },
          "definite": false,
          "start": 179,
          "end": 190
        }
      ],
      "declare": false,
      "start": 175,
      "end": 191
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 214,
                  "end": 215
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 217,
                  "end": 219
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 214,
                "end": 219
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 212,
            "end": 221
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 224,
              "end": 226
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 224,
            "end": 228
          },
          "definite": false,
          "start": 212,
          "end": 228
        }
      ],
      "declare": false,
      "start": 208,
      "end": 229
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 273,
        "end": 276
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 277,
              "end": 278
            },
            "constraint": null,
            "default": {
              "type": "TSNumberKeyword",
              "start": 281,
              "end": 287
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 277,
            "end": 287
          }
        ],
        "start": 276,
        "end": 288
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 293,
                "end": 294
              },
              "typeArguments": null,
              "start": 293,
              "end": 294
            }
          ],
          "start": 292,
          "end": 295
        },
        "start": 290,
        "end": 295
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 307,
                    "end": 309
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 313,
                    "end": 316
                  },
                  "start": 307,
                  "end": 316
                }
              ],
              "start": 306,
              "end": 317
            },
            "start": 299,
            "end": 317
          }
        ],
        "start": 296,
        "end": 319
      },
      "expression": false,
      "start": 264,
      "end": 319
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 327,
                "end": 328
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 326,
            "end": 329
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 332,
              "end": 335
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 332,
            "end": 337
          },
          "definite": false,
          "start": 326,
          "end": 337
        }
      ],
      "declare": false,
      "start": 320,
      "end": 338
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SelectProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 385,
        "end": 396
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 397,
              "end": 398
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 397,
            "end": 398
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 400,
              "end": 401
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 400,
            "end": 401
          }
        ],
        "start": 396,
        "end": 402
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "selector",
              "optional": false,
              "typeAnnotation": null,
              "start": 407,
              "end": 415
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 424,
                          "end": 425
                        },
                        "typeArguments": null,
                        "start": 424,
                        "end": 425
                      },
                      "start": 422,
                      "end": 425
                    },
                    "start": 419,
                    "end": 425
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 430,
                      "end": 431
                    },
                    "typeArguments": null,
                    "start": 430,
                    "end": 431
                  },
                  "start": 427,
                  "end": 431
                },
                "start": 418,
                "end": 431
              },
              "start": 416,
              "end": 431
            },
            "accessibility": null,
            "static": false,
            "start": 407,
            "end": 432
          }
        ],
        "start": 403,
        "end": 434
      },
      "declare": false,
      "start": 375,
      "end": 434
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SelectResult",
        "optional": false,
        "typeAnnotation": null,
        "start": 441,
        "end": 453
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 455
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 454,
            "end": 455
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 457,
              "end": 458
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 457,
            "end": 458
          }
        ],
        "start": 453,
        "end": 459
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 463,
              "end": 464
            },
            "typeArguments": null,
            "start": 463,
            "end": 464
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 466,
              "end": 467
            },
            "typeArguments": null,
            "start": 466,
            "end": 467
          }
        ],
        "start": 462,
        "end": 468
      },
      "declare": false,
      "start": 436,
      "end": 469
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null,
        "start": 481,
        "end": 487
      },
      "typeParameters": null,
      "extends": [],
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 492,
              "end": 496
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 498,
                "end": 504
              },
              "start": 496,
              "end": 504
            },
            "accessibility": null,
            "static": false,
            "start": 492,
            "end": 505
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "surname",
              "optional": false,
              "typeAnnotation": null,
              "start": 508,
              "end": 515
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 517,
                "end": 523
              },
              "start": 515,
              "end": 523
            },
            "accessibility": null,
            "static": false,
            "start": 508,
            "end": 524
          }
        ],
        "start": 488,
        "end": 526
      },
      "declare": false,
      "start": 471,
      "end": 526
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "selectJohn",
        "optional": false,
        "typeAnnotation": null,
        "start": 545,
        "end": 555
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 556,
              "end": 557
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Person",
                "optional": false,
                "typeAnnotation": null,
                "start": 560,
                "end": 566
              },
              "typeArguments": null,
              "start": 560,
              "end": 566
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 556,
            "end": 566
          }
        ],
        "start": 555,
        "end": 567
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SelectProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 576,
                "end": 587
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Person",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 588,
                      "end": 594
                    },
                    "typeArguments": null,
                    "start": 588,
                    "end": 594
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 596,
                      "end": 597
                    },
                    "typeArguments": null,
                    "start": 596,
                    "end": 597
                  }
                ],
                "start": 587,
                "end": 598
              },
              "start": 576,
              "end": 598
            },
            "start": 574,
            "end": 598
          },
          "start": 568,
          "end": 598
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SelectResult",
            "optional": false,
            "typeAnnotation": null,
            "start": 601,
            "end": 613
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Person",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 614,
                  "end": 620
                },
                "typeArguments": null,
                "start": 614,
                "end": 620
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 622,
                  "end": 623
                },
                "typeArguments": null,
                "start": 622,
                "end": 623
              }
            ],
            "start": 613,
            "end": 624
          },
          "start": 601,
          "end": 624
        },
        "start": 599,
        "end": 624
      },
      "body": null,
      "expression": false,
      "start": 528,
      "end": 625
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "person",
                "optional": false,
                "typeAnnotation": null,
                "start": 634,
                "end": 640
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 633,
            "end": 641
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "selectJohn",
              "optional": false,
              "typeAnnotation": null,
              "start": 644,
              "end": 654
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 644,
            "end": 656
          },
          "definite": false,
          "start": 633,
          "end": 656
        }
      ],
      "declare": false,
      "start": 627,
      "end": 657
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "any",
                "optional": false,
                "typeAnnotation": null,
                "start": 665,
                "end": 668
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "whatever",
                "optional": false,
                "typeAnnotation": null,
                "start": 670,
                "end": 678
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 664,
            "end": 679
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "selectJohn",
              "optional": false,
              "typeAnnotation": null,
              "start": 682,
              "end": 692
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 682,
            "end": 694
          },
          "definite": false,
          "start": 664,
          "end": 694
        }
      ],
      "declare": false,
      "start": 658,
      "end": 695
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "john",
            "optional": false,
            "typeAnnotation": null,
            "start": 702,
            "end": 706
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "selectJohn",
              "optional": false,
              "typeAnnotation": null,
              "start": 709,
              "end": 719
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 709,
            "end": 721
          },
          "definite": false,
          "start": 702,
          "end": 721
        }
      ],
      "declare": false,
      "start": 696,
      "end": 722
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "personAgain",
                "optional": false,
                "typeAnnotation": null,
                "start": 730,
                "end": 741
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nufinspecial",
                "optional": false,
                "typeAnnotation": null,
                "start": 743,
                "end": 755
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 729,
            "end": 756
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "john",
            "optional": false,
            "typeAnnotation": null,
            "start": 759,
            "end": 763
          },
          "definite": false,
          "start": 729,
          "end": 763
        }
      ],
      "declare": false,
      "start": 723,
      "end": 764
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "makeTuple",
        "optional": false,
        "typeAnnotation": null,
        "start": 805,
        "end": 814
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 815,
              "end": 817
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 815,
            "end": 817
          }
        ],
        "start": 814,
        "end": 818
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 824,
                "end": 826
              },
              "typeArguments": null,
              "start": 824,
              "end": 826
            },
            "start": 822,
            "end": 826
          },
          "start": 819,
          "end": 826
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 830,
                "end": 832
              },
              "typeArguments": null,
              "start": 830,
              "end": 832
            }
          ],
          "start": 829,
          "end": 833
        },
        "start": 827,
        "end": 833
      },
      "body": null,
      "expression": false,
      "start": 788,
      "end": 834
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "stringy",
        "optional": false,
        "typeAnnotation": null,
        "start": 852,
        "end": 859
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 860,
              "end": 861
            },
            "constraint": null,
            "default": {
              "type": "TSStringKeyword",
              "start": 864,
              "end": 870
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 860,
            "end": 870
          }
        ],
        "start": 859,
        "end": 871
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 878,
                "end": 879
              },
              "typeArguments": null,
              "start": 878,
              "end": 879
            },
            "start": 876,
            "end": 879
          },
          "start": 872,
          "end": 879
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 882,
            "end": 883
          },
          "typeArguments": null,
          "start": 882,
          "end": 883
        },
        "start": 880,
        "end": 883
      },
      "body": null,
      "expression": false,
      "start": 835,
      "end": 884
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "isStringTuple",
            "optional": false,
            "typeAnnotation": null,
            "start": 892,
            "end": 905
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 908,
              "end": 917
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "stringy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 918,
                  "end": 925
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 918,
                "end": 927
              }
            ],
            "optional": false,
            "start": 908,
            "end": 928
          },
          "definite": false,
          "start": 892,
          "end": 928
        }
      ],
      "declare": false,
      "start": 886,
      "end": 929
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "isAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 950,
                "end": 955
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 949,
            "end": 956
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 959,
              "end": 968
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "stringy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 969,
                  "end": 976
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 969,
                "end": 978
              }
            ],
            "optional": false,
            "start": 959,
            "end": 979
          },
          "definite": false,
          "start": 949,
          "end": 979
        }
      ],
      "declare": false,
      "start": 943,
      "end": 980
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 993
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16,
    "range": [
      8,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 17,
    "end": 19,
    "range": [
      17,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 22,
    "end": 29,
    "range": [
      22,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 30,
    "end": 36,
    "range": [
      30,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 44,
    "end": 51,
    "range": [
      44,
      51
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 52,
    "end": 60,
    "range": [
      52,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 61,
    "end": 63,
    "range": [
      61,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 66,
    "end": 73,
    "range": [
      66,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 74,
    "end": 80,
    "range": [
      74,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 90,
    "end": 97,
    "range": [
      90,
      97
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 98,
    "end": 106,
    "range": [
      98,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 107,
    "end": 109,
    "range": [
      107,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 112,
    "end": 119,
    "range": [
      112,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 120,
    "end": 126,
    "range": [
      120,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 142,
    "end": 145,
    "range": [
      142,
      145
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 146,
    "end": 148,
    "range": [
      146,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 151,
    "end": 153,
    "range": [
      151,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 175,
    "end": 178,
    "range": [
      175,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 180,
    "end": 182,
    "range": [
      180,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 186,
    "end": 188,
    "range": [
      186,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 208,
    "end": 211,
    "range": [
      208,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 214,
    "end": 215,
    "range": [
      214,
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
    "value": "x3",
    "start": 217,
    "end": 219,
    "range": [
      217,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 224,
    "end": 226,
    "range": [
      224,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 264,
    "end": 272,
    "range": [
      264,
      272
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 273,
    "end": 276,
    "range": [
      273,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 281,
    "end": 287,
    "range": [
      281,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 299,
    "end": 305,
    "range": [
      299,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 307,
    "end": 309,
    "range": [
      307,
      309
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 310,
    "end": 312,
    "range": [
      310,
      312
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 313,
    "end": 316,
    "range": [
      313,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 320,
    "end": 325,
    "range": [
      320,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 332,
    "end": 335,
    "range": [
      332,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 375,
    "end": 384,
    "range": [
      375,
      384
    ]
  },
  {
    "type": "Identifier",
    "value": "SelectProps",
    "start": 385,
    "end": 396,
    "range": [
      385,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "selector",
    "start": 407,
    "end": 415,
    "range": [
      407,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 419,
    "end": 422,
    "range": [
      419,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 427,
    "end": 429,
    "range": [
      427,
      429
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 436,
    "end": 440,
    "range": [
      436,
      440
    ]
  },
  {
    "type": "Identifier",
    "value": "SelectResult",
    "start": 441,
    "end": 453,
    "range": [
      441,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 471,
    "end": 480,
    "range": [
      471,
      480
    ]
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 481,
    "end": 487,
    "range": [
      481,
      487
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 492,
    "end": 496,
    "range": [
      492,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 498,
    "end": 504,
    "range": [
      498,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Identifier",
    "value": "surname",
    "start": 508,
    "end": 515,
    "range": [
      508,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 517,
    "end": 523,
    "range": [
      517,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 528,
    "end": 535,
    "range": [
      528,
      535
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 536,
    "end": 544,
    "range": [
      536,
      544
    ]
  },
  {
    "type": "Identifier",
    "value": "selectJohn",
    "start": 545,
    "end": 555,
    "range": [
      545,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 560,
    "end": 566,
    "range": [
      560,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 568,
    "end": 573,
    "range": [
      568,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Identifier",
    "value": "SelectProps",
    "start": 576,
    "end": 587,
    "range": [
      576,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 588,
    "end": 594,
    "range": [
      588,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Identifier",
    "value": "SelectResult",
    "start": 601,
    "end": 613,
    "range": [
      601,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 614,
    "end": 620,
    "range": [
      614,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 627,
    "end": 632,
    "range": [
      627,
      632
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Identifier",
    "value": "person",
    "start": 634,
    "end": 640,
    "range": [
      634,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Identifier",
    "value": "selectJohn",
    "start": 644,
    "end": 654,
    "range": [
      644,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 658,
    "end": 663,
    "range": [
      658,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 665,
    "end": 668,
    "range": [
      665,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Identifier",
    "value": "whatever",
    "start": 670,
    "end": 678,
    "range": [
      670,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Identifier",
    "value": "selectJohn",
    "start": 682,
    "end": 692,
    "range": [
      682,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 696,
    "end": 701,
    "range": [
      696,
      701
    ]
  },
  {
    "type": "Identifier",
    "value": "john",
    "start": 702,
    "end": 706,
    "range": [
      702,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Identifier",
    "value": "selectJohn",
    "start": 709,
    "end": 719,
    "range": [
      709,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 723,
    "end": 728,
    "range": [
      723,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Identifier",
    "value": "personAgain",
    "start": 730,
    "end": 741,
    "range": [
      730,
      741
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 741,
    "end": 742,
    "range": [
      741,
      742
    ]
  },
  {
    "type": "Identifier",
    "value": "nufinspecial",
    "start": 743,
    "end": 755,
    "range": [
      743,
      755
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Identifier",
    "value": "john",
    "start": 759,
    "end": 763,
    "range": [
      759,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 788,
    "end": 795,
    "range": [
      788,
      795
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 796,
    "end": 804,
    "range": [
      796,
      804
    ]
  },
  {
    "type": "Identifier",
    "value": "makeTuple",
    "start": 805,
    "end": 814,
    "range": [
      805,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 815,
    "end": 817,
    "range": [
      815,
      817
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 819,
    "end": 822,
    "range": [
      819,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 824,
    "end": 826,
    "range": [
      824,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 827,
    "end": 828,
    "range": [
      827,
      828
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 829,
    "end": 830,
    "range": [
      829,
      830
    ]
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 830,
    "end": 832,
    "range": [
      830,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 835,
    "end": 842,
    "range": [
      835,
      842
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 843,
    "end": 851,
    "range": [
      843,
      851
    ]
  },
  {
    "type": "Identifier",
    "value": "stringy",
    "start": 852,
    "end": 859,
    "range": [
      852,
      859
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 864,
    "end": 870,
    "range": [
      864,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 872,
    "end": 875,
    "range": [
      872,
      875
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 875,
    "end": 876,
    "range": [
      875,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 882,
    "end": 883,
    "range": [
      882,
      883
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 886,
    "end": 891,
    "range": [
      886,
      891
    ]
  },
  {
    "type": "Identifier",
    "value": "isStringTuple",
    "start": 892,
    "end": 905,
    "range": [
      892,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Identifier",
    "value": "makeTuple",
    "start": 908,
    "end": 917,
    "range": [
      908,
      917
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Identifier",
    "value": "stringy",
    "start": 918,
    "end": 925,
    "range": [
      918,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 926,
    "end": 927,
    "range": [
      926,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 943,
    "end": 948,
    "range": [
      943,
      948
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 949,
    "end": 950,
    "range": [
      949,
      950
    ]
  },
  {
    "type": "Identifier",
    "value": "isAny",
    "start": 950,
    "end": 955,
    "range": [
      950,
      955
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 957,
    "end": 958,
    "range": [
      957,
      958
    ]
  },
  {
    "type": "Identifier",
    "value": "makeTuple",
    "start": 959,
    "end": 968,
    "range": [
      959,
      968
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Identifier",
    "value": "stringy",
    "start": 969,
    "end": 976,
    "range": [
      969,
      976
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 978,
    "end": 979,
    "range": [
      978,
      979
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 979,
    "end": 980,
    "range": [
      979,
      980
    ]
  }
]
```

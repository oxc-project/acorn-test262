__ESTREE_TEST__:PASS:
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

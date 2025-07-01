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
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 50
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 51,
        "end": 54
      },
      "declare": false,
      "start": 39,
      "end": 54
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Class",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 66
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 79
          },
          "typeArguments": null,
          "start": 78,
          "end": 79
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 97
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 100,
                "end": 103
              },
              "expression": false,
              "start": 97,
              "end": 103
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 86,
            "end": 103
          }
        ],
        "start": 80,
        "end": 105
      },
      "abstract": false,
      "declare": false,
      "start": 55,
      "end": 105
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 121
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Class",
        "optional": false,
        "typeAnnotation": null,
        "start": 130,
        "end": 135
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 145
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 147,
                "end": 154
              },
              "start": 145,
              "end": 154
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 142,
            "end": 155
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 160,
              "end": 171
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 176,
                        "end": 181
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 176,
                      "end": 183
                    },
                    "directive": null,
                    "start": 176,
                    "end": 184
                  }
                ],
                "start": 174,
                "end": 186
              },
              "expression": false,
              "start": 171,
              "end": 186
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 160,
            "end": 186
          }
        ],
        "start": 136,
        "end": 188
      },
      "abstract": false,
      "declare": false,
      "start": 107,
      "end": 188
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 196,
        "end": 197
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null,
            "start": 209,
            "end": 210
          },
          "typeArguments": null,
          "start": 209,
          "end": 210
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 220
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 222,
                "end": 229
              },
              "start": 220,
              "end": 229
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 217,
            "end": 229
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
              "end": 245
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 248,
                "end": 251
              },
              "expression": false,
              "start": 245,
              "end": 251
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 234,
            "end": 251
          }
        ],
        "start": 211,
        "end": 253
      },
      "abstract": false,
      "declare": false,
      "start": 190,
      "end": 253
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubD",
        "optional": false,
        "typeAnnotation": null,
        "start": 261,
        "end": 265
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 274,
        "end": 275
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 282,
              "end": 285
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 287,
                "end": 293
              },
              "start": 285,
              "end": 293
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 282,
            "end": 293
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 298,
              "end": 309
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 322,
                        "end": 327
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 322,
                      "end": 329
                    },
                    "directive": null,
                    "start": 322,
                    "end": 330
                  }
                ],
                "start": 312,
                "end": 336
              },
              "expression": false,
              "start": 309,
              "end": 336
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 298,
            "end": 336
          }
        ],
        "start": 276,
        "end": 338
      },
      "abstract": false,
      "declare": false,
      "start": 255,
      "end": 338
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d0",
        "optional": false,
        "typeAnnotation": null,
        "start": 350,
        "end": 352
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
              "start": 353,
              "end": 354
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Class",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 368
              },
              "typeArguments": null,
              "start": 363,
              "end": 368
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 353,
            "end": 368
          }
        ],
        "start": 352,
        "end": 369
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
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
                  "start": 371,
                  "end": 372
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 371,
                  "end": 372
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 371,
                "end": 372
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 370,
            "end": 373
          },
          "right": {
            "type": "ObjectExpression",
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
                  "start": 378,
                  "end": 379
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Class",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 385,
                    "end": 390
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 381,
                  "end": 392
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 378,
                "end": 392
              }
            ],
            "start": 376,
            "end": 394
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 370,
          "end": 394
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 396,
        "end": 399
      },
      "expression": false,
      "start": 341,
      "end": 399
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d1",
        "optional": false,
        "typeAnnotation": null,
        "start": 409,
        "end": 411
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
              "start": 412,
              "end": 413
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 422,
                "end": 423
              },
              "typeArguments": null,
              "start": 422,
              "end": 423
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 412,
            "end": 423
          }
        ],
        "start": 411,
        "end": 424
      },
      "params": [
        {
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
                "start": 426,
                "end": 427
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 426,
                "end": 427
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 426,
              "end": 427
            }
          ],
          "optional": false,
          "typeAnnotation": {
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
                    "start": 432,
                    "end": 433
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "F",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 435,
                        "end": 436
                      },
                      "typeArguments": null,
                      "start": 435,
                      "end": 436
                    },
                    "start": 433,
                    "end": 436
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 432,
                  "end": 436
                }
              ],
              "start": 430,
              "end": 438
            },
            "start": 428,
            "end": 438
          },
          "start": 425,
          "end": 438
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 440,
        "end": 443
      },
      "expression": false,
      "start": 400,
      "end": 443
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d2",
        "optional": false,
        "typeAnnotation": null,
        "start": 453,
        "end": 455
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
              "start": 456,
              "end": 457
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Class",
                "optional": false,
                "typeAnnotation": null,
                "start": 466,
                "end": 471
              },
              "typeArguments": null,
              "start": 466,
              "end": 471
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 456,
            "end": 471
          }
        ],
        "start": 455,
        "end": 472
      },
      "params": [
        {
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
                "start": 474,
                "end": 475
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 474,
                "end": 475
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 474,
              "end": 475
            }
          ],
          "optional": false,
          "typeAnnotation": {
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
                    "start": 480,
                    "end": 481
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Class",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 483,
                        "end": 488
                      },
                      "typeArguments": null,
                      "start": 483,
                      "end": 488
                    },
                    "start": 481,
                    "end": 488
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 480,
                  "end": 488
                }
              ],
              "start": 478,
              "end": 490
            },
            "start": 476,
            "end": 490
          },
          "start": 473,
          "end": 490
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 492,
        "end": 495
      },
      "expression": false,
      "start": 444,
      "end": 495
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d3",
        "optional": false,
        "typeAnnotation": null,
        "start": 505,
        "end": 507
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
              "start": 508,
              "end": 509
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 518,
                "end": 519
              },
              "typeArguments": null,
              "start": 518,
              "end": 519
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 508,
            "end": 519
          }
        ],
        "start": 507,
        "end": 520
      },
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 522,
                "end": 523
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 522,
                "end": 523
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 522,
              "end": 523
            }
          ],
          "optional": false,
          "typeAnnotation": {
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
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 528,
                    "end": 529
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 531,
                        "end": 532
                      },
                      "typeArguments": null,
                      "start": 531,
                      "end": 532
                    },
                    "start": 529,
                    "end": 532
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 528,
                  "end": 532
                }
              ],
              "start": 526,
              "end": 534
            },
            "start": 524,
            "end": 534
          },
          "start": 521,
          "end": 534
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 536,
        "end": 539
      },
      "expression": false,
      "start": 496,
      "end": 539
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d4",
        "optional": false,
        "typeAnnotation": null,
        "start": 549,
        "end": 551
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
              "start": 552,
              "end": 553
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 562,
                "end": 563
              },
              "typeArguments": null,
              "start": 562,
              "end": 563
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 552,
            "end": 563
          }
        ],
        "start": 551,
        "end": 564
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 566,
                  "end": 567
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 566,
                  "end": 567
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 566,
                "end": 567
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 565,
            "end": 568
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 573,
                  "end": 574
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 580,
                    "end": 581
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 576,
                  "end": 583
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 573,
                "end": 583
              }
            ],
            "start": 571,
            "end": 585
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 565,
          "end": 585
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 587,
        "end": 590
      },
      "expression": false,
      "start": 540,
      "end": 590
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 596,
            "end": 599
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Class",
              "optional": false,
              "typeAnnotation": null,
              "start": 606,
              "end": 611
            },
            "typeArguments": null,
            "arguments": [],
            "start": 602,
            "end": 613
          },
          "definite": false,
          "start": 596,
          "end": 613
        }
      ],
      "declare": false,
      "start": 592,
      "end": 614
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d0",
          "optional": false,
          "typeAnnotation": null,
          "start": 615,
          "end": 617
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
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
                  "start": 620,
                  "end": 621
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 623,
                  "end": 624
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 620,
                "end": 624
              }
            ],
            "start": 618,
            "end": 626
          }
        ],
        "optional": false,
        "start": 615,
        "end": 627
      },
      "directive": null,
      "start": 615,
      "end": 628
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d0",
          "optional": false,
          "typeAnnotation": null,
          "start": 629,
          "end": 631
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
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
                  "start": 634,
                  "end": 635
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 637,
                  "end": 639
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 634,
                "end": 639
              }
            ],
            "start": 632,
            "end": 641
          }
        ],
        "optional": false,
        "start": 629,
        "end": 642
      },
      "directive": null,
      "start": 629,
      "end": 643
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d0",
          "optional": false,
          "typeAnnotation": null,
          "start": 644,
          "end": 646
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
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
                  "start": 649,
                  "end": 650
                },
                "value": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 652,
                  "end": 660
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 649,
                "end": 660
              }
            ],
            "start": 647,
            "end": 662
          }
        ],
        "optional": false,
        "start": 644,
        "end": 663
      },
      "directive": null,
      "start": 644,
      "end": 664
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d1",
          "optional": false,
          "typeAnnotation": null,
          "start": 666,
          "end": 668
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
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
                  "start": 671,
                  "end": 672
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Class",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 678,
                    "end": 683
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 674,
                  "end": 685
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 671,
                "end": 685
              }
            ],
            "start": 669,
            "end": 687
          }
        ],
        "optional": false,
        "start": 666,
        "end": 688
      },
      "directive": null,
      "start": 666,
      "end": 689
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d1",
          "optional": false,
          "typeAnnotation": null,
          "start": 690,
          "end": 692
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
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
                  "start": 695,
                  "end": 696
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 698,
                  "end": 700
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 695,
                "end": 700
              }
            ],
            "start": 693,
            "end": 702
          }
        ],
        "optional": false,
        "start": 690,
        "end": 703
      },
      "directive": null,
      "start": 690,
      "end": 704
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d1",
          "optional": false,
          "typeAnnotation": null,
          "start": 705,
          "end": 707
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
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
                  "start": 710,
                  "end": 711
                },
                "value": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 713,
                  "end": 721
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 710,
                "end": 721
              }
            ],
            "start": 708,
            "end": 723
          }
        ],
        "optional": false,
        "start": 705,
        "end": 724
      },
      "directive": null,
      "start": 705,
      "end": 725
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d2",
          "optional": false,
          "typeAnnotation": null,
          "start": 727,
          "end": 729
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
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
                  "start": 732,
                  "end": 733
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SubClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 739,
                    "end": 747
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 735,
                  "end": 749
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 732,
                "end": 749
              }
            ],
            "start": 730,
            "end": 751
          }
        ],
        "optional": false,
        "start": 727,
        "end": 752
      },
      "directive": null,
      "start": 727,
      "end": 753
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d2",
          "optional": false,
          "typeAnnotation": null,
          "start": 754,
          "end": 756
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
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
                  "start": 759,
                  "end": 760
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 762,
                  "end": 764
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 759,
                "end": 764
              }
            ],
            "start": 757,
            "end": 766
          }
        ],
        "optional": false,
        "start": 754,
        "end": 767
      },
      "directive": null,
      "start": 754,
      "end": 768
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d3",
          "optional": false,
          "typeAnnotation": null,
          "start": 770,
          "end": 772
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 775,
                  "end": 776
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SubD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 782,
                    "end": 786
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 778,
                  "end": 788
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 775,
                "end": 788
              }
            ],
            "start": 773,
            "end": 790
          }
        ],
        "optional": false,
        "start": 770,
        "end": 791
      },
      "directive": null,
      "start": 770,
      "end": 792
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d3",
          "optional": false,
          "typeAnnotation": null,
          "start": 793,
          "end": 795
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 798,
                  "end": 799
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SubClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 805,
                    "end": 813
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 801,
                  "end": 815
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 798,
                "end": 815
              }
            ],
            "start": 796,
            "end": 817
          }
        ],
        "optional": false,
        "start": 793,
        "end": 818
      },
      "directive": null,
      "start": 793,
      "end": 819
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d3",
          "optional": false,
          "typeAnnotation": null,
          "start": 829,
          "end": 831
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 834,
                  "end": 835
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Class",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 841,
                    "end": 846
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 837,
                  "end": 848
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 834,
                "end": 848
              }
            ],
            "start": 832,
            "end": 850
          }
        ],
        "optional": false,
        "start": 829,
        "end": 851
      },
      "directive": null,
      "start": 829,
      "end": 852
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d3",
          "optional": false,
          "typeAnnotation": null,
          "start": 853,
          "end": 855
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 856,
            "end": 858
          }
        ],
        "optional": false,
        "start": 853,
        "end": 859
      },
      "directive": null,
      "start": 853,
      "end": 860
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d3",
          "optional": false,
          "typeAnnotation": null,
          "start": 861,
          "end": 863
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 866,
                  "end": 867
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 869,
                  "end": 870
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 866,
                "end": 870
              }
            ],
            "start": 864,
            "end": 872
          }
        ],
        "optional": false,
        "start": 861,
        "end": 873
      },
      "directive": null,
      "start": 861,
      "end": 874
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d3",
          "optional": false,
          "typeAnnotation": null,
          "start": 875,
          "end": 877
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 880,
                  "end": 881
                },
                "value": {
                  "type": "Literal",
                  "value": "world",
                  "raw": "\"world\"",
                  "start": 883,
                  "end": 890
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 880,
                "end": 890
              }
            ],
            "start": 878,
            "end": 892
          }
        ],
        "optional": false,
        "start": 875,
        "end": 893
      },
      "directive": null,
      "start": 875,
      "end": 894
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 39,
  "end": 894
}
```

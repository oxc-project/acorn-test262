__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 19
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "iBar",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 40
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
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 43,
                    "end": 44
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 46,
                      "end": 49
                    },
                    "start": 44,
                    "end": 49
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 43,
                  "end": 50
                }
              ],
              "start": 41,
              "end": 52
            },
            "declare": false,
            "start": 26,
            "end": 52
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "iFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 71
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iBar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 84
                },
                "typeArguments": null,
                "start": 80,
                "end": 84
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
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 95,
                    "end": 96
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 98,
                      "end": 101
                    },
                    "start": 96,
                    "end": 101
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 95,
                  "end": 102
                }
              ],
              "start": 85,
              "end": 108
            },
            "declare": false,
            "start": 57,
            "end": 108
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "cFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 124
            },
            "typeParameters": null,
            "superClass": null,
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
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 135,
                    "end": 136
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 138,
                      "end": 141
                    },
                    "start": 136,
                    "end": 141
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
                  "start": 135,
                  "end": 142
                }
              ],
              "start": 125,
              "end": 148
            },
            "abstract": false,
            "declare": false,
            "start": 114,
            "end": 148
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "index",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 173,
                                  "end": 176
                                },
                                "start": 171,
                                "end": 176
                              },
                              "start": 166,
                              "end": 176
                            }
                          ],
                          "typeAnnotation": null,
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 165,
                          "end": 178
                        }
                      ],
                      "start": 163,
                      "end": 180
                    },
                    "start": 161,
                    "end": 180
                  },
                  "start": 158,
                  "end": 180
                },
                "init": null,
                "definite": false,
                "start": 158,
                "end": 180
              }
            ],
            "declare": false,
            "start": 154,
            "end": 181
          }
        ],
        "start": 20,
        "end": 207
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 207
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myInt",
        "optional": false,
        "typeAnnotation": null,
        "start": 219,
        "end": 224
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "voidFn",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 237
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 241,
                "end": 245
              },
              "start": 239,
              "end": 245
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 231,
            "end": 246
          }
        ],
        "start": 225,
        "end": 248
      },
      "declare": false,
      "start": 209,
      "end": 248
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
            "name": "myVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "myInt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 260,
                  "end": 265
                },
                "typeArguments": null,
                "start": 260,
                "end": 265
              },
              "start": 258,
              "end": 265
            },
            "start": 253,
            "end": 265
          },
          "init": null,
          "definite": false,
          "start": 253,
          "end": 265
        }
      ],
      "declare": false,
      "start": 249,
      "end": 266
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
            "name": "strArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 281,
                  "end": 287
                },
                "start": 281,
                "end": 289
              },
              "start": 279,
              "end": 289
            },
            "start": 271,
            "end": 289
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myVar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 293,
                    "end": 298
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "voidFn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 299,
                    "end": 305
                  },
                  "optional": false,
                  "computed": false,
                  "start": 293,
                  "end": 305
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 293,
                "end": 307
              }
            ],
            "start": 292,
            "end": 308
          },
          "definite": false,
          "start": 271,
          "end": 308
        }
      ],
      "declare": false,
      "start": 267,
      "end": 309
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
            "name": "myArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 325,
                      "end": 331
                    },
                    "start": 325,
                    "end": 333
                  },
                  "start": 325,
                  "end": 335
                },
                "start": 325,
                "end": 337
              },
              "start": 323,
              "end": 337
            },
            "start": 316,
            "end": 337
          },
          "init": null,
          "definite": false,
          "start": 316,
          "end": 337
        }
      ],
      "declare": false,
      "start": 312,
      "end": 338
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "myArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 339,
          "end": 346
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 351,
                  "end": 352
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 354,
                  "end": 355
                }
              ],
              "start": 350,
              "end": 356
            }
          ],
          "start": 349,
          "end": 357
        },
        "start": 339,
        "end": 357
      },
      "directive": null,
      "start": 339,
      "end": 358
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isEmpty",
        "optional": false,
        "typeAnnotation": null,
        "start": 369,
        "end": 376
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
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
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 382,
                    "end": 388
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 390,
                      "end": 396
                    },
                    "start": 388,
                    "end": 396
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 382,
                  "end": 396
                }
              ],
              "start": 380,
              "end": 398
            },
            "start": 378,
            "end": 398
          },
          "start": 377,
          "end": 398
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 413,
                  "end": 414
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 415,
                  "end": 421
                },
                "optional": false,
                "computed": false,
                "start": 413,
                "end": 421
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 426,
                "end": 427
              },
              "start": 413,
              "end": 427
            },
            "start": 406,
            "end": 428
          }
        ],
        "start": 400,
        "end": 430
      },
      "expression": false,
      "start": 360,
      "end": 430
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isEmpty",
          "optional": false,
          "typeAnnotation": null,
          "start": 432,
          "end": 439
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 440,
            "end": 442
          }
        ],
        "optional": false,
        "start": 432,
        "end": 443
      },
      "directive": null,
      "start": 432,
      "end": 444
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isEmpty",
          "optional": false,
          "typeAnnotation": null,
          "start": 445,
          "end": 452
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 457,
              "end": 462
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 463,
                "end": 464
              }
            ],
            "start": 453,
            "end": 465
          }
        ],
        "optional": false,
        "start": 445,
        "end": 466
      },
      "directive": null,
      "start": 445,
      "end": 467
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isEmpty",
          "optional": false,
          "typeAnnotation": null,
          "start": 468,
          "end": 475
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 480,
              "end": 485
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 486,
                  "end": 492
                }
              ],
              "start": 485,
              "end": 493
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 494,
                "end": 495
              }
            ],
            "start": 476,
            "end": 496
          }
        ],
        "optional": false,
        "start": 468,
        "end": 497
      },
      "directive": null,
      "start": 468,
      "end": 498
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isEmpty",
          "optional": false,
          "typeAnnotation": null,
          "start": 499,
          "end": 506
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 508,
                "end": 511
              }
            ],
            "start": 507,
            "end": 512
          }
        ],
        "optional": false,
        "start": 499,
        "end": 513
      },
      "directive": null,
      "start": 499,
      "end": 514
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 514
}
```

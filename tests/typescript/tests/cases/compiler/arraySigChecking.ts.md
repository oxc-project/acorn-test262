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
        "start": 15,
        "end": 16
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
              "start": 33,
              "end": 37
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
                    "start": 40,
                    "end": 41
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 43,
                      "end": 46
                    },
                    "start": 41,
                    "end": 46
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 40,
                  "end": 47
                }
              ],
              "start": 38,
              "end": 49
            },
            "declare": false,
            "start": 23,
            "end": 49
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "iFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 68
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
                  "start": 77,
                  "end": 81
                },
                "typeArguments": null,
                "start": 77,
                "end": 81
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
                    "start": 92,
                    "end": 93
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 95,
                      "end": 98
                    },
                    "start": 93,
                    "end": 98
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 92,
                  "end": 99
                }
              ],
              "start": 82,
              "end": 105
            },
            "declare": false,
            "start": 54,
            "end": 105
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
              "start": 117,
              "end": 121
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
                    "start": 132,
                    "end": 133
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 135,
                      "end": 138
                    },
                    "start": 133,
                    "end": 138
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
                  "start": 132,
                  "end": 139
                }
              ],
              "start": 122,
              "end": 145
            },
            "abstract": false,
            "declare": false,
            "start": 111,
            "end": 145
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
                                  "start": 170,
                                  "end": 173
                                },
                                "start": 168,
                                "end": 173
                              },
                              "start": 163,
                              "end": 173
                            }
                          ],
                          "typeAnnotation": null,
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 162,
                          "end": 175
                        }
                      ],
                      "start": 160,
                      "end": 177
                    },
                    "start": 158,
                    "end": 177
                  },
                  "start": 155,
                  "end": 177
                },
                "init": null,
                "definite": false,
                "start": 155,
                "end": 177
              }
            ],
            "declare": false,
            "start": 151,
            "end": 178
          }
        ],
        "start": 17,
        "end": 204
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 204
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myInt",
        "optional": false,
        "typeAnnotation": null,
        "start": 216,
        "end": 221
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
              "start": 228,
              "end": 234
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
                "start": 238,
                "end": 242
              },
              "start": 236,
              "end": 242
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 228,
            "end": 243
          }
        ],
        "start": 222,
        "end": 245
      },
      "declare": false,
      "start": 206,
      "end": 245
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
                  "start": 257,
                  "end": 262
                },
                "typeArguments": null,
                "start": 257,
                "end": 262
              },
              "start": 255,
              "end": 262
            },
            "start": 250,
            "end": 262
          },
          "init": null,
          "definite": false,
          "start": 250,
          "end": 262
        }
      ],
      "declare": false,
      "start": 246,
      "end": 263
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
                  "start": 278,
                  "end": 284
                },
                "start": 278,
                "end": 286
              },
              "start": 276,
              "end": 286
            },
            "start": 268,
            "end": 286
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
                    "start": 290,
                    "end": 295
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "voidFn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 296,
                    "end": 302
                  },
                  "optional": false,
                  "computed": false,
                  "start": 290,
                  "end": 302
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 290,
                "end": 304
              }
            ],
            "start": 289,
            "end": 305
          },
          "definite": false,
          "start": 268,
          "end": 305
        }
      ],
      "declare": false,
      "start": 264,
      "end": 306
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
                      "start": 322,
                      "end": 328
                    },
                    "start": 322,
                    "end": 330
                  },
                  "start": 322,
                  "end": 332
                },
                "start": 322,
                "end": 334
              },
              "start": 320,
              "end": 334
            },
            "start": 313,
            "end": 334
          },
          "init": null,
          "definite": false,
          "start": 313,
          "end": 334
        }
      ],
      "declare": false,
      "start": 309,
      "end": 335
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
          "start": 336,
          "end": 343
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
                  "start": 348,
                  "end": 349
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 351,
                  "end": 352
                }
              ],
              "start": 347,
              "end": 353
            }
          ],
          "start": 346,
          "end": 354
        },
        "start": 336,
        "end": 354
      },
      "directive": null,
      "start": 336,
      "end": 355
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isEmpty",
        "optional": false,
        "typeAnnotation": null,
        "start": 366,
        "end": 373
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
                    "start": 379,
                    "end": 385
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 387,
                      "end": 393
                    },
                    "start": 385,
                    "end": 393
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 379,
                  "end": 393
                }
              ],
              "start": 377,
              "end": 395
            },
            "start": 375,
            "end": 395
          },
          "start": 374,
          "end": 395
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
                  "start": 410,
                  "end": 411
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 412,
                  "end": 418
                },
                "optional": false,
                "computed": false,
                "start": 410,
                "end": 418
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 423,
                "end": 424
              },
              "start": 410,
              "end": 424
            },
            "start": 403,
            "end": 425
          }
        ],
        "start": 397,
        "end": 427
      },
      "expression": false,
      "start": 357,
      "end": 427
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
          "start": 429,
          "end": 436
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 437,
            "end": 439
          }
        ],
        "optional": false,
        "start": 429,
        "end": 440
      },
      "directive": null,
      "start": 429,
      "end": 441
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
          "start": 442,
          "end": 449
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
              "start": 454,
              "end": 459
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 460,
                "end": 461
              }
            ],
            "start": 450,
            "end": 462
          }
        ],
        "optional": false,
        "start": 442,
        "end": 463
      },
      "directive": null,
      "start": 442,
      "end": 464
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
          "start": 465,
          "end": 472
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
              "start": 477,
              "end": 482
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 483,
                  "end": 489
                }
              ],
              "start": 482,
              "end": 490
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 491,
                "end": 492
              }
            ],
            "start": 473,
            "end": 493
          }
        ],
        "optional": false,
        "start": 465,
        "end": 494
      },
      "directive": null,
      "start": 465,
      "end": 495
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
          "start": 496,
          "end": 503
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
                "start": 505,
                "end": 508
              }
            ],
            "start": 504,
            "end": 509
          }
        ],
        "optional": false,
        "start": 496,
        "end": 510
      },
      "directive": null,
      "start": 496,
      "end": 511
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 511
}
```

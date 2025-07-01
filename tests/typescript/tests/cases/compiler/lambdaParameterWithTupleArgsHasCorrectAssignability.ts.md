__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyTupleItem",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 16
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [],
        "start": 19,
        "end": 21
      },
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyTuple",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 35
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyTupleItem",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 50
            },
            "typeArguments": null,
            "start": 39,
            "end": 50
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyTupleItem",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 55,
                  "end": 66
                },
                "typeArguments": null,
                "start": 55,
                "end": 66
              },
              "start": 55,
              "end": 68
            },
            "start": 52,
            "end": 68
          }
        ],
        "start": 38,
        "end": 69
      },
      "declare": false,
      "start": 23,
      "end": 70
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 92
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
              "start": 93,
              "end": 94
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyTuple",
                "optional": false,
                "typeAnnotation": null,
                "start": 103,
                "end": 110
              },
              "typeArguments": null,
              "start": 103,
              "end": 110
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 93,
            "end": 110
          }
        ],
        "start": 92,
        "end": 111
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "fromArgs",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 126
            },
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
                  "start": 128,
                  "end": 129
                },
                "typeArguments": null,
                "start": 128,
                "end": 129
              },
              "start": 126,
              "end": 129
            },
            "value": null,
            "start": 115,
            "end": 129
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 134,
            "end": 138
          },
          "start": 131,
          "end": 138
        },
        "start": 114,
        "end": 138
      },
      "declare": false,
      "start": 72,
      "end": 139
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 159
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
              "start": 160,
              "end": 161
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyTuple",
                "optional": false,
                "typeAnnotation": null,
                "start": 170,
                "end": 177
              },
              "typeArguments": null,
              "start": 170,
              "end": 177
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 160,
            "end": 177
          }
        ],
        "start": 159,
        "end": 178
      },
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
              "name": "from",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 189
            },
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
                      "name": "GenericFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 191,
                      "end": 206
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 207,
                            "end": 208
                          },
                          "typeArguments": null,
                          "start": 207,
                          "end": 208
                        }
                      ],
                      "start": 206,
                      "end": 209
                    },
                    "start": 191,
                    "end": 209
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 212,
                    "end": 221
                  }
                ],
                "start": 191,
                "end": 221
              },
              "start": 189,
              "end": 221
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
            "start": 185,
            "end": 222
          }
        ],
        "start": 179,
        "end": 224
      },
      "abstract": false,
      "declare": false,
      "start": 141,
      "end": 224
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 235,
        "end": 246
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
              "start": 247,
              "end": 248
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyTuple",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 264
              },
              "typeArguments": null,
              "start": 257,
              "end": 264
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 247,
            "end": 264
          }
        ],
        "start": 246,
        "end": 265
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "GenericFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 269,
                "end": 284
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 285,
                      "end": 286
                    },
                    "typeArguments": null,
                    "start": 285,
                    "end": 286
                  }
                ],
                "start": 284,
                "end": 287
              },
              "start": 269,
              "end": 287
            },
            "start": 267,
            "end": 287
          },
          "start": 266,
          "end": 287
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "GenericClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 290,
            "end": 302
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 303,
                  "end": 304
                },
                "typeArguments": null,
                "start": 303,
                "end": 304
              }
            ],
            "start": 302,
            "end": 305
          },
          "start": 290,
          "end": 305
        },
        "start": 288,
        "end": 305
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "GenericClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 323,
                "end": 335
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 336,
                      "end": 337
                    },
                    "typeArguments": null,
                    "start": 336,
                    "end": 337
                  }
                ],
                "start": 335,
                "end": 338
              },
              "arguments": [],
              "start": 319,
              "end": 355
            },
            "start": 312,
            "end": 356
          }
        ],
        "start": 306,
        "end": 358
      },
      "expression": false,
      "start": 226,
      "end": 358
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "consumeClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 369,
        "end": 381
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "GenericClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 385,
                "end": 397
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSStringKeyword",
                        "start": 399,
                        "end": 405
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 407,
                        "end": 414
                      }
                    ],
                    "start": 398,
                    "end": 415
                  }
                ],
                "start": 397,
                "end": 416
              },
              "start": 385,
              "end": 416
            },
            "start": 383,
            "end": 416
          },
          "start": 382,
          "end": 416
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 418,
        "end": 421
      },
      "expression": false,
      "start": 360,
      "end": 421
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "consumeClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 438,
          "end": 450
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 451,
              "end": 462
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 463,
                    "end": 466
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "console",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 470,
                      "end": 477
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 478,
                      "end": 481
                    },
                    "optional": false,
                    "computed": false,
                    "start": 470,
                    "end": 481
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "str",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 482,
                        "end": 485
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 486,
                        "end": 492
                      },
                      "optional": false,
                      "computed": false,
                      "start": 482,
                      "end": 492
                    }
                  ],
                  "optional": false,
                  "start": 470,
                  "end": 493
                },
                "id": null,
                "generator": false,
                "start": 463,
                "end": 493
              }
            ],
            "optional": false,
            "start": 451,
            "end": 494
          }
        ],
        "optional": false,
        "start": 438,
        "end": 495
      },
      "directive": null,
      "start": 438,
      "end": 496
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "consumeClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 513,
          "end": 525
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 526,
              "end": 537
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 539,
                    "end": 542
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_unused_num",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 544,
                    "end": 555
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "console",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 560,
                      "end": 567
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 568,
                      "end": 571
                    },
                    "optional": false,
                    "computed": false,
                    "start": 560,
                    "end": 571
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "str",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 572,
                        "end": 575
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 576,
                        "end": 582
                      },
                      "optional": false,
                      "computed": false,
                      "start": 572,
                      "end": 582
                    }
                  ],
                  "optional": false,
                  "start": 560,
                  "end": 583
                },
                "id": null,
                "generator": false,
                "start": 538,
                "end": 583
              }
            ],
            "optional": false,
            "start": 526,
            "end": 584
          }
        ],
        "optional": false,
        "start": 513,
        "end": 585
      },
      "directive": null,
      "start": 513,
      "end": 586
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 586
}
```

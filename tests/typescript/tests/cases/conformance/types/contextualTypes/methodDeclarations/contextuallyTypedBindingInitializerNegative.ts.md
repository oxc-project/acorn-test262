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
        "name": "Show",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
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
              "name": "show",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 25
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 31,
                        "end": 37
                      },
                      "start": 29,
                      "end": 37
                    },
                    "start": 28,
                    "end": 37
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 42,
                    "end": 48
                  },
                  "start": 39,
                  "end": 48
                },
                "start": 27,
                "end": 48
              },
              "start": 25,
              "end": 48
            },
            "accessibility": null,
            "static": false,
            "start": 21,
            "end": 49
          }
        ],
        "start": 15,
        "end": 51
      },
      "declare": false,
      "start": 0,
      "end": 51
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 62
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "show",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 69
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "showRename",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 81
                },
                "right": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 84,
                      "end": 85
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 89,
                    "end": 90
                  },
                  "id": null,
                  "generator": false,
                  "start": 84,
                  "end": 90
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 71,
                "end": 90
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 65,
              "end": 90
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Show",
                "optional": false,
                "typeAnnotation": null,
                "start": 94,
                "end": 98
              },
              "typeArguments": null,
              "start": 94,
              "end": 98
            },
            "start": 92,
            "end": 98
          },
          "start": 63,
          "end": 98
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 100,
        "end": 102
      },
      "expression": false,
      "start": 52,
      "end": 102
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 114
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Literal",
                "value": "show",
                "raw": "\"show\"",
                "start": 117,
                "end": 123
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "showRename",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 125,
                  "end": 135
                },
                "right": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 138,
                      "end": 139
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 143,
                    "end": 144
                  },
                  "id": null,
                  "generator": false,
                  "start": 138,
                  "end": 144
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 144
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 117,
              "end": 144
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Show",
                "optional": false,
                "typeAnnotation": null,
                "start": 148,
                "end": 152
              },
              "typeArguments": null,
              "start": 148,
              "end": 152
            },
            "start": 146,
            "end": 152
          },
          "start": 115,
          "end": 152
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 154,
        "end": 156
      },
      "expression": false,
      "start": 103,
      "end": 156
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 166,
        "end": 168
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Literal",
                "value": "show",
                "raw": "\"show\"",
                "start": 172,
                "end": 178
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "showRename",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 181,
                  "end": 191
                },
                "right": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 194,
                      "end": 195
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 199,
                    "end": 200
                  },
                  "id": null,
                  "generator": false,
                  "start": 194,
                  "end": 200
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 181,
                "end": 200
              },
              "method": false,
              "shorthand": false,
              "computed": true,
              "optional": false,
              "start": 171,
              "end": 200
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Show",
                "optional": false,
                "typeAnnotation": null,
                "start": 204,
                "end": 208
              },
              "typeArguments": null,
              "start": 204,
              "end": 208
            },
            "start": 202,
            "end": 208
          },
          "start": 169,
          "end": 208
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 210,
        "end": 212
      },
      "expression": false,
      "start": 157,
      "end": 212
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Nested",
        "optional": false,
        "typeAnnotation": null,
        "start": 224,
        "end": 230
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
              "name": "nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 237,
              "end": 243
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Show",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 245,
                  "end": 249
                },
                "typeArguments": null,
                "start": 245,
                "end": 249
              },
              "start": 243,
              "end": 249
            },
            "accessibility": null,
            "static": false,
            "start": 237,
            "end": 249
          }
        ],
        "start": 231,
        "end": 251
      },
      "declare": false,
      "start": 214,
      "end": 251
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff",
        "optional": false,
        "typeAnnotation": null,
        "start": 261,
        "end": 263
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 266,
                "end": 272
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nestedRename",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 274,
                  "end": 286
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
                        "name": "show",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 291,
                        "end": 295
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 297,
                            "end": 298
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 302,
                          "end": 303
                        },
                        "id": null,
                        "generator": false,
                        "start": 297,
                        "end": 303
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 291,
                      "end": 303
                    }
                  ],
                  "start": 289,
                  "end": 305
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 305
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 266,
              "end": 305
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 309,
                "end": 315
              },
              "typeArguments": null,
              "start": 309,
              "end": 315
            },
            "start": 307,
            "end": 315
          },
          "start": 264,
          "end": 315
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 317,
        "end": 319
      },
      "expression": false,
      "start": 252,
      "end": 319
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringIdentity",
        "optional": false,
        "typeAnnotation": null,
        "start": 331,
        "end": 345
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
              "name": "stringIdentity",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 366
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 370,
                    "end": 376
                  },
                  "start": 368,
                  "end": 376
                },
                "start": 367,
                "end": 376
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 379,
                "end": 385
              },
              "start": 377,
              "end": 385
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 352,
            "end": 386
          }
        ],
        "start": 346,
        "end": 388
      },
      "declare": false,
      "start": 321,
      "end": 388
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
                  "name": "stringIdentity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 395,
                  "end": 409
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 411,
                    "end": 413
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 416,
                        "end": 419
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 423,
                        "end": 426
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 427,
                        "end": 433
                      },
                      "optional": false,
                      "computed": false,
                      "start": 423,
                      "end": 433
                    },
                    "id": null,
                    "generator": false,
                    "start": 416,
                    "end": 433
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 411,
                  "end": 433
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 395,
                "end": 433
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringIdentity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 437,
                  "end": 451
                },
                "typeArguments": null,
                "start": 437,
                "end": 451
              },
              "start": 435,
              "end": 451
            },
            "start": 393,
            "end": 451
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "stringIdentity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 456,
                  "end": 470
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 472,
                      "end": 473
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 477,
                    "end": 478
                  },
                  "id": null,
                  "generator": false,
                  "start": 472,
                  "end": 478
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 456,
                "end": 478
              }
            ],
            "start": 454,
            "end": 479
          },
          "definite": false,
          "start": 393,
          "end": 479
        }
      ],
      "declare": false,
      "start": 389,
      "end": 480
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tuples",
        "optional": false,
        "typeAnnotation": null,
        "start": 492,
        "end": 498
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 505,
              "end": 509
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 512,
                    "end": 518
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 520,
                    "end": 526
                  }
                ],
                "start": 511,
                "end": 527
              },
              "start": 509,
              "end": 527
            },
            "accessibility": null,
            "static": false,
            "start": 505,
            "end": 528
          }
        ],
        "start": 499,
        "end": 530
      },
      "declare": false,
      "start": 482,
      "end": 530
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 540,
        "end": 541
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 544,
                "end": 548
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 544,
                  "end": 548
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 101,
                      "raw": "101",
                      "start": 552,
                      "end": 555
                    },
                    {
                      "type": "Literal",
                      "value": 1234,
                      "raw": "1234",
                      "start": 557,
                      "end": 561
                    }
                  ],
                  "start": 551,
                  "end": 562
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 544,
                "end": 562
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 544,
              "end": 562
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Tuples",
                "optional": false,
                "typeAnnotation": null,
                "start": 566,
                "end": 572
              },
              "typeArguments": null,
              "start": 566,
              "end": 572
            },
            "start": 564,
            "end": 572
          },
          "start": 542,
          "end": 572
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 574,
        "end": 576
      },
      "expression": false,
      "start": 531,
      "end": 576
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringUnion",
        "optional": false,
        "typeAnnotation": null,
        "start": 588,
        "end": 599
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 606,
              "end": 610
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 612,
                      "end": 617
                    },
                    "start": 612,
                    "end": 617
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 620,
                      "end": 625
                    },
                    "start": 620,
                    "end": 625
                  }
                ],
                "start": 612,
                "end": 625
              },
              "start": 610,
              "end": 625
            },
            "accessibility": null,
            "static": false,
            "start": 606,
            "end": 626
          }
        ],
        "start": 600,
        "end": 628
      },
      "declare": false,
      "start": 578,
      "end": 628
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null,
        "start": 638,
        "end": 639
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 642,
                "end": 646
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 642,
                  "end": 646
                },
                "right": {
                  "type": "Literal",
                  "value": "baz",
                  "raw": "\"baz\"",
                  "start": 649,
                  "end": 654
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 642,
                "end": 654
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 642,
              "end": 654
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StringUnion",
                "optional": false,
                "typeAnnotation": null,
                "start": 658,
                "end": 669
              },
              "typeArguments": null,
              "start": 658,
              "end": 669
            },
            "start": 656,
            "end": 669
          },
          "start": 640,
          "end": 669
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 671,
        "end": 673
      },
      "expression": false,
      "start": 629,
      "end": 673
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 673
}
```

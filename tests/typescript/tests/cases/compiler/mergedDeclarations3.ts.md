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
        "start": 7,
        "end": 8
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Color",
                "optional": false,
                "typeAnnotation": null,
                "start": 24,
                "end": 29
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Red",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 35,
                      "end": 38
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 35,
                    "end": 38
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Green",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 40,
                      "end": 45
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 40,
                    "end": 45
                  }
                ],
                "start": 30,
                "end": 48
              },
              "const": false,
              "declare": false,
              "start": 19,
              "end": 48
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 12,
            "end": 48
          }
        ],
        "start": 9,
        "end": 50
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 50
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 59
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Color",
                "optional": false,
                "typeAnnotation": null,
                "start": 77,
                "end": 82
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Blue",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 99,
                            "end": 103
                          },
                          "init": {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4",
                            "start": 106,
                            "end": 107
                          },
                          "definite": false,
                          "start": 99,
                          "end": 107
                        }
                      ],
                      "declare": false,
                      "start": 95,
                      "end": 108
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 88,
                    "end": 108
                  }
                ],
                "start": 83,
                "end": 112
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 70,
              "end": 112
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 63,
            "end": 112
          }
        ],
        "start": 60,
        "end": 114
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 51,
      "end": 114
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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 120
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 123,
                "end": 124
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Color",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 130
              },
              "optional": false,
              "computed": false,
              "start": 123,
              "end": 130
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Blue",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 135
            },
            "optional": false,
            "computed": false,
            "start": 123,
            "end": 135
          },
          "definite": false,
          "start": 119,
          "end": 135
        }
      ],
      "declare": false,
      "start": 115,
      "end": 136
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 151,
        "end": 152
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 178
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 181,
                "end": 188
              },
              "expression": false,
              "start": 166,
              "end": 188
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 159,
            "end": 188
          }
        ],
        "start": 153,
        "end": 190
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 144,
      "end": 190
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 199,
        "end": 200
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 217
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 239,
                          "end": 240
                        },
                        "init": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 243,
                          "end": 244
                        },
                        "definite": false,
                        "start": 239,
                        "end": 244
                      }
                    ],
                    "declare": false,
                    "start": 235,
                    "end": 245
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 228,
                  "end": 245
                }
              ],
              "start": 218,
              "end": 251
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 207,
            "end": 251
          }
        ],
        "start": 201,
        "end": 253
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 192,
      "end": 253
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 262,
        "end": 263
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 284,
                "end": 287
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 309,
                            "end": 310
                          },
                          "init": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 313,
                            "end": 314
                          },
                          "definite": false,
                          "start": 309,
                          "end": 314
                        }
                      ],
                      "declare": false,
                      "start": 305,
                      "end": 314
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 298,
                    "end": 314
                  }
                ],
                "start": 288,
                "end": 320
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 277,
              "end": 320
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 270,
            "end": 320
          }
        ],
        "start": 264,
        "end": 322
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 255,
      "end": 322
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 331,
        "end": 332
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 346,
              "end": 349
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 371,
                          "end": 372
                        },
                        "init": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 375,
                          "end": 376
                        },
                        "definite": false,
                        "start": 371,
                        "end": 376
                      }
                    ],
                    "declare": false,
                    "start": 367,
                    "end": 377
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 360,
                  "end": 377
                }
              ],
              "start": 350,
              "end": 383
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 339,
            "end": 383
          }
        ],
        "start": 333,
        "end": 385
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 324,
      "end": 385
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 387,
            "end": 388
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 389,
            "end": 392
          },
          "optional": false,
          "computed": false,
          "start": 387,
          "end": 392
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 387,
        "end": 394
      },
      "directive": null,
      "start": 387,
      "end": 394
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 401,
            "end": 402
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 403,
            "end": 406
          },
          "optional": false,
          "computed": false,
          "start": 401,
          "end": 406
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 407,
          "end": 408
        },
        "optional": false,
        "computed": false,
        "start": 401,
        "end": 408
      },
      "directive": null,
      "start": 401,
      "end": 408
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 418,
            "end": 419
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 420,
            "end": 423
          },
          "optional": false,
          "computed": false,
          "start": 418,
          "end": 423
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 424,
          "end": 425
        },
        "optional": false,
        "computed": false,
        "start": 418,
        "end": 425
      },
      "directive": null,
      "start": 418,
      "end": 425
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 432,
            "end": 433
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 434,
            "end": 437
          },
          "optional": false,
          "computed": false,
          "start": 432,
          "end": 437
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 438,
          "end": 439
        },
        "optional": false,
        "computed": false,
        "start": 432,
        "end": 439
      },
      "directive": null,
      "start": 432,
      "end": 439
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 448
}
```

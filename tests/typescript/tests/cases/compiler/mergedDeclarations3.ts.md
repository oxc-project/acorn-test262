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
        "start": 10,
        "end": 11
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
                "start": 27,
                "end": 32
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
                      "start": 38,
                      "end": 41
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 38,
                    "end": 41
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Green",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 43,
                      "end": 48
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 43,
                    "end": 48
                  }
                ],
                "start": 33,
                "end": 51
              },
              "const": false,
              "declare": false,
              "start": 22,
              "end": 51
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 15,
            "end": 51
          }
        ],
        "start": 12,
        "end": 53
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 65
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
                "start": 86,
                "end": 91
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
                            "start": 108,
                            "end": 112
                          },
                          "init": {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4",
                            "start": 115,
                            "end": 116
                          },
                          "definite": false,
                          "start": 108,
                          "end": 116
                        }
                      ],
                      "declare": false,
                      "start": 104,
                      "end": 117
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 97,
                    "end": 117
                  }
                ],
                "start": 92,
                "end": 121
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 76,
              "end": 121
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 69,
            "end": 121
          }
        ],
        "start": 66,
        "end": 123
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 54,
      "end": 123
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
            "start": 128,
            "end": 129
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
                "start": 132,
                "end": 133
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Color",
                "optional": false,
                "typeAnnotation": null,
                "start": 134,
                "end": 139
              },
              "optional": false,
              "computed": false,
              "start": 132,
              "end": 139
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Blue",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 144
            },
            "optional": false,
            "computed": false,
            "start": 132,
            "end": 144
          },
          "definite": false,
          "start": 128,
          "end": 144
        }
      ],
      "declare": false,
      "start": 124,
      "end": 145
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 164
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
                "start": 187,
                "end": 190
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
                "start": 193,
                "end": 200
              },
              "expression": false,
              "start": 178,
              "end": 200
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 171,
            "end": 200
          }
        ],
        "start": 165,
        "end": 202
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 153,
      "end": 202
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 214,
        "end": 215
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
              "start": 232,
              "end": 235
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
                          "start": 257,
                          "end": 258
                        },
                        "init": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 261,
                          "end": 262
                        },
                        "definite": false,
                        "start": 257,
                        "end": 262
                      }
                    ],
                    "declare": false,
                    "start": 253,
                    "end": 263
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 246,
                  "end": 263
                }
              ],
              "start": 236,
              "end": 269
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 222,
            "end": 269
          }
        ],
        "start": 216,
        "end": 271
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 204,
      "end": 271
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 283,
        "end": 284
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
                "start": 308,
                "end": 311
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
                            "start": 333,
                            "end": 334
                          },
                          "init": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 337,
                            "end": 338
                          },
                          "definite": false,
                          "start": 333,
                          "end": 338
                        }
                      ],
                      "declare": false,
                      "start": 329,
                      "end": 338
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 322,
                    "end": 338
                  }
                ],
                "start": 312,
                "end": 344
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 298,
              "end": 344
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 291,
            "end": 344
          }
        ],
        "start": 285,
        "end": 346
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 273,
      "end": 346
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 358,
        "end": 359
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
              "start": 376,
              "end": 379
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
                          "start": 401,
                          "end": 402
                        },
                        "init": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 405,
                          "end": 406
                        },
                        "definite": false,
                        "start": 401,
                        "end": 406
                      }
                    ],
                    "declare": false,
                    "start": 397,
                    "end": 407
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 390,
                  "end": 407
                }
              ],
              "start": 380,
              "end": 413
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 366,
            "end": 413
          }
        ],
        "start": 360,
        "end": 415
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 348,
      "end": 415
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
            "start": 417,
            "end": 418
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 419,
            "end": 422
          },
          "optional": false,
          "computed": false,
          "start": 417,
          "end": 422
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 417,
        "end": 424
      },
      "directive": null,
      "start": 417,
      "end": 424
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
            "start": 431,
            "end": 432
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 433,
            "end": 436
          },
          "optional": false,
          "computed": false,
          "start": 431,
          "end": 436
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 437,
          "end": 438
        },
        "optional": false,
        "computed": false,
        "start": 431,
        "end": 438
      },
      "directive": null,
      "start": 431,
      "end": 438
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
            "start": 448,
            "end": 449
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 450,
            "end": 453
          },
          "optional": false,
          "computed": false,
          "start": 448,
          "end": 453
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 454,
          "end": 455
        },
        "optional": false,
        "computed": false,
        "start": 448,
        "end": 455
      },
      "directive": null,
      "start": 448,
      "end": 455
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
            "start": 462,
            "end": 463
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 464,
            "end": 467
          },
          "optional": false,
          "computed": false,
          "start": 462,
          "end": 467
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 468,
          "end": 469
        },
        "optional": false,
        "computed": false,
        "start": 462,
        "end": 469
      },
      "directive": null,
      "start": 462,
      "end": 469
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 478
}
```

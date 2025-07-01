__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": true,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "response",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 138,
                      "end": 146
                    },
                    "init": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fetch",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 155,
                          "end": 160
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "URL",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 165,
                                  "end": 168
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": "../hamsters.jpg",
                                    "raw": "\"../hamsters.jpg\"",
                                    "start": 169,
                                    "end": 186
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MetaProperty",
                                      "meta": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "import",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 188,
                                        "end": 194
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "meta",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 195,
                                        "end": 199
                                      },
                                      "start": 188,
                                      "end": 199
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "url",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 200,
                                      "end": 203
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 188,
                                    "end": 203
                                  }
                                ],
                                "start": 161,
                                "end": 204
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 205,
                                "end": 213
                              },
                              "optional": false,
                              "computed": false,
                              "start": 161,
                              "end": 213
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 161,
                            "end": 215
                          }
                        ],
                        "optional": false,
                        "start": 155,
                        "end": 216
                      },
                      "start": 149,
                      "end": 216
                    },
                    "definite": false,
                    "start": 138,
                    "end": 216
                  }
                ],
                "declare": false,
                "start": 132,
                "end": 217
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
                      "name": "blob",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 226,
                      "end": 230
                    },
                    "init": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "response",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 239,
                            "end": 247
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "blob",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 248,
                            "end": 252
                          },
                          "optional": false,
                          "computed": false,
                          "start": 239,
                          "end": 252
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 239,
                        "end": 254
                      },
                      "start": 233,
                      "end": 254
                    },
                    "definite": false,
                    "start": 226,
                    "end": 254
                  }
                ],
                "declare": false,
                "start": 220,
                "end": 255
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
                      "name": "size",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 265,
                      "end": 269
                    },
                    "init": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MetaProperty",
                              "meta": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "import",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 272,
                                "end": 278
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "meta",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 279,
                                "end": 283
                              },
                              "start": 272,
                              "end": 283
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "scriptElement",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 284,
                              "end": 297
                            },
                            "optional": false,
                            "computed": false,
                            "start": 272,
                            "end": 297
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dataset",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 298,
                            "end": 305
                          },
                          "optional": false,
                          "computed": false,
                          "start": 272,
                          "end": 305
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 306,
                          "end": 310
                        },
                        "optional": false,
                        "computed": false,
                        "start": 272,
                        "end": 310
                      },
                      "operator": "||",
                      "right": {
                        "type": "Literal",
                        "value": 300,
                        "raw": "300",
                        "start": 314,
                        "end": 317
                      },
                      "start": 272,
                      "end": 317
                    },
                    "definite": false,
                    "start": 265,
                    "end": 317
                  }
                ],
                "declare": false,
                "start": 259,
                "end": 318
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
                      "name": "image",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 328,
                      "end": 333
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Image",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 340,
                        "end": 345
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 336,
                      "end": 347
                    },
                    "definite": false,
                    "start": 328,
                    "end": 347
                  }
                ],
                "declare": false,
                "start": 322,
                "end": 348
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "image",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 351,
                      "end": 356
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "src",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 357,
                      "end": 360
                    },
                    "optional": false,
                    "computed": false,
                    "start": 351,
                    "end": 360
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "URL",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 363,
                        "end": 366
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "createObjectURL",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 367,
                        "end": 382
                      },
                      "optional": false,
                      "computed": false,
                      "start": 363,
                      "end": 382
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "blob",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 383,
                        "end": 387
                      }
                    ],
                    "optional": false,
                    "start": 363,
                    "end": 388
                  },
                  "start": 351,
                  "end": 388
                },
                "directive": null,
                "start": 351,
                "end": 389
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "image",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 392,
                      "end": 397
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "width",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 398,
                      "end": 403
                    },
                    "optional": false,
                    "computed": false,
                    "start": 392,
                    "end": 403
                  },
                  "right": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "image",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 406,
                        "end": 411
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "height",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 412,
                        "end": 418
                      },
                      "optional": false,
                      "computed": false,
                      "start": 406,
                      "end": 418
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "size",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 421,
                      "end": 425
                    },
                    "start": 406,
                    "end": 425
                  },
                  "start": 392,
                  "end": 425
                },
                "directive": null,
                "start": 392,
                "end": 426
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "document",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 430,
                        "end": 438
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "body",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 439,
                        "end": 443
                      },
                      "optional": false,
                      "computed": false,
                      "start": 430,
                      "end": 443
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "appendChild",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 444,
                      "end": 455
                    },
                    "optional": false,
                    "computed": false,
                    "start": 430,
                    "end": 455
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "image",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 456,
                      "end": 461
                    }
                  ],
                  "optional": false,
                  "start": 430,
                  "end": 462
                },
                "directive": null,
                "start": 430,
                "end": 463
              }
            ],
            "start": 128,
            "end": 465
          },
          "id": null,
          "generator": false,
          "start": 116,
          "end": 465
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 115,
        "end": 468
      },
      "directive": null,
      "start": 115,
      "end": 469
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 115,
  "end": 470
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "init": {
              "type": "MetaProperty",
              "meta": {
                "type": "Identifier",
                "decorators": [],
                "name": "import",
                "optional": false,
                "typeAnnotation": null,
                "start": 15,
                "end": 21
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "meta",
                "optional": false,
                "typeAnnotation": null,
                "start": 22,
                "end": 26
              },
              "start": 15,
              "end": 26
            },
            "definite": false,
            "start": 11,
            "end": 26
          }
        ],
        "declare": false,
        "start": 7,
        "end": 27
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 27
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 40
            },
            "init": {
              "type": "MetaProperty",
              "meta": {
                "type": "Identifier",
                "decorators": [],
                "name": "import",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 49
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "metal",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 55
              },
              "start": 43,
              "end": 55
            },
            "definite": false,
            "start": 39,
            "end": 55
          }
        ],
        "declare": false,
        "start": 35,
        "end": 56
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 28,
      "end": 56
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 69
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "MetaProperty",
                  "meta": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "import",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 72,
                    "end": 78
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "import",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 79,
                    "end": 85
                  },
                  "start": 72,
                  "end": 85
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "import",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 86,
                  "end": 92
                },
                "optional": false,
                "computed": false,
                "start": 72,
                "end": 92
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "malkovich",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 102
              },
              "optional": false,
              "computed": false,
              "start": 72,
              "end": 102
            },
            "definite": false,
            "start": 68,
            "end": 102
          }
        ],
        "declare": false,
        "start": 64,
        "end": 103
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 57,
      "end": 103
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 104
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "globalA",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 11
          },
          "init": {
            "type": "MetaProperty",
            "meta": {
              "type": "Identifier",
              "decorators": [],
              "name": "import",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 20
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "meta",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 25
            },
            "start": 14,
            "end": 25
          },
          "definite": false,
          "start": 4,
          "end": 25
        }
      ],
      "declare": false,
      "start": 0,
      "end": 26
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
            "name": "globalB",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 38
          },
          "init": {
            "type": "MetaProperty",
            "meta": {
              "type": "Identifier",
              "decorators": [],
              "name": "import",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 47
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "metal",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 53
            },
            "start": 41,
            "end": 53
          },
          "definite": false,
          "start": 31,
          "end": 53
        }
      ],
      "declare": false,
      "start": 27,
      "end": 54
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
            "name": "globalC",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 66
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "MetaProperty",
                "meta": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "import",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 69,
                  "end": 75
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "import",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 82
                },
                "start": 69,
                "end": 82
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "import",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 89
              },
              "optional": false,
              "computed": false,
              "start": 69,
              "end": 89
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "malkovich",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 99
            },
            "optional": false,
            "computed": false,
            "start": 69,
            "end": 99
          },
          "definite": false,
          "start": 59,
          "end": 99
        }
      ],
      "declare": false,
      "start": 55,
      "end": 100
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 101
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ImportMeta",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 18,
                    "end": 28
                  },
                  "typeArguments": null,
                  "start": 18,
                  "end": 28
                },
                "start": 16,
                "end": 28
              },
              "start": 13,
              "end": 28
            },
            "init": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "MetaProperty",
                  "meta": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "import",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 31,
                    "end": 37
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "meta",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 38,
                    "end": 42
                  },
                  "start": 31,
                  "end": 42
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "blah",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 47
                },
                "optional": false,
                "computed": false,
                "start": 31,
                "end": 47
              },
              "right": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MetaProperty",
                    "meta": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "import",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 50,
                      "end": 56
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "meta",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 57,
                      "end": 61
                    },
                    "start": 50,
                    "end": 61
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "blue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 62,
                    "end": 66
                  },
                  "optional": false,
                  "computed": false,
                  "start": 50,
                  "end": 66
                },
                "right": {
                  "type": "MetaProperty",
                  "meta": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "import",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 69,
                    "end": 75
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "meta",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 76,
                    "end": 80
                  },
                  "start": 69,
                  "end": 80
                },
                "start": 50,
                "end": 80
              },
              "start": 31,
              "end": 80
            },
            "definite": false,
            "start": 13,
            "end": 80
          }
        ],
        "declare": false,
        "start": 7,
        "end": 81
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 81
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MetaProperty",
          "meta": {
            "type": "Identifier",
            "decorators": [],
            "name": "import",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 88
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "meta",
            "optional": false,
            "typeAnnotation": null,
            "start": 89,
            "end": 93
          },
          "start": 82,
          "end": 93
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 96,
          "end": 99
        },
        "start": 82,
        "end": 99
      },
      "directive": null,
      "start": 82,
      "end": 100
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 140,
        "end": 146
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ImportMeta",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 171
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
                    "name": "wellKnownProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 178,
                    "end": 195
                  },
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 199,
                            "end": 200
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 202,
                              "end": 208
                            },
                            "start": 200,
                            "end": 208
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 199,
                          "end": 209
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 210,
                            "end": 211
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 213,
                              "end": 219
                            },
                            "start": 211,
                            "end": 219
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 210,
                          "end": 220
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 221,
                            "end": 222
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 224,
                              "end": 231
                            },
                            "start": 222,
                            "end": 231
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 221,
                          "end": 231
                        }
                      ],
                      "start": 197,
                      "end": 233
                    },
                    "start": 195,
                    "end": 233
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 178,
                  "end": 234
                }
              ],
              "start": 172,
              "end": 238
            },
            "declare": false,
            "start": 151,
            "end": 238
          }
        ],
        "start": 147,
        "end": 240
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 132,
      "end": 240
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 250,
                  "end": 251
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 250,
                  "end": 251
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 250,
                "end": 251
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 254
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 254
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 253,
                "end": 254
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 257
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 257
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 256,
                "end": 257
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 248,
            "end": 259
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MetaProperty",
              "meta": {
                "type": "Identifier",
                "decorators": [],
                "name": "import",
                "optional": false,
                "typeAnnotation": null,
                "start": 262,
                "end": 268
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "meta",
                "optional": false,
                "typeAnnotation": null,
                "start": 269,
                "end": 273
              },
              "start": 262,
              "end": 273
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "wellKnownProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 291
            },
            "optional": false,
            "computed": false,
            "start": 262,
            "end": 291
          },
          "definite": false,
          "start": 248,
          "end": 291
        }
      ],
      "declare": false,
      "start": 242,
      "end": 292
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 292
}
```

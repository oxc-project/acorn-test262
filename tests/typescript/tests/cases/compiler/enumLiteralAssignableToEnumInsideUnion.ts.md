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
        "name": "X",
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
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 27,
                "end": 30
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 41,
                      "end": 42
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 41,
                    "end": 42
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 44,
                      "end": 45
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 44,
                    "end": 45
                  }
                ],
                "start": 31,
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
        "start": 9,
        "end": 53
      },
      "kind": "module",
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
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 62
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
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 84
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 95,
                      "end": 96
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 95,
                    "end": 96
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 98,
                      "end": 99
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 98,
                    "end": 99
                  }
                ],
                "start": 85,
                "end": 105
              },
              "const": false,
              "declare": false,
              "start": 76,
              "end": 105
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 69,
            "end": 105
          }
        ],
        "start": 63,
        "end": 107
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 54,
      "end": 107
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null,
        "start": 115,
        "end": 116
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
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 135,
                "end": 138
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 149,
                      "end": 150
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 153,
                        "end": 154
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 158,
                        "end": 159
                      },
                      "start": 153,
                      "end": 159
                    },
                    "computed": false,
                    "start": 149,
                    "end": 159
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 169,
                      "end": 170
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 173,
                        "end": 174
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 178,
                        "end": 179
                      },
                      "start": 173,
                      "end": 179
                    },
                    "computed": false,
                    "start": 169,
                    "end": 179
                  }
                ],
                "start": 139,
                "end": 186
              },
              "const": false,
              "declare": false,
              "start": 130,
              "end": 186
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 123,
            "end": 186
          }
        ],
        "start": 117,
        "end": 188
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 108,
      "end": 188
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ka",
        "optional": false,
        "typeAnnotation": null,
        "start": 196,
        "end": 198
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
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 217,
                "end": 220
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 231,
                      "end": 232
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 235,
                        "end": 236
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 240,
                        "end": 242
                      },
                      "start": 235,
                      "end": 242
                    },
                    "computed": false,
                    "start": 231,
                    "end": 242
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 252,
                      "end": 253
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 256,
                        "end": 257
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 11,
                        "raw": "11",
                        "start": 261,
                        "end": 263
                      },
                      "start": 256,
                      "end": 263
                    },
                    "computed": false,
                    "start": 252,
                    "end": 263
                  }
                ],
                "start": 221,
                "end": 270
              },
              "const": false,
              "declare": false,
              "start": 212,
              "end": 270
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 205,
            "end": 270
          }
        ],
        "start": 199,
        "end": 272
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 189,
      "end": 272
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
            "name": "e0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 283,
                        "end": 284
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 285,
                        "end": 288
                      },
                      "start": 283,
                      "end": 288
                    },
                    "typeArguments": null,
                    "start": 283,
                    "end": 288
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 291,
                    "end": 298
                  }
                ],
                "start": 283,
                "end": 298
              },
              "start": 281,
              "end": 298
            },
            "start": 279,
            "end": 298
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null,
                "start": 301,
                "end": 302
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 303,
                "end": 306
              },
              "optional": false,
              "computed": false,
              "start": 301,
              "end": 306
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 308
            },
            "optional": false,
            "computed": false,
            "start": 301,
            "end": 308
          },
          "definite": false,
          "start": 279,
          "end": 308
        }
      ],
      "declare": false,
      "start": 273,
      "end": 309
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
            "name": "e1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 326,
                        "end": 327
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 328,
                        "end": 331
                      },
                      "start": 326,
                      "end": 331
                    },
                    "typeArguments": null,
                    "start": 326,
                    "end": 331
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 334,
                    "end": 341
                  }
                ],
                "start": 326,
                "end": 341
              },
              "start": 324,
              "end": 341
            },
            "start": 322,
            "end": 341
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null,
                "start": 344,
                "end": 345
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 346,
                "end": 349
              },
              "optional": false,
              "computed": false,
              "start": 344,
              "end": 349
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 350,
              "end": 351
            },
            "optional": false,
            "computed": false,
            "start": 344,
            "end": 351
          },
          "definite": false,
          "start": 322,
          "end": 351
        }
      ],
      "declare": false,
      "start": 316,
      "end": 352
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
            "name": "e2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 391,
                          "end": 392
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 393,
                          "end": 396
                        },
                        "start": 391,
                        "end": 396
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 397,
                        "end": 398
                      },
                      "start": 391,
                      "end": 398
                    },
                    "typeArguments": null,
                    "start": 391,
                    "end": 398
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 401,
                          "end": 402
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 403,
                          "end": 406
                        },
                        "start": 401,
                        "end": 406
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 407,
                        "end": 408
                      },
                      "start": 401,
                      "end": 408
                    },
                    "typeArguments": null,
                    "start": 401,
                    "end": 408
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 411,
                    "end": 418
                  }
                ],
                "start": 391,
                "end": 418
              },
              "start": 389,
              "end": 418
            },
            "start": 387,
            "end": 418
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null,
                "start": 421,
                "end": 422
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 423,
                "end": 426
              },
              "optional": false,
              "computed": false,
              "start": 421,
              "end": 426
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 427,
              "end": 428
            },
            "optional": false,
            "computed": false,
            "start": 421,
            "end": 428
          },
          "definite": false,
          "start": 387,
          "end": 428
        }
      ],
      "declare": false,
      "start": 381,
      "end": 429
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
            "name": "e3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 459,
                          "end": 460
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 461,
                          "end": 464
                        },
                        "start": 459,
                        "end": 464
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 465,
                        "end": 466
                      },
                      "start": 459,
                      "end": 466
                    },
                    "typeArguments": null,
                    "start": 459,
                    "end": 466
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 469,
                    "end": 476
                  }
                ],
                "start": 459,
                "end": 476
              },
              "start": 457,
              "end": 476
            },
            "start": 455,
            "end": 476
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null,
                "start": 479,
                "end": 480
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 481,
                "end": 484
              },
              "optional": false,
              "computed": false,
              "start": 479,
              "end": 484
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 485,
              "end": 486
            },
            "optional": false,
            "computed": false,
            "start": 479,
            "end": 486
          },
          "definite": false,
          "start": 455,
          "end": 486
        }
      ],
      "declare": false,
      "start": 449,
      "end": 487
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
            "name": "e4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 511,
                          "end": 512
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 513,
                          "end": 516
                        },
                        "start": 511,
                        "end": 516
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 517,
                        "end": 518
                      },
                      "start": 511,
                      "end": 518
                    },
                    "typeArguments": null,
                    "start": 511,
                    "end": 518
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 521,
                    "end": 528
                  }
                ],
                "start": 511,
                "end": 528
              },
              "start": 509,
              "end": 528
            },
            "start": 507,
            "end": 528
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null,
                "start": 531,
                "end": 532
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 533,
                "end": 536
              },
              "optional": false,
              "computed": false,
              "start": 531,
              "end": 536
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 537,
              "end": 538
            },
            "optional": false,
            "computed": false,
            "start": 531,
            "end": 538
          },
          "definite": false,
          "start": 507,
          "end": 538
        }
      ],
      "declare": false,
      "start": 501,
      "end": 539
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
            "name": "e5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Ka",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 649,
                        "end": 651
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 652,
                        "end": 655
                      },
                      "start": 649,
                      "end": 655
                    },
                    "typeArguments": null,
                    "start": 649,
                    "end": 655
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 658,
                    "end": 665
                  }
                ],
                "start": 649,
                "end": 665
              },
              "start": 647,
              "end": 665
            },
            "start": 645,
            "end": 665
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null,
                "start": 668,
                "end": 669
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 670,
                "end": 673
              },
              "optional": false,
              "computed": false,
              "start": 668,
              "end": 673
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 674,
              "end": 675
            },
            "optional": false,
            "computed": false,
            "start": 668,
            "end": 675
          },
          "definite": false,
          "start": 645,
          "end": 675
        }
      ],
      "declare": false,
      "start": 639,
      "end": 676
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 682
}
```

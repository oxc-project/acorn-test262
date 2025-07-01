__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "array",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 21,
                  "end": 27
                },
                "start": 21,
                "end": 29
              },
              "start": 19,
              "end": 29
            },
            "start": 14,
            "end": 29
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 29
        }
      ],
      "declare": true,
      "start": 0,
      "end": 30
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
            "name": "map",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 50,
                  "end": 53
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 54,
                      "end": 60
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 62,
                      "end": 68
                    }
                  ],
                  "start": 53,
                  "end": 69
                },
                "start": 50,
                "end": 69
              },
              "start": 48,
              "end": 69
            },
            "start": 45,
            "end": 69
          },
          "init": null,
          "definite": false,
          "start": 45,
          "end": 69
        }
      ],
      "declare": true,
      "start": 31,
      "end": 70
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
            "name": "set",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 90,
                  "end": 93
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 94,
                      "end": 100
                    }
                  ],
                  "start": 93,
                  "end": 101
                },
                "start": 90,
                "end": 101
              },
              "start": 88,
              "end": 101
            },
            "start": 85,
            "end": 101
          },
          "init": null,
          "definite": false,
          "start": 85,
          "end": 101
        }
      ],
      "declare": true,
      "start": 71,
      "end": 102
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
            "name": "i0",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 112
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "array",
                "optional": false,
                "typeAnnotation": null,
                "start": 115,
                "end": 120
              },
              "property": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 121,
                  "end": 127
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 128,
                  "end": 136
                },
                "optional": false,
                "computed": false,
                "start": 121,
                "end": 136
              },
              "optional": false,
              "computed": true,
              "start": 115,
              "end": 137
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 115,
            "end": 139
          },
          "definite": false,
          "start": 110,
          "end": 139
        }
      ],
      "declare": false,
      "start": 104,
      "end": 140
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
            "name": "i1",
            "optional": false,
            "typeAnnotation": null,
            "start": 147,
            "end": 149
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "array",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 157
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 164
              },
              "optional": false,
              "computed": false,
              "start": 152,
              "end": 164
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 152,
            "end": 166
          },
          "definite": false,
          "start": 147,
          "end": 166
        }
      ],
      "declare": false,
      "start": 141,
      "end": 167
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
            "name": "i2",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 176
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "array",
                "optional": false,
                "typeAnnotation": null,
                "start": 179,
                "end": 184
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "keys",
                "optional": false,
                "typeAnnotation": null,
                "start": 185,
                "end": 189
              },
              "optional": false,
              "computed": false,
              "start": 179,
              "end": 189
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 179,
            "end": 191
          },
          "definite": false,
          "start": 174,
          "end": 191
        }
      ],
      "declare": false,
      "start": 168,
      "end": 192
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
            "name": "i3",
            "optional": false,
            "typeAnnotation": null,
            "start": 199,
            "end": 201
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "array",
                "optional": false,
                "typeAnnotation": null,
                "start": 204,
                "end": 209
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null,
                "start": 210,
                "end": 217
              },
              "optional": false,
              "computed": false,
              "start": 204,
              "end": 217
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 204,
            "end": 219
          },
          "definite": false,
          "start": 199,
          "end": 219
        }
      ],
      "declare": false,
      "start": 193,
      "end": 220
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 233
            },
            "init": null,
            "definite": false,
            "start": 232,
            "end": 233
          }
        ],
        "declare": false,
        "start": 226,
        "end": 233
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "array",
        "optional": false,
        "typeAnnotation": null,
        "start": 237,
        "end": 242
      },
      "body": {
        "type": "EmptyStatement",
        "start": 243,
        "end": 244
      },
      "start": 221,
      "end": 244
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
            "name": "i4",
            "optional": false,
            "typeAnnotation": null,
            "start": 252,
            "end": 254
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 260
              },
              "property": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 261,
                  "end": 267
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 268,
                  "end": 276
                },
                "optional": false,
                "computed": false,
                "start": 261,
                "end": 276
              },
              "optional": false,
              "computed": true,
              "start": 257,
              "end": 277
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 257,
            "end": 279
          },
          "definite": false,
          "start": 252,
          "end": 279
        }
      ],
      "declare": false,
      "start": 246,
      "end": 280
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
            "name": "i5",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 289
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 292,
                "end": 295
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null,
                "start": 296,
                "end": 302
              },
              "optional": false,
              "computed": false,
              "start": 292,
              "end": 302
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 292,
            "end": 304
          },
          "definite": false,
          "start": 287,
          "end": 304
        }
      ],
      "declare": false,
      "start": 281,
      "end": 305
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
            "name": "i6",
            "optional": false,
            "typeAnnotation": null,
            "start": 312,
            "end": 314
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 317,
                "end": 320
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "keys",
                "optional": false,
                "typeAnnotation": null,
                "start": 321,
                "end": 325
              },
              "optional": false,
              "computed": false,
              "start": 317,
              "end": 325
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 317,
            "end": 327
          },
          "definite": false,
          "start": 312,
          "end": 327
        }
      ],
      "declare": false,
      "start": 306,
      "end": 328
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
            "name": "i7",
            "optional": false,
            "typeAnnotation": null,
            "start": 335,
            "end": 337
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 340,
                "end": 343
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null,
                "start": 344,
                "end": 351
              },
              "optional": false,
              "computed": false,
              "start": 340,
              "end": 351
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 340,
            "end": 353
          },
          "definite": false,
          "start": 335,
          "end": 353
        }
      ],
      "declare": false,
      "start": 329,
      "end": 354
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 366,
              "end": 367
            },
            "init": null,
            "definite": false,
            "start": 366,
            "end": 367
          }
        ],
        "declare": false,
        "start": 360,
        "end": 367
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "map",
        "optional": false,
        "typeAnnotation": null,
        "start": 371,
        "end": 374
      },
      "body": {
        "type": "EmptyStatement",
        "start": 375,
        "end": 376
      },
      "start": 355,
      "end": 376
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
            "name": "i8",
            "optional": false,
            "typeAnnotation": null,
            "start": 384,
            "end": 386
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null,
                "start": 389,
                "end": 392
              },
              "property": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 393,
                  "end": 399
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 400,
                  "end": 408
                },
                "optional": false,
                "computed": false,
                "start": 393,
                "end": 408
              },
              "optional": false,
              "computed": true,
              "start": 389,
              "end": 409
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 389,
            "end": 411
          },
          "definite": false,
          "start": 384,
          "end": 411
        }
      ],
      "declare": false,
      "start": 378,
      "end": 412
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
            "name": "i9",
            "optional": false,
            "typeAnnotation": null,
            "start": 419,
            "end": 421
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 427
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null,
                "start": 428,
                "end": 434
              },
              "optional": false,
              "computed": false,
              "start": 424,
              "end": 434
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 424,
            "end": 436
          },
          "definite": false,
          "start": 419,
          "end": 436
        }
      ],
      "declare": false,
      "start": 413,
      "end": 437
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
            "name": "i10",
            "optional": false,
            "typeAnnotation": null,
            "start": 444,
            "end": 447
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null,
                "start": 450,
                "end": 453
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "keys",
                "optional": false,
                "typeAnnotation": null,
                "start": 454,
                "end": 458
              },
              "optional": false,
              "computed": false,
              "start": 450,
              "end": 458
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 450,
            "end": 460
          },
          "definite": false,
          "start": 444,
          "end": 460
        }
      ],
      "declare": false,
      "start": 438,
      "end": 461
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
            "name": "i11",
            "optional": false,
            "typeAnnotation": null,
            "start": 468,
            "end": 471
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null,
                "start": 474,
                "end": 477
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null,
                "start": 478,
                "end": 485
              },
              "optional": false,
              "computed": false,
              "start": 474,
              "end": 485
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 474,
            "end": 487
          },
          "definite": false,
          "start": 468,
          "end": 487
        }
      ],
      "declare": false,
      "start": 462,
      "end": 488
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 500,
              "end": 501
            },
            "init": null,
            "definite": false,
            "start": 500,
            "end": 501
          }
        ],
        "declare": false,
        "start": 494,
        "end": 501
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "set",
        "optional": false,
        "typeAnnotation": null,
        "start": 505,
        "end": 508
      },
      "body": {
        "type": "EmptyStatement",
        "start": 509,
        "end": 510
      },
      "start": 489,
      "end": 510
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
            "name": "i12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IterableIterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 531,
                  "end": 547
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 548,
                      "end": 554
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 556,
                      "end": 565
                    }
                  ],
                  "start": 547,
                  "end": 566
                },
                "start": 531,
                "end": 566
              },
              "start": 529,
              "end": 566
            },
            "start": 526,
            "end": 566
          },
          "init": null,
          "definite": false,
          "start": 526,
          "end": 566
        }
      ],
      "declare": true,
      "start": 512,
      "end": 567
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
            "name": "i13",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IterableIterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 587,
                  "end": 603
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 604,
                      "end": 610
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 612,
                      "end": 615
                    }
                  ],
                  "start": 603,
                  "end": 616
                },
                "start": 587,
                "end": 616
              },
              "start": 585,
              "end": 616
            },
            "start": 582,
            "end": 616
          },
          "init": null,
          "definite": false,
          "start": 582,
          "end": 616
        }
      ],
      "declare": true,
      "start": 568,
      "end": 617
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
            "name": "i14",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IterableIterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 637,
                  "end": 653
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 654,
                      "end": 660
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 662,
                      "end": 669
                    }
                  ],
                  "start": 653,
                  "end": 670
                },
                "start": 637,
                "end": 670
              },
              "start": 635,
              "end": 670
            },
            "start": 632,
            "end": 670
          },
          "init": null,
          "definite": false,
          "start": 632,
          "end": 670
        }
      ],
      "declare": true,
      "start": 618,
      "end": 671
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
            "name": "i15",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 691,
                  "end": 699
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 700,
                      "end": 706
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 708,
                      "end": 717
                    }
                  ],
                  "start": 699,
                  "end": 718
                },
                "start": 691,
                "end": 718
              },
              "start": 689,
              "end": 718
            },
            "start": 686,
            "end": 718
          },
          "init": null,
          "definite": false,
          "start": 686,
          "end": 718
        }
      ],
      "declare": true,
      "start": 672,
      "end": 719
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
            "name": "i16",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 739,
                  "end": 747
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 748,
                      "end": 754
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 756,
                      "end": 759
                    }
                  ],
                  "start": 747,
                  "end": 760
                },
                "start": 739,
                "end": 760
              },
              "start": 737,
              "end": 760
            },
            "start": 734,
            "end": 760
          },
          "init": null,
          "definite": false,
          "start": 734,
          "end": 760
        }
      ],
      "declare": true,
      "start": 720,
      "end": 761
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
            "name": "i17",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 781,
                  "end": 789
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 790,
                      "end": 796
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 798,
                      "end": 805
                    }
                  ],
                  "start": 789,
                  "end": 806
                },
                "start": 781,
                "end": 806
              },
              "start": 779,
              "end": 806
            },
            "start": 776,
            "end": 806
          },
          "init": null,
          "definite": false,
          "start": 776,
          "end": 806
        }
      ],
      "declare": true,
      "start": 762,
      "end": 807
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 807
}
```

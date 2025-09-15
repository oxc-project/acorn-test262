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
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 34
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 35,
                "end": 42
              },
              "abstract": false,
              "declare": false,
              "start": 26,
              "end": 42
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 42
          }
        ],
        "start": 13,
        "end": 44
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 44
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
            "typeAnnotation": null,
            "start": 49,
            "end": 52
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 61
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null,
                "start": 62,
                "end": 64
              },
              "optional": false,
              "computed": false,
              "start": 59,
              "end": 64
            },
            "typeArguments": null,
            "arguments": [],
            "start": 55,
            "end": 66
          },
          "definite": false,
          "start": 49,
          "end": 66
        }
      ],
      "declare": false,
      "start": 45,
      "end": 67
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 80
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 102
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 103,
                "end": 110
              },
              "abstract": false,
              "declare": false,
              "start": 94,
              "end": 110
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 87,
            "end": 110
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 119,
                  "end": 120
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 127,
                    "end": 129
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 123,
                  "end": 131
                },
                "definite": false,
                "start": 119,
                "end": 131
              }
            ],
            "declare": false,
            "start": 115,
            "end": 132
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 142
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 149,
                    "end": 151
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 145,
                  "end": 153
                },
                "definite": false,
                "start": 141,
                "end": 153
              }
            ],
            "declare": false,
            "start": 137,
            "end": 154
          }
        ],
        "start": 81,
        "end": 156
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 68,
      "end": 156
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
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 161,
            "end": 165
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null,
                "start": 172,
                "end": 174
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 177
              },
              "optional": false,
              "computed": false,
              "start": 172,
              "end": 177
            },
            "typeArguments": null,
            "arguments": [],
            "start": 168,
            "end": 179
          },
          "definite": false,
          "start": 161,
          "end": 179
        }
      ],
      "declare": false,
      "start": 157,
      "end": 180
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 192,
        "end": 194
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 214,
                "end": 216
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 217,
                "end": 224
              },
              "abstract": false,
              "declare": false,
              "start": 208,
              "end": 224
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 201,
            "end": 224
          },
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
                    "name": "b10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 240,
                    "end": 243
                  },
                  "init": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 246,
                    "end": 248
                  },
                  "definite": false,
                  "start": 240,
                  "end": 248
                }
              ],
              "declare": false,
              "start": 236,
              "end": 249
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 229,
            "end": 249
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 258,
                  "end": 259
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 266,
                    "end": 268
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 262,
                  "end": 270
                },
                "definite": false,
                "start": 258,
                "end": 270
              }
            ],
            "declare": false,
            "start": 254,
            "end": 271
          }
        ],
        "start": 195,
        "end": 273
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 182,
      "end": 273
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
            "name": "foo3",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 282
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 289,
                "end": 291
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 292,
                "end": 294
              },
              "optional": false,
              "computed": false,
              "start": 289,
              "end": 294
            },
            "typeArguments": null,
            "arguments": [],
            "start": 285,
            "end": 296
          },
          "definite": false,
          "start": 278,
          "end": 296
        }
      ],
      "declare": false,
      "start": 274,
      "end": 297
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 308,
        "end": 310
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 330,
                "end": 332
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 333,
                "end": 340
              },
              "abstract": false,
              "declare": false,
              "start": 324,
              "end": 340
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 317,
            "end": 340
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 349,
                  "end": 350
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 357,
                    "end": 359
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 353,
                  "end": 361
                },
                "definite": false,
                "start": 349,
                "end": 361
              }
            ],
            "declare": false,
            "start": 345,
            "end": 362
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 371,
                  "end": 372
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 375,
                  "end": 378
                },
                "definite": false,
                "start": 371,
                "end": 378
              }
            ],
            "declare": false,
            "start": 367,
            "end": 379
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 388,
                  "end": 389
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 396,
                    "end": 398
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 392,
                  "end": 400
                },
                "definite": false,
                "start": 388,
                "end": 400
              }
            ],
            "declare": false,
            "start": 384,
            "end": 401
          }
        ],
        "start": 311,
        "end": 403
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 298,
      "end": 403
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
            "name": "foo3",
            "optional": false,
            "typeAnnotation": null,
            "start": 408,
            "end": 412
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 419,
                "end": 421
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 422,
                "end": 424
              },
              "optional": false,
              "computed": false,
              "start": 419,
              "end": 424
            },
            "typeArguments": null,
            "arguments": [],
            "start": 415,
            "end": 426
          },
          "definite": false,
          "start": 408,
          "end": 426
        }
      ],
      "declare": false,
      "start": 404,
      "end": 427
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
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 432,
            "end": 436
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 443,
                "end": 445
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 446,
                "end": 448
              },
              "optional": false,
              "computed": false,
              "start": 443,
              "end": 448
            },
            "typeArguments": null,
            "arguments": [],
            "start": 439,
            "end": 450
          },
          "definite": false,
          "start": 432,
          "end": 450
        }
      ],
      "declare": false,
      "start": 428,
      "end": 451
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 451
}
```

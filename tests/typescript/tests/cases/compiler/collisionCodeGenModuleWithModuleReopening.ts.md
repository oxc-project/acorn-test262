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
        "start": 7,
        "end": 9
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
                "start": 29,
                "end": 31
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 32,
                "end": 39
              },
              "abstract": false,
              "declare": false,
              "start": 23,
              "end": 39
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 16,
            "end": 39
          }
        ],
        "start": 10,
        "end": 41
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 41
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
            "start": 46,
            "end": 49
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
                "start": 56,
                "end": 58
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 61
              },
              "optional": false,
              "computed": false,
              "start": 56,
              "end": 61
            },
            "typeArguments": null,
            "arguments": [],
            "start": 52,
            "end": 63
          },
          "definite": false,
          "start": 46,
          "end": 63
        }
      ],
      "declare": false,
      "start": 42,
      "end": 64
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 74
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
                "start": 94,
                "end": 96
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 97,
                "end": 104
              },
              "abstract": false,
              "declare": false,
              "start": 88,
              "end": 104
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 81,
            "end": 104
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
                  "start": 113,
                  "end": 114
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 121,
                    "end": 123
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 117,
                  "end": 125
                },
                "definite": false,
                "start": 113,
                "end": 125
              }
            ],
            "declare": false,
            "start": 109,
            "end": 126
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
                  "start": 135,
                  "end": 136
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 143,
                    "end": 145
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 139,
                  "end": 147
                },
                "definite": false,
                "start": 135,
                "end": 147
              }
            ],
            "declare": false,
            "start": 131,
            "end": 148
          }
        ],
        "start": 75,
        "end": 150
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 65,
      "end": 150
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
            "start": 155,
            "end": 159
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
                "start": 166,
                "end": 168
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 169,
                "end": 171
              },
              "optional": false,
              "computed": false,
              "start": 166,
              "end": 171
            },
            "typeArguments": null,
            "arguments": [],
            "start": 162,
            "end": 173
          },
          "definite": false,
          "start": 155,
          "end": 173
        }
      ],
      "declare": false,
      "start": 151,
      "end": 174
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 183,
        "end": 185
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
                "start": 205,
                "end": 207
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 208,
                "end": 215
              },
              "abstract": false,
              "declare": false,
              "start": 199,
              "end": 215
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 192,
            "end": 215
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
                    "start": 231,
                    "end": 234
                  },
                  "init": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 237,
                    "end": 239
                  },
                  "definite": false,
                  "start": 231,
                  "end": 239
                }
              ],
              "declare": false,
              "start": 227,
              "end": 240
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 220,
            "end": 240
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
                  "start": 249,
                  "end": 250
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 257,
                    "end": 259
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 253,
                  "end": 261
                },
                "definite": false,
                "start": 249,
                "end": 261
              }
            ],
            "declare": false,
            "start": 245,
            "end": 262
          }
        ],
        "start": 186,
        "end": 264
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 176,
      "end": 264
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
            "start": 269,
            "end": 273
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
                "start": 280,
                "end": 282
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 283,
                "end": 285
              },
              "optional": false,
              "computed": false,
              "start": 280,
              "end": 285
            },
            "typeArguments": null,
            "arguments": [],
            "start": 276,
            "end": 287
          },
          "definite": false,
          "start": 269,
          "end": 287
        }
      ],
      "declare": false,
      "start": 265,
      "end": 288
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 296,
        "end": 298
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
                "start": 318,
                "end": 320
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 321,
                "end": 328
              },
              "abstract": false,
              "declare": false,
              "start": 312,
              "end": 328
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 305,
            "end": 328
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
                  "start": 337,
                  "end": 338
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 345,
                    "end": 347
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 341,
                  "end": 349
                },
                "definite": false,
                "start": 337,
                "end": 349
              }
            ],
            "declare": false,
            "start": 333,
            "end": 350
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
                  "start": 359,
                  "end": 360
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 363,
                  "end": 366
                },
                "definite": false,
                "start": 359,
                "end": 366
              }
            ],
            "declare": false,
            "start": 355,
            "end": 367
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
                  "start": 376,
                  "end": 377
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 384,
                    "end": 386
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 380,
                  "end": 388
                },
                "definite": false,
                "start": 376,
                "end": 388
              }
            ],
            "declare": false,
            "start": 372,
            "end": 389
          }
        ],
        "start": 299,
        "end": 391
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 289,
      "end": 391
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
            "start": 396,
            "end": 400
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
                "start": 407,
                "end": 409
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 410,
                "end": 412
              },
              "optional": false,
              "computed": false,
              "start": 407,
              "end": 412
            },
            "typeArguments": null,
            "arguments": [],
            "start": 403,
            "end": 414
          },
          "definite": false,
          "start": 396,
          "end": 414
        }
      ],
      "declare": false,
      "start": 392,
      "end": 415
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
            "start": 420,
            "end": 424
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
                "start": 431,
                "end": 433
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 434,
                "end": 436
              },
              "optional": false,
              "computed": false,
              "start": 431,
              "end": 436
            },
            "typeArguments": null,
            "arguments": [],
            "start": 427,
            "end": 438
          },
          "definite": false,
          "start": 420,
          "end": 438
        }
      ],
      "declare": false,
      "start": 416,
      "end": 439
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 439
}
```

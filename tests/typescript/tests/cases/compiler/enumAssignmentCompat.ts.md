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
        "name": "W",
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
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 28,
                "end": 29
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 30,
                "end": 33
              },
              "abstract": false,
              "declare": false,
              "start": 22,
              "end": 33
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 15,
            "end": 33
          }
        ],
        "start": 9,
        "end": 35
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 35
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "W",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 43
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 52
            },
            "initializer": null,
            "computed": false,
            "start": 51,
            "end": 52
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 55
            },
            "initializer": null,
            "computed": false,
            "start": 54,
            "end": 55
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 58
            },
            "initializer": null,
            "computed": false,
            "start": 57,
            "end": 58
          }
        ],
        "start": 44,
        "end": 62
      },
      "const": false,
      "declare": false,
      "start": 37,
      "end": 62
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WStatic",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 82
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 91
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "W",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 94
                },
                "typeArguments": null,
                "start": 93,
                "end": 94
              },
              "start": 91,
              "end": 94
            },
            "accessibility": null,
            "static": false,
            "start": 90,
            "end": 95
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
              "start": 101,
              "end": 102
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "W",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 105
                },
                "typeArguments": null,
                "start": 104,
                "end": 105
              },
              "start": 102,
              "end": 105
            },
            "accessibility": null,
            "static": false,
            "start": 101,
            "end": 106
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
              "start": 112,
              "end": 113
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "W",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 115,
                  "end": 116
                },
                "typeArguments": null,
                "start": 115,
                "end": 116
              },
              "start": 113,
              "end": 116
            },
            "accessibility": null,
            "static": false,
            "start": 112,
            "end": 117
          }
        ],
        "start": 83,
        "end": 120
      },
      "declare": false,
      "start": 65,
      "end": 120
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WStatic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 131,
                  "end": 138
                },
                "typeArguments": null,
                "start": 131,
                "end": 138
              },
              "start": 129,
              "end": 138
            },
            "start": 128,
            "end": 138
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "W",
            "optional": false,
            "typeAnnotation": null,
            "start": 141,
            "end": 142
          },
          "definite": false,
          "start": 128,
          "end": 142
        }
      ],
      "declare": false,
      "start": 124,
      "end": 143
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "W",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 158,
                  "end": 159
                },
                "typeArguments": null,
                "start": 151,
                "end": 159
              },
              "start": 149,
              "end": 159
            },
            "start": 148,
            "end": 159
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "W",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 163
          },
          "definite": false,
          "start": 148,
          "end": 163
        }
      ],
      "declare": false,
      "start": 144,
      "end": 164
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 172,
                "end": 178
              },
              "start": 170,
              "end": 178
            },
            "start": 169,
            "end": 178
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "W",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 182
          },
          "definite": false,
          "start": 169,
          "end": 182
        }
      ],
      "declare": false,
      "start": 165,
      "end": 183
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 200,
                "end": 206
              },
              "start": 198,
              "end": 206
            },
            "start": 197,
            "end": 206
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "W",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 210
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 212
            },
            "optional": false,
            "computed": false,
            "start": 209,
            "end": 212
          },
          "definite": false,
          "start": 197,
          "end": 212
        }
      ],
      "declare": false,
      "start": 193,
      "end": 213
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "W",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 228,
                  "end": 229
                },
                "typeArguments": null,
                "start": 221,
                "end": 229
              },
              "start": 219,
              "end": 229
            },
            "start": 218,
            "end": 229
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "W",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 233
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
              "end": 235
            },
            "optional": false,
            "computed": false,
            "start": 232,
            "end": 235
          },
          "definite": false,
          "start": 218,
          "end": 235
        }
      ],
      "declare": false,
      "start": 214,
      "end": 236
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 260,
                    "end": 261
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 262,
                    "end": 263
                  },
                  "start": 260,
                  "end": 263
                },
                "typeArguments": null,
                "start": 253,
                "end": 263
              },
              "start": 251,
              "end": 263
            },
            "start": 250,
            "end": 263
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "W",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 267
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 268,
              "end": 269
            },
            "optional": false,
            "computed": false,
            "start": 266,
            "end": 269
          },
          "definite": false,
          "start": 250,
          "end": 269
        }
      ],
      "declare": false,
      "start": 246,
      "end": 270
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "W",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 285,
                  "end": 286
                },
                "typeArguments": null,
                "start": 278,
                "end": 286
              },
              "start": 276,
              "end": 286
            },
            "start": 275,
            "end": 286
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 289,
            "end": 290
          },
          "definite": false,
          "start": 275,
          "end": 290
        }
      ],
      "declare": false,
      "start": 271,
      "end": 291
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
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 315,
                    "end": 316
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 317,
                    "end": 318
                  },
                  "start": 315,
                  "end": 318
                },
                "typeArguments": null,
                "start": 308,
                "end": 318
              },
              "start": 306,
              "end": 318
            },
            "start": 305,
            "end": 318
          },
          "init": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 321,
            "end": 322
          },
          "definite": false,
          "start": 305,
          "end": 322
        }
      ],
      "declare": false,
      "start": 301,
      "end": 323
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WStatic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 331,
                  "end": 338
                },
                "typeArguments": null,
                "start": 331,
                "end": 338
              },
              "start": 329,
              "end": 338
            },
            "start": 328,
            "end": 338
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "W",
              "optional": false,
              "typeAnnotation": null,
              "start": 341,
              "end": 342
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 344
            },
            "optional": false,
            "computed": false,
            "start": 341,
            "end": 344
          },
          "definite": false,
          "start": 328,
          "end": 344
        }
      ],
      "declare": false,
      "start": 324,
      "end": 345
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
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WStatic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 362,
                  "end": 369
                },
                "typeArguments": null,
                "start": 362,
                "end": 369
              },
              "start": 360,
              "end": 369
            },
            "start": 359,
            "end": 369
          },
          "init": {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 372,
            "end": 373
          },
          "definite": false,
          "start": 359,
          "end": 373
        }
      ],
      "declare": false,
      "start": 355,
      "end": 374
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
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "W",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 391,
                  "end": 392
                },
                "typeArguments": null,
                "start": 391,
                "end": 392
              },
              "start": 389,
              "end": 392
            },
            "start": 388,
            "end": 392
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 395,
            "end": 396
          },
          "definite": false,
          "start": 388,
          "end": 396
        }
      ],
      "declare": false,
      "start": 384,
      "end": 397
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "W",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 405,
                  "end": 406
                },
                "typeArguments": null,
                "start": 405,
                "end": 406
              },
              "start": 403,
              "end": 406
            },
            "start": 402,
            "end": 406
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "W",
              "optional": false,
              "typeAnnotation": null,
              "start": 409,
              "end": 410
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 411,
              "end": 412
            },
            "optional": false,
            "computed": false,
            "start": 409,
            "end": 412
          },
          "definite": false,
          "start": 402,
          "end": 412
        }
      ],
      "declare": false,
      "start": 398,
      "end": 413
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 414,
          "end": 415
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "W",
            "optional": false,
            "typeAnnotation": null,
            "start": 418,
            "end": 419
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 420,
            "end": 421
          },
          "optional": false,
          "computed": false,
          "start": 418,
          "end": 421
        },
        "start": 414,
        "end": 421
      },
      "directive": null,
      "start": 414,
      "end": 422
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "W",
          "optional": false,
          "typeAnnotation": null,
          "start": 423,
          "end": 424
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 425,
          "end": 426
        },
        "optional": false,
        "computed": false,
        "start": 423,
        "end": 426
      },
      "directive": null,
      "start": 423,
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
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 435,
                    "end": 436
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 437,
                    "end": 438
                  },
                  "start": 435,
                  "end": 438
                },
                "typeArguments": null,
                "start": 435,
                "end": 438
              },
              "start": 433,
              "end": 438
            },
            "start": 432,
            "end": 438
          },
          "init": null,
          "definite": false,
          "start": 432,
          "end": 438
        }
      ],
      "declare": false,
      "start": 428,
      "end": 439
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 439
}
```

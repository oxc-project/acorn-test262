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
        "start": 10,
        "end": 11
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
                "start": 31,
                "end": 32
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 33,
                "end": 36
              },
              "abstract": false,
              "declare": false,
              "start": 25,
              "end": 36
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 36
          }
        ],
        "start": 12,
        "end": 38
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "W",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 46
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 58
            },
            "initializer": null,
            "computed": false,
            "start": 57,
            "end": 58
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 61
            },
            "initializer": null,
            "computed": false,
            "start": 60,
            "end": 61
          }
        ],
        "start": 47,
        "end": 65
      },
      "const": false,
      "declare": false,
      "start": 40,
      "end": 65
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WStatic",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 85
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
              "start": 93,
              "end": 94
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
                  "start": 96,
                  "end": 97
                },
                "typeArguments": null,
                "start": 96,
                "end": 97
              },
              "start": 94,
              "end": 97
            },
            "accessibility": null,
            "static": false,
            "start": 93,
            "end": 98
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
              "start": 104,
              "end": 105
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
                  "start": 107,
                  "end": 108
                },
                "typeArguments": null,
                "start": 107,
                "end": 108
              },
              "start": 105,
              "end": 108
            },
            "accessibility": null,
            "static": false,
            "start": 104,
            "end": 109
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
              "start": 115,
              "end": 116
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
                  "start": 118,
                  "end": 119
                },
                "typeArguments": null,
                "start": 118,
                "end": 119
              },
              "start": 116,
              "end": 119
            },
            "accessibility": null,
            "static": false,
            "start": 115,
            "end": 120
          }
        ],
        "start": 86,
        "end": 123
      },
      "declare": false,
      "start": 68,
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
                  "start": 134,
                  "end": 141
                },
                "typeArguments": null,
                "start": 134,
                "end": 141
              },
              "start": 132,
              "end": 141
            },
            "start": 131,
            "end": 141
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "W",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 145
          },
          "definite": false,
          "start": 131,
          "end": 145
        }
      ],
      "declare": false,
      "start": 127,
      "end": 146
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
                  "start": 161,
                  "end": 162
                },
                "typeArguments": null,
                "start": 154,
                "end": 162
              },
              "start": 152,
              "end": 162
            },
            "start": 151,
            "end": 162
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "W",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 166
          },
          "definite": false,
          "start": 151,
          "end": 166
        }
      ],
      "declare": false,
      "start": 147,
      "end": 167
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
                "start": 175,
                "end": 181
              },
              "start": 173,
              "end": 181
            },
            "start": 172,
            "end": 181
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "W",
            "optional": false,
            "typeAnnotation": null,
            "start": 184,
            "end": 185
          },
          "definite": false,
          "start": 172,
          "end": 185
        }
      ],
      "declare": false,
      "start": 168,
      "end": 186
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
                "start": 203,
                "end": 209
              },
              "start": 201,
              "end": 209
            },
            "start": 200,
            "end": 209
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "W",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 213
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 215
            },
            "optional": false,
            "computed": false,
            "start": 212,
            "end": 215
          },
          "definite": false,
          "start": 200,
          "end": 215
        }
      ],
      "declare": false,
      "start": 196,
      "end": 216
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
                  "start": 231,
                  "end": 232
                },
                "typeArguments": null,
                "start": 224,
                "end": 232
              },
              "start": 222,
              "end": 232
            },
            "start": 221,
            "end": 232
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "W",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 236
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 237,
              "end": 238
            },
            "optional": false,
            "computed": false,
            "start": 235,
            "end": 238
          },
          "definite": false,
          "start": 221,
          "end": 238
        }
      ],
      "declare": false,
      "start": 217,
      "end": 239
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
                    "start": 263,
                    "end": 264
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 265,
                    "end": 266
                  },
                  "start": 263,
                  "end": 266
                },
                "typeArguments": null,
                "start": 256,
                "end": 266
              },
              "start": 254,
              "end": 266
            },
            "start": 253,
            "end": 266
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "W",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 270
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 271,
              "end": 272
            },
            "optional": false,
            "computed": false,
            "start": 269,
            "end": 272
          },
          "definite": false,
          "start": 253,
          "end": 272
        }
      ],
      "declare": false,
      "start": 249,
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
                  "start": 288,
                  "end": 289
                },
                "typeArguments": null,
                "start": 281,
                "end": 289
              },
              "start": 279,
              "end": 289
            },
            "start": 278,
            "end": 289
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 292,
            "end": 293
          },
          "definite": false,
          "start": 278,
          "end": 293
        }
      ],
      "declare": false,
      "start": 274,
      "end": 294
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
                    "start": 318,
                    "end": 319
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 320,
                    "end": 321
                  },
                  "start": 318,
                  "end": 321
                },
                "typeArguments": null,
                "start": 311,
                "end": 321
              },
              "start": 309,
              "end": 321
            },
            "start": 308,
            "end": 321
          },
          "init": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 324,
            "end": 325
          },
          "definite": false,
          "start": 308,
          "end": 325
        }
      ],
      "declare": false,
      "start": 304,
      "end": 326
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
                  "start": 334,
                  "end": 341
                },
                "typeArguments": null,
                "start": 334,
                "end": 341
              },
              "start": 332,
              "end": 341
            },
            "start": 331,
            "end": 341
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "W",
              "optional": false,
              "typeAnnotation": null,
              "start": 344,
              "end": 345
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 346,
              "end": 347
            },
            "optional": false,
            "computed": false,
            "start": 344,
            "end": 347
          },
          "definite": false,
          "start": 331,
          "end": 347
        }
      ],
      "declare": false,
      "start": 327,
      "end": 348
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
                  "start": 365,
                  "end": 372
                },
                "typeArguments": null,
                "start": 365,
                "end": 372
              },
              "start": 363,
              "end": 372
            },
            "start": 362,
            "end": 372
          },
          "init": {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 375,
            "end": 376
          },
          "definite": false,
          "start": 362,
          "end": 376
        }
      ],
      "declare": false,
      "start": 358,
      "end": 377
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
                  "start": 394,
                  "end": 395
                },
                "typeArguments": null,
                "start": 394,
                "end": 395
              },
              "start": 392,
              "end": 395
            },
            "start": 391,
            "end": 395
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 398,
            "end": 399
          },
          "definite": false,
          "start": 391,
          "end": 399
        }
      ],
      "declare": false,
      "start": 387,
      "end": 400
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
                  "start": 408,
                  "end": 409
                },
                "typeArguments": null,
                "start": 408,
                "end": 409
              },
              "start": 406,
              "end": 409
            },
            "start": 405,
            "end": 409
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "W",
              "optional": false,
              "typeAnnotation": null,
              "start": 412,
              "end": 413
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 414,
              "end": 415
            },
            "optional": false,
            "computed": false,
            "start": 412,
            "end": 415
          },
          "definite": false,
          "start": 405,
          "end": 415
        }
      ],
      "declare": false,
      "start": 401,
      "end": 416
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
          "start": 417,
          "end": 418
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "W",
            "optional": false,
            "typeAnnotation": null,
            "start": 421,
            "end": 422
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 423,
            "end": 424
          },
          "optional": false,
          "computed": false,
          "start": 421,
          "end": 424
        },
        "start": 417,
        "end": 424
      },
      "directive": null,
      "start": 417,
      "end": 425
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
          "start": 426,
          "end": 427
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 428,
          "end": 429
        },
        "optional": false,
        "computed": false,
        "start": 426,
        "end": 429
      },
      "directive": null,
      "start": 426,
      "end": 430
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
                    "start": 438,
                    "end": 439
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 440,
                    "end": 441
                  },
                  "start": 438,
                  "end": 441
                },
                "typeArguments": null,
                "start": 438,
                "end": 441
              },
              "start": 436,
              "end": 441
            },
            "start": 435,
            "end": 441
          },
          "init": null,
          "definite": false,
          "start": 435,
          "end": 441
        }
      ],
      "declare": false,
      "start": 431,
      "end": 442
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 442
}
```

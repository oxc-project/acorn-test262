__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
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
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 35
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 37,
                "end": 43
              },
              "start": 35,
              "end": 43
            },
            "accessibility": null,
            "static": false,
            "start": 21,
            "end": 44
          }
        ],
        "start": 15,
        "end": 46
      },
      "declare": false,
      "start": 0,
      "end": 46
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Identical",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 66
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
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 87
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 89,
                "end": 95
              },
              "start": 87,
              "end": 95
            },
            "accessibility": null,
            "static": false,
            "start": 73,
            "end": 96
          }
        ],
        "start": 67,
        "end": 98
      },
      "declare": false,
      "start": 47,
      "end": 98
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mutable",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 116
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 128
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 130,
                "end": 136
              },
              "start": 128,
              "end": 136
            },
            "accessibility": null,
            "static": false,
            "start": 123,
            "end": 137
          }
        ],
        "start": 117,
        "end": 139
      },
      "declare": false,
      "start": 99,
      "end": 139
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DifferentType",
        "optional": false,
        "typeAnnotation": null,
        "start": 150,
        "end": 163
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
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 184
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 186,
                "end": 192
              },
              "start": 184,
              "end": 192
            },
            "accessibility": null,
            "static": false,
            "start": 170,
            "end": 193
          }
        ],
        "start": 164,
        "end": 195
      },
      "declare": false,
      "start": 140,
      "end": 195
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DifferentName",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 219
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
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 240
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 242,
                "end": 248
              },
              "start": 240,
              "end": 248
            },
            "accessibility": null,
            "static": false,
            "start": 226,
            "end": 249
          }
        ],
        "start": 220,
        "end": 251
      },
      "declare": false,
      "start": 196,
      "end": 251
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
            "name": "base",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 262,
                  "end": 266
                },
                "typeArguments": null,
                "start": 262,
                "end": 266
              },
              "start": 260,
              "end": 266
            },
            "start": 256,
            "end": 266
          },
          "init": null,
          "definite": false,
          "start": 256,
          "end": 266
        }
      ],
      "declare": false,
      "start": 252,
      "end": 267
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
            "name": "base",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 272
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 278
          },
          "optional": false,
          "computed": false,
          "start": 268,
          "end": 278
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 281,
          "end": 283
        },
        "start": 268,
        "end": 283
      },
      "directive": null,
      "start": 268,
      "end": 283
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
            "name": "identical",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 342,
                      "end": 346
                    },
                    "typeArguments": null,
                    "start": 342,
                    "end": 346
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Identical",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 349,
                      "end": 358
                    },
                    "typeArguments": null,
                    "start": 349,
                    "end": 358
                  }
                ],
                "start": 342,
                "end": 358
              },
              "start": 340,
              "end": 358
            },
            "start": 331,
            "end": 358
          },
          "init": null,
          "definite": false,
          "start": 331,
          "end": 358
        }
      ],
      "declare": false,
      "start": 327,
      "end": 359
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
            "name": "identical",
            "optional": false,
            "typeAnnotation": null,
            "start": 360,
            "end": 369
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 370,
            "end": 375
          },
          "optional": false,
          "computed": false,
          "start": 360,
          "end": 375
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 378,
          "end": 380
        },
        "start": 360,
        "end": 380
      },
      "directive": null,
      "start": 360,
      "end": 381
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
            "name": "mutable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 438,
                      "end": 442
                    },
                    "typeArguments": null,
                    "start": 438,
                    "end": 442
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Mutable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 445,
                      "end": 452
                    },
                    "typeArguments": null,
                    "start": 445,
                    "end": 452
                  }
                ],
                "start": 438,
                "end": 452
              },
              "start": 436,
              "end": 452
            },
            "start": 429,
            "end": 452
          },
          "init": null,
          "definite": false,
          "start": 429,
          "end": 452
        }
      ],
      "declare": false,
      "start": 425,
      "end": 453
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
            "name": "mutable",
            "optional": false,
            "typeAnnotation": null,
            "start": 454,
            "end": 461
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 462,
            "end": 467
          },
          "optional": false,
          "computed": false,
          "start": 454,
          "end": 467
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 470,
          "end": 472
        },
        "start": 454,
        "end": 472
      },
      "directive": null,
      "start": 454,
      "end": 473
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
            "name": "differentType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 493,
                      "end": 497
                    },
                    "typeArguments": null,
                    "start": 493,
                    "end": 497
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DifferentType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 500,
                      "end": 513
                    },
                    "typeArguments": null,
                    "start": 500,
                    "end": 513
                  }
                ],
                "start": 493,
                "end": 513
              },
              "start": 491,
              "end": 513
            },
            "start": 478,
            "end": 513
          },
          "init": null,
          "definite": false,
          "start": 478,
          "end": 513
        }
      ],
      "declare": false,
      "start": 474,
      "end": 514
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
            "name": "differentType",
            "optional": false,
            "typeAnnotation": null,
            "start": 515,
            "end": 528
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 529,
            "end": 534
          },
          "optional": false,
          "computed": false,
          "start": 515,
          "end": 534
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 537,
          "end": 539
        },
        "start": 515,
        "end": 539
      },
      "directive": null,
      "start": 515,
      "end": 540
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
            "name": "differentName",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 603,
                      "end": 607
                    },
                    "typeArguments": null,
                    "start": 603,
                    "end": 607
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DifferentName",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 610,
                      "end": 623
                    },
                    "typeArguments": null,
                    "start": 610,
                    "end": 623
                  }
                ],
                "start": 603,
                "end": 623
              },
              "start": 601,
              "end": 623
            },
            "start": 588,
            "end": 623
          },
          "init": null,
          "definite": false,
          "start": 588,
          "end": 623
        }
      ],
      "declare": false,
      "start": 584,
      "end": 624
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
            "name": "differentName",
            "optional": false,
            "typeAnnotation": null,
            "start": 625,
            "end": 638
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 639,
            "end": 644
          },
          "optional": false,
          "computed": false,
          "start": 625,
          "end": 644
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 647,
          "end": 649
        },
        "start": 625,
        "end": 649
      },
      "directive": null,
      "start": 625,
      "end": 650
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 691
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 10,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 21,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 30,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 37,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 47,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "Identical",
    "start": 57,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 73,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 82,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 99,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "Mutable",
    "start": 109,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 123,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 130,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 140,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "DifferentType",
    "start": 150,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 170,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 179,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 186,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 194,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 196,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "DifferentName",
    "start": 206,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 226,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 235,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 242,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 252,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 256,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 262,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 268,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 273,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 279,
    "end": 280
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 281,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 327,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "identical",
    "start": 331,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 342,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "Identical",
    "start": 349,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "identical",
    "start": 360,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 370,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 376,
    "end": 377
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 378,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 380,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 425,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "mutable",
    "start": 429,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 438,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "Mutable",
    "start": 445,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "mutable",
    "start": 454,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 462,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 468,
    "end": 469
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 470,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 474,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "differentType",
    "start": 478,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 493,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "DifferentType",
    "start": 500,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "differentType",
    "start": 515,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 529,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 535,
    "end": 536
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 537,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 539,
    "end": 540
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 584,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "differentName",
    "start": 588,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 603,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "DifferentName",
    "start": 610,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "differentName",
    "start": 625,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 639,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 645,
    "end": 646
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 647,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 649,
    "end": 650
  }
]
```

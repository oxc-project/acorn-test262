__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 13
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 13
          }
        ],
        "start": 11,
        "end": 14
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 18,
                "end": 19
              },
              "typeArguments": null,
              "start": 18,
              "end": 19
            },
            "start": 16,
            "end": 19
          },
          "start": 15,
          "end": 19
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 31
                },
                "typeArguments": null,
                "start": 30,
                "end": 31
              },
              "start": 24,
              "end": 31
            },
            "start": 22,
            "end": 31
          },
          "start": 21,
          "end": 31
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 46,
                "end": 47
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 49
              },
              "optional": false,
              "computed": true,
              "start": 46,
              "end": 50
            },
            "start": 39,
            "end": 51
          }
        ],
        "start": 33,
        "end": 53
      },
      "expression": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 66
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 68
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 67,
            "end": 68
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 71
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 86,
                  "end": 87
                },
                "typeArguments": null,
                "start": 86,
                "end": 87
              },
              "start": 80,
              "end": 87
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 70,
            "end": 87
          }
        ],
        "start": 66,
        "end": 88
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 92,
                "end": 93
              },
              "typeArguments": null,
              "start": 92,
              "end": 93
            },
            "start": 90,
            "end": 93
          },
          "start": 89,
          "end": 93
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 98,
                "end": 99
              },
              "typeArguments": null,
              "start": 98,
              "end": 99
            },
            "start": 96,
            "end": 99
          },
          "start": 95,
          "end": 99
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 114,
                "end": 115
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 116,
                "end": 117
              },
              "optional": false,
              "computed": true,
              "start": 114,
              "end": 118
            },
            "start": 107,
            "end": 119
          }
        ],
        "start": 101,
        "end": 121
      },
      "expression": false,
      "start": 55,
      "end": 121
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 134
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 136
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 135,
            "end": 136
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 139
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 148,
                "end": 149
              },
              "typeArguments": null,
              "start": 148,
              "end": 149
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 138,
            "end": 149
          }
        ],
        "start": 134,
        "end": 150
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 155
              },
              "typeArguments": null,
              "start": 154,
              "end": 155
            },
            "start": 152,
            "end": 155
          },
          "start": 151,
          "end": 155
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 160,
                "end": 161
              },
              "typeArguments": null,
              "start": 160,
              "end": 161
            },
            "start": 158,
            "end": 161
          },
          "start": 157,
          "end": 161
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 172,
                  "end": 173
                },
                "typeArguments": null,
                "start": 172,
                "end": 173
              },
              "start": 166,
              "end": 173
            },
            "start": 164,
            "end": 173
          },
          "start": 163,
          "end": 173
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 181,
                  "end": 182
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 183,
                  "end": 184
                },
                "optional": false,
                "computed": true,
                "start": 181,
                "end": 185
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 188,
                  "end": 189
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 190,
                  "end": 191
                },
                "optional": false,
                "computed": true,
                "start": 188,
                "end": 192
              },
              "start": 181,
              "end": 192
            },
            "directive": null,
            "start": 181,
            "end": 193
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 198,
                  "end": 199
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 200,
                  "end": 201
                },
                "optional": false,
                "computed": true,
                "start": 198,
                "end": 202
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 205,
                  "end": 206
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 208
                },
                "optional": false,
                "computed": true,
                "start": 205,
                "end": 209
              },
              "start": 198,
              "end": 209
            },
            "directive": null,
            "start": 198,
            "end": 210
          }
        ],
        "start": 175,
        "end": 222
      },
      "expression": false,
      "start": 123,
      "end": 222
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 235
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 237
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 236,
            "end": 237
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 240
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 249,
                "end": 250
              },
              "typeArguments": null,
              "start": 249,
              "end": 250
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 239,
            "end": 250
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 253
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 268,
                  "end": 269
                },
                "typeArguments": null,
                "start": 268,
                "end": 269
              },
              "start": 262,
              "end": 269
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 252,
            "end": 269
          }
        ],
        "start": 235,
        "end": 270
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 275
              },
              "typeArguments": null,
              "start": 274,
              "end": 275
            },
            "start": 272,
            "end": 275
          },
          "start": 271,
          "end": 275
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 280,
                "end": 281
              },
              "typeArguments": null,
              "start": 280,
              "end": 281
            },
            "start": 278,
            "end": 281
          },
          "start": 277,
          "end": 281
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 286,
                "end": 287
              },
              "typeArguments": null,
              "start": 286,
              "end": 287
            },
            "start": 284,
            "end": 287
          },
          "start": 283,
          "end": 287
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 295,
                  "end": 296
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 298
                },
                "optional": false,
                "computed": true,
                "start": 295,
                "end": 299
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 302,
                  "end": 303
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 305
                },
                "optional": false,
                "computed": true,
                "start": 302,
                "end": 306
              },
              "start": 295,
              "end": 306
            },
            "directive": null,
            "start": 295,
            "end": 307
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 312,
                  "end": 313
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 314,
                  "end": 315
                },
                "optional": false,
                "computed": true,
                "start": 312,
                "end": 316
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 319,
                  "end": 320
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 321,
                  "end": 322
                },
                "optional": false,
                "computed": true,
                "start": 319,
                "end": 323
              },
              "start": 312,
              "end": 323
            },
            "directive": null,
            "start": 312,
            "end": 324
          }
        ],
        "start": 289,
        "end": 336
      },
      "expression": false,
      "start": 224,
      "end": 336
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 347,
        "end": 349
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 350,
              "end": 351
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 350,
            "end": 351
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 353,
              "end": 354
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 364
              },
              "typeArguments": null,
              "start": 363,
              "end": 364
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 353,
            "end": 364
          }
        ],
        "start": 349,
        "end": 365
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 369,
                "end": 370
              },
              "typeArguments": null,
              "start": 369,
              "end": 370
            },
            "start": 367,
            "end": 370
          },
          "start": 366,
          "end": 370
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 375,
                "end": 376
              },
              "typeArguments": null,
              "start": 375,
              "end": 376
            },
            "start": 373,
            "end": 376
          },
          "start": 372,
          "end": 376
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 387,
                  "end": 388
                },
                "typeArguments": null,
                "start": 387,
                "end": 388
              },
              "start": 381,
              "end": 388
            },
            "start": 379,
            "end": 388
          },
          "start": 378,
          "end": 388
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 396,
                  "end": 397
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 398,
                  "end": 399
                },
                "optional": false,
                "computed": true,
                "start": 396,
                "end": 400
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 403,
                  "end": 404
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 405,
                  "end": 406
                },
                "optional": false,
                "computed": true,
                "start": 403,
                "end": 407
              },
              "start": 396,
              "end": 407
            },
            "directive": null,
            "start": 396,
            "end": 408
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 423,
                  "end": 424
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 425,
                  "end": 426
                },
                "optional": false,
                "computed": true,
                "start": 423,
                "end": 427
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 430,
                  "end": 431
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 432,
                  "end": 433
                },
                "optional": false,
                "computed": true,
                "start": 430,
                "end": 434
              },
              "start": 423,
              "end": 434
            },
            "directive": null,
            "start": 423,
            "end": 435
          }
        ],
        "start": 390,
        "end": 447
      },
      "expression": false,
      "start": 338,
      "end": 447
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 458,
        "end": 460
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 461,
              "end": 462
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 461,
            "end": 462
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 464,
              "end": 465
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 474,
                "end": 475
              },
              "typeArguments": null,
              "start": 474,
              "end": 475
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 464,
            "end": 475
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 477,
              "end": 478
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 493,
                  "end": 494
                },
                "typeArguments": null,
                "start": 493,
                "end": 494
              },
              "start": 487,
              "end": 494
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 477,
            "end": 494
          }
        ],
        "start": 460,
        "end": 495
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 499,
                "end": 500
              },
              "typeArguments": null,
              "start": 499,
              "end": 500
            },
            "start": 497,
            "end": 500
          },
          "start": 496,
          "end": 500
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 505,
                "end": 506
              },
              "typeArguments": null,
              "start": 505,
              "end": 506
            },
            "start": 503,
            "end": 506
          },
          "start": 502,
          "end": 506
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 511,
                "end": 512
              },
              "typeArguments": null,
              "start": 511,
              "end": 512
            },
            "start": 509,
            "end": 512
          },
          "start": 508,
          "end": 512
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 520,
                  "end": 521
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 522,
                  "end": 523
                },
                "optional": false,
                "computed": true,
                "start": 520,
                "end": 524
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 527,
                  "end": 528
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 529,
                  "end": 530
                },
                "optional": false,
                "computed": true,
                "start": 527,
                "end": 531
              },
              "start": 520,
              "end": 531
            },
            "directive": null,
            "start": 520,
            "end": 532
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 547,
                  "end": 548
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 549,
                  "end": 550
                },
                "optional": false,
                "computed": true,
                "start": 547,
                "end": 551
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 554,
                  "end": 555
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 556,
                  "end": 557
                },
                "optional": false,
                "computed": true,
                "start": 554,
                "end": 558
              },
              "start": 547,
              "end": 558
            },
            "directive": null,
            "start": 547,
            "end": 559
          }
        ],
        "start": 514,
        "end": 571
      },
      "expression": false,
      "start": 449,
      "end": 571
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 582,
        "end": 585
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 586,
              "end": 587
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 586,
            "end": 587
          }
        ],
        "start": 585,
        "end": 588
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 592,
                "end": 593
              },
              "typeArguments": null,
              "start": 592,
              "end": 593
            },
            "start": 590,
            "end": 593
          },
          "start": 589,
          "end": 593
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 598,
                "end": 605
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 606,
                      "end": 607
                    },
                    "typeArguments": null,
                    "start": 606,
                    "end": 607
                  }
                ],
                "start": 605,
                "end": 608
              },
              "start": 598,
              "end": 608
            },
            "start": 596,
            "end": 608
          },
          "start": 595,
          "end": 608
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 619,
                  "end": 620
                },
                "typeArguments": null,
                "start": 619,
                "end": 620
              },
              "start": 613,
              "end": 620
            },
            "start": 611,
            "end": 620
          },
          "start": 610,
          "end": 620
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 628,
                  "end": 629
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 630,
                  "end": 631
                },
                "optional": false,
                "computed": true,
                "start": 628,
                "end": 632
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 635,
                  "end": 636
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 637,
                  "end": 638
                },
                "optional": false,
                "computed": true,
                "start": 635,
                "end": 639
              },
              "start": 628,
              "end": 639
            },
            "directive": null,
            "start": 628,
            "end": 640
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 655,
                  "end": 656
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 657,
                  "end": 658
                },
                "optional": false,
                "computed": true,
                "start": 655,
                "end": 659
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 662,
                  "end": 663
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 664,
                  "end": 665
                },
                "optional": false,
                "computed": true,
                "start": 662,
                "end": 666
              },
              "start": 655,
              "end": 666
            },
            "directive": null,
            "start": 655,
            "end": 667
          }
        ],
        "start": 622,
        "end": 669
      },
      "expression": false,
      "start": 573,
      "end": 669
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 680,
        "end": 683
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 684,
              "end": 685
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 684,
            "end": 685
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 687,
              "end": 688
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 703,
                  "end": 704
                },
                "typeArguments": null,
                "start": 703,
                "end": 704
              },
              "start": 697,
              "end": 704
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 687,
            "end": 704
          }
        ],
        "start": 683,
        "end": 705
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 709,
                "end": 710
              },
              "typeArguments": null,
              "start": 709,
              "end": 710
            },
            "start": 707,
            "end": 710
          },
          "start": 706,
          "end": 710
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 715,
                "end": 722
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 723,
                      "end": 724
                    },
                    "typeArguments": null,
                    "start": 723,
                    "end": 724
                  }
                ],
                "start": 722,
                "end": 725
              },
              "start": 715,
              "end": 725
            },
            "start": 713,
            "end": 725
          },
          "start": 712,
          "end": 725
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 730,
                "end": 731
              },
              "typeArguments": null,
              "start": 730,
              "end": 731
            },
            "start": 728,
            "end": 731
          },
          "start": 727,
          "end": 731
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 739,
                  "end": 740
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 741,
                  "end": 742
                },
                "optional": false,
                "computed": true,
                "start": 739,
                "end": 743
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 746,
                  "end": 747
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 748,
                  "end": 749
                },
                "optional": false,
                "computed": true,
                "start": 746,
                "end": 750
              },
              "start": 739,
              "end": 750
            },
            "directive": null,
            "start": 739,
            "end": 751
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 766,
                  "end": 767
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 768,
                  "end": 769
                },
                "optional": false,
                "computed": true,
                "start": 766,
                "end": 770
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 773,
                  "end": 774
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 775,
                  "end": 776
                },
                "optional": false,
                "computed": true,
                "start": 773,
                "end": 777
              },
              "start": 766,
              "end": 777
            },
            "directive": null,
            "start": 766,
            "end": 778
          }
        ],
        "start": 733,
        "end": 780
      },
      "expression": false,
      "start": 671,
      "end": 780
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 791,
        "end": 794
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 795,
              "end": 796
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 795,
            "end": 796
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 798,
              "end": 799
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 808,
                "end": 809
              },
              "typeArguments": null,
              "start": 808,
              "end": 809
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 798,
            "end": 809
          }
        ],
        "start": 794,
        "end": 810
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 814,
                "end": 815
              },
              "typeArguments": null,
              "start": 814,
              "end": 815
            },
            "start": 812,
            "end": 815
          },
          "start": 811,
          "end": 815
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 820,
                "end": 827
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 828,
                      "end": 829
                    },
                    "typeArguments": null,
                    "start": 828,
                    "end": 829
                  }
                ],
                "start": 827,
                "end": 830
              },
              "start": 820,
              "end": 830
            },
            "start": 818,
            "end": 830
          },
          "start": 817,
          "end": 830
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 841,
                  "end": 842
                },
                "typeArguments": null,
                "start": 841,
                "end": 842
              },
              "start": 835,
              "end": 842
            },
            "start": 833,
            "end": 842
          },
          "start": 832,
          "end": 842
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 850,
                  "end": 851
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 852,
                  "end": 853
                },
                "optional": false,
                "computed": true,
                "start": 850,
                "end": 854
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 857,
                  "end": 858
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 859,
                  "end": 860
                },
                "optional": false,
                "computed": true,
                "start": 857,
                "end": 861
              },
              "start": 850,
              "end": 861
            },
            "directive": null,
            "start": 850,
            "end": 862
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 877,
                  "end": 878
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 879,
                  "end": 880
                },
                "optional": false,
                "computed": true,
                "start": 877,
                "end": 881
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 884,
                  "end": 885
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 886,
                  "end": 887
                },
                "optional": false,
                "computed": true,
                "start": 884,
                "end": 888
              },
              "start": 877,
              "end": 888
            },
            "directive": null,
            "start": 877,
            "end": 889
          }
        ],
        "start": 844,
        "end": 901
      },
      "expression": false,
      "start": 782,
      "end": 901
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null,
        "start": 912,
        "end": 915
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 916,
              "end": 917
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 916,
            "end": 917
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 919,
              "end": 920
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 929,
                "end": 930
              },
              "typeArguments": null,
              "start": 929,
              "end": 930
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 919,
            "end": 930
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 932,
              "end": 933
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 948,
                  "end": 949
                },
                "typeArguments": null,
                "start": 948,
                "end": 949
              },
              "start": 942,
              "end": 949
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 932,
            "end": 949
          }
        ],
        "start": 915,
        "end": 950
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 954,
                "end": 955
              },
              "typeArguments": null,
              "start": 954,
              "end": 955
            },
            "start": 952,
            "end": 955
          },
          "start": 951,
          "end": 955
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 960,
                "end": 967
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 968,
                      "end": 969
                    },
                    "typeArguments": null,
                    "start": 968,
                    "end": 969
                  }
                ],
                "start": 967,
                "end": 970
              },
              "start": 960,
              "end": 970
            },
            "start": 958,
            "end": 970
          },
          "start": 957,
          "end": 970
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 975,
                "end": 976
              },
              "typeArguments": null,
              "start": 975,
              "end": 976
            },
            "start": 973,
            "end": 976
          },
          "start": 972,
          "end": 976
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 984,
                  "end": 985
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 986,
                  "end": 987
                },
                "optional": false,
                "computed": true,
                "start": 984,
                "end": 988
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 991,
                  "end": 992
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 993,
                  "end": 994
                },
                "optional": false,
                "computed": true,
                "start": 991,
                "end": 995
              },
              "start": 984,
              "end": 995
            },
            "directive": null,
            "start": 984,
            "end": 996
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1011,
                  "end": 1012
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1013,
                  "end": 1014
                },
                "optional": false,
                "computed": true,
                "start": 1011,
                "end": 1015
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1018,
                  "end": 1019
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1020,
                  "end": 1021
                },
                "optional": false,
                "computed": true,
                "start": 1018,
                "end": 1022
              },
              "start": 1011,
              "end": 1022
            },
            "directive": null,
            "start": 1011,
            "end": 1023
          }
        ],
        "start": 978,
        "end": 1035
      },
      "expression": false,
      "start": 903,
      "end": 1035
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null,
        "start": 1046,
        "end": 1049
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1050,
              "end": 1051
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1050,
            "end": 1051
          }
        ],
        "start": 1049,
        "end": 1052
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1056,
                "end": 1057
              },
              "typeArguments": null,
              "start": 1056,
              "end": 1057
            },
            "start": 1054,
            "end": 1057
          },
          "start": 1053,
          "end": 1057
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 1062,
                "end": 1070
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1071,
                      "end": 1072
                    },
                    "typeArguments": null,
                    "start": 1071,
                    "end": 1072
                  }
                ],
                "start": 1070,
                "end": 1073
              },
              "start": 1062,
              "end": 1073
            },
            "start": 1060,
            "end": 1073
          },
          "start": 1059,
          "end": 1073
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1084,
                  "end": 1085
                },
                "typeArguments": null,
                "start": 1084,
                "end": 1085
              },
              "start": 1078,
              "end": 1085
            },
            "start": 1076,
            "end": 1085
          },
          "start": 1075,
          "end": 1085
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1093,
                  "end": 1094
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1095,
                  "end": 1096
                },
                "optional": false,
                "computed": true,
                "start": 1093,
                "end": 1097
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1100,
                  "end": 1101
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1102,
                  "end": 1103
                },
                "optional": false,
                "computed": true,
                "start": 1100,
                "end": 1104
              },
              "start": 1093,
              "end": 1104
            },
            "directive": null,
            "start": 1093,
            "end": 1105
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1110,
                  "end": 1111
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1112,
                  "end": 1113
                },
                "optional": false,
                "computed": true,
                "start": 1110,
                "end": 1114
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1117,
                  "end": 1118
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1119,
                  "end": 1120
                },
                "optional": false,
                "computed": true,
                "start": 1117,
                "end": 1121
              },
              "start": 1110,
              "end": 1121
            },
            "directive": null,
            "start": 1110,
            "end": 1122
          }
        ],
        "start": 1087,
        "end": 1134
      },
      "expression": false,
      "start": 1037,
      "end": 1134
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null,
        "start": 1145,
        "end": 1148
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1149,
              "end": 1150
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1149,
            "end": 1150
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1152,
              "end": 1153
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1168,
                  "end": 1169
                },
                "typeArguments": null,
                "start": 1168,
                "end": 1169
              },
              "start": 1162,
              "end": 1169
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1152,
            "end": 1169
          }
        ],
        "start": 1148,
        "end": 1170
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1174,
                "end": 1175
              },
              "typeArguments": null,
              "start": 1174,
              "end": 1175
            },
            "start": 1172,
            "end": 1175
          },
          "start": 1171,
          "end": 1175
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 1180,
                "end": 1188
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1189,
                      "end": 1190
                    },
                    "typeArguments": null,
                    "start": 1189,
                    "end": 1190
                  }
                ],
                "start": 1188,
                "end": 1191
              },
              "start": 1180,
              "end": 1191
            },
            "start": 1178,
            "end": 1191
          },
          "start": 1177,
          "end": 1191
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 1196,
                "end": 1197
              },
              "typeArguments": null,
              "start": 1196,
              "end": 1197
            },
            "start": 1194,
            "end": 1197
          },
          "start": 1193,
          "end": 1197
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1205,
                  "end": 1206
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1207,
                  "end": 1208
                },
                "optional": false,
                "computed": true,
                "start": 1205,
                "end": 1209
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1212,
                  "end": 1213
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1214,
                  "end": 1215
                },
                "optional": false,
                "computed": true,
                "start": 1212,
                "end": 1216
              },
              "start": 1205,
              "end": 1216
            },
            "directive": null,
            "start": 1205,
            "end": 1217
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1222,
                  "end": 1223
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1224,
                  "end": 1225
                },
                "optional": false,
                "computed": true,
                "start": 1222,
                "end": 1226
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1229,
                  "end": 1230
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1231,
                  "end": 1232
                },
                "optional": false,
                "computed": true,
                "start": 1229,
                "end": 1233
              },
              "start": 1222,
              "end": 1233
            },
            "directive": null,
            "start": 1222,
            "end": 1234
          }
        ],
        "start": 1199,
        "end": 1246
      },
      "expression": false,
      "start": 1136,
      "end": 1246
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f22",
        "optional": false,
        "typeAnnotation": null,
        "start": 1257,
        "end": 1260
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1261,
              "end": 1262
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1261,
            "end": 1262
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1264,
              "end": 1265
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1274,
                "end": 1275
              },
              "typeArguments": null,
              "start": 1274,
              "end": 1275
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1264,
            "end": 1275
          }
        ],
        "start": 1260,
        "end": 1276
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1280,
                "end": 1281
              },
              "typeArguments": null,
              "start": 1280,
              "end": 1281
            },
            "start": 1278,
            "end": 1281
          },
          "start": 1277,
          "end": 1281
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 1286,
                "end": 1294
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1295,
                      "end": 1296
                    },
                    "typeArguments": null,
                    "start": 1295,
                    "end": 1296
                  }
                ],
                "start": 1294,
                "end": 1297
              },
              "start": 1286,
              "end": 1297
            },
            "start": 1284,
            "end": 1297
          },
          "start": 1283,
          "end": 1297
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1308,
                  "end": 1309
                },
                "typeArguments": null,
                "start": 1308,
                "end": 1309
              },
              "start": 1302,
              "end": 1309
            },
            "start": 1300,
            "end": 1309
          },
          "start": 1299,
          "end": 1309
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1317,
                  "end": 1318
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1319,
                  "end": 1320
                },
                "optional": false,
                "computed": true,
                "start": 1317,
                "end": 1321
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1324,
                  "end": 1325
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1326,
                  "end": 1327
                },
                "optional": false,
                "computed": true,
                "start": 1324,
                "end": 1328
              },
              "start": 1317,
              "end": 1328
            },
            "directive": null,
            "start": 1317,
            "end": 1329
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1334,
                  "end": 1335
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1336,
                  "end": 1337
                },
                "optional": false,
                "computed": true,
                "start": 1334,
                "end": 1338
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1341,
                  "end": 1342
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1343,
                  "end": 1344
                },
                "optional": false,
                "computed": true,
                "start": 1341,
                "end": 1345
              },
              "start": 1334,
              "end": 1345
            },
            "directive": null,
            "start": 1334,
            "end": 1346
          }
        ],
        "start": 1311,
        "end": 1358
      },
      "expression": false,
      "start": 1248,
      "end": 1358
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f23",
        "optional": false,
        "typeAnnotation": null,
        "start": 1369,
        "end": 1372
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1373,
              "end": 1374
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1373,
            "end": 1374
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1376,
              "end": 1377
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1386,
                "end": 1387
              },
              "typeArguments": null,
              "start": 1386,
              "end": 1387
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1376,
            "end": 1387
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1389,
              "end": 1390
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1405,
                  "end": 1406
                },
                "typeArguments": null,
                "start": 1405,
                "end": 1406
              },
              "start": 1399,
              "end": 1406
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1389,
            "end": 1406
          }
        ],
        "start": 1372,
        "end": 1407
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1411,
                "end": 1412
              },
              "typeArguments": null,
              "start": 1411,
              "end": 1412
            },
            "start": 1409,
            "end": 1412
          },
          "start": 1408,
          "end": 1412
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 1417,
                "end": 1425
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1426,
                      "end": 1427
                    },
                    "typeArguments": null,
                    "start": 1426,
                    "end": 1427
                  }
                ],
                "start": 1425,
                "end": 1428
              },
              "start": 1417,
              "end": 1428
            },
            "start": 1415,
            "end": 1428
          },
          "start": 1414,
          "end": 1428
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 1433,
                "end": 1434
              },
              "typeArguments": null,
              "start": 1433,
              "end": 1434
            },
            "start": 1431,
            "end": 1434
          },
          "start": 1430,
          "end": 1434
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1442,
                  "end": 1443
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1444,
                  "end": 1445
                },
                "optional": false,
                "computed": true,
                "start": 1442,
                "end": 1446
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1449,
                  "end": 1450
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1451,
                  "end": 1452
                },
                "optional": false,
                "computed": true,
                "start": 1449,
                "end": 1453
              },
              "start": 1442,
              "end": 1453
            },
            "directive": null,
            "start": 1442,
            "end": 1454
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1459,
                  "end": 1460
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1461,
                  "end": 1462
                },
                "optional": false,
                "computed": true,
                "start": 1459,
                "end": 1463
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1466,
                  "end": 1467
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1468,
                  "end": 1469
                },
                "optional": false,
                "computed": true,
                "start": 1466,
                "end": 1470
              },
              "start": 1459,
              "end": 1470
            },
            "directive": null,
            "start": 1459,
            "end": 1471
          }
        ],
        "start": 1436,
        "end": 1483
      },
      "expression": false,
      "start": 1360,
      "end": 1483
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null,
        "start": 1490,
        "end": 1495
      },
      "typeParameters": null,
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
              "start": 1500,
              "end": 1501
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1503,
                "end": 1509
              },
              "start": 1501,
              "end": 1509
            },
            "accessibility": null,
            "static": false,
            "start": 1500,
            "end": 1510
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
              "start": 1511,
              "end": 1512
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1514,
                "end": 1520
              },
              "start": 1512,
              "end": 1520
            },
            "accessibility": null,
            "static": false,
            "start": 1511,
            "end": 1520
          }
        ],
        "start": 1498,
        "end": 1522
      },
      "declare": false,
      "start": 1485,
      "end": 1523
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f30",
        "optional": false,
        "typeAnnotation": null,
        "start": 1534,
        "end": 1537
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1538,
              "end": 1539
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1538,
            "end": 1539
          }
        ],
        "start": 1537,
        "end": 1540
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1544,
                "end": 1545
              },
              "typeArguments": null,
              "start": 1544,
              "end": 1545
            },
            "start": 1542,
            "end": 1545
          },
          "start": 1541,
          "end": 1545
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 1550,
                "end": 1557
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1558,
                      "end": 1559
                    },
                    "typeArguments": null,
                    "start": 1558,
                    "end": 1559
                  }
                ],
                "start": 1557,
                "end": 1560
              },
              "start": 1550,
              "end": 1560
            },
            "start": 1548,
            "end": 1560
          },
          "start": 1547,
          "end": 1560
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1568,
                "end": 1569
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1572,
                "end": 1573
              },
              "start": 1568,
              "end": 1573
            },
            "directive": null,
            "start": 1568,
            "end": 1574
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1589,
                "end": 1590
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1593,
                "end": 1594
              },
              "start": 1589,
              "end": 1594
            },
            "directive": null,
            "start": 1589,
            "end": 1595
          }
        ],
        "start": 1562,
        "end": 1597
      },
      "expression": false,
      "start": 1525,
      "end": 1597
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f31",
        "optional": false,
        "typeAnnotation": null,
        "start": 1608,
        "end": 1611
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1612,
              "end": 1613
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 1622,
                "end": 1627
              },
              "typeArguments": null,
              "start": 1622,
              "end": 1627
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1612,
            "end": 1627
          }
        ],
        "start": 1611,
        "end": 1628
      },
      "params": [
        {
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
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 1632,
                "end": 1639
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Thing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1640,
                      "end": 1645
                    },
                    "typeArguments": null,
                    "start": 1640,
                    "end": 1645
                  }
                ],
                "start": 1639,
                "end": 1646
              },
              "start": 1632,
              "end": 1646
            },
            "start": 1630,
            "end": 1646
          },
          "start": 1629,
          "end": 1646
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 1651,
                "end": 1658
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1659,
                      "end": 1660
                    },
                    "typeArguments": null,
                    "start": 1659,
                    "end": 1660
                  }
                ],
                "start": 1658,
                "end": 1661
              },
              "start": 1651,
              "end": 1661
            },
            "start": 1649,
            "end": 1661
          },
          "start": 1648,
          "end": 1661
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1669,
                "end": 1670
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1673,
                "end": 1674
              },
              "start": 1669,
              "end": 1674
            },
            "directive": null,
            "start": 1669,
            "end": 1675
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1680,
                "end": 1681
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1684,
                "end": 1685
              },
              "start": 1680,
              "end": 1685
            },
            "directive": null,
            "start": 1680,
            "end": 1686
          }
        ],
        "start": 1663,
        "end": 1698
      },
      "expression": false,
      "start": 1599,
      "end": 1698
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f40",
        "optional": false,
        "typeAnnotation": null,
        "start": 1709,
        "end": 1712
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1713,
              "end": 1714
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1713,
            "end": 1714
          }
        ],
        "start": 1712,
        "end": 1715
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1719,
                "end": 1720
              },
              "typeArguments": null,
              "start": 1719,
              "end": 1720
            },
            "start": 1717,
            "end": 1720
          },
          "start": 1716,
          "end": 1720
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 1725,
                "end": 1733
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1734,
                      "end": 1735
                    },
                    "typeArguments": null,
                    "start": 1734,
                    "end": 1735
                  }
                ],
                "start": 1733,
                "end": 1736
              },
              "start": 1725,
              "end": 1736
            },
            "start": 1723,
            "end": 1736
          },
          "start": 1722,
          "end": 1736
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1744,
                "end": 1745
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1748,
                "end": 1749
              },
              "start": 1744,
              "end": 1749
            },
            "directive": null,
            "start": 1744,
            "end": 1750
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1755,
                "end": 1756
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1759,
                "end": 1760
              },
              "start": 1755,
              "end": 1760
            },
            "directive": null,
            "start": 1755,
            "end": 1761
          }
        ],
        "start": 1738,
        "end": 1763
      },
      "expression": false,
      "start": 1700,
      "end": 1763
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f41",
        "optional": false,
        "typeAnnotation": null,
        "start": 1774,
        "end": 1777
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1778,
              "end": 1779
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 1788,
                "end": 1793
              },
              "typeArguments": null,
              "start": 1788,
              "end": 1793
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1778,
            "end": 1793
          }
        ],
        "start": 1777,
        "end": 1794
      },
      "params": [
        {
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
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 1798,
                "end": 1806
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Thing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1807,
                      "end": 1812
                    },
                    "typeArguments": null,
                    "start": 1807,
                    "end": 1812
                  }
                ],
                "start": 1806,
                "end": 1813
              },
              "start": 1798,
              "end": 1813
            },
            "start": 1796,
            "end": 1813
          },
          "start": 1795,
          "end": 1813
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 1818,
                "end": 1826
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1827,
                      "end": 1828
                    },
                    "typeArguments": null,
                    "start": 1827,
                    "end": 1828
                  }
                ],
                "start": 1826,
                "end": 1829
              },
              "start": 1818,
              "end": 1829
            },
            "start": 1816,
            "end": 1829
          },
          "start": 1815,
          "end": 1829
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1837,
                "end": 1838
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1841,
                "end": 1842
              },
              "start": 1837,
              "end": 1842
            },
            "directive": null,
            "start": 1837,
            "end": 1843
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1848,
                "end": 1849
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1852,
                "end": 1853
              },
              "start": 1848,
              "end": 1853
            },
            "directive": null,
            "start": 1848,
            "end": 1854
          }
        ],
        "start": 1831,
        "end": 1866
      },
      "expression": false,
      "start": 1765,
      "end": 1866
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null,
        "start": 1873,
        "end": 1877
      },
      "typeParameters": null,
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1886,
              "end": 1890
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1892,
                "end": 1898
              },
              "start": 1890,
              "end": 1898
            },
            "accessibility": null,
            "static": false,
            "start": 1886,
            "end": 1899
          }
        ],
        "start": 1880,
        "end": 1901
      },
      "declare": false,
      "start": 1868,
      "end": 1901
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ItemMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 1908,
        "end": 1915
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1928,
                    "end": 1934
                  },
                  "start": 1926,
                  "end": 1934
                },
                "start": 1925,
                "end": 1934
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Item",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1937,
                  "end": 1941
                },
                "typeArguments": null,
                "start": 1937,
                "end": 1941
              },
              "start": 1935,
              "end": 1941
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1924,
            "end": 1942
          }
        ],
        "start": 1918,
        "end": 1944
      },
      "declare": false,
      "start": 1903,
      "end": 1944
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f50",
        "optional": false,
        "typeAnnotation": null,
        "start": 1955,
        "end": 1958
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1959,
              "end": 1960
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ItemMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 1969,
                "end": 1976
              },
              "typeArguments": null,
              "start": 1969,
              "end": 1976
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1959,
            "end": 1976
          }
        ],
        "start": 1958,
        "end": 1977
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1983,
                "end": 1984
              },
              "typeArguments": null,
              "start": 1983,
              "end": 1984
            },
            "start": 1981,
            "end": 1984
          },
          "start": 1978,
          "end": 1984
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1997,
                  "end": 1998
                },
                "typeArguments": null,
                "start": 1997,
                "end": 1998
              },
              "start": 1991,
              "end": 1998
            },
            "start": 1989,
            "end": 1998
          },
          "start": 1986,
          "end": 1998
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "item",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Item",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2016,
                        "end": 2020
                      },
                      "typeArguments": null,
                      "start": 2016,
                      "end": 2020
                    },
                    "start": 2014,
                    "end": 2020
                  },
                  "start": 2010,
                  "end": 2020
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2023,
                    "end": 2026
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2027,
                    "end": 2030
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2023,
                  "end": 2031
                },
                "definite": false,
                "start": 2010,
                "end": 2031
              }
            ],
            "declare": false,
            "start": 2006,
            "end": 2032
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2044,
                  "end": 2047
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2048,
                  "end": 2051
                },
                "optional": false,
                "computed": true,
                "start": 2044,
                "end": 2052
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 2053,
                "end": 2057
              },
              "optional": false,
              "computed": false,
              "start": 2044,
              "end": 2057
            },
            "start": 2037,
            "end": 2058
          }
        ],
        "start": 2000,
        "end": 2060
      },
      "expression": false,
      "start": 1946,
      "end": 2060
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f51",
        "optional": false,
        "typeAnnotation": null,
        "start": 2071,
        "end": 2074
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2075,
              "end": 2076
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ItemMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 2085,
                "end": 2092
              },
              "typeArguments": null,
              "start": 2085,
              "end": 2092
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2075,
            "end": 2092
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2094,
              "end": 2095
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2110,
                  "end": 2111
                },
                "typeArguments": null,
                "start": 2110,
                "end": 2111
              },
              "start": 2104,
              "end": 2111
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2094,
            "end": 2111
          }
        ],
        "start": 2074,
        "end": 2112
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2118,
                "end": 2119
              },
              "typeArguments": null,
              "start": 2118,
              "end": 2119
            },
            "start": 2116,
            "end": 2119
          },
          "start": 2113,
          "end": 2119
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 2126,
                "end": 2127
              },
              "typeArguments": null,
              "start": 2126,
              "end": 2127
            },
            "start": 2124,
            "end": 2127
          },
          "start": 2121,
          "end": 2127
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "item",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Item",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2145,
                        "end": 2149
                      },
                      "typeArguments": null,
                      "start": 2145,
                      "end": 2149
                    },
                    "start": 2143,
                    "end": 2149
                  },
                  "start": 2139,
                  "end": 2149
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2152,
                    "end": 2155
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2156,
                    "end": 2159
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2152,
                  "end": 2160
                },
                "definite": false,
                "start": 2139,
                "end": 2160
              }
            ],
            "declare": false,
            "start": 2135,
            "end": 2161
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2173,
                  "end": 2176
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2177,
                  "end": 2180
                },
                "optional": false,
                "computed": true,
                "start": 2173,
                "end": 2181
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 2182,
                "end": 2186
              },
              "optional": false,
              "computed": false,
              "start": 2173,
              "end": 2186
            },
            "start": 2166,
            "end": 2187
          }
        ],
        "start": 2129,
        "end": 2189
      },
      "expression": false,
      "start": 2062,
      "end": 2189
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2196,
        "end": 2198
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2199,
              "end": 2200
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2199,
            "end": 2200
          }
        ],
        "start": 2198,
        "end": 2201
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 2211,
          "end": 2212
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2222,
              "end": 2223
            },
            "typeArguments": null,
            "start": 2222,
            "end": 2223
          },
          "start": 2216,
          "end": 2223
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2226,
              "end": 2227
            },
            "typeArguments": null,
            "start": 2226,
            "end": 2227
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 2228,
              "end": 2229
            },
            "typeArguments": null,
            "start": 2228,
            "end": 2229
          },
          "start": 2226,
          "end": 2230
        },
        "optional": false,
        "readonly": null,
        "start": 2204,
        "end": 2233
      },
      "declare": false,
      "start": 2191,
      "end": 2233
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2240,
        "end": 2242
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2243,
              "end": 2244
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2243,
            "end": 2244
          }
        ],
        "start": 2242,
        "end": 2245
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 2255,
          "end": 2256
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2266,
              "end": 2267
            },
            "typeArguments": null,
            "start": 2266,
            "end": 2267
          },
          "start": 2260,
          "end": 2267
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2270,
              "end": 2271
            },
            "typeArguments": null,
            "start": 2270,
            "end": 2271
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 2272,
              "end": 2273
            },
            "typeArguments": null,
            "start": 2272,
            "end": 2273
          },
          "start": 2270,
          "end": 2274
        },
        "optional": false,
        "readonly": null,
        "start": 2248,
        "end": 2277
      },
      "declare": false,
      "start": 2235,
      "end": 2277
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f60",
        "optional": false,
        "typeAnnotation": null,
        "start": 2288,
        "end": 2291
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2292,
              "end": 2293
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2292,
            "end": 2293
          }
        ],
        "start": 2291,
        "end": 2294
      },
      "params": [
        {
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
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2298,
                "end": 2300
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2301,
                      "end": 2302
                    },
                    "typeArguments": null,
                    "start": 2301,
                    "end": 2302
                  }
                ],
                "start": 2300,
                "end": 2303
              },
              "start": 2298,
              "end": 2303
            },
            "start": 2296,
            "end": 2303
          },
          "start": 2295,
          "end": 2303
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2308,
                "end": 2310
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2311,
                      "end": 2312
                    },
                    "typeArguments": null,
                    "start": 2311,
                    "end": 2312
                  }
                ],
                "start": 2310,
                "end": 2313
              },
              "start": 2308,
              "end": 2313
            },
            "start": 2306,
            "end": 2313
          },
          "start": 2305,
          "end": 2313
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2321,
                "end": 2322
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2325,
                "end": 2326
              },
              "start": 2321,
              "end": 2326
            },
            "directive": null,
            "start": 2321,
            "end": 2327
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2332,
                "end": 2333
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2336,
                "end": 2337
              },
              "start": 2332,
              "end": 2337
            },
            "directive": null,
            "start": 2332,
            "end": 2338
          }
        ],
        "start": 2315,
        "end": 2340
      },
      "expression": false,
      "start": 2279,
      "end": 2340
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Identity",
        "optional": false,
        "typeAnnotation": null,
        "start": 2347,
        "end": 2355
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2356,
              "end": 2357
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2356,
            "end": 2357
          }
        ],
        "start": 2355,
        "end": 2358
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 2368,
          "end": 2369
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2379,
              "end": 2380
            },
            "typeArguments": null,
            "start": 2379,
            "end": 2380
          },
          "start": 2373,
          "end": 2380
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2383,
              "end": 2384
            },
            "typeArguments": null,
            "start": 2383,
            "end": 2384
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 2385,
              "end": 2386
            },
            "typeArguments": null,
            "start": 2385,
            "end": 2386
          },
          "start": 2383,
          "end": 2387
        },
        "optional": false,
        "readonly": null,
        "start": 2361,
        "end": 2390
      },
      "declare": false,
      "start": 2342,
      "end": 2390
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f61",
        "optional": false,
        "typeAnnotation": null,
        "start": 2401,
        "end": 2404
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2405,
              "end": 2406
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2405,
            "end": 2406
          }
        ],
        "start": 2404,
        "end": 2407
      },
      "params": [
        {
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
                "name": "Identity",
                "optional": false,
                "typeAnnotation": null,
                "start": 2411,
                "end": 2419
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2420,
                      "end": 2421
                    },
                    "typeArguments": null,
                    "start": 2420,
                    "end": 2421
                  }
                ],
                "start": 2419,
                "end": 2422
              },
              "start": 2411,
              "end": 2422
            },
            "start": 2409,
            "end": 2422
          },
          "start": 2408,
          "end": 2422
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 2427,
                "end": 2434
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2435,
                      "end": 2436
                    },
                    "typeArguments": null,
                    "start": 2435,
                    "end": 2436
                  }
                ],
                "start": 2434,
                "end": 2437
              },
              "start": 2427,
              "end": 2437
            },
            "start": 2425,
            "end": 2437
          },
          "start": 2424,
          "end": 2437
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2445,
                "end": 2446
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2449,
                "end": 2450
              },
              "start": 2445,
              "end": 2450
            },
            "directive": null,
            "start": 2445,
            "end": 2451
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2466,
                "end": 2467
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2470,
                "end": 2471
              },
              "start": 2466,
              "end": 2471
            },
            "directive": null,
            "start": 2466,
            "end": 2472
          }
        ],
        "start": 2439,
        "end": 2474
      },
      "expression": false,
      "start": 2392,
      "end": 2474
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f62",
        "optional": false,
        "typeAnnotation": null,
        "start": 2485,
        "end": 2488
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2489,
              "end": 2490
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2489,
            "end": 2490
          }
        ],
        "start": 2488,
        "end": 2491
      },
      "params": [
        {
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
                "name": "Identity",
                "optional": false,
                "typeAnnotation": null,
                "start": 2495,
                "end": 2503
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2504,
                      "end": 2505
                    },
                    "typeArguments": null,
                    "start": 2504,
                    "end": 2505
                  }
                ],
                "start": 2503,
                "end": 2506
              },
              "start": 2495,
              "end": 2506
            },
            "start": 2493,
            "end": 2506
          },
          "start": 2492,
          "end": 2506
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 2511,
                "end": 2519
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2520,
                      "end": 2521
                    },
                    "typeArguments": null,
                    "start": 2520,
                    "end": 2521
                  }
                ],
                "start": 2519,
                "end": 2522
              },
              "start": 2511,
              "end": 2522
            },
            "start": 2509,
            "end": 2522
          },
          "start": 2508,
          "end": 2522
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2530,
                "end": 2531
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2534,
                "end": 2535
              },
              "start": 2530,
              "end": 2535
            },
            "directive": null,
            "start": 2530,
            "end": 2536
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2541,
                "end": 2542
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2545,
                "end": 2546
              },
              "start": 2541,
              "end": 2546
            },
            "directive": null,
            "start": 2541,
            "end": 2547
          }
        ],
        "start": 2524,
        "end": 2549
      },
      "expression": false,
      "start": 2476,
      "end": 2549
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f70",
        "optional": false,
        "typeAnnotation": null,
        "start": 2560,
        "end": 2563
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2564,
              "end": 2565
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2564,
            "end": 2565
          }
        ],
        "start": 2563,
        "end": 2566
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 2573,
                "end": 2574
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2584,
                    "end": 2585
                  },
                  "typeArguments": null,
                  "start": 2584,
                  "end": 2585
                },
                "start": 2578,
                "end": 2585
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2588,
                    "end": 2589
                  },
                  "typeArguments": null,
                  "start": 2588,
                  "end": 2589
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2590,
                    "end": 2591
                  },
                  "typeArguments": null,
                  "start": 2590,
                  "end": 2591
                },
                "start": 2588,
                "end": 2592
              },
              "optional": false,
              "readonly": null,
              "start": 2570,
              "end": 2594
            },
            "start": 2568,
            "end": 2594
          },
          "start": 2567,
          "end": 2594
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 2602,
                "end": 2603
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2613,
                    "end": 2614
                  },
                  "typeArguments": null,
                  "start": 2613,
                  "end": 2614
                },
                "start": 2607,
                "end": 2614
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2617,
                    "end": 2618
                  },
                  "typeArguments": null,
                  "start": 2617,
                  "end": 2618
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2619,
                    "end": 2620
                  },
                  "typeArguments": null,
                  "start": 2619,
                  "end": 2620
                },
                "start": 2617,
                "end": 2621
              },
              "optional": false,
              "readonly": null,
              "start": 2599,
              "end": 2623
            },
            "start": 2597,
            "end": 2623
          },
          "start": 2596,
          "end": 2623
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2631,
                "end": 2632
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2635,
                "end": 2636
              },
              "start": 2631,
              "end": 2636
            },
            "directive": null,
            "start": 2631,
            "end": 2637
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2642,
                "end": 2643
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2646,
                "end": 2647
              },
              "start": 2642,
              "end": 2647
            },
            "directive": null,
            "start": 2642,
            "end": 2648
          }
        ],
        "start": 2625,
        "end": 2650
      },
      "expression": false,
      "start": 2551,
      "end": 2650
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f71",
        "optional": false,
        "typeAnnotation": null,
        "start": 2661,
        "end": 2664
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2665,
              "end": 2666
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2665,
            "end": 2666
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2668,
              "end": 2669
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2678,
                "end": 2679
              },
              "typeArguments": null,
              "start": 2678,
              "end": 2679
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2668,
            "end": 2679
          }
        ],
        "start": 2664,
        "end": 2680
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 2687,
                "end": 2688
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2698,
                    "end": 2699
                  },
                  "typeArguments": null,
                  "start": 2698,
                  "end": 2699
                },
                "start": 2692,
                "end": 2699
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2702,
                    "end": 2703
                  },
                  "typeArguments": null,
                  "start": 2702,
                  "end": 2703
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2704,
                    "end": 2705
                  },
                  "typeArguments": null,
                  "start": 2704,
                  "end": 2705
                },
                "start": 2702,
                "end": 2706
              },
              "optional": false,
              "readonly": null,
              "start": 2684,
              "end": 2708
            },
            "start": 2682,
            "end": 2708
          },
          "start": 2681,
          "end": 2708
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 2716,
                "end": 2717
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2727,
                    "end": 2728
                  },
                  "typeArguments": null,
                  "start": 2727,
                  "end": 2728
                },
                "start": 2721,
                "end": 2728
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2731,
                    "end": 2732
                  },
                  "typeArguments": null,
                  "start": 2731,
                  "end": 2732
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2733,
                    "end": 2734
                  },
                  "typeArguments": null,
                  "start": 2733,
                  "end": 2734
                },
                "start": 2731,
                "end": 2735
              },
              "optional": false,
              "readonly": null,
              "start": 2713,
              "end": 2737
            },
            "start": 2711,
            "end": 2737
          },
          "start": 2710,
          "end": 2737
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2745,
                "end": 2746
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2749,
                "end": 2750
              },
              "start": 2745,
              "end": 2750
            },
            "directive": null,
            "start": 2745,
            "end": 2751
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2756,
                "end": 2757
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2760,
                "end": 2761
              },
              "start": 2756,
              "end": 2761
            },
            "directive": null,
            "start": 2756,
            "end": 2762
          }
        ],
        "start": 2739,
        "end": 2774
      },
      "expression": false,
      "start": 2652,
      "end": 2774
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f72",
        "optional": false,
        "typeAnnotation": null,
        "start": 2785,
        "end": 2788
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2789,
              "end": 2790
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2789,
            "end": 2790
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2792,
              "end": 2793
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2802,
                "end": 2803
              },
              "typeArguments": null,
              "start": 2802,
              "end": 2803
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2792,
            "end": 2803
          }
        ],
        "start": 2788,
        "end": 2804
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 2811,
                "end": 2812
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2822,
                    "end": 2823
                  },
                  "typeArguments": null,
                  "start": 2822,
                  "end": 2823
                },
                "start": 2816,
                "end": 2823
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2826,
                    "end": 2827
                  },
                  "typeArguments": null,
                  "start": 2826,
                  "end": 2827
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2828,
                    "end": 2829
                  },
                  "typeArguments": null,
                  "start": 2828,
                  "end": 2829
                },
                "start": 2826,
                "end": 2830
              },
              "optional": false,
              "readonly": null,
              "start": 2808,
              "end": 2832
            },
            "start": 2806,
            "end": 2832
          },
          "start": 2805,
          "end": 2832
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 2840,
                "end": 2841
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2851,
                    "end": 2852
                  },
                  "typeArguments": null,
                  "start": 2851,
                  "end": 2852
                },
                "start": 2845,
                "end": 2852
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2855,
                    "end": 2856
                  },
                  "typeArguments": null,
                  "start": 2855,
                  "end": 2856
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2857,
                    "end": 2858
                  },
                  "typeArguments": null,
                  "start": 2857,
                  "end": 2858
                },
                "start": 2855,
                "end": 2859
              },
              "optional": false,
              "readonly": null,
              "start": 2837,
              "end": 2861
            },
            "start": 2835,
            "end": 2861
          },
          "start": 2834,
          "end": 2861
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2869,
                "end": 2870
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2873,
                "end": 2874
              },
              "start": 2869,
              "end": 2874
            },
            "directive": null,
            "start": 2869,
            "end": 2875
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2880,
                "end": 2881
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2884,
                "end": 2885
              },
              "start": 2880,
              "end": 2885
            },
            "directive": null,
            "start": 2880,
            "end": 2886
          }
        ],
        "start": 2863,
        "end": 2898
      },
      "expression": false,
      "start": 2776,
      "end": 2898
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f73",
        "optional": false,
        "typeAnnotation": null,
        "start": 2909,
        "end": 2912
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2913,
              "end": 2914
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2913,
            "end": 2914
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2916,
              "end": 2917
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2932,
                  "end": 2933
                },
                "typeArguments": null,
                "start": 2932,
                "end": 2933
              },
              "start": 2926,
              "end": 2933
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2916,
            "end": 2933
          }
        ],
        "start": 2912,
        "end": 2934
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 2941,
                "end": 2942
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2946,
                  "end": 2947
                },
                "typeArguments": null,
                "start": 2946,
                "end": 2947
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2950,
                    "end": 2951
                  },
                  "typeArguments": null,
                  "start": 2950,
                  "end": 2951
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2952,
                    "end": 2953
                  },
                  "typeArguments": null,
                  "start": 2952,
                  "end": 2953
                },
                "start": 2950,
                "end": 2954
              },
              "optional": false,
              "readonly": null,
              "start": 2938,
              "end": 2956
            },
            "start": 2936,
            "end": 2956
          },
          "start": 2935,
          "end": 2956
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 2964,
                "end": 2965
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2975,
                    "end": 2976
                  },
                  "typeArguments": null,
                  "start": 2975,
                  "end": 2976
                },
                "start": 2969,
                "end": 2976
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2979,
                    "end": 2980
                  },
                  "typeArguments": null,
                  "start": 2979,
                  "end": 2980
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2981,
                    "end": 2982
                  },
                  "typeArguments": null,
                  "start": 2981,
                  "end": 2982
                },
                "start": 2979,
                "end": 2983
              },
              "optional": false,
              "readonly": null,
              "start": 2961,
              "end": 2985
            },
            "start": 2959,
            "end": 2985
          },
          "start": 2958,
          "end": 2985
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2993,
                "end": 2994
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2997,
                "end": 2998
              },
              "start": 2993,
              "end": 2998
            },
            "directive": null,
            "start": 2993,
            "end": 2999
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 3004,
                "end": 3005
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3008,
                "end": 3009
              },
              "start": 3004,
              "end": 3009
            },
            "directive": null,
            "start": 3004,
            "end": 3010
          }
        ],
        "start": 2987,
        "end": 3022
      },
      "expression": false,
      "start": 2900,
      "end": 3022
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f74",
        "optional": false,
        "typeAnnotation": null,
        "start": 3033,
        "end": 3036
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3037,
              "end": 3038
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3037,
            "end": 3038
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3040,
              "end": 3041
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3050,
                "end": 3051
              },
              "typeArguments": null,
              "start": 3050,
              "end": 3051
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3040,
            "end": 3051
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3053,
              "end": 3054
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3069,
                  "end": 3070
                },
                "typeArguments": null,
                "start": 3069,
                "end": 3070
              },
              "start": 3063,
              "end": 3070
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3053,
            "end": 3070
          }
        ],
        "start": 3036,
        "end": 3071
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 3078,
                "end": 3079
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3083,
                  "end": 3084
                },
                "typeArguments": null,
                "start": 3083,
                "end": 3084
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3087,
                    "end": 3088
                  },
                  "typeArguments": null,
                  "start": 3087,
                  "end": 3088
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3089,
                    "end": 3090
                  },
                  "typeArguments": null,
                  "start": 3089,
                  "end": 3090
                },
                "start": 3087,
                "end": 3091
              },
              "optional": false,
              "readonly": null,
              "start": 3075,
              "end": 3093
            },
            "start": 3073,
            "end": 3093
          },
          "start": 3072,
          "end": 3093
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 3101,
                "end": 3102
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3112,
                    "end": 3113
                  },
                  "typeArguments": null,
                  "start": 3112,
                  "end": 3113
                },
                "start": 3106,
                "end": 3113
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3116,
                    "end": 3117
                  },
                  "typeArguments": null,
                  "start": 3116,
                  "end": 3117
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3118,
                    "end": 3119
                  },
                  "typeArguments": null,
                  "start": 3118,
                  "end": 3119
                },
                "start": 3116,
                "end": 3120
              },
              "optional": false,
              "readonly": null,
              "start": 3098,
              "end": 3122
            },
            "start": 3096,
            "end": 3122
          },
          "start": 3095,
          "end": 3122
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3130,
                "end": 3131
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 3134,
                "end": 3135
              },
              "start": 3130,
              "end": 3135
            },
            "directive": null,
            "start": 3130,
            "end": 3136
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 3141,
                "end": 3142
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3145,
                "end": 3146
              },
              "start": 3141,
              "end": 3146
            },
            "directive": null,
            "start": 3141,
            "end": 3147
          }
        ],
        "start": 3124,
        "end": 3159
      },
      "expression": false,
      "start": 3024,
      "end": 3159
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f75",
        "optional": false,
        "typeAnnotation": null,
        "start": 3170,
        "end": 3173
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3174,
              "end": 3175
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3174,
            "end": 3175
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3177,
              "end": 3178
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3187,
                "end": 3188
              },
              "typeArguments": null,
              "start": 3187,
              "end": 3188
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3177,
            "end": 3188
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3190,
              "end": 3191
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3206,
                  "end": 3207
                },
                "typeArguments": null,
                "start": 3206,
                "end": 3207
              },
              "start": 3200,
              "end": 3207
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3190,
            "end": 3207
          }
        ],
        "start": 3173,
        "end": 3208
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 3215,
                "end": 3216
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3220,
                  "end": 3221
                },
                "typeArguments": null,
                "start": 3220,
                "end": 3221
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3224,
                    "end": 3225
                  },
                  "typeArguments": null,
                  "start": 3224,
                  "end": 3225
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3226,
                    "end": 3227
                  },
                  "typeArguments": null,
                  "start": 3226,
                  "end": 3227
                },
                "start": 3224,
                "end": 3228
              },
              "optional": false,
              "readonly": null,
              "start": 3212,
              "end": 3230
            },
            "start": 3210,
            "end": 3230
          },
          "start": 3209,
          "end": 3230
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 3238,
                "end": 3239
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3249,
                    "end": 3250
                  },
                  "typeArguments": null,
                  "start": 3249,
                  "end": 3250
                },
                "start": 3243,
                "end": 3250
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3253,
                    "end": 3254
                  },
                  "typeArguments": null,
                  "start": 3253,
                  "end": 3254
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3255,
                    "end": 3256
                  },
                  "typeArguments": null,
                  "start": 3255,
                  "end": 3256
                },
                "start": 3253,
                "end": 3257
              },
              "optional": false,
              "readonly": null,
              "start": 3235,
              "end": 3259
            },
            "start": 3233,
            "end": 3259
          },
          "start": 3232,
          "end": 3259
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3267,
                "end": 3268
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 3271,
                "end": 3272
              },
              "start": 3267,
              "end": 3272
            },
            "directive": null,
            "start": 3267,
            "end": 3273
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 3278,
                "end": 3279
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3282,
                "end": 3283
              },
              "start": 3278,
              "end": 3283
            },
            "directive": null,
            "start": 3278,
            "end": 3284
          }
        ],
        "start": 3261,
        "end": 3296
      },
      "expression": false,
      "start": 3161,
      "end": 3296
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f76",
        "optional": false,
        "typeAnnotation": null,
        "start": 3307,
        "end": 3310
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3311,
              "end": 3312
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3311,
            "end": 3312
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3314,
              "end": 3315
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3324,
                "end": 3325
              },
              "typeArguments": null,
              "start": 3324,
              "end": 3325
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3314,
            "end": 3325
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3327,
              "end": 3328
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3343,
                  "end": 3344
                },
                "typeArguments": null,
                "start": 3343,
                "end": 3344
              },
              "start": 3337,
              "end": 3344
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3327,
            "end": 3344
          }
        ],
        "start": 3310,
        "end": 3345
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 3352,
                "end": 3353
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3357,
                  "end": 3358
                },
                "typeArguments": null,
                "start": 3357,
                "end": 3358
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3361,
                    "end": 3362
                  },
                  "typeArguments": null,
                  "start": 3361,
                  "end": 3362
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3363,
                    "end": 3364
                  },
                  "typeArguments": null,
                  "start": 3363,
                  "end": 3364
                },
                "start": 3361,
                "end": 3365
              },
              "optional": false,
              "readonly": null,
              "start": 3349,
              "end": 3367
            },
            "start": 3347,
            "end": 3367
          },
          "start": 3346,
          "end": 3367
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 3375,
                "end": 3376
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3380,
                  "end": 3381
                },
                "typeArguments": null,
                "start": 3380,
                "end": 3381
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3384,
                    "end": 3385
                  },
                  "typeArguments": null,
                  "start": 3384,
                  "end": 3385
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3386,
                    "end": 3387
                  },
                  "typeArguments": null,
                  "start": 3386,
                  "end": 3387
                },
                "start": 3384,
                "end": 3388
              },
              "optional": false,
              "readonly": null,
              "start": 3372,
              "end": 3390
            },
            "start": 3370,
            "end": 3390
          },
          "start": 3369,
          "end": 3390
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3398,
                "end": 3399
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 3402,
                "end": 3403
              },
              "start": 3398,
              "end": 3403
            },
            "directive": null,
            "start": 3398,
            "end": 3404
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 3409,
                "end": 3410
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3413,
                "end": 3414
              },
              "start": 3409,
              "end": 3414
            },
            "directive": null,
            "start": 3409,
            "end": 3415
          }
        ],
        "start": 3392,
        "end": 3427
      },
      "expression": false,
      "start": 3298,
      "end": 3427
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f80",
        "optional": false,
        "typeAnnotation": null,
        "start": 3438,
        "end": 3441
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3442,
              "end": 3443
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3442,
            "end": 3443
          }
        ],
        "start": 3441,
        "end": 3444
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3448,
                "end": 3449
              },
              "typeArguments": null,
              "start": 3448,
              "end": 3449
            },
            "start": 3446,
            "end": 3449
          },
          "start": 3445,
          "end": 3449
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Partial",
            "optional": false,
            "typeAnnotation": null,
            "start": 3452,
            "end": 3459
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3460,
                  "end": 3461
                },
                "typeArguments": null,
                "start": 3460,
                "end": 3461
              }
            ],
            "start": 3459,
            "end": 3462
          },
          "start": 3452,
          "end": 3462
        },
        "start": 3450,
        "end": 3462
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 3476,
              "end": 3477
            },
            "start": 3469,
            "end": 3478
          }
        ],
        "start": 3463,
        "end": 3480
      },
      "expression": false,
      "start": 3429,
      "end": 3480
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f81",
        "optional": false,
        "typeAnnotation": null,
        "start": 3491,
        "end": 3494
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3495,
              "end": 3496
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3495,
            "end": 3496
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3498,
              "end": 3499
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3514,
                  "end": 3515
                },
                "typeArguments": null,
                "start": 3514,
                "end": 3515
              },
              "start": 3508,
              "end": 3515
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3498,
            "end": 3515
          }
        ],
        "start": 3494,
        "end": 3516
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3520,
                "end": 3521
              },
              "typeArguments": null,
              "start": 3520,
              "end": 3521
            },
            "start": 3518,
            "end": 3521
          },
          "start": 3517,
          "end": 3521
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 3526,
                "end": 3527
              },
              "typeArguments": null,
              "start": 3526,
              "end": 3527
            },
            "start": 3524,
            "end": 3527
          },
          "start": 3523,
          "end": 3527
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Partial",
            "optional": false,
            "typeAnnotation": null,
            "start": 3530,
            "end": 3537
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3538,
                    "end": 3539
                  },
                  "typeArguments": null,
                  "start": 3538,
                  "end": 3539
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3540,
                    "end": 3541
                  },
                  "typeArguments": null,
                  "start": 3540,
                  "end": 3541
                },
                "start": 3538,
                "end": 3542
              }
            ],
            "start": 3537,
            "end": 3543
          },
          "start": 3530,
          "end": 3543
        },
        "start": 3528,
        "end": 3543
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 3557,
                "end": 3558
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 3559,
                "end": 3560
              },
              "optional": false,
              "computed": true,
              "start": 3557,
              "end": 3561
            },
            "start": 3550,
            "end": 3562
          }
        ],
        "start": 3544,
        "end": 3564
      },
      "expression": false,
      "start": 3482,
      "end": 3564
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f82",
        "optional": false,
        "typeAnnotation": null,
        "start": 3575,
        "end": 3578
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3579,
              "end": 3580
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3579,
            "end": 3580
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3582,
              "end": 3584
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3599,
                  "end": 3600
                },
                "typeArguments": null,
                "start": 3599,
                "end": 3600
              },
              "start": 3593,
              "end": 3600
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3582,
            "end": 3600
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3602,
              "end": 3604
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3619,
                    "end": 3620
                  },
                  "typeArguments": null,
                  "start": 3619,
                  "end": 3620
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3621,
                    "end": 3623
                  },
                  "typeArguments": null,
                  "start": 3621,
                  "end": 3623
                },
                "start": 3619,
                "end": 3624
              },
              "start": 3613,
              "end": 3624
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3602,
            "end": 3624
          }
        ],
        "start": 3578,
        "end": 3625
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3629,
                "end": 3630
              },
              "typeArguments": null,
              "start": 3629,
              "end": 3630
            },
            "start": 3627,
            "end": 3630
          },
          "start": 3626,
          "end": 3630
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3636,
                "end": 3638
              },
              "typeArguments": null,
              "start": 3636,
              "end": 3638
            },
            "start": 3634,
            "end": 3638
          },
          "start": 3632,
          "end": 3638
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3644,
                "end": 3646
              },
              "typeArguments": null,
              "start": 3644,
              "end": 3646
            },
            "start": 3642,
            "end": 3646
          },
          "start": 3640,
          "end": 3646
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Partial",
            "optional": false,
            "typeAnnotation": null,
            "start": 3649,
            "end": 3656
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3657,
                      "end": 3658
                    },
                    "typeArguments": null,
                    "start": 3657,
                    "end": 3658
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3659,
                      "end": 3661
                    },
                    "typeArguments": null,
                    "start": 3659,
                    "end": 3661
                  },
                  "start": 3657,
                  "end": 3662
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3663,
                    "end": 3665
                  },
                  "typeArguments": null,
                  "start": 3663,
                  "end": 3665
                },
                "start": 3657,
                "end": 3666
              }
            ],
            "start": 3656,
            "end": 3667
          },
          "start": 3649,
          "end": 3667
        },
        "start": 3647,
        "end": 3667
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3681,
                  "end": 3682
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3683,
                  "end": 3685
                },
                "optional": false,
                "computed": true,
                "start": 3681,
                "end": 3686
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3687,
                "end": 3689
              },
              "optional": false,
              "computed": true,
              "start": 3681,
              "end": 3690
            },
            "start": 3674,
            "end": 3691
          }
        ],
        "start": 3668,
        "end": 3693
      },
      "expression": false,
      "start": 3566,
      "end": 3693
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Numeric",
        "optional": false,
        "typeAnnotation": null,
        "start": 3710,
        "end": 3717
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3718,
              "end": 3719
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3718,
            "end": 3719
          }
        ],
        "start": 3717,
        "end": 3720
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 3726,
          "end": 3727
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3737,
              "end": 3738
            },
            "typeArguments": null,
            "start": 3737,
            "end": 3738
          },
          "start": 3731,
          "end": 3738
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 3742,
          "end": 3748
        },
        "optional": true,
        "readonly": null,
        "start": 3723,
        "end": 3750
      },
      "declare": false,
      "start": 3705,
      "end": 3751
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f90",
        "optional": false,
        "typeAnnotation": null,
        "start": 3761,
        "end": 3764
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3765,
              "end": 3766
            },
            "constraint": {
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3777,
                    "end": 3778
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3780,
                      "end": 3786
                    },
                    "start": 3778,
                    "end": 3786
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3777,
                  "end": 3786
                }
              ],
              "start": 3775,
              "end": 3788
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3765,
            "end": 3788
          }
        ],
        "start": 3764,
        "end": 3789
      },
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Numeric",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3807,
                        "end": 3814
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3815,
                              "end": 3816
                            },
                            "typeArguments": null,
                            "start": 3815,
                            "end": 3816
                          }
                        ],
                        "start": 3814,
                        "end": 3817
                      },
                      "start": 3807,
                      "end": 3817
                    },
                    "start": 3805,
                    "end": 3817
                  },
                  "start": 3804,
                  "end": 3817
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3822,
                        "end": 3823
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3825,
                        "end": 3826
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3822,
                      "end": 3826
                    }
                  ],
                  "start": 3820,
                  "end": 3828
                },
                "definite": false,
                "start": 3804,
                "end": 3828
              }
            ],
            "declare": false,
            "start": 3798,
            "end": 3829
          }
        ],
        "start": 3792,
        "end": 3831
      },
      "expression": false,
      "start": 3752,
      "end": 3831
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 3842,
        "end": 3843
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3844,
              "end": 3845
            },
            "constraint": {
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3856,
                    "end": 3857
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 3859,
                      "end": 3861
                    },
                    "start": 3857,
                    "end": 3861
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3856,
                  "end": 3861
                }
              ],
              "start": 3854,
              "end": 3863
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3844,
            "end": 3863
          }
        ],
        "start": 3843,
        "end": 3864
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Partial",
            "optional": false,
            "typeAnnotation": null,
            "start": 3868,
            "end": 3875
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3876,
                  "end": 3877
                },
                "typeArguments": null,
                "start": 3876,
                "end": 3877
              }
            ],
            "start": 3875,
            "end": 3878
          },
          "start": 3868,
          "end": 3878
        },
        "start": 3866,
        "end": 3878
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3892,
                  "end": 3901
                },
                "start": 3892,
                "end": 3902
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3906,
                  "end": 3907
                },
                "typeArguments": null,
                "start": 3906,
                "end": 3907
              },
              "start": 3892,
              "end": 3907
            },
            "start": 3885,
            "end": 3908
          }
        ],
        "start": 3879,
        "end": 3910
      },
      "expression": false,
      "start": 3833,
      "end": 3910
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SettingsTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 3932,
        "end": 3945
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
              "name": "audio",
              "optional": false,
              "typeAnnotation": null,
              "start": 3950,
              "end": 3955
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
                      "name": "volume",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3963,
                      "end": 3969
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3971,
                        "end": 3977
                      },
                      "start": 3969,
                      "end": 3977
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3963,
                    "end": 3978
                  }
                ],
                "start": 3957,
                "end": 3982
              },
              "start": 3955,
              "end": 3982
            },
            "accessibility": null,
            "static": false,
            "start": 3950,
            "end": 3983
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "video",
              "optional": false,
              "typeAnnotation": null,
              "start": 3986,
              "end": 3991
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
                      "name": "resolution",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3999,
                      "end": 4009
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 4011,
                        "end": 4017
                      },
                      "start": 4009,
                      "end": 4017
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3999,
                    "end": 4018
                  }
                ],
                "start": 3993,
                "end": 4022
              },
              "start": 3991,
              "end": 4022
            },
            "accessibility": null,
            "static": false,
            "start": 3986,
            "end": 4023
          }
        ],
        "start": 3946,
        "end": 4025
      },
      "declare": false,
      "start": 3922,
      "end": 4025
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Settings",
        "optional": false,
        "typeAnnotation": null,
        "start": 4036,
        "end": 4044
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Params",
              "optional": false,
              "typeAnnotation": null,
              "start": 4045,
              "end": 4051
            },
            "constraint": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 4063,
                "end": 4064
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Params",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4074,
                    "end": 4080
                  },
                  "typeArguments": null,
                  "start": 4074,
                  "end": 4080
                },
                "start": 4068,
                "end": 4080
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4084,
                "end": 4090
              },
              "optional": true,
              "readonly": null,
              "start": 4060,
              "end": 4092
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4045,
            "end": 4092
          }
        ],
        "start": 4044,
        "end": 4093
      },
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
              "name": "config",
              "optional": false,
              "typeAnnotation": null,
              "start": 4098,
              "end": 4104
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4106,
                  "end": 4112
                },
                "typeArguments": null,
                "start": 4106,
                "end": 4112
              },
              "start": 4104,
              "end": 4112
            },
            "accessibility": null,
            "static": false,
            "start": 4098,
            "end": 4113
          }
        ],
        "start": 4094,
        "end": 4115
      },
      "declare": false,
      "start": 4026,
      "end": 4115
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConcreteSettingsResult1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4121,
        "end": 4144
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Settings",
          "optional": false,
          "typeAnnotation": null,
          "start": 4147,
          "end": 4155
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SettingsTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4156,
                  "end": 4169
                },
                "typeArguments": null,
                "start": 4156,
                "end": 4169
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "audio",
                  "raw": "\"audio\"",
                  "start": 4170,
                  "end": 4177
                },
                "start": 4170,
                "end": 4177
              },
              "start": 4156,
              "end": 4178
            }
          ],
          "start": 4155,
          "end": 4179
        },
        "start": 4147,
        "end": 4179
      },
      "declare": false,
      "start": 4116,
      "end": 4180
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConcreteSettingsResult2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4186,
        "end": 4209
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Settings",
          "optional": false,
          "typeAnnotation": null,
          "start": 4212,
          "end": 4220
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SettingsTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4221,
                  "end": 4234
                },
                "typeArguments": null,
                "start": 4221,
                "end": 4234
              },
              "indexType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "audio",
                      "raw": "\"audio\"",
                      "start": 4235,
                      "end": 4242
                    },
                    "start": 4235,
                    "end": 4242
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "video",
                      "raw": "\"video\"",
                      "start": 4245,
                      "end": 4252
                    },
                    "start": 4245,
                    "end": 4252
                  }
                ],
                "start": 4235,
                "end": 4252
              },
              "start": 4221,
              "end": 4253
            }
          ],
          "start": 4220,
          "end": 4254
        },
        "start": 4212,
        "end": 4254
      },
      "declare": false,
      "start": 4181,
      "end": 4255
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericSettingsAccess",
        "optional": false,
        "typeAnnotation": null,
        "start": 4261,
        "end": 4282
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 4283,
              "end": 4284
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SettingsTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4299,
                  "end": 4312
                },
                "typeArguments": null,
                "start": 4299,
                "end": 4312
              },
              "start": 4293,
              "end": 4312
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4283,
            "end": 4312
          }
        ],
        "start": 4282,
        "end": 4313
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Settings",
          "optional": false,
          "typeAnnotation": null,
          "start": 4316,
          "end": 4324
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SettingsTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4325,
                  "end": 4338
                },
                "typeArguments": null,
                "start": 4325,
                "end": 4338
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4339,
                  "end": 4340
                },
                "typeArguments": null,
                "start": 4339,
                "end": 4340
              },
              "start": 4325,
              "end": 4341
            }
          ],
          "start": 4324,
          "end": 4342
        },
        "start": 4316,
        "end": 4342
      },
      "declare": false,
      "start": 4256,
      "end": 4343
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericSettingsResult1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4349,
        "end": 4371
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "GenericSettingsAccess",
          "optional": false,
          "typeAnnotation": null,
          "start": 4374,
          "end": 4395
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "audio",
                "raw": "\"audio\"",
                "start": 4396,
                "end": 4403
              },
              "start": 4396,
              "end": 4403
            }
          ],
          "start": 4395,
          "end": 4404
        },
        "start": 4374,
        "end": 4404
      },
      "declare": false,
      "start": 4344,
      "end": 4405
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericSettingsResult2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4411,
        "end": 4433
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "GenericSettingsAccess",
          "optional": false,
          "typeAnnotation": null,
          "start": 4436,
          "end": 4457
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "audio",
                    "raw": "\"audio\"",
                    "start": 4458,
                    "end": 4465
                  },
                  "start": 4458,
                  "end": 4465
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "video",
                    "raw": "\"video\"",
                    "start": 4468,
                    "end": 4475
                  },
                  "start": 4468,
                  "end": 4475
                }
              ],
              "start": 4458,
              "end": 4475
            }
          ],
          "start": 4457,
          "end": 4476
        },
        "start": 4436,
        "end": 4476
      },
      "declare": false,
      "start": 4406,
      "end": 4477
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4477
}
```

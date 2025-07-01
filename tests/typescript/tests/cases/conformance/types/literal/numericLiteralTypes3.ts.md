__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "literal": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 9,
          "end": 10
        },
        "start": 9,
        "end": 10
      },
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 18
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 21,
              "end": 22
            },
            "start": 21,
            "end": 22
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 25,
              "end": 26
            },
            "start": 25,
            "end": 26
          }
        ],
        "start": 21,
        "end": 26
      },
      "declare": false,
      "start": 12,
      "end": 27
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 34
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 37,
              "end": 38
            },
            "start": 37,
            "end": 38
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 41,
              "end": 42
            },
            "start": 41,
            "end": 42
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 45,
              "end": 46
            },
            "start": 45,
            "end": 46
          }
        ],
        "start": 37,
        "end": 46
      },
      "declare": false,
      "start": 28,
      "end": 47
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 54
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 57,
              "end": 58
            },
            "start": 57,
            "end": 58
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 61,
              "end": 62
            },
            "start": 61,
            "end": 62
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 65,
              "end": 66
            },
            "start": 65,
            "end": 66
          }
        ],
        "start": 57,
        "end": 66
      },
      "declare": false,
      "start": 48,
      "end": 67
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 80
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 85
              },
              "typeArguments": null,
              "start": 84,
              "end": 85
            },
            "start": 82,
            "end": 85
          },
          "start": 81,
          "end": 85
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 90,
                "end": 91
              },
              "typeArguments": null,
              "start": 90,
              "end": 91
            },
            "start": 88,
            "end": 91
          },
          "start": 87,
          "end": 91
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
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
          "start": 93,
          "end": 97
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 102,
                "end": 103
              },
              "typeArguments": null,
              "start": 102,
              "end": 103
            },
            "start": 100,
            "end": 103
          },
          "start": 99,
          "end": 103
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 112
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 115,
                "end": 116
              },
              "start": 111,
              "end": 116
            },
            "directive": null,
            "start": 111,
            "end": 117
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 122,
                "end": 123
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 127
              },
              "start": 122,
              "end": 127
            },
            "directive": null,
            "start": 122,
            "end": 128
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 134
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 137,
                "end": 138
              },
              "start": 133,
              "end": 138
            },
            "directive": null,
            "start": 133,
            "end": 139
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 144,
                "end": 145
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 148,
                "end": 149
              },
              "start": 144,
              "end": 149
            },
            "directive": null,
            "start": 144,
            "end": 150
          }
        ],
        "start": 105,
        "end": 152
      },
      "expression": false,
      "start": 69,
      "end": 152
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 165
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 169,
                "end": 170
              },
              "typeArguments": null,
              "start": 169,
              "end": 170
            },
            "start": 167,
            "end": 170
          },
          "start": 166,
          "end": 170
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 176
              },
              "typeArguments": null,
              "start": 175,
              "end": 176
            },
            "start": 173,
            "end": 176
          },
          "start": 172,
          "end": 176
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 181,
                "end": 182
              },
              "typeArguments": null,
              "start": 181,
              "end": 182
            },
            "start": 179,
            "end": 182
          },
          "start": 178,
          "end": 182
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 187,
                "end": 188
              },
              "typeArguments": null,
              "start": 187,
              "end": 188
            },
            "start": 185,
            "end": 188
          },
          "start": 184,
          "end": 188
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
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 197
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 200,
                "end": 201
              },
              "start": 196,
              "end": 201
            },
            "directive": null,
            "start": 196,
            "end": 202
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 207,
                "end": 208
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 211,
                "end": 212
              },
              "start": 207,
              "end": 212
            },
            "directive": null,
            "start": 207,
            "end": 213
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 219
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 222,
                "end": 223
              },
              "start": 218,
              "end": 223
            },
            "directive": null,
            "start": 218,
            "end": 224
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 229,
                "end": 230
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 233,
                "end": 234
              },
              "start": 229,
              "end": 234
            },
            "directive": null,
            "start": 229,
            "end": 235
          }
        ],
        "start": 190,
        "end": 237
      },
      "expression": false,
      "start": 154,
      "end": 237
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 248,
        "end": 250
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 254,
                "end": 255
              },
              "typeArguments": null,
              "start": 254,
              "end": 255
            },
            "start": 252,
            "end": 255
          },
          "start": 251,
          "end": 255
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 260,
                "end": 261
              },
              "typeArguments": null,
              "start": 260,
              "end": 261
            },
            "start": 258,
            "end": 261
          },
          "start": 257,
          "end": 261
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 266,
                "end": 267
              },
              "typeArguments": null,
              "start": 266,
              "end": 267
            },
            "start": 264,
            "end": 267
          },
          "start": 263,
          "end": 267
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 272,
                "end": 273
              },
              "typeArguments": null,
              "start": 272,
              "end": 273
            },
            "start": 270,
            "end": 273
          },
          "start": 269,
          "end": 273
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
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 281,
                "end": 282
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 285,
                "end": 286
              },
              "start": 281,
              "end": 286
            },
            "directive": null,
            "start": 281,
            "end": 287
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 292,
                "end": 293
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 296,
                "end": 297
              },
              "start": 292,
              "end": 297
            },
            "directive": null,
            "start": 292,
            "end": 298
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 303,
                "end": 304
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 307,
                "end": 308
              },
              "start": 303,
              "end": 308
            },
            "directive": null,
            "start": 303,
            "end": 309
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 314,
                "end": 315
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 318,
                "end": 319
              },
              "start": 314,
              "end": 319
            },
            "directive": null,
            "start": 314,
            "end": 320
          }
        ],
        "start": 275,
        "end": 322
      },
      "expression": false,
      "start": 239,
      "end": 322
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 333,
        "end": 335
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 339,
                "end": 340
              },
              "typeArguments": null,
              "start": 339,
              "end": 340
            },
            "start": 337,
            "end": 340
          },
          "start": 336,
          "end": 340
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 345,
                "end": 346
              },
              "typeArguments": null,
              "start": 345,
              "end": 346
            },
            "start": 343,
            "end": 346
          },
          "start": 342,
          "end": 346
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 351,
                "end": 352
              },
              "typeArguments": null,
              "start": 351,
              "end": 352
            },
            "start": 349,
            "end": 352
          },
          "start": 348,
          "end": 352
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 357,
                "end": 358
              },
              "typeArguments": null,
              "start": 357,
              "end": 358
            },
            "start": 355,
            "end": 358
          },
          "start": 354,
          "end": 358
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
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 366,
                "end": 367
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 370,
                "end": 371
              },
              "start": 366,
              "end": 371
            },
            "directive": null,
            "start": 366,
            "end": 372
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 377,
                "end": 378
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 381,
                "end": 382
              },
              "start": 377,
              "end": 382
            },
            "directive": null,
            "start": 377,
            "end": 383
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 388,
                "end": 389
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 392,
                "end": 393
              },
              "start": 388,
              "end": 393
            },
            "directive": null,
            "start": 388,
            "end": 394
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 399,
                "end": 400
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 403,
                "end": 404
              },
              "start": 399,
              "end": 404
            },
            "directive": null,
            "start": 399,
            "end": 405
          }
        ],
        "start": 360,
        "end": 407
      },
      "expression": false,
      "start": 324,
      "end": 407
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 418,
        "end": 420
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 425
              },
              "typeArguments": null,
              "start": 424,
              "end": 425
            },
            "start": 422,
            "end": 425
          },
          "start": 421,
          "end": 425
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 430,
                "end": 431
              },
              "typeArguments": null,
              "start": 430,
              "end": 431
            },
            "start": 428,
            "end": 431
          },
          "start": 427,
          "end": 431
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 436,
                "end": 437
              },
              "typeArguments": null,
              "start": 436,
              "end": 437
            },
            "start": 434,
            "end": 437
          },
          "start": 433,
          "end": 437
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 442,
                "end": 443
              },
              "typeArguments": null,
              "start": 442,
              "end": 443
            },
            "start": 440,
            "end": 443
          },
          "start": 439,
          "end": 443
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 451,
                "end": 452
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 455,
                "end": 456
              },
              "start": 451,
              "end": 456
            },
            "directive": null,
            "start": 451,
            "end": 457
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 462,
                "end": 463
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 466,
                "end": 467
              },
              "start": 462,
              "end": 467
            },
            "directive": null,
            "start": 462,
            "end": 468
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 473,
                "end": 474
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 477,
                "end": 478
              },
              "start": 473,
              "end": 478
            },
            "directive": null,
            "start": 473,
            "end": 479
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 484,
                "end": 485
              },
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 488,
                "end": 489
              },
              "start": 484,
              "end": 489
            },
            "directive": null,
            "start": 484,
            "end": 490
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 495,
                "end": 496
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 499,
                "end": 500
              },
              "start": 495,
              "end": 500
            },
            "directive": null,
            "start": 495,
            "end": 501
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 506,
                "end": 507
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 510,
                "end": 511
              },
              "start": 506,
              "end": 511
            },
            "directive": null,
            "start": 506,
            "end": 512
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 517,
                "end": 518
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 521,
                "end": 522
              },
              "start": 517,
              "end": 522
            },
            "directive": null,
            "start": 517,
            "end": 523
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 528,
                "end": 529
              },
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 532,
                "end": 533
              },
              "start": 528,
              "end": 533
            },
            "directive": null,
            "start": 528,
            "end": 534
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 539,
                "end": 540
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 543,
                "end": 544
              },
              "start": 539,
              "end": 544
            },
            "directive": null,
            "start": 539,
            "end": 545
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 550,
                "end": 551
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 554,
                "end": 555
              },
              "start": 550,
              "end": 555
            },
            "directive": null,
            "start": 550,
            "end": 556
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 561,
                "end": 562
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 565,
                "end": 566
              },
              "start": 561,
              "end": 566
            },
            "directive": null,
            "start": 561,
            "end": 567
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 572,
                "end": 573
              },
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 576,
                "end": 577
              },
              "start": 572,
              "end": 577
            },
            "directive": null,
            "start": 572,
            "end": 578
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 583,
                "end": 584
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 587,
                "end": 588
              },
              "start": 583,
              "end": 588
            },
            "directive": null,
            "start": 583,
            "end": 589
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 594,
                "end": 595
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 598,
                "end": 599
              },
              "start": 594,
              "end": 599
            },
            "directive": null,
            "start": 594,
            "end": 600
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 605,
                "end": 606
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 609,
                "end": 610
              },
              "start": 605,
              "end": 610
            },
            "directive": null,
            "start": 605,
            "end": 611
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 616,
                "end": 617
              },
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 620,
                "end": 621
              },
              "start": 616,
              "end": 621
            },
            "directive": null,
            "start": 616,
            "end": 622
          }
        ],
        "start": 445,
        "end": 624
      },
      "expression": false,
      "start": 409,
      "end": 624
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 635,
        "end": 637
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 641,
                "end": 642
              },
              "typeArguments": null,
              "start": 641,
              "end": 642
            },
            "start": 639,
            "end": 642
          },
          "start": 638,
          "end": 642
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 647,
                "end": 648
              },
              "typeArguments": null,
              "start": 647,
              "end": 648
            },
            "start": 645,
            "end": 648
          },
          "start": 644,
          "end": 648
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 653,
                "end": 654
              },
              "typeArguments": null,
              "start": 653,
              "end": 654
            },
            "start": 651,
            "end": 654
          },
          "start": 650,
          "end": 654
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 659,
                "end": 660
              },
              "typeArguments": null,
              "start": 659,
              "end": 660
            },
            "start": 657,
            "end": 660
          },
          "start": 656,
          "end": 660
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 668,
                "end": 669
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 674,
                "end": 675
              },
              "start": 668,
              "end": 675
            },
            "directive": null,
            "start": 668,
            "end": 676
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 681,
                "end": 682
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 687,
                "end": 688
              },
              "start": 681,
              "end": 688
            },
            "directive": null,
            "start": 681,
            "end": 689
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 694,
                "end": 695
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 700,
                "end": 701
              },
              "start": 694,
              "end": 701
            },
            "directive": null,
            "start": 694,
            "end": 702
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 707,
                "end": 708
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 713,
                "end": 714
              },
              "start": 707,
              "end": 714
            },
            "directive": null,
            "start": 707,
            "end": 715
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 720,
                "end": 721
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 726,
                "end": 727
              },
              "start": 720,
              "end": 727
            },
            "directive": null,
            "start": 720,
            "end": 728
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 733,
                "end": 734
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 739,
                "end": 740
              },
              "start": 733,
              "end": 740
            },
            "directive": null,
            "start": 733,
            "end": 741
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 746,
                "end": 747
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 752,
                "end": 753
              },
              "start": 746,
              "end": 753
            },
            "directive": null,
            "start": 746,
            "end": 754
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 759,
                "end": 760
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 765,
                "end": 766
              },
              "start": 759,
              "end": 766
            },
            "directive": null,
            "start": 759,
            "end": 767
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 772,
                "end": 773
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 778,
                "end": 779
              },
              "start": 772,
              "end": 779
            },
            "directive": null,
            "start": 772,
            "end": 780
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 785,
                "end": 786
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 791,
                "end": 792
              },
              "start": 785,
              "end": 792
            },
            "directive": null,
            "start": 785,
            "end": 793
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 798,
                "end": 799
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 804,
                "end": 805
              },
              "start": 798,
              "end": 805
            },
            "directive": null,
            "start": 798,
            "end": 806
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 811,
                "end": 812
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 817,
                "end": 818
              },
              "start": 811,
              "end": 818
            },
            "directive": null,
            "start": 811,
            "end": 819
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 824,
                "end": 825
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 830,
                "end": 831
              },
              "start": 824,
              "end": 831
            },
            "directive": null,
            "start": 824,
            "end": 832
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 837,
                "end": 838
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 843,
                "end": 844
              },
              "start": 837,
              "end": 844
            },
            "directive": null,
            "start": 837,
            "end": 845
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 850,
                "end": 851
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 856,
                "end": 857
              },
              "start": 850,
              "end": 857
            },
            "directive": null,
            "start": 850,
            "end": 858
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 863,
                "end": 864
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 869,
                "end": 870
              },
              "start": 863,
              "end": 870
            },
            "directive": null,
            "start": 863,
            "end": 871
          }
        ],
        "start": 662,
        "end": 873
      },
      "expression": false,
      "start": 626,
      "end": 873
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 884,
        "end": 886
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 890,
                "end": 891
              },
              "typeArguments": null,
              "start": 890,
              "end": 891
            },
            "start": 888,
            "end": 891
          },
          "start": 887,
          "end": 891
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 896,
                "end": 897
              },
              "typeArguments": null,
              "start": 896,
              "end": 897
            },
            "start": 894,
            "end": 897
          },
          "start": 893,
          "end": 897
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 902,
                "end": 903
              },
              "typeArguments": null,
              "start": 902,
              "end": 903
            },
            "start": 900,
            "end": 903
          },
          "start": 899,
          "end": 903
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 908,
                "end": 909
              },
              "typeArguments": null,
              "start": 908,
              "end": 909
            },
            "start": 906,
            "end": 909
          },
          "start": 905,
          "end": 909
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 917,
                "end": 918
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 923,
                "end": 924
              },
              "start": 917,
              "end": 924
            },
            "directive": null,
            "start": 917,
            "end": 925
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 930,
                "end": 931
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 936,
                "end": 937
              },
              "start": 930,
              "end": 937
            },
            "directive": null,
            "start": 930,
            "end": 938
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 943,
                "end": 944
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 949,
                "end": 950
              },
              "start": 943,
              "end": 950
            },
            "directive": null,
            "start": 943,
            "end": 951
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 956,
                "end": 957
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 962,
                "end": 963
              },
              "start": 956,
              "end": 963
            },
            "directive": null,
            "start": 956,
            "end": 964
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 969,
                "end": 970
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 975,
                "end": 976
              },
              "start": 969,
              "end": 976
            },
            "directive": null,
            "start": 969,
            "end": 977
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 982,
                "end": 983
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 988,
                "end": 989
              },
              "start": 982,
              "end": 989
            },
            "directive": null,
            "start": 982,
            "end": 990
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 995,
                "end": 996
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1001,
                "end": 1002
              },
              "start": 995,
              "end": 1002
            },
            "directive": null,
            "start": 995,
            "end": 1003
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1008,
                "end": 1009
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1014,
                "end": 1015
              },
              "start": 1008,
              "end": 1015
            },
            "directive": null,
            "start": 1008,
            "end": 1016
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1021,
                "end": 1022
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1027,
                "end": 1028
              },
              "start": 1021,
              "end": 1028
            },
            "directive": null,
            "start": 1021,
            "end": 1029
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1034,
                "end": 1035
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1040,
                "end": 1041
              },
              "start": 1034,
              "end": 1041
            },
            "directive": null,
            "start": 1034,
            "end": 1042
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1047,
                "end": 1048
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1053,
                "end": 1054
              },
              "start": 1047,
              "end": 1054
            },
            "directive": null,
            "start": 1047,
            "end": 1055
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1060,
                "end": 1061
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1066,
                "end": 1067
              },
              "start": 1060,
              "end": 1067
            },
            "directive": null,
            "start": 1060,
            "end": 1068
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1073,
                "end": 1074
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1079,
                "end": 1080
              },
              "start": 1073,
              "end": 1080
            },
            "directive": null,
            "start": 1073,
            "end": 1081
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1086,
                "end": 1087
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1092,
                "end": 1093
              },
              "start": 1086,
              "end": 1093
            },
            "directive": null,
            "start": 1086,
            "end": 1094
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1099,
                "end": 1100
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1105,
                "end": 1106
              },
              "start": 1099,
              "end": 1106
            },
            "directive": null,
            "start": 1099,
            "end": 1107
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1112,
                "end": 1113
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1118,
                "end": 1119
              },
              "start": 1112,
              "end": 1119
            },
            "directive": null,
            "start": 1112,
            "end": 1120
          }
        ],
        "start": 911,
        "end": 1122
      },
      "expression": false,
      "start": 875,
      "end": 1122
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1133,
        "end": 1135
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1139,
                    "end": 1140
                  },
                  "start": 1139,
                  "end": 1140
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1143,
                    "end": 1144
                  },
                  "start": 1143,
                  "end": 1144
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 1147,
                    "end": 1148
                  },
                  "start": 1147,
                  "end": 1148
                }
              ],
              "start": 1139,
              "end": 1148
            },
            "start": 1137,
            "end": 1148
          },
          "start": 1136,
          "end": 1148
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1164,
              "end": 1165
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1182,
                  "end": 1183
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1185,
                    "end": 1192
                  }
                ],
                "start": 1177,
                "end": 1192
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1206,
                  "end": 1207
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1209,
                    "end": 1216
                  }
                ],
                "start": 1201,
                "end": 1216
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1230,
                  "end": 1231
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1233,
                    "end": 1240
                  }
                ],
                "start": 1225,
                "end": 1240
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 1254,
                  "end": 1255
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1257,
                    "end": 1264
                  }
                ],
                "start": 1249,
                "end": 1264
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 1278,
                  "end": 1279
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1281,
                    "end": 1288
                  }
                ],
                "start": 1273,
                "end": 1288
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 1302,
                  "end": 1303
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1305,
                    "end": 1312
                  }
                ],
                "start": 1297,
                "end": 1312
              }
            ],
            "start": 1156,
            "end": 1318
          }
        ],
        "start": 1150,
        "end": 1320
      },
      "expression": false,
      "start": 1124,
      "end": 1320
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1320
}
```

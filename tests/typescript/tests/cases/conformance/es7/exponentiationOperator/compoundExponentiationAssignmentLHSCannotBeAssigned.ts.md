__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
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
              "start": 9,
              "end": 10
            },
            "initializer": null,
            "computed": false,
            "start": 9,
            "end": 10
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 13
            },
            "initializer": null,
            "computed": false,
            "start": 12,
            "end": 13
          }
        ],
        "start": 7,
        "end": 15
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 15
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
                "type": "TSAnyKeyword",
                "start": 24,
                "end": 27
              },
              "start": 22,
              "end": 27
            },
            "start": 21,
            "end": 27
          },
          "init": null,
          "definite": false,
          "start": 21,
          "end": 27
        }
      ],
      "declare": false,
      "start": 17,
      "end": 28
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
                "type": "TSVoidKeyword",
                "start": 36,
                "end": 40
              },
              "start": 34,
              "end": 40
            },
            "start": 33,
            "end": 40
          },
          "init": null,
          "definite": false,
          "start": 33,
          "end": 40
        }
      ],
      "declare": false,
      "start": 29,
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 51,
                "end": 58
              },
              "start": 49,
              "end": 58
            },
            "start": 47,
            "end": 58
          },
          "init": null,
          "definite": false,
          "start": 47,
          "end": 58
        }
      ],
      "declare": false,
      "start": 43,
      "end": 59
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 60,
          "end": 62
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 68
        },
        "start": 60,
        "end": 68
      },
      "directive": null,
      "start": 60,
      "end": 69
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 70,
          "end": 72
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 77,
          "end": 78
        },
        "start": 70,
        "end": 78
      },
      "directive": null,
      "start": 70,
      "end": 79
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 80,
          "end": 82
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 87,
          "end": 91
        },
        "start": 80,
        "end": 91
      },
      "directive": null,
      "start": 80,
      "end": 92
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 93,
          "end": 95
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 100,
          "end": 101
        },
        "start": 93,
        "end": 101
      },
      "directive": null,
      "start": 93,
      "end": 102
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 103,
          "end": 105
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 110,
          "end": 112
        },
        "start": 103,
        "end": 112
      },
      "directive": null,
      "start": 103,
      "end": 112
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 113,
          "end": 115
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 121
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 123
          },
          "optional": false,
          "computed": false,
          "start": 120,
          "end": 123
        },
        "start": 113,
        "end": 123
      },
      "directive": null,
      "start": 113,
      "end": 124
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 125,
          "end": 127
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 132,
          "end": 134
        },
        "start": 125,
        "end": 134
      },
      "directive": null,
      "start": 125,
      "end": 135
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 136,
          "end": 138
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 143,
          "end": 147
        },
        "start": 136,
        "end": 147
      },
      "directive": null,
      "start": 136,
      "end": 148
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 149,
          "end": 151
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 156,
          "end": 165
        },
        "start": 149,
        "end": 165
      },
      "directive": null,
      "start": 149,
      "end": 166
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 176,
                "end": 182
              },
              "start": 174,
              "end": 182
            },
            "start": 172,
            "end": 182
          },
          "init": null,
          "definite": false,
          "start": 172,
          "end": 182
        }
      ],
      "declare": false,
      "start": 168,
      "end": 183
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 184,
          "end": 186
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 191,
          "end": 192
        },
        "start": 184,
        "end": 192
      },
      "directive": null,
      "start": 184,
      "end": 193
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 194,
          "end": 196
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 201,
          "end": 202
        },
        "start": 194,
        "end": 202
      },
      "directive": null,
      "start": 194,
      "end": 203
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 204,
          "end": 206
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 211,
          "end": 215
        },
        "start": 204,
        "end": 215
      },
      "directive": null,
      "start": 204,
      "end": 216
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 217,
          "end": 219
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 224,
          "end": 225
        },
        "start": 217,
        "end": 225
      },
      "directive": null,
      "start": 217,
      "end": 226
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 227,
          "end": 229
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 234,
          "end": 236
        },
        "start": 227,
        "end": 236
      },
      "directive": null,
      "start": 227,
      "end": 236
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 237,
          "end": 239
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 244,
            "end": 245
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 246,
            "end": 247
          },
          "optional": false,
          "computed": false,
          "start": 244,
          "end": 247
        },
        "start": 237,
        "end": 247
      },
      "directive": null,
      "start": 237,
      "end": 248
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 249,
          "end": 251
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 256,
          "end": 258
        },
        "start": 249,
        "end": 258
      },
      "directive": null,
      "start": 249,
      "end": 259
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 260,
          "end": 262
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 267,
          "end": 271
        },
        "start": 260,
        "end": 271
      },
      "directive": null,
      "start": 260,
      "end": 272
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 273,
          "end": 275
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 280,
          "end": 289
        },
        "start": 273,
        "end": 289
      },
      "directive": null,
      "start": 273,
      "end": 290
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 300,
                "end": 302
              },
              "start": 298,
              "end": 302
            },
            "start": 296,
            "end": 302
          },
          "init": null,
          "definite": false,
          "start": 296,
          "end": 302
        }
      ],
      "declare": false,
      "start": 292,
      "end": 303
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 304,
          "end": 306
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 311,
          "end": 312
        },
        "start": 304,
        "end": 312
      },
      "directive": null,
      "start": 304,
      "end": 313
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 314,
          "end": 316
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 321,
          "end": 322
        },
        "start": 314,
        "end": 322
      },
      "directive": null,
      "start": 314,
      "end": 323
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 324,
          "end": 326
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 331,
          "end": 335
        },
        "start": 324,
        "end": 335
      },
      "directive": null,
      "start": 324,
      "end": 336
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 337,
          "end": 339
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 344,
          "end": 345
        },
        "start": 337,
        "end": 345
      },
      "directive": null,
      "start": 337,
      "end": 346
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 347,
          "end": 349
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 354,
          "end": 356
        },
        "start": 347,
        "end": 356
      },
      "directive": null,
      "start": 347,
      "end": 356
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 357,
          "end": 359
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 364,
            "end": 365
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 366,
            "end": 367
          },
          "optional": false,
          "computed": false,
          "start": 364,
          "end": 367
        },
        "start": 357,
        "end": 367
      },
      "directive": null,
      "start": 357,
      "end": 368
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 369,
          "end": 371
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 376,
          "end": 378
        },
        "start": 369,
        "end": 378
      },
      "directive": null,
      "start": 369,
      "end": 379
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 380,
          "end": 382
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 387,
          "end": 391
        },
        "start": 380,
        "end": 391
      },
      "directive": null,
      "start": 380,
      "end": 392
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 393,
          "end": 395
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 400,
          "end": 409
        },
        "start": 393,
        "end": 409
      },
      "directive": null,
      "start": 393,
      "end": 410
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
            "name": "x4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 420,
                "end": 424
              },
              "start": 418,
              "end": 424
            },
            "start": 416,
            "end": 424
          },
          "init": null,
          "definite": false,
          "start": 416,
          "end": 424
        }
      ],
      "declare": false,
      "start": 412,
      "end": 425
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 426,
          "end": 428
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 433,
          "end": 434
        },
        "start": 426,
        "end": 434
      },
      "directive": null,
      "start": 426,
      "end": 435
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 436,
          "end": 438
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 443,
          "end": 444
        },
        "start": 436,
        "end": 444
      },
      "directive": null,
      "start": 436,
      "end": 445
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 446,
          "end": 448
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 453,
          "end": 457
        },
        "start": 446,
        "end": 457
      },
      "directive": null,
      "start": 446,
      "end": 458
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 459,
          "end": 461
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 466,
          "end": 467
        },
        "start": 459,
        "end": 467
      },
      "directive": null,
      "start": 459,
      "end": 468
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 469,
          "end": 471
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 476,
          "end": 478
        },
        "start": 469,
        "end": 478
      },
      "directive": null,
      "start": 469,
      "end": 478
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 479,
          "end": 481
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 486,
            "end": 487
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 488,
            "end": 489
          },
          "optional": false,
          "computed": false,
          "start": 486,
          "end": 489
        },
        "start": 479,
        "end": 489
      },
      "directive": null,
      "start": 479,
      "end": 490
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 491,
          "end": 493
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 498,
          "end": 500
        },
        "start": 491,
        "end": 500
      },
      "directive": null,
      "start": 491,
      "end": 501
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 502,
          "end": 504
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 509,
          "end": 513
        },
        "start": 502,
        "end": 513
      },
      "directive": null,
      "start": 502,
      "end": 514
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 515,
          "end": 517
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 522,
          "end": 531
        },
        "start": 515,
        "end": 531
      },
      "directive": null,
      "start": 515,
      "end": 532
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
            "name": "x5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 542,
                "end": 548
              },
              "start": 540,
              "end": 548
            },
            "start": 538,
            "end": 548
          },
          "init": null,
          "definite": false,
          "start": 538,
          "end": 548
        }
      ],
      "declare": false,
      "start": 534,
      "end": 549
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null,
          "start": 550,
          "end": 552
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 557,
          "end": 558
        },
        "start": 550,
        "end": 558
      },
      "directive": null,
      "start": 550,
      "end": 559
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null,
          "start": 560,
          "end": 562
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 567,
          "end": 571
        },
        "start": 560,
        "end": 571
      },
      "directive": null,
      "start": 560,
      "end": 572
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null,
          "start": 573,
          "end": 575
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 580,
          "end": 582
        },
        "start": 573,
        "end": 582
      },
      "directive": null,
      "start": 573,
      "end": 582
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null,
          "start": 583,
          "end": 585
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 590,
          "end": 592
        },
        "start": 583,
        "end": 592
      },
      "directive": null,
      "start": 583,
      "end": 593
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
            "name": "x6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 603,
                  "end": 604
                },
                "typeArguments": null,
                "start": 603,
                "end": 604
              },
              "start": 601,
              "end": 604
            },
            "start": 599,
            "end": 604
          },
          "init": null,
          "definite": false,
          "start": 599,
          "end": 604
        }
      ],
      "declare": false,
      "start": 595,
      "end": 605
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x6",
          "optional": false,
          "typeAnnotation": null,
          "start": 606,
          "end": 608
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 613,
          "end": 614
        },
        "start": 606,
        "end": 614
      },
      "directive": null,
      "start": 606,
      "end": 615
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x6",
          "optional": false,
          "typeAnnotation": null,
          "start": 616,
          "end": 618
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 623,
          "end": 627
        },
        "start": 616,
        "end": 627
      },
      "directive": null,
      "start": 616,
      "end": 628
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x6",
          "optional": false,
          "typeAnnotation": null,
          "start": 629,
          "end": 631
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 636,
          "end": 638
        },
        "start": 629,
        "end": 638
      },
      "directive": null,
      "start": 629,
      "end": 638
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x6",
          "optional": false,
          "typeAnnotation": null,
          "start": 639,
          "end": 641
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 646,
          "end": 648
        },
        "start": 639,
        "end": 648
      },
      "directive": null,
      "start": 639,
      "end": 649
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 649
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 17,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 24,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 29,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 36,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 43,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 47,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 51,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 60,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 63,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 70,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 73,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 80,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 83,
    "end": 86
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 87,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 93,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 96,
    "end": 99
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 103,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 106,
    "end": 109
  },
  {
    "type": "String",
    "value": "''",
    "start": 110,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 113,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 116,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 125,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 128,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 136,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 139,
    "end": 142
  },
  {
    "type": "Null",
    "value": "null",
    "start": 143,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 149,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 152,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 156,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 168,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 172,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 176,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 184,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 187,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 194,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 197,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 204,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 207,
    "end": 210
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 211,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 217,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 220,
    "end": 223
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 227,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 230,
    "end": 233
  },
  {
    "type": "String",
    "value": "''",
    "start": 234,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 237,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 240,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 249,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 252,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 260,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 263,
    "end": 266
  },
  {
    "type": "Null",
    "value": "null",
    "start": 267,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 273,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 276,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 280,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 292,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 296,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 304,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 307,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 314,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 317,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 324,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 327,
    "end": 330
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 331,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 337,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 340,
    "end": 343
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 347,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 350,
    "end": 353
  },
  {
    "type": "String",
    "value": "''",
    "start": 354,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 357,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 360,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 369,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 372,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 380,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 383,
    "end": 386
  },
  {
    "type": "Null",
    "value": "null",
    "start": 387,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 393,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 396,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 400,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 412,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 416,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 420,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 426,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 429,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 436,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 439,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 446,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 449,
    "end": 452
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 453,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 459,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 462,
    "end": 465
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 469,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 472,
    "end": 475
  },
  {
    "type": "String",
    "value": "''",
    "start": 476,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 479,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 482,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 491,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 494,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 502,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 505,
    "end": 508
  },
  {
    "type": "Null",
    "value": "null",
    "start": 509,
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
    "value": "x4",
    "start": 515,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 518,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 522,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 531,
    "end": 532
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 534,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 538,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 542,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 550,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 553,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 560,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 563,
    "end": 566
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 567,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 573,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 576,
    "end": 579
  },
  {
    "type": "String",
    "value": "''",
    "start": 580,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 583,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 586,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 592,
    "end": 593
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 595,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 599,
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
    "value": "E",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 606,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 609,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 616,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 619,
    "end": 622
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 623,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 629,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 632,
    "end": 635
  },
  {
    "type": "String",
    "value": "''",
    "start": 636,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 639,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 642,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 648,
    "end": 649
  }
]
```

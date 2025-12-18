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
                "type": "TSAnyKeyword",
                "start": 51,
                "end": 54
              },
              "start": 49,
              "end": 54
            },
            "start": 47,
            "end": 54
          },
          "init": null,
          "definite": false,
          "start": 47,
          "end": 54
        }
      ],
      "declare": false,
      "start": 43,
      "end": 55
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 56,
          "end": 58
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 62,
          "end": 63
        },
        "start": 56,
        "end": 63
      },
      "directive": null,
      "start": 56,
      "end": 64
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 65,
          "end": 67
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 71,
          "end": 72
        },
        "start": 65,
        "end": 72
      },
      "directive": null,
      "start": 65,
      "end": 73
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 74,
          "end": 76
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 80,
          "end": 84
        },
        "start": 74,
        "end": 84
      },
      "directive": null,
      "start": 74,
      "end": 85
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 86,
          "end": 88
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 92,
          "end": 93
        },
        "start": 86,
        "end": 93
      },
      "directive": null,
      "start": 86,
      "end": 94
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 95,
          "end": 97
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 101,
          "end": 103
        },
        "start": 95,
        "end": 103
      },
      "directive": null,
      "start": 95,
      "end": 104
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 105,
          "end": 107
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 112
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 114
          },
          "optional": false,
          "computed": false,
          "start": 111,
          "end": 114
        },
        "start": 105,
        "end": 114
      },
      "directive": null,
      "start": 105,
      "end": 115
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 116,
          "end": 118
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 122,
          "end": 124
        },
        "start": 116,
        "end": 124
      },
      "directive": null,
      "start": 116,
      "end": 125
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 126,
          "end": 128
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 132,
          "end": 136
        },
        "start": 126,
        "end": 136
      },
      "directive": null,
      "start": 126,
      "end": 137
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 138,
          "end": 140
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 144,
          "end": 153
        },
        "start": 138,
        "end": 153
      },
      "directive": null,
      "start": 138,
      "end": 154
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
                "start": 164,
                "end": 170
              },
              "start": 162,
              "end": 170
            },
            "start": 160,
            "end": 170
          },
          "init": null,
          "definite": false,
          "start": 160,
          "end": 170
        }
      ],
      "declare": false,
      "start": 156,
      "end": 171
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 172,
          "end": 174
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 178,
          "end": 179
        },
        "start": 172,
        "end": 179
      },
      "directive": null,
      "start": 172,
      "end": 180
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 181,
          "end": 183
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 187,
          "end": 188
        },
        "start": 181,
        "end": 188
      },
      "directive": null,
      "start": 181,
      "end": 189
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 190,
          "end": 192
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 196,
          "end": 200
        },
        "start": 190,
        "end": 200
      },
      "directive": null,
      "start": 190,
      "end": 201
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 202,
          "end": 204
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 208,
          "end": 209
        },
        "start": 202,
        "end": 209
      },
      "directive": null,
      "start": 202,
      "end": 210
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 211,
          "end": 213
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 217,
          "end": 219
        },
        "start": 211,
        "end": 219
      },
      "directive": null,
      "start": 211,
      "end": 220
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 221,
          "end": 223
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 227,
            "end": 228
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 229,
            "end": 230
          },
          "optional": false,
          "computed": false,
          "start": 227,
          "end": 230
        },
        "start": 221,
        "end": 230
      },
      "directive": null,
      "start": 221,
      "end": 231
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 232,
          "end": 234
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 238,
          "end": 240
        },
        "start": 232,
        "end": 240
      },
      "directive": null,
      "start": 232,
      "end": 241
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 242,
          "end": 244
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 248,
          "end": 252
        },
        "start": 242,
        "end": 252
      },
      "directive": null,
      "start": 242,
      "end": 253
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 254,
          "end": 256
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 260,
          "end": 269
        },
        "start": 254,
        "end": 269
      },
      "directive": null,
      "start": 254,
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 280,
                "end": 286
              },
              "start": 278,
              "end": 286
            },
            "start": 276,
            "end": 286
          },
          "init": null,
          "definite": false,
          "start": 276,
          "end": 286
        }
      ],
      "declare": false,
      "start": 272,
      "end": 287
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 288,
          "end": 290
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 294,
          "end": 295
        },
        "start": 288,
        "end": 295
      },
      "directive": null,
      "start": 288,
      "end": 296
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 297,
          "end": 299
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 303,
          "end": 304
        },
        "start": 297,
        "end": 304
      },
      "directive": null,
      "start": 297,
      "end": 305
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 306,
          "end": 308
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 312,
            "end": 313
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 314,
            "end": 315
          },
          "optional": false,
          "computed": false,
          "start": 312,
          "end": 315
        },
        "start": 306,
        "end": 315
      },
      "directive": null,
      "start": 306,
      "end": 316
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 317,
          "end": 319
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 323,
          "end": 327
        },
        "start": 317,
        "end": 327
      },
      "directive": null,
      "start": 317,
      "end": 328
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 329,
          "end": 331
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 335,
          "end": 344
        },
        "start": 329,
        "end": 344
      },
      "directive": null,
      "start": 329,
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
            "name": "x4",
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
                  "start": 355,
                  "end": 356
                },
                "typeArguments": null,
                "start": 355,
                "end": 356
              },
              "start": 353,
              "end": 356
            },
            "start": 351,
            "end": 356
          },
          "init": null,
          "definite": false,
          "start": 351,
          "end": 356
        }
      ],
      "declare": false,
      "start": 347,
      "end": 357
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 358,
          "end": 360
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 364,
          "end": 365
        },
        "start": 358,
        "end": 365
      },
      "directive": null,
      "start": 358,
      "end": 366
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 367,
          "end": 369
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 373,
          "end": 374
        },
        "start": 367,
        "end": 374
      },
      "directive": null,
      "start": 367,
      "end": 375
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 376,
          "end": 378
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 382,
            "end": 383
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 384,
            "end": 385
          },
          "optional": false,
          "computed": false,
          "start": 382,
          "end": 385
        },
        "start": 376,
        "end": 385
      },
      "directive": null,
      "start": 376,
      "end": 386
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 387,
          "end": 389
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 393,
          "end": 397
        },
        "start": 387,
        "end": 397
      },
      "directive": null,
      "start": 387,
      "end": 398
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 399,
          "end": 401
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 405,
          "end": 414
        },
        "start": 399,
        "end": 414
      },
      "directive": null,
      "start": 399,
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
            "name": "x5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 425,
                "end": 432
              },
              "start": 423,
              "end": 432
            },
            "start": 421,
            "end": 432
          },
          "init": null,
          "definite": false,
          "start": 421,
          "end": 432
        }
      ],
      "declare": false,
      "start": 417,
      "end": 433
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null,
          "start": 434,
          "end": 436
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 440,
          "end": 441
        },
        "start": 434,
        "end": 441
      },
      "directive": null,
      "start": 434,
      "end": 442
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
                "type": "TSTypeLiteral",
                "members": [],
                "start": 452,
                "end": 454
              },
              "start": 450,
              "end": 454
            },
            "start": 448,
            "end": 454
          },
          "init": null,
          "definite": false,
          "start": 448,
          "end": 454
        }
      ],
      "declare": false,
      "start": 444,
      "end": 455
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x6",
          "optional": false,
          "typeAnnotation": null,
          "start": 456,
          "end": 458
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 462,
          "end": 463
        },
        "start": 456,
        "end": 463
      },
      "directive": null,
      "start": 456,
      "end": 464
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x6",
          "optional": false,
          "typeAnnotation": null,
          "start": 465,
          "end": 467
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 471,
          "end": 473
        },
        "start": 465,
        "end": 473
      },
      "directive": null,
      "start": 465,
      "end": 474
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
            "name": "x7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 484,
                "end": 488
              },
              "start": 482,
              "end": 488
            },
            "start": 480,
            "end": 488
          },
          "init": null,
          "definite": false,
          "start": 480,
          "end": 488
        }
      ],
      "declare": false,
      "start": 476,
      "end": 489
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x7",
          "optional": false,
          "typeAnnotation": null,
          "start": 490,
          "end": 492
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 496,
          "end": 497
        },
        "start": 490,
        "end": 497
      },
      "directive": null,
      "start": 490,
      "end": 498
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 498
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
    "value": "any",
    "start": 51,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 56,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 59,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 65,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 68,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 74,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 77,
    "end": 79
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 80,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 86,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 89,
    "end": 91
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 95,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 98,
    "end": 100
  },
  {
    "type": "String",
    "value": "''",
    "start": 101,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 105,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 108,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 116,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 119,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 126,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 129,
    "end": 131
  },
  {
    "type": "Null",
    "value": "null",
    "start": 132,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 138,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 141,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 144,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 156,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 160,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
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
    "value": "+=",
    "start": 175,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 181,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 184,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 190,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 193,
    "end": 195
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 196,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 202,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 205,
    "end": 207
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 211,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 214,
    "end": 216
  },
  {
    "type": "String",
    "value": "''",
    "start": 217,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 221,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 224,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 232,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 235,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 242,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 245,
    "end": 247
  },
  {
    "type": "Null",
    "value": "null",
    "start": 248,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 254,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 257,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 260,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 272,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 276,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 280,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 288,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 291,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 297,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 300,
    "end": 302
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 306,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 309,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 317,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 320,
    "end": 322
  },
  {
    "type": "Null",
    "value": "null",
    "start": 323,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 329,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 332,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 335,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 344,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 347,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 351,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 358,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 361,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 367,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 370,
    "end": 372
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 376,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 379,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 387,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 390,
    "end": 392
  },
  {
    "type": "Null",
    "value": "null",
    "start": 393,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 399,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 402,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 405,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 417,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 421,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 425,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 434,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 437,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 441,
    "end": 442
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 444,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 448,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 456,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 459,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 465,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 468,
    "end": 470
  },
  {
    "type": "String",
    "value": "''",
    "start": 471,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 476,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "x7",
    "start": 480,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 482,
    "end": 483
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 484,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "x7",
    "start": 490,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 493,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 497,
    "end": 498
  }
]
```

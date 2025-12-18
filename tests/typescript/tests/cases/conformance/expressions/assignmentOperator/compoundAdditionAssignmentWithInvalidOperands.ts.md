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
                "type": "TSVoidKeyword",
                "start": 24,
                "end": 28
              },
              "start": 22,
              "end": 28
            },
            "start": 21,
            "end": 28
          },
          "init": null,
          "definite": false,
          "start": 21,
          "end": 28
        }
      ],
      "declare": false,
      "start": 17,
      "end": 29
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
                "start": 39,
                "end": 46
              },
              "start": 37,
              "end": 46
            },
            "start": 35,
            "end": 46
          },
          "init": null,
          "definite": false,
          "start": 35,
          "end": 46
        }
      ],
      "declare": false,
      "start": 31,
      "end": 47
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
          "start": 48,
          "end": 50
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 54,
          "end": 55
        },
        "start": 48,
        "end": 55
      },
      "directive": null,
      "start": 48,
      "end": 56
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
          "start": 57,
          "end": 59
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 63,
          "end": 67
        },
        "start": 57,
        "end": 67
      },
      "directive": null,
      "start": 57,
      "end": 68
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
          "start": 69,
          "end": 71
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 75,
          "end": 76
        },
        "start": 69,
        "end": 76
      },
      "directive": null,
      "start": 69,
      "end": 77
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
          "start": 78,
          "end": 80
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 85
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 87
          },
          "optional": false,
          "computed": false,
          "start": 84,
          "end": 87
        },
        "start": 78,
        "end": 87
      },
      "directive": null,
      "start": 78,
      "end": 88
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
          "start": 89,
          "end": 91
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 95,
          "end": 97
        },
        "start": 89,
        "end": 97
      },
      "directive": null,
      "start": 89,
      "end": 98
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
          "start": 99,
          "end": 101
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 105,
          "end": 109
        },
        "start": 99,
        "end": 109
      },
      "directive": null,
      "start": 99,
      "end": 110
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
          "start": 111,
          "end": 113
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 117,
          "end": 126
        },
        "start": 111,
        "end": 126
      },
      "directive": null,
      "start": 111,
      "end": 127
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
                "type": "TSTypeLiteral",
                "members": [],
                "start": 137,
                "end": 139
              },
              "start": 135,
              "end": 139
            },
            "start": 133,
            "end": 139
          },
          "init": null,
          "definite": false,
          "start": 133,
          "end": 139
        }
      ],
      "declare": false,
      "start": 129,
      "end": 140
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
          "start": 141,
          "end": 143
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 147,
          "end": 148
        },
        "start": 141,
        "end": 148
      },
      "directive": null,
      "start": 141,
      "end": 149
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
          "start": 150,
          "end": 152
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 156,
          "end": 160
        },
        "start": 150,
        "end": 160
      },
      "directive": null,
      "start": 150,
      "end": 161
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
          "start": 162,
          "end": 164
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 168,
          "end": 169
        },
        "start": 162,
        "end": 169
      },
      "directive": null,
      "start": 162,
      "end": 170
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
          "start": 171,
          "end": 173
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 178
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 179,
            "end": 180
          },
          "optional": false,
          "computed": false,
          "start": 177,
          "end": 180
        },
        "start": 171,
        "end": 180
      },
      "directive": null,
      "start": 171,
      "end": 181
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
          "start": 182,
          "end": 184
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 188,
          "end": 190
        },
        "start": 182,
        "end": 190
      },
      "directive": null,
      "start": 182,
      "end": 191
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
          "start": 192,
          "end": 194
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 198,
          "end": 202
        },
        "start": 192,
        "end": 202
      },
      "directive": null,
      "start": 192,
      "end": 203
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
          "start": 204,
          "end": 206
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 210,
          "end": 219
        },
        "start": 204,
        "end": 219
      },
      "directive": null,
      "start": 204,
      "end": 220
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
                "type": "TSVoidKeyword",
                "start": 230,
                "end": 234
              },
              "start": 228,
              "end": 234
            },
            "start": 226,
            "end": 234
          },
          "init": null,
          "definite": false,
          "start": 226,
          "end": 234
        }
      ],
      "declare": false,
      "start": 222,
      "end": 235
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
          "start": 236,
          "end": 238
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 242,
          "end": 243
        },
        "start": 236,
        "end": 243
      },
      "directive": null,
      "start": 236,
      "end": 244
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
          "start": 245,
          "end": 247
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 251,
          "end": 255
        },
        "start": 245,
        "end": 255
      },
      "directive": null,
      "start": 245,
      "end": 256
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
          "start": 257,
          "end": 259
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 263,
          "end": 264
        },
        "start": 257,
        "end": 264
      },
      "directive": null,
      "start": 257,
      "end": 265
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
          "start": 266,
          "end": 268
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 272,
            "end": 273
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 274,
            "end": 275
          },
          "optional": false,
          "computed": false,
          "start": 272,
          "end": 275
        },
        "start": 266,
        "end": 275
      },
      "directive": null,
      "start": 266,
      "end": 276
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
          "start": 277,
          "end": 279
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 283,
          "end": 285
        },
        "start": 277,
        "end": 285
      },
      "directive": null,
      "start": 277,
      "end": 286
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
          "start": 287,
          "end": 289
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 293,
          "end": 297
        },
        "start": 287,
        "end": 297
      },
      "directive": null,
      "start": 287,
      "end": 298
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
          "start": 299,
          "end": 301
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 305,
          "end": 314
        },
        "start": 299,
        "end": 314
      },
      "directive": null,
      "start": 299,
      "end": 315
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
                "type": "TSNumberKeyword",
                "start": 325,
                "end": 331
              },
              "start": 323,
              "end": 331
            },
            "start": 321,
            "end": 331
          },
          "init": null,
          "definite": false,
          "start": 321,
          "end": 331
        }
      ],
      "declare": false,
      "start": 317,
      "end": 332
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
          "start": 333,
          "end": 335
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 339,
          "end": 340
        },
        "start": 333,
        "end": 340
      },
      "directive": null,
      "start": 333,
      "end": 341
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
          "start": 342,
          "end": 344
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 348,
          "end": 352
        },
        "start": 342,
        "end": 352
      },
      "directive": null,
      "start": 342,
      "end": 353
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
          "start": 354,
          "end": 356
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 360,
          "end": 362
        },
        "start": 354,
        "end": 362
      },
      "directive": null,
      "start": 354,
      "end": 363
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 373,
                  "end": 374
                },
                "typeArguments": null,
                "start": 373,
                "end": 374
              },
              "start": 371,
              "end": 374
            },
            "start": 369,
            "end": 374
          },
          "init": null,
          "definite": false,
          "start": 369,
          "end": 374
        }
      ],
      "declare": false,
      "start": 365,
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
          "name": "x5",
          "optional": false,
          "typeAnnotation": null,
          "start": 376,
          "end": 378
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 382,
          "end": 383
        },
        "start": 376,
        "end": 383
      },
      "directive": null,
      "start": 376,
      "end": 384
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
          "start": 385,
          "end": 387
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 391,
          "end": 395
        },
        "start": 385,
        "end": 395
      },
      "directive": null,
      "start": 385,
      "end": 396
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
          "start": 397,
          "end": 399
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 403,
          "end": 405
        },
        "start": 397,
        "end": 405
      },
      "directive": null,
      "start": 397,
      "end": 406
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 406
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
    "type": "Keyword",
    "value": "void",
    "start": 24,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 31,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 35,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 39,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 48,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 51,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 57,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 60,
    "end": 62
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 63,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 69,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 72,
    "end": 74
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 78,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 81,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 89,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 92,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 99,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 102,
    "end": 104
  },
  {
    "type": "Null",
    "value": "null",
    "start": 105,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 111,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 114,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 117,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 129,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 133,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 141,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 144,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 150,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 153,
    "end": 155
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 156,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 162,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 165,
    "end": 167
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 171,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 174,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 182,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 185,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 192,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 195,
    "end": 197
  },
  {
    "type": "Null",
    "value": "null",
    "start": 198,
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
    "value": "+=",
    "start": 207,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 210,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 222,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 226,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 230,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 236,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 239,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 245,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 248,
    "end": 250
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 251,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 257,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 260,
    "end": 262
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 266,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 269,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 277,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 280,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 287,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 290,
    "end": 292
  },
  {
    "type": "Null",
    "value": "null",
    "start": 293,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 299,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 302,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 305,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 317,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 321,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 325,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 333,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 336,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 342,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 345,
    "end": 347
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 348,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 354,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 357,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 362,
    "end": 363
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 365,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 369,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "E",
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
    "value": "x5",
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
    "value": "a",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 385,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 388,
    "end": 390
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 391,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 397,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 400,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406
  }
]
```

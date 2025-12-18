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
        "operator": "*=",
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
          "start": 66,
          "end": 67
        },
        "start": 60,
        "end": 67
      },
      "directive": null,
      "start": 60,
      "end": 68
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
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
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
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
        "operator": "*=",
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
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 84,
          "end": 88
        },
        "start": 78,
        "end": 88
      },
      "directive": null,
      "start": 78,
      "end": 89
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 90,
          "end": 92
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 96,
          "end": 97
        },
        "start": 90,
        "end": 97
      },
      "directive": null,
      "start": 90,
      "end": 98
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
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
          "value": "",
          "raw": "''",
          "start": 105,
          "end": 107
        },
        "start": 99,
        "end": 107
      },
      "directive": null,
      "start": 99,
      "end": 107
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 108,
          "end": 110
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 115
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 117
          },
          "optional": false,
          "computed": false,
          "start": 114,
          "end": 117
        },
        "start": 108,
        "end": 117
      },
      "directive": null,
      "start": 108,
      "end": 118
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 119,
          "end": 121
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 125,
          "end": 127
        },
        "start": 119,
        "end": 127
      },
      "directive": null,
      "start": 119,
      "end": 128
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 129,
          "end": 131
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 135,
          "end": 139
        },
        "start": 129,
        "end": 139
      },
      "directive": null,
      "start": 129,
      "end": 140
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 141,
          "end": 143
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 147,
          "end": 156
        },
        "start": 141,
        "end": 156
      },
      "directive": null,
      "start": 141,
      "end": 157
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
                "start": 167,
                "end": 173
              },
              "start": 165,
              "end": 173
            },
            "start": 163,
            "end": 173
          },
          "init": null,
          "definite": false,
          "start": 163,
          "end": 173
        }
      ],
      "declare": false,
      "start": 159,
      "end": 174
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 175,
          "end": 177
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 181,
          "end": 182
        },
        "start": 175,
        "end": 182
      },
      "directive": null,
      "start": 175,
      "end": 183
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
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
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 190,
          "end": 191
        },
        "start": 184,
        "end": 191
      },
      "directive": null,
      "start": 184,
      "end": 192
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 193,
          "end": 195
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 199,
          "end": 203
        },
        "start": 193,
        "end": 203
      },
      "directive": null,
      "start": 193,
      "end": 204
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 205,
          "end": 207
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 211,
          "end": 212
        },
        "start": 205,
        "end": 212
      },
      "directive": null,
      "start": 205,
      "end": 213
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 214,
          "end": 216
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 220,
          "end": 222
        },
        "start": 214,
        "end": 222
      },
      "directive": null,
      "start": 214,
      "end": 222
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 223,
          "end": 225
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 229,
            "end": 230
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 232
          },
          "optional": false,
          "computed": false,
          "start": 229,
          "end": 232
        },
        "start": 223,
        "end": 232
      },
      "directive": null,
      "start": 223,
      "end": 233
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 234,
          "end": 236
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 240,
          "end": 242
        },
        "start": 234,
        "end": 242
      },
      "directive": null,
      "start": 234,
      "end": 243
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 244,
          "end": 246
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 250,
          "end": 254
        },
        "start": 244,
        "end": 254
      },
      "directive": null,
      "start": 244,
      "end": 255
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 256,
          "end": 258
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 262,
          "end": 271
        },
        "start": 256,
        "end": 271
      },
      "directive": null,
      "start": 256,
      "end": 272
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
                "start": 282,
                "end": 284
              },
              "start": 280,
              "end": 284
            },
            "start": 278,
            "end": 284
          },
          "init": null,
          "definite": false,
          "start": 278,
          "end": 284
        }
      ],
      "declare": false,
      "start": 274,
      "end": 285
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 286,
          "end": 288
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 292,
          "end": 293
        },
        "start": 286,
        "end": 293
      },
      "directive": null,
      "start": 286,
      "end": 294
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 295,
          "end": 297
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 301,
          "end": 302
        },
        "start": 295,
        "end": 302
      },
      "directive": null,
      "start": 295,
      "end": 303
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
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
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 310,
          "end": 314
        },
        "start": 304,
        "end": 314
      },
      "directive": null,
      "start": 304,
      "end": 315
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 316,
          "end": 318
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 322,
          "end": 323
        },
        "start": 316,
        "end": 323
      },
      "directive": null,
      "start": 316,
      "end": 324
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 325,
          "end": 327
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 331,
          "end": 333
        },
        "start": 325,
        "end": 333
      },
      "directive": null,
      "start": 325,
      "end": 333
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 334,
          "end": 336
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 340,
            "end": 341
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 342,
            "end": 343
          },
          "optional": false,
          "computed": false,
          "start": 340,
          "end": 343
        },
        "start": 334,
        "end": 343
      },
      "directive": null,
      "start": 334,
      "end": 344
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 345,
          "end": 347
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 351,
          "end": 353
        },
        "start": 345,
        "end": 353
      },
      "directive": null,
      "start": 345,
      "end": 354
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 355,
          "end": 357
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 361,
          "end": 365
        },
        "start": 355,
        "end": 365
      },
      "directive": null,
      "start": 355,
      "end": 366
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 367,
          "end": 369
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 373,
          "end": 382
        },
        "start": 367,
        "end": 382
      },
      "directive": null,
      "start": 367,
      "end": 383
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
                "start": 393,
                "end": 397
              },
              "start": 391,
              "end": 397
            },
            "start": 389,
            "end": 397
          },
          "init": null,
          "definite": false,
          "start": 389,
          "end": 397
        }
      ],
      "declare": false,
      "start": 385,
      "end": 398
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
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
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 405,
          "end": 406
        },
        "start": 399,
        "end": 406
      },
      "directive": null,
      "start": 399,
      "end": 407
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 408,
          "end": 410
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 414,
          "end": 415
        },
        "start": 408,
        "end": 415
      },
      "directive": null,
      "start": 408,
      "end": 416
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 417,
          "end": 419
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 423,
          "end": 427
        },
        "start": 417,
        "end": 427
      },
      "directive": null,
      "start": 417,
      "end": 428
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 429,
          "end": 431
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 435,
          "end": 436
        },
        "start": 429,
        "end": 436
      },
      "directive": null,
      "start": 429,
      "end": 437
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 438,
          "end": 440
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 444,
          "end": 446
        },
        "start": 438,
        "end": 446
      },
      "directive": null,
      "start": 438,
      "end": 446
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 447,
          "end": 449
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 453,
            "end": 454
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 455,
            "end": 456
          },
          "optional": false,
          "computed": false,
          "start": 453,
          "end": 456
        },
        "start": 447,
        "end": 456
      },
      "directive": null,
      "start": 447,
      "end": 457
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 458,
          "end": 460
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 464,
          "end": 466
        },
        "start": 458,
        "end": 466
      },
      "directive": null,
      "start": 458,
      "end": 467
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 468,
          "end": 470
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 474,
          "end": 478
        },
        "start": 468,
        "end": 478
      },
      "directive": null,
      "start": 468,
      "end": 479
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 480,
          "end": 482
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 486,
          "end": 495
        },
        "start": 480,
        "end": 495
      },
      "directive": null,
      "start": 480,
      "end": 496
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
                "start": 506,
                "end": 512
              },
              "start": 504,
              "end": 512
            },
            "start": 502,
            "end": 512
          },
          "init": null,
          "definite": false,
          "start": 502,
          "end": 512
        }
      ],
      "declare": false,
      "start": 498,
      "end": 513
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null,
          "start": 514,
          "end": 516
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 520,
          "end": 521
        },
        "start": 514,
        "end": 521
      },
      "directive": null,
      "start": 514,
      "end": 522
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null,
          "start": 523,
          "end": 525
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 529,
          "end": 533
        },
        "start": 523,
        "end": 533
      },
      "directive": null,
      "start": 523,
      "end": 534
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null,
          "start": 535,
          "end": 537
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 541,
          "end": 543
        },
        "start": 535,
        "end": 543
      },
      "directive": null,
      "start": 535,
      "end": 543
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null,
          "start": 544,
          "end": 546
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 550,
          "end": 552
        },
        "start": 544,
        "end": 552
      },
      "directive": null,
      "start": 544,
      "end": 553
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
                  "start": 563,
                  "end": 564
                },
                "typeArguments": null,
                "start": 563,
                "end": 564
              },
              "start": 561,
              "end": 564
            },
            "start": 559,
            "end": 564
          },
          "init": null,
          "definite": false,
          "start": 559,
          "end": 564
        }
      ],
      "declare": false,
      "start": 555,
      "end": 565
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x6",
          "optional": false,
          "typeAnnotation": null,
          "start": 566,
          "end": 568
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 572,
          "end": 573
        },
        "start": 566,
        "end": 573
      },
      "directive": null,
      "start": 566,
      "end": 574
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x6",
          "optional": false,
          "typeAnnotation": null,
          "start": 575,
          "end": 577
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 581,
          "end": 585
        },
        "start": 575,
        "end": 585
      },
      "directive": null,
      "start": 575,
      "end": 586
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x6",
          "optional": false,
          "typeAnnotation": null,
          "start": 587,
          "end": 589
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 593,
          "end": 595
        },
        "start": 587,
        "end": 595
      },
      "directive": null,
      "start": 587,
      "end": 595
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x6",
          "optional": false,
          "typeAnnotation": null,
          "start": 596,
          "end": 598
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 602,
          "end": 604
        },
        "start": 596,
        "end": 604
      },
      "directive": null,
      "start": 596,
      "end": 605
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 605
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 5,
    "end": 6,
    "range": [
      5,
      6
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 9,
    "end": 10,
    "range": [
      9,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 17,
    "end": 20,
    "range": [
      17,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 24,
    "end": 27,
    "range": [
      24,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 29,
    "end": 32,
    "range": [
      29,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 36,
    "end": 40,
    "range": [
      36,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 43,
    "end": 46,
    "range": [
      43,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 47,
    "end": 49,
    "range": [
      47,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 51,
    "end": 58,
    "range": [
      51,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 60,
    "end": 62,
    "range": [
      60,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 63,
    "end": 65,
    "range": [
      63,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 69,
    "end": 71,
    "range": [
      69,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 72,
    "end": 74,
    "range": [
      72,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 78,
    "end": 80,
    "range": [
      78,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 81,
    "end": 83,
    "range": [
      81,
      83
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 84,
    "end": 88,
    "range": [
      84,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 90,
    "end": 92,
    "range": [
      90,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 93,
    "end": 95,
    "range": [
      93,
      95
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 99,
    "end": 101,
    "range": [
      99,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 102,
    "end": 104,
    "range": [
      102,
      104
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 105,
    "end": 107,
    "range": [
      105,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 108,
    "end": 110,
    "range": [
      108,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 111,
    "end": 113,
    "range": [
      111,
      113
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 119,
    "end": 121,
    "range": [
      119,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 122,
    "end": 124,
    "range": [
      122,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 129,
    "end": 131,
    "range": [
      129,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 132,
    "end": 134,
    "range": [
      132,
      134
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 135,
    "end": 139,
    "range": [
      135,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 141,
    "end": 143,
    "range": [
      141,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 144,
    "end": 146,
    "range": [
      144,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 147,
    "end": 156,
    "range": [
      147,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 159,
    "end": 162,
    "range": [
      159,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 163,
    "end": 165,
    "range": [
      163,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 167,
    "end": 173,
    "range": [
      167,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 175,
    "end": 177,
    "range": [
      175,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 178,
    "end": 180,
    "range": [
      178,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 184,
    "end": 186,
    "range": [
      184,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 187,
    "end": 189,
    "range": [
      187,
      189
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 193,
    "end": 195,
    "range": [
      193,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 196,
    "end": 198,
    "range": [
      196,
      198
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 199,
    "end": 203,
    "range": [
      199,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 205,
    "end": 207,
    "range": [
      205,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 208,
    "end": 210,
    "range": [
      208,
      210
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 214,
    "end": 216,
    "range": [
      214,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 217,
    "end": 219,
    "range": [
      217,
      219
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 220,
    "end": 222,
    "range": [
      220,
      222
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 223,
    "end": 225,
    "range": [
      223,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 226,
    "end": 228,
    "range": [
      226,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 234,
    "end": 236,
    "range": [
      234,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 237,
    "end": 239,
    "range": [
      237,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 244,
    "end": 246,
    "range": [
      244,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 247,
    "end": 249,
    "range": [
      247,
      249
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 250,
    "end": 254,
    "range": [
      250,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 256,
    "end": 258,
    "range": [
      256,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 259,
    "end": 261,
    "range": [
      259,
      261
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 262,
    "end": 271,
    "range": [
      262,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 274,
    "end": 277,
    "range": [
      274,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 278,
    "end": 280,
    "range": [
      278,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 286,
    "end": 288,
    "range": [
      286,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 289,
    "end": 291,
    "range": [
      289,
      291
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 295,
    "end": 297,
    "range": [
      295,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 298,
    "end": 300,
    "range": [
      298,
      300
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 304,
    "end": 306,
    "range": [
      304,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 307,
    "end": 309,
    "range": [
      307,
      309
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 310,
    "end": 314,
    "range": [
      310,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 316,
    "end": 318,
    "range": [
      316,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 319,
    "end": 321,
    "range": [
      319,
      321
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 325,
    "end": 327,
    "range": [
      325,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 328,
    "end": 330,
    "range": [
      328,
      330
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 331,
    "end": 333,
    "range": [
      331,
      333
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 334,
    "end": 336,
    "range": [
      334,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 337,
    "end": 339,
    "range": [
      337,
      339
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 345,
    "end": 347,
    "range": [
      345,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 348,
    "end": 350,
    "range": [
      348,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 355,
    "end": 357,
    "range": [
      355,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 358,
    "end": 360,
    "range": [
      358,
      360
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 361,
    "end": 365,
    "range": [
      361,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 367,
    "end": 369,
    "range": [
      367,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 370,
    "end": 372,
    "range": [
      370,
      372
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 373,
    "end": 382,
    "range": [
      373,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 385,
    "end": 388,
    "range": [
      385,
      388
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 389,
    "end": 391,
    "range": [
      389,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 393,
    "end": 397,
    "range": [
      393,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 399,
    "end": 401,
    "range": [
      399,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 402,
    "end": 404,
    "range": [
      402,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 408,
    "end": 410,
    "range": [
      408,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 411,
    "end": 413,
    "range": [
      411,
      413
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 417,
    "end": 419,
    "range": [
      417,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 420,
    "end": 422,
    "range": [
      420,
      422
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 423,
    "end": 427,
    "range": [
      423,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 429,
    "end": 431,
    "range": [
      429,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 432,
    "end": 434,
    "range": [
      432,
      434
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 438,
    "end": 440,
    "range": [
      438,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 441,
    "end": 443,
    "range": [
      441,
      443
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 444,
    "end": 446,
    "range": [
      444,
      446
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 447,
    "end": 449,
    "range": [
      447,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 450,
    "end": 452,
    "range": [
      450,
      452
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 458,
    "end": 460,
    "range": [
      458,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 461,
    "end": 463,
    "range": [
      461,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 468,
    "end": 470,
    "range": [
      468,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 471,
    "end": 473,
    "range": [
      471,
      473
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 474,
    "end": 478,
    "range": [
      474,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 480,
    "end": 482,
    "range": [
      480,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 483,
    "end": 485,
    "range": [
      483,
      485
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 486,
    "end": 495,
    "range": [
      486,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 498,
    "end": 501,
    "range": [
      498,
      501
    ]
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 502,
    "end": 504,
    "range": [
      502,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 506,
    "end": 512,
    "range": [
      506,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 514,
    "end": 516,
    "range": [
      514,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 517,
    "end": 519,
    "range": [
      517,
      519
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 523,
    "end": 525,
    "range": [
      523,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 526,
    "end": 528,
    "range": [
      526,
      528
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 529,
    "end": 533,
    "range": [
      529,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 535,
    "end": 537,
    "range": [
      535,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 538,
    "end": 540,
    "range": [
      538,
      540
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 541,
    "end": 543,
    "range": [
      541,
      543
    ]
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 544,
    "end": 546,
    "range": [
      544,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 547,
    "end": 549,
    "range": [
      547,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 555,
    "end": 558,
    "range": [
      555,
      558
    ]
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 559,
    "end": 561,
    "range": [
      559,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 566,
    "end": 568,
    "range": [
      566,
      568
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 569,
    "end": 571,
    "range": [
      569,
      571
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 575,
    "end": 577,
    "range": [
      575,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 578,
    "end": 580,
    "range": [
      578,
      580
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 581,
    "end": 585,
    "range": [
      581,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 587,
    "end": 589,
    "range": [
      587,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 590,
    "end": 592,
    "range": [
      590,
      592
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 593,
    "end": 595,
    "range": [
      593,
      595
    ]
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 596,
    "end": 598,
    "range": [
      596,
      598
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 599,
    "end": 601,
    "range": [
      599,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  }
]
```

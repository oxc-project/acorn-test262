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
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 16
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 32,
                      "end": 38
                    },
                    "start": 30,
                    "end": 38
                  },
                  "start": 29,
                  "end": 38
                },
                "init": null,
                "definite": false,
                "start": 29,
                "end": 38
              }
            ],
            "declare": false,
            "start": 23,
            "end": 39
          }
        ],
        "start": 17,
        "end": 41
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 41
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
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 54
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 56
          },
          "optional": false,
          "computed": false,
          "start": 53,
          "end": 56
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 59,
          "end": 60
        },
        "start": 53,
        "end": 60
      },
      "directive": null,
      "start": 53,
      "end": 61
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 63
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 65
          },
          "optional": false,
          "computed": false,
          "start": 62,
          "end": 65
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 69,
          "end": 70
        },
        "start": 62,
        "end": 70
      },
      "directive": null,
      "start": 62,
      "end": 71
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "-=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 73
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 75
          },
          "optional": false,
          "computed": false,
          "start": 72,
          "end": 75
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 79,
          "end": 80
        },
        "start": 72,
        "end": 80
      },
      "directive": null,
      "start": 72,
      "end": 81
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 83
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 85
          },
          "optional": false,
          "computed": false,
          "start": 82,
          "end": 85
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 89,
          "end": 90
        },
        "start": 82,
        "end": 90
      },
      "directive": null,
      "start": 82,
      "end": 91
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "/=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 93
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 95
          },
          "optional": false,
          "computed": false,
          "start": 92,
          "end": 95
        },
        "right": {
          "type": "Literal",
          "value": 5,
          "raw": "5",
          "start": 99,
          "end": 100
        },
        "start": 92,
        "end": 100
      },
      "directive": null,
      "start": 92,
      "end": 101
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "%=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 103
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 105
          },
          "optional": false,
          "computed": false,
          "start": 102,
          "end": 105
        },
        "right": {
          "type": "Literal",
          "value": 6,
          "raw": "6",
          "start": 109,
          "end": 110
        },
        "start": 102,
        "end": 110
      },
      "directive": null,
      "start": 102,
      "end": 111
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "<<=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 113
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 115
          },
          "optional": false,
          "computed": false,
          "start": 112,
          "end": 115
        },
        "right": {
          "type": "Literal",
          "value": 7,
          "raw": "7",
          "start": 120,
          "end": 121
        },
        "start": 112,
        "end": 121
      },
      "directive": null,
      "start": 112,
      "end": 122
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": ">>=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 124
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 126
          },
          "optional": false,
          "computed": false,
          "start": 123,
          "end": 126
        },
        "right": {
          "type": "Literal",
          "value": 8,
          "raw": "8",
          "start": 131,
          "end": 132
        },
        "start": 123,
        "end": 132
      },
      "directive": null,
      "start": 123,
      "end": 133
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": ">>>=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 135
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 137
          },
          "optional": false,
          "computed": false,
          "start": 134,
          "end": 137
        },
        "right": {
          "type": "Literal",
          "value": 9,
          "raw": "9",
          "start": 143,
          "end": 144
        },
        "start": 134,
        "end": 144
      },
      "directive": null,
      "start": 134,
      "end": 145
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "&=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 147
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 149
          },
          "optional": false,
          "computed": false,
          "start": 146,
          "end": 149
        },
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 153,
          "end": 155
        },
        "start": 146,
        "end": 155
      },
      "directive": null,
      "start": 146,
      "end": 156
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "|=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 158
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 160
          },
          "optional": false,
          "computed": false,
          "start": 157,
          "end": 160
        },
        "right": {
          "type": "Literal",
          "value": 11,
          "raw": "11",
          "start": 164,
          "end": 166
        },
        "start": 157,
        "end": 166
      },
      "directive": null,
      "start": 157,
      "end": 167
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "^=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 169
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 170,
            "end": 171
          },
          "optional": false,
          "computed": false,
          "start": 168,
          "end": 171
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 175,
          "end": 177
        },
        "start": 168,
        "end": 177
      },
      "directive": null,
      "start": 168,
      "end": 178
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 181
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 183
          },
          "optional": false,
          "computed": false,
          "start": 180,
          "end": 183
        },
        "start": 180,
        "end": 185
      },
      "directive": null,
      "start": 180,
      "end": 186
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 187,
            "end": 188
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 190
          },
          "optional": false,
          "computed": false,
          "start": 187,
          "end": 190
        },
        "start": 187,
        "end": 192
      },
      "directive": null,
      "start": 187,
      "end": 193
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 197
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 198,
            "end": 199
          },
          "optional": false,
          "computed": false,
          "start": 196,
          "end": 199
        },
        "start": 194,
        "end": 199
      },
      "directive": null,
      "start": 194,
      "end": 200
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 204
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 206
          },
          "optional": false,
          "computed": false,
          "start": 203,
          "end": 206
        },
        "start": 201,
        "end": 206
      },
      "directive": null,
      "start": 201,
      "end": 207
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 213,
            "end": 214
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 216
          },
          "optional": false,
          "computed": false,
          "start": 213,
          "end": 216
        },
        "start": 209,
        "end": 218
      },
      "directive": null,
      "start": 209,
      "end": 219
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
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 221,
            "end": 222
          },
          "property": {
            "type": "Literal",
            "value": "x",
            "raw": "\"x\"",
            "start": 223,
            "end": 226
          },
          "optional": false,
          "computed": true,
          "start": 221,
          "end": 227
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 230,
          "end": 231
        },
        "start": 221,
        "end": 231
      },
      "directive": null,
      "start": 221,
      "end": 232
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
            "typeAnnotation": null,
            "start": 244,
            "end": 245
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 248,
                "end": 249
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 250,
                "end": 251
              },
              "optional": false,
              "computed": false,
              "start": 248,
              "end": 251
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 254,
              "end": 255
            },
            "start": 248,
            "end": 255
          },
          "definite": false,
          "start": 244,
          "end": 255
        }
      ],
      "declare": false,
      "start": 240,
      "end": 256
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 267,
        "end": 268
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 272,
              "end": 278
            },
            "start": 270,
            "end": 278
          },
          "start": 269,
          "end": 278
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 280,
        "end": 283
      },
      "expression": false,
      "start": 258,
      "end": 283
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 284,
          "end": 285
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 286,
              "end": 287
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 289
            },
            "optional": false,
            "computed": false,
            "start": 286,
            "end": 289
          }
        ],
        "optional": false,
        "start": 284,
        "end": 290
      },
      "directive": null,
      "start": 284,
      "end": 291
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 297,
          "end": 298
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 299,
          "end": 300
        },
        "optional": false,
        "computed": false,
        "start": 297,
        "end": 300
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 302,
        "end": 305
      },
      "alternate": null,
      "start": 293,
      "end": 305
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 307,
          "end": 308
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 309,
          "end": 310
        },
        "optional": false,
        "computed": false,
        "start": 307,
        "end": 310
      },
      "directive": null,
      "start": 307,
      "end": 311
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 313,
          "end": 314
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 315,
          "end": 316
        },
        "optional": false,
        "computed": false,
        "start": 313,
        "end": 316
      },
      "directive": null,
      "start": 312,
      "end": 318
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "-",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 321,
            "end": 322
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 324
          },
          "optional": false,
          "computed": false,
          "start": 321,
          "end": 324
        },
        "prefix": true,
        "start": 320,
        "end": 324
      },
      "directive": null,
      "start": 320,
      "end": 325
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 327,
            "end": 328
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 329,
            "end": 330
          },
          "optional": false,
          "computed": false,
          "start": 327,
          "end": 330
        },
        "prefix": true,
        "start": 326,
        "end": 330
      },
      "directive": null,
      "start": 326,
      "end": 331
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 333,
              "end": 334
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 336
            },
            "optional": false,
            "computed": false,
            "start": 333,
            "end": 336
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 337,
            "end": 345
          },
          "optional": false,
          "computed": false,
          "start": 333,
          "end": 345
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 333,
        "end": 347
      },
      "directive": null,
      "start": 333,
      "end": 348
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 348
}
```

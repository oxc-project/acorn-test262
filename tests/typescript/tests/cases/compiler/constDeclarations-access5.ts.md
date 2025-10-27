__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
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
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 17,
              "end": 18
            },
            "definite": false,
            "start": 13,
            "end": 18
          }
        ],
        "declare": false,
        "start": 7,
        "end": 19
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 19
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 20
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 61
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./constDeclarations_access_1",
          "raw": "'./constDeclarations_access_1'",
          "start": 72,
          "end": 102
        },
        "start": 64,
        "end": 103
      },
      "importKind": "value",
      "start": 53,
      "end": 104
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
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 116
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 118
          },
          "optional": false,
          "computed": false,
          "start": 115,
          "end": 118
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 121,
          "end": 122
        },
        "start": 115,
        "end": 122
      },
      "directive": null,
      "start": 115,
      "end": 123
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
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 125
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 127
          },
          "optional": false,
          "computed": false,
          "start": 124,
          "end": 127
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 131,
          "end": 132
        },
        "start": 124,
        "end": 132
      },
      "directive": null,
      "start": 124,
      "end": 133
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
            "name": "m",
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
          "value": 3,
          "raw": "3",
          "start": 141,
          "end": 142
        },
        "start": 134,
        "end": 142
      },
      "directive": null,
      "start": 134,
      "end": 143
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
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 145
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 147
          },
          "optional": false,
          "computed": false,
          "start": 144,
          "end": 147
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 151,
          "end": 152
        },
        "start": 144,
        "end": 152
      },
      "directive": null,
      "start": 144,
      "end": 153
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
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 155
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 157
          },
          "optional": false,
          "computed": false,
          "start": 154,
          "end": 157
        },
        "right": {
          "type": "Literal",
          "value": 5,
          "raw": "5",
          "start": 161,
          "end": 162
        },
        "start": 154,
        "end": 162
      },
      "directive": null,
      "start": 154,
      "end": 163
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
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 165
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 167
          },
          "optional": false,
          "computed": false,
          "start": 164,
          "end": 167
        },
        "right": {
          "type": "Literal",
          "value": 6,
          "raw": "6",
          "start": 171,
          "end": 172
        },
        "start": 164,
        "end": 172
      },
      "directive": null,
      "start": 164,
      "end": 173
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
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 175
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 176,
            "end": 177
          },
          "optional": false,
          "computed": false,
          "start": 174,
          "end": 177
        },
        "right": {
          "type": "Literal",
          "value": 7,
          "raw": "7",
          "start": 182,
          "end": 183
        },
        "start": 174,
        "end": 183
      },
      "directive": null,
      "start": 174,
      "end": 184
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
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 185,
            "end": 186
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 187,
            "end": 188
          },
          "optional": false,
          "computed": false,
          "start": 185,
          "end": 188
        },
        "right": {
          "type": "Literal",
          "value": 8,
          "raw": "8",
          "start": 193,
          "end": 194
        },
        "start": 185,
        "end": 194
      },
      "directive": null,
      "start": 185,
      "end": 195
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
            "name": "m",
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
        "right": {
          "type": "Literal",
          "value": 9,
          "raw": "9",
          "start": 205,
          "end": 206
        },
        "start": 196,
        "end": 206
      },
      "directive": null,
      "start": 196,
      "end": 207
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
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 208,
            "end": 209
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 210,
            "end": 211
          },
          "optional": false,
          "computed": false,
          "start": 208,
          "end": 211
        },
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 215,
          "end": 217
        },
        "start": 208,
        "end": 217
      },
      "directive": null,
      "start": 208,
      "end": 218
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
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 220
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 221,
            "end": 222
          },
          "optional": false,
          "computed": false,
          "start": 219,
          "end": 222
        },
        "right": {
          "type": "Literal",
          "value": 11,
          "raw": "11",
          "start": 226,
          "end": 228
        },
        "start": 219,
        "end": 228
      },
      "directive": null,
      "start": 219,
      "end": 229
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
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 230,
            "end": 231
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 232,
            "end": 233
          },
          "optional": false,
          "computed": false,
          "start": 230,
          "end": 233
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 237,
          "end": 239
        },
        "start": 230,
        "end": 239
      },
      "directive": null,
      "start": 230,
      "end": 240
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 242
      },
      "directive": null,
      "start": 241,
      "end": 242
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
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 243,
            "end": 244
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 246
          },
          "optional": false,
          "computed": false,
          "start": 243,
          "end": 246
        },
        "start": 243,
        "end": 248
      },
      "directive": null,
      "start": 243,
      "end": 249
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
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 250,
            "end": 251
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 252,
            "end": 253
          },
          "optional": false,
          "computed": false,
          "start": 250,
          "end": 253
        },
        "start": 250,
        "end": 255
      },
      "directive": null,
      "start": 250,
      "end": 256
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
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 259,
            "end": 260
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 261,
            "end": 262
          },
          "optional": false,
          "computed": false,
          "start": 259,
          "end": 262
        },
        "start": 257,
        "end": 262
      },
      "directive": null,
      "start": 257,
      "end": 263
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
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 266,
            "end": 267
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
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
        "start": 264,
        "end": 269
      },
      "directive": null,
      "start": 264,
      "end": 270
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
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 277
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 279
          },
          "optional": false,
          "computed": false,
          "start": 276,
          "end": 279
        },
        "start": 272,
        "end": 281
      },
      "directive": null,
      "start": 272,
      "end": 282
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
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 284,
            "end": 285
          },
          "property": {
            "type": "Literal",
            "value": "x",
            "raw": "\"x\"",
            "start": 286,
            "end": 289
          },
          "optional": false,
          "computed": true,
          "start": 284,
          "end": 290
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 293,
          "end": 294
        },
        "start": 284,
        "end": 294
      },
      "directive": null,
      "start": 284,
      "end": 295
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
            "start": 307,
            "end": 308
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 311,
                "end": 312
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 314
              },
              "optional": false,
              "computed": false,
              "start": 311,
              "end": 314
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 317,
              "end": 318
            },
            "start": 311,
            "end": 318
          },
          "definite": false,
          "start": 307,
          "end": 318
        }
      ],
      "declare": false,
      "start": 303,
      "end": 319
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 330,
        "end": 331
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
              "start": 335,
              "end": 341
            },
            "start": 333,
            "end": 341
          },
          "start": 332,
          "end": 341
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 343,
        "end": 346
      },
      "expression": false,
      "start": 321,
      "end": 346
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
          "start": 347,
          "end": 348
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 349,
              "end": 350
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 351,
              "end": 352
            },
            "optional": false,
            "computed": false,
            "start": 349,
            "end": 352
          }
        ],
        "optional": false,
        "start": 347,
        "end": 353
      },
      "directive": null,
      "start": 347,
      "end": 354
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null,
          "start": 360,
          "end": 361
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 362,
          "end": 363
        },
        "optional": false,
        "computed": false,
        "start": 360,
        "end": 363
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 365,
        "end": 368
      },
      "alternate": null,
      "start": 356,
      "end": 368
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null,
          "start": 370,
          "end": 371
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 372,
          "end": 373
        },
        "optional": false,
        "computed": false,
        "start": 370,
        "end": 373
      },
      "directive": null,
      "start": 370,
      "end": 374
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null,
          "start": 376,
          "end": 377
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 378,
          "end": 379
        },
        "optional": false,
        "computed": false,
        "start": 376,
        "end": 379
      },
      "directive": null,
      "start": 375,
      "end": 381
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
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 384,
            "end": 385
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 386,
            "end": 387
          },
          "optional": false,
          "computed": false,
          "start": 384,
          "end": 387
        },
        "prefix": true,
        "start": 383,
        "end": 387
      },
      "directive": null,
      "start": 383,
      "end": 388
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
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 390,
            "end": 391
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 392,
            "end": 393
          },
          "optional": false,
          "computed": false,
          "start": 390,
          "end": 393
        },
        "prefix": true,
        "start": 389,
        "end": 393
      },
      "directive": null,
      "start": 389,
      "end": 394
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
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 396,
              "end": 397
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 398,
              "end": 399
            },
            "optional": false,
            "computed": false,
            "start": 396,
            "end": 399
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 400,
            "end": 408
          },
          "optional": false,
          "computed": false,
          "start": 396,
          "end": 408
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 396,
        "end": 410
      },
      "directive": null,
      "start": 396,
      "end": 411
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 53,
  "end": 411
}
```

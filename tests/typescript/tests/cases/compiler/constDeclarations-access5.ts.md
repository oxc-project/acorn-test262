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
          "value": "constDeclarations_access_1",
          "raw": "'constDeclarations_access_1'",
          "start": 72,
          "end": 100
        },
        "start": 64,
        "end": 101
      },
      "importKind": "value",
      "start": 53,
      "end": 102
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
            "start": 113,
            "end": 114
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 116
          },
          "optional": false,
          "computed": false,
          "start": 113,
          "end": 116
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 119,
          "end": 120
        },
        "start": 113,
        "end": 120
      },
      "directive": null,
      "start": 113,
      "end": 121
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
            "start": 122,
            "end": 123
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 125
          },
          "optional": false,
          "computed": false,
          "start": 122,
          "end": 125
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 129,
          "end": 130
        },
        "start": 122,
        "end": 130
      },
      "directive": null,
      "start": 122,
      "end": 131
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
            "start": 132,
            "end": 133
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 135
          },
          "optional": false,
          "computed": false,
          "start": 132,
          "end": 135
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 139,
          "end": 140
        },
        "start": 132,
        "end": 140
      },
      "directive": null,
      "start": 132,
      "end": 141
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
            "start": 142,
            "end": 143
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 145
          },
          "optional": false,
          "computed": false,
          "start": 142,
          "end": 145
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 149,
          "end": 150
        },
        "start": 142,
        "end": 150
      },
      "directive": null,
      "start": 142,
      "end": 151
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
            "start": 152,
            "end": 153
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 155
          },
          "optional": false,
          "computed": false,
          "start": 152,
          "end": 155
        },
        "right": {
          "type": "Literal",
          "value": 5,
          "raw": "5",
          "start": 159,
          "end": 160
        },
        "start": 152,
        "end": 160
      },
      "directive": null,
      "start": 152,
      "end": 161
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
            "start": 162,
            "end": 163
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 165
          },
          "optional": false,
          "computed": false,
          "start": 162,
          "end": 165
        },
        "right": {
          "type": "Literal",
          "value": 6,
          "raw": "6",
          "start": 169,
          "end": 170
        },
        "start": 162,
        "end": 170
      },
      "directive": null,
      "start": 162,
      "end": 171
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
            "start": 172,
            "end": 173
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 175
          },
          "optional": false,
          "computed": false,
          "start": 172,
          "end": 175
        },
        "right": {
          "type": "Literal",
          "value": 7,
          "raw": "7",
          "start": 180,
          "end": 181
        },
        "start": 172,
        "end": 181
      },
      "directive": null,
      "start": 172,
      "end": 182
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
            "start": 183,
            "end": 184
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 185,
            "end": 186
          },
          "optional": false,
          "computed": false,
          "start": 183,
          "end": 186
        },
        "right": {
          "type": "Literal",
          "value": 8,
          "raw": "8",
          "start": 191,
          "end": 192
        },
        "start": 183,
        "end": 192
      },
      "directive": null,
      "start": 183,
      "end": 193
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
            "start": 194,
            "end": 195
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 197
          },
          "optional": false,
          "computed": false,
          "start": 194,
          "end": 197
        },
        "right": {
          "type": "Literal",
          "value": 9,
          "raw": "9",
          "start": 203,
          "end": 204
        },
        "start": 194,
        "end": 204
      },
      "directive": null,
      "start": 194,
      "end": 205
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
            "start": 206,
            "end": 207
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 208,
            "end": 209
          },
          "optional": false,
          "computed": false,
          "start": 206,
          "end": 209
        },
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 213,
          "end": 215
        },
        "start": 206,
        "end": 215
      },
      "directive": null,
      "start": 206,
      "end": 216
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
            "start": 217,
            "end": 218
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 220
          },
          "optional": false,
          "computed": false,
          "start": 217,
          "end": 220
        },
        "right": {
          "type": "Literal",
          "value": 11,
          "raw": "11",
          "start": 224,
          "end": 226
        },
        "start": 217,
        "end": 226
      },
      "directive": null,
      "start": 217,
      "end": 227
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
            "start": 228,
            "end": 229
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 230,
            "end": 231
          },
          "optional": false,
          "computed": false,
          "start": 228,
          "end": 231
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 235,
          "end": 237
        },
        "start": 228,
        "end": 237
      },
      "directive": null,
      "start": 228,
      "end": 238
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 240
      },
      "directive": null,
      "start": 239,
      "end": 240
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
            "start": 241,
            "end": 242
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 243,
            "end": 244
          },
          "optional": false,
          "computed": false,
          "start": 241,
          "end": 244
        },
        "start": 241,
        "end": 246
      },
      "directive": null,
      "start": 241,
      "end": 247
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
        "start": 248,
        "end": 253
      },
      "directive": null,
      "start": 248,
      "end": 254
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
            "start": 257,
            "end": 258
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 259,
            "end": 260
          },
          "optional": false,
          "computed": false,
          "start": 257,
          "end": 260
        },
        "start": 255,
        "end": 260
      },
      "directive": null,
      "start": 255,
      "end": 261
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
            "start": 264,
            "end": 265
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 266,
            "end": 267
          },
          "optional": false,
          "computed": false,
          "start": 264,
          "end": 267
        },
        "start": 262,
        "end": 267
      },
      "directive": null,
      "start": 262,
      "end": 268
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
            "start": 274,
            "end": 275
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 277
          },
          "optional": false,
          "computed": false,
          "start": 274,
          "end": 277
        },
        "start": 270,
        "end": 279
      },
      "directive": null,
      "start": 270,
      "end": 280
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
            "start": 282,
            "end": 283
          },
          "property": {
            "type": "Literal",
            "value": "x",
            "raw": "\"x\"",
            "start": 284,
            "end": 287
          },
          "optional": false,
          "computed": true,
          "start": 282,
          "end": 288
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 291,
          "end": 292
        },
        "start": 282,
        "end": 292
      },
      "directive": null,
      "start": 282,
      "end": 293
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
            "start": 305,
            "end": 306
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
                "start": 309,
                "end": 310
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 311,
                "end": 312
              },
              "optional": false,
              "computed": false,
              "start": 309,
              "end": 312
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 315,
              "end": 316
            },
            "start": 309,
            "end": 316
          },
          "definite": false,
          "start": 305,
          "end": 316
        }
      ],
      "declare": false,
      "start": 301,
      "end": 317
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 328,
        "end": 329
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
              "start": 333,
              "end": 339
            },
            "start": 331,
            "end": 339
          },
          "start": 330,
          "end": 339
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 341,
        "end": 344
      },
      "expression": false,
      "start": 319,
      "end": 344
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
          "start": 345,
          "end": 346
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
              "start": 347,
              "end": 348
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 349,
              "end": 350
            },
            "optional": false,
            "computed": false,
            "start": 347,
            "end": 350
          }
        ],
        "optional": false,
        "start": 345,
        "end": 351
      },
      "directive": null,
      "start": 345,
      "end": 352
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
          "start": 358,
          "end": 359
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 360,
          "end": 361
        },
        "optional": false,
        "computed": false,
        "start": 358,
        "end": 361
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 363,
        "end": 366
      },
      "alternate": null,
      "start": 354,
      "end": 366
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
          "start": 368,
          "end": 369
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 370,
          "end": 371
        },
        "optional": false,
        "computed": false,
        "start": 368,
        "end": 371
      },
      "directive": null,
      "start": 368,
      "end": 372
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
          "start": 374,
          "end": 375
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 376,
          "end": 377
        },
        "optional": false,
        "computed": false,
        "start": 374,
        "end": 377
      },
      "directive": null,
      "start": 373,
      "end": 379
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
            "start": 382,
            "end": 383
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
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
        "prefix": true,
        "start": 381,
        "end": 385
      },
      "directive": null,
      "start": 381,
      "end": 386
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
            "start": 388,
            "end": 389
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 390,
            "end": 391
          },
          "optional": false,
          "computed": false,
          "start": 388,
          "end": 391
        },
        "prefix": true,
        "start": 387,
        "end": 391
      },
      "directive": null,
      "start": 387,
      "end": 392
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
              "start": 394,
              "end": 395
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 396,
              "end": 397
            },
            "optional": false,
            "computed": false,
            "start": 394,
            "end": 397
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 398,
            "end": 406
          },
          "optional": false,
          "computed": false,
          "start": 394,
          "end": 406
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 394,
        "end": 408
      },
      "directive": null,
      "start": 394,
      "end": 409
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 53,
  "end": 409
}
```

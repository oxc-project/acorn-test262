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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
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
              "start": 11,
              "end": 12
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 11,
            "end": 12
          }
        ],
        "start": 10,
        "end": 13
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
                "start": 17,
                "end": 18
              },
              "typeArguments": null,
              "start": 17,
              "end": 18
            },
            "start": 15,
            "end": 18
          },
          "start": 14,
          "end": 18
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 22
          },
          "typeArguments": null,
          "start": 21,
          "end": 22
        },
        "start": 19,
        "end": 22
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "start": 29,
            "end": 38
          }
        ],
        "start": 23,
        "end": 40
      },
      "expression": false,
      "start": 0,
      "end": 40
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 47,
        "end": 48
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 52
            },
            "initializer": null,
            "computed": false,
            "start": 51,
            "end": 52
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 55
            },
            "initializer": null,
            "computed": false,
            "start": 54,
            "end": 55
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 58
            },
            "initializer": null,
            "computed": false,
            "start": 57,
            "end": 58
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "non identifier",
              "raw": "\"non identifier\"",
              "start": 60,
              "end": 76
            },
            "initializer": null,
            "computed": false,
            "start": 60,
            "end": 76
          }
        ],
        "start": 49,
        "end": 78
      },
      "const": false,
      "declare": false,
      "start": 42,
      "end": 78
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 88
          },
          "init": {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 91,
            "end": 96
          },
          "definite": false,
          "start": 86,
          "end": 96
        }
      ],
      "declare": false,
      "start": 80,
      "end": 97
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 106
          },
          "init": {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 109,
            "end": 112
          },
          "definite": false,
          "start": 104,
          "end": 112
        }
      ],
      "declare": false,
      "start": 98,
      "end": 113
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 122
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 127
          },
          "definite": false,
          "start": 120,
          "end": 127
        }
      ],
      "declare": false,
      "start": 114,
      "end": 128
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c4",
            "optional": false,
            "typeAnnotation": null,
            "start": 135,
            "end": 137
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 140,
            "end": 142
          },
          "definite": false,
          "start": 135,
          "end": 142
        }
      ],
      "declare": false,
      "start": 129,
      "end": 143
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c5",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 152
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 156
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 123,
                "raw": "123",
                "start": 157,
                "end": 160
              }
            ],
            "optional": false,
            "start": 155,
            "end": 161
          },
          "definite": false,
          "start": 150,
          "end": 161
        }
      ],
      "declare": false,
      "start": 144,
      "end": 162
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c6",
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 171
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 175
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 177,
                  "end": 180
                },
                "prefix": true,
                "start": 176,
                "end": 180
              }
            ],
            "optional": false,
            "start": 174,
            "end": 181
          },
          "definite": false,
          "start": 169,
          "end": 181
        }
      ],
      "declare": false,
      "start": 163,
      "end": 182
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c7",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 191
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 194,
            "end": 198
          },
          "definite": false,
          "start": 189,
          "end": 198
        }
      ],
      "declare": false,
      "start": 183,
      "end": 199
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c8",
            "optional": false,
            "typeAnnotation": null,
            "start": 206,
            "end": 208
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 212
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 214
            },
            "optional": false,
            "computed": false,
            "start": 211,
            "end": 214
          },
          "definite": false,
          "start": 206,
          "end": 214
        }
      ],
      "declare": false,
      "start": 200,
      "end": 215
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c8b",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 225
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 228,
              "end": 229
            },
            "property": {
              "type": "Literal",
              "value": "non identifier",
              "raw": "\"non identifier\"",
              "start": 230,
              "end": 246
            },
            "optional": false,
            "computed": true,
            "start": 228,
            "end": 247
          },
          "definite": false,
          "start": 222,
          "end": 247
        }
      ],
      "declare": false,
      "start": 216,
      "end": 248
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c9",
            "optional": false,
            "typeAnnotation": null,
            "start": 255,
            "end": 257
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
                  "start": 262,
                  "end": 263
                },
                "value": {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "\"abc\"",
                  "start": 265,
                  "end": 270
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 262,
                "end": 270
              }
            ],
            "start": 260,
            "end": 272
          },
          "definite": false,
          "start": 255,
          "end": 272
        }
      ],
      "declare": false,
      "start": 249,
      "end": 273
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c10",
            "optional": false,
            "typeAnnotation": null,
            "start": 280,
            "end": 283
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 123,
                "raw": "123",
                "start": 287,
                "end": 290
              }
            ],
            "start": 286,
            "end": 291
          },
          "definite": false,
          "start": 280,
          "end": 291
        }
      ],
      "declare": false,
      "start": 274,
      "end": 292
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c11",
            "optional": false,
            "typeAnnotation": null,
            "start": 299,
            "end": 302
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "abc",
              "raw": "\"abc\"",
              "start": 305,
              "end": 310
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": "def",
              "raw": "\"def\"",
              "start": 313,
              "end": 318
            },
            "start": 305,
            "end": 318
          },
          "definite": false,
          "start": 299,
          "end": 318
        }
      ],
      "declare": false,
      "start": 293,
      "end": 319
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c12",
            "optional": false,
            "typeAnnotation": null,
            "start": 326,
            "end": 329
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 123,
              "raw": "123",
              "start": 332,
              "end": 335
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 456,
              "raw": "456",
              "start": 338,
              "end": 341
            },
            "start": 332,
            "end": 341
          },
          "definite": false,
          "start": 326,
          "end": 341
        }
      ],
      "declare": false,
      "start": 320,
      "end": 342
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c13",
            "optional": false,
            "typeAnnotation": null,
            "start": 349,
            "end": 352
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 355,
                    "end": 359
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 360,
                    "end": 366
                  },
                  "optional": false,
                  "computed": false,
                  "start": 355,
                  "end": 366
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 355,
                "end": 368
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "value": 0.5,
                "raw": "0.5",
                "start": 371,
                "end": 374
              },
              "start": 355,
              "end": 374
            },
            "consequent": {
              "type": "Literal",
              "value": "abc",
              "raw": "\"abc\"",
              "start": 377,
              "end": 382
            },
            "alternate": {
              "type": "Literal",
              "value": "def",
              "raw": "\"def\"",
              "start": 385,
              "end": 390
            },
            "start": 355,
            "end": 390
          },
          "definite": false,
          "start": 349,
          "end": 390
        }
      ],
      "declare": false,
      "start": 343,
      "end": 391
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c14",
            "optional": false,
            "typeAnnotation": null,
            "start": 398,
            "end": 401
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 404,
                    "end": 408
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 409,
                    "end": 415
                  },
                  "optional": false,
                  "computed": false,
                  "start": 404,
                  "end": 415
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 404,
                "end": 417
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "value": 0.5,
                "raw": "0.5",
                "start": 420,
                "end": 423
              },
              "start": 404,
              "end": 423
            },
            "consequent": {
              "type": "Literal",
              "value": 123,
              "raw": "123",
              "start": 426,
              "end": 429
            },
            "alternate": {
              "type": "Literal",
              "value": 456,
              "raw": "456",
              "start": 432,
              "end": 435
            },
            "start": 404,
            "end": 435
          },
          "definite": false,
          "start": 398,
          "end": 435
        }
      ],
      "declare": false,
      "start": 392,
      "end": 436
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 436
}
```

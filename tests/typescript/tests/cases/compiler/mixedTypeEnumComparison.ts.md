__ESTREE_TEST__:PASS:
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
        "start": 11,
        "end": 12
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S1",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 21
            },
            "initializer": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 24,
              "end": 29
            },
            "computed": false,
            "start": 19,
            "end": 29
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S2",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 37
            },
            "initializer": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 40,
              "end": 45
            },
            "computed": false,
            "start": 35,
            "end": 45
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "N1",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 54
            },
            "initializer": {
              "type": "Literal",
              "value": 1000,
              "raw": "1000",
              "start": 57,
              "end": 61
            },
            "computed": false,
            "start": 52,
            "end": 61
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "N2",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 69
            },
            "initializer": {
              "type": "Literal",
              "value": 25,
              "raw": "25",
              "start": 72,
              "end": 74
            },
            "computed": false,
            "start": 67,
            "end": 74
          }
        ],
        "start": 13,
        "end": 77
      },
      "const": true,
      "declare": false,
      "start": 0,
      "end": 77
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
            "name": "someNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 103,
                "end": 109
              },
              "start": 101,
              "end": 109
            },
            "start": 91,
            "end": 109
          },
          "init": null,
          "definite": false,
          "start": 91,
          "end": 109
        }
      ],
      "declare": true,
      "start": 79,
      "end": 109
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someNumber",
          "optional": false,
          "typeAnnotation": null,
          "start": 115,
          "end": 125
        },
        "operator": ">",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 129
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "N2",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 132
          },
          "optional": false,
          "computed": false,
          "start": 128,
          "end": 132
        },
        "start": 115,
        "end": 132
      },
      "consequent": {
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
                "name": "someNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 150
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 153,
                  "end": 154
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 155,
                  "end": 157
                },
                "optional": false,
                "computed": false,
                "start": 153,
                "end": 157
              },
              "start": 140,
              "end": 157
            },
            "directive": null,
            "start": 140,
            "end": 158
          }
        ],
        "start": 134,
        "end": 160
      },
      "alternate": null,
      "start": 111,
      "end": 160
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
            "name": "unionOfEnum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 189,
                        "end": 190
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 191,
                        "end": 193
                      },
                      "start": 189,
                      "end": 193
                    },
                    "typeArguments": null,
                    "start": 189,
                    "end": 193
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 196,
                        "end": 197
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 198,
                        "end": 200
                      },
                      "start": 196,
                      "end": 200
                    },
                    "typeArguments": null,
                    "start": 196,
                    "end": 200
                  }
                ],
                "start": 189,
                "end": 200
              },
              "start": 187,
              "end": 200
            },
            "start": 176,
            "end": 200
          },
          "init": null,
          "definite": false,
          "start": 176,
          "end": 200
        }
      ],
      "declare": true,
      "start": 162,
      "end": 201
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someNumber",
          "optional": false,
          "typeAnnotation": null,
          "start": 207,
          "end": 217
        },
        "operator": ">",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfEnum",
          "optional": false,
          "typeAnnotation": null,
          "start": 220,
          "end": 231
        },
        "start": 207,
        "end": 231
      },
      "consequent": {
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
                "name": "someNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 249
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 253
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 254,
                  "end": 256
                },
                "optional": false,
                "computed": false,
                "start": 252,
                "end": 256
              },
              "start": 239,
              "end": 256
            },
            "directive": null,
            "start": 239,
            "end": 257
          }
        ],
        "start": 233,
        "end": 259
      },
      "alternate": null,
      "start": 203,
      "end": 259
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
            "name": "someString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 285,
                "end": 291
              },
              "start": 283,
              "end": 291
            },
            "start": 273,
            "end": 291
          },
          "init": null,
          "definite": false,
          "start": 273,
          "end": 291
        }
      ],
      "declare": true,
      "start": 261,
      "end": 291
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someString",
          "optional": false,
          "typeAnnotation": null,
          "start": 297,
          "end": 307
        },
        "operator": ">",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 310,
            "end": 311
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "S1",
            "optional": false,
            "typeAnnotation": null,
            "start": 312,
            "end": 314
          },
          "optional": false,
          "computed": false,
          "start": 310,
          "end": 314
        },
        "start": 297,
        "end": 314
      },
      "consequent": {
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
                "name": "someString",
                "optional": false,
                "typeAnnotation": null,
                "start": 322,
                "end": 332
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 335,
                  "end": 336
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 339
                },
                "optional": false,
                "computed": false,
                "start": 335,
                "end": 339
              },
              "start": 322,
              "end": 339
            },
            "directive": null,
            "start": 322,
            "end": 340
          }
        ],
        "start": 316,
        "end": 342
      },
      "alternate": null,
      "start": 293,
      "end": 342
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 362,
        "end": 371
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 375,
          "end": 381
        },
        "start": 373,
        "end": 381
      },
      "body": null,
      "expression": false,
      "start": 345,
      "end": 382
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null,
        "start": 389,
        "end": 391
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S1",
              "optional": false,
              "typeAnnotation": null,
              "start": 398,
              "end": 400
            },
            "initializer": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 403,
              "end": 408
            },
            "computed": false,
            "start": 398,
            "end": 408
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "N1",
              "optional": false,
              "typeAnnotation": null,
              "start": 414,
              "end": 416
            },
            "initializer": {
              "type": "Literal",
              "value": 1000,
              "raw": "1000",
              "start": 419,
              "end": 423
            },
            "computed": false,
            "start": 414,
            "end": 423
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 429,
              "end": 431
            },
            "initializer": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "someValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 434,
                "end": 443
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 434,
              "end": 445
            },
            "computed": false,
            "start": 429,
            "end": 445
          }
        ],
        "start": 392,
        "end": 448
      },
      "const": false,
      "declare": false,
      "start": 384,
      "end": 448
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someString",
          "optional": false,
          "typeAnnotation": null,
          "start": 450,
          "end": 460
        },
        "operator": ">",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E2",
            "optional": false,
            "typeAnnotation": null,
            "start": 463,
            "end": 465
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "S1",
            "optional": false,
            "typeAnnotation": null,
            "start": 466,
            "end": 468
          },
          "optional": false,
          "computed": false,
          "start": 463,
          "end": 468
        },
        "start": 450,
        "end": 468
      },
      "directive": null,
      "start": 450,
      "end": 469
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someNumber",
          "optional": false,
          "typeAnnotation": null,
          "start": 470,
          "end": 480
        },
        "operator": ">",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E2",
            "optional": false,
            "typeAnnotation": null,
            "start": 483,
            "end": 485
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "N1",
            "optional": false,
            "typeAnnotation": null,
            "start": 486,
            "end": 488
          },
          "optional": false,
          "computed": false,
          "start": 483,
          "end": 488
        },
        "start": 470,
        "end": 488
      },
      "directive": null,
      "start": 470,
      "end": 489
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someNumber",
          "optional": false,
          "typeAnnotation": null,
          "start": 490,
          "end": 500
        },
        "operator": ">",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E2",
            "optional": false,
            "typeAnnotation": null,
            "start": 503,
            "end": 505
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "C1",
            "optional": false,
            "typeAnnotation": null,
            "start": 506,
            "end": 508
          },
          "optional": false,
          "computed": false,
          "start": 503,
          "end": 508
        },
        "start": 490,
        "end": 508
      },
      "directive": null,
      "start": 490,
      "end": 509
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 509
}
```

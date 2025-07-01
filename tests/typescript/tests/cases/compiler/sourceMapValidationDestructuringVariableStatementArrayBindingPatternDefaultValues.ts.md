__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 27,
                      "end": 30
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 36,
                            "end": 42
                          },
                          "start": 34,
                          "end": 42
                        },
                        "start": 31,
                        "end": 42
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 45,
                        "end": 49
                      },
                      "start": 43,
                      "end": 49
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 27,
                    "end": 50
                  }
                ],
                "start": 21,
                "end": 52
              },
              "start": 19,
              "end": 52
            },
            "start": 12,
            "end": 52
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 52
        }
      ],
      "declare": true,
      "start": 0,
      "end": 52
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 63
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 67,
            "end": 73
          },
          {
            "type": "TSStringKeyword",
            "start": 75,
            "end": 81
          },
          {
            "type": "TSStringKeyword",
            "start": 83,
            "end": 89
          }
        ],
        "start": 66,
        "end": 90
      },
      "declare": false,
      "start": 53,
      "end": 91
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
            "name": "robotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 109
                },
                "typeArguments": null,
                "start": 104,
                "end": 109
              },
              "start": 102,
              "end": 109
            },
            "start": 96,
            "end": 109
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 113,
                "end": 114
              },
              {
                "type": "Literal",
                "value": "mower",
                "raw": "\"mower\"",
                "start": 116,
                "end": 123
              },
              {
                "type": "Literal",
                "value": "mowing",
                "raw": "\"mowing\"",
                "start": 125,
                "end": 133
              }
            ],
            "start": 112,
            "end": 134
          },
          "definite": false,
          "start": 96,
          "end": 134
        }
      ],
      "declare": false,
      "start": 92,
      "end": 135
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
            "name": "robotB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 153
                },
                "typeArguments": null,
                "start": 148,
                "end": 153
              },
              "start": 146,
              "end": 153
            },
            "start": 140,
            "end": 153
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 157,
                "end": 158
              },
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 160,
                "end": 169
              },
              {
                "type": "Literal",
                "value": "trimming",
                "raw": "\"trimming\"",
                "start": 171,
                "end": 181
              }
            ],
            "start": 156,
            "end": 182
          },
          "definite": false,
          "start": 140,
          "end": 182
        }
      ],
      "declare": false,
      "start": 136,
      "end": 183
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              null,
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 197
                },
                "right": {
                  "type": "Literal",
                  "value": "noName",
                  "raw": "\"noName\"",
                  "start": 200,
                  "end": 208
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 208
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 209
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 212,
            "end": 218
          },
          "definite": false,
          "start": 189,
          "end": 218
        }
      ],
      "declare": false,
      "start": 185,
      "end": 219
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 225,
                  "end": 232
                },
                "right": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 236,
                    "end": 237
                  },
                  "prefix": true,
                  "start": 235,
                  "end": 237
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 225,
                "end": 237
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 238
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 247
          },
          "definite": false,
          "start": 224,
          "end": 247
        }
      ],
      "declare": false,
      "start": 220,
      "end": 248
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 254,
                  "end": 262
                },
                "right": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 266,
                    "end": 267
                  },
                  "prefix": true,
                  "start": 265,
                  "end": 267
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 254,
                "end": 267
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 269,
                  "end": 275
                },
                "right": {
                  "type": "Literal",
                  "value": "noName",
                  "raw": "\"noName\"",
                  "start": 278,
                  "end": 286
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 269,
                "end": 286
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 288,
                  "end": 295
                },
                "right": {
                  "type": "Literal",
                  "value": "noSkill",
                  "raw": "\"noSkill\"",
                  "start": 298,
                  "end": 307
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 288,
                "end": 307
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 253,
            "end": 308
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 311,
            "end": 317
          },
          "definite": false,
          "start": 253,
          "end": 317
        }
      ],
      "declare": false,
      "start": 249,
      "end": 318
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberC2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 325,
                  "end": 333
                },
                "right": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 337,
                    "end": 338
                  },
                  "prefix": true,
                  "start": 336,
                  "end": 338
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 325,
                "end": 338
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 324,
            "end": 339
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 343,
                "end": 344
              },
              {
                "type": "Literal",
                "value": "edging",
                "raw": "\"edging\"",
                "start": 346,
                "end": 354
              },
              {
                "type": "Literal",
                "value": "Trimming edges",
                "raw": "\"Trimming edges\"",
                "start": 356,
                "end": 372
              }
            ],
            "start": 342,
            "end": 373
          },
          "definite": false,
          "start": 324,
          "end": 373
        }
      ],
      "declare": false,
      "start": 320,
      "end": 374
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 380,
                  "end": 387
                },
                "right": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 391,
                    "end": 392
                  },
                  "prefix": true,
                  "start": 390,
                  "end": 392
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 380,
                "end": 392
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 394,
                  "end": 399
                },
                "right": {
                  "type": "Literal",
                  "value": "noName",
                  "raw": "\"noName\"",
                  "start": 402,
                  "end": 410
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 394,
                "end": 410
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 412,
                  "end": 418
                },
                "right": {
                  "type": "Literal",
                  "value": "noSkill",
                  "raw": "\"noSkill\"",
                  "start": 421,
                  "end": 430
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 412,
                "end": 430
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 379,
            "end": 431
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 435,
                "end": 436
              },
              {
                "type": "Literal",
                "value": "edging",
                "raw": "\"edging\"",
                "start": 438,
                "end": 446
              },
              {
                "type": "Literal",
                "value": "Trimming edges",
                "raw": "\"Trimming edges\"",
                "start": 448,
                "end": 464
              }
            ],
            "start": 434,
            "end": 465
          },
          "definite": false,
          "start": 379,
          "end": 465
        }
      ],
      "declare": false,
      "start": 375,
      "end": 466
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 473,
                  "end": 481
                },
                "right": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 485,
                    "end": 486
                  },
                  "prefix": true,
                  "start": 484,
                  "end": 486
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 473,
                "end": 486
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "robotAInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 491,
                  "end": 501
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 488,
                "end": 501
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 472,
            "end": 502
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 505,
            "end": 511
          },
          "definite": false,
          "start": 472,
          "end": 511
        }
      ],
      "declare": false,
      "start": 468,
      "end": 512
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameA",
          "optional": false,
          "typeAnnotation": null,
          "start": 518,
          "end": 523
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameA2",
          "optional": false,
          "typeAnnotation": null,
          "start": 527,
          "end": 533
        },
        "start": 518,
        "end": 533
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 541,
                  "end": 548
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 549,
                  "end": 552
                },
                "optional": false,
                "computed": false,
                "start": 541,
                "end": 552
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 553,
                  "end": 560
                }
              ],
              "optional": false,
              "start": 541,
              "end": 561
            },
            "directive": null,
            "start": 541,
            "end": 562
          }
        ],
        "start": 535,
        "end": 564
      },
      "alternate": null,
      "start": 514,
      "end": 564
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 564
}
```

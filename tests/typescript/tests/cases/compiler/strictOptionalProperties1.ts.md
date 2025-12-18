__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 19,
                    "end": 20
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 23,
                      "end": 29
                    },
                    "start": 21,
                    "end": 29
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 19,
                  "end": 30
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 31,
                    "end": 32
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 35,
                          "end": 41
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 44,
                          "end": 53
                        }
                      ],
                      "start": 35,
                      "end": 53
                    },
                    "start": 33,
                    "end": 53
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 31,
                  "end": 53
                }
              ],
              "start": 17,
              "end": 55
            },
            "start": 15,
            "end": 55
          },
          "start": 12,
          "end": 55
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 68
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 71,
                    "end": 74
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 75,
                    "end": 76
                  },
                  "optional": false,
                  "computed": false,
                  "start": 71,
                  "end": 76
                },
                "definite": false,
                "start": 67,
                "end": 76
              }
            ],
            "declare": false,
            "start": 63,
            "end": 77
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 110
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 113,
                    "end": 116
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 117,
                    "end": 118
                  },
                  "optional": false,
                  "computed": false,
                  "start": 113,
                  "end": 118
                },
                "definite": false,
                "start": 109,
                "end": 118
              }
            ],
            "declare": false,
            "start": 105,
            "end": 119
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
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 147,
                  "end": 150
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 151,
                  "end": 152
                },
                "optional": false,
                "computed": false,
                "start": 147,
                "end": 152
              },
              "right": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 155,
                "end": 162
              },
              "start": 147,
              "end": 162
            },
            "directive": null,
            "start": 147,
            "end": 163
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
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 168,
                  "end": 171
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 172,
                  "end": 173
                },
                "optional": false,
                "computed": false,
                "start": 168,
                "end": 173
              },
              "right": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 176,
                "end": 183
              },
              "start": 168,
              "end": 183
            },
            "directive": null,
            "start": 168,
            "end": 184
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
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 189,
                  "end": 192
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 193,
                  "end": 194
                },
                "optional": false,
                "computed": false,
                "start": 189,
                "end": 194
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 197,
                "end": 206
              },
              "start": 189,
              "end": 206
            },
            "directive": null,
            "start": 189,
            "end": 207
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
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 222,
                  "end": 225
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 226,
                  "end": 227
                },
                "optional": false,
                "computed": false,
                "start": 222,
                "end": 227
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 230,
                "end": 239
              },
              "start": 222,
              "end": 239
            },
            "directive": null,
            "start": 222,
            "end": 240
          }
        ],
        "start": 57,
        "end": 242
      },
      "expression": false,
      "start": 0,
      "end": 242
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 253,
        "end": 255
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 263,
                    "end": 264
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 267,
                      "end": 273
                    },
                    "start": 265,
                    "end": 273
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 263,
                  "end": 274
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 275,
                    "end": 276
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 279,
                          "end": 285
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 288,
                          "end": 297
                        }
                      ],
                      "start": 279,
                      "end": 297
                    },
                    "start": 277,
                    "end": 297
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 275,
                  "end": 297
                }
              ],
              "start": 261,
              "end": 299
            },
            "start": 259,
            "end": 299
          },
          "start": 256,
          "end": 299
        }
      ],
      "returnType": null,
      "body": {
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
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 307,
                "end": 310
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 316
              },
              "start": 307,
              "end": 316
            },
            "directive": null,
            "start": 307,
            "end": 317
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
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 322,
                  "end": 325
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 326,
                  "end": 327
                },
                "optional": false,
                "computed": false,
                "start": 322,
                "end": 327
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 330,
                  "end": 333
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 334,
                  "end": 335
                },
                "optional": false,
                "computed": false,
                "start": 330,
                "end": 335
              },
              "start": 322,
              "end": 335
            },
            "directive": null,
            "start": 322,
            "end": 336
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
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 351,
                  "end": 354
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 355,
                  "end": 356
                },
                "optional": false,
                "computed": false,
                "start": 351,
                "end": 356
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 359,
                  "end": 362
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 363,
                  "end": 364
                },
                "optional": false,
                "computed": false,
                "start": 359,
                "end": 364
              },
              "start": 351,
              "end": 364
            },
            "directive": null,
            "start": 351,
            "end": 365
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 374,
                "end": 377
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 381,
                "end": 384
              },
              "start": 374,
              "end": 384
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 396,
                      "end": 399
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 400,
                      "end": 401
                    },
                    "optional": false,
                    "computed": false,
                    "start": 396,
                    "end": 401
                  },
                  "directive": null,
                  "start": 396,
                  "end": 402
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
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 411,
                        "end": 414
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 415,
                        "end": 416
                      },
                      "optional": false,
                      "computed": false,
                      "start": 411,
                      "end": 416
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 419,
                        "end": 422
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 423,
                        "end": 424
                      },
                      "optional": false,
                      "computed": false,
                      "start": 419,
                      "end": 424
                    },
                    "start": 411,
                    "end": 424
                  },
                  "directive": null,
                  "start": 411,
                  "end": 425
                }
              ],
              "start": 386,
              "end": 431
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 451,
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
                    "start": 451,
                    "end": 456
                  },
                  "directive": null,
                  "start": 451,
                  "end": 457
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
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 466,
                        "end": 469
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 470,
                        "end": 471
                      },
                      "optional": false,
                      "computed": false,
                      "start": 466,
                      "end": 471
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 474,
                        "end": 477
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 478,
                        "end": 479
                      },
                      "optional": false,
                      "computed": false,
                      "start": 474,
                      "end": 479
                    },
                    "start": 466,
                    "end": 479
                  },
                  "directive": null,
                  "start": 466,
                  "end": 480
                }
              ],
              "start": 441,
              "end": 496
            },
            "start": 370,
            "end": 496
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 505,
                  "end": 508
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hasOwnProperty",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 509,
                  "end": 523
                },
                "optional": false,
                "computed": false,
                "start": 505,
                "end": 523
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 524,
                  "end": 527
                }
              ],
              "optional": false,
              "start": 505,
              "end": 528
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 540,
                      "end": 543
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 544,
                      "end": 545
                    },
                    "optional": false,
                    "computed": false,
                    "start": 540,
                    "end": 545
                  },
                  "directive": null,
                  "start": 540,
                  "end": 546
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
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 555,
                        "end": 558
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 559,
                        "end": 560
                      },
                      "optional": false,
                      "computed": false,
                      "start": 555,
                      "end": 560
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 563,
                        "end": 566
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 567,
                        "end": 568
                      },
                      "optional": false,
                      "computed": false,
                      "start": 563,
                      "end": 568
                    },
                    "start": 555,
                    "end": 568
                  },
                  "directive": null,
                  "start": 555,
                  "end": 569
                }
              ],
              "start": 530,
              "end": 575
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 595,
                      "end": 598
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 599,
                      "end": 600
                    },
                    "optional": false,
                    "computed": false,
                    "start": 595,
                    "end": 600
                  },
                  "directive": null,
                  "start": 595,
                  "end": 601
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
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 610,
                        "end": 613
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 614,
                        "end": 615
                      },
                      "optional": false,
                      "computed": false,
                      "start": 610,
                      "end": 615
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 618,
                        "end": 621
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 622,
                        "end": 623
                      },
                      "optional": false,
                      "computed": false,
                      "start": 618,
                      "end": 623
                    },
                    "start": 610,
                    "end": 623
                  },
                  "directive": null,
                  "start": 610,
                  "end": 624
                }
              ],
              "start": 585,
              "end": 640
            },
            "start": 501,
            "end": 640
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 649,
                "end": 652
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 656,
                "end": 659
              },
              "start": 649,
              "end": 659
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 671,
                      "end": 674
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 675,
                      "end": 676
                    },
                    "optional": false,
                    "computed": false,
                    "start": 671,
                    "end": 676
                  },
                  "directive": null,
                  "start": 671,
                  "end": 677
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
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 686,
                        "end": 689
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 690,
                        "end": 691
                      },
                      "optional": false,
                      "computed": false,
                      "start": 686,
                      "end": 691
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 694,
                        "end": 697
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 698,
                        "end": 699
                      },
                      "optional": false,
                      "computed": false,
                      "start": 694,
                      "end": 699
                    },
                    "start": 686,
                    "end": 699
                  },
                  "directive": null,
                  "start": 686,
                  "end": 700
                }
              ],
              "start": 661,
              "end": 706
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 726,
                      "end": 729
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 730,
                      "end": 731
                    },
                    "optional": false,
                    "computed": false,
                    "start": 726,
                    "end": 731
                  },
                  "directive": null,
                  "start": 726,
                  "end": 732
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
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 741,
                        "end": 744
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 745,
                        "end": 746
                      },
                      "optional": false,
                      "computed": false,
                      "start": 741,
                      "end": 746
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 749,
                        "end": 752
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 753,
                        "end": 754
                      },
                      "optional": false,
                      "computed": false,
                      "start": 749,
                      "end": 754
                    },
                    "start": 741,
                    "end": 754
                  },
                  "directive": null,
                  "start": 741,
                  "end": 755
                }
              ],
              "start": 716,
              "end": 761
            },
            "start": 645,
            "end": 761
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 770,
                  "end": 773
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hasOwnProperty",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 774,
                  "end": 788
                },
                "optional": false,
                "computed": false,
                "start": 770,
                "end": 788
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "b",
                  "raw": "'b'",
                  "start": 789,
                  "end": 792
                }
              ],
              "optional": false,
              "start": 770,
              "end": 793
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 805,
                      "end": 808
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 809,
                      "end": 810
                    },
                    "optional": false,
                    "computed": false,
                    "start": 805,
                    "end": 810
                  },
                  "directive": null,
                  "start": 805,
                  "end": 811
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
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 820,
                        "end": 823
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 824,
                        "end": 825
                      },
                      "optional": false,
                      "computed": false,
                      "start": 820,
                      "end": 825
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 828,
                        "end": 831
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 832,
                        "end": 833
                      },
                      "optional": false,
                      "computed": false,
                      "start": 828,
                      "end": 833
                    },
                    "start": 820,
                    "end": 833
                  },
                  "directive": null,
                  "start": 820,
                  "end": 834
                }
              ],
              "start": 795,
              "end": 840
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 860,
                      "end": 863
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 864,
                      "end": 865
                    },
                    "optional": false,
                    "computed": false,
                    "start": 860,
                    "end": 865
                  },
                  "directive": null,
                  "start": 860,
                  "end": 866
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
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 875,
                        "end": 878
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 879,
                        "end": 880
                      },
                      "optional": false,
                      "computed": false,
                      "start": 875,
                      "end": 880
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 883,
                        "end": 886
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 887,
                        "end": 888
                      },
                      "optional": false,
                      "computed": false,
                      "start": 883,
                      "end": 888
                    },
                    "start": 875,
                    "end": 888
                  },
                  "directive": null,
                  "start": 875,
                  "end": 889
                }
              ],
              "start": 850,
              "end": 895
            },
            "start": 766,
            "end": 895
          }
        ],
        "start": 301,
        "end": 897
      },
      "expression": false,
      "start": 244,
      "end": 897
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 908,
        "end": 910
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 916,
                "end": 923
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 926,
                          "end": 927
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 929,
                            "end": 935
                          },
                          "start": 927,
                          "end": 935
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 926,
                        "end": 936
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 937,
                          "end": 938
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "start": 940,
                                "end": 946
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 949,
                                "end": 958
                              }
                            ],
                            "start": 940,
                            "end": 958
                          },
                          "start": 938,
                          "end": 958
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 937,
                        "end": 958
                      }
                    ],
                    "start": 924,
                    "end": 960
                  }
                ],
                "start": 923,
                "end": 961
              },
              "start": 916,
              "end": 961
            },
            "start": 914,
            "end": 961
          },
          "start": 911,
          "end": 961
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 973,
                  "end": 974
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 977,
                    "end": 980
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 981,
                    "end": 982
                  },
                  "optional": false,
                  "computed": false,
                  "start": 977,
                  "end": 982
                },
                "definite": false,
                "start": 973,
                "end": 982
              }
            ],
            "declare": false,
            "start": 969,
            "end": 983
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1015,
                  "end": 1016
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1019,
                    "end": 1022
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1023,
                    "end": 1024
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1019,
                  "end": 1024
                },
                "definite": false,
                "start": 1015,
                "end": 1024
              }
            ],
            "declare": false,
            "start": 1011,
            "end": 1025
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
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1053,
                  "end": 1056
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1057,
                  "end": 1058
                },
                "optional": false,
                "computed": false,
                "start": 1053,
                "end": 1058
              },
              "right": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 1061,
                "end": 1068
              },
              "start": 1053,
              "end": 1068
            },
            "directive": null,
            "start": 1053,
            "end": 1069
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
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1074,
                  "end": 1077
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1078,
                  "end": 1079
                },
                "optional": false,
                "computed": false,
                "start": 1074,
                "end": 1079
              },
              "right": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 1082,
                "end": 1089
              },
              "start": 1074,
              "end": 1089
            },
            "directive": null,
            "start": 1074,
            "end": 1090
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
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1095,
                  "end": 1098
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1099,
                  "end": 1100
                },
                "optional": false,
                "computed": false,
                "start": 1095,
                "end": 1100
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1103,
                "end": 1112
              },
              "start": 1095,
              "end": 1112
            },
            "directive": null,
            "start": 1095,
            "end": 1113
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
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1128,
                  "end": 1131
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1132,
                  "end": 1133
                },
                "optional": false,
                "computed": false,
                "start": 1128,
                "end": 1133
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1136,
                "end": 1145
              },
              "start": 1128,
              "end": 1145
            },
            "directive": null,
            "start": 1128,
            "end": 1146
          }
        ],
        "start": 963,
        "end": 1148
      },
      "expression": false,
      "start": 899,
      "end": 1148
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1159,
        "end": 1161
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSOptionalType",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1166,
                    "end": 1172
                  },
                  "start": 1166,
                  "end": 1173
                }
              ],
              "start": 1165,
              "end": 1174
            },
            "start": 1163,
            "end": 1174
          },
          "start": 1162,
          "end": 1174
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1186,
                  "end": 1187
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1190,
                    "end": 1191
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1192,
                    "end": 1193
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1190,
                  "end": 1194
                },
                "definite": false,
                "start": 1186,
                "end": 1194
              }
            ],
            "declare": false,
            "start": 1182,
            "end": 1195
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1223,
                  "end": 1224
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1225,
                  "end": 1226
                },
                "optional": false,
                "computed": true,
                "start": 1223,
                "end": 1227
              },
              "right": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 1230,
                "end": 1237
              },
              "start": 1223,
              "end": 1237
            },
            "directive": null,
            "start": 1223,
            "end": 1238
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1243,
                  "end": 1244
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1245,
                  "end": 1246
                },
                "optional": false,
                "computed": true,
                "start": 1243,
                "end": 1247
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1250,
                "end": 1259
              },
              "start": 1243,
              "end": 1259
            },
            "directive": null,
            "start": 1243,
            "end": 1260
          }
        ],
        "start": 1176,
        "end": 1272
      },
      "expression": false,
      "start": 1150,
      "end": 1272
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4a",
        "optional": false,
        "typeAnnotation": null,
        "start": 1283,
        "end": 1286
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1292,
                  "end": 1298
                },
                {
                  "type": "TSOptionalType",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1300,
                    "end": 1306
                  },
                  "start": 1300,
                  "end": 1307
                }
              ],
              "start": 1291,
              "end": 1308
            },
            "start": 1289,
            "end": 1308
          },
          "start": 1287,
          "end": 1308
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1315,
                  "end": 1321
                },
                {
                  "type": "TSOptionalType",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1323,
                    "end": 1329
                  },
                  "start": 1323,
                  "end": 1330
                },
                {
                  "type": "TSOptionalType",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1332,
                    "end": 1338
                  },
                  "start": 1332,
                  "end": 1339
                }
              ],
              "start": 1314,
              "end": 1340
            },
            "start": 1312,
            "end": 1340
          },
          "start": 1310,
          "end": 1340
        }
      ],
      "returnType": null,
      "body": {
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
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1348,
                "end": 1350
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1353,
                "end": 1355
              },
              "start": 1348,
              "end": 1355
            },
            "directive": null,
            "start": 1348,
            "end": 1356
          }
        ],
        "start": 1342,
        "end": 1393
      },
      "expression": false,
      "start": 1274,
      "end": 1393
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1404,
        "end": 1406
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1411,
                  "end": 1417
                },
                {
                  "type": "TSOptionalType",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1419,
                    "end": 1425
                  },
                  "start": 1419,
                  "end": 1426
                },
                {
                  "type": "TSOptionalType",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1428,
                    "end": 1435
                  },
                  "start": 1428,
                  "end": 1436
                }
              ],
              "start": 1410,
              "end": 1437
            },
            "start": 1408,
            "end": 1437
          },
          "start": 1407,
          "end": 1437
        }
      ],
      "returnType": null,
      "body": {
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
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1445,
                "end": 1446
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 1450,
                    "end": 1452
                  }
                ],
                "start": 1449,
                "end": 1453
              },
              "start": 1445,
              "end": 1453
            },
            "directive": null,
            "start": 1445,
            "end": 1454
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1459,
                "end": 1460
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 1464,
                    "end": 1466
                  },
                  {
                    "type": "Literal",
                    "value": "abc",
                    "raw": "'abc'",
                    "start": 1468,
                    "end": 1473
                  }
                ],
                "start": 1463,
                "end": 1474
              },
              "start": 1459,
              "end": 1474
            },
            "directive": null,
            "start": 1459,
            "end": 1475
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1480,
                "end": 1481
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 1485,
                    "end": 1487
                  },
                  {
                    "type": "Literal",
                    "value": "abc",
                    "raw": "'abc'",
                    "start": 1489,
                    "end": 1494
                  },
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1496,
                    "end": 1500
                  }
                ],
                "start": 1484,
                "end": 1501
              },
              "start": 1480,
              "end": 1501
            },
            "directive": null,
            "start": 1480,
            "end": 1502
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1507,
                "end": 1508
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 1512,
                    "end": 1514
                  },
                  null
                ],
                "start": 1511,
                "end": 1518
              },
              "start": 1507,
              "end": 1518
            },
            "directive": null,
            "start": 1507,
            "end": 1519
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1524,
                "end": 1525
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 1529,
                    "end": 1531
                  },
                  null,
                  null
                ],
                "start": 1528,
                "end": 1537
              },
              "start": 1524,
              "end": 1537
            },
            "directive": null,
            "start": 1524,
            "end": 1538
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1543,
                "end": 1544
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 1548,
                    "end": 1550
                  },
                  null,
                  null,
                  null
                ],
                "start": 1547,
                "end": 1558
              },
              "start": 1543,
              "end": 1558
            },
            "directive": null,
            "start": 1543,
            "end": 1559
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1574,
                "end": 1575
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  null,
                  null,
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1583,
                    "end": 1587
                  }
                ],
                "start": 1578,
                "end": 1588
              },
              "start": 1574,
              "end": 1588
            },
            "directive": null,
            "start": 1574,
            "end": 1589
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1604,
                "end": 1605
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 1609,
                    "end": 1611
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1613,
                    "end": 1622
                  },
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1624,
                    "end": 1628
                  }
                ],
                "start": 1608,
                "end": 1629
              },
              "start": 1604,
              "end": 1629
            },
            "directive": null,
            "start": 1604,
            "end": 1630
          }
        ],
        "start": 1439,
        "end": 1642
      },
      "expression": false,
      "start": 1395,
      "end": 1642
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1653,
        "end": 1655
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1670,
                  "end": 1672
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1676,
                        "end": 1677
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1679,
                        "end": 1680
                      }
                    ],
                    "start": 1675,
                    "end": 1681
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1685,
                      "end": 1690
                    },
                    "typeArguments": null,
                    "start": 1685,
                    "end": 1690
                  },
                  "start": 1675,
                  "end": 1690
                },
                "definite": false,
                "start": 1670,
                "end": 1690
              }
            ],
            "declare": false,
            "start": 1664,
            "end": 1691
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
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1702,
                  "end": 1704
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1708,
                        "end": 1709
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1711,
                        "end": 1712
                      },
                      null
                    ],
                    "start": 1707,
                    "end": 1716
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1720,
                      "end": 1725
                    },
                    "typeArguments": null,
                    "start": 1720,
                    "end": 1725
                  },
                  "start": 1707,
                  "end": 1725
                },
                "definite": false,
                "start": 1702,
                "end": 1725
              }
            ],
            "declare": false,
            "start": 1696,
            "end": 1726
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
                  "name": "t3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1737,
                  "end": 1739
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1743,
                        "end": 1744
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1746,
                        "end": 1747
                      },
                      null,
                      null
                    ],
                    "start": 1742,
                    "end": 1753
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1757,
                      "end": 1762
                    },
                    "typeArguments": null,
                    "start": 1757,
                    "end": 1762
                  },
                  "start": 1742,
                  "end": 1762
                },
                "definite": false,
                "start": 1737,
                "end": 1762
              }
            ],
            "declare": false,
            "start": 1731,
            "end": 1763
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
                  "name": "t4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1774,
                  "end": 1776
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1780,
                        "end": 1781
                      },
                      null,
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1785,
                        "end": 1786
                      }
                    ],
                    "start": 1779,
                    "end": 1787
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1791,
                      "end": 1796
                    },
                    "typeArguments": null,
                    "start": 1791,
                    "end": 1796
                  },
                  "start": 1779,
                  "end": 1796
                },
                "definite": false,
                "start": 1774,
                "end": 1796
              }
            ],
            "declare": false,
            "start": 1768,
            "end": 1797
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
                  "name": "t5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1808,
                  "end": 1810
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1814,
                        "end": 1815
                      },
                      null,
                      null,
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1821,
                        "end": 1822
                      }
                    ],
                    "start": 1813,
                    "end": 1823
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1827,
                      "end": 1832
                    },
                    "typeArguments": null,
                    "start": 1827,
                    "end": 1832
                  },
                  "start": 1813,
                  "end": 1832
                },
                "definite": false,
                "start": 1808,
                "end": 1832
              }
            ],
            "declare": false,
            "start": 1802,
            "end": 1833
          }
        ],
        "start": 1658,
        "end": 1835
      },
      "expression": false,
      "start": 1644,
      "end": 1835
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 1866,
        "end": 1871
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1880,
              "end": 1883
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1885,
                "end": 1891
              },
              "start": 1883,
              "end": 1891
            },
            "accessibility": null,
            "static": false,
            "start": 1880,
            "end": 1892
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1897,
              "end": 1900
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1902,
                "end": 1908
              },
              "start": 1900,
              "end": 1908
            },
            "accessibility": null,
            "static": false,
            "start": 1897,
            "end": 1908
          }
        ],
        "start": 1874,
        "end": 1910
      },
      "declare": false,
      "start": 1861,
      "end": 1910
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InputProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 1917,
        "end": 1927
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1936,
              "end": 1939
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1942,
                "end": 1948
              },
              "start": 1940,
              "end": 1948
            },
            "accessibility": null,
            "static": false,
            "start": 1936,
            "end": 1949
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1954,
              "end": 1957
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1959,
                "end": 1965
              },
              "start": 1957,
              "end": 1965
            },
            "accessibility": null,
            "static": false,
            "start": 1954,
            "end": 1966
          }
        ],
        "start": 1930,
        "end": 1968
      },
      "declare": false,
      "start": 1912,
      "end": 1968
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
            "name": "defaultProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Pick",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1990,
                  "end": 1994
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1995,
                        "end": 2000
                      },
                      "typeArguments": null,
                      "start": 1995,
                      "end": 2000
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "'foo'",
                        "start": 2002,
                        "end": 2007
                      },
                      "start": 2002,
                      "end": 2007
                    }
                  ],
                  "start": 1994,
                  "end": 2008
                },
                "start": 1990,
                "end": 2008
              },
              "start": 1988,
              "end": 2008
            },
            "start": 1976,
            "end": 2008
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2013,
                  "end": 2016
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 2018,
                  "end": 2023
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2013,
                "end": 2023
              }
            ],
            "start": 2011,
            "end": 2025
          },
          "definite": false,
          "start": 1976,
          "end": 2025
        }
      ],
      "declare": false,
      "start": 1970,
      "end": 2026
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
            "name": "inputProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InputProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2045,
                  "end": 2055
                },
                "typeArguments": null,
                "start": 2045,
                "end": 2055
              },
              "start": 2043,
              "end": 2055
            },
            "start": 2033,
            "end": 2055
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2060,
                  "end": 2063
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2065,
                  "end": 2074
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2060,
                "end": 2074
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2076,
                  "end": 2079
                },
                "value": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "'bar'",
                  "start": 2081,
                  "end": 2086
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2076,
                "end": 2086
              }
            ],
            "start": 2058,
            "end": 2088
          },
          "definite": false,
          "start": 2033,
          "end": 2088
        }
      ],
      "declare": false,
      "start": 2027,
      "end": 2089
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
            "name": "completeProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2111,
                  "end": 2116
                },
                "typeArguments": null,
                "start": 2111,
                "end": 2116
              },
              "start": 2109,
              "end": 2116
            },
            "start": 2096,
            "end": 2116
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "defaultProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2124,
                  "end": 2136
                },
                "start": 2121,
                "end": 2136
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "inputProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2141,
                  "end": 2151
                },
                "start": 2138,
                "end": 2151
              }
            ],
            "start": 2119,
            "end": 2153
          },
          "definite": false,
          "start": 2096,
          "end": 2153
        }
      ],
      "declare": false,
      "start": 2090,
      "end": 2154
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
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2191,
                    "end": 2197
                  },
                  {
                    "type": "TSOptionalType",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2199,
                      "end": 2205
                    },
                    "start": 2199,
                    "end": 2206
                  },
                  {
                    "type": "TSOptionalType",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2208,
                      "end": 2215
                    },
                    "start": 2208,
                    "end": 2216
                  }
                ],
                "start": 2190,
                "end": 2217
              },
              "start": 2188,
              "end": 2217
            },
            "start": 2186,
            "end": 2217
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2221,
                "end": 2222
              }
            ],
            "start": 2220,
            "end": 2223
          },
          "definite": false,
          "start": 2186,
          "end": 2223
        }
      ],
      "declare": false,
      "start": 2180,
      "end": 2224
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
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2236,
                    "end": 2242
                  },
                  {
                    "type": "TSOptionalType",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2244,
                      "end": 2250
                    },
                    "start": 2244,
                    "end": 2251
                  },
                  {
                    "type": "TSOptionalType",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2253,
                      "end": 2260
                    },
                    "start": 2253,
                    "end": 2261
                  }
                ],
                "start": 2235,
                "end": 2262
              },
              "start": 2233,
              "end": 2262
            },
            "start": 2231,
            "end": 2262
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2266,
                "end": 2267
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2269,
                "end": 2278
              }
            ],
            "start": 2265,
            "end": 2279
          },
          "definite": false,
          "start": 2231,
          "end": 2279
        }
      ],
      "declare": false,
      "start": 2225,
      "end": 2280
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
            "name": "t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2292,
                    "end": 2298
                  },
                  {
                    "type": "TSOptionalType",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2300,
                      "end": 2306
                    },
                    "start": 2300,
                    "end": 2307
                  },
                  {
                    "type": "TSOptionalType",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2309,
                      "end": 2316
                    },
                    "start": 2309,
                    "end": 2317
                  }
                ],
                "start": 2291,
                "end": 2318
              },
              "start": 2289,
              "end": 2318
            },
            "start": 2287,
            "end": 2318
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2322,
                "end": 2323
              },
              {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 2325,
                "end": 2333
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2335,
                "end": 2344
              }
            ],
            "start": 2321,
            "end": 2345
          },
          "definite": false,
          "start": 2287,
          "end": 2345
        }
      ],
      "declare": false,
      "start": 2281,
      "end": 2346
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
            "name": "t4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2358,
                    "end": 2364
                  },
                  {
                    "type": "TSOptionalType",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2366,
                      "end": 2372
                    },
                    "start": 2366,
                    "end": 2373
                  },
                  {
                    "type": "TSOptionalType",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2375,
                      "end": 2382
                    },
                    "start": 2375,
                    "end": 2383
                  }
                ],
                "start": 2357,
                "end": 2384
              },
              "start": 2355,
              "end": 2384
            },
            "start": 2353,
            "end": 2384
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2388,
                "end": 2389
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2391,
                "end": 2400
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2402,
                "end": 2411
              }
            ],
            "start": 2387,
            "end": 2412
          },
          "definite": false,
          "start": 2353,
          "end": 2412
        }
      ],
      "declare": false,
      "start": 2347,
      "end": 2413
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2450,
                      "end": 2453
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2456,
                        "end": 2462
                      },
                      "start": 2454,
                      "end": 2462
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2450,
                    "end": 2462
                  }
                ],
                "start": 2448,
                "end": 2464
              },
              "start": 2446,
              "end": 2464
            },
            "start": 2445,
            "end": 2464
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2469,
                  "end": 2472
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2474,
                  "end": 2483
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2469,
                "end": 2483
              }
            ],
            "start": 2467,
            "end": 2485
          },
          "definite": false,
          "start": 2445,
          "end": 2485
        }
      ],
      "declare": false,
      "start": 2439,
      "end": 2486
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2498,
                      "end": 2501
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2503,
                        "end": 2509
                      },
                      "start": 2501,
                      "end": 2509
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2498,
                    "end": 2509
                  }
                ],
                "start": 2496,
                "end": 2511
              },
              "start": 2494,
              "end": 2511
            },
            "start": 2493,
            "end": 2511
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2516,
                  "end": 2519
                },
                "value": {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 2521,
                  "end": 2524
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2516,
                "end": 2524
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2529,
                  "end": 2530
                },
                "start": 2526,
                "end": 2530
              }
            ],
            "start": 2514,
            "end": 2532
          },
          "definite": false,
          "start": 2493,
          "end": 2532
        }
      ],
      "declare": false,
      "start": 2487,
      "end": 2533
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 2597,
        "end": 2601
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2614,
                    "end": 2620
                  },
                  "start": 2612,
                  "end": 2620
                },
                "start": 2609,
                "end": 2620
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2623,
                "end": 2629
              },
              "start": 2621,
              "end": 2629
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2608,
            "end": 2630
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2635,
              "end": 2638
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2641,
                "end": 2647
              },
              "start": 2639,
              "end": 2647
            },
            "accessibility": null,
            "static": false,
            "start": 2635,
            "end": 2648
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 2670,
              "end": 2673
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2676,
                    "end": 2682
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 2685,
                    "end": 2694
                  }
                ],
                "start": 2676,
                "end": 2694
              },
              "start": 2674,
              "end": 2694
            },
            "accessibility": null,
            "static": false,
            "start": 2670,
            "end": 2695
          }
        ],
        "start": 2602,
        "end": 2707
      },
      "declare": false,
      "start": 2587,
      "end": 2707
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ox1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2773,
                      "end": 2774
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2776,
                        "end": 2782
                      },
                      "start": 2774,
                      "end": 2782
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2773,
                    "end": 2782
                  }
                ],
                "start": 2771,
                "end": 2784
              },
              "start": 2769,
              "end": 2784
            },
            "start": 2766,
            "end": 2784
          },
          "init": null,
          "definite": false,
          "start": 2766,
          "end": 2784
        }
      ],
      "declare": true,
      "start": 2754,
      "end": 2785
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ox2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2805,
                      "end": 2806
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 2808,
                            "end": 2814
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 2817,
                            "end": 2826
                          }
                        ],
                        "start": 2808,
                        "end": 2826
                      },
                      "start": 2806,
                      "end": 2826
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2805,
                    "end": 2826
                  }
                ],
                "start": 2803,
                "end": 2828
              },
              "start": 2801,
              "end": 2828
            },
            "start": 2798,
            "end": 2828
          },
          "init": null,
          "definite": false,
          "start": 2798,
          "end": 2828
        }
      ],
      "declare": true,
      "start": 2786,
      "end": 2829
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ox3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2849,
                      "end": 2850
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2853,
                        "end": 2859
                      },
                      "start": 2851,
                      "end": 2859
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2849,
                    "end": 2859
                  }
                ],
                "start": 2847,
                "end": 2861
              },
              "start": 2845,
              "end": 2861
            },
            "start": 2842,
            "end": 2861
          },
          "init": null,
          "definite": false,
          "start": 2842,
          "end": 2861
        }
      ],
      "declare": true,
      "start": 2830,
      "end": 2862
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ox4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2882,
                      "end": 2883
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 2886,
                            "end": 2892
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 2895,
                            "end": 2904
                          }
                        ],
                        "start": 2886,
                        "end": 2904
                      },
                      "start": 2884,
                      "end": 2904
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2882,
                    "end": 2904
                  }
                ],
                "start": 2880,
                "end": 2906
              },
              "start": 2878,
              "end": 2906
            },
            "start": 2875,
            "end": 2906
          },
          "init": null,
          "definite": false,
          "start": 2875,
          "end": 2906
        }
      ],
      "declare": true,
      "start": 2863,
      "end": 2907
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "tx1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2927,
                    "end": 2933
                  }
                ],
                "start": 2926,
                "end": 2934
              },
              "start": 2924,
              "end": 2934
            },
            "start": 2921,
            "end": 2934
          },
          "init": null,
          "definite": false,
          "start": 2921,
          "end": 2934
        }
      ],
      "declare": true,
      "start": 2909,
      "end": 2935
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "tx2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2954,
                        "end": 2960
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 2963,
                        "end": 2972
                      }
                    ],
                    "start": 2954,
                    "end": 2972
                  }
                ],
                "start": 2953,
                "end": 2973
              },
              "start": 2951,
              "end": 2973
            },
            "start": 2948,
            "end": 2973
          },
          "init": null,
          "definite": false,
          "start": 2948,
          "end": 2973
        }
      ],
      "declare": true,
      "start": 2936,
      "end": 2974
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "tx3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSOptionalType",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2993,
                      "end": 2999
                    },
                    "start": 2993,
                    "end": 3000
                  }
                ],
                "start": 2992,
                "end": 3001
              },
              "start": 2990,
              "end": 3001
            },
            "start": 2987,
            "end": 3001
          },
          "init": null,
          "definite": false,
          "start": 2987,
          "end": 3001
        }
      ],
      "declare": true,
      "start": 2975,
      "end": 3002
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "tx4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSOptionalType",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 3022,
                          "end": 3028
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 3031,
                          "end": 3040
                        }
                      ],
                      "start": 3022,
                      "end": 3040
                    },
                    "start": 3021,
                    "end": 3042
                  }
                ],
                "start": 3020,
                "end": 3043
              },
              "start": 3018,
              "end": 3043
            },
            "start": 3015,
            "end": 3043
          },
          "init": null,
          "definite": false,
          "start": 3015,
          "end": 3043
        }
      ],
      "declare": true,
      "start": 3003,
      "end": 3044
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 3063,
        "end": 3066
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 3067,
              "end": 3068
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3067,
            "end": 3068
          }
        ],
        "start": 3066,
        "end": 3069
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
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3075,
                    "end": 3076
                  },
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
                        "start": 3079,
                        "end": 3080
                      },
                      "typeArguments": null,
                      "start": 3079,
                      "end": 3080
                    },
                    "start": 3077,
                    "end": 3080
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3075,
                  "end": 3080
                }
              ],
              "start": 3073,
              "end": 3082
            },
            "start": 3071,
            "end": 3082
          },
          "start": 3070,
          "end": 3082
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
            "start": 3085,
            "end": 3086
          },
          "typeArguments": null,
          "start": 3085,
          "end": 3086
        },
        "start": 3083,
        "end": 3086
      },
      "body": null,
      "expression": false,
      "start": 3046,
      "end": 3087
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null,
          "start": 3089,
          "end": 3092
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ox1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3093,
            "end": 3096
          }
        ],
        "optional": false,
        "start": 3089,
        "end": 3097
      },
      "directive": null,
      "start": 3089,
      "end": 3098
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null,
          "start": 3110,
          "end": 3113
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ox2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3114,
            "end": 3117
          }
        ],
        "optional": false,
        "start": 3110,
        "end": 3118
      },
      "directive": null,
      "start": 3110,
      "end": 3119
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null,
          "start": 3143,
          "end": 3146
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ox3",
            "optional": false,
            "typeAnnotation": null,
            "start": 3147,
            "end": 3150
          }
        ],
        "optional": false,
        "start": 3143,
        "end": 3151
      },
      "directive": null,
      "start": 3143,
      "end": 3152
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f11",
          "optional": false,
          "typeAnnotation": null,
          "start": 3164,
          "end": 3167
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ox4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3168,
            "end": 3171
          }
        ],
        "optional": false,
        "start": 3164,
        "end": 3172
      },
      "directive": null,
      "start": 3164,
      "end": 3173
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 3215,
        "end": 3218
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 3219,
              "end": 3220
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3219,
            "end": 3220
          }
        ],
        "start": 3218,
        "end": 3221
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
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSOptionalType",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3226,
                      "end": 3227
                    },
                    "typeArguments": null,
                    "start": 3226,
                    "end": 3227
                  },
                  "start": 3226,
                  "end": 3228
                }
              ],
              "start": 3225,
              "end": 3229
            },
            "start": 3223,
            "end": 3229
          },
          "start": 3222,
          "end": 3229
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
            "start": 3232,
            "end": 3233
          },
          "typeArguments": null,
          "start": 3232,
          "end": 3233
        },
        "start": 3230,
        "end": 3233
      },
      "body": null,
      "expression": false,
      "start": 3198,
      "end": 3234
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f12",
          "optional": false,
          "typeAnnotation": null,
          "start": 3236,
          "end": 3239
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "tx1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3240,
            "end": 3243
          }
        ],
        "optional": false,
        "start": 3236,
        "end": 3244
      },
      "directive": null,
      "start": 3236,
      "end": 3245
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f12",
          "optional": false,
          "typeAnnotation": null,
          "start": 3257,
          "end": 3260
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "tx2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3261,
            "end": 3264
          }
        ],
        "optional": false,
        "start": 3257,
        "end": 3265
      },
      "directive": null,
      "start": 3257,
      "end": 3266
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f12",
          "optional": false,
          "typeAnnotation": null,
          "start": 3290,
          "end": 3293
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "tx3",
            "optional": false,
            "typeAnnotation": null,
            "start": 3294,
            "end": 3297
          }
        ],
        "optional": false,
        "start": 3290,
        "end": 3298
      },
      "directive": null,
      "start": 3290,
      "end": 3299
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f12",
          "optional": false,
          "typeAnnotation": null,
          "start": 3311,
          "end": 3314
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "tx4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3315,
            "end": 3318
          }
        ],
        "optional": false,
        "start": 3311,
        "end": 3319
      },
      "directive": null,
      "start": 3311,
      "end": 3320
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null,
        "start": 3362,
        "end": 3365
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 3366,
              "end": 3367
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3366,
            "end": 3367
          }
        ],
        "start": 3365,
        "end": 3368
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
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 3372,
                "end": 3379
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3380,
                      "end": 3381
                    },
                    "typeArguments": null,
                    "start": 3380,
                    "end": 3381
                  }
                ],
                "start": 3379,
                "end": 3382
              },
              "start": 3372,
              "end": 3382
            },
            "start": 3370,
            "end": 3382
          },
          "start": 3369,
          "end": 3382
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
            "start": 3385,
            "end": 3386
          },
          "typeArguments": null,
          "start": 3385,
          "end": 3386
        },
        "start": 3383,
        "end": 3386
      },
      "body": null,
      "expression": false,
      "start": 3345,
      "end": 3387
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f13",
          "optional": false,
          "typeAnnotation": null,
          "start": 3389,
          "end": 3392
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ox1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3393,
            "end": 3396
          }
        ],
        "optional": false,
        "start": 3389,
        "end": 3397
      },
      "directive": null,
      "start": 3389,
      "end": 3398
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f13",
          "optional": false,
          "typeAnnotation": null,
          "start": 3417,
          "end": 3420
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ox2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3421,
            "end": 3424
          }
        ],
        "optional": false,
        "start": 3417,
        "end": 3425
      },
      "directive": null,
      "start": 3417,
      "end": 3426
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f13",
          "optional": false,
          "typeAnnotation": null,
          "start": 3457,
          "end": 3460
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ox3",
            "optional": false,
            "typeAnnotation": null,
            "start": 3461,
            "end": 3464
          }
        ],
        "optional": false,
        "start": 3457,
        "end": 3465
      },
      "directive": null,
      "start": 3457,
      "end": 3466
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f13",
          "optional": false,
          "typeAnnotation": null,
          "start": 3485,
          "end": 3488
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ox4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3489,
            "end": 3492
          }
        ],
        "optional": false,
        "start": 3485,
        "end": 3493
      },
      "directive": null,
      "start": 3485,
      "end": 3494
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f13",
          "optional": false,
          "typeAnnotation": null,
          "start": 3526,
          "end": 3529
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "tx1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3530,
            "end": 3533
          }
        ],
        "optional": false,
        "start": 3526,
        "end": 3534
      },
      "directive": null,
      "start": 3526,
      "end": 3535
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f13",
          "optional": false,
          "typeAnnotation": null,
          "start": 3549,
          "end": 3552
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "tx2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3553,
            "end": 3556
          }
        ],
        "optional": false,
        "start": 3549,
        "end": 3557
      },
      "directive": null,
      "start": 3549,
      "end": 3558
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f13",
          "optional": false,
          "typeAnnotation": null,
          "start": 3584,
          "end": 3587
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "tx3",
            "optional": false,
            "typeAnnotation": null,
            "start": 3588,
            "end": 3591
          }
        ],
        "optional": false,
        "start": 3584,
        "end": 3592
      },
      "directive": null,
      "start": 3584,
      "end": 3593
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f13",
          "optional": false,
          "typeAnnotation": null,
          "start": 3607,
          "end": 3610
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "tx4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3611,
            "end": 3614
          }
        ],
        "optional": false,
        "start": 3607,
        "end": 3615
      },
      "directive": null,
      "start": 3607,
      "end": 3616
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Undefinable",
        "optional": false,
        "typeAnnotation": null,
        "start": 3670,
        "end": 3681
      },
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
              "start": 3682,
              "end": 3683
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3682,
            "end": 3683
          }
        ],
        "start": 3681,
        "end": 3684
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3687,
              "end": 3688
            },
            "typeArguments": null,
            "start": 3687,
            "end": 3688
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 3691,
            "end": 3700
          }
        ],
        "start": 3687,
        "end": 3700
      },
      "declare": false,
      "start": 3665,
      "end": 3701
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "expectNotUndefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 3712,
        "end": 3730
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
              "start": 3731,
              "end": 3732
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3731,
            "end": 3732
          }
        ],
        "start": 3730,
        "end": 3733
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Undefinable",
                "optional": false,
                "typeAnnotation": null,
                "start": 3741,
                "end": 3752
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3753,
                      "end": 3754
                    },
                    "typeArguments": null,
                    "start": 3753,
                    "end": 3754
                  }
                ],
                "start": 3752,
                "end": 3755
              },
              "start": 3741,
              "end": 3755
            },
            "start": 3739,
            "end": 3755
          },
          "start": 3734,
          "end": 3755
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
            "start": 3758,
            "end": 3759
          },
          "typeArguments": null,
          "start": 3758,
          "end": 3759
        },
        "start": 3756,
        "end": 3759
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 3770,
                "end": 3775
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 3780,
                "end": 3789
              },
              "start": 3770,
              "end": 3789
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TypeError",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3811,
                      "end": 3820
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "value is undefined",
                        "raw": "'value is undefined'",
                        "start": 3821,
                        "end": 3841
                      }
                    ],
                    "start": 3807,
                    "end": 3842
                  },
                  "start": 3801,
                  "end": 3843
                }
              ],
              "start": 3791,
              "end": 3849
            },
            "alternate": null,
            "start": 3766,
            "end": 3849
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 3861,
              "end": 3866
            },
            "start": 3854,
            "end": 3867
          }
        ],
        "start": 3760,
        "end": 3869
      },
      "expression": false,
      "start": 3703,
      "end": 3869
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 3881,
        "end": 3884
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 3891,
              "end": 3894
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3897,
                "end": 3903
              },
              "start": 3895,
              "end": 3903
            },
            "accessibility": null,
            "static": false,
            "start": 3891,
            "end": 3904
          }
        ],
        "start": 3885,
        "end": 3906
      },
      "declare": false,
      "start": 3871,
      "end": 3906
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "aa",
        "optional": false,
        "typeAnnotation": null,
        "start": 3917,
        "end": 3919
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 3927,
                "end": 3930
              },
              "typeArguments": null,
              "start": 3927,
              "end": 3930
            },
            "start": 3925,
            "end": 3930
          },
          "start": 3920,
          "end": 3930
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 3933,
          "end": 3937
        },
        "start": 3931,
        "end": 3937
      },
      "body": {
        "type": "BlockStatement",
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
                  "name": "notUndefinedVal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3950,
                  "end": 3965
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "expectNotUndefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3968,
                    "end": 3986
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "input",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3987,
                        "end": 3992
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3993,
                        "end": 3996
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3987,
                      "end": 3996
                    }
                  ],
                  "optional": false,
                  "start": 3968,
                  "end": 3997
                },
                "definite": false,
                "start": 3950,
                "end": 3997
              }
            ],
            "declare": false,
            "start": 3944,
            "end": 3998
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "bb",
                "optional": false,
                "typeAnnotation": null,
                "start": 4003,
                "end": 4005
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "notUndefinedVal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4006,
                  "end": 4021
                }
              ],
              "optional": false,
              "start": 4003,
              "end": 4022
            },
            "directive": null,
            "start": 4003,
            "end": 4023
          }
        ],
        "start": 3938,
        "end": 4025
      },
      "expression": false,
      "start": 3908,
      "end": 4025
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bb",
        "optional": false,
        "typeAnnotation": null,
        "start": 4044,
        "end": 4046
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 4054,
              "end": 4060
            },
            "start": 4052,
            "end": 4060
          },
          "start": 4047,
          "end": 4060
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 4063,
          "end": 4067
        },
        "start": 4061,
        "end": 4067
      },
      "body": null,
      "expression": false,
      "start": 4027,
      "end": 4068
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4080,
        "end": 4082
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 4089,
              "end": 4093
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4095,
                "end": 4101
              },
              "start": 4093,
              "end": 4101
            },
            "accessibility": null,
            "static": false,
            "start": 4089,
            "end": 4101
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "email",
              "optional": false,
              "typeAnnotation": null,
              "start": 4106,
              "end": 4111
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 4114,
                    "end": 4120
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 4123,
                    "end": 4129
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 4132,
                    "end": 4141
                  }
                ],
                "start": 4114,
                "end": 4141
              },
              "start": 4112,
              "end": 4141
            },
            "accessibility": null,
            "static": false,
            "start": 4106,
            "end": 4141
          }
        ],
        "start": 4083,
        "end": 4143
      },
      "declare": false,
      "start": 4070,
      "end": 4143
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4154,
        "end": 4156
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 4163,
              "end": 4167
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4169,
                "end": 4175
              },
              "start": 4167,
              "end": 4175
            },
            "accessibility": null,
            "static": false,
            "start": 4163,
            "end": 4175
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "email",
              "optional": false,
              "typeAnnotation": null,
              "start": 4180,
              "end": 4185
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 4188,
                    "end": 4194
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 4197,
                    "end": 4203
                  }
                ],
                "start": 4188,
                "end": 4203
              },
              "start": 4186,
              "end": 4203
            },
            "accessibility": null,
            "static": false,
            "start": 4180,
            "end": 4203
          }
        ],
        "start": 4157,
        "end": 4205
      },
      "declare": false,
      "start": 4144,
      "end": 4205
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
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 4223,
                    "end": 4229
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 4232,
                    "end": 4239
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 4242,
                    "end": 4251
                  }
                ],
                "start": 4223,
                "end": 4251
              },
              "start": 4221,
              "end": 4251
            },
            "start": 4220,
            "end": 4251
          },
          "init": null,
          "definite": false,
          "start": 4220,
          "end": 4251
        }
      ],
      "declare": true,
      "start": 4206,
      "end": 4251
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
            "name": "u1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4270,
                  "end": 4272
                },
                "typeArguments": null,
                "start": 4270,
                "end": 4272
              },
              "start": 4268,
              "end": 4272
            },
            "start": 4266,
            "end": 4272
          },
          "init": null,
          "definite": false,
          "start": 4266,
          "end": 4272
        }
      ],
      "declare": true,
      "start": 4252,
      "end": 4272
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "u2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4289,
                  "end": 4291
                },
                "typeArguments": null,
                "start": 4289,
                "end": 4291
              },
              "start": 4287,
              "end": 4291
            },
            "start": 4285,
            "end": 4291
          },
          "init": null,
          "definite": false,
          "start": 4285,
          "end": 4291
        }
      ],
      "declare": true,
      "start": 4273,
      "end": 4291
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
            "name": "u1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4292,
            "end": 4294
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "email",
            "optional": false,
            "typeAnnotation": null,
            "start": 4295,
            "end": 4300
          },
          "optional": false,
          "computed": false,
          "start": 4292,
          "end": 4300
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 4303,
          "end": 4304
        },
        "start": 4292,
        "end": 4304
      },
      "directive": null,
      "start": 4292,
      "end": 4304
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
            "name": "u2",
            "optional": false,
            "typeAnnotation": null,
            "start": 4362,
            "end": 4364
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "email",
            "optional": false,
            "typeAnnotation": null,
            "start": 4365,
            "end": 4370
          },
          "optional": false,
          "computed": false,
          "start": 4362,
          "end": 4370
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 4373,
          "end": 4374
        },
        "start": 4362,
        "end": 4374
      },
      "directive": null,
      "start": 4362,
      "end": 4374
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u2",
          "optional": false,
          "typeAnnotation": null,
          "start": 4414,
          "end": 4416
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 4425,
                "end": 4429
              },
              "value": {
                "type": "Literal",
                "value": "hi",
                "raw": "'hi'",
                "start": 4431,
                "end": 4435
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 4425,
              "end": 4435
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "email",
                "optional": false,
                "typeAnnotation": null,
                "start": 4441,
                "end": 4446
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 4448,
                "end": 4457
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 4441,
              "end": 4457
            }
          ],
          "start": 4419,
          "end": 4459
        },
        "start": 4414,
        "end": 4459
      },
      "directive": null,
      "start": 4414,
      "end": 4459
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
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 4503,
                            "end": 4509
                          },
                          "start": 4501,
                          "end": 4509
                        },
                        "start": 4500,
                        "end": 4509
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 4512,
                            "end": 4518
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 4521,
                            "end": 4527
                          }
                        ],
                        "start": 4512,
                        "end": 4527
                      },
                      "start": 4510,
                      "end": 4527
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 4499,
                    "end": 4527
                  }
                ],
                "start": 4498,
                "end": 4529
              },
              "start": 4496,
              "end": 4529
            },
            "start": 4495,
            "end": 4529
          },
          "init": null,
          "definite": false,
          "start": 4495,
          "end": 4529
        }
      ],
      "declare": true,
      "start": 4483,
      "end": 4529
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
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4546,
                      "end": 4547
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4549,
                        "end": 4555
                      },
                      "start": 4547,
                      "end": 4555
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4546,
                    "end": 4556
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4557,
                      "end": 4558
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 4560,
                        "end": 4566
                      },
                      "start": 4558,
                      "end": 4566
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4557,
                    "end": 4566
                  }
                ],
                "start": 4545,
                "end": 4567
              },
              "start": 4543,
              "end": 4567
            },
            "start": 4542,
            "end": 4567
          },
          "init": null,
          "definite": false,
          "start": 4542,
          "end": 4567
        }
      ],
      "declare": true,
      "start": 4530,
      "end": 4567
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4584,
                      "end": 4585
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4587,
                        "end": 4593
                      },
                      "start": 4585,
                      "end": 4593
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4584,
                    "end": 4594
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4595,
                      "end": 4596
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 4599,
                        "end": 4605
                      },
                      "start": 4597,
                      "end": 4605
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4595,
                    "end": 4605
                  }
                ],
                "start": 4583,
                "end": 4606
              },
              "start": 4581,
              "end": 4606
            },
            "start": 4580,
            "end": 4606
          },
          "init": null,
          "definite": false,
          "start": 4580,
          "end": 4606
        }
      ],
      "declare": true,
      "start": 4568,
      "end": 4606
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4623,
                      "end": 4624
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4626,
                        "end": 4632
                      },
                      "start": 4624,
                      "end": 4632
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4623,
                    "end": 4633
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4634,
                      "end": 4635
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 4637,
                            "end": 4643
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 4646,
                            "end": 4655
                          }
                        ],
                        "start": 4637,
                        "end": 4655
                      },
                      "start": 4635,
                      "end": 4655
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4634,
                    "end": 4655
                  }
                ],
                "start": 4622,
                "end": 4657
              },
              "start": 4620,
              "end": 4657
            },
            "start": 4619,
            "end": 4657
          },
          "init": null,
          "definite": false,
          "start": 4619,
          "end": 4657
        }
      ],
      "declare": true,
      "start": 4607,
      "end": 4657
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
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4674,
                      "end": 4675
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4677,
                        "end": 4683
                      },
                      "start": 4675,
                      "end": 4683
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4674,
                    "end": 4684
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4685,
                      "end": 4686
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 4689,
                            "end": 4695
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 4698,
                            "end": 4707
                          }
                        ],
                        "start": 4689,
                        "end": 4707
                      },
                      "start": 4687,
                      "end": 4707
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4685,
                    "end": 4707
                  }
                ],
                "start": 4673,
                "end": 4709
              },
              "start": 4671,
              "end": 4709
            },
            "start": 4670,
            "end": 4709
          },
          "init": null,
          "definite": false,
          "start": 4670,
          "end": 4709
        }
      ],
      "declare": true,
      "start": 4658,
      "end": 4709
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 4711,
          "end": 4712
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 4715,
          "end": 4716
        },
        "start": 4711,
        "end": 4716
      },
      "directive": null,
      "start": 4711,
      "end": 4717
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 4718,
          "end": 4719
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 4722,
          "end": 4723
        },
        "start": 4718,
        "end": 4723
      },
      "directive": null,
      "start": 4718,
      "end": 4724
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 4725,
          "end": 4726
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 4729,
          "end": 4730
        },
        "start": 4725,
        "end": 4730
      },
      "directive": null,
      "start": 4725,
      "end": 4731
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 4742,
          "end": 4743
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 4746,
          "end": 4747
        },
        "start": 4742,
        "end": 4747
      },
      "directive": null,
      "start": 4742,
      "end": 4748
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropsFromReact",
        "optional": false,
        "typeAnnotation": null,
        "start": 4792,
        "end": 4806
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onClick",
              "optional": false,
              "typeAnnotation": null,
              "start": 4813,
              "end": 4820
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 4829,
                    "end": 4833
                  },
                  "start": 4826,
                  "end": 4833
                },
                "start": 4823,
                "end": 4833
              },
              "start": 4821,
              "end": 4833
            },
            "accessibility": null,
            "static": false,
            "start": 4813,
            "end": 4834
          }
        ],
        "start": 4807,
        "end": 4836
      },
      "declare": false,
      "start": 4782,
      "end": 4836
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropsFromMaterialUI",
        "optional": false,
        "typeAnnotation": null,
        "start": 4848,
        "end": 4867
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onClick",
              "optional": false,
              "typeAnnotation": null,
              "start": 4874,
              "end": 4881
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 4891,
                        "end": 4895
                      },
                      "start": 4888,
                      "end": 4895
                    },
                    "start": 4885,
                    "end": 4895
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 4899,
                    "end": 4908
                  }
                ],
                "start": 4884,
                "end": 4908
              },
              "start": 4882,
              "end": 4908
            },
            "accessibility": null,
            "static": false,
            "start": 4874,
            "end": 4909
          }
        ],
        "start": 4868,
        "end": 4911
      },
      "declare": false,
      "start": 4838,
      "end": 4911
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TheTypeFromMaterialUI",
        "optional": false,
        "typeAnnotation": null,
        "start": 4918,
        "end": 4939
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PropsFromReact",
              "optional": false,
              "typeAnnotation": null,
              "start": 4942,
              "end": 4956
            },
            "typeArguments": null,
            "start": 4942,
            "end": 4956
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PropsFromMaterialUI",
              "optional": false,
              "typeAnnotation": null,
              "start": 4959,
              "end": 4978
            },
            "typeArguments": null,
            "start": 4959,
            "end": 4978
          }
        ],
        "start": 4942,
        "end": 4978
      },
      "declare": false,
      "start": 4913,
      "end": 4979
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NavBottomListItem",
        "optional": false,
        "typeAnnotation": null,
        "start": 4991,
        "end": 5008
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "TheTypeFromMaterialUI",
            "optional": false,
            "typeAnnotation": null,
            "start": 5017,
            "end": 5038
          },
          "typeArguments": null,
          "start": 5017,
          "end": 5038
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 5045,
              "end": 5050
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5052,
                "end": 5058
              },
              "start": 5050,
              "end": 5058
            },
            "accessibility": null,
            "static": false,
            "start": 5045,
            "end": 5059
          }
        ],
        "start": 5039,
        "end": 5061
      },
      "declare": false,
      "start": 4981,
      "end": 5061
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UA",
        "optional": false,
        "typeAnnotation": null,
        "start": 5090,
        "end": 5092
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUndefinedKeyword",
        "start": 5095,
        "end": 5104
      },
      "declare": false,
      "start": 5085,
      "end": 5105
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UB",
        "optional": false,
        "typeAnnotation": null,
        "start": 5139,
        "end": 5141
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 5146,
                "end": 5147
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 5150,
                  "end": 5155
                },
                "start": 5148,
                "end": 5155
              },
              "accessibility": null,
              "static": false,
              "start": 5146,
              "end": 5155
            }
          ],
          "start": 5144,
          "end": 5157
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "x",
            "raw": "'x'",
            "start": 5158,
            "end": 5161
          },
          "start": 5158,
          "end": 5161
        },
        "start": 5144,
        "end": 5162
      },
      "declare": false,
      "start": 5134,
      "end": 5163
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UC",
        "optional": false,
        "typeAnnotation": null,
        "start": 5206,
        "end": 5208
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "UA",
              "optional": false,
              "typeAnnotation": null,
              "start": 5211,
              "end": 5213
            },
            "typeArguments": null,
            "start": 5211,
            "end": 5213
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "UB",
              "optional": false,
              "typeAnnotation": null,
              "start": 5216,
              "end": 5218
            },
            "typeArguments": null,
            "start": 5216,
            "end": 5218
          }
        ],
        "start": 5211,
        "end": 5218
      },
      "declare": false,
      "start": 5201,
      "end": 5219
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 5233
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8,
    "range": [
      0,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 9,
    "end": 11,
    "range": [
      9,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 12,
    "end": 15,
    "range": [
      12,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 23,
    "end": 29,
    "range": [
      23,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 35,
    "end": 41,
    "range": [
      35,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 44,
    "end": 53,
    "range": [
      44,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 63,
    "end": 66,
    "range": [
      63,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 71,
    "end": 74,
    "range": [
      71,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Keyword",
    "value": "let",
    "start": 105,
    "end": 108,
    "range": [
      105,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 113,
    "end": 116,
    "range": [
      113,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 147,
    "end": 150,
    "range": [
      147,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 155,
    "end": 162,
    "range": [
      155,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 168,
    "end": 171,
    "range": [
      168,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 176,
    "end": 183,
    "range": [
      176,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 189,
    "end": 192,
    "range": [
      189,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 197,
    "end": 206,
    "range": [
      197,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 222,
    "end": 225,
    "range": [
      222,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 230,
    "end": 239,
    "range": [
      230,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
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
    "type": "Keyword",
    "value": "function",
    "start": 244,
    "end": 252,
    "range": [
      244,
      252
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 253,
    "end": 255,
    "range": [
      253,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 256,
    "end": 259,
    "range": [
      256,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 267,
    "end": 273,
    "range": [
      267,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 279,
    "end": 285,
    "range": [
      279,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 288,
    "end": 297,
    "range": [
      288,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 307,
    "end": 310,
    "range": [
      307,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 313,
    "end": 316,
    "range": [
      313,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 322,
    "end": 325,
    "range": [
      322,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 330,
    "end": 333,
    "range": [
      330,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 351,
    "end": 354,
    "range": [
      351,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 359,
    "end": 362,
    "range": [
      359,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 370,
    "end": 372,
    "range": [
      370,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 374,
    "end": 377,
    "range": [
      374,
      377
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 378,
    "end": 380,
    "range": [
      378,
      380
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 381,
    "end": 384,
    "range": [
      381,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 396,
    "end": 399,
    "range": [
      396,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 411,
    "end": 414,
    "range": [
      411,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 419,
    "end": 422,
    "range": [
      419,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 436,
    "end": 440,
    "range": [
      436,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 451,
    "end": 454,
    "range": [
      451,
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
    "value": "obj",
    "start": 466,
    "end": 469,
    "range": [
      466,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 474,
    "end": 477,
    "range": [
      474,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 501,
    "end": 503,
    "range": [
      501,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 505,
    "end": 508,
    "range": [
      505,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Identifier",
    "value": "hasOwnProperty",
    "start": 509,
    "end": 523,
    "range": [
      509,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 524,
    "end": 527,
    "range": [
      524,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 540,
    "end": 543,
    "range": [
      540,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 543,
    "end": 544,
    "range": [
      543,
      544
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 555,
    "end": 558,
    "range": [
      555,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 563,
    "end": 566,
    "range": [
      563,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 580,
    "end": 584,
    "range": [
      580,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 595,
    "end": 598,
    "range": [
      595,
      598
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 610,
    "end": 613,
    "range": [
      610,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 618,
    "end": 621,
    "range": [
      618,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 645,
    "end": 647,
    "range": [
      645,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 649,
    "end": 652,
    "range": [
      649,
      652
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 653,
    "end": 655,
    "range": [
      653,
      655
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 656,
    "end": 659,
    "range": [
      656,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 671,
    "end": 674,
    "range": [
      671,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 686,
    "end": 689,
    "range": [
      686,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 694,
    "end": 697,
    "range": [
      694,
      697
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 711,
    "end": 715,
    "range": [
      711,
      715
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 726,
    "end": 729,
    "range": [
      726,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 741,
    "end": 744,
    "range": [
      741,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 749,
    "end": 752,
    "range": [
      749,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 766,
    "end": 768,
    "range": [
      766,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 770,
    "end": 773,
    "range": [
      770,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 773,
    "end": 774,
    "range": [
      773,
      774
    ]
  },
  {
    "type": "Identifier",
    "value": "hasOwnProperty",
    "start": 774,
    "end": 788,
    "range": [
      774,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 789,
    "end": 792,
    "range": [
      789,
      792
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 805,
    "end": 808,
    "range": [
      805,
      808
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 808,
    "end": 809,
    "range": [
      808,
      809
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 820,
    "end": 823,
    "range": [
      820,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 828,
    "end": 831,
    "range": [
      828,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 845,
    "end": 849,
    "range": [
      845,
      849
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 850,
    "end": 851,
    "range": [
      850,
      851
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 860,
    "end": 863,
    "range": [
      860,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 875,
    "end": 878,
    "range": [
      875,
      878
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 883,
    "end": 886,
    "range": [
      883,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 887,
    "end": 888,
    "range": [
      887,
      888
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 894,
    "end": 895,
    "range": [
      894,
      895
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 899,
    "end": 907,
    "range": [
      899,
      907
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 908,
    "end": 910,
    "range": [
      908,
      910
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 910,
    "end": 911,
    "range": [
      910,
      911
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 911,
    "end": 914,
    "range": [
      911,
      914
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 914,
    "end": 915,
    "range": [
      914,
      915
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 916,
    "end": 923,
    "range": [
      916,
      923
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 923,
    "end": 924,
    "range": [
      923,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 926,
    "end": 927,
    "range": [
      926,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 929,
    "end": 935,
    "range": [
      929,
      935
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 937,
    "end": 938,
    "range": [
      937,
      938
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 940,
    "end": 946,
    "range": [
      940,
      946
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 949,
    "end": 958,
    "range": [
      949,
      958
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 969,
    "end": 972,
    "range": [
      969,
      972
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 977,
    "end": 980,
    "range": [
      977,
      980
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 980,
    "end": 981,
    "range": [
      980,
      981
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 981,
    "end": 982,
    "range": [
      981,
      982
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 982,
    "end": 983,
    "range": [
      982,
      983
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1011,
    "end": 1014,
    "range": [
      1011,
      1014
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1015,
    "end": 1016,
    "range": [
      1015,
      1016
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1017,
    "end": 1018,
    "range": [
      1017,
      1018
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1019,
    "end": 1022,
    "range": [
      1019,
      1022
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1022,
    "end": 1023,
    "range": [
      1022,
      1023
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1023,
    "end": 1024,
    "range": [
      1023,
      1024
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1024,
    "end": 1025,
    "range": [
      1024,
      1025
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1053,
    "end": 1056,
    "range": [
      1053,
      1056
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1056,
    "end": 1057,
    "range": [
      1056,
      1057
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1057,
    "end": 1058,
    "range": [
      1057,
      1058
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 1061,
    "end": 1068,
    "range": [
      1061,
      1068
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1074,
    "end": 1077,
    "range": [
      1074,
      1077
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1078,
    "end": 1079,
    "range": [
      1078,
      1079
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1080,
    "end": 1081,
    "range": [
      1080,
      1081
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 1082,
    "end": 1089,
    "range": [
      1082,
      1089
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1089,
    "end": 1090,
    "range": [
      1089,
      1090
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1095,
    "end": 1098,
    "range": [
      1095,
      1098
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1098,
    "end": 1099,
    "range": [
      1098,
      1099
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1103,
    "end": 1112,
    "range": [
      1103,
      1112
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1128,
    "end": 1131,
    "range": [
      1128,
      1131
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1131,
    "end": 1132,
    "range": [
      1131,
      1132
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1132,
    "end": 1133,
    "range": [
      1132,
      1133
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1136,
    "end": 1145,
    "range": [
      1136,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1145,
    "end": 1146,
    "range": [
      1145,
      1146
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1147,
    "end": 1148,
    "range": [
      1147,
      1148
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1150,
    "end": 1158,
    "range": [
      1150,
      1158
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 1159,
    "end": 1161,
    "range": [
      1159,
      1161
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1161,
    "end": 1162,
    "range": [
      1161,
      1162
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1162,
    "end": 1163,
    "range": [
      1162,
      1163
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1163,
    "end": 1164,
    "range": [
      1163,
      1164
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1166,
    "end": 1172,
    "range": [
      1166,
      1172
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1172,
    "end": 1173,
    "range": [
      1172,
      1173
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1173,
    "end": 1174,
    "range": [
      1173,
      1174
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1174,
    "end": 1175,
    "range": [
      1174,
      1175
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1176,
    "end": 1177,
    "range": [
      1176,
      1177
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1182,
    "end": 1185,
    "range": [
      1182,
      1185
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1186,
    "end": 1187,
    "range": [
      1186,
      1187
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1188,
    "end": 1189,
    "range": [
      1188,
      1189
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1190,
    "end": 1191,
    "range": [
      1190,
      1191
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1191,
    "end": 1192,
    "range": [
      1191,
      1192
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1192,
    "end": 1193,
    "range": [
      1192,
      1193
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1193,
    "end": 1194,
    "range": [
      1193,
      1194
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1194,
    "end": 1195,
    "range": [
      1194,
      1195
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1224,
    "end": 1225,
    "range": [
      1224,
      1225
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1225,
    "end": 1226,
    "range": [
      1225,
      1226
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1226,
    "end": 1227,
    "range": [
      1226,
      1227
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 1230,
    "end": 1237,
    "range": [
      1230,
      1237
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1237,
    "end": 1238,
    "range": [
      1237,
      1238
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1243,
    "end": 1244,
    "range": [
      1243,
      1244
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1244,
    "end": 1245,
    "range": [
      1244,
      1245
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1245,
    "end": 1246,
    "range": [
      1245,
      1246
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1246,
    "end": 1247,
    "range": [
      1246,
      1247
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1250,
    "end": 1259,
    "range": [
      1250,
      1259
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1259,
    "end": 1260,
    "range": [
      1259,
      1260
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1271,
    "end": 1272,
    "range": [
      1271,
      1272
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1274,
    "end": 1282,
    "range": [
      1274,
      1282
    ]
  },
  {
    "type": "Identifier",
    "value": "f4a",
    "start": 1283,
    "end": 1286,
    "range": [
      1283,
      1286
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1286,
    "end": 1287,
    "range": [
      1286,
      1287
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1287,
    "end": 1289,
    "range": [
      1287,
      1289
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1291,
    "end": 1292,
    "range": [
      1291,
      1292
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1292,
    "end": 1298,
    "range": [
      1292,
      1298
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1298,
    "end": 1299,
    "range": [
      1298,
      1299
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1300,
    "end": 1306,
    "range": [
      1300,
      1306
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1306,
    "end": 1307,
    "range": [
      1306,
      1307
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1307,
    "end": 1308,
    "range": [
      1307,
      1308
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1308,
    "end": 1309,
    "range": [
      1308,
      1309
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1310,
    "end": 1312,
    "range": [
      1310,
      1312
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1312,
    "end": 1313,
    "range": [
      1312,
      1313
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1314,
    "end": 1315,
    "range": [
      1314,
      1315
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1315,
    "end": 1321,
    "range": [
      1315,
      1321
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1321,
    "end": 1322,
    "range": [
      1321,
      1322
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1323,
    "end": 1329,
    "range": [
      1323,
      1329
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1329,
    "end": 1330,
    "range": [
      1329,
      1330
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1330,
    "end": 1331,
    "range": [
      1330,
      1331
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1332,
    "end": 1338,
    "range": [
      1332,
      1338
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1338,
    "end": 1339,
    "range": [
      1338,
      1339
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1339,
    "end": 1340,
    "range": [
      1339,
      1340
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1340,
    "end": 1341,
    "range": [
      1340,
      1341
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1342,
    "end": 1343,
    "range": [
      1342,
      1343
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1348,
    "end": 1350,
    "range": [
      1348,
      1350
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1351,
    "end": 1352,
    "range": [
      1351,
      1352
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1353,
    "end": 1355,
    "range": [
      1353,
      1355
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1355,
    "end": 1356,
    "range": [
      1355,
      1356
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1392,
    "end": 1393,
    "range": [
      1392,
      1393
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1395,
    "end": 1403,
    "range": [
      1395,
      1403
    ]
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 1404,
    "end": 1406,
    "range": [
      1404,
      1406
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1406,
    "end": 1407,
    "range": [
      1406,
      1407
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1407,
    "end": 1408,
    "range": [
      1407,
      1408
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1408,
    "end": 1409,
    "range": [
      1408,
      1409
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1410,
    "end": 1411,
    "range": [
      1410,
      1411
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1411,
    "end": 1417,
    "range": [
      1411,
      1417
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1417,
    "end": 1418,
    "range": [
      1417,
      1418
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1419,
    "end": 1425,
    "range": [
      1419,
      1425
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1425,
    "end": 1426,
    "range": [
      1425,
      1426
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1426,
    "end": 1427,
    "range": [
      1426,
      1427
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1428,
    "end": 1435,
    "range": [
      1428,
      1435
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1435,
    "end": 1436,
    "range": [
      1435,
      1436
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1436,
    "end": 1437,
    "range": [
      1436,
      1437
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1437,
    "end": 1438,
    "range": [
      1437,
      1438
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1439,
    "end": 1440,
    "range": [
      1439,
      1440
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1445,
    "end": 1446,
    "range": [
      1445,
      1446
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1447,
    "end": 1448,
    "range": [
      1447,
      1448
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1449,
    "end": 1450,
    "range": [
      1449,
      1450
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1450,
    "end": 1452,
    "range": [
      1450,
      1452
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1452,
    "end": 1453,
    "range": [
      1452,
      1453
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1453,
    "end": 1454,
    "range": [
      1453,
      1454
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1459,
    "end": 1460,
    "range": [
      1459,
      1460
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1463,
    "end": 1464,
    "range": [
      1463,
      1464
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1464,
    "end": 1466,
    "range": [
      1464,
      1466
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1466,
    "end": 1467,
    "range": [
      1466,
      1467
    ]
  },
  {
    "type": "String",
    "value": "'abc'",
    "start": 1468,
    "end": 1473,
    "range": [
      1468,
      1473
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1473,
    "end": 1474,
    "range": [
      1473,
      1474
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1474,
    "end": 1475,
    "range": [
      1474,
      1475
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1480,
    "end": 1481,
    "range": [
      1480,
      1481
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1482,
    "end": 1483,
    "range": [
      1482,
      1483
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1484,
    "end": 1485,
    "range": [
      1484,
      1485
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1485,
    "end": 1487,
    "range": [
      1485,
      1487
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1487,
    "end": 1488,
    "range": [
      1487,
      1488
    ]
  },
  {
    "type": "String",
    "value": "'abc'",
    "start": 1489,
    "end": 1494,
    "range": [
      1489,
      1494
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1494,
    "end": 1495,
    "range": [
      1494,
      1495
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1496,
    "end": 1500,
    "range": [
      1496,
      1500
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1500,
    "end": 1501,
    "range": [
      1500,
      1501
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1501,
    "end": 1502,
    "range": [
      1501,
      1502
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1507,
    "end": 1508,
    "range": [
      1507,
      1508
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1509,
    "end": 1510,
    "range": [
      1509,
      1510
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1511,
    "end": 1512,
    "range": [
      1511,
      1512
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1512,
    "end": 1514,
    "range": [
      1512,
      1514
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1514,
    "end": 1515,
    "range": [
      1514,
      1515
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1516,
    "end": 1517,
    "range": [
      1516,
      1517
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1517,
    "end": 1518,
    "range": [
      1517,
      1518
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1518,
    "end": 1519,
    "range": [
      1518,
      1519
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1524,
    "end": 1525,
    "range": [
      1524,
      1525
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1526,
    "end": 1527,
    "range": [
      1526,
      1527
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1528,
    "end": 1529,
    "range": [
      1528,
      1529
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1529,
    "end": 1531,
    "range": [
      1529,
      1531
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1531,
    "end": 1532,
    "range": [
      1531,
      1532
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1533,
    "end": 1534,
    "range": [
      1533,
      1534
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1535,
    "end": 1536,
    "range": [
      1535,
      1536
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1536,
    "end": 1537,
    "range": [
      1536,
      1537
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1537,
    "end": 1538,
    "range": [
      1537,
      1538
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1543,
    "end": 1544,
    "range": [
      1543,
      1544
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1545,
    "end": 1546,
    "range": [
      1545,
      1546
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1547,
    "end": 1548,
    "range": [
      1547,
      1548
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1548,
    "end": 1550,
    "range": [
      1548,
      1550
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1550,
    "end": 1551,
    "range": [
      1550,
      1551
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1552,
    "end": 1553,
    "range": [
      1552,
      1553
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1554,
    "end": 1555,
    "range": [
      1554,
      1555
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1556,
    "end": 1557,
    "range": [
      1556,
      1557
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1557,
    "end": 1558,
    "range": [
      1557,
      1558
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1558,
    "end": 1559,
    "range": [
      1558,
      1559
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1574,
    "end": 1575,
    "range": [
      1574,
      1575
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1576,
    "end": 1577,
    "range": [
      1576,
      1577
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1578,
    "end": 1579,
    "range": [
      1578,
      1579
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1579,
    "end": 1580,
    "range": [
      1579,
      1580
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1581,
    "end": 1582,
    "range": [
      1581,
      1582
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1583,
    "end": 1587,
    "range": [
      1583,
      1587
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1587,
    "end": 1588,
    "range": [
      1587,
      1588
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1588,
    "end": 1589,
    "range": [
      1588,
      1589
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1604,
    "end": 1605,
    "range": [
      1604,
      1605
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1606,
    "end": 1607,
    "range": [
      1606,
      1607
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1608,
    "end": 1609,
    "range": [
      1608,
      1609
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1609,
    "end": 1611,
    "range": [
      1609,
      1611
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1611,
    "end": 1612,
    "range": [
      1611,
      1612
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1613,
    "end": 1622,
    "range": [
      1613,
      1622
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1622,
    "end": 1623,
    "range": [
      1622,
      1623
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1624,
    "end": 1628,
    "range": [
      1624,
      1628
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1628,
    "end": 1629,
    "range": [
      1628,
      1629
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1629,
    "end": 1630,
    "range": [
      1629,
      1630
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1641,
    "end": 1642,
    "range": [
      1641,
      1642
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1644,
    "end": 1652,
    "range": [
      1644,
      1652
    ]
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 1653,
    "end": 1655,
    "range": [
      1653,
      1655
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1655,
    "end": 1656,
    "range": [
      1655,
      1656
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1656,
    "end": 1657,
    "range": [
      1656,
      1657
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1658,
    "end": 1659,
    "range": [
      1658,
      1659
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1664,
    "end": 1669,
    "range": [
      1664,
      1669
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1670,
    "end": 1672,
    "range": [
      1670,
      1672
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1673,
    "end": 1674,
    "range": [
      1673,
      1674
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1675,
    "end": 1676,
    "range": [
      1675,
      1676
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1676,
    "end": 1677,
    "range": [
      1676,
      1677
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1677,
    "end": 1678,
    "range": [
      1677,
      1678
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1679,
    "end": 1680,
    "range": [
      1679,
      1680
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1680,
    "end": 1681,
    "range": [
      1680,
      1681
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1682,
    "end": 1684,
    "range": [
      1682,
      1684
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1685,
    "end": 1690,
    "range": [
      1685,
      1690
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1690,
    "end": 1691,
    "range": [
      1690,
      1691
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1696,
    "end": 1701,
    "range": [
      1696,
      1701
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1702,
    "end": 1704,
    "range": [
      1702,
      1704
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1705,
    "end": 1706,
    "range": [
      1705,
      1706
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1707,
    "end": 1708,
    "range": [
      1707,
      1708
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1708,
    "end": 1709,
    "range": [
      1708,
      1709
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1709,
    "end": 1710,
    "range": [
      1709,
      1710
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1711,
    "end": 1712,
    "range": [
      1711,
      1712
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1712,
    "end": 1713,
    "range": [
      1712,
      1713
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1714,
    "end": 1715,
    "range": [
      1714,
      1715
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1715,
    "end": 1716,
    "range": [
      1715,
      1716
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1717,
    "end": 1719,
    "range": [
      1717,
      1719
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1720,
    "end": 1725,
    "range": [
      1720,
      1725
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1725,
    "end": 1726,
    "range": [
      1725,
      1726
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1731,
    "end": 1736,
    "range": [
      1731,
      1736
    ]
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1737,
    "end": 1739,
    "range": [
      1737,
      1739
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1740,
    "end": 1741,
    "range": [
      1740,
      1741
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1742,
    "end": 1743,
    "range": [
      1742,
      1743
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1743,
    "end": 1744,
    "range": [
      1743,
      1744
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1744,
    "end": 1745,
    "range": [
      1744,
      1745
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1746,
    "end": 1747,
    "range": [
      1746,
      1747
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1747,
    "end": 1748,
    "range": [
      1747,
      1748
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1749,
    "end": 1750,
    "range": [
      1749,
      1750
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1751,
    "end": 1752,
    "range": [
      1751,
      1752
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1752,
    "end": 1753,
    "range": [
      1752,
      1753
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1754,
    "end": 1756,
    "range": [
      1754,
      1756
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1757,
    "end": 1762,
    "range": [
      1757,
      1762
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1762,
    "end": 1763,
    "range": [
      1762,
      1763
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1768,
    "end": 1773,
    "range": [
      1768,
      1773
    ]
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1774,
    "end": 1776,
    "range": [
      1774,
      1776
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1777,
    "end": 1778,
    "range": [
      1777,
      1778
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1779,
    "end": 1780,
    "range": [
      1779,
      1780
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1780,
    "end": 1781,
    "range": [
      1780,
      1781
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1781,
    "end": 1782,
    "range": [
      1781,
      1782
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1783,
    "end": 1784,
    "range": [
      1783,
      1784
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1785,
    "end": 1786,
    "range": [
      1785,
      1786
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1786,
    "end": 1787,
    "range": [
      1786,
      1787
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1788,
    "end": 1790,
    "range": [
      1788,
      1790
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1791,
    "end": 1796,
    "range": [
      1791,
      1796
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1796,
    "end": 1797,
    "range": [
      1796,
      1797
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1802,
    "end": 1807,
    "range": [
      1802,
      1807
    ]
  },
  {
    "type": "Identifier",
    "value": "t5",
    "start": 1808,
    "end": 1810,
    "range": [
      1808,
      1810
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1811,
    "end": 1812,
    "range": [
      1811,
      1812
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1813,
    "end": 1814,
    "range": [
      1813,
      1814
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1814,
    "end": 1815,
    "range": [
      1814,
      1815
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1815,
    "end": 1816,
    "range": [
      1815,
      1816
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1817,
    "end": 1818,
    "range": [
      1817,
      1818
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1819,
    "end": 1820,
    "range": [
      1819,
      1820
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1821,
    "end": 1822,
    "range": [
      1821,
      1822
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1822,
    "end": 1823,
    "range": [
      1822,
      1823
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1824,
    "end": 1826,
    "range": [
      1824,
      1826
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1827,
    "end": 1832,
    "range": [
      1827,
      1832
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1832,
    "end": 1833,
    "range": [
      1832,
      1833
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1834,
    "end": 1835,
    "range": [
      1834,
      1835
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1861,
    "end": 1865,
    "range": [
      1861,
      1865
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 1866,
    "end": 1871,
    "range": [
      1866,
      1871
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1872,
    "end": 1873,
    "range": [
      1872,
      1873
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1874,
    "end": 1875,
    "range": [
      1874,
      1875
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1880,
    "end": 1883,
    "range": [
      1880,
      1883
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1883,
    "end": 1884,
    "range": [
      1883,
      1884
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1885,
    "end": 1891,
    "range": [
      1885,
      1891
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1891,
    "end": 1892,
    "range": [
      1891,
      1892
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1897,
    "end": 1900,
    "range": [
      1897,
      1900
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1900,
    "end": 1901,
    "range": [
      1900,
      1901
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1902,
    "end": 1908,
    "range": [
      1902,
      1908
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1909,
    "end": 1910,
    "range": [
      1909,
      1910
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1912,
    "end": 1916,
    "range": [
      1912,
      1916
    ]
  },
  {
    "type": "Identifier",
    "value": "InputProps",
    "start": 1917,
    "end": 1927,
    "range": [
      1917,
      1927
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1928,
    "end": 1929,
    "range": [
      1928,
      1929
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1930,
    "end": 1931,
    "range": [
      1930,
      1931
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1936,
    "end": 1939,
    "range": [
      1936,
      1939
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1939,
    "end": 1940,
    "range": [
      1939,
      1940
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1940,
    "end": 1941,
    "range": [
      1940,
      1941
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1942,
    "end": 1948,
    "range": [
      1942,
      1948
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1948,
    "end": 1949,
    "range": [
      1948,
      1949
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1954,
    "end": 1957,
    "range": [
      1954,
      1957
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1957,
    "end": 1958,
    "range": [
      1957,
      1958
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1959,
    "end": 1965,
    "range": [
      1959,
      1965
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1965,
    "end": 1966,
    "range": [
      1965,
      1966
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1967,
    "end": 1968,
    "range": [
      1967,
      1968
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1970,
    "end": 1975,
    "range": [
      1970,
      1975
    ]
  },
  {
    "type": "Identifier",
    "value": "defaultProps",
    "start": 1976,
    "end": 1988,
    "range": [
      1976,
      1988
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1988,
    "end": 1989,
    "range": [
      1988,
      1989
    ]
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 1990,
    "end": 1994,
    "range": [
      1990,
      1994
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1994,
    "end": 1995,
    "range": [
      1994,
      1995
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 1995,
    "end": 2000,
    "range": [
      1995,
      2000
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2000,
    "end": 2001,
    "range": [
      2000,
      2001
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 2002,
    "end": 2007,
    "range": [
      2002,
      2007
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2007,
    "end": 2008,
    "range": [
      2007,
      2008
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2009,
    "end": 2010,
    "range": [
      2009,
      2010
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2011,
    "end": 2012,
    "range": [
      2011,
      2012
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2013,
    "end": 2016,
    "range": [
      2013,
      2016
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2016,
    "end": 2017,
    "range": [
      2016,
      2017
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 2018,
    "end": 2023,
    "range": [
      2018,
      2023
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2024,
    "end": 2025,
    "range": [
      2024,
      2025
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2025,
    "end": 2026,
    "range": [
      2025,
      2026
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2027,
    "end": 2032,
    "range": [
      2027,
      2032
    ]
  },
  {
    "type": "Identifier",
    "value": "inputProps",
    "start": 2033,
    "end": 2043,
    "range": [
      2033,
      2043
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2043,
    "end": 2044,
    "range": [
      2043,
      2044
    ]
  },
  {
    "type": "Identifier",
    "value": "InputProps",
    "start": 2045,
    "end": 2055,
    "range": [
      2045,
      2055
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2056,
    "end": 2057,
    "range": [
      2056,
      2057
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2058,
    "end": 2059,
    "range": [
      2058,
      2059
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2060,
    "end": 2063,
    "range": [
      2060,
      2063
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2063,
    "end": 2064,
    "range": [
      2063,
      2064
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2065,
    "end": 2074,
    "range": [
      2065,
      2074
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2074,
    "end": 2075,
    "range": [
      2074,
      2075
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2076,
    "end": 2079,
    "range": [
      2076,
      2079
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2079,
    "end": 2080,
    "range": [
      2079,
      2080
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 2081,
    "end": 2086,
    "range": [
      2081,
      2086
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2087,
    "end": 2088,
    "range": [
      2087,
      2088
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2088,
    "end": 2089,
    "range": [
      2088,
      2089
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2090,
    "end": 2095,
    "range": [
      2090,
      2095
    ]
  },
  {
    "type": "Identifier",
    "value": "completeProps",
    "start": 2096,
    "end": 2109,
    "range": [
      2096,
      2109
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2109,
    "end": 2110,
    "range": [
      2109,
      2110
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 2111,
    "end": 2116,
    "range": [
      2111,
      2116
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2117,
    "end": 2118,
    "range": [
      2117,
      2118
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2119,
    "end": 2120,
    "range": [
      2119,
      2120
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2121,
    "end": 2124,
    "range": [
      2121,
      2124
    ]
  },
  {
    "type": "Identifier",
    "value": "defaultProps",
    "start": 2124,
    "end": 2136,
    "range": [
      2124,
      2136
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2136,
    "end": 2137,
    "range": [
      2136,
      2137
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2138,
    "end": 2141,
    "range": [
      2138,
      2141
    ]
  },
  {
    "type": "Identifier",
    "value": "inputProps",
    "start": 2141,
    "end": 2151,
    "range": [
      2141,
      2151
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2152,
    "end": 2153,
    "range": [
      2152,
      2153
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2153,
    "end": 2154,
    "range": [
      2153,
      2154
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2180,
    "end": 2185,
    "range": [
      2180,
      2185
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 2186,
    "end": 2188,
    "range": [
      2186,
      2188
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2188,
    "end": 2189,
    "range": [
      2188,
      2189
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2190,
    "end": 2191,
    "range": [
      2190,
      2191
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2191,
    "end": 2197,
    "range": [
      2191,
      2197
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2197,
    "end": 2198,
    "range": [
      2197,
      2198
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2199,
    "end": 2205,
    "range": [
      2199,
      2205
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2205,
    "end": 2206,
    "range": [
      2205,
      2206
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2206,
    "end": 2207,
    "range": [
      2206,
      2207
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2208,
    "end": 2215,
    "range": [
      2208,
      2215
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2215,
    "end": 2216,
    "range": [
      2215,
      2216
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2216,
    "end": 2217,
    "range": [
      2216,
      2217
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2218,
    "end": 2219,
    "range": [
      2218,
      2219
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2220,
    "end": 2221,
    "range": [
      2220,
      2221
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2221,
    "end": 2222,
    "range": [
      2221,
      2222
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2222,
    "end": 2223,
    "range": [
      2222,
      2223
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2223,
    "end": 2224,
    "range": [
      2223,
      2224
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2225,
    "end": 2230,
    "range": [
      2225,
      2230
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 2231,
    "end": 2233,
    "range": [
      2231,
      2233
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2233,
    "end": 2234,
    "range": [
      2233,
      2234
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2235,
    "end": 2236,
    "range": [
      2235,
      2236
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2236,
    "end": 2242,
    "range": [
      2236,
      2242
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2242,
    "end": 2243,
    "range": [
      2242,
      2243
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2244,
    "end": 2250,
    "range": [
      2244,
      2250
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2250,
    "end": 2251,
    "range": [
      2250,
      2251
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2251,
    "end": 2252,
    "range": [
      2251,
      2252
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2253,
    "end": 2260,
    "range": [
      2253,
      2260
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2260,
    "end": 2261,
    "range": [
      2260,
      2261
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2261,
    "end": 2262,
    "range": [
      2261,
      2262
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2263,
    "end": 2264,
    "range": [
      2263,
      2264
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2265,
    "end": 2266,
    "range": [
      2265,
      2266
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2266,
    "end": 2267,
    "range": [
      2266,
      2267
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2267,
    "end": 2268,
    "range": [
      2267,
      2268
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2269,
    "end": 2278,
    "range": [
      2269,
      2278
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2278,
    "end": 2279,
    "range": [
      2278,
      2279
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2279,
    "end": 2280,
    "range": [
      2279,
      2280
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2281,
    "end": 2286,
    "range": [
      2281,
      2286
    ]
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 2287,
    "end": 2289,
    "range": [
      2287,
      2289
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2289,
    "end": 2290,
    "range": [
      2289,
      2290
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2291,
    "end": 2292,
    "range": [
      2291,
      2292
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2292,
    "end": 2298,
    "range": [
      2292,
      2298
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2298,
    "end": 2299,
    "range": [
      2298,
      2299
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2300,
    "end": 2306,
    "range": [
      2300,
      2306
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2306,
    "end": 2307,
    "range": [
      2306,
      2307
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2307,
    "end": 2308,
    "range": [
      2307,
      2308
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2309,
    "end": 2316,
    "range": [
      2309,
      2316
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2316,
    "end": 2317,
    "range": [
      2316,
      2317
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2317,
    "end": 2318,
    "range": [
      2317,
      2318
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2319,
    "end": 2320,
    "range": [
      2319,
      2320
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2321,
    "end": 2322,
    "range": [
      2321,
      2322
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2322,
    "end": 2323,
    "range": [
      2322,
      2323
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2323,
    "end": 2324,
    "range": [
      2323,
      2324
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2325,
    "end": 2333,
    "range": [
      2325,
      2333
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2333,
    "end": 2334,
    "range": [
      2333,
      2334
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2335,
    "end": 2344,
    "range": [
      2335,
      2344
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2344,
    "end": 2345,
    "range": [
      2344,
      2345
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2345,
    "end": 2346,
    "range": [
      2345,
      2346
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2347,
    "end": 2352,
    "range": [
      2347,
      2352
    ]
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 2353,
    "end": 2355,
    "range": [
      2353,
      2355
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2355,
    "end": 2356,
    "range": [
      2355,
      2356
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2357,
    "end": 2358,
    "range": [
      2357,
      2358
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2358,
    "end": 2364,
    "range": [
      2358,
      2364
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2364,
    "end": 2365,
    "range": [
      2364,
      2365
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2366,
    "end": 2372,
    "range": [
      2366,
      2372
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2372,
    "end": 2373,
    "range": [
      2372,
      2373
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2373,
    "end": 2374,
    "range": [
      2373,
      2374
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2375,
    "end": 2382,
    "range": [
      2375,
      2382
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2382,
    "end": 2383,
    "range": [
      2382,
      2383
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2383,
    "end": 2384,
    "range": [
      2383,
      2384
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2385,
    "end": 2386,
    "range": [
      2385,
      2386
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2387,
    "end": 2388,
    "range": [
      2387,
      2388
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2388,
    "end": 2389,
    "range": [
      2388,
      2389
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2389,
    "end": 2390,
    "range": [
      2389,
      2390
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2391,
    "end": 2400,
    "range": [
      2391,
      2400
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2400,
    "end": 2401,
    "range": [
      2400,
      2401
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2402,
    "end": 2411,
    "range": [
      2402,
      2411
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2411,
    "end": 2412,
    "range": [
      2411,
      2412
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2412,
    "end": 2413,
    "range": [
      2412,
      2413
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2439,
    "end": 2444,
    "range": [
      2439,
      2444
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2445,
    "end": 2446,
    "range": [
      2445,
      2446
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2446,
    "end": 2447,
    "range": [
      2446,
      2447
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2448,
    "end": 2449,
    "range": [
      2448,
      2449
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2450,
    "end": 2453,
    "range": [
      2450,
      2453
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2453,
    "end": 2454,
    "range": [
      2453,
      2454
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2454,
    "end": 2455,
    "range": [
      2454,
      2455
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2456,
    "end": 2462,
    "range": [
      2456,
      2462
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2463,
    "end": 2464,
    "range": [
      2463,
      2464
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2465,
    "end": 2466,
    "range": [
      2465,
      2466
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2467,
    "end": 2468,
    "range": [
      2467,
      2468
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2469,
    "end": 2472,
    "range": [
      2469,
      2472
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2472,
    "end": 2473,
    "range": [
      2472,
      2473
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2474,
    "end": 2483,
    "range": [
      2474,
      2483
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2484,
    "end": 2485,
    "range": [
      2484,
      2485
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2485,
    "end": 2486,
    "range": [
      2485,
      2486
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2487,
    "end": 2492,
    "range": [
      2487,
      2492
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2493,
    "end": 2494,
    "range": [
      2493,
      2494
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2494,
    "end": 2495,
    "range": [
      2494,
      2495
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2496,
    "end": 2497,
    "range": [
      2496,
      2497
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2498,
    "end": 2501,
    "range": [
      2498,
      2501
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2501,
    "end": 2502,
    "range": [
      2501,
      2502
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2503,
    "end": 2509,
    "range": [
      2503,
      2509
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2510,
    "end": 2511,
    "range": [
      2510,
      2511
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2512,
    "end": 2513,
    "range": [
      2512,
      2513
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2514,
    "end": 2515,
    "range": [
      2514,
      2515
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2516,
    "end": 2519,
    "range": [
      2516,
      2519
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2519,
    "end": 2520,
    "range": [
      2519,
      2520
    ]
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 2521,
    "end": 2524,
    "range": [
      2521,
      2524
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2524,
    "end": 2525,
    "range": [
      2524,
      2525
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2526,
    "end": 2529,
    "range": [
      2526,
      2529
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2529,
    "end": 2530,
    "range": [
      2529,
      2530
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2531,
    "end": 2532,
    "range": [
      2531,
      2532
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2532,
    "end": 2533,
    "range": [
      2532,
      2533
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2587,
    "end": 2596,
    "range": [
      2587,
      2596
    ]
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 2597,
    "end": 2601,
    "range": [
      2597,
      2601
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2602,
    "end": 2603,
    "range": [
      2602,
      2603
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2608,
    "end": 2609,
    "range": [
      2608,
      2609
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2609,
    "end": 2612,
    "range": [
      2609,
      2612
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2612,
    "end": 2613,
    "range": [
      2612,
      2613
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2614,
    "end": 2620,
    "range": [
      2614,
      2620
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2620,
    "end": 2621,
    "range": [
      2620,
      2621
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2621,
    "end": 2622,
    "range": [
      2621,
      2622
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2623,
    "end": 2629,
    "range": [
      2623,
      2629
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2629,
    "end": 2630,
    "range": [
      2629,
      2630
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2635,
    "end": 2638,
    "range": [
      2635,
      2638
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2638,
    "end": 2639,
    "range": [
      2638,
      2639
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2639,
    "end": 2640,
    "range": [
      2639,
      2640
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2641,
    "end": 2647,
    "range": [
      2641,
      2647
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2647,
    "end": 2648,
    "range": [
      2647,
      2648
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2670,
    "end": 2673,
    "range": [
      2670,
      2673
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2673,
    "end": 2674,
    "range": [
      2673,
      2674
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2674,
    "end": 2675,
    "range": [
      2674,
      2675
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2676,
    "end": 2682,
    "range": [
      2676,
      2682
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2683,
    "end": 2684,
    "range": [
      2683,
      2684
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2685,
    "end": 2694,
    "range": [
      2685,
      2694
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2694,
    "end": 2695,
    "range": [
      2694,
      2695
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2706,
    "end": 2707,
    "range": [
      2706,
      2707
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2754,
    "end": 2761,
    "range": [
      2754,
      2761
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2762,
    "end": 2765,
    "range": [
      2762,
      2765
    ]
  },
  {
    "type": "Identifier",
    "value": "ox1",
    "start": 2766,
    "end": 2769,
    "range": [
      2766,
      2769
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2769,
    "end": 2770,
    "range": [
      2769,
      2770
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2771,
    "end": 2772,
    "range": [
      2771,
      2772
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2773,
    "end": 2774,
    "range": [
      2773,
      2774
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2774,
    "end": 2775,
    "range": [
      2774,
      2775
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2776,
    "end": 2782,
    "range": [
      2776,
      2782
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2783,
    "end": 2784,
    "range": [
      2783,
      2784
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2784,
    "end": 2785,
    "range": [
      2784,
      2785
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2786,
    "end": 2793,
    "range": [
      2786,
      2793
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2794,
    "end": 2797,
    "range": [
      2794,
      2797
    ]
  },
  {
    "type": "Identifier",
    "value": "ox2",
    "start": 2798,
    "end": 2801,
    "range": [
      2798,
      2801
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2801,
    "end": 2802,
    "range": [
      2801,
      2802
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2803,
    "end": 2804,
    "range": [
      2803,
      2804
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2805,
    "end": 2806,
    "range": [
      2805,
      2806
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2806,
    "end": 2807,
    "range": [
      2806,
      2807
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2808,
    "end": 2814,
    "range": [
      2808,
      2814
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2815,
    "end": 2816,
    "range": [
      2815,
      2816
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2817,
    "end": 2826,
    "range": [
      2817,
      2826
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2827,
    "end": 2828,
    "range": [
      2827,
      2828
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2828,
    "end": 2829,
    "range": [
      2828,
      2829
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2830,
    "end": 2837,
    "range": [
      2830,
      2837
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2838,
    "end": 2841,
    "range": [
      2838,
      2841
    ]
  },
  {
    "type": "Identifier",
    "value": "ox3",
    "start": 2842,
    "end": 2845,
    "range": [
      2842,
      2845
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2845,
    "end": 2846,
    "range": [
      2845,
      2846
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2847,
    "end": 2848,
    "range": [
      2847,
      2848
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2849,
    "end": 2850,
    "range": [
      2849,
      2850
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2850,
    "end": 2851,
    "range": [
      2850,
      2851
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2851,
    "end": 2852,
    "range": [
      2851,
      2852
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2853,
    "end": 2859,
    "range": [
      2853,
      2859
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2860,
    "end": 2861,
    "range": [
      2860,
      2861
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2861,
    "end": 2862,
    "range": [
      2861,
      2862
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2863,
    "end": 2870,
    "range": [
      2863,
      2870
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2871,
    "end": 2874,
    "range": [
      2871,
      2874
    ]
  },
  {
    "type": "Identifier",
    "value": "ox4",
    "start": 2875,
    "end": 2878,
    "range": [
      2875,
      2878
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2878,
    "end": 2879,
    "range": [
      2878,
      2879
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2880,
    "end": 2881,
    "range": [
      2880,
      2881
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2882,
    "end": 2883,
    "range": [
      2882,
      2883
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2883,
    "end": 2884,
    "range": [
      2883,
      2884
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2884,
    "end": 2885,
    "range": [
      2884,
      2885
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2886,
    "end": 2892,
    "range": [
      2886,
      2892
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2893,
    "end": 2894,
    "range": [
      2893,
      2894
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2895,
    "end": 2904,
    "range": [
      2895,
      2904
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2905,
    "end": 2906,
    "range": [
      2905,
      2906
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2906,
    "end": 2907,
    "range": [
      2906,
      2907
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2909,
    "end": 2916,
    "range": [
      2909,
      2916
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2917,
    "end": 2920,
    "range": [
      2917,
      2920
    ]
  },
  {
    "type": "Identifier",
    "value": "tx1",
    "start": 2921,
    "end": 2924,
    "range": [
      2921,
      2924
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2924,
    "end": 2925,
    "range": [
      2924,
      2925
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2926,
    "end": 2927,
    "range": [
      2926,
      2927
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2927,
    "end": 2933,
    "range": [
      2927,
      2933
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2933,
    "end": 2934,
    "range": [
      2933,
      2934
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2934,
    "end": 2935,
    "range": [
      2934,
      2935
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2936,
    "end": 2943,
    "range": [
      2936,
      2943
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2944,
    "end": 2947,
    "range": [
      2944,
      2947
    ]
  },
  {
    "type": "Identifier",
    "value": "tx2",
    "start": 2948,
    "end": 2951,
    "range": [
      2948,
      2951
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2951,
    "end": 2952,
    "range": [
      2951,
      2952
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2953,
    "end": 2954,
    "range": [
      2953,
      2954
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2954,
    "end": 2960,
    "range": [
      2954,
      2960
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2961,
    "end": 2962,
    "range": [
      2961,
      2962
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2963,
    "end": 2972,
    "range": [
      2963,
      2972
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2972,
    "end": 2973,
    "range": [
      2972,
      2973
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2973,
    "end": 2974,
    "range": [
      2973,
      2974
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2975,
    "end": 2982,
    "range": [
      2975,
      2982
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2983,
    "end": 2986,
    "range": [
      2983,
      2986
    ]
  },
  {
    "type": "Identifier",
    "value": "tx3",
    "start": 2987,
    "end": 2990,
    "range": [
      2987,
      2990
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2990,
    "end": 2991,
    "range": [
      2990,
      2991
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2992,
    "end": 2993,
    "range": [
      2992,
      2993
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2993,
    "end": 2999,
    "range": [
      2993,
      2999
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2999,
    "end": 3000,
    "range": [
      2999,
      3000
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3000,
    "end": 3001,
    "range": [
      3000,
      3001
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3001,
    "end": 3002,
    "range": [
      3001,
      3002
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3003,
    "end": 3010,
    "range": [
      3003,
      3010
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3011,
    "end": 3014,
    "range": [
      3011,
      3014
    ]
  },
  {
    "type": "Identifier",
    "value": "tx4",
    "start": 3015,
    "end": 3018,
    "range": [
      3015,
      3018
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3018,
    "end": 3019,
    "range": [
      3018,
      3019
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3020,
    "end": 3021,
    "range": [
      3020,
      3021
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3021,
    "end": 3022,
    "range": [
      3021,
      3022
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3022,
    "end": 3028,
    "range": [
      3022,
      3028
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3029,
    "end": 3030,
    "range": [
      3029,
      3030
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3031,
    "end": 3040,
    "range": [
      3031,
      3040
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3040,
    "end": 3041,
    "range": [
      3040,
      3041
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3041,
    "end": 3042,
    "range": [
      3041,
      3042
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3042,
    "end": 3043,
    "range": [
      3042,
      3043
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3043,
    "end": 3044,
    "range": [
      3043,
      3044
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3046,
    "end": 3053,
    "range": [
      3046,
      3053
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3054,
    "end": 3062,
    "range": [
      3054,
      3062
    ]
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 3063,
    "end": 3066,
    "range": [
      3063,
      3066
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3066,
    "end": 3067,
    "range": [
      3066,
      3067
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3067,
    "end": 3068,
    "range": [
      3067,
      3068
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3068,
    "end": 3069,
    "range": [
      3068,
      3069
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3069,
    "end": 3070,
    "range": [
      3069,
      3070
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3070,
    "end": 3071,
    "range": [
      3070,
      3071
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3071,
    "end": 3072,
    "range": [
      3071,
      3072
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3073,
    "end": 3074,
    "range": [
      3073,
      3074
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3075,
    "end": 3076,
    "range": [
      3075,
      3076
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3076,
    "end": 3077,
    "range": [
      3076,
      3077
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3077,
    "end": 3078,
    "range": [
      3077,
      3078
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3079,
    "end": 3080,
    "range": [
      3079,
      3080
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3081,
    "end": 3082,
    "range": [
      3081,
      3082
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3082,
    "end": 3083,
    "range": [
      3082,
      3083
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3083,
    "end": 3084,
    "range": [
      3083,
      3084
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3085,
    "end": 3086,
    "range": [
      3085,
      3086
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3086,
    "end": 3087,
    "range": [
      3086,
      3087
    ]
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 3089,
    "end": 3092,
    "range": [
      3089,
      3092
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3092,
    "end": 3093,
    "range": [
      3092,
      3093
    ]
  },
  {
    "type": "Identifier",
    "value": "ox1",
    "start": 3093,
    "end": 3096,
    "range": [
      3093,
      3096
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3096,
    "end": 3097,
    "range": [
      3096,
      3097
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3097,
    "end": 3098,
    "range": [
      3097,
      3098
    ]
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 3110,
    "end": 3113,
    "range": [
      3110,
      3113
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3113,
    "end": 3114,
    "range": [
      3113,
      3114
    ]
  },
  {
    "type": "Identifier",
    "value": "ox2",
    "start": 3114,
    "end": 3117,
    "range": [
      3114,
      3117
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3117,
    "end": 3118,
    "range": [
      3117,
      3118
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3118,
    "end": 3119,
    "range": [
      3118,
      3119
    ]
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 3143,
    "end": 3146,
    "range": [
      3143,
      3146
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3146,
    "end": 3147,
    "range": [
      3146,
      3147
    ]
  },
  {
    "type": "Identifier",
    "value": "ox3",
    "start": 3147,
    "end": 3150,
    "range": [
      3147,
      3150
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3150,
    "end": 3151,
    "range": [
      3150,
      3151
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3151,
    "end": 3152,
    "range": [
      3151,
      3152
    ]
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 3164,
    "end": 3167,
    "range": [
      3164,
      3167
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3167,
    "end": 3168,
    "range": [
      3167,
      3168
    ]
  },
  {
    "type": "Identifier",
    "value": "ox4",
    "start": 3168,
    "end": 3171,
    "range": [
      3168,
      3171
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3171,
    "end": 3172,
    "range": [
      3171,
      3172
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3172,
    "end": 3173,
    "range": [
      3172,
      3173
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3198,
    "end": 3205,
    "range": [
      3198,
      3205
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3206,
    "end": 3214,
    "range": [
      3206,
      3214
    ]
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 3215,
    "end": 3218,
    "range": [
      3215,
      3218
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3218,
    "end": 3219,
    "range": [
      3218,
      3219
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3219,
    "end": 3220,
    "range": [
      3219,
      3220
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3220,
    "end": 3221,
    "range": [
      3220,
      3221
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3221,
    "end": 3222,
    "range": [
      3221,
      3222
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3222,
    "end": 3223,
    "range": [
      3222,
      3223
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3223,
    "end": 3224,
    "range": [
      3223,
      3224
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3225,
    "end": 3226,
    "range": [
      3225,
      3226
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3226,
    "end": 3227,
    "range": [
      3226,
      3227
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3227,
    "end": 3228,
    "range": [
      3227,
      3228
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3228,
    "end": 3229,
    "range": [
      3228,
      3229
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3229,
    "end": 3230,
    "range": [
      3229,
      3230
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3230,
    "end": 3231,
    "range": [
      3230,
      3231
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3232,
    "end": 3233,
    "range": [
      3232,
      3233
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3233,
    "end": 3234,
    "range": [
      3233,
      3234
    ]
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 3236,
    "end": 3239,
    "range": [
      3236,
      3239
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3239,
    "end": 3240,
    "range": [
      3239,
      3240
    ]
  },
  {
    "type": "Identifier",
    "value": "tx1",
    "start": 3240,
    "end": 3243,
    "range": [
      3240,
      3243
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3243,
    "end": 3244,
    "range": [
      3243,
      3244
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3244,
    "end": 3245,
    "range": [
      3244,
      3245
    ]
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 3257,
    "end": 3260,
    "range": [
      3257,
      3260
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3260,
    "end": 3261,
    "range": [
      3260,
      3261
    ]
  },
  {
    "type": "Identifier",
    "value": "tx2",
    "start": 3261,
    "end": 3264,
    "range": [
      3261,
      3264
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3264,
    "end": 3265,
    "range": [
      3264,
      3265
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3265,
    "end": 3266,
    "range": [
      3265,
      3266
    ]
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 3290,
    "end": 3293,
    "range": [
      3290,
      3293
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3293,
    "end": 3294,
    "range": [
      3293,
      3294
    ]
  },
  {
    "type": "Identifier",
    "value": "tx3",
    "start": 3294,
    "end": 3297,
    "range": [
      3294,
      3297
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3297,
    "end": 3298,
    "range": [
      3297,
      3298
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3298,
    "end": 3299,
    "range": [
      3298,
      3299
    ]
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 3311,
    "end": 3314,
    "range": [
      3311,
      3314
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3314,
    "end": 3315,
    "range": [
      3314,
      3315
    ]
  },
  {
    "type": "Identifier",
    "value": "tx4",
    "start": 3315,
    "end": 3318,
    "range": [
      3315,
      3318
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3318,
    "end": 3319,
    "range": [
      3318,
      3319
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3319,
    "end": 3320,
    "range": [
      3319,
      3320
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3345,
    "end": 3352,
    "range": [
      3345,
      3352
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3353,
    "end": 3361,
    "range": [
      3353,
      3361
    ]
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 3362,
    "end": 3365,
    "range": [
      3362,
      3365
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3365,
    "end": 3366,
    "range": [
      3365,
      3366
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3366,
    "end": 3367,
    "range": [
      3366,
      3367
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3367,
    "end": 3368,
    "range": [
      3367,
      3368
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3368,
    "end": 3369,
    "range": [
      3368,
      3369
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3369,
    "end": 3370,
    "range": [
      3369,
      3370
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3370,
    "end": 3371,
    "range": [
      3370,
      3371
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 3372,
    "end": 3379,
    "range": [
      3372,
      3379
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3379,
    "end": 3380,
    "range": [
      3379,
      3380
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3380,
    "end": 3381,
    "range": [
      3380,
      3381
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3381,
    "end": 3382,
    "range": [
      3381,
      3382
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3382,
    "end": 3383,
    "range": [
      3382,
      3383
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3383,
    "end": 3384,
    "range": [
      3383,
      3384
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3385,
    "end": 3386,
    "range": [
      3385,
      3386
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3386,
    "end": 3387,
    "range": [
      3386,
      3387
    ]
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 3389,
    "end": 3392,
    "range": [
      3389,
      3392
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3392,
    "end": 3393,
    "range": [
      3392,
      3393
    ]
  },
  {
    "type": "Identifier",
    "value": "ox1",
    "start": 3393,
    "end": 3396,
    "range": [
      3393,
      3396
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3396,
    "end": 3397,
    "range": [
      3396,
      3397
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3397,
    "end": 3398,
    "range": [
      3397,
      3398
    ]
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 3417,
    "end": 3420,
    "range": [
      3417,
      3420
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3420,
    "end": 3421,
    "range": [
      3420,
      3421
    ]
  },
  {
    "type": "Identifier",
    "value": "ox2",
    "start": 3421,
    "end": 3424,
    "range": [
      3421,
      3424
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3424,
    "end": 3425,
    "range": [
      3424,
      3425
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3425,
    "end": 3426,
    "range": [
      3425,
      3426
    ]
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 3457,
    "end": 3460,
    "range": [
      3457,
      3460
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3460,
    "end": 3461,
    "range": [
      3460,
      3461
    ]
  },
  {
    "type": "Identifier",
    "value": "ox3",
    "start": 3461,
    "end": 3464,
    "range": [
      3461,
      3464
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3464,
    "end": 3465,
    "range": [
      3464,
      3465
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3465,
    "end": 3466,
    "range": [
      3465,
      3466
    ]
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 3485,
    "end": 3488,
    "range": [
      3485,
      3488
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3488,
    "end": 3489,
    "range": [
      3488,
      3489
    ]
  },
  {
    "type": "Identifier",
    "value": "ox4",
    "start": 3489,
    "end": 3492,
    "range": [
      3489,
      3492
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3492,
    "end": 3493,
    "range": [
      3492,
      3493
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3493,
    "end": 3494,
    "range": [
      3493,
      3494
    ]
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 3526,
    "end": 3529,
    "range": [
      3526,
      3529
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3529,
    "end": 3530,
    "range": [
      3529,
      3530
    ]
  },
  {
    "type": "Identifier",
    "value": "tx1",
    "start": 3530,
    "end": 3533,
    "range": [
      3530,
      3533
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3533,
    "end": 3534,
    "range": [
      3533,
      3534
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3534,
    "end": 3535,
    "range": [
      3534,
      3535
    ]
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 3549,
    "end": 3552,
    "range": [
      3549,
      3552
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3552,
    "end": 3553,
    "range": [
      3552,
      3553
    ]
  },
  {
    "type": "Identifier",
    "value": "tx2",
    "start": 3553,
    "end": 3556,
    "range": [
      3553,
      3556
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3556,
    "end": 3557,
    "range": [
      3556,
      3557
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3557,
    "end": 3558,
    "range": [
      3557,
      3558
    ]
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 3584,
    "end": 3587,
    "range": [
      3584,
      3587
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3587,
    "end": 3588,
    "range": [
      3587,
      3588
    ]
  },
  {
    "type": "Identifier",
    "value": "tx3",
    "start": 3588,
    "end": 3591,
    "range": [
      3588,
      3591
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3591,
    "end": 3592,
    "range": [
      3591,
      3592
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3592,
    "end": 3593,
    "range": [
      3592,
      3593
    ]
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 3607,
    "end": 3610,
    "range": [
      3607,
      3610
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3610,
    "end": 3611,
    "range": [
      3610,
      3611
    ]
  },
  {
    "type": "Identifier",
    "value": "tx4",
    "start": 3611,
    "end": 3614,
    "range": [
      3611,
      3614
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3614,
    "end": 3615,
    "range": [
      3614,
      3615
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3615,
    "end": 3616,
    "range": [
      3615,
      3616
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3665,
    "end": 3669,
    "range": [
      3665,
      3669
    ]
  },
  {
    "type": "Identifier",
    "value": "Undefinable",
    "start": 3670,
    "end": 3681,
    "range": [
      3670,
      3681
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3681,
    "end": 3682,
    "range": [
      3681,
      3682
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3682,
    "end": 3683,
    "range": [
      3682,
      3683
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3683,
    "end": 3684,
    "range": [
      3683,
      3684
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3685,
    "end": 3686,
    "range": [
      3685,
      3686
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3687,
    "end": 3688,
    "range": [
      3687,
      3688
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3689,
    "end": 3690,
    "range": [
      3689,
      3690
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3691,
    "end": 3700,
    "range": [
      3691,
      3700
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3700,
    "end": 3701,
    "range": [
      3700,
      3701
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3703,
    "end": 3711,
    "range": [
      3703,
      3711
    ]
  },
  {
    "type": "Identifier",
    "value": "expectNotUndefined",
    "start": 3712,
    "end": 3730,
    "range": [
      3712,
      3730
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3730,
    "end": 3731,
    "range": [
      3730,
      3731
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3731,
    "end": 3732,
    "range": [
      3731,
      3732
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3732,
    "end": 3733,
    "range": [
      3732,
      3733
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3733,
    "end": 3734,
    "range": [
      3733,
      3734
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3734,
    "end": 3739,
    "range": [
      3734,
      3739
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3739,
    "end": 3740,
    "range": [
      3739,
      3740
    ]
  },
  {
    "type": "Identifier",
    "value": "Undefinable",
    "start": 3741,
    "end": 3752,
    "range": [
      3741,
      3752
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3752,
    "end": 3753,
    "range": [
      3752,
      3753
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3753,
    "end": 3754,
    "range": [
      3753,
      3754
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3754,
    "end": 3755,
    "range": [
      3754,
      3755
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3755,
    "end": 3756,
    "range": [
      3755,
      3756
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3756,
    "end": 3757,
    "range": [
      3756,
      3757
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3758,
    "end": 3759,
    "range": [
      3758,
      3759
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3760,
    "end": 3761,
    "range": [
      3760,
      3761
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3766,
    "end": 3768,
    "range": [
      3766,
      3768
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3769,
    "end": 3770,
    "range": [
      3769,
      3770
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3770,
    "end": 3775,
    "range": [
      3770,
      3775
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3776,
    "end": 3779,
    "range": [
      3776,
      3779
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3780,
    "end": 3789,
    "range": [
      3780,
      3789
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3789,
    "end": 3790,
    "range": [
      3789,
      3790
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3791,
    "end": 3792,
    "range": [
      3791,
      3792
    ]
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 3801,
    "end": 3806,
    "range": [
      3801,
      3806
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3807,
    "end": 3810,
    "range": [
      3807,
      3810
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeError",
    "start": 3811,
    "end": 3820,
    "range": [
      3811,
      3820
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3820,
    "end": 3821,
    "range": [
      3820,
      3821
    ]
  },
  {
    "type": "String",
    "value": "'value is undefined'",
    "start": 3821,
    "end": 3841,
    "range": [
      3821,
      3841
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3841,
    "end": 3842,
    "range": [
      3841,
      3842
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3842,
    "end": 3843,
    "range": [
      3842,
      3843
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3848,
    "end": 3849,
    "range": [
      3848,
      3849
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3854,
    "end": 3860,
    "range": [
      3854,
      3860
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3861,
    "end": 3866,
    "range": [
      3861,
      3866
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3866,
    "end": 3867,
    "range": [
      3866,
      3867
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3868,
    "end": 3869,
    "range": [
      3868,
      3869
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3871,
    "end": 3880,
    "range": [
      3871,
      3880
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 3881,
    "end": 3884,
    "range": [
      3881,
      3884
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3885,
    "end": 3886,
    "range": [
      3885,
      3886
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3891,
    "end": 3894,
    "range": [
      3891,
      3894
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3894,
    "end": 3895,
    "range": [
      3894,
      3895
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3895,
    "end": 3896,
    "range": [
      3895,
      3896
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3897,
    "end": 3903,
    "range": [
      3897,
      3903
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3903,
    "end": 3904,
    "range": [
      3903,
      3904
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3905,
    "end": 3906,
    "range": [
      3905,
      3906
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3908,
    "end": 3916,
    "range": [
      3908,
      3916
    ]
  },
  {
    "type": "Identifier",
    "value": "aa",
    "start": 3917,
    "end": 3919,
    "range": [
      3917,
      3919
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3919,
    "end": 3920,
    "range": [
      3919,
      3920
    ]
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 3920,
    "end": 3925,
    "range": [
      3920,
      3925
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3925,
    "end": 3926,
    "range": [
      3925,
      3926
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 3927,
    "end": 3930,
    "range": [
      3927,
      3930
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3930,
    "end": 3931,
    "range": [
      3930,
      3931
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3931,
    "end": 3932,
    "range": [
      3931,
      3932
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3933,
    "end": 3937,
    "range": [
      3933,
      3937
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3938,
    "end": 3939,
    "range": [
      3938,
      3939
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3944,
    "end": 3949,
    "range": [
      3944,
      3949
    ]
  },
  {
    "type": "Identifier",
    "value": "notUndefinedVal",
    "start": 3950,
    "end": 3965,
    "range": [
      3950,
      3965
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3966,
    "end": 3967,
    "range": [
      3966,
      3967
    ]
  },
  {
    "type": "Identifier",
    "value": "expectNotUndefined",
    "start": 3968,
    "end": 3986,
    "range": [
      3968,
      3986
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3986,
    "end": 3987,
    "range": [
      3986,
      3987
    ]
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 3987,
    "end": 3992,
    "range": [
      3987,
      3992
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3992,
    "end": 3993,
    "range": [
      3992,
      3993
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3993,
    "end": 3996,
    "range": [
      3993,
      3996
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3996,
    "end": 3997,
    "range": [
      3996,
      3997
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3997,
    "end": 3998,
    "range": [
      3997,
      3998
    ]
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 4003,
    "end": 4005,
    "range": [
      4003,
      4005
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4005,
    "end": 4006,
    "range": [
      4005,
      4006
    ]
  },
  {
    "type": "Identifier",
    "value": "notUndefinedVal",
    "start": 4006,
    "end": 4021,
    "range": [
      4006,
      4021
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4021,
    "end": 4022,
    "range": [
      4021,
      4022
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4022,
    "end": 4023,
    "range": [
      4022,
      4023
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4024,
    "end": 4025,
    "range": [
      4024,
      4025
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4027,
    "end": 4034,
    "range": [
      4027,
      4034
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4035,
    "end": 4043,
    "range": [
      4035,
      4043
    ]
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 4044,
    "end": 4046,
    "range": [
      4044,
      4046
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4046,
    "end": 4047,
    "range": [
      4046,
      4047
    ]
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 4047,
    "end": 4052,
    "range": [
      4047,
      4052
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4052,
    "end": 4053,
    "range": [
      4052,
      4053
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4054,
    "end": 4060,
    "range": [
      4054,
      4060
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4060,
    "end": 4061,
    "range": [
      4060,
      4061
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4061,
    "end": 4062,
    "range": [
      4061,
      4062
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4063,
    "end": 4067,
    "range": [
      4063,
      4067
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4067,
    "end": 4068,
    "range": [
      4067,
      4068
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4070,
    "end": 4079,
    "range": [
      4070,
      4079
    ]
  },
  {
    "type": "Identifier",
    "value": "U1",
    "start": 4080,
    "end": 4082,
    "range": [
      4080,
      4082
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4083,
    "end": 4084,
    "range": [
      4083,
      4084
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4089,
    "end": 4093,
    "range": [
      4089,
      4093
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4093,
    "end": 4094,
    "range": [
      4093,
      4094
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4095,
    "end": 4101,
    "range": [
      4095,
      4101
    ]
  },
  {
    "type": "Identifier",
    "value": "email",
    "start": 4106,
    "end": 4111,
    "range": [
      4106,
      4111
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4111,
    "end": 4112,
    "range": [
      4111,
      4112
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4112,
    "end": 4113,
    "range": [
      4112,
      4113
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4114,
    "end": 4120,
    "range": [
      4114,
      4120
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4121,
    "end": 4122,
    "range": [
      4121,
      4122
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4123,
    "end": 4129,
    "range": [
      4123,
      4129
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4130,
    "end": 4131,
    "range": [
      4130,
      4131
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4132,
    "end": 4141,
    "range": [
      4132,
      4141
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4142,
    "end": 4143,
    "range": [
      4142,
      4143
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4144,
    "end": 4153,
    "range": [
      4144,
      4153
    ]
  },
  {
    "type": "Identifier",
    "value": "U2",
    "start": 4154,
    "end": 4156,
    "range": [
      4154,
      4156
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4157,
    "end": 4158,
    "range": [
      4157,
      4158
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4163,
    "end": 4167,
    "range": [
      4163,
      4167
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4167,
    "end": 4168,
    "range": [
      4167,
      4168
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4169,
    "end": 4175,
    "range": [
      4169,
      4175
    ]
  },
  {
    "type": "Identifier",
    "value": "email",
    "start": 4180,
    "end": 4185,
    "range": [
      4180,
      4185
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4185,
    "end": 4186,
    "range": [
      4185,
      4186
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4186,
    "end": 4187,
    "range": [
      4186,
      4187
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4188,
    "end": 4194,
    "range": [
      4188,
      4194
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4195,
    "end": 4196,
    "range": [
      4195,
      4196
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4197,
    "end": 4203,
    "range": [
      4197,
      4203
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4204,
    "end": 4205,
    "range": [
      4204,
      4205
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4206,
    "end": 4213,
    "range": [
      4206,
      4213
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4214,
    "end": 4219,
    "range": [
      4214,
      4219
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 4220,
    "end": 4221,
    "range": [
      4220,
      4221
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4221,
    "end": 4222,
    "range": [
      4221,
      4222
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4223,
    "end": 4229,
    "range": [
      4223,
      4229
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4230,
    "end": 4231,
    "range": [
      4230,
      4231
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4232,
    "end": 4239,
    "range": [
      4232,
      4239
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4240,
    "end": 4241,
    "range": [
      4240,
      4241
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4242,
    "end": 4251,
    "range": [
      4242,
      4251
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4252,
    "end": 4259,
    "range": [
      4252,
      4259
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4260,
    "end": 4265,
    "range": [
      4260,
      4265
    ]
  },
  {
    "type": "Identifier",
    "value": "u1",
    "start": 4266,
    "end": 4268,
    "range": [
      4266,
      4268
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4268,
    "end": 4269,
    "range": [
      4268,
      4269
    ]
  },
  {
    "type": "Identifier",
    "value": "U1",
    "start": 4270,
    "end": 4272,
    "range": [
      4270,
      4272
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4273,
    "end": 4280,
    "range": [
      4273,
      4280
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4281,
    "end": 4284,
    "range": [
      4281,
      4284
    ]
  },
  {
    "type": "Identifier",
    "value": "u2",
    "start": 4285,
    "end": 4287,
    "range": [
      4285,
      4287
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4287,
    "end": 4288,
    "range": [
      4287,
      4288
    ]
  },
  {
    "type": "Identifier",
    "value": "U2",
    "start": 4289,
    "end": 4291,
    "range": [
      4289,
      4291
    ]
  },
  {
    "type": "Identifier",
    "value": "u1",
    "start": 4292,
    "end": 4294,
    "range": [
      4292,
      4294
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4294,
    "end": 4295,
    "range": [
      4294,
      4295
    ]
  },
  {
    "type": "Identifier",
    "value": "email",
    "start": 4295,
    "end": 4300,
    "range": [
      4295,
      4300
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4301,
    "end": 4302,
    "range": [
      4301,
      4302
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 4303,
    "end": 4304,
    "range": [
      4303,
      4304
    ]
  },
  {
    "type": "Identifier",
    "value": "u2",
    "start": 4362,
    "end": 4364,
    "range": [
      4362,
      4364
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4364,
    "end": 4365,
    "range": [
      4364,
      4365
    ]
  },
  {
    "type": "Identifier",
    "value": "email",
    "start": 4365,
    "end": 4370,
    "range": [
      4365,
      4370
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4371,
    "end": 4372,
    "range": [
      4371,
      4372
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 4373,
    "end": 4374,
    "range": [
      4373,
      4374
    ]
  },
  {
    "type": "Identifier",
    "value": "u2",
    "start": 4414,
    "end": 4416,
    "range": [
      4414,
      4416
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4417,
    "end": 4418,
    "range": [
      4417,
      4418
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4419,
    "end": 4420,
    "range": [
      4419,
      4420
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4425,
    "end": 4429,
    "range": [
      4425,
      4429
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4429,
    "end": 4430,
    "range": [
      4429,
      4430
    ]
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 4431,
    "end": 4435,
    "range": [
      4431,
      4435
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4435,
    "end": 4436,
    "range": [
      4435,
      4436
    ]
  },
  {
    "type": "Identifier",
    "value": "email",
    "start": 4441,
    "end": 4446,
    "range": [
      4441,
      4446
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4446,
    "end": 4447,
    "range": [
      4446,
      4447
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4448,
    "end": 4457,
    "range": [
      4448,
      4457
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4458,
    "end": 4459,
    "range": [
      4458,
      4459
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4483,
    "end": 4490,
    "range": [
      4483,
      4490
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4491,
    "end": 4494,
    "range": [
      4491,
      4494
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4495,
    "end": 4496,
    "range": [
      4495,
      4496
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4496,
    "end": 4497,
    "range": [
      4496,
      4497
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4498,
    "end": 4499,
    "range": [
      4498,
      4499
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4499,
    "end": 4500,
    "range": [
      4499,
      4500
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4500,
    "end": 4501,
    "range": [
      4500,
      4501
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4501,
    "end": 4502,
    "range": [
      4501,
      4502
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4503,
    "end": 4509,
    "range": [
      4503,
      4509
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4509,
    "end": 4510,
    "range": [
      4509,
      4510
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4510,
    "end": 4511,
    "range": [
      4510,
      4511
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4512,
    "end": 4518,
    "range": [
      4512,
      4518
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4519,
    "end": 4520,
    "range": [
      4519,
      4520
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4521,
    "end": 4527,
    "range": [
      4521,
      4527
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4528,
    "end": 4529,
    "range": [
      4528,
      4529
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4530,
    "end": 4537,
    "range": [
      4530,
      4537
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4538,
    "end": 4541,
    "range": [
      4538,
      4541
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4542,
    "end": 4543,
    "range": [
      4542,
      4543
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4543,
    "end": 4544,
    "range": [
      4543,
      4544
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4545,
    "end": 4546,
    "range": [
      4545,
      4546
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4546,
    "end": 4547,
    "range": [
      4546,
      4547
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4547,
    "end": 4548,
    "range": [
      4547,
      4548
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4549,
    "end": 4555,
    "range": [
      4549,
      4555
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4555,
    "end": 4556,
    "range": [
      4555,
      4556
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4557,
    "end": 4558,
    "range": [
      4557,
      4558
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4558,
    "end": 4559,
    "range": [
      4558,
      4559
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4560,
    "end": 4566,
    "range": [
      4560,
      4566
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4566,
    "end": 4567,
    "range": [
      4566,
      4567
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4568,
    "end": 4575,
    "range": [
      4568,
      4575
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4576,
    "end": 4579,
    "range": [
      4576,
      4579
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4580,
    "end": 4581,
    "range": [
      4580,
      4581
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4581,
    "end": 4582,
    "range": [
      4581,
      4582
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4583,
    "end": 4584,
    "range": [
      4583,
      4584
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4584,
    "end": 4585,
    "range": [
      4584,
      4585
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4585,
    "end": 4586,
    "range": [
      4585,
      4586
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4587,
    "end": 4593,
    "range": [
      4587,
      4593
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4593,
    "end": 4594,
    "range": [
      4593,
      4594
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4595,
    "end": 4596,
    "range": [
      4595,
      4596
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4596,
    "end": 4597,
    "range": [
      4596,
      4597
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4597,
    "end": 4598,
    "range": [
      4597,
      4598
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4599,
    "end": 4605,
    "range": [
      4599,
      4605
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4605,
    "end": 4606,
    "range": [
      4605,
      4606
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4607,
    "end": 4614,
    "range": [
      4607,
      4614
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4615,
    "end": 4618,
    "range": [
      4615,
      4618
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 4619,
    "end": 4620,
    "range": [
      4619,
      4620
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4620,
    "end": 4621,
    "range": [
      4620,
      4621
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4622,
    "end": 4623,
    "range": [
      4622,
      4623
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4623,
    "end": 4624,
    "range": [
      4623,
      4624
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4624,
    "end": 4625,
    "range": [
      4624,
      4625
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4626,
    "end": 4632,
    "range": [
      4626,
      4632
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4632,
    "end": 4633,
    "range": [
      4632,
      4633
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4634,
    "end": 4635,
    "range": [
      4634,
      4635
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4635,
    "end": 4636,
    "range": [
      4635,
      4636
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4637,
    "end": 4643,
    "range": [
      4637,
      4643
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4644,
    "end": 4645,
    "range": [
      4644,
      4645
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4646,
    "end": 4655,
    "range": [
      4646,
      4655
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4656,
    "end": 4657,
    "range": [
      4656,
      4657
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4658,
    "end": 4665,
    "range": [
      4658,
      4665
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4666,
    "end": 4669,
    "range": [
      4666,
      4669
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 4670,
    "end": 4671,
    "range": [
      4670,
      4671
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4671,
    "end": 4672,
    "range": [
      4671,
      4672
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4673,
    "end": 4674,
    "range": [
      4673,
      4674
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4674,
    "end": 4675,
    "range": [
      4674,
      4675
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4675,
    "end": 4676,
    "range": [
      4675,
      4676
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4677,
    "end": 4683,
    "range": [
      4677,
      4683
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4683,
    "end": 4684,
    "range": [
      4683,
      4684
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4685,
    "end": 4686,
    "range": [
      4685,
      4686
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4686,
    "end": 4687,
    "range": [
      4686,
      4687
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4687,
    "end": 4688,
    "range": [
      4687,
      4688
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4689,
    "end": 4695,
    "range": [
      4689,
      4695
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4696,
    "end": 4697,
    "range": [
      4696,
      4697
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4698,
    "end": 4707,
    "range": [
      4698,
      4707
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4708,
    "end": 4709,
    "range": [
      4708,
      4709
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4711,
    "end": 4712,
    "range": [
      4711,
      4712
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4713,
    "end": 4714,
    "range": [
      4713,
      4714
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4715,
    "end": 4716,
    "range": [
      4715,
      4716
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4716,
    "end": 4717,
    "range": [
      4716,
      4717
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4718,
    "end": 4719,
    "range": [
      4718,
      4719
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4720,
    "end": 4721,
    "range": [
      4720,
      4721
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4722,
    "end": 4723,
    "range": [
      4722,
      4723
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4723,
    "end": 4724,
    "range": [
      4723,
      4724
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4725,
    "end": 4726,
    "range": [
      4725,
      4726
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4727,
    "end": 4728,
    "range": [
      4727,
      4728
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 4729,
    "end": 4730,
    "range": [
      4729,
      4730
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4730,
    "end": 4731,
    "range": [
      4730,
      4731
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4742,
    "end": 4743,
    "range": [
      4742,
      4743
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4744,
    "end": 4745,
    "range": [
      4744,
      4745
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 4746,
    "end": 4747,
    "range": [
      4746,
      4747
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4747,
    "end": 4748,
    "range": [
      4747,
      4748
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4782,
    "end": 4791,
    "range": [
      4782,
      4791
    ]
  },
  {
    "type": "Identifier",
    "value": "PropsFromReact",
    "start": 4792,
    "end": 4806,
    "range": [
      4792,
      4806
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4807,
    "end": 4808,
    "range": [
      4807,
      4808
    ]
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 4813,
    "end": 4820,
    "range": [
      4813,
      4820
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4820,
    "end": 4821,
    "range": [
      4820,
      4821
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4821,
    "end": 4822,
    "range": [
      4821,
      4822
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4823,
    "end": 4824,
    "range": [
      4823,
      4824
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4824,
    "end": 4825,
    "range": [
      4824,
      4825
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4826,
    "end": 4828,
    "range": [
      4826,
      4828
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4829,
    "end": 4833,
    "range": [
      4829,
      4833
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4833,
    "end": 4834,
    "range": [
      4833,
      4834
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4835,
    "end": 4836,
    "range": [
      4835,
      4836
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4838,
    "end": 4847,
    "range": [
      4838,
      4847
    ]
  },
  {
    "type": "Identifier",
    "value": "PropsFromMaterialUI",
    "start": 4848,
    "end": 4867,
    "range": [
      4848,
      4867
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4868,
    "end": 4869,
    "range": [
      4868,
      4869
    ]
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 4874,
    "end": 4881,
    "range": [
      4874,
      4881
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4881,
    "end": 4882,
    "range": [
      4881,
      4882
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4882,
    "end": 4883,
    "range": [
      4882,
      4883
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4884,
    "end": 4885,
    "range": [
      4884,
      4885
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4885,
    "end": 4886,
    "range": [
      4885,
      4886
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4886,
    "end": 4887,
    "range": [
      4886,
      4887
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4888,
    "end": 4890,
    "range": [
      4888,
      4890
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4891,
    "end": 4895,
    "range": [
      4891,
      4895
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4895,
    "end": 4896,
    "range": [
      4895,
      4896
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4897,
    "end": 4898,
    "range": [
      4897,
      4898
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4899,
    "end": 4908,
    "range": [
      4899,
      4908
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4908,
    "end": 4909,
    "range": [
      4908,
      4909
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4910,
    "end": 4911,
    "range": [
      4910,
      4911
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4913,
    "end": 4917,
    "range": [
      4913,
      4917
    ]
  },
  {
    "type": "Identifier",
    "value": "TheTypeFromMaterialUI",
    "start": 4918,
    "end": 4939,
    "range": [
      4918,
      4939
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4940,
    "end": 4941,
    "range": [
      4940,
      4941
    ]
  },
  {
    "type": "Identifier",
    "value": "PropsFromReact",
    "start": 4942,
    "end": 4956,
    "range": [
      4942,
      4956
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 4957,
    "end": 4958,
    "range": [
      4957,
      4958
    ]
  },
  {
    "type": "Identifier",
    "value": "PropsFromMaterialUI",
    "start": 4959,
    "end": 4978,
    "range": [
      4959,
      4978
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4978,
    "end": 4979,
    "range": [
      4978,
      4979
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4981,
    "end": 4990,
    "range": [
      4981,
      4990
    ]
  },
  {
    "type": "Identifier",
    "value": "NavBottomListItem",
    "start": 4991,
    "end": 5008,
    "range": [
      4991,
      5008
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5009,
    "end": 5016,
    "range": [
      5009,
      5016
    ]
  },
  {
    "type": "Identifier",
    "value": "TheTypeFromMaterialUI",
    "start": 5017,
    "end": 5038,
    "range": [
      5017,
      5038
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5039,
    "end": 5040,
    "range": [
      5039,
      5040
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5045,
    "end": 5050,
    "range": [
      5045,
      5050
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5050,
    "end": 5051,
    "range": [
      5050,
      5051
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5052,
    "end": 5058,
    "range": [
      5052,
      5058
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5058,
    "end": 5059,
    "range": [
      5058,
      5059
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5060,
    "end": 5061,
    "range": [
      5060,
      5061
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5085,
    "end": 5089,
    "range": [
      5085,
      5089
    ]
  },
  {
    "type": "Identifier",
    "value": "UA",
    "start": 5090,
    "end": 5092,
    "range": [
      5090,
      5092
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5093,
    "end": 5094,
    "range": [
      5093,
      5094
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5095,
    "end": 5104,
    "range": [
      5095,
      5104
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5104,
    "end": 5105,
    "range": [
      5104,
      5105
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5134,
    "end": 5138,
    "range": [
      5134,
      5138
    ]
  },
  {
    "type": "Identifier",
    "value": "UB",
    "start": 5139,
    "end": 5141,
    "range": [
      5139,
      5141
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5142,
    "end": 5143,
    "range": [
      5142,
      5143
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5144,
    "end": 5145,
    "range": [
      5144,
      5145
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5146,
    "end": 5147,
    "range": [
      5146,
      5147
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5147,
    "end": 5148,
    "range": [
      5147,
      5148
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5148,
    "end": 5149,
    "range": [
      5148,
      5149
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5150,
    "end": 5155,
    "range": [
      5150,
      5155
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5156,
    "end": 5157,
    "range": [
      5156,
      5157
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5157,
    "end": 5158,
    "range": [
      5157,
      5158
    ]
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 5158,
    "end": 5161,
    "range": [
      5158,
      5161
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5161,
    "end": 5162,
    "range": [
      5161,
      5162
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5162,
    "end": 5163,
    "range": [
      5162,
      5163
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5201,
    "end": 5205,
    "range": [
      5201,
      5205
    ]
  },
  {
    "type": "Identifier",
    "value": "UC",
    "start": 5206,
    "end": 5208,
    "range": [
      5206,
      5208
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5209,
    "end": 5210,
    "range": [
      5209,
      5210
    ]
  },
  {
    "type": "Identifier",
    "value": "UA",
    "start": 5211,
    "end": 5213,
    "range": [
      5211,
      5213
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 5214,
    "end": 5215,
    "range": [
      5214,
      5215
    ]
  },
  {
    "type": "Identifier",
    "value": "UB",
    "start": 5216,
    "end": 5218,
    "range": [
      5216,
      5218
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5218,
    "end": 5219,
    "range": [
      5218,
      5219
    ]
  }
]
```

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

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "myNull",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 37,
                "end": 41
              },
              "start": 35,
              "end": 41
            },
            "start": 29,
            "end": 41
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 44,
            "end": 48
          },
          "definite": false,
          "start": 29,
          "end": 48
        }
      ],
      "declare": false,
      "start": 23,
      "end": 49
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
            "name": "objWithValMaybeNull",
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
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 79,
                      "end": 82
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 84,
                            "end": 90
                          },
                          {
                            "type": "TSNullKeyword",
                            "start": 93,
                            "end": 97
                          }
                        ],
                        "start": 84,
                        "end": 97
                      },
                      "start": 82,
                      "end": 97
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 79,
                    "end": 97
                  }
                ],
                "start": 77,
                "end": 99
              },
              "start": 75,
              "end": 99
            },
            "start": 56,
            "end": 99
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
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 107
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 109,
                  "end": 110
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 104,
                "end": 110
              }
            ],
            "start": 102,
            "end": 112
          },
          "definite": false,
          "start": 56,
          "end": 112
        }
      ],
      "declare": false,
      "start": 50,
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
            "name": "addOne",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 126
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 144,
                    "end": 150
                  },
                  "start": 142,
                  "end": 150
                },
                "start": 139,
                "end": 150
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 165,
                      "end": 168
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 171,
                      "end": 172
                    },
                    "start": 165,
                    "end": 172
                  },
                  "start": 158,
                  "end": 173
                }
              ],
              "start": 152,
              "end": 175
            },
            "expression": false,
            "start": 129,
            "end": 175
          },
          "definite": false,
          "start": 120,
          "end": 175
        }
      ],
      "declare": false,
      "start": 114,
      "end": 175
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objWithValMaybeNull",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 200
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": null,
            "start": 201,
            "end": 204
          },
          "optional": false,
          "computed": false,
          "start": 181,
          "end": 204
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 209,
          "end": 213
        },
        "start": 181,
        "end": 213
      },
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "addOne",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 225
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objWithValMaybeNull",
                "optional": false,
                "typeAnnotation": null,
                "start": 226,
                "end": 245
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 246,
                "end": 249
              },
              "optional": false,
              "computed": false,
              "start": 226,
              "end": 249
            }
          ],
          "optional": false,
          "start": 219,
          "end": 250
        },
        "directive": null,
        "start": 219,
        "end": 251
      },
      "alternate": null,
      "start": 177,
      "end": 251
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objWithValMaybeNull",
            "optional": false,
            "typeAnnotation": null,
            "start": 256,
            "end": 275
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 279
          },
          "optional": false,
          "computed": false,
          "start": 256,
          "end": 279
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myNull",
          "optional": false,
          "typeAnnotation": null,
          "start": 284,
          "end": 290
        },
        "start": 256,
        "end": 290
      },
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "addOne",
            "optional": false,
            "typeAnnotation": null,
            "start": 296,
            "end": 302
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objWithValMaybeNull",
                "optional": false,
                "typeAnnotation": null,
                "start": 303,
                "end": 322
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 323,
                "end": 326
              },
              "optional": false,
              "computed": false,
              "start": 303,
              "end": 326
            }
          ],
          "optional": false,
          "start": 296,
          "end": 327
        },
        "directive": null,
        "start": 296,
        "end": 328
      },
      "alternate": null,
      "start": 252,
      "end": 328
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objWithValMaybeNull",
            "optional": false,
            "typeAnnotation": null,
            "start": 334,
            "end": 353
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": null,
            "start": 354,
            "end": 357
          },
          "optional": false,
          "computed": false,
          "start": 334,
          "end": 357
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 362,
          "end": 366
        },
        "start": 334,
        "end": 366
      },
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "addOne",
            "optional": false,
            "typeAnnotation": null,
            "start": 372,
            "end": 378
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objWithValMaybeNull",
                "optional": false,
                "typeAnnotation": null,
                "start": 379,
                "end": 398
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 399,
                "end": 402
              },
              "optional": false,
              "computed": false,
              "start": 379,
              "end": 402
            }
          ],
          "optional": false,
          "start": 372,
          "end": 403
        },
        "directive": null,
        "start": 372,
        "end": 404
      },
      "alternate": null,
      "start": 330,
      "end": 404
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objWithValMaybeNull",
            "optional": false,
            "typeAnnotation": null,
            "start": 421,
            "end": 440
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": null,
            "start": 441,
            "end": 444
          },
          "optional": false,
          "computed": false,
          "start": 421,
          "end": 444
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myNull",
          "optional": false,
          "typeAnnotation": null,
          "start": 449,
          "end": 455
        },
        "start": 421,
        "end": 455
      },
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "addOne",
            "optional": false,
            "typeAnnotation": null,
            "start": 461,
            "end": 467
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objWithValMaybeNull",
                "optional": false,
                "typeAnnotation": null,
                "start": 468,
                "end": 487
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 488,
                "end": 491
              },
              "optional": false,
              "computed": false,
              "start": 468,
              "end": 491
            }
          ],
          "optional": false,
          "start": 461,
          "end": 492
        },
        "directive": null,
        "start": 461,
        "end": 493
      },
      "alternate": null,
      "start": 417,
      "end": 493
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 516,
        "end": 517
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 521,
                  "end": 527
                },
                {
                  "type": "TSNullKeyword",
                  "start": 530,
                  "end": 534
                }
              ],
              "start": 521,
              "end": 534
            },
            "start": 519,
            "end": 534
          },
          "start": 518,
          "end": 534
        }
      ],
      "returnType": null,
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 545,
                "end": 546
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "myNull",
                "optional": false,
                "typeAnnotation": null,
                "start": 551,
                "end": 557
              },
              "start": 545,
              "end": 557
            },
            "consequent": {
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 578,
                            "end": 584
                          },
                          "start": 576,
                          "end": 584
                        },
                        "start": 575,
                        "end": 584
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 587,
                        "end": 588
                      },
                      "definite": false,
                      "start": 575,
                      "end": 588
                    }
                  ],
                  "declare": false,
                  "start": 569,
                  "end": 589
                }
              ],
              "start": 559,
              "end": 605
            },
            "alternate": null,
            "start": 542,
            "end": 605
          }
        ],
        "start": 536,
        "end": 607
      },
      "expression": false,
      "start": 507,
      "end": 607
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 607
}
```

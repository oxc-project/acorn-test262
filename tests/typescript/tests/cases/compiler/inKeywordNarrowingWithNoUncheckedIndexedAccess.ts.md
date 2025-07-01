__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "invariant",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 26
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "condition",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 38,
              "end": 45
            },
            "start": 36,
            "end": 45
          },
          "start": 27,
          "end": 45
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "condition",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 65
          },
          "asserts": true,
          "typeAnnotation": null,
          "start": 48,
          "end": 65
        },
        "start": 46,
        "end": 65
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 66
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 79
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
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 85,
                "end": 91
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 92,
                    "end": 98
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 100,
                    "end": 106
                  }
                ],
                "start": 91,
                "end": 107
              },
              "start": 85,
              "end": 107
            },
            "start": 83,
            "end": 107
          },
          "start": 80,
          "end": 107
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "invariant",
                "optional": false,
                "typeAnnotation": null,
                "start": 115,
                "end": 124
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "test",
                    "raw": "\"test\"",
                    "start": 125,
                    "end": 131
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 135,
                    "end": 138
                  },
                  "start": 125,
                  "end": 138
                }
              ],
              "optional": false,
              "start": 115,
              "end": 139
            },
            "directive": null,
            "start": 115,
            "end": 140
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 155
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 156,
                "end": 160
              },
              "optional": false,
              "computed": false,
              "start": 152,
              "end": 160
            },
            "start": 145,
            "end": 161
          }
        ],
        "start": 109,
        "end": 174
      },
      "expression": false,
      "start": 68,
      "end": 174
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 185,
        "end": 187
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
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 193,
                "end": 199
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 200,
                    "end": 206
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 208,
                    "end": 214
                  }
                ],
                "start": 199,
                "end": 215
              },
              "start": 193,
              "end": 215
            },
            "start": 191,
            "end": 215
          },
          "start": 188,
          "end": 215
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
                "type": "Literal",
                "value": "test",
                "raw": "\"test\"",
                "start": 227,
                "end": 233
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 237,
                "end": 240
              },
              "start": 227,
              "end": 240
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 259,
                      "end": 262
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 263,
                      "end": 267
                    },
                    "optional": false,
                    "computed": false,
                    "start": 259,
                    "end": 267
                  },
                  "start": 252,
                  "end": 268
                }
              ],
              "start": 242,
              "end": 285
            },
            "alternate": null,
            "start": 223,
            "end": 285
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "default",
              "raw": "\"default\"",
              "start": 297,
              "end": 306
            },
            "start": 290,
            "end": 307
          }
        ],
        "start": 217,
        "end": 309
      },
      "expression": false,
      "start": 176,
      "end": 309
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 320,
        "end": 322
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
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 328,
                "end": 334
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 335,
                    "end": 341
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 343,
                    "end": 349
                  }
                ],
                "start": 334,
                "end": 350
              },
              "start": 328,
              "end": 350
            },
            "start": 326,
            "end": 350
          },
          "start": 323,
          "end": 350
        }
      ],
      "returnType": null,
      "body": {
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
                "start": 358,
                "end": 361
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 362,
                "end": 366
              },
              "optional": false,
              "computed": false,
              "start": 358,
              "end": 366
            },
            "directive": null,
            "start": 358,
            "end": 367
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "test",
                "raw": "\"test\"",
                "start": 399,
                "end": 405
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 409,
                "end": 412
              },
              "start": 399,
              "end": 412
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
                      "start": 424,
                      "end": 427
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 428,
                      "end": 432
                    },
                    "optional": false,
                    "computed": false,
                    "start": 424,
                    "end": 432
                  },
                  "directive": null,
                  "start": 424,
                  "end": 433
                }
              ],
              "start": 414,
              "end": 450
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
                      "start": 470,
                      "end": 473
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 474,
                      "end": 478
                    },
                    "optional": false,
                    "computed": false,
                    "start": 470,
                    "end": 478
                  },
                  "directive": null,
                  "start": 470,
                  "end": 479
                }
              ],
              "start": 460,
              "end": 499
            },
            "start": 395,
            "end": 499
          }
        ],
        "start": 352,
        "end": 501
      },
      "expression": false,
      "start": 311,
      "end": 501
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 512,
        "end": 514
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
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 520,
                "end": 526
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 527,
                    "end": 533
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 535,
                    "end": 541
                  }
                ],
                "start": 526,
                "end": 542
              },
              "start": 520,
              "end": 542
            },
            "start": 518,
            "end": 542
          },
          "start": 515,
          "end": 542
        }
      ],
      "returnType": null,
      "body": {
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
                "start": 550,
                "end": 553
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 554,
                "end": 558
              },
              "optional": false,
              "computed": false,
              "start": 550,
              "end": 558
            },
            "directive": null,
            "start": 550,
            "end": 559
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
                  "start": 591,
                  "end": 594
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hasOwnProperty",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 595,
                  "end": 609
                },
                "optional": false,
                "computed": false,
                "start": 591,
                "end": 609
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "test",
                  "raw": "\"test\"",
                  "start": 610,
                  "end": 616
                }
              ],
              "optional": false,
              "start": 591,
              "end": 617
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
                      "start": 629,
                      "end": 632
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 633,
                      "end": 637
                    },
                    "optional": false,
                    "computed": false,
                    "start": 629,
                    "end": 637
                  },
                  "directive": null,
                  "start": 629,
                  "end": 638
                }
              ],
              "start": 619,
              "end": 655
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
                      "start": 675,
                      "end": 678
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 679,
                      "end": 683
                    },
                    "optional": false,
                    "computed": false,
                    "start": 675,
                    "end": 683
                  },
                  "directive": null,
                  "start": 675,
                  "end": 684
                }
              ],
              "start": 665,
              "end": 704
            },
            "start": 587,
            "end": 704
          }
        ],
        "start": 544,
        "end": 706
      },
      "expression": false,
      "start": 503,
      "end": 706
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 706
}
```

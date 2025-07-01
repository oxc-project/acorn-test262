__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 131
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
              "name": "first",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 141
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
              },
              "start": 141,
              "end": 149
            },
            "accessibility": null,
            "static": false,
            "start": 136,
            "end": 150
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "last",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 157
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 159,
                "end": 165
              },
              "start": 157,
              "end": 165
            },
            "accessibility": null,
            "static": false,
            "start": 153,
            "end": 166
          }
        ],
        "start": 132,
        "end": 168
      },
      "declare": false,
      "start": 115,
      "end": 168
    },
    {
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
                "name": "dice",
                "optional": false,
                "typeAnnotation": null,
                "start": 180,
                "end": 184
              },
              "init": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 193,
                      "end": 197
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "floor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 198,
                      "end": 203
                    },
                    "optional": false,
                    "computed": false,
                    "start": 193,
                    "end": 203
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
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
                            "start": 204,
                            "end": 208
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 209,
                            "end": 215
                          },
                          "optional": false,
                          "computed": false,
                          "start": 204,
                          "end": 215
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 204,
                        "end": 217
                      },
                      "operator": "*",
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 220,
                        "end": 221
                      },
                      "start": 204,
                      "end": 221
                    }
                  ],
                  "optional": false,
                  "start": 193,
                  "end": 222
                },
                "id": null,
                "generator": false,
                "start": 187,
                "end": 222
              },
              "definite": false,
              "start": 180,
              "end": 222
            }
          ],
          "declare": false,
          "start": 174,
          "end": 223
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
                "name": "dice",
                "optional": false,
                "typeAnnotation": null,
                "start": 226,
                "end": 230
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 231,
                "end": 236
              },
              "optional": false,
              "computed": false,
              "start": 226,
              "end": 236
            },
            "right": {
              "type": "Literal",
              "value": "Rando",
              "raw": "'Rando'",
              "start": 239,
              "end": 246
            },
            "start": 226,
            "end": 246
          },
          "directive": null,
          "start": 226,
          "end": 247
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
                "name": "dice",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 256
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "last",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 261
              },
              "optional": false,
              "computed": false,
              "start": 252,
              "end": 261
            },
            "right": {
              "type": "Literal",
              "value": "Calrissian",
              "raw": "'Calrissian'",
              "start": 264,
              "end": 276
            },
            "start": 252,
            "end": 276
          },
          "directive": null,
          "start": 252,
          "end": 277
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
                "name": "diceP",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Person",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 293,
                      "end": 299
                    },
                    "typeArguments": null,
                    "start": 293,
                    "end": 299
                  },
                  "start": 291,
                  "end": 299
                },
                "start": 286,
                "end": 299
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "dice",
                "optional": false,
                "typeAnnotation": null,
                "start": 302,
                "end": 306
              },
              "definite": false,
              "start": 286,
              "end": 306
            }
          ],
          "declare": false,
          "start": 280,
          "end": 307
        }
      ],
      "start": 170,
      "end": 311
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 115,
  "end": 312
}
```
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
        "name": "doHumanThings",
        "optional": false,
        "typeAnnotation": null,
        "start": 318,
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
          "name": "param",
          "optional": false,
          "typeAnnotation": null,
          "start": 332,
          "end": 337
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 339,
        "end": 341
      },
      "expression": false,
      "start": 309,
      "end": 341
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
            "name": "dice1",
            "optional": false,
            "typeAnnotation": null,
            "start": 349,
            "end": 354
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 363,
                  "end": 367
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "floor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 368,
                  "end": 373
                },
                "optional": false,
                "computed": false,
                "start": 363,
                "end": 373
              },
              "typeArguments": null,
              "arguments": [
                {
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
                        "start": 374,
                        "end": 378
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "random",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 379,
                        "end": 385
                      },
                      "optional": false,
                      "computed": false,
                      "start": 374,
                      "end": 385
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 374,
                    "end": 387
                  },
                  "operator": "*",
                  "right": {
                    "type": "Literal",
                    "value": 6,
                    "raw": "6",
                    "start": 390,
                    "end": 391
                  },
                  "start": 374,
                  "end": 391
                }
              ],
              "optional": false,
              "start": 363,
              "end": 392
            },
            "id": null,
            "generator": false,
            "start": 357,
            "end": 392
          },
          "definite": false,
          "start": 349,
          "end": 392
        }
      ],
      "declare": false,
      "start": 343,
      "end": 393
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
            "name": "dice1",
            "optional": false,
            "typeAnnotation": null,
            "start": 420,
            "end": 425
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "last",
            "optional": false,
            "typeAnnotation": null,
            "start": 426,
            "end": 430
          },
          "optional": false,
          "computed": false,
          "start": 420,
          "end": 430
        },
        "right": {
          "type": "Literal",
          "value": "Calrissian",
          "raw": "'Calrissian'",
          "start": 433,
          "end": 445
        },
        "start": 420,
        "end": 445
      },
      "directive": null,
      "start": 420,
      "end": 446
    },
    {
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
                "name": "dice2",
                "optional": false,
                "typeAnnotation": null,
                "start": 531,
                "end": 536
              },
              "init": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 545,
                      "end": 549
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "floor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 550,
                      "end": 555
                    },
                    "optional": false,
                    "computed": false,
                    "start": 545,
                    "end": 555
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
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
                            "start": 556,
                            "end": 560
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 561,
                            "end": 567
                          },
                          "optional": false,
                          "computed": false,
                          "start": 556,
                          "end": 567
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 556,
                        "end": 569
                      },
                      "operator": "*",
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 572,
                        "end": 573
                      },
                      "start": 556,
                      "end": 573
                    }
                  ],
                  "optional": false,
                  "start": 545,
                  "end": 574
                },
                "id": null,
                "generator": false,
                "start": 539,
                "end": 574
              },
              "definite": false,
              "start": 531,
              "end": 574
            }
          ],
          "declare": false,
          "start": 525,
          "end": 575
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
                "name": "dice2",
                "optional": false,
                "typeAnnotation": null,
                "start": 578,
                "end": 583
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 584,
                "end": 589
              },
              "optional": false,
              "computed": false,
              "start": 578,
              "end": 589
            },
            "right": {
              "type": "Literal",
              "value": "Rando",
              "raw": "'Rando'",
              "start": 592,
              "end": 599
            },
            "start": 578,
            "end": 599
          },
          "directive": null,
          "start": 578,
          "end": 600
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
                "name": "dice2",
                "optional": false,
                "typeAnnotation": null,
                "start": 603,
                "end": 608
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "last",
                "optional": false,
                "typeAnnotation": null,
                "start": 609,
                "end": 613
              },
              "optional": false,
              "computed": false,
              "start": 603,
              "end": 613
            },
            "right": {
              "type": "Literal",
              "value": "Calrissian",
              "raw": "'Calrissian'",
              "start": 616,
              "end": 628
            },
            "start": 603,
            "end": 628
          },
          "directive": null,
          "start": 603,
          "end": 629
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "doHumanThings",
              "optional": false,
              "typeAnnotation": null,
              "start": 636,
              "end": 649
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "dice2",
                "optional": false,
                "typeAnnotation": null,
                "start": 650,
                "end": 655
              }
            ],
            "optional": false,
            "start": 636,
            "end": 656
          },
          "directive": null,
          "start": 636,
          "end": 656
        }
      ],
      "start": 521,
      "end": 658
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 309,
  "end": 658
}
```

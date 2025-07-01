__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 37,
                    "end": 38
                  },
                  "start": 31,
                  "end": 38
                },
                "directive": null,
                "start": 31,
                "end": 39
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 54,
                    "end": 55
                  },
                  "start": 48,
                  "end": 55
                },
                "directive": null,
                "start": 48,
                "end": 56
              },
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 72,
                  "end": 73
                },
                "start": 65,
                "end": 74
              }
            ],
            "start": 14,
            "end": 80
          }
        ],
        "start": 8,
        "end": 82
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 82
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 99,
        "end": 101
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 118
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "StaticBlock",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 156,
                          "end": 157
                        },
                        "start": 150,
                        "end": 157
                      },
                      "directive": null,
                      "start": 150,
                      "end": 158
                    },
                    {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 187,
                        "end": 189
                      },
                      "generator": false,
                      "async": true,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AwaitExpression",
                              "argument": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 217,
                                "end": 218
                              },
                              "start": 211,
                              "end": 218
                            },
                            "directive": null,
                            "start": 211,
                            "end": 219
                          }
                        ],
                        "start": 193,
                        "end": 233
                      },
                      "expression": false,
                      "start": 172,
                      "end": 233
                    }
                  ],
                  "start": 129,
                  "end": 243
                }
              ],
              "start": 119,
              "end": 249
            },
            "abstract": false,
            "declare": false,
            "start": 111,
            "end": 249
          }
        ],
        "start": 105,
        "end": 251
      },
      "expression": false,
      "start": 84,
      "end": 251
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 264,
        "end": 266
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 282,
              "end": 283
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "StaticBlock",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "YieldExpression",
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 321,
                          "end": 322
                        },
                        "start": 315,
                        "end": 322
                      },
                      "directive": null,
                      "start": 315,
                      "end": 323
                    },
                    {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 348,
                        "end": 350
                      },
                      "generator": true,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "YieldExpression",
                              "delegate": false,
                              "argument": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 378,
                                "end": 379
                              },
                              "start": 372,
                              "end": 379
                            },
                            "directive": null,
                            "start": 372,
                            "end": 380
                          }
                        ],
                        "start": 354,
                        "end": 394
                      },
                      "expression": false,
                      "start": 337,
                      "end": 394
                    }
                  ],
                  "start": 294,
                  "end": 404
                }
              ],
              "start": 284,
              "end": 410
            },
            "abstract": false,
            "declare": false,
            "start": 276,
            "end": 410
          }
        ],
        "start": 270,
        "end": 412
      },
      "expression": false,
      "start": 253,
      "end": 412
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 423,
        "end": 425
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
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 441,
              "end": 442
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "StaticBlock",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 481,
                        "end": 482
                      },
                      "start": 474,
                      "end": 483
                    },
                    {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 506,
                        "end": 508
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 537,
                              "end": 538
                            },
                            "start": 530,
                            "end": 538
                          }
                        ],
                        "start": 512,
                        "end": 552
                      },
                      "expression": false,
                      "start": 497,
                      "end": 552
                    }
                  ],
                  "start": 453,
                  "end": 562
                }
              ],
              "start": 443,
              "end": 568
            },
            "abstract": false,
            "declare": false,
            "start": 435,
            "end": 568
          }
        ],
        "start": 429,
        "end": 570
      },
      "expression": false,
      "start": 414,
      "end": 570
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 570
}
```

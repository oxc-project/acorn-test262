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
        "name": "Color",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 14
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
          "typeAnnotation": null,
          "start": 15,
          "end": 18
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
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 26,
                  "end": 30
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "example",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 31,
                  "end": 38
                },
                "optional": false,
                "computed": false,
                "start": 26,
                "end": 38
              },
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 41,
                "end": 45
              },
              "start": 26,
              "end": 45
            },
            "directive": null,
            "start": 26,
            "end": 45
          }
        ],
        "start": 20,
        "end": 47
      },
      "expression": false,
      "start": 0,
      "end": 47
    },
    {
      "type": "EmptyStatement",
      "start": 47,
      "end": 48
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
            "name": "Color",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 54
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 64
          },
          "optional": false,
          "computed": false,
          "start": 49,
          "end": 64
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
                "name": "negate",
                "optional": false,
                "typeAnnotation": null,
                "start": 70,
                "end": 76
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
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
                        "type": "ThisExpression",
                        "start": 98,
                        "end": 102
                      },
                      "start": 91,
                      "end": 103
                    }
                  ],
                  "start": 90,
                  "end": 104
                },
                "expression": false,
                "start": 78,
                "end": 104
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 70,
              "end": 104
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "lighten",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 114
              },
              "value": {
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
                    "name": "ratio",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 126,
                    "end": 131
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ThisExpression",
                        "start": 141,
                        "end": 145
                      },
                      "start": 134,
                      "end": 146
                    }
                  ],
                  "start": 133,
                  "end": 147
                },
                "expression": false,
                "start": 116,
                "end": 147
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 107,
              "end": 147
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "darken",
                "optional": false,
                "typeAnnotation": null,
                "start": 150,
                "end": 156
              },
              "value": {
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
                    "name": "ratio",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 168,
                    "end": 173
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ThisExpression",
                        "start": 183,
                        "end": 187
                      },
                      "start": 176,
                      "end": 188
                    }
                  ],
                  "start": 175,
                  "end": 189
                },
                "expression": false,
                "start": 158,
                "end": 189
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 150,
              "end": 189
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "saturate",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 200
              },
              "value": {
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
                    "name": "ratio",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 212,
                    "end": 217
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ThisExpression",
                        "start": 227,
                        "end": 231
                      },
                      "start": 220,
                      "end": 232
                    }
                  ],
                  "start": 219,
                  "end": 233
                },
                "expression": false,
                "start": 202,
                "end": 233
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 192,
              "end": 233
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "desaturate",
                "optional": false,
                "typeAnnotation": null,
                "start": 236,
                "end": 246
              },
              "value": {
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
                    "name": "ratio",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 258,
                    "end": 263
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ThisExpression",
                        "start": 273,
                        "end": 277
                      },
                      "start": 266,
                      "end": 278
                    }
                  ],
                  "start": 265,
                  "end": 279
                },
                "expression": false,
                "start": 248,
                "end": 279
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 236,
              "end": 279
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "whiten",
                "optional": false,
                "typeAnnotation": null,
                "start": 282,
                "end": 288
              },
              "value": {
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
                    "name": "ratio",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 300,
                    "end": 305
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ThisExpression",
                        "start": 315,
                        "end": 319
                      },
                      "start": 308,
                      "end": 320
                    }
                  ],
                  "start": 307,
                  "end": 321
                },
                "expression": false,
                "start": 290,
                "end": 321
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 282,
              "end": 321
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "blacken",
                "optional": false,
                "typeAnnotation": null,
                "start": 324,
                "end": 331
              },
              "value": {
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
                    "name": "ratio",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 343,
                    "end": 348
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ThisExpression",
                        "start": 358,
                        "end": 362
                      },
                      "start": 351,
                      "end": 363
                    }
                  ],
                  "start": 350,
                  "end": 364
                },
                "expression": false,
                "start": 333,
                "end": 364
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 324,
              "end": 364
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "greyscale",
                "optional": false,
                "typeAnnotation": null,
                "start": 367,
                "end": 376
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
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
                        "type": "ThisExpression",
                        "start": 398,
                        "end": 402
                      },
                      "start": 391,
                      "end": 403
                    }
                  ],
                  "start": 390,
                  "end": 404
                },
                "expression": false,
                "start": 378,
                "end": 404
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 367,
              "end": 404
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "clearer",
                "optional": false,
                "typeAnnotation": null,
                "start": 407,
                "end": 414
              },
              "value": {
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
                    "name": "ratio",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 426,
                    "end": 431
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ThisExpression",
                        "start": 441,
                        "end": 445
                      },
                      "start": 434,
                      "end": 446
                    }
                  ],
                  "start": 433,
                  "end": 447
                },
                "expression": false,
                "start": 416,
                "end": 447
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 407,
              "end": 447
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "toJSON",
                "optional": false,
                "typeAnnotation": null,
                "start": 450,
                "end": 456
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
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
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 478,
                            "end": 482
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rgb",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 483,
                            "end": 486
                          },
                          "optional": false,
                          "computed": false,
                          "start": 478,
                          "end": 486
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 478,
                        "end": 488
                      },
                      "start": 471,
                      "end": 489
                    }
                  ],
                  "start": 470,
                  "end": 490
                },
                "expression": false,
                "start": 458,
                "end": 490
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 450,
              "end": 490
            }
          ],
          "start": 67,
          "end": 493
        },
        "start": 49,
        "end": 493
      },
      "directive": null,
      "start": 49,
      "end": 494
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 494
}
```

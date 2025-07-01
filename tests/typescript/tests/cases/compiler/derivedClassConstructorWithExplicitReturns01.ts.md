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
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "cProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 19
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 22,
              "end": 24
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 25
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 34
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
                      "type": "Literal",
                      "value": "this never gets used.",
                      "raw": "\"this never gets used.\"",
                      "start": 46,
                      "end": 69
                    },
                    "start": 39,
                    "end": 70
                  }
                ],
                "start": 37,
                "end": 72
              },
              "expression": false,
              "start": 34,
              "end": 72
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 31,
            "end": 72
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 89
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 97,
                      "end": 103
                    },
                    "start": 95,
                    "end": 103
                  },
                  "start": 90,
                  "end": 103
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "cProp",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 136,
                            "end": 141
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 143,
                            "end": 148
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 136,
                          "end": 148
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 162,
                            "end": 165
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
                                    "type": "Literal",
                                    "value": "well this looks kinda C-ish.",
                                    "raw": "\"well this looks kinda C-ish.\"",
                                    "start": 193,
                                    "end": 223
                                  },
                                  "start": 186,
                                  "end": 224
                                }
                              ],
                              "start": 168,
                              "end": 238
                            },
                            "expression": false,
                            "start": 165,
                            "end": 238
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 162,
                          "end": 238
                        }
                      ],
                      "start": 122,
                      "end": 248
                    },
                    "start": 115,
                    "end": 248
                  }
                ],
                "start": 105,
                "end": 254
              },
              "expression": false,
              "start": 89,
              "end": 254
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 78,
            "end": 254
          }
        ],
        "start": 8,
        "end": 256
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 256
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 264,
        "end": 265
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 274,
        "end": 275
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "dProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 282,
              "end": 287
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "ThisExpression",
                "start": 296,
                "end": 300
              },
              "id": null,
              "generator": false,
              "start": 290,
              "end": 300
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 282,
            "end": 301
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 318
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 319,
                    "end": 320
                  },
                  "right": {
                    "type": "Literal",
                    "value": 100,
                    "raw": "100",
                    "start": 323,
                    "end": 326
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 319,
                  "end": 326
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
                        "type": "Super",
                        "start": 338,
                        "end": 343
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 344,
                          "end": 345
                        }
                      ],
                      "optional": false,
                      "start": 338,
                      "end": 346
                    },
                    "directive": null,
                    "start": 338,
                    "end": 347
                  },
                  {
                    "type": "IfStatement",
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
                            "start": 361,
                            "end": 365
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 366,
                            "end": 372
                          },
                          "optional": false,
                          "computed": false,
                          "start": 361,
                          "end": 372
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 361,
                        "end": 374
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 0.5,
                        "raw": "0.5",
                        "start": 377,
                        "end": 380
                      },
                      "start": 361,
                      "end": 380
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "Literal",
                            "value": "You win!",
                            "raw": "\"You win!\"",
                            "start": 396,
                            "end": 406
                          },
                          "directive": null,
                          "start": 396,
                          "end": 406
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "cProp",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 444,
                                  "end": 449
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 451,
                                  "end": 452
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 444,
                                "end": 452
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "dProp",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 470,
                                  "end": 475
                                },
                                "value": {
                                  "type": "ArrowFunctionExpression",
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": null,
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 483,
                                    "end": 487
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 477,
                                  "end": 487
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 470,
                                "end": 487
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "foo",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 505,
                                  "end": 508
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
                                          "type": "Literal",
                                          "value": "You win!!!!!",
                                          "raw": "\"You win!!!!!\"",
                                          "start": 520,
                                          "end": 534
                                        },
                                        "start": 513,
                                        "end": 534
                                      }
                                    ],
                                    "start": 511,
                                    "end": 536
                                  },
                                  "expression": false,
                                  "start": 508,
                                  "end": 536
                                },
                                "method": true,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 505,
                                "end": 536
                              }
                            ],
                            "start": 426,
                            "end": 550
                          },
                          "start": 419,
                          "end": 551
                        }
                      ],
                      "start": 382,
                      "end": 561
                    },
                    "alternate": {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 594,
                        "end": 598
                      },
                      "start": 587,
                      "end": 599
                    },
                    "start": 357,
                    "end": 599
                  }
                ],
                "start": 328,
                "end": 605
              },
              "expression": false,
              "start": 318,
              "end": 605
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 307,
            "end": 605
          }
        ],
        "start": 276,
        "end": 607
      },
      "abstract": false,
      "declare": false,
      "start": 258,
      "end": 607
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 607
}
```

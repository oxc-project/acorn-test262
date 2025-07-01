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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "MetaProperty",
            "meta": {
              "type": "Identifier",
              "decorators": [],
              "name": "new",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 13
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "target",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 20
            },
            "start": 10,
            "end": 20
          },
          "definite": false,
          "start": 6,
          "end": 20
        }
      ],
      "declare": false,
      "start": 0,
      "end": 21
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 29
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "MetaProperty",
              "meta": {
                "type": "Identifier",
                "decorators": [],
                "name": "new",
                "optional": false,
                "typeAnnotation": null,
                "start": 38,
                "end": 41
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "target",
                "optional": false,
                "typeAnnotation": null,
                "start": 42,
                "end": 48
              },
              "start": 38,
              "end": 48
            },
            "id": null,
            "generator": false,
            "start": 32,
            "end": 48
          },
          "definite": false,
          "start": 28,
          "end": 48
        }
      ],
      "declare": false,
      "start": 22,
      "end": 49
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 58
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MetaProperty",
              "meta": {
                "type": "Identifier",
                "decorators": [],
                "name": "new",
                "optional": false,
                "typeAnnotation": null,
                "start": 66,
                "end": 69
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "target",
                "optional": false,
                "typeAnnotation": null,
                "start": 70,
                "end": 76
              },
              "start": 66,
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
                "body": [],
                "start": 80,
                "end": 83
              },
              "expression": false,
              "start": 77,
              "end": 83
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 65,
            "end": 83
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 89
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
                      "type": "MetaProperty",
                      "meta": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "new",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 101,
                        "end": 104
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "target",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 105,
                        "end": 111
                      },
                      "start": 101,
                      "end": 111
                    },
                    "start": 94,
                    "end": 112
                  }
                ],
                "start": 92,
                "end": 114
              },
              "expression": false,
              "start": 89,
              "end": 114
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 88,
            "end": 114
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 124
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
                      "type": "MetaProperty",
                      "meta": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "new",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 136,
                        "end": 139
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "target",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 140,
                        "end": 146
                      },
                      "start": 136,
                      "end": 146
                    },
                    "start": 129,
                    "end": 147
                  }
                ],
                "start": 127,
                "end": 149
              },
              "expression": false,
              "start": 124,
              "end": 149
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 119,
            "end": 149
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 158,
              "end": 159
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
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 160,
                  "end": 161
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
                        "name": "_",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 165,
                        "end": 166
                      },
                      "right": {
                        "type": "MetaProperty",
                        "meta": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "new",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 169,
                          "end": 172
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "target",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 173,
                          "end": 179
                        },
                        "start": 169,
                        "end": 179
                      },
                      "start": 165,
                      "end": 179
                    },
                    "directive": null,
                    "start": 165,
                    "end": 180
                  }
                ],
                "start": 163,
                "end": 182
              },
              "expression": false,
              "start": 159,
              "end": 182
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 154,
            "end": 182
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 188
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
                "type": "MetaProperty",
                "meta": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "new",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 197,
                  "end": 200
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 207
                },
                "start": 197,
                "end": 207
              },
              "id": null,
              "generator": false,
              "start": 191,
              "end": 207
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 187,
            "end": 208
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MetaProperty",
              "meta": {
                "type": "Identifier",
                "decorators": [],
                "name": "new",
                "optional": false,
                "typeAnnotation": null,
                "start": 222,
                "end": 225
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "target",
                "optional": false,
                "typeAnnotation": null,
                "start": 226,
                "end": 232
              },
              "start": 222,
              "end": 232
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
                "body": [],
                "start": 236,
                "end": 239
              },
              "expression": false,
              "start": 233,
              "end": 239
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 214,
            "end": 239
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 252
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
                      "type": "MetaProperty",
                      "meta": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "new",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 264,
                        "end": 267
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "target",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 268,
                        "end": 274
                      },
                      "start": 264,
                      "end": 274
                    },
                    "start": 257,
                    "end": 275
                  }
                ],
                "start": 255,
                "end": 277
              },
              "expression": false,
              "start": 252,
              "end": 277
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 244,
            "end": 277
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 293,
              "end": 294
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
                      "type": "MetaProperty",
                      "meta": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "new",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 306,
                        "end": 309
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "target",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 310,
                        "end": 316
                      },
                      "start": 306,
                      "end": 316
                    },
                    "start": 299,
                    "end": 317
                  }
                ],
                "start": 297,
                "end": 319
              },
              "expression": false,
              "start": 294,
              "end": 319
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 282,
            "end": 319
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 336
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
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 338
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
                        "name": "_",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 342,
                        "end": 343
                      },
                      "right": {
                        "type": "MetaProperty",
                        "meta": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "new",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 346,
                          "end": 349
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "target",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 350,
                          "end": 356
                        },
                        "start": 346,
                        "end": 356
                      },
                      "start": 342,
                      "end": 356
                    },
                    "directive": null,
                    "start": 342,
                    "end": 357
                  }
                ],
                "start": 340,
                "end": 359
              },
              "expression": false,
              "start": 336,
              "end": 359
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 324,
            "end": 359
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null,
              "start": 371,
              "end": 372
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
                "type": "MetaProperty",
                "meta": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "new",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 381,
                  "end": 384
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 385,
                  "end": 391
                },
                "start": 381,
                "end": 391
              },
              "id": null,
              "generator": false,
              "start": 375,
              "end": 391
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 364,
            "end": 392
          }
        ],
        "start": 59,
        "end": 394
      },
      "abstract": false,
      "declare": false,
      "start": 51,
      "end": 394
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
            "name": "O",
            "optional": false,
            "typeAnnotation": null,
            "start": 402,
            "end": 403
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MetaProperty",
                  "meta": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "new",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 413,
                    "end": 416
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "target",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 417,
                    "end": 423
                  },
                  "start": 413,
                  "end": 423
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 426,
                  "end": 435
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 412,
                "end": 435
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 441,
                  "end": 442
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
                          "type": "MetaProperty",
                          "meta": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "new",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 454,
                            "end": 457
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "target",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 458,
                            "end": 464
                          },
                          "start": 454,
                          "end": 464
                        },
                        "start": 447,
                        "end": 465
                      }
                    ],
                    "start": 445,
                    "end": 467
                  },
                  "expression": false,
                  "start": 442,
                  "end": 467
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 441,
                "end": 467
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 477,
                  "end": 478
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
                          "type": "MetaProperty",
                          "meta": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "new",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 490,
                            "end": 493
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "target",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 494,
                            "end": 500
                          },
                          "start": 490,
                          "end": 500
                        },
                        "start": 483,
                        "end": 501
                      }
                    ],
                    "start": 481,
                    "end": 503
                  },
                  "expression": false,
                  "start": 478,
                  "end": 503
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 473,
                "end": 503
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 513,
                  "end": 514
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
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 515,
                      "end": 516
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
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 520,
                            "end": 521
                          },
                          "right": {
                            "type": "MetaProperty",
                            "meta": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "new",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 524,
                              "end": 527
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "target",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 528,
                              "end": 534
                            },
                            "start": 524,
                            "end": 534
                          },
                          "start": 520,
                          "end": 534
                        },
                        "directive": null,
                        "start": 520,
                        "end": 535
                      }
                    ],
                    "start": 518,
                    "end": 537
                  },
                  "expression": false,
                  "start": 514,
                  "end": 537
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 509,
                "end": 537
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 543,
                  "end": 544
                },
                "value": {
                  "type": "MetaProperty",
                  "meta": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "new",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 546,
                    "end": 549
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "target",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 550,
                    "end": 556
                  },
                  "start": 546,
                  "end": 556
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 543,
                "end": 556
              }
            ],
            "start": 406,
            "end": 559
          },
          "definite": false,
          "start": 402,
          "end": 559
        }
      ],
      "declare": false,
      "start": 396,
      "end": 560
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 560
}
```

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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
              "name": "numProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 25
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 27,
                "end": 33
              },
              "start": 25,
              "end": 33
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 34
          }
        ],
        "start": 12,
        "end": 36
      },
      "declare": false,
      "start": 0,
      "end": 36
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 49
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
              "name": "strProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 64
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 66,
                "end": 72
              },
              "start": 64,
              "end": 72
            },
            "accessibility": null,
            "static": false,
            "start": 57,
            "end": 73
          }
        ],
        "start": 51,
        "end": 75
      },
      "declare": false,
      "start": 38,
      "end": 75
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 90
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 104
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 110,
                      "end": 111
                    },
                    "typeArguments": null,
                    "start": 110,
                    "end": 111
                  },
                  "start": 108,
                  "end": 111
                },
                "start": 105,
                "end": 111
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 114,
                "end": 118
              },
              "start": 112,
              "end": 118
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 97,
            "end": 119
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 131
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 137,
                      "end": 138
                    },
                    "typeArguments": null,
                    "start": 137,
                    "end": 138
                  },
                  "start": 135,
                  "end": 138
                },
                "start": 132,
                "end": 138
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 141,
                "end": 145
              },
              "start": 139,
              "end": 145
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 124,
            "end": 146
          }
        ],
        "start": 91,
        "end": 148
      },
      "declare": false,
      "start": 77,
      "end": 148
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFoo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 159,
        "end": 166
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 170,
            "end": 173
          },
          "typeArguments": null,
          "start": 170,
          "end": 173
        },
        "start": 168,
        "end": 173
      },
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
                    "name": "method1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 197,
                    "end": 204
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
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 205,
                        "end": 208
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
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arg",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 224,
                                "end": 227
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "numProp",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 228,
                                "end": 235
                              },
                              "optional": false,
                              "computed": false,
                              "start": 224,
                              "end": 235
                            },
                            "right": {
                              "type": "Literal",
                              "value": 10,
                              "raw": "10",
                              "start": 238,
                              "end": 240
                            },
                            "start": 224,
                            "end": 240
                          },
                          "directive": null,
                          "start": 224,
                          "end": 241
                        }
                      ],
                      "start": 210,
                      "end": 251
                    },
                    "expression": false,
                    "start": 204,
                    "end": 251
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 197,
                  "end": 251
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "method2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 261,
                    "end": 268
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
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 269,
                        "end": 272
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
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arg",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 288,
                                "end": 291
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "strProp",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 292,
                                "end": 299
                              },
                              "optional": false,
                              "computed": false,
                              "start": 288,
                              "end": 299
                            },
                            "right": {
                              "type": "Literal",
                              "value": "hello",
                              "raw": "\"hello\"",
                              "start": 302,
                              "end": 309
                            },
                            "start": 288,
                            "end": 309
                          },
                          "directive": null,
                          "start": 288,
                          "end": 310
                        }
                      ],
                      "start": 274,
                      "end": 320
                    },
                    "expression": false,
                    "start": 268,
                    "end": 320
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 261,
                  "end": 320
                }
              ],
              "start": 187,
              "end": 326
            },
            "start": 180,
            "end": 326
          }
        ],
        "start": 174,
        "end": 328
      },
      "expression": false,
      "start": 150,
      "end": 328
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFoo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 339,
        "end": 346
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 350,
            "end": 353
          },
          "typeArguments": null,
          "start": 350,
          "end": 353
        },
        "start": 348,
        "end": 353
      },
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
                    "name": "method1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 377,
                    "end": 384
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 387,
                        "end": 390
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
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arg",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 409,
                                "end": 412
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "numProp",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 413,
                                "end": 420
                              },
                              "optional": false,
                              "computed": false,
                              "start": 409,
                              "end": 420
                            },
                            "right": {
                              "type": "Literal",
                              "value": 10,
                              "raw": "10",
                              "start": 423,
                              "end": 425
                            },
                            "start": 409,
                            "end": 425
                          },
                          "directive": null,
                          "start": 409,
                          "end": 426
                        }
                      ],
                      "start": 395,
                      "end": 436
                    },
                    "id": null,
                    "generator": false,
                    "start": 386,
                    "end": 436
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 377,
                  "end": 436
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "method2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 446,
                    "end": 453
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 456,
                        "end": 459
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
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arg",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 478,
                                "end": 481
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "strProp",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 482,
                                "end": 489
                              },
                              "optional": false,
                              "computed": false,
                              "start": 478,
                              "end": 489
                            },
                            "right": {
                              "type": "Literal",
                              "value": "hello",
                              "raw": "\"hello\"",
                              "start": 492,
                              "end": 499
                            },
                            "start": 478,
                            "end": 499
                          },
                          "directive": null,
                          "start": 478,
                          "end": 500
                        }
                      ],
                      "start": 464,
                      "end": 510
                    },
                    "id": null,
                    "generator": false,
                    "start": 455,
                    "end": 510
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 446,
                  "end": 510
                }
              ],
              "start": 367,
              "end": 516
            },
            "start": 360,
            "end": 516
          }
        ],
        "start": 354,
        "end": 518
      },
      "expression": false,
      "start": 330,
      "end": 518
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFoo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 529,
        "end": 536
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 540,
            "end": 543
          },
          "typeArguments": null,
          "start": 540,
          "end": 543
        },
        "start": 538,
        "end": 543
      },
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
                    "name": "method1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 567,
                    "end": 574
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
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 586,
                        "end": 589
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
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arg",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 605,
                                "end": 608
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "numProp",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 609,
                                "end": 616
                              },
                              "optional": false,
                              "computed": false,
                              "start": 605,
                              "end": 616
                            },
                            "right": {
                              "type": "Literal",
                              "value": 10,
                              "raw": "10",
                              "start": 619,
                              "end": 621
                            },
                            "start": 605,
                            "end": 621
                          },
                          "directive": null,
                          "start": 605,
                          "end": 622
                        }
                      ],
                      "start": 591,
                      "end": 632
                    },
                    "expression": false,
                    "start": 576,
                    "end": 632
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 567,
                  "end": 632
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "method2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 642,
                    "end": 649
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
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 661,
                        "end": 664
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
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arg",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 680,
                                "end": 683
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "strProp",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 684,
                                "end": 691
                              },
                              "optional": false,
                              "computed": false,
                              "start": 680,
                              "end": 691
                            },
                            "right": {
                              "type": "Literal",
                              "value": "hello",
                              "raw": "\"hello\"",
                              "start": 694,
                              "end": 701
                            },
                            "start": 680,
                            "end": 701
                          },
                          "directive": null,
                          "start": 680,
                          "end": 702
                        }
                      ],
                      "start": 666,
                      "end": 712
                    },
                    "expression": false,
                    "start": 651,
                    "end": 712
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 642,
                  "end": 712
                }
              ],
              "start": 557,
              "end": 718
            },
            "start": 550,
            "end": 718
          }
        ],
        "start": 544,
        "end": 720
      },
      "expression": false,
      "start": 520,
      "end": 720
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 720
}
```

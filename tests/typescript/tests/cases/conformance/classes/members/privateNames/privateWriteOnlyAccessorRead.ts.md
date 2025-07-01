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
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
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
              "type": "PrivateIdentifier",
              "name": "value",
              "start": 19,
              "end": 25
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
                  "name": "v",
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
                            "start": 31,
                            "end": 34
                          },
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
                                    "name": "bar",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 38,
                                    "end": 41
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 43,
                                      "end": 49
                                    },
                                    "start": 41,
                                    "end": 49
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 38,
                                  "end": 49
                                }
                              ],
                              "start": 36,
                              "end": 51
                            },
                            "start": 34,
                            "end": 51
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 31,
                          "end": 51
                        }
                      ],
                      "start": 29,
                      "end": 53
                    },
                    "start": 27,
                    "end": 53
                  },
                  "start": 26,
                  "end": 53
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 55,
                "end": 57
              },
              "expression": false,
              "start": 25,
              "end": 57
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 15,
            "end": 57
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "valueRest",
              "start": 64,
              "end": 74
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 78,
                        "end": 84
                      },
                      "start": 78,
                      "end": 86
                    },
                    "start": 76,
                    "end": 86
                  },
                  "start": 75,
                  "end": 86
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 88,
                "end": 90
              },
              "expression": false,
              "start": 74,
              "end": 90
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 60,
            "end": 90
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "valueOne",
              "start": 97,
              "end": 106
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 110,
                      "end": 116
                    },
                    "start": 108,
                    "end": 116
                  },
                  "start": 107,
                  "end": 116
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 118,
                "end": 120
              },
              "expression": false,
              "start": 106,
              "end": 120
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 93,
            "end": 120
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "valueCompound",
              "start": 127,
              "end": 141
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 145,
                      "end": 151
                    },
                    "start": 143,
                    "end": 151
                  },
                  "start": 142,
                  "end": 151
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 153,
                "end": 155
              },
              "expression": false,
              "start": 141,
              "end": 155
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 123,
            "end": 155
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 160
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
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 175,
                          "end": 178
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
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 183,
                                "end": 186
                              },
                              "value": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 188,
                                "end": 189
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 183,
                              "end": 189
                            }
                          ],
                          "start": 181,
                          "end": 191
                        },
                        "definite": false,
                        "start": 175,
                        "end": 191
                      }
                    ],
                    "declare": false,
                    "start": 169,
                    "end": 192
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 197,
                          "end": 204
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 205,
                          "end": 208
                        },
                        "optional": false,
                        "computed": false,
                        "start": 197,
                        "end": 208
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 209,
                            "end": 213
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "value",
                            "start": 214,
                            "end": 220
                          },
                          "optional": false,
                          "computed": false,
                          "start": 209,
                          "end": 220
                        }
                      ],
                      "optional": false,
                      "start": 197,
                      "end": 221
                    },
                    "directive": null,
                    "start": 197,
                    "end": 222
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 236,
                          "end": 240
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "value",
                          "start": 241,
                          "end": 247
                        },
                        "optional": false,
                        "computed": false,
                        "start": 236,
                        "end": 247
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
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 252,
                              "end": 255
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 252,
                              "end": 255
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 252,
                            "end": 255
                          }
                        ],
                        "start": 250,
                        "end": 257
                      },
                      "start": 236,
                      "end": 257
                    },
                    "directive": null,
                    "start": 236,
                    "end": 258
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 269,
                          "end": 273
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "value",
                          "start": 274,
                          "end": 280
                        },
                        "optional": false,
                        "computed": false,
                        "start": 269,
                        "end": 280
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
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 285,
                              "end": 288
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 285,
                              "end": 288
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 285,
                            "end": 288
                          }
                        ],
                        "start": 283,
                        "end": 290
                      },
                      "start": 269,
                      "end": 290
                    },
                    "directive": null,
                    "start": 269,
                    "end": 291
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 302,
                            "end": 306
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "value",
                            "start": 307,
                            "end": 313
                          },
                          "optional": false,
                          "computed": false,
                          "start": 302,
                          "end": 313
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 314,
                          "end": 317
                        },
                        "optional": false,
                        "computed": false,
                        "start": 302,
                        "end": 317
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 320,
                        "end": 323
                      },
                      "start": 302,
                      "end": 323
                    },
                    "directive": null,
                    "start": 302,
                    "end": 324
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "o",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 342,
                              "end": 343
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 345,
                                "end": 349
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "value",
                                "start": 350,
                                "end": 356
                              },
                              "optional": false,
                              "computed": false,
                              "start": 345,
                              "end": 356
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 342,
                            "end": 356
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 340,
                        "end": 358
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
                              "name": "o",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 363,
                              "end": 364
                            },
                            "value": {
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
                                    "start": 368,
                                    "end": 371
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "foo",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 368,
                                    "end": 371
                                  },
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "optional": false,
                                  "start": 368,
                                  "end": 371
                                }
                              ],
                              "start": 366,
                              "end": 373
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 363,
                            "end": 373
                          }
                        ],
                        "start": 361,
                        "end": 375
                      },
                      "start": 340,
                      "end": 375
                    },
                    "directive": null,
                    "start": 339,
                    "end": 377
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 393,
                                "end": 397
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "value",
                                "start": 398,
                                "end": 404
                              },
                              "optional": false,
                              "computed": false,
                              "start": 393,
                              "end": 404
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "value": null,
                            "start": 390,
                            "end": 404
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 388,
                        "end": 406
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
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 411,
                              "end": 414
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 411,
                              "end": 414
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 411,
                            "end": 414
                          }
                        ],
                        "start": 409,
                        "end": 416
                      },
                      "start": 388,
                      "end": 416
                    },
                    "directive": null,
                    "start": 387,
                    "end": 418
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "decorators": [],
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
                              "start": 432,
                              "end": 435
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 437,
                                  "end": 441
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "value",
                                  "start": 442,
                                  "end": 448
                                },
                                "optional": false,
                                "computed": false,
                                "start": 437,
                                "end": 448
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 449,
                                "end": 452
                              },
                              "optional": false,
                              "computed": false,
                              "start": 437,
                              "end": 452
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 432,
                            "end": 452
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 430,
                        "end": 454
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
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 459,
                              "end": 462
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 459,
                              "end": 462
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 459,
                            "end": 462
                          }
                        ],
                        "start": 457,
                        "end": 464
                      },
                      "start": 430,
                      "end": 464
                    },
                    "directive": null,
                    "start": 429,
                    "end": 466
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "decorators": [],
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
                              "start": 488,
                              "end": 491
                            },
                            "value": {
                              "type": "ObjectPattern",
                              "decorators": [],
                              "properties": [
                                {
                                  "type": "RestElement",
                                  "decorators": [],
                                  "argument": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 498,
                                        "end": 502
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "value",
                                        "start": 503,
                                        "end": 509
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 498,
                                      "end": 509
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "foo",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 510,
                                      "end": 513
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 498,
                                    "end": 513
                                  },
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "value": null,
                                  "start": 495,
                                  "end": 513
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 493,
                              "end": 515
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 488,
                            "end": 515
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 480,
                        "end": 522
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
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 527,
                              "end": 530
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 527,
                              "end": 530
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 527,
                            "end": 530
                          }
                        ],
                        "start": 525,
                        "end": 532
                      },
                      "start": 480,
                      "end": 532
                    },
                    "directive": null,
                    "start": 479,
                    "end": 534
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
                          "name": "r",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 552,
                          "end": 553
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
                                "name": "o",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 558,
                                "end": 559
                              },
                              "value": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 561,
                                  "end": 565
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "value",
                                  "start": 566,
                                  "end": 572
                                },
                                "optional": false,
                                "computed": false,
                                "start": 561,
                                "end": 572
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 558,
                              "end": 572
                            }
                          ],
                          "start": 556,
                          "end": 574
                        },
                        "definite": false,
                        "start": 552,
                        "end": 574
                      }
                    ],
                    "declare": false,
                    "start": 548,
                    "end": 575
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 590,
                              "end": 594
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "valueOne",
                              "start": 595,
                              "end": 604
                            },
                            "optional": false,
                            "computed": false,
                            "start": 590,
                            "end": 604
                          },
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 609,
                                "end": 613
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "valueRest",
                                "start": 614,
                                "end": 624
                              },
                              "optional": false,
                              "computed": false,
                              "start": 609,
                              "end": 624
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "value": null,
                            "start": 606,
                            "end": 624
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 589,
                        "end": 625
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 629,
                            "end": 630
                          },
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 632,
                            "end": 633
                          },
                          {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 635,
                            "end": 636
                          }
                        ],
                        "start": 628,
                        "end": 637
                      },
                      "start": 589,
                      "end": 637
                    },
                    "directive": null,
                    "start": 589,
                    "end": 638
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
                          "name": "arr",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 647,
                          "end": 650
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 663,
                                "end": 667
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "valueOne",
                                "start": 668,
                                "end": 677
                              },
                              "optional": false,
                              "computed": false,
                              "start": 663,
                              "end": 677
                            },
                            {
                              "type": "SpreadElement",
                              "argument": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 690,
                                  "end": 694
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "valueRest",
                                  "start": 695,
                                  "end": 705
                                },
                                "optional": false,
                                "computed": false,
                                "start": 690,
                                "end": 705
                              },
                              "start": 687,
                              "end": 705
                            }
                          ],
                          "start": 653,
                          "end": 711
                        },
                        "definite": false,
                        "start": 647,
                        "end": 711
                      }
                    ],
                    "declare": false,
                    "start": 643,
                    "end": 712
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 718,
                          "end": 722
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "valueCompound",
                          "start": 723,
                          "end": 737
                        },
                        "optional": false,
                        "computed": false,
                        "start": 718,
                        "end": 737
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 741,
                        "end": 742
                      },
                      "start": 718,
                      "end": 742
                    },
                    "directive": null,
                    "start": 718,
                    "end": 743
                  }
                ],
                "start": 163,
                "end": 747
              },
              "expression": false,
              "start": 160,
              "end": 747
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 159,
            "end": 747
          }
        ],
        "start": 11,
        "end": 749
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 749
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Test",
              "optional": false,
              "typeAnnotation": null,
              "start": 754,
              "end": 758
            },
            "typeArguments": null,
            "arguments": [],
            "start": 750,
            "end": 760
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 761,
            "end": 762
          },
          "optional": false,
          "computed": false,
          "start": 750,
          "end": 762
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 750,
        "end": 764
      },
      "directive": null,
      "start": 750,
      "end": 765
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 765
}
```

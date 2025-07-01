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
        "name": "A",
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
              "type": "PrivateIdentifier",
              "name": "field",
              "start": 21,
              "end": 27
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 30,
              "end": 31
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 32
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "otherClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 47
            },
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 51
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 37,
            "end": 52
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "testObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 67
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
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 89,
                            "end": 90
                          },
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 92,
                            "end": 94
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 89,
                          "end": 94
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 96,
                            "end": 97
                          },
                          "value": {
                            "type": "Literal",
                            "value": 6,
                            "raw": "6",
                            "start": 99,
                            "end": 100
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 96,
                          "end": 100
                        }
                      ],
                      "start": 87,
                      "end": 102
                    },
                    "start": 80,
                    "end": 103
                  }
                ],
                "start": 70,
                "end": 109
              },
              "expression": false,
              "start": 67,
              "end": 109
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 57,
            "end": 109
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "testArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 123
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
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 144,
                          "end": 146
                        },
                        {
                          "type": "Literal",
                          "value": 11,
                          "raw": "11",
                          "start": 148,
                          "end": 150
                        }
                      ],
                      "start": 143,
                      "end": 151
                    },
                    "start": 136,
                    "end": 152
                  }
                ],
                "start": 126,
                "end": 158
              },
              "expression": false,
              "start": 123,
              "end": 158
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 114,
            "end": 158
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
              "start": 163,
              "end": 174
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
                    "kind": "let",
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
                              "type": "TSNumberKeyword",
                              "start": 194,
                              "end": 200
                            },
                            "start": 192,
                            "end": 200
                          },
                          "start": 191,
                          "end": 200
                        },
                        "init": null,
                        "definite": false,
                        "start": 191,
                        "end": 200
                      }
                    ],
                    "declare": false,
                    "start": 187,
                    "end": 201
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 213,
                              "end": 214
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 216,
                                "end": 217
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "field",
                                "start": 218,
                                "end": 224
                              },
                              "optional": false,
                              "computed": false,
                              "start": 216,
                              "end": 224
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 213,
                            "end": 224
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 226,
                              "end": 227
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 226,
                              "end": 227
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 226,
                            "end": 227
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 211,
                        "end": 229
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 232,
                            "end": 236
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testObject",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 237,
                            "end": 247
                          },
                          "optional": false,
                          "computed": false,
                          "start": 232,
                          "end": 247
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 232,
                        "end": 249
                      },
                      "start": 211,
                      "end": 249
                    },
                    "directive": null,
                    "start": 210,
                    "end": 251
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 262,
                              "end": 263
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "field",
                              "start": 264,
                              "end": 270
                            },
                            "optional": false,
                            "computed": false,
                            "start": 262,
                            "end": 270
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 272,
                            "end": 273
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 261,
                        "end": 274
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 277,
                            "end": 281
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testArray",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 282,
                            "end": 291
                          },
                          "optional": false,
                          "computed": false,
                          "start": 277,
                          "end": 291
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 277,
                        "end": 293
                      },
                      "start": 261,
                      "end": 293
                    },
                    "directive": null,
                    "start": 260,
                    "end": 295
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 307,
                              "end": 308
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 310,
                                "end": 311
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "field",
                                "start": 312,
                                "end": 318
                              },
                              "optional": false,
                              "computed": false,
                              "start": 310,
                              "end": 318
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 307,
                            "end": 318
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 320,
                              "end": 321
                            },
                            "value": {
                              "type": "ArrayPattern",
                              "decorators": [],
                              "elements": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 324,
                                    "end": 325
                                  },
                                  "property": {
                                    "type": "PrivateIdentifier",
                                    "name": "field",
                                    "start": 326,
                                    "end": 332
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 324,
                                  "end": 332
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 323,
                              "end": 333
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 320,
                            "end": 333
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 305,
                        "end": 335
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 340,
                              "end": 341
                            },
                            "value": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 343,
                              "end": 344
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 340,
                            "end": 344
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 346,
                              "end": 347
                            },
                            "value": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2",
                                  "start": 350,
                                  "end": 351
                                }
                              ],
                              "start": 349,
                              "end": 352
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 346,
                            "end": 352
                          }
                        ],
                        "start": 338,
                        "end": 354
                      },
                      "start": 305,
                      "end": 354
                    },
                    "directive": null,
                    "start": 304,
                    "end": 356
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 366,
                              "end": 367
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "field",
                              "start": 368,
                              "end": 374
                            },
                            "optional": false,
                            "computed": false,
                            "start": 366,
                            "end": 374
                          },
                          {
                            "type": "ArrayPattern",
                            "decorators": [],
                            "elements": [
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 377,
                                  "end": 378
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "field",
                                  "start": 379,
                                  "end": 385
                                },
                                "optional": false,
                                "computed": false,
                                "start": 377,
                                "end": 385
                              }
                            ],
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 376,
                            "end": 386
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 365,
                        "end": 387
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 391,
                            "end": 392
                          },
                          {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 395,
                                "end": 396
                              }
                            ],
                            "start": 394,
                            "end": 397
                          }
                        ],
                        "start": 390,
                        "end": 398
                      },
                      "start": 365,
                      "end": 398
                    },
                    "directive": null,
                    "start": 365,
                    "end": 399
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 411,
                              "end": 412
                            },
                            "value": {
                              "type": "AssignmentPattern",
                              "decorators": [],
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 414,
                                  "end": 415
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "field",
                                  "start": 416,
                                  "end": 422
                                },
                                "optional": false,
                                "computed": false,
                                "start": 414,
                                "end": 422
                              },
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 425,
                                "end": 426
                              },
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 414,
                              "end": 426
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 411,
                            "end": 426
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 428,
                              "end": 429
                            },
                            "value": {
                              "type": "ArrayPattern",
                              "decorators": [],
                              "elements": [
                                {
                                  "type": "AssignmentPattern",
                                  "decorators": [],
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 432,
                                      "end": 433
                                    },
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "name": "field",
                                      "start": 434,
                                      "end": 440
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 432,
                                    "end": 440
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 443,
                                    "end": 444
                                  },
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 432,
                                  "end": 444
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 431,
                              "end": 445
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 428,
                            "end": 445
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 409,
                        "end": 447
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
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 452,
                              "end": 453
                            },
                            "value": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "start": 455,
                              "end": 457
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 452,
                            "end": 457
                          }
                        ],
                        "start": 450,
                        "end": 459
                      },
                      "start": 409,
                      "end": 459
                    },
                    "directive": null,
                    "start": 408,
                    "end": 461
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
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 471,
                                "end": 472
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "field",
                                "start": 473,
                                "end": 479
                              },
                              "optional": false,
                              "computed": false,
                              "start": 471,
                              "end": 479
                            },
                            "right": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 482,
                              "end": 483
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 471,
                            "end": 483
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 470,
                        "end": 484
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "start": 487,
                        "end": 489
                      },
                      "start": 470,
                      "end": 489
                    },
                    "directive": null,
                    "start": 470,
                    "end": 490
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
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 500,
                                  "end": 504
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "otherClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 505,
                                  "end": 515
                                },
                                "optional": false,
                                "computed": false,
                                "start": 500,
                                "end": 515
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "field",
                                "start": 516,
                                "end": 522
                              },
                              "optional": false,
                              "computed": false,
                              "start": 500,
                              "end": 522
                            },
                            "right": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 525,
                              "end": 526
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 500,
                            "end": 526
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 499,
                        "end": 527
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "start": 530,
                        "end": 532
                      },
                      "start": 499,
                      "end": 532
                    },
                    "directive": null,
                    "start": 499,
                    "end": 533
                  }
                ],
                "start": 177,
                "end": 539
              },
              "expression": false,
              "start": 174,
              "end": 539
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 163,
            "end": 539
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 551,
              "end": 555
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
                  "name": "_a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 567,
                        "end": 568
                      },
                      "typeArguments": null,
                      "start": 560,
                      "end": 568
                    },
                    "start": 558,
                    "end": 568
                  },
                  "start": 556,
                  "end": 568
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
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 581,
                              "end": 583
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "field",
                              "start": 584,
                              "end": 590
                            },
                            "optional": false,
                            "computed": false,
                            "start": 581,
                            "end": 590
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 580,
                        "end": 591
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 595,
                            "end": 596
                          }
                        ],
                        "start": 594,
                        "end": 597
                      },
                      "start": 580,
                      "end": 597
                    },
                    "directive": null,
                    "start": 580,
                    "end": 598
                  }
                ],
                "start": 570,
                "end": 604
              },
              "expression": false,
              "start": 555,
              "end": 604
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 544,
            "end": 604
          }
        ],
        "start": 8,
        "end": 606
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 606
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 606
}
```

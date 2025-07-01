__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 10,
            "end": 12
          },
          "definite": false,
          "start": 4,
          "end": 12
        }
      ],
      "declare": false,
      "start": 0,
      "end": 13
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 23
            },
            "start": 17,
            "end": 23
          }
        ],
        "start": 16,
        "end": 24
      },
      "directive": null,
      "start": 15,
      "end": 26
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 41
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 37,
                    "end": 41
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "SpreadElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 49,
                          "end": 52
                        },
                        "start": 46,
                        "end": 52
                      }
                    ],
                    "start": 44,
                    "end": 54
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 54
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 37,
                "end": 54
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "more",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 64
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "more",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 60,
                    "end": 64
                  },
                  "right": {
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 72,
                            "end": 75
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "value": null,
                          "start": 69,
                          "end": 75
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 67,
                      "end": 77
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 85,
                            "end": 88
                          },
                          "start": 82,
                          "end": 88
                        }
                      ],
                      "start": 80,
                      "end": 90
                    },
                    "start": 67,
                    "end": 90
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 90
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 60,
                "end": 90
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 97,
                    "end": 99
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "other",
                    "raw": "'other'",
                    "start": 102,
                    "end": 109
                  },
                  "start": 97,
                  "end": 109
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "other",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 112,
                    "end": 117
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "SpreadElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 125,
                          "end": 128
                        },
                        "start": 122,
                        "end": 128
                      }
                    ],
                    "start": 120,
                    "end": 130
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 112,
                  "end": 130
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 96,
                "end": 130
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "yetAnother",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 146
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
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
                          "name": "nested",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 149,
                          "end": 155
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "ObjectPattern",
                            "decorators": [],
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "Literal",
                                    "value": "nested",
                                    "raw": "'nested'",
                                    "start": 160,
                                    "end": 168
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "Literal",
                                    "value": "prop",
                                    "raw": "'prop'",
                                    "start": 171,
                                    "end": 177
                                  },
                                  "start": 160,
                                  "end": 177
                                },
                                "value": {
                                  "type": "AssignmentPattern",
                                  "decorators": [],
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "nestedProp",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 180,
                                    "end": 190
                                  },
                                  "right": {
                                    "type": "ObjectExpression",
                                    "properties": [
                                      {
                                        "type": "SpreadElement",
                                        "argument": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "obj",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 198,
                                          "end": 201
                                        },
                                        "start": 195,
                                        "end": 201
                                      }
                                    ],
                                    "start": 193,
                                    "end": 203
                                  },
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 180,
                                  "end": 203
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": true,
                                "optional": false,
                                "start": 159,
                                "end": 203
                              },
                              {
                                "type": "RestElement",
                                "decorators": [],
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "nestedRest",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 208,
                                  "end": 218
                                },
                                "optional": false,
                                "typeAnnotation": null,
                                "value": null,
                                "start": 205,
                                "end": 218
                              }
                            ],
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 157,
                            "end": 220
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "SpreadElement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "obj",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 228,
                                  "end": 231
                                },
                                "start": 225,
                                "end": 231
                              }
                            ],
                            "start": 223,
                            "end": 233
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 157,
                          "end": 233
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 149,
                        "end": 233
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 148,
                    "end": 234
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "SpreadElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 242,
                          "end": 245
                        },
                        "start": 239,
                        "end": 245
                      }
                    ],
                    "start": 237,
                    "end": 247
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 247
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 136,
                "end": 247
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 255
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 253,
                    "end": 255
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": true,
                    "async": true,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 276,
                      "end": 278
                    },
                    "expression": false,
                    "start": 258,
                    "end": 278
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 278
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 253,
                "end": 278
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 287,
                  "end": 292
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 284,
                "end": 292
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 294
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 297,
              "end": 299
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 303,
              "end": 306
            },
            "start": 297,
            "end": 306
          },
          "definite": false,
          "start": 31,
          "end": 306
        }
      ],
      "declare": false,
      "start": 27,
      "end": 307
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
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 316,
                "end": 320
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 320
                },
                "right": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 328,
                        "end": 331
                      },
                      "start": 325,
                      "end": 331
                    }
                  ],
                  "start": 323,
                  "end": 333
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 316,
                "end": 333
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 316,
              "end": 333
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 340,
                  "end": 342
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": "other",
                  "raw": "'other'",
                  "start": 345,
                  "end": 352
                },
                "start": 340,
                "end": 352
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "other",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 355,
                  "end": 360
                },
                "right": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 368,
                        "end": 371
                      },
                      "start": 365,
                      "end": 371
                    }
                  ],
                  "start": 363,
                  "end": 373
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 355,
                "end": 373
              },
              "method": false,
              "shorthand": false,
              "computed": true,
              "optional": false,
              "start": 339,
              "end": 373
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": null,
                "start": 382,
                "end": 387
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 379,
              "end": 387
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 310,
          "end": 389
        },
        "right": {
          "type": "TSAsExpression",
          "expression": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 392,
            "end": 394
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 398,
            "end": 401
          },
          "start": 392,
          "end": 401
        },
        "start": 310,
        "end": 401
      },
      "directive": null,
      "start": 309,
      "end": 402
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 413,
        "end": 417
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 428
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 424,
                  "end": 428
                },
                "right": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 436,
                        "end": 439
                      },
                      "start": 433,
                      "end": 439
                    }
                  ],
                  "start": 431,
                  "end": 441
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 441
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 424,
              "end": 441
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": null,
                "start": 450,
                "end": 455
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 447,
              "end": 455
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 418,
          "end": 457
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 459,
        "end": 461
      },
      "expression": false,
      "start": 404,
      "end": 461
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 461
}
```

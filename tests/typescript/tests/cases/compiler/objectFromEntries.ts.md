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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 10,
                "end": 16
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fromEntries",
                "optional": false,
                "typeAnnotation": null,
                "start": 17,
                "end": 28
              },
              "optional": false,
              "computed": false,
              "start": 10,
              "end": 28
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 31,
                        "end": 34
                      },
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 36,
                        "end": 37
                      }
                    ],
                    "start": 30,
                    "end": 38
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "b",
                        "raw": "'b'",
                        "start": 41,
                        "end": 44
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 46,
                        "end": 47
                      }
                    ],
                    "start": 40,
                    "end": 48
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "c",
                        "raw": "'c'",
                        "start": 51,
                        "end": 54
                      },
                      {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 56,
                        "end": 57
                      }
                    ],
                    "start": 50,
                    "end": 58
                  }
                ],
                "start": 29,
                "end": 59
              }
            ],
            "optional": false,
            "start": 10,
            "end": 60
          },
          "definite": false,
          "start": 6,
          "end": 60
        }
      ],
      "declare": false,
      "start": 0,
      "end": 61
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 70
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 73,
                "end": 79
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fromEntries",
                "optional": false,
                "typeAnnotation": null,
                "start": 80,
                "end": 91
              },
              "optional": false,
              "computed": false,
              "start": 73,
              "end": 91
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "URLSearchParams",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 111
                },
                "typeArguments": null,
                "arguments": [],
                "start": 92,
                "end": 113
              }
            ],
            "optional": false,
            "start": 73,
            "end": 114
          },
          "definite": false,
          "start": 68,
          "end": 114
        }
      ],
      "declare": false,
      "start": 62,
      "end": 115
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
            "name": "o3",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 124
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 133
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fromEntries",
                "optional": false,
                "typeAnnotation": null,
                "start": 134,
                "end": 145
              },
              "optional": false,
              "computed": false,
              "start": 127,
              "end": 145
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 150,
                  "end": 153
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Symbol",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 156,
                              "end": 162
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "key",
                                "raw": "\"key\"",
                                "start": 163,
                                "end": 168
                              }
                            ],
                            "optional": false,
                            "start": 156,
                            "end": 169
                          },
                          {
                            "type": "Literal",
                            "value": "value",
                            "raw": "\"value\"",
                            "start": 171,
                            "end": 178
                          }
                        ],
                        "start": 155,
                        "end": 179
                      }
                    ],
                    "start": 154,
                    "end": 180
                  }
                ],
                "start": 146,
                "end": 181
              }
            ],
            "optional": false,
            "start": 127,
            "end": 182
          },
          "definite": false,
          "start": 122,
          "end": 182
        }
      ],
      "declare": false,
      "start": 116,
      "end": 183
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
            "name": "frozenArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 191,
            "end": 202
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 205,
                "end": 211
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "freeze",
                "optional": false,
                "typeAnnotation": null,
                "start": 212,
                "end": 218
              },
              "optional": false,
              "computed": false,
              "start": 205,
              "end": 218
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 221,
                        "end": 224
                      },
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 226,
                        "end": 227
                      }
                    ],
                    "start": 220,
                    "end": 228
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "b",
                        "raw": "'b'",
                        "start": 231,
                        "end": 234
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 236,
                        "end": 237
                      }
                    ],
                    "start": 230,
                    "end": 238
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "c",
                        "raw": "'c'",
                        "start": 241,
                        "end": 244
                      },
                      {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 246,
                        "end": 247
                      }
                    ],
                    "start": 240,
                    "end": 248
                  }
                ],
                "start": 219,
                "end": 249
              }
            ],
            "optional": false,
            "start": 205,
            "end": 250
          },
          "definite": false,
          "start": 191,
          "end": 250
        }
      ],
      "declare": false,
      "start": 185,
      "end": 251
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
            "name": "o4",
            "optional": false,
            "typeAnnotation": null,
            "start": 258,
            "end": 260
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 263,
                "end": 269
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fromEntries",
                "optional": false,
                "typeAnnotation": null,
                "start": 270,
                "end": 281
              },
              "optional": false,
              "computed": false,
              "start": 263,
              "end": 281
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "frozenArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 282,
                "end": 293
              }
            ],
            "optional": false,
            "start": 263,
            "end": 294
          },
          "definite": false,
          "start": 258,
          "end": 294
        }
      ],
      "declare": false,
      "start": 252,
      "end": 295
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
            "name": "frozenArray2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSStringKeyword",
                        "start": 327,
                        "end": 333
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 335,
                        "end": 341
                      }
                    ],
                    "start": 326,
                    "end": 342
                  },
                  "start": 326,
                  "end": 344
                },
                "start": 317,
                "end": 344
              },
              "start": 315,
              "end": 344
            },
            "start": 303,
            "end": 344
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 347,
                "end": 353
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "freeze",
                "optional": false,
                "typeAnnotation": null,
                "start": 354,
                "end": 360
              },
              "optional": false,
              "computed": false,
              "start": 347,
              "end": 360
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 363,
                        "end": 366
                      },
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 368,
                        "end": 369
                      }
                    ],
                    "start": 362,
                    "end": 370
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "b",
                        "raw": "'b'",
                        "start": 373,
                        "end": 376
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 378,
                        "end": 379
                      }
                    ],
                    "start": 372,
                    "end": 380
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "c",
                        "raw": "'c'",
                        "start": 383,
                        "end": 386
                      },
                      {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 388,
                        "end": 389
                      }
                    ],
                    "start": 382,
                    "end": 390
                  }
                ],
                "start": 361,
                "end": 391
              }
            ],
            "optional": false,
            "start": 347,
            "end": 392
          },
          "definite": false,
          "start": 303,
          "end": 392
        }
      ],
      "declare": false,
      "start": 297,
      "end": 393
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
            "name": "o5",
            "optional": false,
            "typeAnnotation": null,
            "start": 400,
            "end": 402
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 405,
                "end": 411
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fromEntries",
                "optional": false,
                "typeAnnotation": null,
                "start": 412,
                "end": 423
              },
              "optional": false,
              "computed": false,
              "start": 405,
              "end": 423
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "frozenArray2",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 436
              }
            ],
            "optional": false,
            "start": 405,
            "end": 437
          },
          "definite": false,
          "start": 400,
          "end": 437
        }
      ],
      "declare": false,
      "start": 394,
      "end": 438
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 438
}
```

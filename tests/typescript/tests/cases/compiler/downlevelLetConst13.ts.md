__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "'use strict'",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 12
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 81
            },
            "init": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 84,
              "end": 86
            },
            "definite": false,
            "start": 78,
            "end": 86
          }
        ],
        "declare": false,
        "start": 74,
        "end": 87
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 67,
      "end": 87
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 104
            },
            "init": {
              "type": "Literal",
              "value": "123",
              "raw": "\"123\"",
              "start": 107,
              "end": 112
            },
            "definite": false,
            "start": 101,
            "end": 112
          }
        ],
        "declare": false,
        "start": 95,
        "end": 112
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 88,
      "end": 112
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 125,
                  "end": 129
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 130
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 134,
                  "end": 135
                }
              ],
              "start": 133,
              "end": 136
            },
            "definite": false,
            "start": 124,
            "end": 136
          }
        ],
        "declare": false,
        "start": 120,
        "end": 137
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 113,
      "end": 137
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 152,
                  "end": 156
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 157
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 161,
                  "end": 162
                }
              ],
              "start": 160,
              "end": 163
            },
            "definite": false,
            "start": 151,
            "end": 163
          }
        ],
        "declare": false,
        "start": 145,
        "end": 164
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 138,
      "end": 164
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 177,
                    "end": 178
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 180,
                    "end": 184
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 177,
                  "end": 184
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 185
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 190,
                    "end": 191
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 193,
                    "end": 194
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 190,
                  "end": 194
                }
              ],
              "start": 188,
              "end": 196
            },
            "definite": false,
            "start": 176,
            "end": 196
          }
        ],
        "declare": false,
        "start": 172,
        "end": 197
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 165,
      "end": 197
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 212,
                    "end": 213
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 215,
                    "end": 219
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 212,
                  "end": 219
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 220
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 225,
                    "end": 226
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 228,
                    "end": 229
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 225,
                  "end": 229
                }
              ],
              "start": 223,
              "end": 231
            },
            "definite": false,
            "start": 211,
            "end": 231
          }
        ],
        "declare": false,
        "start": 205,
        "end": 232
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 198,
      "end": 232
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 251,
          "end": 252
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 270,
                      "end": 273
                    },
                    "init": {
                      "type": "Literal",
                      "value": 100,
                      "raw": "100",
                      "start": 276,
                      "end": 279
                    },
                    "definite": false,
                    "start": 270,
                    "end": 279
                  }
                ],
                "declare": false,
                "start": 266,
                "end": 280
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 259,
              "end": 280
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "baz2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 298,
                      "end": 302
                    },
                    "init": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 305,
                      "end": 309
                    },
                    "definite": false,
                    "start": 298,
                    "end": 309
                  }
                ],
                "declare": false,
                "start": 292,
                "end": 310
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 285,
              "end": 310
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar5",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 327,
                          "end": 331
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 326,
                      "end": 332
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 336,
                          "end": 337
                        }
                      ],
                      "start": 335,
                      "end": 338
                    },
                    "definite": false,
                    "start": 326,
                    "end": 338
                  }
                ],
                "declare": false,
                "start": 322,
                "end": 339
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 315,
              "end": 339
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar6",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 358,
                          "end": 362
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 357,
                      "end": 363
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 367,
                          "end": 368
                        }
                      ],
                      "start": 366,
                      "end": 369
                    },
                    "definite": false,
                    "start": 357,
                    "end": 369
                  }
                ],
                "declare": false,
                "start": 351,
                "end": 370
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 344,
              "end": 370
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 387,
                            "end": 388
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar7",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 390,
                            "end": 394
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 387,
                          "end": 394
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 386,
                      "end": 395
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 400,
                            "end": 401
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 403,
                            "end": 404
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 400,
                          "end": 404
                        }
                      ],
                      "start": 398,
                      "end": 406
                    },
                    "definite": false,
                    "start": 386,
                    "end": 406
                  }
                ],
                "declare": false,
                "start": 382,
                "end": 407
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 375,
              "end": 407
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "const",
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 426,
                            "end": 427
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar8",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 429,
                            "end": 433
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 426,
                          "end": 433
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 425,
                      "end": 434
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 439,
                            "end": 440
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 442,
                            "end": 443
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 439,
                          "end": 443
                        }
                      ],
                      "start": 437,
                      "end": 445
                    },
                    "definite": false,
                    "start": 425,
                    "end": 445
                  }
                ],
                "declare": false,
                "start": 419,
                "end": 446
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 412,
              "end": 446
            }
          ],
          "start": 253,
          "end": 448
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 241,
        "end": 448
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 234,
      "end": 448
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 448
}
```

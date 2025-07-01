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
          "start": 248,
          "end": 249
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
                      "start": 267,
                      "end": 270
                    },
                    "init": {
                      "type": "Literal",
                      "value": 100,
                      "raw": "100",
                      "start": 273,
                      "end": 276
                    },
                    "definite": false,
                    "start": 267,
                    "end": 276
                  }
                ],
                "declare": false,
                "start": 263,
                "end": 277
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 256,
              "end": 277
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
                      "start": 295,
                      "end": 299
                    },
                    "init": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 302,
                      "end": 306
                    },
                    "definite": false,
                    "start": 295,
                    "end": 306
                  }
                ],
                "declare": false,
                "start": 289,
                "end": 307
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 282,
              "end": 307
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
                          "start": 324,
                          "end": 328
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 323,
                      "end": 329
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 333,
                          "end": 334
                        }
                      ],
                      "start": 332,
                      "end": 335
                    },
                    "definite": false,
                    "start": 323,
                    "end": 335
                  }
                ],
                "declare": false,
                "start": 319,
                "end": 336
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 312,
              "end": 336
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
                          "start": 355,
                          "end": 359
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 354,
                      "end": 360
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 364,
                          "end": 365
                        }
                      ],
                      "start": 363,
                      "end": 366
                    },
                    "definite": false,
                    "start": 354,
                    "end": 366
                  }
                ],
                "declare": false,
                "start": 348,
                "end": 367
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 341,
              "end": 367
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
                            "start": 384,
                            "end": 385
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar7",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 387,
                            "end": 391
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 384,
                          "end": 391
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 383,
                      "end": 392
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
                            "start": 397,
                            "end": 398
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 400,
                            "end": 401
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 397,
                          "end": 401
                        }
                      ],
                      "start": 395,
                      "end": 403
                    },
                    "definite": false,
                    "start": 383,
                    "end": 403
                  }
                ],
                "declare": false,
                "start": 379,
                "end": 404
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 372,
              "end": 404
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
                            "start": 423,
                            "end": 424
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar8",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 426,
                            "end": 430
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 423,
                          "end": 430
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 422,
                      "end": 431
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
                            "start": 436,
                            "end": 437
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 439,
                            "end": 440
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 436,
                          "end": 440
                        }
                      ],
                      "start": 434,
                      "end": 442
                    },
                    "definite": false,
                    "start": 422,
                    "end": 442
                  }
                ],
                "declare": false,
                "start": 416,
                "end": 443
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 409,
              "end": 443
            }
          ],
          "start": 250,
          "end": 445
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 241,
        "end": 445
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 234,
      "end": 445
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 445
}
```

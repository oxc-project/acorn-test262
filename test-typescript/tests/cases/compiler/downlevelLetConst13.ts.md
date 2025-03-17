__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 445,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 12,
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "value": "use strict",
        "raw": "'use strict'"
      },
      "directive": "use strict"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 67,
      "end": 87,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 74,
        "end": 87,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 78,
            "end": 86,
            "id": {
              "type": "Identifier",
              "start": 78,
              "end": 81,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 84,
              "end": 86,
              "value": 10,
              "raw": "10"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 88,
      "end": 112,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 95,
        "end": 112,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 101,
            "end": 112,
            "id": {
              "type": "Identifier",
              "start": 101,
              "end": 104,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 107,
              "end": 112,
              "value": "123",
              "raw": "\"123\""
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 113,
      "end": 137,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 120,
        "end": 137,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 124,
            "end": 136,
            "id": {
              "type": "ArrayPattern",
              "start": 124,
              "end": 130,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 125,
                  "end": 129,
                  "name": "bar1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrayExpression",
              "start": 133,
              "end": 136,
              "elements": [
                {
                  "type": "Literal",
                  "start": 134,
                  "end": 135,
                  "value": 1,
                  "raw": "1"
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 138,
      "end": 164,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 145,
        "end": 164,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 151,
            "end": 163,
            "id": {
              "type": "ArrayPattern",
              "start": 151,
              "end": 157,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 152,
                  "end": 156,
                  "name": "bar2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrayExpression",
              "start": 160,
              "end": 163,
              "elements": [
                {
                  "type": "Literal",
                  "start": 161,
                  "end": 162,
                  "value": 2,
                  "raw": "2"
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 165,
      "end": 197,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 172,
        "end": 197,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 176,
            "end": 196,
            "id": {
              "type": "ObjectPattern",
              "start": 176,
              "end": 185,
              "properties": [
                {
                  "type": "Property",
                  "start": 177,
                  "end": 184,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 178,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 180,
                    "end": 184,
                    "name": "bar3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 188,
              "end": 196,
              "properties": [
                {
                  "type": "Property",
                  "start": 190,
                  "end": 194,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 190,
                    "end": 191,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 193,
                    "end": 194,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 198,
      "end": 232,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 205,
        "end": 232,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 211,
            "end": 231,
            "id": {
              "type": "ObjectPattern",
              "start": 211,
              "end": 220,
              "properties": [
                {
                  "type": "Property",
                  "start": 212,
                  "end": 219,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 213,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 219,
                    "name": "bar4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 223,
              "end": 231,
              "properties": [
                {
                  "type": "Property",
                  "start": 225,
                  "end": 229,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 225,
                    "end": 226,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 228,
                    "end": 229,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 234,
      "end": 445,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 241,
        "end": 445,
        "id": {
          "type": "Identifier",
          "start": 248,
          "end": 249,
          "name": "M",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 250,
          "end": 445,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 256,
              "end": 277,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 263,
                "end": 277,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 267,
                    "end": 276,
                    "id": {
                      "type": "Identifier",
                      "start": 267,
                      "end": 270,
                      "name": "baz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 273,
                      "end": 276,
                      "value": 100,
                      "raw": "100"
                    },
                    "definite": false
                  }
                ],
                "kind": "let",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 282,
              "end": 307,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 289,
                "end": 307,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 295,
                    "end": 306,
                    "id": {
                      "type": "Identifier",
                      "start": 295,
                      "end": 299,
                      "name": "baz2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 302,
                      "end": 306,
                      "value": true,
                      "raw": "true"
                    },
                    "definite": false
                  }
                ],
                "kind": "const",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 312,
              "end": 336,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 319,
                "end": 336,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 323,
                    "end": 335,
                    "id": {
                      "type": "ArrayPattern",
                      "start": 323,
                      "end": 329,
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 324,
                          "end": 328,
                          "name": "bar5",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "start": 332,
                      "end": 335,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 333,
                          "end": 334,
                          "value": 1,
                          "raw": "1"
                        }
                      ]
                    },
                    "definite": false
                  }
                ],
                "kind": "let",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 341,
              "end": 367,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 348,
                "end": 367,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 354,
                    "end": 366,
                    "id": {
                      "type": "ArrayPattern",
                      "start": 354,
                      "end": 360,
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 355,
                          "end": 359,
                          "name": "bar6",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "start": 363,
                      "end": 366,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 364,
                          "end": 365,
                          "value": 2,
                          "raw": "2"
                        }
                      ]
                    },
                    "definite": false
                  }
                ],
                "kind": "const",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 372,
              "end": 404,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 379,
                "end": 404,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 383,
                    "end": 403,
                    "id": {
                      "type": "ObjectPattern",
                      "start": 383,
                      "end": 392,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 384,
                          "end": 391,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 384,
                            "end": 385,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 387,
                            "end": 391,
                            "name": "bar7",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "start": 395,
                      "end": 403,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 397,
                          "end": 401,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 397,
                            "end": 398,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 400,
                            "end": 401,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "definite": false
                  }
                ],
                "kind": "let",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 409,
              "end": 443,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 416,
                "end": 443,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 422,
                    "end": 442,
                    "id": {
                      "type": "ObjectPattern",
                      "start": 422,
                      "end": 431,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 423,
                          "end": 430,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 423,
                            "end": 424,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 426,
                            "end": 430,
                            "name": "bar8",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "start": 434,
                      "end": 442,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 436,
                          "end": 440,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 436,
                            "end": 437,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 439,
                            "end": 440,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "definite": false
                  }
                ],
                "kind": "const",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

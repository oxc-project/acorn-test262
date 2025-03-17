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
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "raw": "'use strict'",
        "value": "use strict"
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 67,
      "end": 87,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 74,
        "end": 87,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 78,
            "end": 86,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 78,
              "end": 81,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 84,
              "end": 86,
              "raw": "10",
              "value": 10
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 88,
      "end": 112,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 95,
        "end": 112,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 101,
            "end": 112,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 101,
              "end": 104,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 107,
              "end": 112,
              "raw": "\"123\"",
              "value": "123"
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 113,
      "end": 137,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 120,
        "end": 137,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 124,
            "end": 136,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 124,
              "end": 130,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 125,
                  "end": 129,
                  "decorators": [],
                  "name": "bar1",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
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
                  "raw": "1",
                  "value": 1
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 138,
      "end": 164,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 145,
        "end": 164,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 151,
            "end": 163,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 151,
              "end": 157,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 152,
                  "end": 156,
                  "decorators": [],
                  "name": "bar2",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
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
                  "raw": "2",
                  "value": 2
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 165,
      "end": 197,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 172,
        "end": 197,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 176,
            "end": 196,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 176,
              "end": 185,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 177,
                  "end": 184,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 178,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "start": 180,
                    "end": 184,
                    "decorators": [],
                    "name": "bar3",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 190,
                    "end": 191,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 193,
                    "end": 194,
                    "raw": "1",
                    "value": 1
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 198,
      "end": 232,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 205,
        "end": 232,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 211,
            "end": 231,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 211,
              "end": 220,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 212,
                  "end": 219,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 213,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 219,
                    "decorators": [],
                    "name": "bar4",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 225,
                    "end": 226,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 228,
                    "end": 229,
                    "raw": "1",
                    "value": 1
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 234,
      "end": 445,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 241,
        "end": 445,
        "body": {
          "type": "TSModuleBlock",
          "start": 250,
          "end": 445,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 256,
              "end": 277,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 263,
                "end": 277,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 267,
                    "end": 276,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 267,
                      "end": 270,
                      "decorators": [],
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Literal",
                      "start": 273,
                      "end": 276,
                      "raw": "100",
                      "value": 100
                    }
                  }
                ],
                "declare": false,
                "kind": "let"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 282,
              "end": 307,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 289,
                "end": 307,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 295,
                    "end": 306,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 295,
                      "end": 299,
                      "decorators": [],
                      "name": "baz2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Literal",
                      "start": 302,
                      "end": 306,
                      "raw": "true",
                      "value": true
                    }
                  }
                ],
                "declare": false,
                "kind": "const"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 312,
              "end": 336,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 319,
                "end": 336,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 323,
                    "end": 335,
                    "definite": false,
                    "id": {
                      "type": "ArrayPattern",
                      "start": 323,
                      "end": 329,
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 324,
                          "end": 328,
                          "decorators": [],
                          "name": "bar5",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
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
                          "raw": "1",
                          "value": 1
                        }
                      ]
                    }
                  }
                ],
                "declare": false,
                "kind": "let"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 341,
              "end": 367,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 348,
                "end": 367,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 354,
                    "end": 366,
                    "definite": false,
                    "id": {
                      "type": "ArrayPattern",
                      "start": 354,
                      "end": 360,
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 355,
                          "end": 359,
                          "decorators": [],
                          "name": "bar6",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
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
                          "raw": "2",
                          "value": 2
                        }
                      ]
                    }
                  }
                ],
                "declare": false,
                "kind": "const"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 372,
              "end": 404,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 379,
                "end": 404,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 383,
                    "end": 403,
                    "definite": false,
                    "id": {
                      "type": "ObjectPattern",
                      "start": 383,
                      "end": 392,
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 384,
                          "end": 391,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 384,
                            "end": 385,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Identifier",
                            "start": 387,
                            "end": 391,
                            "decorators": [],
                            "name": "bar7",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
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
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 397,
                            "end": 398,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 400,
                            "end": 401,
                            "raw": "1",
                            "value": 1
                          }
                        }
                      ]
                    }
                  }
                ],
                "declare": false,
                "kind": "let"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 409,
              "end": 443,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 416,
                "end": 443,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 422,
                    "end": 442,
                    "definite": false,
                    "id": {
                      "type": "ObjectPattern",
                      "start": 422,
                      "end": 431,
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 423,
                          "end": 430,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 423,
                            "end": 424,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Identifier",
                            "start": 426,
                            "end": 430,
                            "decorators": [],
                            "name": "bar8",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
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
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 436,
                            "end": 437,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 439,
                            "end": 440,
                            "raw": "1",
                            "value": 1
                          }
                        }
                      ]
                    }
                  }
                ],
                "declare": false,
                "kind": "const"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 248,
          "end": 249,
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

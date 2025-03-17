__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 439,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 61,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 60,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 10,
            "end": 60,
            "callee": {
              "type": "MemberExpression",
              "start": 10,
              "end": 28,
              "object": {
                "type": "Identifier",
                "start": 10,
                "end": 16,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 17,
                "end": 28,
                "name": "fromEntries",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 29,
                "end": 59,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 30,
                    "end": 38,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 31,
                        "end": 34,
                        "value": "a",
                        "raw": "'a'"
                      },
                      {
                        "type": "Literal",
                        "start": 36,
                        "end": 37,
                        "value": 1,
                        "raw": "1"
                      }
                    ]
                  },
                  {
                    "type": "ArrayExpression",
                    "start": 40,
                    "end": 48,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 41,
                        "end": 44,
                        "value": "b",
                        "raw": "'b'"
                      },
                      {
                        "type": "Literal",
                        "start": 46,
                        "end": 47,
                        "value": 2,
                        "raw": "2"
                      }
                    ]
                  },
                  {
                    "type": "ArrayExpression",
                    "start": 50,
                    "end": 58,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 51,
                        "end": 54,
                        "value": "c",
                        "raw": "'c'"
                      },
                      {
                        "type": "Literal",
                        "start": 56,
                        "end": 57,
                        "value": 3,
                        "raw": "3"
                      }
                    ]
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 62,
      "end": 115,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 114,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 70,
            "name": "o2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 73,
            "end": 114,
            "callee": {
              "type": "MemberExpression",
              "start": 73,
              "end": 91,
              "object": {
                "type": "Identifier",
                "start": 73,
                "end": 79,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 80,
                "end": 91,
                "name": "fromEntries",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "NewExpression",
                "start": 92,
                "end": 113,
                "callee": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 111,
                  "name": "URLSearchParams",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 183,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 182,
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 124,
            "name": "o3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 127,
            "end": 182,
            "callee": {
              "type": "MemberExpression",
              "start": 127,
              "end": 145,
              "object": {
                "type": "Identifier",
                "start": 127,
                "end": 133,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 134,
                "end": 145,
                "name": "fromEntries",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "NewExpression",
                "start": 146,
                "end": 181,
                "callee": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 153,
                  "name": "Map",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "ArrayExpression",
                    "start": 154,
                    "end": 180,
                    "elements": [
                      {
                        "type": "ArrayExpression",
                        "start": 155,
                        "end": 179,
                        "elements": [
                          {
                            "type": "CallExpression",
                            "start": 156,
                            "end": 169,
                            "callee": {
                              "type": "Identifier",
                              "start": 156,
                              "end": 162,
                              "name": "Symbol",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 163,
                                "end": 168,
                                "value": "key",
                                "raw": "\"key\""
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          {
                            "type": "Literal",
                            "start": 171,
                            "end": 178,
                            "value": "value",
                            "raw": "\"value\""
                          }
                        ]
                      }
                    ]
                  }
                ],
                "typeArguments": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 185,
      "end": 251,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 191,
          "end": 250,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 202,
            "name": "frozenArray",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 205,
            "end": 250,
            "callee": {
              "type": "MemberExpression",
              "start": 205,
              "end": 218,
              "object": {
                "type": "Identifier",
                "start": 205,
                "end": 211,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 212,
                "end": 218,
                "name": "freeze",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 219,
                "end": 249,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 220,
                    "end": 228,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 221,
                        "end": 224,
                        "value": "a",
                        "raw": "'a'"
                      },
                      {
                        "type": "Literal",
                        "start": 226,
                        "end": 227,
                        "value": 1,
                        "raw": "1"
                      }
                    ]
                  },
                  {
                    "type": "ArrayExpression",
                    "start": 230,
                    "end": 238,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 231,
                        "end": 234,
                        "value": "b",
                        "raw": "'b'"
                      },
                      {
                        "type": "Literal",
                        "start": 236,
                        "end": 237,
                        "value": 2,
                        "raw": "2"
                      }
                    ]
                  },
                  {
                    "type": "ArrayExpression",
                    "start": 240,
                    "end": 248,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 241,
                        "end": 244,
                        "value": "c",
                        "raw": "'c'"
                      },
                      {
                        "type": "Literal",
                        "start": 246,
                        "end": 247,
                        "value": 3,
                        "raw": "3"
                      }
                    ]
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 252,
      "end": 295,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 258,
          "end": 294,
          "id": {
            "type": "Identifier",
            "start": 258,
            "end": 260,
            "name": "o4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 263,
            "end": 294,
            "callee": {
              "type": "MemberExpression",
              "start": 263,
              "end": 281,
              "object": {
                "type": "Identifier",
                "start": 263,
                "end": 269,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 270,
                "end": 281,
                "name": "fromEntries",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 282,
                "end": 293,
                "name": "frozenArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 297,
      "end": 393,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 303,
          "end": 392,
          "id": {
            "type": "Identifier",
            "start": 303,
            "end": 344,
            "name": "frozenArray2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 315,
              "end": 344,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 317,
                "end": 344,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 326,
                  "end": 344,
                  "elementType": {
                    "type": "TSTupleType",
                    "start": 326,
                    "end": 342,
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
                    ]
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 347,
            "end": 392,
            "callee": {
              "type": "MemberExpression",
              "start": 347,
              "end": 360,
              "object": {
                "type": "Identifier",
                "start": 347,
                "end": 353,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 354,
                "end": 360,
                "name": "freeze",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 361,
                "end": 391,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 362,
                    "end": 370,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 363,
                        "end": 366,
                        "value": "a",
                        "raw": "'a'"
                      },
                      {
                        "type": "Literal",
                        "start": 368,
                        "end": 369,
                        "value": 1,
                        "raw": "1"
                      }
                    ]
                  },
                  {
                    "type": "ArrayExpression",
                    "start": 372,
                    "end": 380,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 373,
                        "end": 376,
                        "value": "b",
                        "raw": "'b'"
                      },
                      {
                        "type": "Literal",
                        "start": 378,
                        "end": 379,
                        "value": 2,
                        "raw": "2"
                      }
                    ]
                  },
                  {
                    "type": "ArrayExpression",
                    "start": 382,
                    "end": 390,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 383,
                        "end": 386,
                        "value": "c",
                        "raw": "'c'"
                      },
                      {
                        "type": "Literal",
                        "start": 388,
                        "end": 389,
                        "value": 3,
                        "raw": "3"
                      }
                    ]
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 394,
      "end": 438,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 400,
          "end": 437,
          "id": {
            "type": "Identifier",
            "start": 400,
            "end": 402,
            "name": "o5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 405,
            "end": 437,
            "callee": {
              "type": "MemberExpression",
              "start": 405,
              "end": 423,
              "object": {
                "type": "Identifier",
                "start": 405,
                "end": 411,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 412,
                "end": 423,
                "name": "fromEntries",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 424,
                "end": 436,
                "name": "frozenArray2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

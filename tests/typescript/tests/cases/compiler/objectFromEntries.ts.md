__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 438,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 61,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 60,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 17,
                "end": 28,
                "decorators": [],
                "name": "fromEntries",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 62,
      "end": 115,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 114,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 70,
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 80,
                "end": 91,
                "decorators": [],
                "name": "fromEntries",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 92,
                "end": 113,
                "callee": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 111,
                  "decorators": [],
                  "name": "URLSearchParams",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 183,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 182,
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 124,
            "decorators": [],
            "name": "o3",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 134,
                "end": 145,
                "decorators": [],
                "name": "fromEntries",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 146,
                "end": 181,
                "callee": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 153,
                  "decorators": [],
                  "name": "Map",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
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
                              "decorators": [],
                              "name": "Symbol",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 163,
                                "end": 168,
                                "value": "key",
                                "raw": "\"key\""
                              }
                            ],
                            "optional": false
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
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 185,
      "end": 251,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 191,
          "end": 250,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 202,
            "decorators": [],
            "name": "frozenArray",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 212,
                "end": 218,
                "decorators": [],
                "name": "freeze",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 252,
      "end": 295,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 258,
          "end": 294,
          "id": {
            "type": "Identifier",
            "start": 258,
            "end": 260,
            "decorators": [],
            "name": "o4",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 270,
                "end": 281,
                "decorators": [],
                "name": "fromEntries",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 282,
                "end": 293,
                "decorators": [],
                "name": "frozenArray",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 297,
      "end": 393,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 303,
          "end": 392,
          "id": {
            "type": "Identifier",
            "start": 303,
            "end": 344,
            "decorators": [],
            "name": "frozenArray2",
            "optional": false,
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
            }
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
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 354,
                "end": 360,
                "decorators": [],
                "name": "freeze",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 394,
      "end": 438,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 400,
          "end": 437,
          "id": {
            "type": "Identifier",
            "start": 400,
            "end": 402,
            "decorators": [],
            "name": "o5",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 412,
                "end": 423,
                "decorators": [],
                "name": "fromEntries",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 424,
                "end": 436,
                "decorators": [],
                "name": "frozenArray2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

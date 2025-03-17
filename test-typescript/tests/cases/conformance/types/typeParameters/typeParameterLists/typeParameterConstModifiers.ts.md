__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 5184,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 29,
          "end": 33,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 30,
            "end": 33,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 32,
              "end": 33,
              "typeName": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 28,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 27,
            "name": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 34,
        "end": 37,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 36,
          "end": 37,
          "typeName": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 40,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 59,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 49,
            "name": "x11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 52,
            "end": 59,
            "callee": {
              "type": "Identifier",
              "start": 52,
              "end": 54,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 55,
                "end": 58,
                "value": "a",
                "raw": "'a'"
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
      "start": 61,
      "end": 95,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 94,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 70,
            "name": "x12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 73,
            "end": 94,
            "callee": {
              "type": "Identifier",
              "start": 73,
              "end": 75,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 76,
                "end": 93,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 77,
                    "end": 80,
                    "value": "a",
                    "raw": "'a'"
                  },
                  {
                    "type": "ArrayExpression",
                    "start": 82,
                    "end": 92,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 83,
                        "end": 86,
                        "value": "b",
                        "raw": "'b'"
                      },
                      {
                        "type": "Literal",
                        "start": 88,
                        "end": 91,
                        "value": "c",
                        "raw": "'c'"
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
      "start": 96,
      "end": 160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 159,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 105,
            "name": "x13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 108,
            "end": 159,
            "callee": {
              "type": "Identifier",
              "start": 108,
              "end": 110,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 111,
                "end": 158,
                "properties": [
                  {
                    "type": "Property",
                    "start": 113,
                    "end": 117,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 113,
                      "end": 114,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 116,
                      "end": 117,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 119,
                    "end": 125,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 119,
                      "end": 120,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 122,
                      "end": 125,
                      "value": "c",
                      "raw": "\"c\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 127,
                    "end": 156,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 127,
                      "end": 128,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "start": 130,
                      "end": 156,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 131,
                          "end": 134,
                          "value": "e",
                          "raw": "\"e\""
                        },
                        {
                          "type": "Literal",
                          "start": 136,
                          "end": 137,
                          "value": 2,
                          "raw": "2"
                        },
                        {
                          "type": "Literal",
                          "start": 139,
                          "end": 143,
                          "value": true,
                          "raw": "true"
                        },
                        {
                          "type": "ObjectExpression",
                          "start": 145,
                          "end": 155,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 147,
                              "end": 153,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 147,
                                "end": 148,
                                "name": "f",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 150,
                                "end": 153,
                                "value": "g",
                                "raw": "\"g\""
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
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
      "type": "TSDeclareFunction",
      "start": 162,
      "end": 215,
      "id": {
        "type": "Identifier",
        "start": 179,
        "end": 181,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 194,
          "end": 210,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 195,
            "end": 210,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 197,
              "end": 210,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 197,
                  "end": 198,
                  "typeName": {
                    "type": "Identifier",
                    "start": 197,
                    "end": 198,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 201,
                  "end": 210
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 181,
        "end": 193,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 182,
            "end": 189,
            "name": {
              "type": "Identifier",
              "start": 188,
              "end": 189,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true
          },
          {
            "type": "TSTypeParameter",
            "start": 191,
            "end": 192,
            "name": {
              "type": "Identifier",
              "start": 191,
              "end": 192,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 211,
        "end": 214,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 213,
          "end": 214,
          "typeName": {
            "type": "Identifier",
            "start": 213,
            "end": 214,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 217,
      "end": 237,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 223,
          "end": 236,
          "id": {
            "type": "Identifier",
            "start": 223,
            "end": 226,
            "name": "x21",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 229,
            "end": 236,
            "callee": {
              "type": "Identifier",
              "start": 229,
              "end": 231,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 232,
                "end": 235,
                "value": "a",
                "raw": "'a'"
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
      "start": 238,
      "end": 272,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 244,
          "end": 271,
          "id": {
            "type": "Identifier",
            "start": 244,
            "end": 247,
            "name": "x22",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 250,
            "end": 271,
            "callee": {
              "type": "Identifier",
              "start": 250,
              "end": 252,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 253,
                "end": 270,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 254,
                    "end": 257,
                    "value": "a",
                    "raw": "'a'"
                  },
                  {
                    "type": "ArrayExpression",
                    "start": 259,
                    "end": 269,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 260,
                        "end": 263,
                        "value": "b",
                        "raw": "'b'"
                      },
                      {
                        "type": "Literal",
                        "start": 265,
                        "end": 268,
                        "value": "c",
                        "raw": "'c'"
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
      "start": 273,
      "end": 337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 336,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 282,
            "name": "x23",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 285,
            "end": 336,
            "callee": {
              "type": "Identifier",
              "start": 285,
              "end": 287,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 288,
                "end": 335,
                "properties": [
                  {
                    "type": "Property",
                    "start": 290,
                    "end": 294,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 290,
                      "end": 291,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 293,
                      "end": 294,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 296,
                    "end": 302,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 296,
                      "end": 297,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 299,
                      "end": 302,
                      "value": "c",
                      "raw": "\"c\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 304,
                    "end": 333,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 304,
                      "end": 305,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "start": 307,
                      "end": 333,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 308,
                          "end": 311,
                          "value": "e",
                          "raw": "\"e\""
                        },
                        {
                          "type": "Literal",
                          "start": 313,
                          "end": 314,
                          "value": 2,
                          "raw": "2"
                        },
                        {
                          "type": "Literal",
                          "start": 316,
                          "end": 320,
                          "value": true,
                          "raw": "true"
                        },
                        {
                          "type": "ObjectExpression",
                          "start": 322,
                          "end": 332,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 324,
                              "end": 330,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 324,
                                "end": 325,
                                "name": "f",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 327,
                                "end": 330,
                                "value": "g",
                                "raw": "\"g\""
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
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
      "type": "TSDeclareFunction",
      "start": 339,
      "end": 379,
      "id": {
        "type": "Identifier",
        "start": 356,
        "end": 358,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 368,
          "end": 372,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 369,
            "end": 372,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 371,
              "end": 372,
              "typeName": {
                "type": "Identifier",
                "start": 371,
                "end": 372,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 358,
        "end": 367,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 359,
            "end": 366,
            "name": {
              "type": "Identifier",
              "start": 365,
              "end": 366,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 373,
        "end": 378,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 375,
          "end": 378,
          "elementType": {
            "type": "TSTypeReference",
            "start": 375,
            "end": 376,
            "typeName": {
              "type": "Identifier",
              "start": 375,
              "end": 376,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 381,
      "end": 405,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 387,
          "end": 404,
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 390,
            "name": "x31",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 393,
            "end": 404,
            "callee": {
              "type": "Identifier",
              "start": 393,
              "end": 395,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 396,
                "end": 403,
                "value": "hello",
                "raw": "\"hello\""
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
      "start": 406,
      "end": 430,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 412,
          "end": 429,
          "id": {
            "type": "Identifier",
            "start": 412,
            "end": 415,
            "name": "x32",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 418,
            "end": 429,
            "callee": {
              "type": "Identifier",
              "start": 418,
              "end": 420,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 421,
                "end": 428,
                "value": "hello",
                "raw": "\"hello\""
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
      "type": "TSDeclareFunction",
      "start": 432,
      "end": 477,
      "id": {
        "type": "Identifier",
        "start": 449,
        "end": 451,
        "name": "f4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 461,
          "end": 472,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 464,
            "end": 472,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 466,
              "end": 472,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 467,
                  "end": 468,
                  "typeName": {
                    "type": "Identifier",
                    "start": 467,
                    "end": 468,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 470,
                  "end": 471,
                  "typeName": {
                    "type": "Identifier",
                    "start": 470,
                    "end": 471,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 451,
        "end": 460,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 452,
            "end": 459,
            "name": {
              "type": "Identifier",
              "start": 458,
              "end": 459,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 473,
        "end": 476,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 475,
          "end": 476,
          "typeName": {
            "type": "Identifier",
            "start": 475,
            "end": 476,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 479,
      "end": 516,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 485,
          "end": 515,
          "id": {
            "type": "Identifier",
            "start": 485,
            "end": 488,
            "name": "x41",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 491,
            "end": 515,
            "callee": {
              "type": "Identifier",
              "start": 491,
              "end": 493,
              "name": "f4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 494,
                "end": 514,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 495,
                    "end": 503,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 496,
                        "end": 497,
                        "value": 1,
                        "raw": "1"
                      },
                      {
                        "type": "Literal",
                        "start": 499,
                        "end": 502,
                        "value": "x",
                        "raw": "'x'"
                      }
                    ]
                  },
                  {
                    "type": "ArrayExpression",
                    "start": 505,
                    "end": 513,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 506,
                        "end": 507,
                        "value": 2,
                        "raw": "2"
                      },
                      {
                        "type": "Literal",
                        "start": 509,
                        "end": 512,
                        "value": "y",
                        "raw": "'y'"
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
      "start": 517,
      "end": 570,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 523,
          "end": 569,
          "id": {
            "type": "Identifier",
            "start": 523,
            "end": 526,
            "name": "x42",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 529,
            "end": 569,
            "callee": {
              "type": "Identifier",
              "start": 529,
              "end": 531,
              "name": "f4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 532,
                "end": 568,
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "start": 533,
                    "end": 549,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 535,
                        "end": 539,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 535,
                          "end": 536,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 538,
                          "end": 539,
                          "value": 1,
                          "raw": "1"
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 541,
                        "end": 547,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 541,
                          "end": 542,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 544,
                          "end": 547,
                          "value": "x",
                          "raw": "'x'"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  {
                    "type": "ObjectExpression",
                    "start": 551,
                    "end": 567,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 553,
                        "end": 557,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 553,
                          "end": 554,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 556,
                          "end": 557,
                          "value": 2,
                          "raw": "2"
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 559,
                        "end": 565,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 559,
                          "end": 560,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 562,
                          "end": 565,
                          "value": "y",
                          "raw": "'y'"
                        },
                        "kind": "init",
                        "optional": false
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
      "type": "TSDeclareFunction",
      "start": 572,
      "end": 625,
      "id": {
        "type": "Identifier",
        "start": 589,
        "end": 591,
        "name": "f5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 601,
          "end": 620,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 604,
            "end": 620,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 606,
              "end": 620,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 608,
                  "end": 613,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 608,
                    "end": 609,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 609,
                    "end": 612,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 611,
                      "end": 612,
                      "typeName": {
                        "type": "Identifier",
                        "start": 611,
                        "end": 612,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 614,
                  "end": 618,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 614,
                    "end": 615,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 615,
                    "end": 618,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 617,
                      "end": 618,
                      "typeName": {
                        "type": "Identifier",
                        "start": 617,
                        "end": 618,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 591,
        "end": 600,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 592,
            "end": 599,
            "name": {
              "type": "Identifier",
              "start": 598,
              "end": 599,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 621,
        "end": 624,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 623,
          "end": 624,
          "typeName": {
            "type": "Identifier",
            "start": 623,
            "end": 624,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 627,
      "end": 672,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 633,
          "end": 671,
          "id": {
            "type": "Identifier",
            "start": 633,
            "end": 636,
            "name": "x51",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 639,
            "end": 671,
            "callee": {
              "type": "Identifier",
              "start": 639,
              "end": 641,
              "name": "f5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 642,
                "end": 670,
                "properties": [
                  {
                    "type": "Property",
                    "start": 644,
                    "end": 655,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 644,
                      "end": 645,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "start": 647,
                      "end": 655,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 648,
                          "end": 649,
                          "value": 1,
                          "raw": "1"
                        },
                        {
                          "type": "Literal",
                          "start": 651,
                          "end": 654,
                          "value": "x",
                          "raw": "'x'"
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 657,
                    "end": 668,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 657,
                      "end": 658,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "start": 660,
                      "end": 668,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 661,
                          "end": 662,
                          "value": 2,
                          "raw": "2"
                        },
                        {
                          "type": "Literal",
                          "start": 664,
                          "end": 667,
                          "value": "y",
                          "raw": "'y'"
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
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
      "start": 673,
      "end": 734,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 679,
          "end": 733,
          "id": {
            "type": "Identifier",
            "start": 679,
            "end": 682,
            "name": "x52",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 685,
            "end": 733,
            "callee": {
              "type": "Identifier",
              "start": 685,
              "end": 687,
              "name": "f5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 688,
                "end": 732,
                "properties": [
                  {
                    "type": "Property",
                    "start": 690,
                    "end": 709,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 690,
                      "end": 691,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 693,
                      "end": 709,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 695,
                          "end": 699,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 695,
                            "end": 696,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 698,
                            "end": 699,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 701,
                          "end": 707,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 701,
                            "end": 702,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 704,
                            "end": 707,
                            "value": "x",
                            "raw": "'x'"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 711,
                    "end": 730,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 711,
                      "end": 712,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 714,
                      "end": 730,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 716,
                          "end": 720,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 716,
                            "end": 717,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 719,
                            "end": 720,
                            "value": 2,
                            "raw": "2"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 722,
                          "end": 728,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 722,
                            "end": 723,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 725,
                            "end": 728,
                            "value": "y",
                            "raw": "'y'"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
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
      "type": "TSDeclareFunction",
      "start": 736,
      "end": 807,
      "id": {
        "type": "Identifier",
        "start": 753,
        "end": 755,
        "name": "f6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 792,
          "end": 802,
          "argument": {
            "type": "Identifier",
            "start": 795,
            "end": 799,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 799,
            "end": 802,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 801,
              "end": 802,
              "typeName": {
                "type": "Identifier",
                "start": 801,
                "end": 802,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 755,
        "end": 791,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 756,
            "end": 790,
            "name": {
              "type": "Identifier",
              "start": 762,
              "end": 763,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 772,
              "end": 790,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 781,
                "end": 790,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 781,
                  "end": 788
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 803,
        "end": 806,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 805,
          "end": 806,
          "typeName": {
            "type": "Identifier",
            "start": 805,
            "end": 806,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 809,
      "end": 850,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 815,
          "end": 849,
          "id": {
            "type": "Identifier",
            "start": 815,
            "end": 818,
            "name": "x61",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 821,
            "end": 849,
            "callee": {
              "type": "Identifier",
              "start": 821,
              "end": 823,
              "name": "f6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 824,
                "end": 825,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 827,
                "end": 830,
                "value": "b",
                "raw": "'b'"
              },
              {
                "type": "ObjectExpression",
                "start": 832,
                "end": 848,
                "properties": [
                  {
                    "type": "Property",
                    "start": 834,
                    "end": 838,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 834,
                      "end": 835,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 837,
                      "end": 838,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 840,
                    "end": 846,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 840,
                      "end": 841,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 843,
                      "end": 846,
                      "value": "x",
                      "raw": "'x'"
                    },
                    "kind": "init",
                    "optional": false
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
      "start": 851,
      "end": 879,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 857,
          "end": 878,
          "id": {
            "type": "Identifier",
            "start": 857,
            "end": 860,
            "name": "x62",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 863,
            "end": 878,
            "callee": {
              "type": "Identifier",
              "start": 863,
              "end": 865,
              "name": "f6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "SpreadElement",
                "start": 866,
                "end": 877,
                "argument": {
                  "type": "ArrayExpression",
                  "start": 869,
                  "end": 877,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 870,
                      "end": 871,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 873,
                      "end": 876,
                      "value": "b",
                      "raw": "'b'"
                    }
                  ]
                }
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
      "start": 880,
      "end": 914,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 886,
          "end": 913,
          "id": {
            "type": "Identifier",
            "start": 886,
            "end": 889,
            "name": "x63",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 892,
            "end": 913,
            "callee": {
              "type": "Identifier",
              "start": 892,
              "end": 894,
              "name": "f6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 895,
                "end": 899,
                "value": true,
                "raw": "true"
              },
              {
                "type": "SpreadElement",
                "start": 901,
                "end": 912,
                "argument": {
                  "type": "ArrayExpression",
                  "start": 904,
                  "end": 912,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 905,
                      "end": 906,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 908,
                      "end": 911,
                      "value": "b",
                      "raw": "'b'"
                    }
                  ]
                }
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
      "start": 915,
      "end": 945,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 921,
          "end": 944,
          "id": {
            "type": "Identifier",
            "start": 921,
            "end": 924,
            "name": "x64",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 927,
            "end": 944,
            "callee": {
              "type": "Identifier",
              "start": 927,
              "end": 929,
              "name": "f6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "SpreadElement",
                "start": 930,
                "end": 943,
                "argument": {
                  "type": "ArrayExpression",
                  "start": 934,
                  "end": 942,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 935,
                      "end": 936,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 938,
                      "end": 941,
                      "value": "b",
                      "raw": "'b'"
                    }
                  ]
                }
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
      "start": 946,
      "end": 982,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 952,
          "end": 981,
          "id": {
            "type": "Identifier",
            "start": 952,
            "end": 955,
            "name": "x65",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 958,
            "end": 981,
            "callee": {
              "type": "Identifier",
              "start": 958,
              "end": 960,
              "name": "f6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 961,
                "end": 965,
                "value": true,
                "raw": "true"
              },
              {
                "type": "SpreadElement",
                "start": 967,
                "end": 980,
                "argument": {
                  "type": "ArrayExpression",
                  "start": 971,
                  "end": 979,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 972,
                      "end": 973,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 975,
                      "end": 978,
                      "value": "b",
                      "raw": "'b'"
                    }
                  ]
                }
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
      "type": "ClassDeclaration",
      "start": 984,
      "end": 1067,
      "id": {
        "type": "Identifier",
        "start": 990,
        "end": 992,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1002,
        "end": 1067,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1008,
            "end": 1028,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1008,
              "end": 1019,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1019,
              "end": 1028,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1020,
                  "end": 1024,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1021,
                    "end": 1024,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1023,
                      "end": 1024,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1023,
                        "end": 1024,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1026,
                "end": 1028,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1033,
            "end": 1065,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1033,
              "end": 1036,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1036,
              "end": 1065,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1046,
                  "end": 1050,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1047,
                    "end": 1050,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1049,
                      "end": 1050,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1049,
                        "end": 1050,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1052,
                "end": 1065,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1054,
                    "end": 1063,
                    "argument": {
                      "type": "Identifier",
                      "start": 1061,
                      "end": 1062,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1036,
                "end": 1045,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1037,
                    "end": 1044,
                    "name": {
                      "type": "Identifier",
                      "start": 1043,
                      "end": 1044,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": true
                  }
                ]
              },
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 992,
        "end": 1001,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 993,
            "end": 1000,
            "name": {
              "type": "Identifier",
              "start": 999,
              "end": 1000,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1069,
      "end": 1137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1075,
          "end": 1136,
          "id": {
            "type": "Identifier",
            "start": 1075,
            "end": 1078,
            "name": "c71",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1081,
            "end": 1136,
            "callee": {
              "type": "Identifier",
              "start": 1085,
              "end": 1087,
              "name": "C1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 1088,
                "end": 1135,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1090,
                    "end": 1094,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1090,
                      "end": 1091,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1093,
                      "end": 1094,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1096,
                    "end": 1102,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1096,
                      "end": 1097,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1099,
                      "end": 1102,
                      "value": "c",
                      "raw": "\"c\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1104,
                    "end": 1133,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1104,
                      "end": 1105,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "start": 1107,
                      "end": 1133,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 1108,
                          "end": 1111,
                          "value": "e",
                          "raw": "\"e\""
                        },
                        {
                          "type": "Literal",
                          "start": 1113,
                          "end": 1114,
                          "value": 2,
                          "raw": "2"
                        },
                        {
                          "type": "Literal",
                          "start": 1116,
                          "end": 1120,
                          "value": true,
                          "raw": "true"
                        },
                        {
                          "type": "ObjectExpression",
                          "start": 1122,
                          "end": 1132,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 1124,
                              "end": 1130,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1124,
                                "end": 1125,
                                "name": "f",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 1127,
                                "end": 1130,
                                "value": "g",
                                "raw": "\"g\""
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
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
      "start": 1138,
      "end": 1177,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1144,
          "end": 1176,
          "id": {
            "type": "Identifier",
            "start": 1144,
            "end": 1147,
            "name": "c72",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1150,
            "end": 1176,
            "callee": {
              "type": "MemberExpression",
              "start": 1150,
              "end": 1157,
              "object": {
                "type": "Identifier",
                "start": 1150,
                "end": 1153,
                "name": "c71",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1154,
                "end": 1157,
                "name": "foo",
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
                "start": 1158,
                "end": 1175,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1159,
                    "end": 1162,
                    "value": "a",
                    "raw": "'a'"
                  },
                  {
                    "type": "ArrayExpression",
                    "start": 1164,
                    "end": 1174,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 1165,
                        "end": 1168,
                        "value": "b",
                        "raw": "'b'"
                      },
                      {
                        "type": "Literal",
                        "start": 1170,
                        "end": 1173,
                        "value": "c",
                        "raw": "'c'"
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
      "start": 1179,
      "end": 1208,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1185,
          "end": 1208,
          "id": {
            "type": "Identifier",
            "start": 1185,
            "end": 1187,
            "name": "C2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ClassExpression",
            "start": 1190,
            "end": 1208,
            "id": null,
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 1206,
              "end": 1208,
              "body": []
            },
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1196,
              "end": 1205,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1197,
                  "end": 1204,
                  "name": {
                    "type": "Identifier",
                    "start": 1203,
                    "end": 1204,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": true
                }
              ]
            },
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1210,
      "end": 1243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1216,
          "end": 1242,
          "id": {
            "type": "Identifier",
            "start": 1216,
            "end": 1219,
            "name": "fx1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1222,
            "end": 1242,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1232,
                "end": 1236,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1233,
                  "end": 1236,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1235,
                    "end": 1236,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1235,
                      "end": 1236,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 1241,
              "end": 1242,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1222,
              "end": 1231,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1223,
                  "end": 1230,
                  "name": {
                    "type": "Identifier",
                    "start": 1229,
                    "end": 1230,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": true
                }
              ]
            },
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1244,
      "end": 1278,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1250,
          "end": 1277,
          "id": {
            "type": "Identifier",
            "start": 1250,
            "end": 1253,
            "name": "fx2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1256,
            "end": 1277,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1267,
                "end": 1271,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1268,
                  "end": 1271,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1270,
                    "end": 1271,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1270,
                      "end": 1271,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 1276,
              "end": 1277,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1256,
              "end": 1266,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1257,
                  "end": 1264,
                  "name": {
                    "type": "Identifier",
                    "start": 1263,
                    "end": 1264,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": true
                }
              ]
            },
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1280,
      "end": 1310,
      "id": {
        "type": "Identifier",
        "start": 1290,
        "end": 1292,
        "name": "I1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1292,
        "end": 1301,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1293,
            "end": 1300,
            "name": {
              "type": "Identifier",
              "start": 1299,
              "end": 1300,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 1302,
        "end": 1310,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1304,
            "end": 1308,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1304,
              "end": 1305,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1305,
              "end": 1308,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1307,
                "end": 1308,
                "typeName": {
                  "type": "Identifier",
                  "start": 1307,
                  "end": 1308,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1322,
      "end": 1363,
      "id": {
        "type": "Identifier",
        "start": 1332,
        "end": 1334,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1335,
        "end": 1363,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1341,
            "end": 1361,
            "key": {
              "type": "Identifier",
              "start": 1341,
              "end": 1342,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1342,
              "end": 1351,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1343,
                  "end": 1350,
                  "name": {
                    "type": "Identifier",
                    "start": 1349,
                    "end": 1350,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": true
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 1352,
                "end": 1356,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1353,
                  "end": 1356,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1355,
                    "end": 1356,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1355,
                      "end": 1356,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1357,
              "end": 1360,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1359,
                "end": 1360,
                "typeName": {
                  "type": "Identifier",
                  "start": 1359,
                  "end": 1360,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1365,
      "end": 1386,
      "id": {
        "type": "Identifier",
        "start": 1370,
        "end": 1372,
        "name": "T1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1372,
        "end": 1381,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1373,
            "end": 1380,
            "name": {
              "type": "Identifier",
              "start": 1379,
              "end": 1380,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1384,
        "end": 1385,
        "typeName": {
          "type": "Identifier",
          "start": 1384,
          "end": 1385,
          "name": "T",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1398,
      "end": 1429,
      "id": {
        "type": "Identifier",
        "start": 1403,
        "end": 1405,
        "name": "T2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 1408,
        "end": 1428,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1408,
          "end": 1417,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1409,
              "end": 1416,
              "name": {
                "type": "Identifier",
                "start": 1415,
                "end": 1416,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": true
            }
          ]
        },
        "params": [
          {
            "type": "Identifier",
            "start": 1418,
            "end": 1422,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1419,
              "end": 1422,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1421,
                "end": 1422,
                "typeName": {
                  "type": "Identifier",
                  "start": 1421,
                  "end": 1422,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 1424,
          "end": 1428,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1427,
            "end": 1428,
            "typeName": {
              "type": "Identifier",
              "start": 1427,
              "end": 1428,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1430,
      "end": 1463,
      "id": {
        "type": "Identifier",
        "start": 1435,
        "end": 1437,
        "name": "T3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1440,
        "end": 1462,
        "members": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 1442,
            "end": 1460,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1442,
              "end": 1451,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1443,
                  "end": 1450,
                  "name": {
                    "type": "Identifier",
                    "start": 1449,
                    "end": 1450,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": true
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 1452,
                "end": 1456,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1453,
                  "end": 1456,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1455,
                    "end": 1456,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1455,
                      "end": 1456,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1457,
              "end": 1460,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1459,
                "end": 1460,
                "typeName": {
                  "type": "Identifier",
                  "start": 1459,
                  "end": 1460,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1464,
      "end": 1499,
      "id": {
        "type": "Identifier",
        "start": 1469,
        "end": 1471,
        "name": "T4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 1474,
        "end": 1498,
        "abstract": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1478,
          "end": 1487,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1479,
              "end": 1486,
              "name": {
                "type": "Identifier",
                "start": 1485,
                "end": 1486,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": true
            }
          ]
        },
        "params": [
          {
            "type": "Identifier",
            "start": 1488,
            "end": 1492,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1489,
              "end": 1492,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1491,
                "end": 1492,
                "typeName": {
                  "type": "Identifier",
                  "start": 1491,
                  "end": 1492,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 1494,
          "end": 1498,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1497,
            "end": 1498,
            "typeName": {
              "type": "Identifier",
              "start": 1497,
              "end": 1498,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1500,
      "end": 1537,
      "id": {
        "type": "Identifier",
        "start": 1505,
        "end": 1507,
        "name": "T5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1510,
        "end": 1536,
        "members": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 1512,
            "end": 1534,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1516,
              "end": 1525,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1517,
                  "end": 1524,
                  "name": {
                    "type": "Identifier",
                    "start": 1523,
                    "end": 1524,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": true
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 1526,
                "end": 1530,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1527,
                  "end": 1530,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1529,
                    "end": 1530,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1529,
                      "end": 1530,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1531,
              "end": 1534,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1533,
                "end": 1534,
                "typeName": {
                  "type": "Identifier",
                  "start": 1533,
                  "end": 1534,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1571,
      "end": 1609,
      "id": {
        "type": "Identifier",
        "start": 1576,
        "end": 1579,
        "name": "Obj",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1582,
        "end": 1608,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1584,
            "end": 1606,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1584,
              "end": 1585,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1585,
              "end": 1606,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1587,
                "end": 1606,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1589,
                    "end": 1604,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1589,
                      "end": 1590,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1590,
                      "end": 1604,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1592,
                        "end": 1604,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1594,
                            "end": 1602,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1594,
                              "end": 1595,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1595,
                              "end": 1602,
                              "typeAnnotation": {
                                "type": "TSLiteralType",
                                "start": 1597,
                                "end": 1602,
                                "literal": {
                                  "type": "Literal",
                                  "start": 1597,
                                  "end": 1602,
                                  "value": "123",
                                  "raw": "\"123\""
                                }
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1611,
      "end": 1762,
      "id": {
        "type": "Identifier",
        "start": 1616,
        "end": 1623,
        "name": "GetPath",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1623,
        "end": 1629,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1624,
            "end": 1625,
            "name": {
              "type": "Identifier",
              "start": 1624,
              "end": 1625,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1627,
            "end": 1628,
            "name": {
              "type": "Identifier",
              "start": 1627,
              "end": 1628,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1636,
        "end": 1761,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1636,
          "end": 1637,
          "typeName": {
            "type": "Identifier",
            "start": 1636,
            "end": 1637,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "start": 1646,
          "end": 1657,
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSTupleType",
            "start": 1655,
            "end": 1657,
            "elementTypes": []
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 1660,
          "end": 1661,
          "typeName": {
            "type": "Identifier",
            "start": 1660,
            "end": 1661,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 1668,
          "end": 1761,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1668,
            "end": 1669,
            "typeName": {
              "type": "Identifier",
              "start": 1668,
              "end": 1669,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "start": 1678,
            "end": 1727,
            "operator": "readonly",
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 1687,
              "end": 1727,
              "elementTypes": [
                {
                  "type": "TSInferType",
                  "start": 1688,
                  "end": 1711,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 1694,
                    "end": 1711,
                    "name": {
                      "type": "Identifier",
                      "start": 1694,
                      "end": 1695,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 1704,
                      "end": 1711,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1710,
                        "end": 1711,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1710,
                          "end": 1711,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                },
                {
                  "type": "TSRestType",
                  "start": 1713,
                  "end": 1726,
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "start": 1716,
                    "end": 1726,
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "start": 1722,
                      "end": 1726,
                      "name": {
                        "type": "Identifier",
                        "start": 1722,
                        "end": 1726,
                        "name": "Rest",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  }
                }
              ]
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 1730,
            "end": 1749,
            "typeName": {
              "type": "Identifier",
              "start": 1730,
              "end": 1737,
              "name": "GetPath",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1737,
              "end": 1749,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 1738,
                  "end": 1742,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 1738,
                    "end": 1739,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1738,
                      "end": 1739,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 1740,
                    "end": 1741,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1740,
                      "end": 1741,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1744,
                  "end": 1748,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1744,
                    "end": 1748,
                    "name": "Rest",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1756,
            "end": 1761
          }
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1764,
      "end": 1856,
      "id": {
        "type": "Identifier",
        "start": 1773,
        "end": 1776,
        "name": "set",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1815,
          "end": 1821,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1818,
            "end": 1821,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1820,
              "end": 1821,
              "typeName": {
                "type": "Identifier",
                "start": 1820,
                "end": 1821,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1823,
          "end": 1830,
          "name": "path",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1827,
            "end": 1830,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1829,
              "end": 1830,
              "typeName": {
                "type": "Identifier",
                "start": 1829,
                "end": 1830,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1832,
          "end": 1852,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1837,
            "end": 1852,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1839,
              "end": 1852,
              "typeName": {
                "type": "Identifier",
                "start": 1839,
                "end": 1846,
                "name": "GetPath",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1846,
                "end": 1852,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1847,
                    "end": 1848,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1847,
                      "end": 1848,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1850,
                    "end": 1851,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1850,
                      "end": 1851,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1854,
        "end": 1856,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1776,
        "end": 1814,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1777,
            "end": 1778,
            "name": {
              "type": "Identifier",
              "start": 1777,
              "end": 1778,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1780,
            "end": 1813,
            "name": {
              "type": "Identifier",
              "start": 1786,
              "end": 1787,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 1796,
              "end": 1813,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1805,
                "end": 1813,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 1805,
                  "end": 1811
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1858,
      "end": 1879,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1870,
          "end": 1878,
          "id": {
            "type": "Identifier",
            "start": 1870,
            "end": 1878,
            "name": "obj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1873,
              "end": 1878,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1875,
                "end": 1878,
                "typeName": {
                  "type": "Identifier",
                  "start": 1875,
                  "end": 1878,
                  "name": "Obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 1880,
      "end": 1905,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1892,
          "end": 1904,
          "id": {
            "type": "Identifier",
            "start": 1892,
            "end": 1904,
            "name": "value",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1897,
              "end": 1904,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1899,
                "end": 1904,
                "literal": {
                  "type": "Literal",
                  "start": 1899,
                  "end": 1904,
                  "value": "123",
                  "raw": "\"123\""
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 1907,
      "end": 1940,
      "expression": {
        "type": "CallExpression",
        "start": 1907,
        "end": 1939,
        "callee": {
          "type": "Identifier",
          "start": 1907,
          "end": 1910,
          "name": "set",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 1911,
            "end": 1914,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "ArrayExpression",
            "start": 1916,
            "end": 1931,
            "elements": [
              {
                "type": "Literal",
                "start": 1917,
                "end": 1920,
                "value": "a",
                "raw": "'a'"
              },
              {
                "type": "Literal",
                "start": 1922,
                "end": 1925,
                "value": "b",
                "raw": "'b'"
              },
              {
                "type": "Literal",
                "start": 1927,
                "end": 1930,
                "value": "c",
                "raw": "'c'"
              }
            ]
          },
          {
            "type": "Identifier",
            "start": 1933,
            "end": 1938,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1964,
      "end": 2067,
      "id": {
        "type": "Identifier",
        "start": 1981,
        "end": 1987,
        "name": "inners",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 2020,
          "end": 2062,
          "argument": {
            "type": "Identifier",
            "start": 2023,
            "end": 2027,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2027,
            "end": 2062,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 2029,
              "end": 2062,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 2038,
                "end": 2062,
                "elementTypes": [
                  {
                    "type": "TSUnknownKeyword",
                    "start": 2039,
                    "end": 2046
                  },
                  {
                    "type": "TSRestType",
                    "start": 2048,
                    "end": 2052,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2051,
                      "end": 2052,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2051,
                        "end": 2052,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "start": 2054,
                    "end": 2061
                  }
                ]
              }
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1987,
        "end": 2019,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1988,
            "end": 2018,
            "name": {
              "type": "Identifier",
              "start": 1994,
              "end": 1995,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 2004,
              "end": 2018,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 2013,
                "end": 2018,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 2013,
                  "end": 2016
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2063,
        "end": 2066,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2065,
          "end": 2066,
          "typeName": {
            "type": "Identifier",
            "start": 2065,
            "end": 2066,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2069,
      "end": 2100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2075,
          "end": 2099,
          "id": {
            "type": "Identifier",
            "start": 2075,
            "end": 2079,
            "name": "test",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2082,
            "end": 2099,
            "callee": {
              "type": "Identifier",
              "start": 2082,
              "end": 2088,
              "name": "inners",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 2089,
                "end": 2090,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 2091,
                "end": 2092,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 2093,
                "end": 2094,
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 2095,
                "end": 2096,
                "value": 4,
                "raw": "4"
              },
              {
                "type": "Literal",
                "start": 2097,
                "end": 2098,
                "value": 5,
                "raw": "5"
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
      "type": "TSDeclareFunction",
      "start": 2102,
      "end": 2203,
      "id": {
        "type": "Identifier",
        "start": 2119,
        "end": 2126,
        "name": "inners2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2159,
          "end": 2198,
          "name": "args",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2163,
            "end": 2198,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 2165,
              "end": 2198,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 2174,
                "end": 2198,
                "elementTypes": [
                  {
                    "type": "TSUnknownKeyword",
                    "start": 2175,
                    "end": 2182
                  },
                  {
                    "type": "TSRestType",
                    "start": 2184,
                    "end": 2188,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2187,
                      "end": 2188,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2187,
                        "end": 2188,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "start": 2190,
                    "end": 2197
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2126,
        "end": 2158,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2127,
            "end": 2157,
            "name": {
              "type": "Identifier",
              "start": 2133,
              "end": 2134,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 2143,
              "end": 2157,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 2152,
                "end": 2157,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 2152,
                  "end": 2155
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2199,
        "end": 2202,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2201,
          "end": 2202,
          "typeName": {
            "type": "Identifier",
            "start": 2201,
            "end": 2202,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2205,
      "end": 2240,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2211,
          "end": 2239,
          "id": {
            "type": "Identifier",
            "start": 2211,
            "end": 2216,
            "name": "test2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2219,
            "end": 2239,
            "callee": {
              "type": "Identifier",
              "start": 2219,
              "end": 2226,
              "name": "inners2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 2227,
                "end": 2238,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 2228,
                    "end": 2229,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 2230,
                    "end": 2231,
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "Literal",
                    "start": 2232,
                    "end": 2233,
                    "value": 3,
                    "raw": "3"
                  },
                  {
                    "type": "Literal",
                    "start": 2234,
                    "end": 2235,
                    "value": 4,
                    "raw": "4"
                  },
                  {
                    "type": "Literal",
                    "start": 2236,
                    "end": 2237,
                    "value": 5,
                    "raw": "5"
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
      "type": "TSTypeAliasDeclaration",
      "start": 2264,
      "end": 2345,
      "id": {
        "type": "Identifier",
        "start": 2269,
        "end": 2277,
        "name": "NotEmpty",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2277,
        "end": 2308,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2278,
            "end": 2307,
            "name": {
              "type": "Identifier",
              "start": 2278,
              "end": 2279,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2288,
              "end": 2307,
              "typeName": {
                "type": "Identifier",
                "start": 2288,
                "end": 2294,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2294,
                "end": 2307,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2295,
                    "end": 2301
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 2303,
                    "end": 2306
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 2311,
        "end": 2344,
        "checkType": {
          "type": "TSTypeOperator",
          "start": 2311,
          "end": 2318,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 2317,
            "end": 2318,
            "typeName": {
              "type": "Identifier",
              "start": 2317,
              "end": 2318,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "extendsType": {
          "type": "TSNeverKeyword",
          "start": 2327,
          "end": 2332
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "start": 2335,
          "end": 2340
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 2343,
          "end": 2344,
          "typeName": {
            "type": "Identifier",
            "start": 2343,
            "end": 2344,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2347,
      "end": 2420,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2353,
          "end": 2419,
          "id": {
            "type": "Identifier",
            "start": 2353,
            "end": 2358,
            "name": "thing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2361,
            "end": 2419,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2399,
                "end": 2413,
                "name": "o",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2400,
                  "end": 2413,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2402,
                    "end": 2413,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2402,
                      "end": 2410,
                      "name": "NotEmpty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2410,
                      "end": 2413,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2411,
                          "end": 2412,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2411,
                            "end": 2412,
                            "name": "O",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 2418,
              "end": 2419,
              "name": "o",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2361,
              "end": 2398,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2362,
                  "end": 2397,
                  "name": {
                    "type": "Identifier",
                    "start": 2368,
                    "end": 2369,
                    "name": "O",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2378,
                    "end": 2397,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2378,
                      "end": 2384,
                      "name": "Record",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2384,
                      "end": 2397,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2385,
                          "end": 2391
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 2393,
                          "end": 2396
                        }
                      ]
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": true
                }
              ]
            },
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2422,
      "end": 2451,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2428,
          "end": 2450,
          "id": {
            "type": "Identifier",
            "start": 2428,
            "end": 2429,
            "name": "t",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2432,
            "end": 2450,
            "callee": {
              "type": "Identifier",
              "start": 2432,
              "end": 2437,
              "name": "thing",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 2438,
                "end": 2449,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2440,
                    "end": 2447,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2440,
                      "end": 2443,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2445,
                      "end": 2447,
                      "value": "",
                      "raw": "''"
                    },
                    "kind": "init",
                    "optional": false
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
      "type": "TSTypeAliasDeclaration",
      "start": 2478,
      "end": 2588,
      "id": {
        "type": "Identifier",
        "start": 2483,
        "end": 2497,
        "name": "NotEmptyMapped",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2497,
        "end": 2528,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2498,
            "end": 2527,
            "name": {
              "type": "Identifier",
              "start": 2498,
              "end": 2499,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2508,
              "end": 2527,
              "typeName": {
                "type": "Identifier",
                "start": 2508,
                "end": 2514,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2514,
                "end": 2527,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2515,
                    "end": 2521
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 2523,
                    "end": 2526
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 2531,
        "end": 2587,
        "checkType": {
          "type": "TSTypeOperator",
          "start": 2531,
          "end": 2538,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 2537,
            "end": 2538,
            "typeName": {
              "type": "Identifier",
              "start": 2537,
              "end": 2538,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "extendsType": {
          "type": "TSNeverKeyword",
          "start": 2547,
          "end": 2552
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "start": 2555,
          "end": 2560
        },
        "falseType": {
          "type": "TSMappedType",
          "start": 2563,
          "end": 2587,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 2566,
            "end": 2578,
            "name": {
              "type": "Identifier",
              "start": 2566,
              "end": 2567,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 2571,
              "end": 2578,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2577,
                "end": 2578,
                "typeName": {
                  "type": "Identifier",
                  "start": 2577,
                  "end": 2578,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "start": 2581,
            "end": 2585,
            "objectType": {
              "type": "TSTypeReference",
              "start": 2581,
              "end": 2582,
              "typeName": {
                "type": "Identifier",
                "start": 2581,
                "end": 2582,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 2583,
              "end": 2584,
              "typeName": {
                "type": "Identifier",
                "start": 2583,
                "end": 2584,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "optional": null,
          "readonly": null,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 2571,
            "end": 2578,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2577,
              "end": 2578,
              "typeName": {
                "type": "Identifier",
                "start": 2577,
                "end": 2578,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "key": {
            "type": "Identifier",
            "start": 2566,
            "end": 2567,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2590,
      "end": 2675,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2596,
          "end": 2674,
          "id": {
            "type": "Identifier",
            "start": 2596,
            "end": 2607,
            "name": "thingMapped",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2610,
            "end": 2674,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2648,
                "end": 2668,
                "name": "o",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2649,
                  "end": 2668,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2651,
                    "end": 2668,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2651,
                      "end": 2665,
                      "name": "NotEmptyMapped",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2665,
                      "end": 2668,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2666,
                          "end": 2667,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2666,
                            "end": 2667,
                            "name": "O",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 2673,
              "end": 2674,
              "name": "o",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2610,
              "end": 2647,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2611,
                  "end": 2646,
                  "name": {
                    "type": "Identifier",
                    "start": 2617,
                    "end": 2618,
                    "name": "O",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2627,
                    "end": 2646,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2627,
                      "end": 2633,
                      "name": "Record",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2633,
                      "end": 2646,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2634,
                          "end": 2640
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 2642,
                          "end": 2645
                        }
                      ]
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": true
                }
              ]
            },
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2677,
      "end": 2718,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2683,
          "end": 2717,
          "id": {
            "type": "Identifier",
            "start": 2683,
            "end": 2690,
            "name": "tMapped",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2693,
            "end": 2717,
            "callee": {
              "type": "Identifier",
              "start": 2693,
              "end": 2704,
              "name": "thingMapped",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 2705,
                "end": 2716,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2707,
                    "end": 2714,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2707,
                      "end": 2710,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2712,
                      "end": 2714,
                      "value": "",
                      "raw": "''"
                    },
                    "kind": "init",
                    "optional": false
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
      "type": "FunctionDeclaration",
      "start": 2804,
      "end": 2919,
      "id": {
        "type": "Identifier",
        "start": 2813,
        "end": 2834,
        "name": "factory_55033_minimal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2871,
          "end": 2895,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2873,
            "end": 2895,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2875,
              "end": 2895,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 2876,
                  "end": 2886,
                  "argument": {
                    "type": "Identifier",
                    "start": 2879,
                    "end": 2883,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2883,
                    "end": 2886,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2885,
                      "end": 2886,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2885,
                        "end": 2886,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2888,
                "end": 2895,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2891,
                  "end": 2895
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2897,
        "end": 2919,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2903,
            "end": 2917,
            "argument": {
              "type": "TSAsExpression",
              "start": 2910,
              "end": 2917,
              "expression": {
                "type": "ObjectExpression",
                "start": 2910,
                "end": 2912,
                "properties": []
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2916,
                "end": 2917,
                "typeName": {
                  "type": "Identifier",
                  "start": 2916,
                  "end": 2917,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2834,
        "end": 2870,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2835,
            "end": 2869,
            "name": {
              "type": "Identifier",
              "start": 2841,
              "end": 2842,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 2851,
              "end": 2869,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 2860,
                "end": 2869,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 2860,
                  "end": 2867
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2921,
      "end": 2988,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2927,
          "end": 2988,
          "id": {
            "type": "Identifier",
            "start": 2927,
            "end": 2945,
            "name": "test_55033_minimal",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2948,
            "end": 2988,
            "callee": {
              "type": "Identifier",
              "start": 2948,
              "end": 2969,
              "name": "factory_55033_minimal",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2970,
                "end": 2987,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2971,
                    "end": 2980,
                    "name": "b",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2972,
                      "end": 2980,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2974,
                        "end": 2980
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 2985,
                  "end": 2987,
                  "body": []
                },
                "typeParameters": null,
                "returnType": null
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
      "type": "FunctionDeclaration",
      "start": 2990,
      "end": 3170,
      "id": {
        "type": "Identifier",
        "start": 2999,
        "end": 3012,
        "name": "factory_55033",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 3049,
          "end": 3073,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3051,
            "end": 3073,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 3053,
              "end": 3073,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 3054,
                  "end": 3064,
                  "argument": {
                    "type": "Identifier",
                    "start": 3057,
                    "end": 3061,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3061,
                    "end": 3064,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3063,
                      "end": 3064,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3063,
                        "end": 3064,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3066,
                "end": 3073,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3069,
                  "end": 3073
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3075,
        "end": 3170,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 3081,
            "end": 3168,
            "argument": {
              "type": "FunctionExpression",
              "start": 3088,
              "end": 3167,
              "id": {
                "type": "Identifier",
                "start": 3097,
                "end": 3101,
                "name": "call",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 3121,
                  "end": 3131,
                  "argument": {
                    "type": "Identifier",
                    "start": 3124,
                    "end": 3128,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3128,
                    "end": 3131,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3130,
                      "end": 3131,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3130,
                        "end": 3131,
                        "name": "K",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 3136,
                "end": 3167,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 3146,
                    "end": 3161,
                    "argument": {
                      "type": "TSAsExpression",
                      "start": 3153,
                      "end": 3160,
                      "expression": {
                        "type": "ObjectExpression",
                        "start": 3153,
                        "end": 3155,
                        "properties": []
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3159,
                        "end": 3160,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3159,
                          "end": 3160,
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 3101,
                "end": 3120,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 3102,
                    "end": 3119,
                    "name": {
                      "type": "Identifier",
                      "start": 3108,
                      "end": 3109,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 3118,
                      "end": 3119,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3118,
                        "end": 3119,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": true
                  }
                ]
              },
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3132,
                "end": 3135,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3134,
                  "end": 3135,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3134,
                    "end": 3135,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3012,
        "end": 3048,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3013,
            "end": 3047,
            "name": {
              "type": "Identifier",
              "start": 3019,
              "end": 3020,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3029,
              "end": 3047,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 3038,
                "end": 3047,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 3038,
                  "end": 3045
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 3172,
      "end": 3283,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3178,
          "end": 3282,
          "id": {
            "type": "Identifier",
            "start": 3178,
            "end": 3186,
            "name": "t1_55033",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3189,
            "end": 3282,
            "callee": {
              "type": "CallExpression",
              "start": 3189,
              "end": 3242,
              "callee": {
                "type": "Identifier",
                "start": 3189,
                "end": 3202,
                "name": "factory_55033",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 3203,
                  "end": 3241,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3204,
                      "end": 3223,
                      "name": "a",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3205,
                        "end": 3223,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 3207,
                          "end": 3223,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 3209,
                              "end": 3221,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3209,
                                "end": 3213,
                                "name": "test",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3213,
                                "end": 3221,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 3215,
                                  "end": 3221
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 3225,
                      "end": 3234,
                      "name": "b",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3226,
                        "end": 3234,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3228,
                          "end": 3234
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 3239,
                    "end": 3241,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 3248,
                "end": 3261,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3250,
                    "end": 3259,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3250,
                      "end": 3254,
                      "name": "test",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3256,
                      "end": 3259,
                      "value": 123,
                      "raw": "123"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 3267,
                "end": 3280,
                "value": "some string",
                "raw": "\"some string\""
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
      "start": 3285,
      "end": 3405,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3291,
          "end": 3404,
          "id": {
            "type": "Identifier",
            "start": 3291,
            "end": 3299,
            "name": "t2_55033",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3302,
            "end": 3404,
            "callee": {
              "type": "CallExpression",
              "start": 3302,
              "end": 3355,
              "callee": {
                "type": "Identifier",
                "start": 3302,
                "end": 3315,
                "name": "factory_55033",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 3316,
                  "end": 3354,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3317,
                      "end": 3336,
                      "name": "a",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3318,
                        "end": 3336,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 3320,
                          "end": 3336,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 3322,
                              "end": 3334,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3322,
                                "end": 3326,
                                "name": "test",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3326,
                                "end": 3334,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 3328,
                                  "end": 3334
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 3338,
                      "end": 3347,
                      "name": "b",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3339,
                        "end": 3347,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3341,
                          "end": 3347
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 3352,
                    "end": 3354,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "arguments": [
              {
                "type": "TSAsExpression",
                "start": 3361,
                "end": 3383,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 3361,
                  "end": 3374,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 3363,
                      "end": 3372,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3363,
                        "end": 3367,
                        "name": "test",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 3369,
                        "end": 3372,
                        "value": 123,
                        "raw": "123"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3378,
                  "end": 3383,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3378,
                    "end": 3383,
                    "name": "const",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              {
                "type": "Literal",
                "start": 3389,
                "end": 3402,
                "value": "some string",
                "raw": "\"some string\""
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
      "type": "FunctionDeclaration",
      "start": 3445,
      "end": 3618,
      "id": {
        "type": "Identifier",
        "start": 3454,
        "end": 3469,
        "name": "factory_55033_2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 3497,
          "end": 3521,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3499,
            "end": 3521,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 3501,
              "end": 3521,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 3502,
                  "end": 3512,
                  "argument": {
                    "type": "Identifier",
                    "start": 3505,
                    "end": 3509,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3509,
                    "end": 3512,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3511,
                      "end": 3512,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3511,
                        "end": 3512,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3514,
                "end": 3521,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3517,
                  "end": 3521
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3523,
        "end": 3618,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 3529,
            "end": 3616,
            "argument": {
              "type": "FunctionExpression",
              "start": 3536,
              "end": 3615,
              "id": {
                "type": "Identifier",
                "start": 3545,
                "end": 3549,
                "name": "call",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 3569,
                  "end": 3579,
                  "argument": {
                    "type": "Identifier",
                    "start": 3572,
                    "end": 3576,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3576,
                    "end": 3579,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3578,
                      "end": 3579,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3578,
                        "end": 3579,
                        "name": "K",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 3584,
                "end": 3615,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 3594,
                    "end": 3609,
                    "argument": {
                      "type": "TSAsExpression",
                      "start": 3601,
                      "end": 3608,
                      "expression": {
                        "type": "ObjectExpression",
                        "start": 3601,
                        "end": 3603,
                        "properties": []
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3607,
                        "end": 3608,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3607,
                          "end": 3608,
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 3549,
                "end": 3568,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 3550,
                    "end": 3567,
                    "name": {
                      "type": "Identifier",
                      "start": 3556,
                      "end": 3557,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 3566,
                      "end": 3567,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3566,
                        "end": 3567,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": true
                  }
                ]
              },
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3580,
                "end": 3583,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3582,
                  "end": 3583,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3582,
                    "end": 3583,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3469,
        "end": 3496,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3470,
            "end": 3495,
            "name": {
              "type": "Identifier",
              "start": 3476,
              "end": 3477,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 3486,
              "end": 3495,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 3486,
                "end": 3493
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 3620,
      "end": 3735,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3626,
          "end": 3734,
          "id": {
            "type": "Identifier",
            "start": 3626,
            "end": 3636,
            "name": "t1_55033_2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3639,
            "end": 3734,
            "callee": {
              "type": "CallExpression",
              "start": 3639,
              "end": 3694,
              "callee": {
                "type": "Identifier",
                "start": 3639,
                "end": 3654,
                "name": "factory_55033_2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 3655,
                  "end": 3693,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3656,
                      "end": 3675,
                      "name": "a",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3657,
                        "end": 3675,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 3659,
                          "end": 3675,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 3661,
                              "end": 3673,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3661,
                                "end": 3665,
                                "name": "test",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3665,
                                "end": 3673,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 3667,
                                  "end": 3673
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 3677,
                      "end": 3686,
                      "name": "b",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3678,
                        "end": 3686,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3680,
                          "end": 3686
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 3691,
                    "end": 3693,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 3700,
                "end": 3713,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3702,
                    "end": 3711,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3702,
                      "end": 3706,
                      "name": "test",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3708,
                      "end": 3711,
                      "value": 123,
                      "raw": "123"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 3719,
                "end": 3732,
                "value": "some string",
                "raw": "\"some string\""
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
      "start": 3737,
      "end": 3861,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3743,
          "end": 3860,
          "id": {
            "type": "Identifier",
            "start": 3743,
            "end": 3753,
            "name": "t2_55033_2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3756,
            "end": 3860,
            "callee": {
              "type": "CallExpression",
              "start": 3756,
              "end": 3811,
              "callee": {
                "type": "Identifier",
                "start": 3756,
                "end": 3771,
                "name": "factory_55033_2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 3772,
                  "end": 3810,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3773,
                      "end": 3792,
                      "name": "a",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3774,
                        "end": 3792,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 3776,
                          "end": 3792,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 3778,
                              "end": 3790,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3778,
                                "end": 3782,
                                "name": "test",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3782,
                                "end": 3790,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 3784,
                                  "end": 3790
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 3794,
                      "end": 3803,
                      "name": "b",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3795,
                        "end": 3803,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3797,
                          "end": 3803
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 3808,
                    "end": 3810,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "arguments": [
              {
                "type": "TSAsExpression",
                "start": 3817,
                "end": 3839,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 3817,
                  "end": 3830,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 3819,
                      "end": 3828,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3819,
                        "end": 3823,
                        "name": "test",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 3825,
                        "end": 3828,
                        "value": 123,
                        "raw": "123"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3834,
                  "end": 3839,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3834,
                    "end": 3839,
                    "name": "const",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              {
                "type": "Literal",
                "start": 3845,
                "end": 3858,
                "value": "some string",
                "raw": "\"some string\""
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
      "type": "TSDeclareFunction",
      "start": 3931,
      "end": 3989,
      "id": {
        "type": "Identifier",
        "start": 3948,
        "end": 3950,
        "name": "fn",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 3974,
          "end": 3984,
          "argument": {
            "type": "Identifier",
            "start": 3977,
            "end": 3981,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3981,
            "end": 3984,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3983,
              "end": 3984,
              "typeName": {
                "type": "Identifier",
                "start": 3983,
                "end": 3984,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3950,
        "end": 3973,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3951,
            "end": 3972,
            "name": {
              "type": "Identifier",
              "start": 3957,
              "end": 3958,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 3967,
              "end": 3972,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 3967,
                "end": 3970
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3985,
        "end": 3988,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3987,
          "end": 3988,
          "typeName": {
            "type": "Identifier",
            "start": 3987,
            "end": 3988,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 3991,
      "end": 4016,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3997,
          "end": 4015,
          "id": {
            "type": "Identifier",
            "start": 3997,
            "end": 3998,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4001,
            "end": 4015,
            "callee": {
              "type": "Identifier",
              "start": 4001,
              "end": 4003,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 4004,
                "end": 4007,
                "value": "a",
                "raw": "\"a\""
              },
              {
                "type": "Literal",
                "start": 4009,
                "end": 4014,
                "value": false,
                "raw": "false"
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
      "type": "TSDeclareFunction",
      "start": 4064,
      "end": 4124,
      "id": {
        "type": "Identifier",
        "start": 4081,
        "end": 4084,
        "name": "fa1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 4112,
          "end": 4119,
          "name": "args",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4116,
            "end": 4119,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4118,
              "end": 4119,
              "typeName": {
                "type": "Identifier",
                "start": 4118,
                "end": 4119,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4084,
        "end": 4111,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4085,
            "end": 4110,
            "name": {
              "type": "Identifier",
              "start": 4091,
              "end": 4092,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 4101,
              "end": 4110,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 4101,
                "end": 4108
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4120,
        "end": 4123,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4122,
          "end": 4123,
          "typeName": {
            "type": "Identifier",
            "start": 4122,
            "end": 4123,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 4125,
      "end": 4194,
      "id": {
        "type": "Identifier",
        "start": 4142,
        "end": 4145,
        "name": "fa2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 4182,
          "end": 4189,
          "name": "args",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4186,
            "end": 4189,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4188,
              "end": 4189,
              "typeName": {
                "type": "Identifier",
                "start": 4188,
                "end": 4189,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4145,
        "end": 4181,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4146,
            "end": 4180,
            "name": {
              "type": "Identifier",
              "start": 4152,
              "end": 4153,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 4162,
              "end": 4180,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 4171,
                "end": 4180,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 4171,
                  "end": 4178
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4190,
        "end": 4193,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4192,
          "end": 4193,
          "typeName": {
            "type": "Identifier",
            "start": 4192,
            "end": 4193,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 4196,
      "end": 4215,
      "expression": {
        "type": "CallExpression",
        "start": 4196,
        "end": 4214,
        "callee": {
          "type": "Identifier",
          "start": 4196,
          "end": 4199,
          "name": "fa1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 4200,
            "end": 4213,
            "elements": [
              {
                "type": "Literal",
                "start": 4201,
                "end": 4208,
                "value": "hello",
                "raw": "\"hello\""
              },
              {
                "type": "Literal",
                "start": 4210,
                "end": 4212,
                "value": 42,
                "raw": "42"
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4216,
      "end": 4235,
      "expression": {
        "type": "CallExpression",
        "start": 4216,
        "end": 4234,
        "callee": {
          "type": "Identifier",
          "start": 4216,
          "end": 4219,
          "name": "fa2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 4220,
            "end": 4233,
            "elements": [
              {
                "type": "Literal",
                "start": 4221,
                "end": 4228,
                "value": "hello",
                "raw": "\"hello\""
              },
              {
                "type": "Literal",
                "start": 4230,
                "end": 4232,
                "value": 42,
                "raw": "42"
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 4237,
      "end": 4300,
      "id": {
        "type": "Identifier",
        "start": 4254,
        "end": 4257,
        "name": "fb1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 4285,
          "end": 4295,
          "argument": {
            "type": "Identifier",
            "start": 4288,
            "end": 4292,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4292,
            "end": 4295,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4294,
              "end": 4295,
              "typeName": {
                "type": "Identifier",
                "start": 4294,
                "end": 4295,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4257,
        "end": 4284,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4258,
            "end": 4283,
            "name": {
              "type": "Identifier",
              "start": 4264,
              "end": 4265,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 4274,
              "end": 4283,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 4274,
                "end": 4281
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4296,
        "end": 4299,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4298,
          "end": 4299,
          "typeName": {
            "type": "Identifier",
            "start": 4298,
            "end": 4299,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 4301,
      "end": 4373,
      "id": {
        "type": "Identifier",
        "start": 4318,
        "end": 4321,
        "name": "fb2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 4358,
          "end": 4368,
          "argument": {
            "type": "Identifier",
            "start": 4361,
            "end": 4365,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4365,
            "end": 4368,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4367,
              "end": 4368,
              "typeName": {
                "type": "Identifier",
                "start": 4367,
                "end": 4368,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4321,
        "end": 4357,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4322,
            "end": 4356,
            "name": {
              "type": "Identifier",
              "start": 4328,
              "end": 4329,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 4338,
              "end": 4356,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 4347,
                "end": 4356,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 4347,
                  "end": 4354
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4369,
        "end": 4372,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4371,
          "end": 4372,
          "typeName": {
            "type": "Identifier",
            "start": 4371,
            "end": 4372,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 4375,
      "end": 4392,
      "expression": {
        "type": "CallExpression",
        "start": 4375,
        "end": 4391,
        "callee": {
          "type": "Identifier",
          "start": 4375,
          "end": 4378,
          "name": "fb1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 4379,
            "end": 4386,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "Literal",
            "start": 4388,
            "end": 4390,
            "value": 42,
            "raw": "42"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4393,
      "end": 4410,
      "expression": {
        "type": "CallExpression",
        "start": 4393,
        "end": 4409,
        "callee": {
          "type": "Identifier",
          "start": 4393,
          "end": 4396,
          "name": "fb2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 4397,
            "end": 4404,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "Literal",
            "start": 4406,
            "end": 4408,
            "value": 42,
            "raw": "42"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 4412,
      "end": 4500,
      "id": {
        "type": "Identifier",
        "start": 4429,
        "end": 4432,
        "name": "fc1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 4460,
          "end": 4483,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4461,
            "end": 4483,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 4463,
              "end": 4483,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 4464,
                  "end": 4474,
                  "argument": {
                    "type": "Identifier",
                    "start": 4467,
                    "end": 4471,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4471,
                    "end": 4474,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4473,
                      "end": 4474,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4473,
                        "end": 4474,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4476,
                "end": 4483,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4479,
                  "end": 4483
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "RestElement",
          "start": 4485,
          "end": 4495,
          "argument": {
            "type": "Identifier",
            "start": 4488,
            "end": 4492,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4492,
            "end": 4495,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4494,
              "end": 4495,
              "typeName": {
                "type": "Identifier",
                "start": 4494,
                "end": 4495,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4432,
        "end": 4459,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4433,
            "end": 4458,
            "name": {
              "type": "Identifier",
              "start": 4439,
              "end": 4440,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 4449,
              "end": 4458,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 4449,
                "end": 4456
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4496,
        "end": 4499,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4498,
          "end": 4499,
          "typeName": {
            "type": "Identifier",
            "start": 4498,
            "end": 4499,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 4501,
      "end": 4598,
      "id": {
        "type": "Identifier",
        "start": 4518,
        "end": 4521,
        "name": "fc2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 4558,
          "end": 4581,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4559,
            "end": 4581,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 4561,
              "end": 4581,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 4562,
                  "end": 4572,
                  "argument": {
                    "type": "Identifier",
                    "start": 4565,
                    "end": 4569,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4569,
                    "end": 4572,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4571,
                      "end": 4572,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4571,
                        "end": 4572,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4574,
                "end": 4581,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4577,
                  "end": 4581
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "RestElement",
          "start": 4583,
          "end": 4593,
          "argument": {
            "type": "Identifier",
            "start": 4586,
            "end": 4590,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4590,
            "end": 4593,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4592,
              "end": 4593,
              "typeName": {
                "type": "Identifier",
                "start": 4592,
                "end": 4593,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4521,
        "end": 4557,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4522,
            "end": 4556,
            "name": {
              "type": "Identifier",
              "start": 4528,
              "end": 4529,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 4538,
              "end": 4556,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 4547,
                "end": 4556,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 4547,
                  "end": 4554
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4594,
        "end": 4597,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4596,
          "end": 4597,
          "typeName": {
            "type": "Identifier",
            "start": 4596,
            "end": 4597,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 4600,
      "end": 4647,
      "expression": {
        "type": "CallExpression",
        "start": 4600,
        "end": 4646,
        "callee": {
          "type": "Identifier",
          "start": 4600,
          "end": 4603,
          "name": "fc1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 4604,
            "end": 4632,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 4605,
                "end": 4614,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4606,
                  "end": 4614,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 4608,
                    "end": 4614
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4616,
                "end": 4625,
                "name": "b",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4617,
                  "end": 4625,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 4619,
                    "end": 4625
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 4630,
              "end": 4632,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "Literal",
            "start": 4634,
            "end": 4641,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "Literal",
            "start": 4643,
            "end": 4645,
            "value": 42,
            "raw": "42"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4648,
      "end": 4695,
      "expression": {
        "type": "CallExpression",
        "start": 4648,
        "end": 4694,
        "callee": {
          "type": "Identifier",
          "start": 4648,
          "end": 4651,
          "name": "fc2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 4652,
            "end": 4680,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 4653,
                "end": 4662,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4654,
                  "end": 4662,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 4656,
                    "end": 4662
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4664,
                "end": 4673,
                "name": "b",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4665,
                  "end": 4673,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 4667,
                    "end": 4673
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 4678,
              "end": 4680,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "Literal",
            "start": 4682,
            "end": 4689,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "Literal",
            "start": 4691,
            "end": 4693,
            "value": 42,
            "raw": "42"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 4697,
      "end": 4767,
      "id": {
        "type": "Identifier",
        "start": 4714,
        "end": 4717,
        "name": "fd1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 4755,
          "end": 4762,
          "name": "args",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4759,
            "end": 4762,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4761,
              "end": 4762,
              "typeName": {
                "type": "Identifier",
                "start": 4761,
                "end": 4762,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4717,
        "end": 4754,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4718,
            "end": 4753,
            "name": {
              "type": "Identifier",
              "start": 4724,
              "end": 4725,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 4734,
              "end": 4753,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 4734,
                  "end": 4742,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 4734,
                    "end": 4740
                  }
                },
                {
                  "type": "TSArrayType",
                  "start": 4745,
                  "end": 4753,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 4745,
                    "end": 4751
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4763,
        "end": 4766,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4765,
          "end": 4766,
          "typeName": {
            "type": "Identifier",
            "start": 4765,
            "end": 4766,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 4768,
      "end": 4847,
      "id": {
        "type": "Identifier",
        "start": 4785,
        "end": 4788,
        "name": "fd2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 4835,
          "end": 4842,
          "name": "args",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4839,
            "end": 4842,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4841,
              "end": 4842,
              "typeName": {
                "type": "Identifier",
                "start": 4841,
                "end": 4842,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4788,
        "end": 4834,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4789,
            "end": 4833,
            "name": {
              "type": "Identifier",
              "start": 4795,
              "end": 4796,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 4805,
              "end": 4833,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 4805,
                  "end": 4813,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 4805,
                    "end": 4811
                  }
                },
                {
                  "type": "TSTypeOperator",
                  "start": 4816,
                  "end": 4833,
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 4825,
                    "end": 4833,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 4825,
                      "end": 4831
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4843,
        "end": 4846,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4845,
          "end": 4846,
          "typeName": {
            "type": "Identifier",
            "start": 4845,
            "end": 4846,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 4848,
      "end": 4936,
      "id": {
        "type": "Identifier",
        "start": 4865,
        "end": 4868,
        "name": "fd3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 4924,
          "end": 4931,
          "name": "args",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4928,
            "end": 4931,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4930,
              "end": 4931,
              "typeName": {
                "type": "Identifier",
                "start": 4930,
                "end": 4931,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4868,
        "end": 4923,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4869,
            "end": 4922,
            "name": {
              "type": "Identifier",
              "start": 4875,
              "end": 4876,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 4885,
              "end": 4922,
              "types": [
                {
                  "type": "TSTypeOperator",
                  "start": 4885,
                  "end": 4902,
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 4894,
                    "end": 4902,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 4894,
                      "end": 4900
                    }
                  }
                },
                {
                  "type": "TSTypeOperator",
                  "start": 4905,
                  "end": 4922,
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 4914,
                    "end": 4922,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 4914,
                      "end": 4920
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4932,
        "end": 4935,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4934,
          "end": 4935,
          "typeName": {
            "type": "Identifier",
            "start": 4934,
            "end": 4935,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 4938,
      "end": 4962,
      "expression": {
        "type": "CallExpression",
        "start": 4938,
        "end": 4961,
        "callee": {
          "type": "Identifier",
          "start": 4938,
          "end": 4941,
          "name": "fd1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 4942,
            "end": 4960,
            "elements": [
              {
                "type": "Literal",
                "start": 4943,
                "end": 4950,
                "value": "hello",
                "raw": "\"hello\""
              },
              {
                "type": "Literal",
                "start": 4952,
                "end": 4959,
                "value": "world",
                "raw": "\"world\""
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4963,
      "end": 4978,
      "expression": {
        "type": "CallExpression",
        "start": 4963,
        "end": 4977,
        "callee": {
          "type": "Identifier",
          "start": 4963,
          "end": 4966,
          "name": "fd1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 4967,
            "end": 4976,
            "elements": [
              {
                "type": "Literal",
                "start": 4968,
                "end": 4969,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 4971,
                "end": 4972,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 4974,
                "end": 4975,
                "value": 3,
                "raw": "3"
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4979,
      "end": 5003,
      "expression": {
        "type": "CallExpression",
        "start": 4979,
        "end": 5002,
        "callee": {
          "type": "Identifier",
          "start": 4979,
          "end": 4982,
          "name": "fd2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 4983,
            "end": 5001,
            "elements": [
              {
                "type": "Literal",
                "start": 4984,
                "end": 4991,
                "value": "hello",
                "raw": "\"hello\""
              },
              {
                "type": "Literal",
                "start": 4993,
                "end": 5000,
                "value": "world",
                "raw": "\"world\""
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 5004,
      "end": 5019,
      "expression": {
        "type": "CallExpression",
        "start": 5004,
        "end": 5018,
        "callee": {
          "type": "Identifier",
          "start": 5004,
          "end": 5007,
          "name": "fd2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 5008,
            "end": 5017,
            "elements": [
              {
                "type": "Literal",
                "start": 5009,
                "end": 5010,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 5012,
                "end": 5013,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 5015,
                "end": 5016,
                "value": 3,
                "raw": "3"
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 5020,
      "end": 5044,
      "expression": {
        "type": "CallExpression",
        "start": 5020,
        "end": 5043,
        "callee": {
          "type": "Identifier",
          "start": 5020,
          "end": 5023,
          "name": "fd3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 5024,
            "end": 5042,
            "elements": [
              {
                "type": "Literal",
                "start": 5025,
                "end": 5032,
                "value": "hello",
                "raw": "\"hello\""
              },
              {
                "type": "Literal",
                "start": 5034,
                "end": 5041,
                "value": "world",
                "raw": "\"world\""
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 5045,
      "end": 5060,
      "expression": {
        "type": "CallExpression",
        "start": 5045,
        "end": 5059,
        "callee": {
          "type": "Identifier",
          "start": 5045,
          "end": 5048,
          "name": "fd3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 5049,
            "end": 5058,
            "elements": [
              {
                "type": "Literal",
                "start": 5050,
                "end": 5051,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 5053,
                "end": 5054,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 5056,
                "end": 5057,
                "value": 3,
                "raw": "3"
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 5062,
      "end": 5136,
      "id": {
        "type": "Identifier",
        "start": 5079,
        "end": 5082,
        "name": "fn1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 5121,
          "end": 5131,
          "argument": {
            "type": "Identifier",
            "start": 5124,
            "end": 5128,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5128,
            "end": 5131,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 5130,
              "end": 5131,
              "typeName": {
                "type": "Identifier",
                "start": 5130,
                "end": 5131,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5082,
        "end": 5120,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5083,
            "end": 5119,
            "name": {
              "type": "Identifier",
              "start": 5089,
              "end": 5090,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 5099,
              "end": 5119,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 5099,
                "end": 5117,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 5101,
                    "end": 5115,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 5101,
                      "end": 5104,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5104,
                      "end": 5115,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 5106,
                        "end": 5115,
                        "elementType": {
                          "type": "TSUnknownKeyword",
                          "start": 5106,
                          "end": 5113
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 5132,
        "end": 5135,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 5134,
          "end": 5135,
          "typeName": {
            "type": "Identifier",
            "start": 5134,
            "end": 5135,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 5138,
      "end": 5183,
      "expression": {
        "type": "CallExpression",
        "start": 5138,
        "end": 5182,
        "callee": {
          "type": "Identifier",
          "start": 5138,
          "end": 5141,
          "name": "fn1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 5142,
            "end": 5165,
            "properties": [
              {
                "type": "Property",
                "start": 5144,
                "end": 5163,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5144,
                  "end": 5147,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrayExpression",
                  "start": 5149,
                  "end": 5163,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 5150,
                      "end": 5157,
                      "value": "hello",
                      "raw": "\"hello\""
                    },
                    {
                      "type": "Literal",
                      "start": 5159,
                      "end": 5162,
                      "value": 123,
                      "raw": "123"
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 5167,
            "end": 5181,
            "properties": [
              {
                "type": "Property",
                "start": 5169,
                "end": 5180,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5169,
                  "end": 5172,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrayExpression",
                  "start": 5174,
                  "end": 5180,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 5175,
                      "end": 5179,
                      "value": true,
                      "raw": "true"
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

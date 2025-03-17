__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 114,
  "end": 940,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 114,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 126,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 127,
          "end": 152,
          "properties": [
            {
              "type": "Property",
              "start": 128,
              "end": 137,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 128,
                "end": 129,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ArrayPattern",
                "start": 131,
                "end": 137,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 132,
                    "end": 133,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 135,
                    "end": 136,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 139,
              "end": 151,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 139,
                "end": 140,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ObjectPattern",
                "start": 142,
                "end": 151,
                "properties": [
                  {
                    "type": "Property",
                    "start": 143,
                    "end": 144,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 143,
                      "end": 144,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 143,
                      "end": 144,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 146,
                    "end": 147,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 147,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 147,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 149,
                    "end": 150,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 149,
                      "end": 150,
                      "name": "e",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 149,
                      "end": 150,
                      "name": "e",
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
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 154,
        "end": 157,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 158,
      "end": 216,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 170,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 171,
          "end": 211,
          "properties": [
            {
              "type": "Property",
              "start": 172,
              "end": 186,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 172,
                "end": 173,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ArrayPattern",
                "start": 175,
                "end": 186,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 176,
                    "end": 177,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "AssignmentPattern",
                    "start": 179,
                    "end": 185,
                    "left": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 180,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 183,
                      "end": 185,
                      "value": 10,
                      "raw": "10"
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 188,
              "end": 210,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 188,
                "end": 189,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ObjectPattern",
                "start": 191,
                "end": 210,
                "properties": [
                  {
                    "type": "Property",
                    "start": 192,
                    "end": 193,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 192,
                      "end": 193,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 192,
                      "end": 193,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 195,
                    "end": 196,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 195,
                      "end": 196,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 195,
                      "end": 196,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 198,
                    "end": 209,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 199,
                      "name": "e",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 198,
                      "end": 209,
                      "left": {
                        "type": "Identifier",
                        "start": 198,
                        "end": 199,
                        "name": "e",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 202,
                        "end": 209,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 204,
                            "end": 207,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 204,
                              "end": 205,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 206,
                              "end": 207,
                              "value": 1,
                              "raw": "1"
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 213,
        "end": 216,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 217,
      "end": 263,
      "id": {
        "type": "Identifier",
        "start": 226,
        "end": 229,
        "name": "baz",
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
          "start": 230,
          "end": 258,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 231,
            "end": 258,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 233,
              "end": 258,
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 234,
                  "end": 240
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 242,
                  "end": 248
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 250,
                  "end": 257
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 260,
        "end": 263,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 265,
      "end": 328,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 269,
          "end": 327,
          "id": {
            "type": "Identifier",
            "start": 269,
            "end": 270,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 273,
            "end": 327,
            "properties": [
              {
                "type": "Property",
                "start": 275,
                "end": 291,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 276,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrayExpression",
                  "start": 278,
                  "end": 291,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 279,
                      "end": 287,
                      "value": "string",
                      "raw": "\"string\""
                    },
                    {
                      "type": "Literal",
                      "start": 289,
                      "end": 290,
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 293,
                "end": 325,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 293,
                  "end": 294,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 296,
                  "end": 325,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 298,
                      "end": 305,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 298,
                        "end": 299,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 301,
                        "end": 305,
                        "value": true,
                        "raw": "true"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 307,
                      "end": 317,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 307,
                        "end": 308,
                        "name": "d",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 310,
                        "end": 317,
                        "value": "world",
                        "raw": "\"world\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 319,
                      "end": 323,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 319,
                        "end": 320,
                        "name": "e",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 322,
                        "end": 323,
                        "value": 3,
                        "raw": "3"
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 329,
      "end": 459,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 333,
          "end": 458,
          "id": {
            "type": "Identifier",
            "start": 333,
            "end": 401,
            "name": "o1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 335,
              "end": 401,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 337,
                "end": 401,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 339,
                    "end": 359,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 339,
                      "end": 340,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 340,
                      "end": 358,
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "start": 342,
                        "end": 358,
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "start": 343,
                            "end": 349
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 351,
                            "end": 357
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 360,
                    "end": 399,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 360,
                      "end": 361,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 361,
                      "end": 399,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 363,
                        "end": 399,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 365,
                            "end": 376,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 365,
                              "end": 366,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 366,
                              "end": 375,
                              "typeAnnotation": {
                                "type": "TSBooleanKeyword",
                                "start": 368,
                                "end": 375
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 377,
                            "end": 387,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 377,
                              "end": 378,
                              "name": "d",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 378,
                              "end": 386,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 380,
                                "end": 386
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 388,
                            "end": 397,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 388,
                              "end": 389,
                              "name": "e",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 389,
                              "end": 397,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 391,
                                "end": 397
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
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 404,
            "end": 458,
            "properties": [
              {
                "type": "Property",
                "start": 406,
                "end": 422,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 406,
                  "end": 407,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrayExpression",
                  "start": 409,
                  "end": 422,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 410,
                      "end": 418,
                      "value": "string",
                      "raw": "\"string\""
                    },
                    {
                      "type": "Literal",
                      "start": 420,
                      "end": 421,
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 424,
                "end": 456,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 424,
                  "end": 425,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 427,
                  "end": 456,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 429,
                      "end": 436,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 429,
                        "end": 430,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 432,
                        "end": 436,
                        "value": true,
                        "raw": "true"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 438,
                      "end": 448,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 438,
                        "end": 439,
                        "name": "d",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 441,
                        "end": 448,
                        "value": "world",
                        "raw": "\"world\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 450,
                      "end": 454,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 450,
                        "end": 451,
                        "name": "e",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 453,
                        "end": 454,
                        "value": 3,
                        "raw": "3"
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 460,
      "end": 468,
      "expression": {
        "type": "CallExpression",
        "start": 460,
        "end": 467,
        "callee": {
          "type": "Identifier",
          "start": 460,
          "end": 463,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 464,
            "end": 466,
            "name": "o1",
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
      "type": "ExpressionStatement",
      "start": 543,
      "end": 603,
      "expression": {
        "type": "CallExpression",
        "start": 543,
        "end": 602,
        "callee": {
          "type": "Identifier",
          "start": 543,
          "end": 546,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 547,
            "end": 601,
            "properties": [
              {
                "type": "Property",
                "start": 549,
                "end": 565,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 549,
                  "end": 550,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrayExpression",
                  "start": 552,
                  "end": 565,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 553,
                      "end": 561,
                      "value": "string",
                      "raw": "\"string\""
                    },
                    {
                      "type": "Literal",
                      "start": 563,
                      "end": 564,
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 567,
                "end": 599,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 567,
                  "end": 568,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 570,
                  "end": 599,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 572,
                      "end": 579,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 572,
                        "end": 573,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 575,
                        "end": 579,
                        "value": true,
                        "raw": "true"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 581,
                      "end": 591,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 581,
                        "end": 582,
                        "name": "d",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 584,
                        "end": 591,
                        "value": "world",
                        "raw": "\"world\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 593,
                      "end": 597,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 593,
                        "end": 594,
                        "name": "e",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 596,
                        "end": 597,
                        "value": 3,
                        "raw": "3"
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
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 618,
      "end": 650,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 622,
          "end": 649,
          "id": {
            "type": "Identifier",
            "start": 622,
            "end": 627,
            "name": "array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 630,
            "end": 649,
            "elements": [
              {
                "type": "Literal",
                "start": 631,
                "end": 639,
                "value": "string",
                "raw": "\"string\""
              },
              {
                "type": "Literal",
                "start": 641,
                "end": 642,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 644,
                "end": 648,
                "value": true,
                "raw": "true"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 651,
      "end": 710,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 655,
          "end": 709,
          "id": {
            "type": "Identifier",
            "start": 655,
            "end": 687,
            "name": "tuple",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 660,
              "end": 687,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 662,
                "end": 687,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 663,
                    "end": 669
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 671,
                    "end": 677
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 679,
                    "end": 686
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 690,
            "end": 709,
            "elements": [
              {
                "type": "Literal",
                "start": 691,
                "end": 699,
                "value": "string",
                "raw": "\"string\""
              },
              {
                "type": "Literal",
                "start": 701,
                "end": 702,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 704,
                "end": 708,
                "value": true,
                "raw": "true"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 711,
      "end": 722,
      "expression": {
        "type": "CallExpression",
        "start": 711,
        "end": 721,
        "callee": {
          "type": "Identifier",
          "start": 711,
          "end": 714,
          "name": "baz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 715,
            "end": 720,
            "name": "tuple",
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
      "type": "ExpressionStatement",
      "start": 723,
      "end": 748,
      "expression": {
        "type": "CallExpression",
        "start": 723,
        "end": 747,
        "callee": {
          "type": "Identifier",
          "start": 723,
          "end": 726,
          "name": "baz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 727,
            "end": 746,
            "elements": [
              {
                "type": "Literal",
                "start": 728,
                "end": 736,
                "value": "string",
                "raw": "\"string\""
              },
              {
                "type": "Literal",
                "start": 738,
                "end": 739,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 741,
                "end": 745,
                "value": true,
                "raw": "true"
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
      "start": 750,
      "end": 761,
      "expression": {
        "type": "CallExpression",
        "start": 750,
        "end": 760,
        "callee": {
          "type": "Identifier",
          "start": 750,
          "end": 753,
          "name": "baz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 754,
            "end": 759,
            "name": "array",
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
      "type": "ExpressionStatement",
      "start": 796,
      "end": 831,
      "expression": {
        "type": "CallExpression",
        "start": 796,
        "end": 830,
        "callee": {
          "type": "Identifier",
          "start": 796,
          "end": 799,
          "name": "baz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 800,
            "end": 829,
            "elements": [
              {
                "type": "Literal",
                "start": 801,
                "end": 809,
                "value": "string",
                "raw": "\"string\""
              },
              {
                "type": "Literal",
                "start": 811,
                "end": 812,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 814,
                "end": 818,
                "value": true,
                "raw": "true"
              },
              {
                "type": "SpreadElement",
                "start": 820,
                "end": 828,
                "argument": {
                  "type": "Identifier",
                  "start": 823,
                  "end": 828,
                  "name": "array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
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
      "start": 842,
      "end": 849,
      "expression": {
        "type": "CallExpression",
        "start": 842,
        "end": 848,
        "callee": {
          "type": "Identifier",
          "start": 842,
          "end": 845,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 846,
            "end": 847,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 113,
  "end": 939,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 113,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 125,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 126,
          "end": 151,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 127,
              "end": 136,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ArrayPattern",
                "start": 130,
                "end": 136,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 131,
                    "end": 132,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 134,
                    "end": 135,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 138,
              "end": 150,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 138,
                "end": 139,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ObjectPattern",
                "start": 141,
                "end": 150,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 142,
                    "end": 143,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 142,
                      "end": 143,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 142,
                      "end": 143,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 145,
                    "end": 146,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 145,
                      "end": 146,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 145,
                      "end": 146,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 148,
                    "end": 149,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 149,
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 149,
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 153,
        "end": 156,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 157,
      "end": 215,
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 169,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 170,
          "end": 210,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 171,
              "end": 185,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 171,
                "end": 172,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ArrayPattern",
                "start": 174,
                "end": 185,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 175,
                    "end": 176,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "AssignmentPattern",
                    "start": 178,
                    "end": 184,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 179,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 182,
                      "end": 184,
                      "value": 10,
                      "raw": "10"
                    },
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 187,
              "end": 209,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 187,
                "end": 188,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ObjectPattern",
                "start": 190,
                "end": 209,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 191,
                    "end": 192,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 192,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 192,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 194,
                    "end": 195,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 195,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 195,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 197,
                    "end": 208,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 197,
                      "end": 198,
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 197,
                      "end": 208,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 197,
                        "end": 198,
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 201,
                        "end": 208,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 203,
                            "end": 206,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 203,
                              "end": 204,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 205,
                              "end": 206,
                              "value": 1,
                              "raw": "1"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      },
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 212,
        "end": 215,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 216,
      "end": 262,
      "id": {
        "type": "Identifier",
        "start": 225,
        "end": 228,
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 229,
          "end": 257,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 230,
            "end": 257,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 232,
              "end": 257,
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 233,
                  "end": 239
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 241,
                  "end": 247
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 249,
                  "end": 256
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 259,
        "end": 262,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 264,
      "end": 327,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 326,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 269,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 272,
            "end": 326,
            "properties": [
              {
                "type": "Property",
                "start": 274,
                "end": 290,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 275,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrayExpression",
                  "start": 277,
                  "end": 290,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 278,
                      "end": 286,
                      "value": "string",
                      "raw": "\"string\""
                    },
                    {
                      "type": "Literal",
                      "start": 288,
                      "end": 289,
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 292,
                "end": 324,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 292,
                  "end": 293,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 295,
                  "end": 324,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 297,
                      "end": 304,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 297,
                        "end": 298,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 300,
                        "end": 304,
                        "value": true,
                        "raw": "true"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 306,
                      "end": 316,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 306,
                        "end": 307,
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 309,
                        "end": 316,
                        "value": "world",
                        "raw": "\"world\""
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 318,
                      "end": 322,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 318,
                        "end": 319,
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 321,
                        "end": 322,
                        "value": 3,
                        "raw": "3"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 328,
      "end": 458,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 457,
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 400,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 334,
              "end": 400,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 336,
                "end": 400,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 338,
                    "end": 358,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 338,
                      "end": 339,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 339,
                      "end": 357,
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "start": 341,
                        "end": 357,
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "start": 342,
                            "end": 348
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 350,
                            "end": 356
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 359,
                    "end": 398,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 359,
                      "end": 360,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 360,
                      "end": 398,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 362,
                        "end": 398,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 364,
                            "end": 375,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 364,
                              "end": 365,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 365,
                              "end": 374,
                              "typeAnnotation": {
                                "type": "TSBooleanKeyword",
                                "start": 367,
                                "end": 374
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 376,
                            "end": 386,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 376,
                              "end": 377,
                              "decorators": [],
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 377,
                              "end": 385,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 379,
                                "end": 385
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 387,
                            "end": 396,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 387,
                              "end": 388,
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 388,
                              "end": 396,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 390,
                                "end": 396
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
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 403,
            "end": 457,
            "properties": [
              {
                "type": "Property",
                "start": 405,
                "end": 421,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 405,
                  "end": 406,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrayExpression",
                  "start": 408,
                  "end": 421,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 409,
                      "end": 417,
                      "value": "string",
                      "raw": "\"string\""
                    },
                    {
                      "type": "Literal",
                      "start": 419,
                      "end": 420,
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 423,
                "end": 455,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 423,
                  "end": 424,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 426,
                  "end": 455,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 428,
                      "end": 435,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 428,
                        "end": 429,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 431,
                        "end": 435,
                        "value": true,
                        "raw": "true"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 437,
                      "end": 447,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 437,
                        "end": 438,
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 440,
                        "end": 447,
                        "value": "world",
                        "raw": "\"world\""
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 449,
                      "end": 453,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 449,
                        "end": 450,
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 452,
                        "end": 453,
                        "value": 3,
                        "raw": "3"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 459,
      "end": 467,
      "expression": {
        "type": "CallExpression",
        "start": 459,
        "end": 466,
        "callee": {
          "type": "Identifier",
          "start": 459,
          "end": 462,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 463,
            "end": 465,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 542,
      "end": 602,
      "expression": {
        "type": "CallExpression",
        "start": 542,
        "end": 601,
        "callee": {
          "type": "Identifier",
          "start": 542,
          "end": 545,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 546,
            "end": 600,
            "properties": [
              {
                "type": "Property",
                "start": 548,
                "end": 564,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 548,
                  "end": 549,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrayExpression",
                  "start": 551,
                  "end": 564,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 552,
                      "end": 560,
                      "value": "string",
                      "raw": "\"string\""
                    },
                    {
                      "type": "Literal",
                      "start": 562,
                      "end": 563,
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 566,
                "end": 598,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 566,
                  "end": 567,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 569,
                  "end": 598,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 571,
                      "end": 578,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 571,
                        "end": 572,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 574,
                        "end": 578,
                        "value": true,
                        "raw": "true"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 580,
                      "end": 590,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 580,
                        "end": 581,
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 583,
                        "end": 590,
                        "value": "world",
                        "raw": "\"world\""
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 592,
                      "end": 596,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 592,
                        "end": 593,
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 595,
                        "end": 596,
                        "value": 3,
                        "raw": "3"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 617,
      "end": 649,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 621,
          "end": 648,
          "id": {
            "type": "Identifier",
            "start": 621,
            "end": 626,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 629,
            "end": 648,
            "elements": [
              {
                "type": "Literal",
                "start": 630,
                "end": 638,
                "value": "string",
                "raw": "\"string\""
              },
              {
                "type": "Literal",
                "start": 640,
                "end": 641,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 643,
                "end": 647,
                "value": true,
                "raw": "true"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 650,
      "end": 709,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 654,
          "end": 708,
          "id": {
            "type": "Identifier",
            "start": 654,
            "end": 686,
            "decorators": [],
            "name": "tuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 659,
              "end": 686,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 661,
                "end": 686,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 662,
                    "end": 668
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 670,
                    "end": 676
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 678,
                    "end": 685
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 689,
            "end": 708,
            "elements": [
              {
                "type": "Literal",
                "start": 690,
                "end": 698,
                "value": "string",
                "raw": "\"string\""
              },
              {
                "type": "Literal",
                "start": 700,
                "end": 701,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 703,
                "end": 707,
                "value": true,
                "raw": "true"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 710,
      "end": 721,
      "expression": {
        "type": "CallExpression",
        "start": 710,
        "end": 720,
        "callee": {
          "type": "Identifier",
          "start": 710,
          "end": 713,
          "decorators": [],
          "name": "baz",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 714,
            "end": 719,
            "decorators": [],
            "name": "tuple",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 722,
      "end": 747,
      "expression": {
        "type": "CallExpression",
        "start": 722,
        "end": 746,
        "callee": {
          "type": "Identifier",
          "start": 722,
          "end": 725,
          "decorators": [],
          "name": "baz",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 726,
            "end": 745,
            "elements": [
              {
                "type": "Literal",
                "start": 727,
                "end": 735,
                "value": "string",
                "raw": "\"string\""
              },
              {
                "type": "Literal",
                "start": 737,
                "end": 738,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 740,
                "end": 744,
                "value": true,
                "raw": "true"
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 749,
      "end": 760,
      "expression": {
        "type": "CallExpression",
        "start": 749,
        "end": 759,
        "callee": {
          "type": "Identifier",
          "start": 749,
          "end": 752,
          "decorators": [],
          "name": "baz",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 753,
            "end": 758,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 795,
      "end": 830,
      "expression": {
        "type": "CallExpression",
        "start": 795,
        "end": 829,
        "callee": {
          "type": "Identifier",
          "start": 795,
          "end": 798,
          "decorators": [],
          "name": "baz",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 799,
            "end": 828,
            "elements": [
              {
                "type": "Literal",
                "start": 800,
                "end": 808,
                "value": "string",
                "raw": "\"string\""
              },
              {
                "type": "Literal",
                "start": 810,
                "end": 811,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 813,
                "end": 817,
                "value": true,
                "raw": "true"
              },
              {
                "type": "SpreadElement",
                "start": 819,
                "end": 827,
                "argument": {
                  "type": "Identifier",
                  "start": 822,
                  "end": 827,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 841,
      "end": 848,
      "expression": {
        "type": "CallExpression",
        "start": 841,
        "end": 847,
        "callee": {
          "type": "Identifier",
          "start": 841,
          "end": 844,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 845,
            "end": 846,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

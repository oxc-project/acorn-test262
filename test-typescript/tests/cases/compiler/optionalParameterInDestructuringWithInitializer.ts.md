__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 1215,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 57,
      "end": 101,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 75,
        "name": "f",
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
          "start": 76,
          "end": 84,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 77,
            "end": 84,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 78,
              "end": 84
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 85,
          "end": 93,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 86,
            "end": 93,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 87,
              "end": 93
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 94,
        "end": 100,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 96,
          "end": 100
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 103,
      "end": 192,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 117,
        "name": "func1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 119,
          "end": 165,
          "left": {
            "type": "ObjectPattern",
            "start": 119,
            "end": 150,
            "properties": [
              {
                "type": "Property",
                "start": 120,
                "end": 121,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 121,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 121,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 123,
                "end": 124,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 124,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 124,
                  "name": "b",
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 150,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 127,
                "end": 150,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 128,
                    "end": 138,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 129,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 129,
                      "end": 137,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 131,
                        "end": 137
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 139,
                    "end": 149,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 140,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 141,
                      "end": 149,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 143,
                        "end": 149
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "right": {
            "type": "ObjectExpression",
            "start": 153,
            "end": 165,
            "properties": [
              {
                "type": "Property",
                "start": 154,
                "end": 158,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 155,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 157,
                  "end": 158,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 160,
                "end": 164,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 161,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 163,
                  "end": 164,
                  "value": 2,
                  "raw": "2"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 168,
        "end": 192,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 172,
            "end": 179,
            "expression": {
              "type": "CallExpression",
              "start": 172,
              "end": 179,
              "callee": {
                "type": "Identifier",
                "start": 172,
                "end": 173,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 174,
                  "end": 175,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 177,
                  "end": 178,
                  "name": "b",
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
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 194,
      "end": 288,
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 208,
        "name": "func2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 210,
          "end": 258,
          "left": {
            "type": "ObjectPattern",
            "start": 210,
            "end": 244,
            "properties": [
              {
                "type": "Property",
                "start": 211,
                "end": 212,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 212,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 212,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 214,
                "end": 219,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 215,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 214,
                  "end": 219,
                  "left": {
                    "type": "Identifier",
                    "start": 214,
                    "end": 215,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 218,
                    "end": 219,
                    "value": 3,
                    "raw": "3"
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 220,
              "end": 244,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 222,
                "end": 244,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 223,
                    "end": 233,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 224,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 224,
                      "end": 232,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 226,
                        "end": 232
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 234,
                    "end": 243,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 234,
                      "end": 235,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 236,
                      "end": 243,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 237,
                        "end": 243
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "right": {
            "type": "ObjectExpression",
            "start": 247,
            "end": 258,
            "properties": [
              {
                "type": "Property",
                "start": 248,
                "end": 252,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 249,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 251,
                  "end": 252,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 253,
                "end": 257,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 254,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 256,
                  "end": 257,
                  "value": 2,
                  "raw": "2"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 261,
        "end": 288,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 265,
            "end": 272,
            "expression": {
              "type": "CallExpression",
              "start": 265,
              "end": 272,
              "callee": {
                "type": "Identifier",
                "start": 265,
                "end": 266,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 267,
                  "end": 268,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 270,
                  "end": 271,
                  "name": "b",
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
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 290,
      "end": 372,
      "id": {
        "type": "Identifier",
        "start": 299,
        "end": 304,
        "name": "func3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 306,
          "end": 346,
          "left": {
            "type": "ObjectPattern",
            "start": 306,
            "end": 337,
            "properties": [
              {
                "type": "Property",
                "start": 307,
                "end": 308,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 307,
                  "end": 308,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 307,
                  "end": 308,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 310,
                "end": 311,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 311,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 311,
                  "name": "b",
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 312,
              "end": 337,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 314,
                "end": 337,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 315,
                    "end": 325,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 316,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 316,
                      "end": 324,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 318,
                        "end": 324
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 326,
                    "end": 336,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 326,
                      "end": 327,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 328,
                      "end": 336,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 330,
                        "end": 336
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "right": {
            "type": "ObjectExpression",
            "start": 340,
            "end": 346,
            "properties": [
              {
                "type": "Property",
                "start": 341,
                "end": 345,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 342,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 344,
                  "end": 345,
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 349,
        "end": 372,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 353,
            "end": 359,
            "expression": {
              "type": "CallExpression",
              "start": 353,
              "end": 359,
              "callee": {
                "type": "Identifier",
                "start": 353,
                "end": 354,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 355,
                  "end": 356,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 357,
                  "end": 358,
                  "name": "b",
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
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 374,
      "end": 493,
      "id": {
        "type": "Identifier",
        "start": 383,
        "end": 388,
        "name": "func4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 390,
          "end": 467,
          "left": {
            "type": "ObjectPattern",
            "start": 390,
            "end": 443,
            "properties": [
              {
                "type": "Property",
                "start": 391,
                "end": 400,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 391,
                  "end": 392,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectPattern",
                  "start": 394,
                  "end": 400,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 395,
                      "end": 396,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 395,
                        "end": 396,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 395,
                        "end": 396,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 398,
                      "end": 399,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 398,
                        "end": 399,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 398,
                        "end": 399,
                        "name": "c",
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
              },
              {
                "type": "Property",
                "start": 402,
                "end": 403,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 402,
                  "end": 403,
                  "name": "d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 402,
                  "end": 403,
                  "name": "d",
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 404,
              "end": 443,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 406,
                "end": 443,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 407,
                    "end": 433,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 407,
                      "end": 408,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 408,
                      "end": 432,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 410,
                        "end": 432,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 411,
                            "end": 421,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 411,
                              "end": 412,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 412,
                              "end": 420,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 414,
                                "end": 420
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 421,
                            "end": 431,
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 421,
                              "end": 422,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 423,
                              "end": 431,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 425,
                                "end": 431
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
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 433,
                    "end": 442,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 433,
                      "end": 434,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 434,
                      "end": 442,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 436,
                        "end": 442
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "right": {
            "type": "ObjectExpression",
            "start": 446,
            "end": 467,
            "properties": [
              {
                "type": "Property",
                "start": 447,
                "end": 461,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 447,
                  "end": 448,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 450,
                  "end": 461,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 451,
                      "end": 455,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 451,
                        "end": 452,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 454,
                        "end": 455,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 456,
                      "end": 460,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 456,
                        "end": 457,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 459,
                        "end": 460,
                        "value": 2,
                        "raw": "2"
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
                "start": 462,
                "end": 466,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 462,
                  "end": 463,
                  "name": "d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 465,
                  "end": 466,
                  "value": 3,
                  "raw": "3"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 470,
        "end": 493,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 474,
            "end": 480,
            "expression": {
              "type": "CallExpression",
              "start": 474,
              "end": 480,
              "callee": {
                "type": "Identifier",
                "start": 474,
                "end": 475,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 476,
                  "end": 477,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 478,
                  "end": 479,
                  "name": "c",
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
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 495,
      "end": 621,
      "id": {
        "type": "Identifier",
        "start": 504,
        "end": 509,
        "name": "func5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 510,
          "end": 591,
          "left": {
            "type": "ObjectPattern",
            "start": 510,
            "end": 567,
            "properties": [
              {
                "type": "Property",
                "start": 511,
                "end": 524,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 511,
                  "end": 512,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectPattern",
                  "start": 514,
                  "end": 524,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 515,
                      "end": 516,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 515,
                        "end": 516,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 515,
                        "end": 516,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 518,
                      "end": 523,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 518,
                        "end": 519,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 518,
                        "end": 523,
                        "left": {
                          "type": "Identifier",
                          "start": 518,
                          "end": 519,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 522,
                          "end": 523,
                          "value": 4,
                          "raw": "4"
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
              },
              {
                "type": "Property",
                "start": 526,
                "end": 527,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 526,
                  "end": 527,
                  "name": "d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 526,
                  "end": 527,
                  "name": "d",
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 528,
              "end": 567,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 530,
                "end": 567,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 531,
                    "end": 557,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 531,
                      "end": 532,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 532,
                      "end": 556,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 534,
                        "end": 556,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 535,
                            "end": 545,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 535,
                              "end": 536,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 536,
                              "end": 544,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 538,
                                "end": 544
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 545,
                            "end": 555,
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 545,
                              "end": 546,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 547,
                              "end": 555,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 549,
                                "end": 555
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
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 557,
                    "end": 566,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 557,
                      "end": 558,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 558,
                      "end": 566,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 560,
                        "end": 566
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "right": {
            "type": "ObjectExpression",
            "start": 570,
            "end": 591,
            "properties": [
              {
                "type": "Property",
                "start": 571,
                "end": 585,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 571,
                  "end": 572,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 574,
                  "end": 585,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 575,
                      "end": 579,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 575,
                        "end": 576,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 578,
                        "end": 579,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 580,
                      "end": 584,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 580,
                        "end": 581,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 583,
                        "end": 584,
                        "value": 2,
                        "raw": "2"
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
                "start": 586,
                "end": 590,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 586,
                  "end": 587,
                  "name": "d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 589,
                  "end": 590,
                  "value": 3,
                  "raw": "3"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 594,
        "end": 621,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 598,
            "end": 605,
            "expression": {
              "type": "CallExpression",
              "start": 598,
              "end": 605,
              "callee": {
                "type": "Identifier",
                "start": 598,
                "end": 599,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 600,
                  "end": 601,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 603,
                  "end": 604,
                  "name": "c",
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
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 623,
      "end": 761,
      "id": {
        "type": "Identifier",
        "start": 632,
        "end": 637,
        "name": "func6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 639,
          "end": 734,
          "left": {
            "type": "ObjectPattern",
            "start": 639,
            "end": 709,
            "properties": [
              {
                "type": "Property",
                "start": 640,
                "end": 664,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 640,
                  "end": 641,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 643,
                  "end": 664,
                  "left": {
                    "type": "ObjectPattern",
                    "start": 643,
                    "end": 649,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 644,
                        "end": 645,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 644,
                          "end": 645,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 644,
                          "end": 645,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 647,
                        "end": 648,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 647,
                          "end": 648,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 647,
                          "end": 648,
                          "name": "c",
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
                  "right": {
                    "type": "ObjectExpression",
                    "start": 652,
                    "end": 664,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 653,
                        "end": 657,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 653,
                          "end": 654,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 656,
                          "end": 657,
                          "value": 4,
                          "raw": "4"
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 659,
                        "end": 663,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 659,
                          "end": 660,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 662,
                          "end": 663,
                          "value": 5,
                          "raw": "5"
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
              },
              {
                "type": "Property",
                "start": 666,
                "end": 667,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 666,
                  "end": 667,
                  "name": "d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 666,
                  "end": 667,
                  "name": "d",
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 668,
              "end": 709,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 670,
                "end": 709,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 671,
                    "end": 698,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 671,
                      "end": 672,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 672,
                      "end": 697,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 674,
                        "end": 697,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 675,
                            "end": 685,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 675,
                              "end": 676,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 676,
                              "end": 684,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 678,
                                "end": 684
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 686,
                            "end": 696,
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 686,
                              "end": 687,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 688,
                              "end": 696,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 690,
                                "end": 696
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
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 699,
                    "end": 708,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 699,
                      "end": 700,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 700,
                      "end": 708,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 702,
                        "end": 708
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "right": {
            "type": "ObjectExpression",
            "start": 712,
            "end": 734,
            "properties": [
              {
                "type": "Property",
                "start": 713,
                "end": 727,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 713,
                  "end": 714,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 716,
                  "end": 727,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 717,
                      "end": 721,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 717,
                        "end": 718,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 720,
                        "end": 721,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 722,
                      "end": 726,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 722,
                        "end": 723,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 725,
                        "end": 726,
                        "value": 2,
                        "raw": "2"
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
                "start": 729,
                "end": 733,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 729,
                  "end": 730,
                  "name": "d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 732,
                  "end": 733,
                  "value": 3,
                  "raw": "3"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 737,
        "end": 761,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 741,
            "end": 748,
            "expression": {
              "type": "CallExpression",
              "start": 741,
              "end": 748,
              "callee": {
                "type": "Identifier",
                "start": 741,
                "end": 742,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 743,
                  "end": 744,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 746,
                  "end": 747,
                  "name": "c",
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
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 763,
      "end": 909,
      "id": {
        "type": "Identifier",
        "start": 772,
        "end": 777,
        "name": "func7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 779,
          "end": 879,
          "left": {
            "type": "ObjectPattern",
            "start": 779,
            "end": 853,
            "properties": [
              {
                "type": "Property",
                "start": 780,
                "end": 808,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 780,
                  "end": 781,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 783,
                  "end": 808,
                  "left": {
                    "type": "ObjectPattern",
                    "start": 783,
                    "end": 793,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 784,
                        "end": 785,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 784,
                          "end": 785,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 784,
                          "end": 785,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 787,
                        "end": 792,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 787,
                          "end": 788,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 787,
                          "end": 792,
                          "left": {
                            "type": "Identifier",
                            "start": 787,
                            "end": 788,
                            "name": "c",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 791,
                            "end": 792,
                            "value": 6,
                            "raw": "6"
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
                  "right": {
                    "type": "ObjectExpression",
                    "start": 796,
                    "end": 808,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 797,
                        "end": 801,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 797,
                          "end": 798,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 800,
                          "end": 801,
                          "value": 4,
                          "raw": "4"
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 803,
                        "end": 807,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 803,
                          "end": 804,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 806,
                          "end": 807,
                          "value": 5,
                          "raw": "5"
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
              },
              {
                "type": "Property",
                "start": 810,
                "end": 811,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 810,
                  "end": 811,
                  "name": "d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 810,
                  "end": 811,
                  "name": "d",
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 812,
              "end": 853,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 814,
                "end": 853,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 815,
                    "end": 842,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 815,
                      "end": 816,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 816,
                      "end": 841,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 818,
                        "end": 841,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 819,
                            "end": 829,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 819,
                              "end": 820,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 820,
                              "end": 828,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 822,
                                "end": 828
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 830,
                            "end": 840,
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 830,
                              "end": 831,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 832,
                              "end": 840,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 834,
                                "end": 840
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
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 843,
                    "end": 852,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 843,
                      "end": 844,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 844,
                      "end": 852,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 846,
                        "end": 852
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "right": {
            "type": "ObjectExpression",
            "start": 856,
            "end": 879,
            "properties": [
              {
                "type": "Property",
                "start": 857,
                "end": 872,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 857,
                  "end": 858,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 860,
                  "end": 872,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 861,
                      "end": 865,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 861,
                        "end": 862,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 864,
                        "end": 865,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 867,
                      "end": 871,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 867,
                        "end": 868,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 870,
                        "end": 871,
                        "value": 2,
                        "raw": "2"
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
                "start": 874,
                "end": 878,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 874,
                  "end": 875,
                  "name": "d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 877,
                  "end": 878,
                  "value": 3,
                  "raw": "3"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 882,
        "end": 909,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 886,
            "end": 893,
            "expression": {
              "type": "CallExpression",
              "start": 886,
              "end": 893,
              "callee": {
                "type": "Identifier",
                "start": 886,
                "end": 887,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 888,
                  "end": 889,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 891,
                  "end": 892,
                  "name": "c",
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
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 911,
      "end": 953,
      "id": {
        "type": "Identifier",
        "start": 921,
        "end": 924,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 925,
        "end": 953,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 929,
            "end": 951,
            "computed": false,
            "optional": true,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 938,
              "end": 941,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 942,
              "end": 950,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 944,
                "end": 950
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
      "type": "FunctionDeclaration",
      "start": 955,
      "end": 1012,
      "id": {
        "type": "Identifier",
        "start": 964,
        "end": 974,
        "name": "performFoo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 975,
          "end": 992,
          "left": {
            "type": "ObjectPattern",
            "start": 975,
            "end": 987,
            "properties": [
              {
                "type": "Property",
                "start": 977,
                "end": 980,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 977,
                  "end": 980,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 977,
                  "end": 980,
                  "name": "bar",
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 982,
              "end": 987,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 984,
                "end": 987,
                "typeName": {
                  "type": "Identifier",
                  "start": 984,
                  "end": 987,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "right": {
            "type": "ObjectExpression",
            "start": 990,
            "end": 992,
            "properties": []
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 994,
        "end": 1012,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 998,
            "end": 1010,
            "expression": {
              "type": "CallExpression",
              "start": 998,
              "end": 1009,
              "callee": {
                "type": "Identifier",
                "start": 998,
                "end": 1004,
                "name": "useBar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1005,
                  "end": 1008,
                  "name": "bar",
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
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1014,
      "end": 1057,
      "id": {
        "type": "Identifier",
        "start": 1031,
        "end": 1037,
        "name": "useBar",
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
          "start": 1038,
          "end": 1049,
          "name": "bar",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1041,
            "end": 1049,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1043,
              "end": 1049
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1050,
        "end": 1056,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1052,
          "end": 1056
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1059,
      "end": 1072,
      "expression": {
        "type": "CallExpression",
        "start": 1059,
        "end": 1071,
        "callee": {
          "type": "Identifier",
          "start": 1059,
          "end": 1069,
          "name": "performFoo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1074,
      "end": 1140,
      "id": {
        "type": "Identifier",
        "start": 1083,
        "end": 1094,
        "name": "performFoo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 1095,
          "end": 1119,
          "left": {
            "type": "ObjectPattern",
            "start": 1095,
            "end": 1114,
            "properties": [
              {
                "type": "Property",
                "start": 1097,
                "end": 1107,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1097,
                  "end": 1100,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 1097,
                  "end": 1107,
                  "left": {
                    "type": "Identifier",
                    "start": 1097,
                    "end": 1100,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1103,
                    "end": 1107,
                    "value": null,
                    "raw": "null"
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1109,
              "end": 1114,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1111,
                "end": 1114,
                "typeName": {
                  "type": "Identifier",
                  "start": 1111,
                  "end": 1114,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "right": {
            "type": "ObjectExpression",
            "start": 1117,
            "end": 1119,
            "properties": []
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1121,
        "end": 1140,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1125,
            "end": 1138,
            "expression": {
              "type": "CallExpression",
              "start": 1125,
              "end": 1137,
              "callee": {
                "type": "Identifier",
                "start": 1125,
                "end": 1132,
                "name": "useBar2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1133,
                  "end": 1136,
                  "name": "bar",
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
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1142,
      "end": 1198,
      "id": {
        "type": "Identifier",
        "start": 1159,
        "end": 1166,
        "name": "useBar2",
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
          "start": 1167,
          "end": 1190,
          "name": "bar",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1170,
            "end": 1190,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1172,
              "end": 1190,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1172,
                  "end": 1178
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1181,
                  "end": 1190
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
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1191,
        "end": 1197,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1193,
          "end": 1197
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1200,
      "end": 1214,
      "expression": {
        "type": "CallExpression",
        "start": 1200,
        "end": 1213,
        "callee": {
          "type": "Identifier",
          "start": 1200,
          "end": 1211,
          "name": "performFoo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
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

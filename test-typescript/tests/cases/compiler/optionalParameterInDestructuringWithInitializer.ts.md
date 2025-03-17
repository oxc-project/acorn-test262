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
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 75,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 76,
          "end": 84,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 77,
            "end": 84,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 78,
              "end": 84
            }
          }
        },
        {
          "type": "Identifier",
          "start": 85,
          "end": 93,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 86,
            "end": 93,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 87,
              "end": 93
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 94,
        "end": 100,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 96,
          "end": 100
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 103,
      "end": 192,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 168,
        "end": 192,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 172,
            "end": 179,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 172,
              "end": 179,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 174,
                  "end": 175,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 177,
                  "end": 178,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 172,
                "end": 173,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 117,
        "decorators": [],
        "name": "func1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 119,
          "end": 165,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 119,
            "end": 150,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 120,
                "end": 121,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 121,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 121,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 123,
                "end": 124,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 124,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 124,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 129,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 129,
                      "end": 137,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 131,
                        "end": 137
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 139,
                    "end": 149,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 140,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 141,
                      "end": 149,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 143,
                        "end": 149
                      }
                    }
                  }
                ]
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ObjectExpression",
            "start": 153,
            "end": 165,
            "properties": [
              {
                "type": "Property",
                "start": 154,
                "end": 158,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 155,
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
                  "start": 157,
                  "end": 158,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 160,
                "end": 164,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 161,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 163,
                  "end": 164,
                  "raw": "2",
                  "value": 2
                }
              }
            ]
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 194,
      "end": 288,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 261,
        "end": 288,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 265,
            "end": 272,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 265,
              "end": 272,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 267,
                  "end": 268,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 270,
                  "end": 271,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 265,
                "end": 266,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 208,
        "decorators": [],
        "name": "func2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 210,
          "end": 258,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 210,
            "end": 244,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 211,
                "end": 212,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 212,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 212,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 214,
                "end": 219,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 215,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 214,
                  "end": 219,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 214,
                    "end": 215,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 218,
                    "end": 219,
                    "raw": "3",
                    "value": 3
                  },
                  "typeAnnotation": null
                }
              }
            ],
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 224,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 224,
                      "end": 232,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 226,
                        "end": 232
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 234,
                    "end": 243,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 234,
                      "end": 235,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 236,
                      "end": 243,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 237,
                        "end": 243
                      }
                    }
                  }
                ]
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ObjectExpression",
            "start": 247,
            "end": 258,
            "properties": [
              {
                "type": "Property",
                "start": 248,
                "end": 252,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 249,
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
                  "start": 251,
                  "end": 252,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 253,
                "end": 257,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 254,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 256,
                  "end": 257,
                  "raw": "2",
                  "value": 2
                }
              }
            ]
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 290,
      "end": 372,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 349,
        "end": 372,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 353,
            "end": 359,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 353,
              "end": 359,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 355,
                  "end": 356,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 357,
                  "end": 358,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 353,
                "end": 354,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 299,
        "end": 304,
        "decorators": [],
        "name": "func3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 306,
          "end": 346,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 306,
            "end": 337,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 307,
                "end": 308,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 307,
                  "end": 308,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 307,
                  "end": 308,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 310,
                "end": 311,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 311,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 311,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 316,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 316,
                      "end": 324,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 318,
                        "end": 324
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 326,
                    "end": 336,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 326,
                      "end": 327,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 328,
                      "end": 336,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 330,
                        "end": 336
                      }
                    }
                  }
                ]
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ObjectExpression",
            "start": 340,
            "end": 346,
            "properties": [
              {
                "type": "Property",
                "start": 341,
                "end": 345,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 342,
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
                  "start": 344,
                  "end": 345,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 374,
      "end": 493,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 470,
        "end": 493,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 474,
            "end": 480,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 474,
              "end": 480,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 476,
                  "end": 477,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 478,
                  "end": 479,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 474,
                "end": 475,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 383,
        "end": 388,
        "decorators": [],
        "name": "func4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 390,
          "end": 467,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 390,
            "end": 443,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 391,
                "end": 400,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 391,
                  "end": 392,
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
                  "type": "ObjectPattern",
                  "start": 394,
                  "end": 400,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 395,
                      "end": 396,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 395,
                        "end": 396,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 395,
                        "end": 396,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 398,
                      "end": 399,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 398,
                        "end": 399,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 398,
                        "end": 399,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 402,
                "end": 403,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 402,
                  "end": 403,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 402,
                  "end": 403,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 407,
                      "end": 408,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
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
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 411,
                              "end": 412,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 412,
                              "end": 420,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 414,
                                "end": 420
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 421,
                            "end": 431,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 421,
                              "end": 422,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": true,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 423,
                              "end": 431,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 425,
                                "end": 431
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 433,
                    "end": 442,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 433,
                      "end": 434,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 434,
                      "end": 442,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 436,
                        "end": 442
                      }
                    }
                  }
                ]
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ObjectExpression",
            "start": 446,
            "end": 467,
            "properties": [
              {
                "type": "Property",
                "start": 447,
                "end": 461,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 447,
                  "end": 448,
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
                  "type": "ObjectExpression",
                  "start": 450,
                  "end": 461,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 451,
                      "end": 455,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 451,
                        "end": 452,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 454,
                        "end": 455,
                        "raw": "1",
                        "value": 1
                      }
                    },
                    {
                      "type": "Property",
                      "start": 456,
                      "end": 460,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 456,
                        "end": 457,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 459,
                        "end": 460,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 462,
                "end": 466,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 462,
                  "end": 463,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 465,
                  "end": 466,
                  "raw": "3",
                  "value": 3
                }
              }
            ]
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 495,
      "end": 621,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 594,
        "end": 621,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 598,
            "end": 605,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 598,
              "end": 605,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 600,
                  "end": 601,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 603,
                  "end": 604,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 598,
                "end": 599,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 504,
        "end": 509,
        "decorators": [],
        "name": "func5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 510,
          "end": 591,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 510,
            "end": 567,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 511,
                "end": 524,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 511,
                  "end": 512,
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
                  "type": "ObjectPattern",
                  "start": 514,
                  "end": 524,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 515,
                      "end": 516,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 515,
                        "end": 516,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 515,
                        "end": 516,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 518,
                      "end": 523,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 518,
                        "end": 519,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 518,
                        "end": 523,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 518,
                          "end": 519,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 522,
                          "end": 523,
                          "raw": "4",
                          "value": 4
                        },
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 526,
                "end": 527,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 526,
                  "end": 527,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 526,
                  "end": 527,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 531,
                      "end": 532,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
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
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 535,
                              "end": 536,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 536,
                              "end": 544,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 538,
                                "end": 544
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 545,
                            "end": 555,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 545,
                              "end": 546,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": true,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 547,
                              "end": 555,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 549,
                                "end": 555
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 557,
                    "end": 566,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 557,
                      "end": 558,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 558,
                      "end": 566,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 560,
                        "end": 566
                      }
                    }
                  }
                ]
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ObjectExpression",
            "start": 570,
            "end": 591,
            "properties": [
              {
                "type": "Property",
                "start": 571,
                "end": 585,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 571,
                  "end": 572,
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
                  "type": "ObjectExpression",
                  "start": 574,
                  "end": 585,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 575,
                      "end": 579,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 575,
                        "end": 576,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 578,
                        "end": 579,
                        "raw": "1",
                        "value": 1
                      }
                    },
                    {
                      "type": "Property",
                      "start": 580,
                      "end": 584,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 580,
                        "end": 581,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 583,
                        "end": 584,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 586,
                "end": 590,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 586,
                  "end": 587,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 589,
                  "end": 590,
                  "raw": "3",
                  "value": 3
                }
              }
            ]
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 623,
      "end": 761,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 737,
        "end": 761,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 741,
            "end": 748,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 741,
              "end": 748,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 743,
                  "end": 744,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 746,
                  "end": 747,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 741,
                "end": 742,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 632,
        "end": 637,
        "decorators": [],
        "name": "func6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 639,
          "end": 734,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 639,
            "end": 709,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 640,
                "end": 664,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 640,
                  "end": 641,
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
                  "type": "AssignmentPattern",
                  "start": 643,
                  "end": 664,
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "start": 643,
                    "end": 649,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 644,
                        "end": 645,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 644,
                          "end": 645,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 644,
                          "end": 645,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 647,
                        "end": 648,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 647,
                          "end": 648,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 647,
                          "end": 648,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "ObjectExpression",
                    "start": 652,
                    "end": 664,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 653,
                        "end": 657,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 653,
                          "end": 654,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 656,
                          "end": 657,
                          "raw": "4",
                          "value": 4
                        }
                      },
                      {
                        "type": "Property",
                        "start": 659,
                        "end": 663,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 659,
                          "end": 660,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 662,
                          "end": 663,
                          "raw": "5",
                          "value": 5
                        }
                      }
                    ]
                  },
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 666,
                "end": 667,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 666,
                  "end": 667,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 666,
                  "end": 667,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 671,
                      "end": 672,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
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
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 675,
                              "end": 676,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 676,
                              "end": 684,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 678,
                                "end": 684
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 686,
                            "end": 696,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 686,
                              "end": 687,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": true,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 688,
                              "end": 696,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 690,
                                "end": 696
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 699,
                    "end": 708,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 699,
                      "end": 700,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 700,
                      "end": 708,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 702,
                        "end": 708
                      }
                    }
                  }
                ]
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ObjectExpression",
            "start": 712,
            "end": 734,
            "properties": [
              {
                "type": "Property",
                "start": 713,
                "end": 727,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 713,
                  "end": 714,
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
                  "type": "ObjectExpression",
                  "start": 716,
                  "end": 727,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 717,
                      "end": 721,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 717,
                        "end": 718,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 720,
                        "end": 721,
                        "raw": "1",
                        "value": 1
                      }
                    },
                    {
                      "type": "Property",
                      "start": 722,
                      "end": 726,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 722,
                        "end": 723,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 725,
                        "end": 726,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 729,
                "end": 733,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 729,
                  "end": 730,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 732,
                  "end": 733,
                  "raw": "3",
                  "value": 3
                }
              }
            ]
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 763,
      "end": 909,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 882,
        "end": 909,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 886,
            "end": 893,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 886,
              "end": 893,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 888,
                  "end": 889,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 891,
                  "end": 892,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 886,
                "end": 887,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 772,
        "end": 777,
        "decorators": [],
        "name": "func7",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 779,
          "end": 879,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 779,
            "end": 853,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 780,
                "end": 808,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 780,
                  "end": 781,
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
                  "type": "AssignmentPattern",
                  "start": 783,
                  "end": 808,
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "start": 783,
                    "end": 793,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 784,
                        "end": 785,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 784,
                          "end": 785,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 784,
                          "end": 785,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 787,
                        "end": 792,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 787,
                          "end": 788,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 787,
                          "end": 792,
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "start": 787,
                            "end": 788,
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "right": {
                            "type": "Literal",
                            "start": 791,
                            "end": 792,
                            "raw": "6",
                            "value": 6
                          },
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "ObjectExpression",
                    "start": 796,
                    "end": 808,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 797,
                        "end": 801,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 797,
                          "end": 798,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 800,
                          "end": 801,
                          "raw": "4",
                          "value": 4
                        }
                      },
                      {
                        "type": "Property",
                        "start": 803,
                        "end": 807,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 803,
                          "end": 804,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 806,
                          "end": 807,
                          "raw": "5",
                          "value": 5
                        }
                      }
                    ]
                  },
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 810,
                "end": 811,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 810,
                  "end": 811,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 810,
                  "end": 811,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 815,
                      "end": 816,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
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
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 819,
                              "end": 820,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 820,
                              "end": 828,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 822,
                                "end": 828
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 830,
                            "end": 840,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 830,
                              "end": 831,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": true,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 832,
                              "end": 840,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 834,
                                "end": 840
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 843,
                    "end": 852,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 843,
                      "end": 844,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 844,
                      "end": 852,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 846,
                        "end": 852
                      }
                    }
                  }
                ]
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ObjectExpression",
            "start": 856,
            "end": 879,
            "properties": [
              {
                "type": "Property",
                "start": 857,
                "end": 872,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 857,
                  "end": 858,
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
                  "type": "ObjectExpression",
                  "start": 860,
                  "end": 872,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 861,
                      "end": 865,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 861,
                        "end": 862,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 864,
                        "end": 865,
                        "raw": "1",
                        "value": 1
                      }
                    },
                    {
                      "type": "Property",
                      "start": 867,
                      "end": 871,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 867,
                        "end": 868,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 870,
                        "end": 871,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 874,
                "end": 878,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 874,
                  "end": 875,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 877,
                  "end": 878,
                  "raw": "3",
                  "value": 3
                }
              }
            ]
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 911,
      "end": 953,
      "body": {
        "type": "TSInterfaceBody",
        "start": 925,
        "end": 953,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 929,
            "end": 951,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 938,
              "end": 941,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 942,
              "end": 950,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 944,
                "end": 950
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 921,
        "end": 924,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 955,
      "end": 1012,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 994,
        "end": 1012,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 998,
            "end": 1010,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 998,
              "end": 1009,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1005,
                  "end": 1008,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 998,
                "end": 1004,
                "decorators": [],
                "name": "useBar",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 964,
        "end": 974,
        "decorators": [],
        "name": "performFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 975,
          "end": 992,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 975,
            "end": 987,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 977,
                "end": 980,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 977,
                  "end": 980,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 977,
                  "end": 980,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 982,
              "end": 987,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 984,
                "end": 987,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 984,
                  "end": 987,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ObjectExpression",
            "start": 990,
            "end": 992,
            "properties": []
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1014,
      "end": 1057,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1031,
        "end": 1037,
        "decorators": [],
        "name": "useBar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1038,
          "end": 1049,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1041,
            "end": 1049,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1043,
              "end": 1049
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1050,
        "end": 1056,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1052,
          "end": 1056
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1059,
      "end": 1072,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1059,
        "end": 1071,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1059,
          "end": 1069,
          "decorators": [],
          "name": "performFoo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1074,
      "end": 1140,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1121,
        "end": 1140,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1125,
            "end": 1138,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1125,
              "end": 1137,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1133,
                  "end": 1136,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1125,
                "end": 1132,
                "decorators": [],
                "name": "useBar2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1083,
        "end": 1094,
        "decorators": [],
        "name": "performFoo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 1095,
          "end": 1119,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 1095,
            "end": 1114,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 1097,
                "end": 1107,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1097,
                  "end": 1100,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 1097,
                  "end": 1107,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1097,
                    "end": 1100,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 1103,
                    "end": 1107,
                    "raw": "null",
                    "value": null
                  },
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1109,
              "end": 1114,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1111,
                "end": 1114,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1111,
                  "end": 1114,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ObjectExpression",
            "start": 1117,
            "end": 1119,
            "properties": []
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1142,
      "end": 1198,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1159,
        "end": 1166,
        "decorators": [],
        "name": "useBar2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1167,
          "end": 1190,
          "decorators": [],
          "name": "bar",
          "optional": false,
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
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1191,
        "end": 1197,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1193,
          "end": 1197
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1200,
      "end": 1214,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1200,
        "end": 1213,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1200,
          "end": 1211,
          "decorators": [],
          "name": "performFoo2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 579,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 532,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 11,
          "end": 16,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 11,
            "end": 12,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 15,
            "end": 16,
            "value": 0,
            "raw": "0"
          },
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 18,
          "end": 27,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 22,
            "end": 27,
            "value": false,
            "raw": "false"
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 532,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 111,
            "end": 117,
            "expression": {
              "type": "AssignmentExpression",
              "start": 111,
              "end": 116,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 111,
                "end": 112,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 115,
                "end": 116,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 122,
            "end": 134,
            "expression": {
              "type": "AssignmentExpression",
              "start": 123,
              "end": 132,
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "start": 123,
                "end": 126,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 124,
                    "end": 125,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ArrayExpression",
                "start": 129,
                "end": 132,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 130,
                    "end": 131,
                    "value": 1,
                    "raw": "1"
                  }
                ]
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 139,
            "end": 158,
            "expression": {
              "type": "AssignmentExpression",
              "start": 140,
              "end": 156,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 140,
                "end": 145,
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 142,
                      "end": 143,
                      "decorators": [],
                      "name": "x",
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
              "right": {
                "type": "ObjectExpression",
                "start": 148,
                "end": 156,
                "properties": [
                  {
                    "type": "Property",
                    "start": 150,
                    "end": 154,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 150,
                      "end": 151,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 153,
                      "end": 154,
                      "value": 1,
                      "raw": "1"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 163,
            "end": 185,
            "expression": {
              "type": "AssignmentExpression",
              "start": 164,
              "end": 183,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 164,
                "end": 172,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 166,
                    "end": 170,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 167,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 169,
                      "end": 170,
                      "decorators": [],
                      "name": "x",
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
              },
              "right": {
                "type": "ObjectExpression",
                "start": 175,
                "end": 183,
                "properties": [
                  {
                    "type": "Property",
                    "start": 177,
                    "end": 181,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 177,
                      "end": 178,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 180,
                      "end": 181,
                      "value": 1,
                      "raw": "1"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 190,
            "end": 230,
            "expression": {
              "type": "AssignmentExpression",
              "start": 191,
              "end": 228,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 191,
                "end": 208,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 193,
                    "end": 206,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 193,
                      "end": 194,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrayPattern",
                      "start": 196,
                      "end": 206,
                      "decorators": [],
                      "elements": [
                        {
                          "type": "ObjectPattern",
                          "start": 197,
                          "end": 205,
                          "decorators": [],
                          "properties": [
                            {
                              "type": "Property",
                              "start": 199,
                              "end": 203,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 199,
                                "end": 200,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 202,
                                "end": 203,
                                "decorators": [],
                                "name": "x",
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
              },
              "right": {
                "type": "ObjectExpression",
                "start": 211,
                "end": 228,
                "properties": [
                  {
                    "type": "Property",
                    "start": 213,
                    "end": 226,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 213,
                      "end": 214,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "start": 216,
                      "end": 226,
                      "elements": [
                        {
                          "type": "ObjectExpression",
                          "start": 217,
                          "end": 225,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 219,
                              "end": 223,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 219,
                                "end": 220,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 222,
                                "end": 223,
                                "value": 1,
                                "raw": "1"
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
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
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 235,
            "end": 274,
            "expression": {
              "type": "AssignmentExpression",
              "start": 236,
              "end": 272,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 236,
                "end": 245,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 238,
                    "end": 243,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 239,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 238,
                      "end": 243,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 238,
                        "end": 239,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 242,
                        "end": 243,
                        "value": 2,
                        "raw": "2"
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
              "right": {
                "type": "ObjectExpression",
                "start": 248,
                "end": 272,
                "properties": [
                  {
                    "type": "Property",
                    "start": 250,
                    "end": 270,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 250,
                      "end": 251,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ConditionalExpression",
                      "start": 253,
                      "end": 270,
                      "test": {
                        "type": "Identifier",
                        "start": 253,
                        "end": 254,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "consequent": {
                        "type": "Literal",
                        "start": 257,
                        "end": 258,
                        "value": 1,
                        "raw": "1"
                      },
                      "alternate": {
                        "type": "Identifier",
                        "start": 261,
                        "end": 270,
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 279,
            "end": 292,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 283,
                "end": 291,
                "id": {
                  "type": "Identifier",
                  "start": 283,
                  "end": 287,
                  "decorators": [],
                  "name": "used",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 290,
                  "end": 291,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 297,
            "end": 339,
            "expression": {
              "type": "AssignmentExpression",
              "start": 298,
              "end": 337,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 298,
                "end": 310,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 300,
                    "end": 308,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 300,
                      "end": 301,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 300,
                      "end": 308,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 300,
                        "end": 301,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 304,
                        "end": 308,
                        "decorators": [],
                        "name": "used",
                        "optional": false,
                        "typeAnnotation": null
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
              "right": {
                "type": "ObjectExpression",
                "start": 313,
                "end": 337,
                "properties": [
                  {
                    "type": "Property",
                    "start": 315,
                    "end": 335,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 316,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ConditionalExpression",
                      "start": 318,
                      "end": 335,
                      "test": {
                        "type": "Identifier",
                        "start": 318,
                        "end": 319,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "consequent": {
                        "type": "Literal",
                        "start": 322,
                        "end": 323,
                        "value": 1,
                        "raw": "1"
                      },
                      "alternate": {
                        "type": "Identifier",
                        "start": 326,
                        "end": 335,
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 345,
            "end": 355,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 349,
                "end": 354,
                "id": {
                  "type": "Identifier",
                  "start": 349,
                  "end": 350,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 353,
                  "end": 354,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 427,
            "end": 434,
            "expression": {
              "type": "CallExpression",
              "start": 427,
              "end": 433,
              "callee": {
                "type": "Identifier",
                "start": 427,
                "end": 428,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "UpdateExpression",
                  "start": 429,
                  "end": 432,
                  "operator": "++",
                  "prefix": false,
                  "argument": {
                    "type": "Identifier",
                    "start": 429,
                    "end": 430,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 440,
            "end": 450,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 444,
                "end": 449,
                "id": {
                  "type": "Identifier",
                  "start": 444,
                  "end": 445,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 448,
                  "end": 449,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 455,
            "end": 464,
            "expression": {
              "type": "CallExpression",
              "start": 455,
              "end": 463,
              "callee": {
                "type": "Identifier",
                "start": 455,
                "end": 456,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "AssignmentExpression",
                  "start": 457,
                  "end": 462,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 457,
                    "end": 458,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 461,
                    "end": 462,
                    "value": 1,
                    "raw": "1"
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 533,
      "end": 579,
      "id": {
        "type": "Identifier",
        "start": 542,
        "end": 544,
        "decorators": [],
        "name": "f2",
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
          "start": 545,
          "end": 569,
          "decorators": [],
          "name": "_",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 546,
            "end": 569,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 548,
              "end": 569,
              "typeName": {
                "type": "Identifier",
                "start": 548,
                "end": 561,
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 561,
                "end": 569,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 562,
                    "end": 568
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 570,
        "end": 576,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 572,
          "end": 576
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 577,
        "end": 579,
        "body": []
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

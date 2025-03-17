__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2147,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 20,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 19,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 8,
            "end": 19,
            "object": {
              "type": "ObjectExpression",
              "start": 8,
              "end": 10,
              "properties": []
            },
            "property": {
              "type": "Literal",
              "start": 11,
              "end": 18,
              "value": "hello",
              "raw": "\"hello\""
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 21,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 54,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 34,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 34,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 28,
                "end": 34
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 37,
            "end": 54,
            "object": {
              "type": "ObjectExpression",
              "start": 37,
              "end": 50,
              "properties": [
                {
                  "type": "Property",
                  "start": 39,
                  "end": 48,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 39,
                    "end": 41,
                    "value": "",
                    "raw": "''"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 43,
                    "end": 48,
                    "value": "foo",
                    "raw": "'foo'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "property": {
              "type": "Literal",
              "start": 51,
              "end": 53,
              "value": "",
              "raw": "''"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 101,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 62,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 65,
            "end": 101,
            "properties": [
              {
                "type": "Property",
                "start": 69,
                "end": 99,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 72,
                  "name": "get",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 74,
                  "end": 99,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 75,
                      "end": 86,
                      "name": "key",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 78,
                        "end": 86,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 80,
                          "end": 86
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Literal",
                    "start": 91,
                    "end": 99,
                    "value": "foobar",
                    "raw": "'foobar'"
                  },
                  "typeParameters": null,
                  "returnType": null
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
      "start": 103,
      "end": 114,
      "expression": {
        "type": "MemberExpression",
        "start": 103,
        "end": 113,
        "object": {
          "type": "Identifier",
          "start": 103,
          "end": 104,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 105,
          "end": 112,
          "value": "hello",
          "raw": "'hello'"
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 115,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 121,
          "end": 137,
          "id": {
            "type": "Identifier",
            "start": 121,
            "end": 124,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 127,
            "end": 137,
            "object": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 129,
              "end": 136,
              "value": "hello",
              "raw": "'hello'"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 140,
      "end": 185,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 184,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 145,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 148,
            "end": 184,
            "properties": [
              {
                "type": "Property",
                "start": 152,
                "end": 182,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 155,
                  "name": "set",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 157,
                  "end": 182,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 158,
                      "end": 169,
                      "name": "key",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 161,
                        "end": 169,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 163,
                          "end": 169
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Literal",
                    "start": 174,
                    "end": 182,
                    "value": "foobar",
                    "raw": "'foobar'"
                  },
                  "typeParameters": null,
                  "returnType": null
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
      "start": 186,
      "end": 209,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 192,
          "end": 208,
          "id": {
            "type": "Identifier",
            "start": 192,
            "end": 195,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 198,
            "end": 208,
            "object": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 200,
              "end": 207,
              "value": "hello",
              "raw": "'hello'"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "BlockStatement",
      "start": 211,
      "end": 379,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 215,
          "end": 300,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 219,
              "end": 299,
              "id": {
                "type": "Identifier",
                "start": 219,
                "end": 220,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "ObjectExpression",
                "start": 223,
                "end": 299,
                "properties": [
                  {
                    "type": "Property",
                    "start": 229,
                    "end": 259,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 229,
                      "end": 232,
                      "name": "get",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 234,
                      "end": 259,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 235,
                          "end": 246,
                          "name": "key",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 238,
                            "end": 246,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 240,
                              "end": 246
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Literal",
                        "start": 251,
                        "end": 259,
                        "value": "foobar",
                        "raw": "'foobar'"
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 265,
                    "end": 295,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 265,
                      "end": 268,
                      "name": "set",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 270,
                      "end": 295,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 271,
                          "end": 282,
                          "name": "key",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 274,
                            "end": 282,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 276,
                              "end": 282
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Literal",
                        "start": 287,
                        "end": 295,
                        "value": "foobar",
                        "raw": "'foobar'"
                      },
                      "typeParameters": null,
                      "returnType": null
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
        {
          "type": "ExpressionStatement",
          "start": 303,
          "end": 314,
          "expression": {
            "type": "MemberExpression",
            "start": 303,
            "end": 313,
            "object": {
              "type": "Identifier",
              "start": 303,
              "end": 304,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 305,
              "end": 312,
              "value": "hello",
              "raw": "'hello'"
            },
            "computed": true,
            "optional": false
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 317,
          "end": 341,
          "expression": {
            "type": "AssignmentExpression",
            "start": 317,
            "end": 340,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 317,
              "end": 327,
              "object": {
                "type": "Identifier",
                "start": 317,
                "end": 318,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 319,
                "end": 326,
                "value": "hello",
                "raw": "'hello'"
              },
              "computed": true,
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 330,
              "end": 340,
              "value": "modified",
              "raw": "'modified'"
            }
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 344,
          "end": 360,
          "expression": {
            "type": "AssignmentExpression",
            "start": 344,
            "end": 359,
            "operator": "+=",
            "left": {
              "type": "MemberExpression",
              "start": 344,
              "end": 354,
              "object": {
                "type": "Identifier",
                "start": 344,
                "end": 345,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 346,
                "end": 353,
                "value": "hello",
                "raw": "'hello'"
              },
              "computed": true,
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 358,
              "end": 359,
              "value": 1,
              "raw": "1"
            }
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 363,
          "end": 377,
          "expression": {
            "type": "UpdateExpression",
            "start": 363,
            "end": 376,
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "start": 363,
              "end": 373,
              "object": {
                "type": "Identifier",
                "start": 363,
                "end": 364,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 365,
                "end": 372,
                "value": "hello",
                "raw": "'hello'"
              },
              "computed": true,
              "optional": false
            }
          },
          "directive": null
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 381,
      "end": 564,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 385,
          "end": 485,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 389,
              "end": 484,
              "id": {
                "type": "Identifier",
                "start": 389,
                "end": 390,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "ObjectExpression",
                "start": 393,
                "end": 484,
                "properties": [
                  {
                    "type": "Property",
                    "start": 399,
                    "end": 429,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 399,
                      "end": 402,
                      "name": "get",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 404,
                      "end": 429,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 405,
                          "end": 416,
                          "name": "key",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 408,
                            "end": 416,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 410,
                              "end": 416
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Literal",
                        "start": 421,
                        "end": 429,
                        "value": "foobar",
                        "raw": "'foobar'"
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 435,
                    "end": 480,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 435,
                      "end": 438,
                      "name": "set",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 440,
                      "end": 480,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 441,
                          "end": 452,
                          "name": "key",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 444,
                            "end": 452,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 446,
                              "end": 452
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 454,
                          "end": 467,
                          "name": "value",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 459,
                            "end": 467,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 461,
                              "end": 467
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Literal",
                        "start": 472,
                        "end": 480,
                        "value": "foobar",
                        "raw": "'foobar'"
                      },
                      "typeParameters": null,
                      "returnType": null
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
        {
          "type": "ExpressionStatement",
          "start": 488,
          "end": 499,
          "expression": {
            "type": "MemberExpression",
            "start": 488,
            "end": 498,
            "object": {
              "type": "Identifier",
              "start": 488,
              "end": 489,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 490,
              "end": 497,
              "value": "hello",
              "raw": "'hello'"
            },
            "computed": true,
            "optional": false
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 502,
          "end": 526,
          "expression": {
            "type": "AssignmentExpression",
            "start": 502,
            "end": 525,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 502,
              "end": 512,
              "object": {
                "type": "Identifier",
                "start": 502,
                "end": 503,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 504,
                "end": 511,
                "value": "hello",
                "raw": "'hello'"
              },
              "computed": true,
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 515,
              "end": 525,
              "value": "modified",
              "raw": "'modified'"
            }
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 529,
          "end": 545,
          "expression": {
            "type": "AssignmentExpression",
            "start": 529,
            "end": 544,
            "operator": "+=",
            "left": {
              "type": "MemberExpression",
              "start": 529,
              "end": 539,
              "object": {
                "type": "Identifier",
                "start": 529,
                "end": 530,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 531,
                "end": 538,
                "value": "hello",
                "raw": "'hello'"
              },
              "computed": true,
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 543,
              "end": 544,
              "value": 1,
              "raw": "1"
            }
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 548,
          "end": 562,
          "expression": {
            "type": "UpdateExpression",
            "start": 548,
            "end": 561,
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "start": 548,
              "end": 558,
              "object": {
                "type": "Identifier",
                "start": 548,
                "end": 549,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 550,
                "end": 557,
                "value": "hello",
                "raw": "'hello'"
              },
              "computed": true,
              "optional": false
            }
          },
          "directive": null
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 566,
      "end": 771,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 570,
          "end": 692,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 574,
              "end": 691,
              "id": {
                "type": "Identifier",
                "start": 574,
                "end": 575,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "ObjectExpression",
                "start": 578,
                "end": 691,
                "properties": [
                  {
                    "type": "Property",
                    "start": 584,
                    "end": 625,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 584,
                      "end": 587,
                      "name": "get",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 589,
                      "end": 625,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 590,
                          "end": 612,
                          "name": "key",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 593,
                            "end": 612,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 595,
                              "end": 612,
                              "types": [
                                {
                                  "type": "TSLiteralType",
                                  "start": 595,
                                  "end": 602,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 595,
                                    "end": 602,
                                    "value": "hello",
                                    "raw": "\"hello\""
                                  }
                                },
                                {
                                  "type": "TSLiteralType",
                                  "start": 605,
                                  "end": 612,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 605,
                                    "end": 612,
                                    "value": "world",
                                    "raw": "\"world\""
                                  }
                                }
                              ]
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Literal",
                        "start": 617,
                        "end": 625,
                        "value": "foobar",
                        "raw": "'foobar'"
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 631,
                    "end": 687,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 631,
                      "end": 634,
                      "name": "set",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 636,
                      "end": 687,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 637,
                          "end": 659,
                          "name": "key",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 640,
                            "end": 659,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 642,
                              "end": 659,
                              "types": [
                                {
                                  "type": "TSLiteralType",
                                  "start": 642,
                                  "end": 649,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 642,
                                    "end": 649,
                                    "value": "hello",
                                    "raw": "\"hello\""
                                  }
                                },
                                {
                                  "type": "TSLiteralType",
                                  "start": 652,
                                  "end": 659,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 652,
                                    "end": 659,
                                    "value": "world",
                                    "raw": "\"world\""
                                  }
                                }
                              ]
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 661,
                          "end": 674,
                          "name": "value",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 666,
                            "end": 674,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 668,
                              "end": 674
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Literal",
                        "start": 679,
                        "end": 687,
                        "value": "foobar",
                        "raw": "'foobar'"
                      },
                      "typeParameters": null,
                      "returnType": null
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
        {
          "type": "ExpressionStatement",
          "start": 695,
          "end": 706,
          "expression": {
            "type": "MemberExpression",
            "start": 695,
            "end": 705,
            "object": {
              "type": "Identifier",
              "start": 695,
              "end": 696,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 697,
              "end": 704,
              "value": "hello",
              "raw": "'hello'"
            },
            "computed": true,
            "optional": false
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 709,
          "end": 733,
          "expression": {
            "type": "AssignmentExpression",
            "start": 709,
            "end": 732,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 709,
              "end": 719,
              "object": {
                "type": "Identifier",
                "start": 709,
                "end": 710,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 711,
                "end": 718,
                "value": "hello",
                "raw": "'hello'"
              },
              "computed": true,
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 722,
              "end": 732,
              "value": "modified",
              "raw": "'modified'"
            }
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 736,
          "end": 752,
          "expression": {
            "type": "AssignmentExpression",
            "start": 736,
            "end": 751,
            "operator": "+=",
            "left": {
              "type": "MemberExpression",
              "start": 736,
              "end": 746,
              "object": {
                "type": "Identifier",
                "start": 736,
                "end": 737,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 738,
                "end": 745,
                "value": "hello",
                "raw": "'hello'"
              },
              "computed": true,
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 750,
              "end": 751,
              "value": 1,
              "raw": "1"
            }
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 755,
          "end": 769,
          "expression": {
            "type": "UpdateExpression",
            "start": 755,
            "end": 768,
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "start": 755,
              "end": 765,
              "object": {
                "type": "Identifier",
                "start": 755,
                "end": 756,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 757,
                "end": 764,
                "value": "hello",
                "raw": "'hello'"
              },
              "computed": true,
              "optional": false
            }
          },
          "directive": null
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 773,
      "end": 1153,
      "body": [
        {
          "type": "ExpressionStatement",
          "start": 777,
          "end": 863,
          "expression": {
            "type": "MemberExpression",
            "start": 777,
            "end": 862,
            "object": {
              "type": "ObjectExpression",
              "start": 778,
              "end": 852,
              "properties": [
                {
                  "type": "Property",
                  "start": 780,
                  "end": 809,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 780,
                    "end": 783,
                    "name": "get",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 785,
                    "end": 809,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 786,
                        "end": 797,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 789,
                          "end": 797,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 791,
                            "end": 797
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "Literal",
                      "start": 802,
                      "end": 809,
                      "value": "hello",
                      "raw": "'hello'"
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 811,
                  "end": 850,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 811,
                    "end": 814,
                    "name": "set",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 816,
                    "end": 850,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 817,
                        "end": 828,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 820,
                          "end": 828,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 822,
                            "end": 828
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 830,
                        "end": 843,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 835,
                          "end": 843,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 837,
                            "end": 843
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 848,
                      "end": 850,
                      "body": []
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "property": {
              "type": "Literal",
              "start": 854,
              "end": 861,
              "value": "hello",
              "raw": "'hello'"
            },
            "computed": true,
            "optional": false
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 866,
          "end": 965,
          "expression": {
            "type": "AssignmentExpression",
            "start": 866,
            "end": 964,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 866,
              "end": 951,
              "object": {
                "type": "ObjectExpression",
                "start": 867,
                "end": 941,
                "properties": [
                  {
                    "type": "Property",
                    "start": 869,
                    "end": 898,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 869,
                      "end": 872,
                      "name": "get",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 874,
                      "end": 898,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 875,
                          "end": 886,
                          "name": "key",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 878,
                            "end": 886,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 880,
                              "end": 886
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Literal",
                        "start": 891,
                        "end": 898,
                        "value": "hello",
                        "raw": "'hello'"
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 900,
                    "end": 939,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 900,
                      "end": 903,
                      "name": "set",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 905,
                      "end": 939,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 906,
                          "end": 917,
                          "name": "key",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 909,
                            "end": 917,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 911,
                              "end": 917
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 919,
                          "end": 932,
                          "name": "value",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 924,
                            "end": 932,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 926,
                              "end": 932
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 937,
                        "end": 939,
                        "body": []
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              "property": {
                "type": "Literal",
                "start": 943,
                "end": 950,
                "value": "hello",
                "raw": "'hello'"
              },
              "computed": true,
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 954,
              "end": 964,
              "value": "modified",
              "raw": "'modified'"
            }
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 968,
          "end": 1059,
          "expression": {
            "type": "AssignmentExpression",
            "start": 968,
            "end": 1058,
            "operator": "+=",
            "left": {
              "type": "MemberExpression",
              "start": 968,
              "end": 1053,
              "object": {
                "type": "ObjectExpression",
                "start": 969,
                "end": 1043,
                "properties": [
                  {
                    "type": "Property",
                    "start": 971,
                    "end": 1000,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 971,
                      "end": 974,
                      "name": "get",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 976,
                      "end": 1000,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 977,
                          "end": 988,
                          "name": "key",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 980,
                            "end": 988,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 982,
                              "end": 988
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Literal",
                        "start": 993,
                        "end": 1000,
                        "value": "hello",
                        "raw": "'hello'"
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1002,
                    "end": 1041,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1002,
                      "end": 1005,
                      "name": "set",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 1007,
                      "end": 1041,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1008,
                          "end": 1019,
                          "name": "key",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1011,
                            "end": 1019,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1013,
                              "end": 1019
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 1021,
                          "end": 1034,
                          "name": "value",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1026,
                            "end": 1034,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1028,
                              "end": 1034
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 1039,
                        "end": 1041,
                        "body": []
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              "property": {
                "type": "Literal",
                "start": 1045,
                "end": 1052,
                "value": "hello",
                "raw": "'hello'"
              },
              "computed": true,
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 1057,
              "end": 1058,
              "value": 1,
              "raw": "1"
            }
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 1062,
          "end": 1151,
          "expression": {
            "type": "UpdateExpression",
            "start": 1062,
            "end": 1150,
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "start": 1062,
              "end": 1147,
              "object": {
                "type": "ObjectExpression",
                "start": 1063,
                "end": 1137,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1065,
                    "end": 1094,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1065,
                      "end": 1068,
                      "name": "get",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 1070,
                      "end": 1094,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1071,
                          "end": 1082,
                          "name": "key",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1074,
                            "end": 1082,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1076,
                              "end": 1082
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Literal",
                        "start": 1087,
                        "end": 1094,
                        "value": "hello",
                        "raw": "'hello'"
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1096,
                    "end": 1135,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1096,
                      "end": 1099,
                      "name": "set",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 1101,
                      "end": 1135,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1102,
                          "end": 1113,
                          "name": "key",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1105,
                            "end": 1113,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1107,
                              "end": 1113
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 1115,
                          "end": 1128,
                          "name": "value",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1120,
                            "end": 1128,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1122,
                              "end": 1128
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 1133,
                        "end": 1135,
                        "body": []
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              "property": {
                "type": "Literal",
                "start": 1139,
                "end": 1146,
                "value": "hello",
                "raw": "'hello'"
              },
              "computed": true,
              "optional": false
            }
          },
          "directive": null
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 1155,
      "end": 1587,
      "body": [
        {
          "type": "ExpressionStatement",
          "start": 1159,
          "end": 1258,
          "expression": {
            "type": "MemberExpression",
            "start": 1159,
            "end": 1257,
            "object": {
              "type": "MemberExpression",
              "start": 1159,
              "end": 1248,
              "object": {
                "type": "ObjectExpression",
                "start": 1160,
                "end": 1243,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1162,
                    "end": 1241,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1162,
                      "end": 1165,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 1167,
                      "end": 1241,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1169,
                          "end": 1198,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1169,
                            "end": 1172,
                            "name": "get",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 1174,
                            "end": 1198,
                            "id": null,
                            "expression": true,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1175,
                                "end": 1186,
                                "name": "key",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1178,
                                  "end": 1186,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1180,
                                    "end": 1186
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "Literal",
                              "start": 1191,
                              "end": 1198,
                              "value": "hello",
                              "raw": "'hello'"
                            },
                            "typeParameters": null,
                            "returnType": null
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1200,
                          "end": 1239,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1200,
                            "end": 1203,
                            "name": "set",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 1205,
                            "end": 1239,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1206,
                                "end": 1217,
                                "name": "key",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1209,
                                  "end": 1217,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1211,
                                    "end": 1217
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 1219,
                                "end": 1232,
                                "name": "value",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1224,
                                  "end": 1232,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1226,
                                    "end": 1232
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 1237,
                              "end": 1239,
                              "body": []
                            },
                            "typeParameters": null,
                            "returnType": null
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
              "property": {
                "type": "Identifier",
                "start": 1245,
                "end": 1248,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 1249,
              "end": 1256,
              "value": "hello",
              "raw": "'hello'"
            },
            "computed": true,
            "optional": false
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 1261,
          "end": 1373,
          "expression": {
            "type": "AssignmentExpression",
            "start": 1261,
            "end": 1372,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 1261,
              "end": 1359,
              "object": {
                "type": "MemberExpression",
                "start": 1261,
                "end": 1350,
                "object": {
                  "type": "ObjectExpression",
                  "start": 1262,
                  "end": 1345,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1264,
                      "end": 1343,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1264,
                        "end": 1267,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 1269,
                        "end": 1343,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1271,
                            "end": 1300,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1271,
                              "end": 1274,
                              "name": "get",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "ArrowFunctionExpression",
                              "start": 1276,
                              "end": 1300,
                              "id": null,
                              "expression": true,
                              "generator": false,
                              "async": false,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 1277,
                                  "end": 1288,
                                  "name": "key",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1280,
                                    "end": 1288,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 1282,
                                      "end": 1288
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "body": {
                                "type": "Literal",
                                "start": 1293,
                                "end": 1300,
                                "value": "hello",
                                "raw": "'hello'"
                              },
                              "typeParameters": null,
                              "returnType": null
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 1302,
                            "end": 1341,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1302,
                              "end": 1305,
                              "name": "set",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "ArrowFunctionExpression",
                              "start": 1307,
                              "end": 1341,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 1308,
                                  "end": 1319,
                                  "name": "key",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1311,
                                    "end": 1319,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 1313,
                                      "end": 1319
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                },
                                {
                                  "type": "Identifier",
                                  "start": 1321,
                                  "end": 1334,
                                  "name": "value",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1326,
                                    "end": 1334,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 1328,
                                      "end": 1334
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "body": {
                                "type": "BlockStatement",
                                "start": 1339,
                                "end": 1341,
                                "body": []
                              },
                              "typeParameters": null,
                              "returnType": null
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
                "property": {
                  "type": "Identifier",
                  "start": 1347,
                  "end": 1350,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 1351,
                "end": 1358,
                "value": "hello",
                "raw": "'hello'"
              },
              "computed": true,
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 1362,
              "end": 1372,
              "value": "modified",
              "raw": "'modified'"
            }
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 1376,
          "end": 1480,
          "expression": {
            "type": "AssignmentExpression",
            "start": 1376,
            "end": 1479,
            "operator": "+=",
            "left": {
              "type": "MemberExpression",
              "start": 1376,
              "end": 1474,
              "object": {
                "type": "MemberExpression",
                "start": 1376,
                "end": 1465,
                "object": {
                  "type": "ObjectExpression",
                  "start": 1377,
                  "end": 1460,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1379,
                      "end": 1458,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1379,
                        "end": 1382,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 1384,
                        "end": 1458,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1386,
                            "end": 1415,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1386,
                              "end": 1389,
                              "name": "get",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "ArrowFunctionExpression",
                              "start": 1391,
                              "end": 1415,
                              "id": null,
                              "expression": true,
                              "generator": false,
                              "async": false,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 1392,
                                  "end": 1403,
                                  "name": "key",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1395,
                                    "end": 1403,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 1397,
                                      "end": 1403
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "body": {
                                "type": "Literal",
                                "start": 1408,
                                "end": 1415,
                                "value": "hello",
                                "raw": "'hello'"
                              },
                              "typeParameters": null,
                              "returnType": null
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 1417,
                            "end": 1456,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1417,
                              "end": 1420,
                              "name": "set",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "ArrowFunctionExpression",
                              "start": 1422,
                              "end": 1456,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 1423,
                                  "end": 1434,
                                  "name": "key",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1426,
                                    "end": 1434,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 1428,
                                      "end": 1434
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                },
                                {
                                  "type": "Identifier",
                                  "start": 1436,
                                  "end": 1449,
                                  "name": "value",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1441,
                                    "end": 1449,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 1443,
                                      "end": 1449
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "body": {
                                "type": "BlockStatement",
                                "start": 1454,
                                "end": 1456,
                                "body": []
                              },
                              "typeParameters": null,
                              "returnType": null
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
                "property": {
                  "type": "Identifier",
                  "start": 1462,
                  "end": 1465,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 1466,
                "end": 1473,
                "value": "hello",
                "raw": "'hello'"
              },
              "computed": true,
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 1478,
              "end": 1479,
              "value": 1,
              "raw": "1"
            }
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 1483,
          "end": 1585,
          "expression": {
            "type": "UpdateExpression",
            "start": 1483,
            "end": 1584,
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "start": 1483,
              "end": 1581,
              "object": {
                "type": "MemberExpression",
                "start": 1483,
                "end": 1572,
                "object": {
                  "type": "ObjectExpression",
                  "start": 1484,
                  "end": 1567,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1486,
                      "end": 1565,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1486,
                        "end": 1489,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 1491,
                        "end": 1565,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1493,
                            "end": 1522,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1493,
                              "end": 1496,
                              "name": "get",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "ArrowFunctionExpression",
                              "start": 1498,
                              "end": 1522,
                              "id": null,
                              "expression": true,
                              "generator": false,
                              "async": false,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 1499,
                                  "end": 1510,
                                  "name": "key",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1502,
                                    "end": 1510,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 1504,
                                      "end": 1510
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "body": {
                                "type": "Literal",
                                "start": 1515,
                                "end": 1522,
                                "value": "hello",
                                "raw": "'hello'"
                              },
                              "typeParameters": null,
                              "returnType": null
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 1524,
                            "end": 1563,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1524,
                              "end": 1527,
                              "name": "set",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "ArrowFunctionExpression",
                              "start": 1529,
                              "end": 1563,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 1530,
                                  "end": 1541,
                                  "name": "key",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1533,
                                    "end": 1541,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 1535,
                                      "end": 1541
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                },
                                {
                                  "type": "Identifier",
                                  "start": 1543,
                                  "end": 1556,
                                  "name": "value",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1548,
                                    "end": 1556,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 1550,
                                      "end": 1556
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "body": {
                                "type": "BlockStatement",
                                "start": 1561,
                                "end": 1563,
                                "body": []
                              },
                              "typeParameters": null,
                              "returnType": null
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
                "property": {
                  "type": "Identifier",
                  "start": 1569,
                  "end": 1572,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 1573,
                "end": 1580,
                "value": "hello",
                "raw": "'hello'"
              },
              "computed": true,
              "optional": false
            }
          },
          "directive": null
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 1589,
      "end": 1608,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1595,
          "end": 1607,
          "id": {
            "type": "Identifier",
            "start": 1595,
            "end": 1596,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1599,
            "end": 1607,
            "properties": [
              {
                "type": "Property",
                "start": 1601,
                "end": 1605,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1601,
                  "end": 1602,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1604,
                  "end": 1605,
                  "value": 0,
                  "raw": "0"
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
    {
      "type": "VariableDeclaration",
      "start": 1610,
      "end": 1643,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1624,
          "end": 1642,
          "id": {
            "type": "Identifier",
            "start": 1624,
            "end": 1642,
            "name": "k",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1625,
              "end": 1642,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1627,
                "end": 1642,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 1627,
                    "end": 1630,
                    "literal": {
                      "type": "Literal",
                      "start": 1627,
                      "end": 1630,
                      "value": "a",
                      "raw": "\"a\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 1633,
                    "end": 1636,
                    "literal": {
                      "type": "Literal",
                      "start": 1633,
                      "end": 1636,
                      "value": "b",
                      "raw": "\"b\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 1639,
                    "end": 1642,
                    "literal": {
                      "type": "Literal",
                      "start": 1639,
                      "end": 1642,
                      "value": "c",
                      "raw": "\"c\""
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 1644,
      "end": 1649,
      "expression": {
        "type": "MemberExpression",
        "start": 1644,
        "end": 1648,
        "object": {
          "type": "Identifier",
          "start": 1644,
          "end": 1645,
          "name": "o",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1646,
          "end": 1647,
          "name": "k",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1652,
      "end": 1674,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1666,
          "end": 1673,
          "id": {
            "type": "Identifier",
            "start": 1666,
            "end": 1673,
            "name": "k2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1668,
              "end": 1673,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1670,
                "end": 1673,
                "literal": {
                  "type": "Literal",
                  "start": 1670,
                  "end": 1673,
                  "value": "c",
                  "raw": "\"c\""
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 1675,
      "end": 1681,
      "expression": {
        "type": "MemberExpression",
        "start": 1675,
        "end": 1680,
        "object": {
          "type": "Identifier",
          "start": 1675,
          "end": 1676,
          "name": "o",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1677,
          "end": 1679,
          "name": "k2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1683,
      "end": 1717,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1697,
          "end": 1716,
          "id": {
            "type": "Identifier",
            "start": 1697,
            "end": 1716,
            "name": "sym",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1701,
              "end": 1716,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 1703,
                "end": 1716,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 1710,
                  "end": 1716
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 1718,
      "end": 1725,
      "expression": {
        "type": "MemberExpression",
        "start": 1718,
        "end": 1724,
        "object": {
          "type": "Identifier",
          "start": 1718,
          "end": 1719,
          "name": "o",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1720,
          "end": 1723,
          "name": "sym",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1727,
      "end": 1748,
      "id": {
        "type": "Identifier",
        "start": 1732,
        "end": 1739,
        "name": "NumEnum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 1742,
          "end": 1743,
          "id": {
            "type": "Identifier",
            "start": 1742,
            "end": 1743,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 1745,
          "end": 1746,
          "id": {
            "type": "Identifier",
            "start": 1745,
            "end": 1746,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 1740,
        "end": 1748,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1742,
            "end": 1743,
            "id": {
              "type": "Identifier",
              "start": 1742,
              "end": 1743,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 1745,
            "end": 1746,
            "id": {
              "type": "Identifier",
              "start": 1745,
              "end": 1746,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1749,
      "end": 1773,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1753,
          "end": 1772,
          "id": {
            "type": "Identifier",
            "start": 1753,
            "end": 1772,
            "name": "numEnumKey",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1763,
              "end": 1772,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1765,
                "end": 1772,
                "typeName": {
                  "type": "Identifier",
                  "start": 1765,
                  "end": 1772,
                  "name": "NumEnum",
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
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1774,
      "end": 1788,
      "expression": {
        "type": "MemberExpression",
        "start": 1774,
        "end": 1787,
        "object": {
          "type": "Identifier",
          "start": 1774,
          "end": 1775,
          "name": "o",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1776,
          "end": 1786,
          "name": "numEnumKey",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1791,
      "end": 1824,
      "id": {
        "type": "Identifier",
        "start": 1796,
        "end": 1803,
        "name": "StrEnum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 1806,
          "end": 1813,
          "id": {
            "type": "Identifier",
            "start": 1806,
            "end": 1807,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 1810,
            "end": 1813,
            "value": "a",
            "raw": "\"a\""
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 1815,
          "end": 1822,
          "id": {
            "type": "Identifier",
            "start": 1815,
            "end": 1816,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 1819,
            "end": 1822,
            "value": "b",
            "raw": "\"b\""
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 1804,
        "end": 1824,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1806,
            "end": 1813,
            "id": {
              "type": "Identifier",
              "start": 1806,
              "end": 1807,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 1810,
              "end": 1813,
              "value": "a",
              "raw": "\"a\""
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 1815,
            "end": 1822,
            "id": {
              "type": "Identifier",
              "start": 1815,
              "end": 1816,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 1819,
              "end": 1822,
              "value": "b",
              "raw": "\"b\""
            },
            "computed": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1825,
      "end": 1849,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1829,
          "end": 1848,
          "id": {
            "type": "Identifier",
            "start": 1829,
            "end": 1848,
            "name": "strEnumKey",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1839,
              "end": 1848,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1841,
                "end": 1848,
                "typeName": {
                  "type": "Identifier",
                  "start": 1841,
                  "end": 1848,
                  "name": "StrEnum",
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
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1850,
      "end": 1864,
      "expression": {
        "type": "MemberExpression",
        "start": 1850,
        "end": 1863,
        "object": {
          "type": "Identifier",
          "start": 1850,
          "end": 1851,
          "name": "o",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1852,
          "end": 1862,
          "name": "strEnumKey",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1867,
      "end": 1941,
      "id": {
        "type": "Identifier",
        "start": 1877,
        "end": 1882,
        "name": "MyMap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1882,
        "end": 1888,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1883,
            "end": 1884,
            "name": {
              "type": "Identifier",
              "start": 1883,
              "end": 1884,
              "name": "K",
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
            "start": 1886,
            "end": 1887,
            "name": {
              "type": "Identifier",
              "start": 1886,
              "end": 1887,
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
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 1889,
        "end": 1941,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1893,
            "end": 1908,
            "key": {
              "type": "Identifier",
              "start": 1893,
              "end": 1896,
              "name": "get",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1897,
                "end": 1903,
                "name": "key",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1900,
                  "end": 1903,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1902,
                    "end": 1903,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1902,
                      "end": 1903,
                      "name": "K",
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
              "start": 1904,
              "end": 1907,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1906,
                "end": 1907,
                "typeName": {
                  "type": "Identifier",
                  "start": 1906,
                  "end": 1907,
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
          },
          {
            "type": "TSMethodSignature",
            "start": 1911,
            "end": 1939,
            "key": {
              "type": "Identifier",
              "start": 1911,
              "end": 1914,
              "name": "set",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1915,
                "end": 1921,
                "name": "key",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1918,
                  "end": 1921,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1920,
                    "end": 1921,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1920,
                      "end": 1921,
                      "name": "K",
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
                "start": 1923,
                "end": 1931,
                "name": "value",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1928,
                  "end": 1931,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1930,
                    "end": 1931,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1930,
                      "end": 1931,
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
              "start": 1932,
              "end": 1938,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1934,
                "end": 1938
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
      "type": "TSInterfaceDeclaration",
      "start": 1943,
      "end": 1974,
      "id": {
        "type": "Identifier",
        "start": 1953,
        "end": 1956,
        "name": "Dog",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1957,
        "end": 1974,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1959,
            "end": 1972,
            "key": {
              "type": "Identifier",
              "start": 1959,
              "end": 1963,
              "name": "bark",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1965,
              "end": 1971,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1967,
                "end": 1971
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
      "type": "VariableDeclaration",
      "start": 1975,
      "end": 2006,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1979,
          "end": 2005,
          "id": {
            "type": "Identifier",
            "start": 1979,
            "end": 1989,
            "name": "rover",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1984,
              "end": 1989,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1986,
                "end": 1989,
                "typeName": {
                  "type": "Identifier",
                  "start": 1986,
                  "end": 1989,
                  "name": "Dog",
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
          "init": {
            "type": "ObjectExpression",
            "start": 1992,
            "end": 2005,
            "properties": [
              {
                "type": "Property",
                "start": 1994,
                "end": 2003,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1994,
                  "end": 1998,
                  "name": "bark",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1998,
                  "end": 2003,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 2001,
                    "end": 2003,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
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
    {
      "type": "VariableDeclaration",
      "start": 2008,
      "end": 2044,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2020,
          "end": 2043,
          "id": {
            "type": "Identifier",
            "start": 2020,
            "end": 2043,
            "name": "map",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2023,
              "end": 2043,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2025,
                "end": 2043,
                "typeName": {
                  "type": "Identifier",
                  "start": 2025,
                  "end": 2030,
                  "name": "MyMap",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2030,
                  "end": 2043,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 2031,
                      "end": 2034,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2031,
                        "end": 2034,
                        "name": "Dog",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 2036,
                      "end": 2042
                    }
                  ]
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
      "start": 2045,
      "end": 2066,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2045,
        "end": 2065,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 2045,
          "end": 2055,
          "object": {
            "type": "Identifier",
            "start": 2045,
            "end": 2048,
            "name": "map",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2049,
            "end": 2054,
            "name": "rover",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 2058,
          "end": 2065,
          "value": "Rover",
          "raw": "\"Rover\""
        }
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2068,
      "end": 2113,
      "id": {
        "type": "Identifier",
        "start": 2078,
        "end": 2079,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2080,
        "end": 2113,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2084,
            "end": 2111,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2084,
              "end": 2088,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2088,
              "end": 2111,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2090,
                "end": 2111,
                "typeName": {
                  "type": "Identifier",
                  "start": 2090,
                  "end": 2095,
                  "name": "MyMap",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2095,
                  "end": 2111,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2096,
                      "end": 2102
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 2104,
                      "end": 2110
                    }
                  ]
                }
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
      "type": "VariableDeclaration",
      "start": 2114,
      "end": 2133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2128,
          "end": 2132,
          "id": {
            "type": "Identifier",
            "start": 2128,
            "end": 2132,
            "name": "m",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2129,
              "end": 2132,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2131,
                "end": 2132,
                "typeName": {
                  "type": "Identifier",
                  "start": 2131,
                  "end": 2132,
                  "name": "I",
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 2134,
      "end": 2146,
      "expression": {
        "type": "MemberExpression",
        "start": 2134,
        "end": 2145,
        "object": {
          "type": "MemberExpression",
          "start": 2134,
          "end": 2140,
          "object": {
            "type": "Identifier",
            "start": 2134,
            "end": 2135,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2136,
            "end": 2140,
            "name": "prop",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 2141,
          "end": 2144,
          "value": "a",
          "raw": "'a'"
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 541,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 27,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 27,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 25,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 25,
              "decorators": [],
              "name": "animal",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 28,
      "end": 64,
      "body": {
        "type": "TSInterfaceBody",
        "start": 57,
        "end": 64,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 59,
            "end": 62,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 62,
              "decorators": [],
              "name": "dog",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 50,
          "end": 56,
          "expression": {
            "type": "Identifier",
            "start": 50,
            "end": 56,
            "decorators": [],
            "name": "Animal",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 41,
        "decorators": [],
        "name": "Dog",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 65,
      "end": 101,
      "body": {
        "type": "TSInterfaceBody",
        "start": 94,
        "end": 101,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 96,
            "end": 99,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 96,
              "end": 99,
              "decorators": [],
              "name": "cat",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 87,
          "end": 93,
          "expression": {
            "type": "Identifier",
            "start": 87,
            "end": 93,
            "decorators": [],
            "name": "Animal",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 78,
        "decorators": [],
        "name": "Cat",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 103,
      "end": 143,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 116,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 117,
          "end": 136,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 120,
            "end": 136,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 122,
              "end": 136,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 122,
                "end": 134,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 124,
                    "end": 132,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 125,
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
                      "start": 125,
                      "end": 132,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 126,
                        "end": 132
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 137,
        "end": 142,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 139,
          "end": 142,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 139,
            "end": 142,
            "decorators": [],
            "name": "Dog",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 144,
      "end": 187,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 157,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 158,
          "end": 177,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 161,
            "end": 177,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 163,
              "end": 177,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 163,
                "end": 175,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 165,
                    "end": 173,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 165,
                      "end": 166,
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
                      "start": 166,
                      "end": 173,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 167,
                        "end": 173
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 178,
        "end": 186,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 180,
          "end": 186,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 180,
            "end": 186,
            "decorators": [],
            "name": "Animal",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 188,
      "end": 262,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 237,
        "end": 262,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 243,
            "end": 260,
            "argument": {
              "type": "Identifier",
              "start": 250,
              "end": 259,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 201,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 202,
          "end": 230,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 203,
              "end": 204,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 205,
            "end": 230,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 207,
              "end": 230,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 207,
                "end": 228,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 209,
                    "end": 226,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 209,
                      "end": 210,
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
                      "start": 210,
                      "end": 226,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 211,
                        "end": 226,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 211,
                            "end": 217
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 220,
                            "end": 226
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 231,
        "end": 236,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 233,
          "end": 236,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 233,
            "end": 236,
            "decorators": [],
            "name": "Dog",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 264,
      "end": 304,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 273,
        "end": 277,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 278,
          "end": 297,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 281,
            "end": 297,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 283,
              "end": 297,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 283,
                "end": 295,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 285,
                    "end": 293,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 285,
                      "end": 286,
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
                      "start": 286,
                      "end": 293,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 287,
                        "end": 293
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 298,
        "end": 303,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 300,
          "end": 303,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 300,
            "end": 303,
            "decorators": [],
            "name": "Cat",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 305,
      "end": 351,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 314,
        "end": 318,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 319,
          "end": 338,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 322,
            "end": 338,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 324,
              "end": 338,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 324,
                "end": 336,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 326,
                    "end": 334,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 326,
                      "end": 327,
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
                      "start": 327,
                      "end": 334,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 328,
                        "end": 334
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 339,
        "end": 350,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 341,
          "end": 350,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 341,
              "end": 344,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 341,
                "end": 344,
                "decorators": [],
                "name": "Cat",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 347,
              "end": 350,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 347,
                "end": 350,
                "decorators": [],
                "name": "Dog",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 352,
      "end": 426,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 401,
        "end": 426,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 407,
            "end": 424,
            "argument": {
              "type": "Identifier",
              "start": 414,
              "end": 423,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 361,
        "end": 365,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 366,
          "end": 394,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 367,
              "end": 368,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 369,
            "end": 394,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 371,
              "end": 394,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 371,
                "end": 392,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 373,
                    "end": 390,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 373,
                      "end": 374,
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
                      "start": 374,
                      "end": 390,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 375,
                        "end": 390,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 375,
                            "end": 381
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 384,
                            "end": 390
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 395,
        "end": 400,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 397,
          "end": 400,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 397,
            "end": 400,
            "decorators": [],
            "name": "Cat",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 429,
      "end": 457,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 433,
          "end": 456,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 433,
            "end": 435,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 438,
            "end": 456,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 443,
                "end": 455,
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "start": 444,
                    "end": 454,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 445,
                        "end": 453,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 445,
                          "end": 446,
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
                          "start": 448,
                          "end": 453,
                          "raw": "\"str\"",
                          "value": "str",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 438,
              "end": 442,
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 458,
      "end": 484,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 462,
          "end": 483,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 462,
            "end": 464,
            "decorators": [],
            "name": "y1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 467,
            "end": 483,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 472,
                "end": 482,
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "start": 473,
                    "end": 481,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 474,
                        "end": 480,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 474,
                          "end": 475,
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
                          "start": 477,
                          "end": 480,
                          "raw": "100",
                          "value": 100,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 467,
              "end": 471,
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 486,
      "end": 514,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 490,
          "end": 513,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 490,
            "end": 492,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 495,
            "end": 513,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 500,
                "end": 512,
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "start": 501,
                    "end": 511,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 502,
                        "end": 510,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 502,
                          "end": 503,
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
                          "start": 505,
                          "end": 510,
                          "raw": "\"str\"",
                          "value": "str",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 495,
              "end": 499,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 515,
      "end": 541,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 519,
          "end": 540,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 519,
            "end": 521,
            "decorators": [],
            "name": "y2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 524,
            "end": 540,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 529,
                "end": 539,
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "start": 530,
                    "end": 538,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 531,
                        "end": 537,
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
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 534,
                          "end": 537,
                          "raw": "100",
                          "value": 100,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 524,
              "end": 528,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

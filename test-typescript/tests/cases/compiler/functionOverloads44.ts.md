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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "name": "Animal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 27,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 25,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 25,
              "name": "animal",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 28,
      "end": 64,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 41,
        "name": "Dog",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 50,
          "end": 56,
          "expression": {
            "type": "Identifier",
            "start": 50,
            "end": 56,
            "name": "Animal",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 57,
        "end": 64,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 59,
            "end": 62,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 62,
              "name": "dog",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 65,
      "end": 101,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 78,
        "name": "Cat",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 87,
          "end": 93,
          "expression": {
            "type": "Identifier",
            "start": 87,
            "end": 93,
            "name": "Animal",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 94,
        "end": 101,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 96,
            "end": 99,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 96,
              "end": 99,
              "name": "cat",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 103,
      "end": 143,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 116,
        "name": "foo1",
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
          "start": 117,
          "end": 136,
          "name": "bar",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 125,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 125,
                      "end": 132,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 126,
                        "end": 132
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 137,
        "end": 142,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 139,
          "end": 142,
          "typeName": {
            "type": "Identifier",
            "start": 139,
            "end": 142,
            "name": "Dog",
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
      "start": 144,
      "end": 187,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 157,
        "name": "foo1",
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
          "start": 158,
          "end": 177,
          "name": "bar",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 165,
                      "end": 166,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 166,
                      "end": 173,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 167,
                        "end": 173
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 178,
        "end": 186,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 180,
          "end": 186,
          "typeName": {
            "type": "Identifier",
            "start": 180,
            "end": 186,
            "name": "Animal",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 188,
      "end": 262,
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 201,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 202,
          "end": 230,
          "elements": [
            {
              "type": "Identifier",
              "start": 203,
              "end": 204,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "decorators": [],
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 209,
                      "end": 210,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          }
        }
      ],
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
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 231,
        "end": 236,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 233,
          "end": 236,
          "typeName": {
            "type": "Identifier",
            "start": 233,
            "end": 236,
            "name": "Dog",
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
      "start": 264,
      "end": 304,
      "id": {
        "type": "Identifier",
        "start": 273,
        "end": 277,
        "name": "foo2",
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
          "start": 278,
          "end": 297,
          "name": "bar",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 285,
                      "end": 286,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 286,
                      "end": 293,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 287,
                        "end": 293
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 298,
        "end": 303,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 300,
          "end": 303,
          "typeName": {
            "type": "Identifier",
            "start": 300,
            "end": 303,
            "name": "Cat",
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
      "start": 305,
      "end": 351,
      "id": {
        "type": "Identifier",
        "start": 314,
        "end": 318,
        "name": "foo2",
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
          "start": 319,
          "end": 338,
          "name": "bar",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 326,
                      "end": 327,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 327,
                      "end": 334,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 328,
                        "end": 334
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "declare": false,
      "typeParameters": null,
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
              "typeName": {
                "type": "Identifier",
                "start": 341,
                "end": 344,
                "name": "Cat",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 347,
              "end": 350,
              "typeName": {
                "type": "Identifier",
                "start": 347,
                "end": 350,
                "name": "Dog",
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
    {
      "type": "FunctionDeclaration",
      "start": 352,
      "end": 426,
      "id": {
        "type": "Identifier",
        "start": 361,
        "end": 365,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 366,
          "end": 394,
          "elements": [
            {
              "type": "Identifier",
              "start": 367,
              "end": 368,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "decorators": [],
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 373,
                      "end": 374,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          }
        }
      ],
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
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 395,
        "end": 400,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 397,
          "end": 400,
          "typeName": {
            "type": "Identifier",
            "start": 397,
            "end": 400,
            "name": "Cat",
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
      "start": 429,
      "end": 457,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 433,
          "end": 456,
          "id": {
            "type": "Identifier",
            "start": 433,
            "end": 435,
            "name": "x1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 438,
            "end": 456,
            "callee": {
              "type": "Identifier",
              "start": 438,
              "end": 442,
              "name": "foo1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 445,
                          "end": 446,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 448,
                          "end": 453,
                          "value": "str",
                          "raw": "\"str\""
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
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 462,
            "end": 464,
            "name": "y1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 467,
            "end": 483,
            "callee": {
              "type": "Identifier",
              "start": 467,
              "end": 471,
              "name": "foo1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 474,
                          "end": 475,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 477,
                          "end": 480,
                          "value": 100,
                          "raw": "100"
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
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 490,
            "end": 492,
            "name": "x2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 495,
            "end": 513,
            "callee": {
              "type": "Identifier",
              "start": 495,
              "end": 499,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 502,
                          "end": 503,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 505,
                          "end": 510,
                          "value": "str",
                          "raw": "\"str\""
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
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 519,
            "end": 521,
            "name": "y2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 524,
            "end": 540,
            "callee": {
              "type": "Identifier",
              "start": 524,
              "end": 528,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 531,
                          "end": 532,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 534,
                          "end": 537,
                          "value": 100,
                          "raw": "100"
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
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

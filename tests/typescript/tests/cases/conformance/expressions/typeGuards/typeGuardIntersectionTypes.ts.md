__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2275,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 30,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 28,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
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
      "start": 32,
      "end": 62,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 43,
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 44,
        "end": 62,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 50,
            "end": 60,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 59,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 53,
                "end": 59
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
      "start": 64,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 75,
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 76,
        "end": 94,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 82,
            "end": 92,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 91,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 85,
                "end": 91
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
      "type": "TSDeclareFunction",
      "start": 96,
      "end": 137,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 116,
        "decorators": [],
        "name": "isX",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 117,
          "end": 125,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 120,
            "end": 125,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 122,
              "end": 125
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 126,
        "end": 136,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 128,
          "end": 136,
          "parameterName": {
            "type": "Identifier",
            "start": 128,
            "end": 131,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 135,
            "end": 136,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 135,
              "end": 136,
              "typeName": {
                "type": "Identifier",
                "start": 135,
                "end": 136,
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 138,
      "end": 179,
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 158,
        "decorators": [],
        "name": "isY",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 159,
          "end": 167,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 162,
            "end": 167,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 164,
              "end": 167
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 168,
        "end": 178,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 170,
          "end": 178,
          "parameterName": {
            "type": "Identifier",
            "start": 170,
            "end": 173,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 177,
            "end": 178,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 177,
              "end": 178,
              "typeName": {
                "type": "Identifier",
                "start": 177,
                "end": 178,
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 180,
      "end": 221,
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 200,
        "decorators": [],
        "name": "isZ",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 201,
          "end": 209,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 204,
            "end": 209,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 206,
              "end": 209
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 210,
        "end": 220,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 212,
          "end": 220,
          "parameterName": {
            "type": "Identifier",
            "start": 212,
            "end": 215,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 219,
            "end": 220,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 219,
              "end": 220,
              "typeName": {
                "type": "Identifier",
                "start": 219,
                "end": 220,
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 223,
      "end": 377,
      "id": {
        "type": "Identifier",
        "start": 232,
        "end": 234,
        "decorators": [],
        "name": "f1",
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
          "start": 235,
          "end": 246,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 238,
            "end": 246,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 240,
              "end": 246,
              "typeName": {
                "type": "Identifier",
                "start": 240,
                "end": 246,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 248,
        "end": 377,
        "body": [
          {
            "type": "IfStatement",
            "start": 254,
            "end": 312,
            "test": {
              "type": "LogicalExpression",
              "start": 258,
              "end": 290,
              "left": {
                "type": "LogicalExpression",
                "start": 258,
                "end": 278,
                "left": {
                  "type": "CallExpression",
                  "start": 258,
                  "end": 266,
                  "callee": {
                    "type": "Identifier",
                    "start": 258,
                    "end": 261,
                    "decorators": [],
                    "name": "isX",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 262,
                      "end": 265,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "operator": "||",
                "right": {
                  "type": "CallExpression",
                  "start": 270,
                  "end": 278,
                  "callee": {
                    "type": "Identifier",
                    "start": 270,
                    "end": 273,
                    "decorators": [],
                    "name": "isY",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 274,
                      "end": 277,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                }
              },
              "operator": "||",
              "right": {
                "type": "CallExpression",
                "start": 282,
                "end": 290,
                "callee": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 285,
                  "decorators": [],
                  "name": "isZ",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 286,
                    "end": 289,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 292,
              "end": 312,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 302,
                  "end": 306,
                  "expression": {
                    "type": "Identifier",
                    "start": 302,
                    "end": 305,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 317,
            "end": 375,
            "test": {
              "type": "LogicalExpression",
              "start": 321,
              "end": 353,
              "left": {
                "type": "LogicalExpression",
                "start": 321,
                "end": 341,
                "left": {
                  "type": "CallExpression",
                  "start": 321,
                  "end": 329,
                  "callee": {
                    "type": "Identifier",
                    "start": 321,
                    "end": 324,
                    "decorators": [],
                    "name": "isX",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 325,
                      "end": 328,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "operator": "&&",
                "right": {
                  "type": "CallExpression",
                  "start": 333,
                  "end": 341,
                  "callee": {
                    "type": "Identifier",
                    "start": 333,
                    "end": 336,
                    "decorators": [],
                    "name": "isY",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 337,
                      "end": 340,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                }
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "start": 345,
                "end": 353,
                "callee": {
                  "type": "Identifier",
                  "start": 345,
                  "end": 348,
                  "decorators": [],
                  "name": "isZ",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 349,
                    "end": 352,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 355,
              "end": 375,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 365,
                  "end": 369,
                  "expression": {
                    "type": "Identifier",
                    "start": 365,
                    "end": 368,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 418,
      "end": 446,
      "id": {
        "type": "Identifier",
        "start": 428,
        "end": 429,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 430,
        "end": 446,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 434,
            "end": 444,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 434,
              "end": 435,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 435,
              "end": 443,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 437,
                "end": 443
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
      "start": 448,
      "end": 476,
      "id": {
        "type": "Identifier",
        "start": 458,
        "end": 459,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 460,
        "end": 476,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 464,
            "end": 474,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 464,
              "end": 465,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 465,
              "end": 473,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 467,
                "end": 473
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
      "start": 500,
      "end": 571,
      "id": {
        "type": "Identifier",
        "start": 509,
        "end": 512,
        "decorators": [],
        "name": "isB",
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
          "start": 513,
          "end": 524,
          "decorators": [],
          "name": "toTest",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 519,
            "end": 524,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 521,
              "end": 524
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 525,
        "end": 538,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 527,
          "end": 538,
          "parameterName": {
            "type": "Identifier",
            "start": 527,
            "end": 533,
            "decorators": [],
            "name": "toTest",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 537,
            "end": 538,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 537,
              "end": 538,
              "typeName": {
                "type": "Identifier",
                "start": 537,
                "end": 538,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 539,
        "end": 571,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 543,
            "end": 569,
            "argument": {
              "type": "LogicalExpression",
              "start": 550,
              "end": 568,
              "left": {
                "type": "Identifier",
                "start": 550,
                "end": 556,
                "decorators": [],
                "name": "toTest",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "start": 560,
                "end": 568,
                "object": {
                  "type": "Identifier",
                  "start": 560,
                  "end": 566,
                  "decorators": [],
                  "name": "toTest",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 567,
                  "end": 568,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 617,
      "end": 717,
      "id": {
        "type": "Identifier",
        "start": 626,
        "end": 631,
        "decorators": [],
        "name": "union",
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
          "start": 632,
          "end": 636,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 633,
            "end": 636,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 635,
              "end": 636,
              "typeName": {
                "type": "Identifier",
                "start": 635,
                "end": 636,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 637,
        "end": 651,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 639,
          "end": 651,
          "types": [
            {
              "type": "TSIntersectionType",
              "start": 639,
              "end": 644,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 639,
                  "end": 640,
                  "typeName": {
                    "type": "Identifier",
                    "start": 639,
                    "end": 640,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 643,
                  "end": 644,
                  "typeName": {
                    "type": "Identifier",
                    "start": 643,
                    "end": 644,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            },
            {
              "type": "TSNullKeyword",
              "start": 647,
              "end": 651
            }
          ]
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 652,
        "end": 717,
        "body": [
          {
            "type": "IfStatement",
            "start": 656,
            "end": 715,
            "test": {
              "type": "CallExpression",
              "start": 660,
              "end": 666,
              "callee": {
                "type": "Identifier",
                "start": 660,
                "end": 663,
                "decorators": [],
                "name": "isB",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 664,
                  "end": 665,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 668,
              "end": 687,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 674,
                  "end": 683,
                  "argument": {
                    "type": "Identifier",
                    "start": 681,
                    "end": 682,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 693,
              "end": 715,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 699,
                  "end": 711,
                  "argument": {
                    "type": "Literal",
                    "start": 706,
                    "end": 710,
                    "value": null,
                    "raw": "null"
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 740,
      "end": 778,
      "id": {
        "type": "Identifier",
        "start": 757,
        "end": 760,
        "decorators": [],
        "name": "log",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 761,
          "end": 770,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 762,
            "end": 770,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 764,
              "end": 770
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 771,
        "end": 777,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 773,
          "end": 777
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 808,
      "end": 862,
      "id": {
        "type": "Identifier",
        "start": 818,
        "end": 823,
        "decorators": [],
        "name": "Beast",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 828,
        "end": 862,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 830,
            "end": 846,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 830,
              "end": 835,
              "decorators": [],
              "name": "wings",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 836,
              "end": 845,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 838,
                "end": 845
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 847,
            "end": 860,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 847,
              "end": 851,
              "decorators": [],
              "name": "legs",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 852,
              "end": 860,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 854,
                "end": 860
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
      "start": 863,
      "end": 900,
      "id": {
        "type": "Identifier",
        "start": 873,
        "end": 879,
        "decorators": [],
        "name": "Legged",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 883,
        "end": 900,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 885,
            "end": 898,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 885,
              "end": 889,
              "decorators": [],
              "name": "legs",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 889,
              "end": 897,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 891,
                "end": 897
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
      "start": 901,
      "end": 940,
      "id": {
        "type": "Identifier",
        "start": 911,
        "end": 917,
        "decorators": [],
        "name": "Winged",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 921,
        "end": 940,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 923,
            "end": 938,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 923,
              "end": 928,
              "decorators": [],
              "name": "wings",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 928,
              "end": 937,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 930,
                "end": 937
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
      "start": 998,
      "end": 1081,
      "id": {
        "type": "Identifier",
        "start": 1007,
        "end": 1014,
        "decorators": [],
        "name": "hasLegs",
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
          "start": 1015,
          "end": 1023,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1016,
            "end": 1023,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1018,
              "end": 1023,
              "typeName": {
                "type": "Identifier",
                "start": 1018,
                "end": 1023,
                "decorators": [],
                "name": "Beast",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1024,
        "end": 1037,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 1026,
          "end": 1037,
          "parameterName": {
            "type": "Identifier",
            "start": 1026,
            "end": 1027,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1031,
            "end": 1037,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1031,
              "end": 1037,
              "typeName": {
                "type": "Identifier",
                "start": 1031,
                "end": 1037,
                "decorators": [],
                "name": "Legged",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1038,
        "end": 1081,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1040,
            "end": 1079,
            "argument": {
              "type": "LogicalExpression",
              "start": 1047,
              "end": 1078,
              "left": {
                "type": "Identifier",
                "start": 1047,
                "end": 1048,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 1052,
                "end": 1078,
                "left": {
                  "type": "UnaryExpression",
                  "start": 1052,
                  "end": 1065,
                  "operator": "typeof",
                  "argument": {
                    "type": "MemberExpression",
                    "start": 1059,
                    "end": 1065,
                    "object": {
                      "type": "Identifier",
                      "start": 1059,
                      "end": 1060,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1061,
                      "end": 1065,
                      "decorators": [],
                      "name": "legs",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 1070,
                  "end": 1078,
                  "value": "number",
                  "raw": "'number'"
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1082,
      "end": 1149,
      "id": {
        "type": "Identifier",
        "start": 1091,
        "end": 1099,
        "decorators": [],
        "name": "hasWings",
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
          "start": 1100,
          "end": 1108,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1101,
            "end": 1108,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1103,
              "end": 1108,
              "typeName": {
                "type": "Identifier",
                "start": 1103,
                "end": 1108,
                "decorators": [],
                "name": "Beast",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1109,
        "end": 1122,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 1111,
          "end": 1122,
          "parameterName": {
            "type": "Identifier",
            "start": 1111,
            "end": 1112,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1116,
            "end": 1122,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1116,
              "end": 1122,
              "typeName": {
                "type": "Identifier",
                "start": 1116,
                "end": 1122,
                "decorators": [],
                "name": "Winged",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1123,
        "end": 1149,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1125,
            "end": 1147,
            "argument": {
              "type": "LogicalExpression",
              "start": 1132,
              "end": 1146,
              "left": {
                "type": "Identifier",
                "start": 1132,
                "end": 1133,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "&&",
              "right": {
                "type": "UnaryExpression",
                "start": 1137,
                "end": 1146,
                "operator": "!",
                "argument": {
                  "type": "UnaryExpression",
                  "start": 1138,
                  "end": 1146,
                  "operator": "!",
                  "argument": {
                    "type": "MemberExpression",
                    "start": 1139,
                    "end": 1146,
                    "object": {
                      "type": "Identifier",
                      "start": 1139,
                      "end": 1140,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1141,
                      "end": 1146,
                      "decorators": [],
                      "name": "wings",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "prefix": true
                },
                "prefix": true
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1215,
      "end": 2032,
      "id": {
        "type": "Identifier",
        "start": 1224,
        "end": 1237,
        "decorators": [],
        "name": "identifyBeast",
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
          "start": 1238,
          "end": 1250,
          "decorators": [],
          "name": "beast",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1243,
            "end": 1250,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1245,
              "end": 1250,
              "typeName": {
                "type": "Identifier",
                "start": 1245,
                "end": 1250,
                "decorators": [],
                "name": "Beast",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1252,
        "end": 2032,
        "body": [
          {
            "type": "IfStatement",
            "start": 1287,
            "end": 2030,
            "test": {
              "type": "CallExpression",
              "start": 1291,
              "end": 1305,
              "callee": {
                "type": "Identifier",
                "start": 1291,
                "end": 1298,
                "decorators": [],
                "name": "hasLegs",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1299,
                  "end": 1304,
                  "decorators": [],
                  "name": "beast",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1307,
              "end": 1817,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 1357,
                  "end": 1811,
                  "test": {
                    "type": "CallExpression",
                    "start": 1361,
                    "end": 1376,
                    "callee": {
                      "type": "Identifier",
                      "start": 1361,
                      "end": 1369,
                      "decorators": [],
                      "name": "hasWings",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1370,
                        "end": 1375,
                        "decorators": [],
                        "name": "beast",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1378,
                    "end": 1680,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 1392,
                        "end": 1670,
                        "test": {
                          "type": "BinaryExpression",
                          "start": 1396,
                          "end": 1412,
                          "left": {
                            "type": "MemberExpression",
                            "start": 1396,
                            "end": 1406,
                            "object": {
                              "type": "Identifier",
                              "start": 1396,
                              "end": 1401,
                              "decorators": [],
                              "name": "beast",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1402,
                              "end": 1406,
                              "decorators": [],
                              "name": "legs",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "start": 1411,
                            "end": 1412,
                            "value": 4,
                            "raw": "4"
                          }
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 1414,
                          "end": 1477,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1432,
                              "end": 1463,
                              "expression": {
                                "type": "CallExpression",
                                "start": 1432,
                                "end": 1462,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 1432,
                                  "end": 1435,
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "TemplateLiteral",
                                    "start": 1436,
                                    "end": 1461,
                                    "quasis": [
                                      {
                                        "type": "TemplateElement",
                                        "start": 1436,
                                        "end": 1461,
                                        "value": {
                                          "raw": "pegasus - 4 legs, wings",
                                          "cooked": "pegasus - 4 legs, wings"
                                        },
                                        "tail": true
                                      }
                                    ],
                                    "expressions": []
                                  }
                                ],
                                "optional": false
                              },
                              "directive": null
                            }
                          ]
                        },
                        "alternate": {
                          "type": "IfStatement",
                          "start": 1495,
                          "end": 1670,
                          "test": {
                            "type": "BinaryExpression",
                            "start": 1499,
                            "end": 1515,
                            "left": {
                              "type": "MemberExpression",
                              "start": 1499,
                              "end": 1509,
                              "object": {
                                "type": "Identifier",
                                "start": 1499,
                                "end": 1504,
                                "decorators": [],
                                "name": "beast",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1505,
                                "end": 1509,
                                "decorators": [],
                                "name": "legs",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "start": 1514,
                              "end": 1515,
                              "value": 2,
                              "raw": "2"
                            }
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 1517,
                            "end": 1577,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 1535,
                                "end": 1563,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 1535,
                                  "end": 1562,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 1535,
                                    "end": 1538,
                                    "decorators": [],
                                    "name": "log",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "TemplateLiteral",
                                      "start": 1539,
                                      "end": 1561,
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "start": 1539,
                                          "end": 1561,
                                          "value": {
                                            "raw": "bird - 2 legs, wings",
                                            "cooked": "bird - 2 legs, wings"
                                          },
                                          "tail": true
                                        }
                                      ],
                                      "expressions": []
                                    }
                                  ],
                                  "optional": false
                                },
                                "directive": null
                              }
                            ]
                          },
                          "alternate": {
                            "type": "BlockStatement",
                            "start": 1595,
                            "end": 1670,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 1613,
                                "end": 1656,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 1613,
                                  "end": 1655,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 1613,
                                    "end": 1616,
                                    "decorators": [],
                                    "name": "log",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "TemplateLiteral",
                                      "start": 1617,
                                      "end": 1654,
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "start": 1617,
                                          "end": 1630,
                                          "value": {
                                            "raw": "unknown - ",
                                            "cooked": "unknown - "
                                          },
                                          "tail": false
                                        },
                                        {
                                          "type": "TemplateElement",
                                          "start": 1640,
                                          "end": 1654,
                                          "value": {
                                            "raw": " legs, wings",
                                            "cooked": " legs, wings"
                                          },
                                          "tail": true
                                        }
                                      ],
                                      "expressions": [
                                        {
                                          "type": "MemberExpression",
                                          "start": 1630,
                                          "end": 1640,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 1630,
                                            "end": 1635,
                                            "decorators": [],
                                            "name": "beast",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 1636,
                                            "end": 1640,
                                            "decorators": [],
                                            "name": "legs",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        }
                                      ]
                                    }
                                  ],
                                  "optional": false
                                },
                                "directive": null
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 1738,
                    "end": 1811,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1752,
                        "end": 1801,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1752,
                          "end": 1800,
                          "callee": {
                            "type": "Identifier",
                            "start": 1752,
                            "end": 1755,
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "TemplateLiteral",
                              "start": 1756,
                              "end": 1799,
                              "quasis": [
                                {
                                  "type": "TemplateElement",
                                  "start": 1756,
                                  "end": 1772,
                                  "value": {
                                    "raw": "manbearpig - ",
                                    "cooked": "manbearpig - "
                                  },
                                  "tail": false
                                },
                                {
                                  "type": "TemplateElement",
                                  "start": 1782,
                                  "end": 1799,
                                  "value": {
                                    "raw": " legs, no wings",
                                    "cooked": " legs, no wings"
                                  },
                                  "tail": true
                                }
                              ],
                              "expressions": [
                                {
                                  "type": "MemberExpression",
                                  "start": 1772,
                                  "end": 1782,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 1772,
                                    "end": 1777,
                                    "decorators": [],
                                    "name": "beast",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1778,
                                    "end": 1782,
                                    "decorators": [],
                                    "name": "legs",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                }
                              ]
                            }
                          ],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1863,
              "end": 2030,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 1873,
                  "end": 2024,
                  "test": {
                    "type": "CallExpression",
                    "start": 1877,
                    "end": 1892,
                    "callee": {
                      "type": "Identifier",
                      "start": 1877,
                      "end": 1885,
                      "decorators": [],
                      "name": "hasWings",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1886,
                        "end": 1891,
                        "decorators": [],
                        "name": "beast",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1894,
                    "end": 1954,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1908,
                        "end": 1944,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1908,
                          "end": 1944,
                          "callee": {
                            "type": "Identifier",
                            "start": 1908,
                            "end": 1911,
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "TemplateLiteral",
                              "start": 1912,
                              "end": 1943,
                              "quasis": [
                                {
                                  "type": "TemplateElement",
                                  "start": 1912,
                                  "end": 1943,
                                  "value": {
                                    "raw": "quetzalcoatl - no legs, wings",
                                    "cooked": "quetzalcoatl - no legs, wings"
                                  },
                                  "tail": true
                                }
                              ],
                              "expressions": []
                            }
                          ],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 1968,
                    "end": 2024,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1982,
                        "end": 2014,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1982,
                          "end": 2014,
                          "callee": {
                            "type": "Identifier",
                            "start": 1982,
                            "end": 1985,
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "TemplateLiteral",
                              "start": 1986,
                              "end": 2013,
                              "quasis": [
                                {
                                  "type": "TemplateElement",
                                  "start": 1986,
                                  "end": 2013,
                                  "value": {
                                    "raw": "snake - no legs, no wings",
                                    "cooked": "snake - no legs, no wings"
                                  },
                                  "tail": true
                                }
                              ],
                              "expressions": []
                            }
                          ],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2034,
      "end": 2275,
      "id": {
        "type": "Identifier",
        "start": 2043,
        "end": 2051,
        "decorators": [],
        "name": "beastFoo",
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
          "start": 2052,
          "end": 2065,
          "decorators": [],
          "name": "beast",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2057,
            "end": 2065,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2059,
              "end": 2065,
              "typeName": {
                "type": "Identifier",
                "start": 2059,
                "end": 2065,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2067,
        "end": 2275,
        "body": [
          {
            "type": "IfStatement",
            "start": 2073,
            "end": 2186,
            "test": {
              "type": "LogicalExpression",
              "start": 2077,
              "end": 2110,
              "left": {
                "type": "CallExpression",
                "start": 2077,
                "end": 2092,
                "callee": {
                  "type": "Identifier",
                  "start": 2077,
                  "end": 2085,
                  "decorators": [],
                  "name": "hasWings",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2086,
                    "end": 2091,
                    "decorators": [],
                    "name": "beast",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "start": 2096,
                "end": 2110,
                "callee": {
                  "type": "Identifier",
                  "start": 2096,
                  "end": 2103,
                  "decorators": [],
                  "name": "hasLegs",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2104,
                    "end": 2109,
                    "decorators": [],
                    "name": "beast",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2112,
              "end": 2154,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2122,
                  "end": 2128,
                  "expression": {
                    "type": "Identifier",
                    "start": 2122,
                    "end": 2127,
                    "decorators": [],
                    "name": "beast",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 2164,
              "end": 2186,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2174,
                  "end": 2180,
                  "expression": {
                    "type": "Identifier",
                    "start": 2174,
                    "end": 2179,
                    "decorators": [],
                    "name": "beast",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "start": 2192,
            "end": 2273,
            "test": {
              "type": "LogicalExpression",
              "start": 2196,
              "end": 2229,
              "left": {
                "type": "CallExpression",
                "start": 2196,
                "end": 2210,
                "callee": {
                  "type": "Identifier",
                  "start": 2196,
                  "end": 2203,
                  "decorators": [],
                  "name": "hasLegs",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2204,
                    "end": 2209,
                    "decorators": [],
                    "name": "beast",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "start": 2214,
                "end": 2229,
                "callee": {
                  "type": "Identifier",
                  "start": 2214,
                  "end": 2222,
                  "decorators": [],
                  "name": "hasWings",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2223,
                    "end": 2228,
                    "decorators": [],
                    "name": "beast",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2231,
              "end": 2273,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2241,
                  "end": 2247,
                  "expression": {
                    "type": "Identifier",
                    "start": 2241,
                    "end": 2246,
                    "decorators": [],
                    "name": "beast",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

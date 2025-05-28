__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 711,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 11,
        "decorators": [],
        "name": "MyEnum",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 12,
        "end": 30,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 16,
            "end": 17,
            "id": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 21,
            "end": 22,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 26,
            "end": 27,
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 32,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 49,
        "decorators": [],
        "name": "MyStringEnum",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 50,
        "end": 86,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 54,
            "end": 61,
            "id": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 58,
              "end": 61,
              "value": "a",
              "raw": "\"a\""
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 65,
            "end": 72,
            "id": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 69,
              "end": 72,
              "value": "b",
              "raw": "\"b\""
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 76,
            "end": 83,
            "id": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 80,
              "end": 83,
              "value": "c",
              "raw": "\"c\""
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 88,
      "end": 150,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 114,
        "decorators": [],
        "name": "MyStringEnumWithEmpty",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 115,
        "end": 150,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 119,
            "end": 125,
            "id": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 123,
              "end": 125,
              "value": "",
              "raw": "\"\""
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 129,
            "end": 136,
            "id": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 133,
              "end": 136,
              "value": "b",
              "raw": "\"b\""
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 140,
            "end": 147,
            "id": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 144,
              "end": 147,
              "value": "c",
              "raw": "\"c\""
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 152,
      "end": 243,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 159,
        "end": 243,
        "id": {
          "type": "Identifier",
          "start": 168,
          "end": 170,
          "decorators": [],
          "name": "fn",
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
            "start": 171,
            "end": 203,
            "decorators": [],
            "name": "optionalEnum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 183,
              "end": 203,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 185,
                "end": 203,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 185,
                    "end": 191,
                    "typeName": {
                      "type": "Identifier",
                      "start": 185,
                      "end": 191,
                      "decorators": [],
                      "name": "MyEnum",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 194,
                    "end": 203
                  }
                ]
              }
            }
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 205,
          "end": 243,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 209,
              "end": 241,
              "argument": {
                "type": "LogicalExpression",
                "start": 216,
                "end": 240,
                "left": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 228,
                  "decorators": [],
                  "name": "optionalEnum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "??",
                "right": {
                  "type": "MemberExpression",
                  "start": 232,
                  "end": 240,
                  "object": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 238,
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 239,
                    "end": 240,
                    "decorators": [],
                    "name": "A",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 245,
      "end": 337,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 252,
        "end": 337,
        "id": {
          "type": "Identifier",
          "start": 261,
          "end": 264,
          "decorators": [],
          "name": "fn2",
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
            "start": 265,
            "end": 297,
            "decorators": [],
            "name": "optionalEnum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 277,
              "end": 297,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 279,
                "end": 297,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 279,
                    "end": 285,
                    "typeName": {
                      "type": "Identifier",
                      "start": 279,
                      "end": 285,
                      "decorators": [],
                      "name": "MyEnum",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 288,
                    "end": 297
                  }
                ]
              }
            }
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 299,
          "end": 337,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 303,
              "end": 335,
              "argument": {
                "type": "LogicalExpression",
                "start": 310,
                "end": 334,
                "left": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 322,
                  "decorators": [],
                  "name": "optionalEnum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "||",
                "right": {
                  "type": "MemberExpression",
                  "start": 326,
                  "end": 334,
                  "object": {
                    "type": "Identifier",
                    "start": 326,
                    "end": 332,
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 333,
                    "end": 334,
                    "decorators": [],
                    "name": "B",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 339,
      "end": 420,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 346,
        "end": 420,
        "id": {
          "type": "Identifier",
          "start": 355,
          "end": 358,
          "decorators": [],
          "name": "fn3",
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
            "start": 359,
            "end": 380,
            "decorators": [],
            "name": "optionalEnum",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 372,
              "end": 380,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 374,
                "end": 380,
                "typeName": {
                  "type": "Identifier",
                  "start": 374,
                  "end": 380,
                  "decorators": [],
                  "name": "MyEnum",
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
          "start": 382,
          "end": 420,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 386,
              "end": 418,
              "argument": {
                "type": "LogicalExpression",
                "start": 393,
                "end": 417,
                "left": {
                  "type": "Identifier",
                  "start": 393,
                  "end": 405,
                  "decorators": [],
                  "name": "optionalEnum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "??",
                "right": {
                  "type": "MemberExpression",
                  "start": 409,
                  "end": 417,
                  "object": {
                    "type": "Identifier",
                    "start": 409,
                    "end": 415,
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 416,
                    "end": 417,
                    "decorators": [],
                    "name": "A",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 422,
      "end": 503,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 429,
        "end": 503,
        "id": {
          "type": "Identifier",
          "start": 438,
          "end": 441,
          "decorators": [],
          "name": "fn4",
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
            "start": 442,
            "end": 463,
            "decorators": [],
            "name": "optionalEnum",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 455,
              "end": 463,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 457,
                "end": 463,
                "typeName": {
                  "type": "Identifier",
                  "start": 457,
                  "end": 463,
                  "decorators": [],
                  "name": "MyEnum",
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
          "start": 465,
          "end": 503,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 469,
              "end": 501,
              "argument": {
                "type": "LogicalExpression",
                "start": 476,
                "end": 500,
                "left": {
                  "type": "Identifier",
                  "start": 476,
                  "end": 488,
                  "decorators": [],
                  "name": "optionalEnum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "||",
                "right": {
                  "type": "MemberExpression",
                  "start": 492,
                  "end": 500,
                  "object": {
                    "type": "Identifier",
                    "start": 492,
                    "end": 498,
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 499,
                    "end": 500,
                    "decorators": [],
                    "name": "B",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 505,
      "end": 598,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 512,
        "end": 598,
        "id": {
          "type": "Identifier",
          "start": 521,
          "end": 524,
          "decorators": [],
          "name": "fn5",
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
            "start": 525,
            "end": 552,
            "decorators": [],
            "name": "optionalEnum",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 538,
              "end": 552,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 540,
                "end": 552,
                "typeName": {
                  "type": "Identifier",
                  "start": 540,
                  "end": 552,
                  "decorators": [],
                  "name": "MyStringEnum",
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
          "start": 554,
          "end": 598,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 558,
              "end": 596,
              "argument": {
                "type": "LogicalExpression",
                "start": 565,
                "end": 595,
                "left": {
                  "type": "Identifier",
                  "start": 565,
                  "end": 577,
                  "decorators": [],
                  "name": "optionalEnum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "||",
                "right": {
                  "type": "MemberExpression",
                  "start": 581,
                  "end": 595,
                  "object": {
                    "type": "Identifier",
                    "start": 581,
                    "end": 593,
                    "decorators": [],
                    "name": "MyStringEnum",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 594,
                    "end": 595,
                    "decorators": [],
                    "name": "B",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 600,
      "end": 711,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 607,
        "end": 711,
        "id": {
          "type": "Identifier",
          "start": 616,
          "end": 619,
          "decorators": [],
          "name": "fn6",
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
            "start": 620,
            "end": 656,
            "decorators": [],
            "name": "optionalEnum",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 633,
              "end": 656,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 635,
                "end": 656,
                "typeName": {
                  "type": "Identifier",
                  "start": 635,
                  "end": 656,
                  "decorators": [],
                  "name": "MyStringEnumWithEmpty",
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
          "start": 658,
          "end": 711,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 662,
              "end": 709,
              "argument": {
                "type": "LogicalExpression",
                "start": 669,
                "end": 708,
                "left": {
                  "type": "Identifier",
                  "start": 669,
                  "end": 681,
                  "decorators": [],
                  "name": "optionalEnum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "||",
                "right": {
                  "type": "MemberExpression",
                  "start": 685,
                  "end": 708,
                  "object": {
                    "type": "Identifier",
                    "start": 685,
                    "end": 706,
                    "decorators": [],
                    "name": "MyStringEnumWithEmpty",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 707,
                    "end": 708,
                    "decorators": [],
                    "name": "B",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

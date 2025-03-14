__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 712,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 30,
      "body": {
        "type": "TSEnumBody",
        "start": 12,
        "end": 30,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 16,
            "end": 17,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 21,
            "end": 22,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 26,
            "end": 27,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 11,
        "decorators": [],
        "name": "MyEnum",
        "optional": false
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 32,
      "end": 86,
      "body": {
        "type": "TSEnumBody",
        "start": 50,
        "end": 86,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 54,
            "end": 61,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 58,
              "end": 61,
              "raw": "\"a\"",
              "value": "a"
            }
          },
          {
            "type": "TSEnumMember",
            "start": 65,
            "end": 72,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 69,
              "end": 72,
              "raw": "\"b\"",
              "value": "b"
            }
          },
          {
            "type": "TSEnumMember",
            "start": 76,
            "end": 83,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 80,
              "end": 83,
              "raw": "\"c\"",
              "value": "c"
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 49,
        "decorators": [],
        "name": "MyStringEnum",
        "optional": false
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 88,
      "end": 150,
      "body": {
        "type": "TSEnumBody",
        "start": 115,
        "end": 150,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 119,
            "end": 125,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 123,
              "end": 125,
              "raw": "\"\"",
              "value": ""
            }
          },
          {
            "type": "TSEnumMember",
            "start": 129,
            "end": 136,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 133,
              "end": 136,
              "raw": "\"b\"",
              "value": "b"
            }
          },
          {
            "type": "TSEnumMember",
            "start": 140,
            "end": 147,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 144,
              "end": 147,
              "raw": "\"c\"",
              "value": "c"
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 114,
        "decorators": [],
        "name": "MyStringEnumWithEmpty",
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 152,
      "end": 243,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 159,
        "end": 243,
        "async": false,
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
                "operator": "??",
                "left": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 228,
                  "decorators": [],
                  "name": "optionalEnum",
                  "optional": false
                },
                "right": {
                  "type": "MemberExpression",
                  "start": 232,
                  "end": 240,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 238,
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 239,
                    "end": 240,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 168,
          "end": 170,
          "decorators": [],
          "name": "fn",
          "optional": false
        },
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
                      "optional": false
                    }
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
        ]
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 245,
      "end": 337,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 252,
        "end": 337,
        "async": false,
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
                "operator": "||",
                "left": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 322,
                  "decorators": [],
                  "name": "optionalEnum",
                  "optional": false
                },
                "right": {
                  "type": "MemberExpression",
                  "start": 326,
                  "end": 334,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 326,
                    "end": 332,
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 333,
                    "end": 334,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 261,
          "end": 264,
          "decorators": [],
          "name": "fn2",
          "optional": false
        },
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
                      "optional": false
                    }
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
        ]
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 339,
      "end": 420,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 346,
        "end": 420,
        "async": false,
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
                "operator": "??",
                "left": {
                  "type": "Identifier",
                  "start": 393,
                  "end": 405,
                  "decorators": [],
                  "name": "optionalEnum",
                  "optional": false
                },
                "right": {
                  "type": "MemberExpression",
                  "start": 409,
                  "end": 417,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 409,
                    "end": 415,
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 416,
                    "end": 417,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 355,
          "end": 358,
          "decorators": [],
          "name": "fn3",
          "optional": false
        },
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
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 422,
      "end": 503,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 429,
        "end": 503,
        "async": false,
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
                "operator": "||",
                "left": {
                  "type": "Identifier",
                  "start": 476,
                  "end": 488,
                  "decorators": [],
                  "name": "optionalEnum",
                  "optional": false
                },
                "right": {
                  "type": "MemberExpression",
                  "start": 492,
                  "end": 500,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 492,
                    "end": 498,
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 499,
                    "end": 500,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 438,
          "end": 441,
          "decorators": [],
          "name": "fn4",
          "optional": false
        },
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
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 505,
      "end": 598,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 512,
        "end": 598,
        "async": false,
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
                "operator": "||",
                "left": {
                  "type": "Identifier",
                  "start": 565,
                  "end": 577,
                  "decorators": [],
                  "name": "optionalEnum",
                  "optional": false
                },
                "right": {
                  "type": "MemberExpression",
                  "start": 581,
                  "end": 595,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 581,
                    "end": 593,
                    "decorators": [],
                    "name": "MyStringEnum",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 594,
                    "end": 595,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 521,
          "end": 524,
          "decorators": [],
          "name": "fn5",
          "optional": false
        },
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
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 600,
      "end": 711,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 607,
        "end": 711,
        "async": false,
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
                "operator": "||",
                "left": {
                  "type": "Identifier",
                  "start": 669,
                  "end": 681,
                  "decorators": [],
                  "name": "optionalEnum",
                  "optional": false
                },
                "right": {
                  "type": "MemberExpression",
                  "start": 685,
                  "end": 708,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 685,
                    "end": 706,
                    "decorators": [],
                    "name": "MyStringEnumWithEmpty",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 707,
                    "end": 708,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 616,
          "end": 619,
          "decorators": [],
          "name": "fn6",
          "optional": false
        },
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
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

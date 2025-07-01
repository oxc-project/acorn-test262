__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 11
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
            },
            "initializer": null,
            "computed": false,
            "start": 16,
            "end": 17
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "initializer": null,
            "computed": false,
            "start": 21,
            "end": 22
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 27
            },
            "initializer": null,
            "computed": false,
            "start": 26,
            "end": 27
          }
        ],
        "start": 12,
        "end": 30
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyStringEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 49
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 55
            },
            "initializer": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 58,
              "end": 61
            },
            "computed": false,
            "start": 54,
            "end": 61
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 66
            },
            "initializer": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 69,
              "end": 72
            },
            "computed": false,
            "start": 65,
            "end": 72
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 77
            },
            "initializer": {
              "type": "Literal",
              "value": "c",
              "raw": "\"c\"",
              "start": 80,
              "end": 83
            },
            "computed": false,
            "start": 76,
            "end": 83
          }
        ],
        "start": 50,
        "end": 86
      },
      "const": false,
      "declare": false,
      "start": 32,
      "end": 86
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyStringEnumWithEmpty",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 114
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 120
            },
            "initializer": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 123,
              "end": 125
            },
            "computed": false,
            "start": 119,
            "end": 125
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 130
            },
            "initializer": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 133,
              "end": 136
            },
            "computed": false,
            "start": 129,
            "end": 136
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 141
            },
            "initializer": {
              "type": "Literal",
              "value": "c",
              "raw": "\"c\"",
              "start": 144,
              "end": 147
            },
            "computed": false,
            "start": 140,
            "end": 147
          }
        ],
        "start": 115,
        "end": 150
      },
      "const": false,
      "declare": false,
      "start": 88,
      "end": 150
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 170
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "optionalEnum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyEnum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 185,
                      "end": 191
                    },
                    "typeArguments": null,
                    "start": 185,
                    "end": 191
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 194,
                    "end": 203
                  }
                ],
                "start": 185,
                "end": 203
              },
              "start": 183,
              "end": 203
            },
            "start": 171,
            "end": 203
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optionalEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 216,
                  "end": 228
                },
                "operator": "??",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 232,
                    "end": 238
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 239,
                    "end": 240
                  },
                  "optional": false,
                  "computed": false,
                  "start": 232,
                  "end": 240
                },
                "start": 216,
                "end": 240
              },
              "start": 209,
              "end": 241
            }
          ],
          "start": 205,
          "end": 243
        },
        "expression": false,
        "start": 159,
        "end": 243
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 152,
      "end": 243
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn2",
          "optional": false,
          "typeAnnotation": null,
          "start": 261,
          "end": 264
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "optionalEnum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyEnum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 279,
                      "end": 285
                    },
                    "typeArguments": null,
                    "start": 279,
                    "end": 285
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 288,
                    "end": 297
                  }
                ],
                "start": 279,
                "end": 297
              },
              "start": 277,
              "end": 297
            },
            "start": 265,
            "end": 297
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optionalEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 310,
                  "end": 322
                },
                "operator": "||",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 326,
                    "end": 332
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 333,
                    "end": 334
                  },
                  "optional": false,
                  "computed": false,
                  "start": 326,
                  "end": 334
                },
                "start": 310,
                "end": 334
              },
              "start": 303,
              "end": 335
            }
          ],
          "start": 299,
          "end": 337
        },
        "expression": false,
        "start": 252,
        "end": 337
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 245,
      "end": 337
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn3",
          "optional": false,
          "typeAnnotation": null,
          "start": 355,
          "end": 358
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "optionalEnum",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 374,
                  "end": 380
                },
                "typeArguments": null,
                "start": 374,
                "end": 380
              },
              "start": 372,
              "end": 380
            },
            "start": 359,
            "end": 380
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optionalEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 393,
                  "end": 405
                },
                "operator": "??",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 409,
                    "end": 415
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 416,
                    "end": 417
                  },
                  "optional": false,
                  "computed": false,
                  "start": 409,
                  "end": 417
                },
                "start": 393,
                "end": 417
              },
              "start": 386,
              "end": 418
            }
          ],
          "start": 382,
          "end": 420
        },
        "expression": false,
        "start": 346,
        "end": 420
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 339,
      "end": 420
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 438,
          "end": 441
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "optionalEnum",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 457,
                  "end": 463
                },
                "typeArguments": null,
                "start": 457,
                "end": 463
              },
              "start": 455,
              "end": 463
            },
            "start": 442,
            "end": 463
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optionalEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 476,
                  "end": 488
                },
                "operator": "||",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 492,
                    "end": 498
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 499,
                    "end": 500
                  },
                  "optional": false,
                  "computed": false,
                  "start": 492,
                  "end": 500
                },
                "start": 476,
                "end": 500
              },
              "start": 469,
              "end": 501
            }
          ],
          "start": 465,
          "end": 503
        },
        "expression": false,
        "start": 429,
        "end": 503
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 422,
      "end": 503
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn5",
          "optional": false,
          "typeAnnotation": null,
          "start": 521,
          "end": 524
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "optionalEnum",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyStringEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 540,
                  "end": 552
                },
                "typeArguments": null,
                "start": 540,
                "end": 552
              },
              "start": 538,
              "end": 552
            },
            "start": 525,
            "end": 552
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optionalEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 565,
                  "end": 577
                },
                "operator": "||",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyStringEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 581,
                    "end": 593
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 594,
                    "end": 595
                  },
                  "optional": false,
                  "computed": false,
                  "start": 581,
                  "end": 595
                },
                "start": 565,
                "end": 595
              },
              "start": 558,
              "end": 596
            }
          ],
          "start": 554,
          "end": 598
        },
        "expression": false,
        "start": 512,
        "end": 598
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 505,
      "end": 598
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn6",
          "optional": false,
          "typeAnnotation": null,
          "start": 616,
          "end": 619
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "optionalEnum",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyStringEnumWithEmpty",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 635,
                  "end": 656
                },
                "typeArguments": null,
                "start": 635,
                "end": 656
              },
              "start": 633,
              "end": 656
            },
            "start": 620,
            "end": 656
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optionalEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 669,
                  "end": 681
                },
                "operator": "||",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyStringEnumWithEmpty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 685,
                    "end": 706
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 707,
                    "end": 708
                  },
                  "optional": false,
                  "computed": false,
                  "start": 685,
                  "end": 708
                },
                "start": 669,
                "end": 708
              },
              "start": 662,
              "end": 709
            }
          ],
          "start": 658,
          "end": 711
        },
        "expression": false,
        "start": 607,
        "end": 711
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 600,
      "end": 711
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 711
}
```

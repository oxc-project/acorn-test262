__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item1",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 17
            },
            "typeArguments": null,
            "start": 12,
            "end": 17
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item2",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 25
            },
            "typeArguments": null,
            "start": 20,
            "end": 25
          }
        ],
        "start": 12,
        "end": 25
      },
      "declare": false,
      "start": 0,
      "end": 26
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 42
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 52
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 54,
                "end": 61
              },
              "start": 52,
              "end": 61
            },
            "accessibility": null,
            "static": false,
            "start": 49,
            "end": 62
          }
        ],
        "start": 43,
        "end": 64
      },
      "declare": false,
      "start": 28,
      "end": 64
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item1",
        "optional": false,
        "typeAnnotation": null,
        "start": 76,
        "end": 81
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 94
          },
          "typeArguments": null,
          "start": 90,
          "end": 94
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 105
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 107,
                  "end": 110
                },
                "start": 107,
                "end": 110
              },
              "start": 105,
              "end": 110
            },
            "accessibility": null,
            "static": false,
            "start": 101,
            "end": 111
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 119
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 121,
                    "end": 127
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 130,
                    "end": 139
                  }
                ],
                "start": 121,
                "end": 139
              },
              "start": 119,
              "end": 139
            },
            "accessibility": null,
            "static": false,
            "start": 116,
            "end": 140
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 148
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 150,
                "end": 157
              },
              "start": 148,
              "end": 157
            },
            "accessibility": null,
            "static": false,
            "start": 145,
            "end": 158
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "qux",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 166
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 168,
                  "end": 172
                },
                "start": 168,
                "end": 172
              },
              "start": 166,
              "end": 172
            },
            "accessibility": null,
            "static": false,
            "start": 163,
            "end": 173
          }
        ],
        "start": 95,
        "end": 175
      },
      "declare": false,
      "start": 66,
      "end": 175
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item2",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 192
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 201,
            "end": 205
          },
          "typeArguments": null,
          "start": 201,
          "end": 205
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 216
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 218,
                  "end": 221
                },
                "start": 218,
                "end": 221
              },
              "start": 216,
              "end": 221
            },
            "accessibility": null,
            "static": false,
            "start": 212,
            "end": 222
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 230
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 232,
                    "end": 238
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 241,
                    "end": 250
                  }
                ],
                "start": 232,
                "end": 250
              },
              "start": 230,
              "end": 250
            },
            "accessibility": null,
            "static": false,
            "start": 227,
            "end": 251
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 256,
              "end": 259
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 261,
                "end": 268
              },
              "start": 259,
              "end": 268
            },
            "accessibility": null,
            "static": false,
            "start": 256,
            "end": 269
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "qux",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 277
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 279,
                  "end": 284
                },
                "start": 279,
                "end": 284
              },
              "start": 277,
              "end": 284
            },
            "accessibility": null,
            "static": false,
            "start": 274,
            "end": 285
          }
        ],
        "start": 206,
        "end": 287
      },
      "declare": false,
      "start": 177,
      "end": 287
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "goo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 298,
        "end": 302
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 306,
                "end": 310
              },
              "typeArguments": null,
              "start": 306,
              "end": 310
            },
            "start": 304,
            "end": 310
          },
          "start": 303,
          "end": 310
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 322,
                    "end": 323
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 324,
                    "end": 328
                  },
                  "optional": false,
                  "computed": false,
                  "start": 322,
                  "end": 328
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 333,
                  "end": 336
                },
                "start": 322,
                "end": 336
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 340,
                    "end": 341
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 342,
                    "end": 345
                  },
                  "optional": false,
                  "computed": false,
                  "start": 340,
                  "end": 345
                },
                "operator": "!==",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 350,
                  "end": 359
                },
                "start": 340,
                "end": 359
              },
              "start": 322,
              "end": 359
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 371,
                        "end": 372
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 373,
                        "end": 376
                      },
                      "optional": false,
                      "computed": false,
                      "start": 371,
                      "end": 376
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 377,
                      "end": 383
                    },
                    "optional": false,
                    "computed": false,
                    "start": 371,
                    "end": 383
                  },
                  "directive": null,
                  "start": 371,
                  "end": 384
                }
              ],
              "start": 361,
              "end": 390
            },
            "alternate": null,
            "start": 318,
            "end": 390
          }
        ],
        "start": 312,
        "end": 392
      },
      "expression": false,
      "start": 289,
      "end": 392
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "goo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 403,
        "end": 407
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 411,
                "end": 415
              },
              "typeArguments": null,
              "start": 411,
              "end": 415
            },
            "start": 409,
            "end": 415
          },
          "start": 408,
          "end": 415
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 427,
                    "end": 428
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 429,
                    "end": 432
                  },
                  "optional": false,
                  "computed": false,
                  "start": 427,
                  "end": 432
                },
                "operator": "!==",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 437,
                  "end": 446
                },
                "start": 427,
                "end": 446
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 450,
                    "end": 451
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 452,
                    "end": 456
                  },
                  "optional": false,
                  "computed": false,
                  "start": 450,
                  "end": 456
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 461,
                  "end": 464
                },
                "start": 450,
                "end": 464
              },
              "start": 427,
              "end": 464
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 476,
                        "end": 477
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 478,
                        "end": 481
                      },
                      "optional": false,
                      "computed": false,
                      "start": 476,
                      "end": 481
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 482,
                      "end": 488
                    },
                    "optional": false,
                    "computed": false,
                    "start": 476,
                    "end": 488
                  },
                  "directive": null,
                  "start": 476,
                  "end": 489
                }
              ],
              "start": 466,
              "end": 537
            },
            "alternate": null,
            "start": 423,
            "end": 537
          }
        ],
        "start": 417,
        "end": 539
      },
      "expression": false,
      "start": 394,
      "end": 539
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 550,
        "end": 554
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 558,
                "end": 562
              },
              "typeArguments": null,
              "start": 558,
              "end": 562
            },
            "start": 556,
            "end": 562
          },
          "start": 555,
          "end": 562
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 574,
                  "end": 575
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 576,
                  "end": 579
                },
                "optional": false,
                "computed": false,
                "start": 574,
                "end": 579
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 583,
                    "end": 584
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 585,
                    "end": 588
                  },
                  "optional": false,
                  "computed": false,
                  "start": 583,
                  "end": 588
                },
                "operator": "!==",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 593,
                  "end": 602
                },
                "start": 583,
                "end": 602
              },
              "start": 574,
              "end": 602
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 614,
                        "end": 615
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 616,
                        "end": 619
                      },
                      "optional": false,
                      "computed": false,
                      "start": 614,
                      "end": 619
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 620,
                      "end": 626
                    },
                    "optional": false,
                    "computed": false,
                    "start": 614,
                    "end": 626
                  },
                  "directive": null,
                  "start": 614,
                  "end": 627
                }
              ],
              "start": 604,
              "end": 633
            },
            "alternate": null,
            "start": 570,
            "end": 633
          }
        ],
        "start": 564,
        "end": 635
      },
      "expression": false,
      "start": 541,
      "end": 635
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 646,
        "end": 650
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 654,
                "end": 658
              },
              "typeArguments": null,
              "start": 654,
              "end": 658
            },
            "start": 652,
            "end": 658
          },
          "start": 651,
          "end": 658
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 670,
                    "end": 671
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 672,
                    "end": 675
                  },
                  "optional": false,
                  "computed": false,
                  "start": 670,
                  "end": 675
                },
                "operator": "!==",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 680,
                  "end": 689
                },
                "start": 670,
                "end": 689
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 693,
                  "end": 694
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 695,
                  "end": 698
                },
                "optional": false,
                "computed": false,
                "start": 693,
                "end": 698
              },
              "start": 670,
              "end": 698
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 710,
                        "end": 711
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 712,
                        "end": 715
                      },
                      "optional": false,
                      "computed": false,
                      "start": 710,
                      "end": 715
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 716,
                      "end": 722
                    },
                    "optional": false,
                    "computed": false,
                    "start": 710,
                    "end": 722
                  },
                  "directive": null,
                  "start": 710,
                  "end": 723
                }
              ],
              "start": 700,
              "end": 729
            },
            "alternate": null,
            "start": 666,
            "end": 729
          }
        ],
        "start": 660,
        "end": 731
      },
      "expression": false,
      "start": 637,
      "end": 731
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 742,
        "end": 746
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 750,
                "end": 754
              },
              "typeArguments": null,
              "start": 750,
              "end": 754
            },
            "start": 748,
            "end": 754
          },
          "start": 747,
          "end": 754
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 766,
                  "end": 767
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 768,
                  "end": 771
                },
                "optional": false,
                "computed": false,
                "start": 766,
                "end": 771
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 775,
                    "end": 776
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 777,
                    "end": 780
                  },
                  "optional": false,
                  "computed": false,
                  "start": 775,
                  "end": 780
                },
                "operator": "!==",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 785,
                  "end": 794
                },
                "start": 775,
                "end": 794
              },
              "start": 766,
              "end": 794
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 806,
                        "end": 807
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 808,
                        "end": 811
                      },
                      "optional": false,
                      "computed": false,
                      "start": 806,
                      "end": 811
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 812,
                      "end": 818
                    },
                    "optional": false,
                    "computed": false,
                    "start": 806,
                    "end": 818
                  },
                  "directive": null,
                  "start": 806,
                  "end": 819
                }
              ],
              "start": 796,
              "end": 825
            },
            "alternate": null,
            "start": 762,
            "end": 825
          }
        ],
        "start": 756,
        "end": 827
      },
      "expression": false,
      "start": 733,
      "end": 827
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 838,
        "end": 842
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 846,
                "end": 850
              },
              "typeArguments": null,
              "start": 846,
              "end": 850
            },
            "start": 844,
            "end": 850
          },
          "start": 843,
          "end": 850
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 862,
                    "end": 863
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 864,
                    "end": 867
                  },
                  "optional": false,
                  "computed": false,
                  "start": 862,
                  "end": 867
                },
                "operator": "!==",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 872,
                  "end": 881
                },
                "start": 862,
                "end": 881
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 885,
                  "end": 886
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 887,
                  "end": 890
                },
                "optional": false,
                "computed": false,
                "start": 885,
                "end": 890
              },
              "start": 862,
              "end": 890
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 902,
                        "end": 903
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 904,
                        "end": 907
                      },
                      "optional": false,
                      "computed": false,
                      "start": 902,
                      "end": 907
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 908,
                      "end": 914
                    },
                    "optional": false,
                    "computed": false,
                    "start": 902,
                    "end": 914
                  },
                  "directive": null,
                  "start": 902,
                  "end": 915
                }
              ],
              "start": 892,
              "end": 921
            },
            "alternate": null,
            "start": 858,
            "end": 921
          }
        ],
        "start": 852,
        "end": 923
      },
      "expression": false,
      "start": 829,
      "end": 923
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 934,
        "end": 938
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 942,
                "end": 946
              },
              "typeArguments": null,
              "start": 942,
              "end": 946
            },
            "start": 940,
            "end": 946
          },
          "start": 939,
          "end": 946
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 958,
                  "end": 959
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "qux",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 960,
                  "end": 963
                },
                "optional": false,
                "computed": false,
                "start": 958,
                "end": 963
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 967,
                    "end": 968
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 969,
                    "end": 972
                  },
                  "optional": false,
                  "computed": false,
                  "start": 967,
                  "end": 972
                },
                "operator": "!==",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 977,
                  "end": 986
                },
                "start": 967,
                "end": 986
              },
              "start": 958,
              "end": 986
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 998,
                        "end": 999
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1000,
                        "end": 1003
                      },
                      "optional": false,
                      "computed": false,
                      "start": 998,
                      "end": 1003
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1004,
                      "end": 1010
                    },
                    "optional": false,
                    "computed": false,
                    "start": 998,
                    "end": 1010
                  },
                  "directive": null,
                  "start": 998,
                  "end": 1011
                }
              ],
              "start": 988,
              "end": 1017
            },
            "alternate": null,
            "start": 954,
            "end": 1017
          }
        ],
        "start": 948,
        "end": 1019
      },
      "expression": false,
      "start": 925,
      "end": 1019
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1030,
        "end": 1034
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1038,
                "end": 1042
              },
              "typeArguments": null,
              "start": 1038,
              "end": 1042
            },
            "start": 1036,
            "end": 1042
          },
          "start": 1035,
          "end": 1042
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1054,
                    "end": 1055
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1056,
                    "end": 1059
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1054,
                  "end": 1059
                },
                "operator": "!==",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1064,
                  "end": 1073
                },
                "start": 1054,
                "end": 1073
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1077,
                  "end": 1078
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "qux",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1079,
                  "end": 1082
                },
                "optional": false,
                "computed": false,
                "start": 1077,
                "end": 1082
              },
              "start": 1054,
              "end": 1082
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1094,
                        "end": 1095
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1096,
                        "end": 1099
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1094,
                      "end": 1099
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1100,
                      "end": 1106
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1094,
                    "end": 1106
                  },
                  "directive": null,
                  "start": 1094,
                  "end": 1107
                }
              ],
              "start": 1084,
              "end": 1155
            },
            "alternate": null,
            "start": 1050,
            "end": 1155
          }
        ],
        "start": 1044,
        "end": 1157
      },
      "expression": false,
      "start": 1021,
      "end": 1157
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Types",
        "optional": false,
        "typeAnnotation": null,
        "start": 1186,
        "end": 1191
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Str",
              "optional": false,
              "typeAnnotation": null,
              "start": 1194,
              "end": 1197
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1200,
              "end": 1201
            },
            "computed": false,
            "start": 1194,
            "end": 1201
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Num",
              "optional": false,
              "typeAnnotation": null,
              "start": 1203,
              "end": 1206
            },
            "initializer": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 1209,
              "end": 1210
            },
            "computed": false,
            "start": 1203,
            "end": 1210
          }
        ],
        "start": 1192,
        "end": 1212
      },
      "const": false,
      "declare": false,
      "start": 1181,
      "end": 1212
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Instance",
        "optional": false,
        "typeAnnotation": null,
        "start": 1219,
        "end": 1227
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "StrType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1230,
              "end": 1237
            },
            "typeArguments": null,
            "start": 1230,
            "end": 1237
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NumType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1240,
              "end": 1247
            },
            "typeArguments": null,
            "start": 1240,
            "end": 1247
          }
        ],
        "start": 1230,
        "end": 1247
      },
      "declare": false,
      "start": 1214,
      "end": 1248
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StrType",
        "optional": false,
        "typeAnnotation": null,
        "start": 1260,
        "end": 1267
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1274,
              "end": 1278
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Types",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1280,
                    "end": 1285
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Str",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1286,
                    "end": 1289
                  },
                  "start": 1280,
                  "end": 1289
                },
                "typeArguments": null,
                "start": 1280,
                "end": 1289
              },
              "start": 1278,
              "end": 1289
            },
            "accessibility": null,
            "static": false,
            "start": 1274,
            "end": 1290
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 1295,
              "end": 1300
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1302,
                "end": 1308
              },
              "start": 1300,
              "end": 1308
            },
            "accessibility": null,
            "static": false,
            "start": 1295,
            "end": 1309
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 1314,
              "end": 1320
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1322,
                "end": 1328
              },
              "start": 1320,
              "end": 1328
            },
            "accessibility": null,
            "static": false,
            "start": 1314,
            "end": 1329
          }
        ],
        "start": 1268,
        "end": 1331
      },
      "declare": false,
      "start": 1250,
      "end": 1331
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumType",
        "optional": false,
        "typeAnnotation": null,
        "start": 1343,
        "end": 1350
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1357,
              "end": 1361
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Types",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1363,
                    "end": 1368
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Num",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1369,
                    "end": 1372
                  },
                  "start": 1363,
                  "end": 1372
                },
                "typeArguments": null,
                "start": 1363,
                "end": 1372
              },
              "start": 1361,
              "end": 1372
            },
            "accessibility": null,
            "static": false,
            "start": 1357,
            "end": 1373
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 1378,
              "end": 1383
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1385,
                "end": 1391
              },
              "start": 1383,
              "end": 1391
            },
            "accessibility": null,
            "static": false,
            "start": 1378,
            "end": 1392
          }
        ],
        "start": 1351,
        "end": 1394
      },
      "declare": false,
      "start": 1333,
      "end": 1394
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1405,
        "end": 1410
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "inst",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Instance",
                "optional": false,
                "typeAnnotation": null,
                "start": 1417,
                "end": 1425
              },
              "typeArguments": null,
              "start": 1417,
              "end": 1425
            },
            "start": 1415,
            "end": 1425
          },
          "start": 1411,
          "end": 1425
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1440,
              "end": 1444
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "inst",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1464,
                      "end": 1468
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1469,
                      "end": 1473
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1464,
                    "end": 1473
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Types",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1494,
                          "end": 1499
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Str",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1500,
                          "end": 1503
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1494,
                        "end": 1503
                      },
                      "consequent": [
                        {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "inst",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1523,
                                    "end": 1527
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1528,
                                    "end": 1533
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1523,
                                  "end": 1533
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1534,
                                  "end": 1540
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1523,
                                "end": 1540
                              },
                              "directive": null,
                              "start": 1523,
                              "end": 1541
                            },
                            {
                              "type": "BreakStatement",
                              "label": null,
                              "start": 1558,
                              "end": 1564
                            }
                          ],
                          "start": 1505,
                          "end": 1578
                        }
                      ],
                      "start": 1489,
                      "end": 1578
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Types",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1596,
                          "end": 1601
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Num",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1602,
                          "end": 1605
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1596,
                        "end": 1605
                      },
                      "consequent": [
                        {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "inst",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1625,
                                    "end": 1629
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1630,
                                    "end": 1635
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1625,
                                  "end": 1635
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "toExponential",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1636,
                                  "end": 1649
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1625,
                                "end": 1649
                              },
                              "directive": null,
                              "start": 1625,
                              "end": 1650
                            },
                            {
                              "type": "BreakStatement",
                              "label": null,
                              "start": 1667,
                              "end": 1673
                            }
                          ],
                          "start": 1607,
                          "end": 1687
                        }
                      ],
                      "start": 1591,
                      "end": 1687
                    }
                  ],
                  "start": 1456,
                  "end": 1697
                }
              ],
              "start": 1446,
              "end": 1703
            },
            "start": 1433,
            "end": 1703
          }
        ],
        "start": 1427,
        "end": 1705
      },
      "expression": false,
      "start": 1396,
      "end": 1705
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1735,
            "end": 1736
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1744,
                    "end": 1750
                  },
                  "start": 1742,
                  "end": 1750
                },
                "start": 1740,
                "end": 1750
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1756,
                    "end": 1762
                  },
                  "start": 1754,
                  "end": 1762
                },
                "start": 1752,
                "end": 1762
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1765,
                "end": 1769
              },
              "start": 1763,
              "end": 1769
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 1773,
              "end": 1775
            },
            "id": null,
            "generator": false,
            "start": 1739,
            "end": 1775
          },
          "definite": false,
          "start": 1735,
          "end": 1775
        }
      ],
      "declare": false,
      "start": 1729,
      "end": 1776
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 1788,
        "end": 1789
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1794,
              "end": 1795
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1798,
                "end": 1804
              },
              "start": 1796,
              "end": 1804
            },
            "accessibility": null,
            "static": false,
            "start": 1794,
            "end": 1805
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1808,
              "end": 1809
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1812,
                "end": 1818
              },
              "start": 1810,
              "end": 1818
            },
            "accessibility": null,
            "static": false,
            "start": 1808,
            "end": 1819
          }
        ],
        "start": 1790,
        "end": 1821
      },
      "declare": false,
      "start": 1778,
      "end": 1821
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 1833,
        "end": 1834
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1839,
              "end": 1840
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1842,
                "end": 1848
              },
              "start": 1840,
              "end": 1848
            },
            "accessibility": null,
            "static": false,
            "start": 1839,
            "end": 1849
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1852,
              "end": 1853
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1855,
                "end": 1861
              },
              "start": 1853,
              "end": 1861
            },
            "accessibility": null,
            "static": false,
            "start": 1852,
            "end": 1862
          }
        ],
        "start": 1835,
        "end": 1864
      },
      "declare": false,
      "start": 1823,
      "end": 1864
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U",
        "optional": false,
        "typeAnnotation": null,
        "start": 1871,
        "end": 1872
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1875,
              "end": 1876
            },
            "typeArguments": null,
            "start": 1875,
            "end": 1876
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1879,
              "end": 1880
            },
            "typeArguments": null,
            "start": 1879,
            "end": 1880
          }
        ],
        "start": 1875,
        "end": 1880
      },
      "declare": false,
      "start": 1866,
      "end": 1881
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1892,
                  "end": 1893
                },
                "typeArguments": null,
                "start": 1892,
                "end": 1893
              },
              "start": 1890,
              "end": 1893
            },
            "start": 1889,
            "end": 1893
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 1896,
              "end": 1898
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1902,
              "end": 1905
            },
            "start": 1896,
            "end": 1905
          },
          "definite": false,
          "start": 1889,
          "end": 1905
        }
      ],
      "declare": false,
      "start": 1883,
      "end": 1906
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 1908,
              "end": 1909
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1910,
              "end": 1911
            },
            "optional": false,
            "computed": false,
            "start": 1908,
            "end": 1911
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 1915,
              "end": 1916
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1917,
              "end": 1918
            },
            "optional": false,
            "computed": false,
            "start": 1915,
            "end": 1918
          },
          "start": 1908,
          "end": 1918
        },
        "operator": "&&",
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1922,
            "end": 1923
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null,
                "start": 1924,
                "end": 1925
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1926,
                "end": 1927
              },
              "optional": false,
              "computed": false,
              "start": 1924,
              "end": 1927
            },
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null,
                "start": 1929,
                "end": 1930
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1931,
                "end": 1932
              },
              "optional": false,
              "computed": false,
              "start": 1929,
              "end": 1932
            }
          ],
          "optional": false,
          "start": 1922,
          "end": 1933
        },
        "start": 1908,
        "end": 1933
      },
      "directive": null,
      "start": 1908,
      "end": 1934
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 1936,
              "end": 1937
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1938,
              "end": 1939
            },
            "optional": false,
            "computed": false,
            "start": 1936,
            "end": 1939
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 1943,
              "end": 1944
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1945,
              "end": 1946
            },
            "optional": false,
            "computed": false,
            "start": 1943,
            "end": 1946
          },
          "start": 1936,
          "end": 1946
        },
        "operator": "&&",
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1950,
            "end": 1951
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null,
                "start": 1952,
                "end": 1953
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1954,
                "end": 1955
              },
              "optional": false,
              "computed": false,
              "start": 1952,
              "end": 1955
            },
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null,
                "start": 1957,
                "end": 1958
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1959,
                "end": 1960
              },
              "optional": false,
              "computed": false,
              "start": 1957,
              "end": 1960
            }
          ],
          "optional": false,
          "start": 1950,
          "end": 1961
        },
        "start": 1936,
        "end": 1961
      },
      "directive": null,
      "start": 1936,
      "end": 1962
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Additive",
        "optional": false,
        "typeAnnotation": null,
        "start": 1991,
        "end": 1999
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "+",
              "raw": "'+'",
              "start": 2002,
              "end": 2005
            },
            "start": 2002,
            "end": 2005
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "-",
              "raw": "'-'",
              "start": 2008,
              "end": 2011
            },
            "start": 2008,
            "end": 2011
          }
        ],
        "start": 2002,
        "end": 2011
      },
      "declare": false,
      "start": 1986,
      "end": 2012
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Multiplicative",
        "optional": false,
        "typeAnnotation": null,
        "start": 2018,
        "end": 2032
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "*",
              "raw": "'*'",
              "start": 2035,
              "end": 2038
            },
            "start": 2035,
            "end": 2038
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "/",
              "raw": "'/'",
              "start": 2041,
              "end": 2044
            },
            "start": 2041,
            "end": 2044
          }
        ],
        "start": 2035,
        "end": 2044
      },
      "declare": false,
      "start": 2013,
      "end": 2045
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AdditiveObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 2057,
        "end": 2068
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null,
              "start": 2075,
              "end": 2078
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Additive",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2080,
                  "end": 2088
                },
                "typeArguments": null,
                "start": 2080,
                "end": 2088
              },
              "start": 2078,
              "end": 2088
            },
            "accessibility": null,
            "static": false,
            "start": 2075,
            "end": 2088
          }
        ],
        "start": 2069,
        "end": 2090
      },
      "declare": false,
      "start": 2047,
      "end": 2090
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MultiplicativeObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 2102,
        "end": 2119
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null,
              "start": 2126,
              "end": 2129
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Multiplicative",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2131,
                  "end": 2145
                },
                "typeArguments": null,
                "start": 2131,
                "end": 2145
              },
              "start": 2129,
              "end": 2145
            },
            "accessibility": null,
            "static": false,
            "start": 2126,
            "end": 2145
          }
        ],
        "start": 2120,
        "end": 2147
      },
      "declare": false,
      "start": 2092,
      "end": 2147
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 2154,
        "end": 2157
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AdditiveObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 2160,
              "end": 2171
            },
            "typeArguments": null,
            "start": 2160,
            "end": 2171
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MultiplicativeObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 2174,
              "end": 2191
            },
            "typeArguments": null,
            "start": 2174,
            "end": 2191
          }
        ],
        "start": 2160,
        "end": 2191
      },
      "declare": false,
      "start": 2149,
      "end": 2191
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 2209,
          "end": 2212
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2218,
                  "end": 2221
                },
                "typeArguments": null,
                "start": 2218,
                "end": 2221
              },
              "start": 2216,
              "end": 2221
            },
            "start": 2213,
            "end": 2221
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "SwitchStatement",
              "discriminant": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2237,
                  "end": 2240
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2241,
                  "end": 2244
                },
                "optional": false,
                "computed": false,
                "start": 2237,
                "end": 2244
              },
              "cases": [
                {
                  "type": "SwitchCase",
                  "test": {
                    "type": "Literal",
                    "value": "+",
                    "raw": "'+'",
                    "start": 2261,
                    "end": 2264
                  },
                  "consequent": [
                    {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "onlyPlus",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2280,
                              "end": 2288
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "obj",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2289,
                                  "end": 2292
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2293,
                                  "end": 2296
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2289,
                                "end": 2296
                              }
                            ],
                            "optional": false,
                            "start": 2280,
                            "end": 2297
                          },
                          "directive": null,
                          "start": 2280,
                          "end": 2298
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": null,
                          "start": 2311,
                          "end": 2318
                        }
                      ],
                      "start": 2266,
                      "end": 2328
                    }
                  ],
                  "start": 2256,
                  "end": 2328
                }
              ],
              "start": 2229,
              "end": 2334
            }
          ],
          "start": 2223,
          "end": 2336
        },
        "expression": false,
        "start": 2200,
        "end": 2336
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2193,
      "end": 2336
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "onlyPlus",
        "optional": false,
        "typeAnnotation": null,
        "start": 2347,
        "end": 2355
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "+",
                "raw": "'+'",
                "start": 2361,
                "end": 2364
              },
              "start": 2361,
              "end": 2364
            },
            "start": 2359,
            "end": 2364
          },
          "start": 2356,
          "end": 2364
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": null,
              "start": 2377,
              "end": 2380
            },
            "start": 2370,
            "end": 2381
          }
        ],
        "start": 2366,
        "end": 2383
      },
      "expression": false,
      "start": 2338,
      "end": 2383
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "never",
        "optional": false,
        "typeAnnotation": null,
        "start": 2424,
        "end": 2429
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 2437,
              "end": 2442
            },
            "start": 2435,
            "end": 2442
          },
          "start": 2430,
          "end": 2442
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 2445,
          "end": 2450
        },
        "start": 2443,
        "end": 2450
      },
      "body": null,
      "expression": false,
      "start": 2407,
      "end": 2451
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BarEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 2464,
        "end": 2471
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2478,
              "end": 2482
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 2485,
              "end": 2486
            },
            "computed": false,
            "start": 2478,
            "end": 2486
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2492,
              "end": 2496
            },
            "initializer": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 2499,
              "end": 2500
            },
            "computed": false,
            "start": 2492,
            "end": 2500
          }
        ],
        "start": 2472,
        "end": 2503
      },
      "const": true,
      "declare": false,
      "start": 2453,
      "end": 2503
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnionOfBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 2510,
        "end": 2520
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeBar1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2523,
              "end": 2531
            },
            "typeArguments": null,
            "start": 2523,
            "end": 2531
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeBar2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2534,
              "end": 2542
            },
            "typeArguments": null,
            "start": 2534,
            "end": 2542
          }
        ],
        "start": 2523,
        "end": 2542
      },
      "declare": false,
      "start": 2505,
      "end": 2543
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeBar1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2549,
        "end": 2557
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 2562,
              "end": 2566
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BarEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2568,
                    "end": 2575
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2576,
                    "end": 2580
                  },
                  "start": 2568,
                  "end": 2580
                },
                "typeArguments": null,
                "start": 2568,
                "end": 2580
              },
              "start": 2566,
              "end": 2580
            },
            "accessibility": null,
            "static": false,
            "start": 2562,
            "end": 2580
          }
        ],
        "start": 2560,
        "end": 2582
      },
      "declare": false,
      "start": 2544,
      "end": 2583
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeBar2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2589,
        "end": 2597
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 2602,
              "end": 2606
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BarEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2608,
                    "end": 2615
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2616,
                    "end": 2620
                  },
                  "start": 2608,
                  "end": 2620
                },
                "typeArguments": null,
                "start": 2608,
                "end": 2620
              },
              "start": 2606,
              "end": 2620
            },
            "accessibility": null,
            "static": false,
            "start": 2602,
            "end": 2620
          }
        ],
        "start": 2600,
        "end": 2622
      },
      "declare": false,
      "start": 2584,
      "end": 2623
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2634,
        "end": 2639
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 2647,
                "end": 2654
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "UnionOfBar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2655,
                      "end": 2665
                    },
                    "typeArguments": null,
                    "start": 2655,
                    "end": 2665
                  }
                ],
                "start": 2654,
                "end": 2666
              },
              "start": 2647,
              "end": 2666
            },
            "start": 2645,
            "end": 2666
          },
          "start": 2640,
          "end": 2666
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2678,
                  "end": 2683
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2684,
                  "end": 2688
                },
                "optional": false,
                "computed": false,
                "start": 2678,
                "end": 2688
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2693,
                "end": 2702
              },
              "start": 2678,
              "end": 2702
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2722,
                      "end": 2727
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2728,
                      "end": 2732
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2722,
                    "end": 2732
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "BarEnum",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2753,
                          "end": 2760
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2761,
                          "end": 2765
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2753,
                        "end": 2765
                      },
                      "consequent": [
                        {
                          "type": "BreakStatement",
                          "label": null,
                          "start": 2783,
                          "end": 2789
                        }
                      ],
                      "start": 2748,
                      "end": 2789
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "BarEnum",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2807,
                          "end": 2814
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2815,
                          "end": 2819
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2807,
                        "end": 2819
                      },
                      "consequent": [
                        {
                          "type": "BreakStatement",
                          "label": null,
                          "start": 2837,
                          "end": 2843
                        }
                      ],
                      "start": 2802,
                      "end": 2843
                    },
                    {
                      "type": "SwitchCase",
                      "test": null,
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "never",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2881,
                              "end": 2886
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2887,
                                  "end": 2892
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2893,
                                  "end": 2897
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2887,
                                "end": 2897
                              }
                            ],
                            "optional": false,
                            "start": 2881,
                            "end": 2898
                          },
                          "directive": null,
                          "start": 2881,
                          "end": 2899
                        }
                      ],
                      "start": 2856,
                      "end": 2899
                    }
                  ],
                  "start": 2714,
                  "end": 2909
                }
              ],
              "start": 2704,
              "end": 2915
            },
            "alternate": null,
            "start": 2674,
            "end": 2915
          }
        ],
        "start": 2668,
        "end": 2917
      },
      "expression": false,
      "start": 2625,
      "end": 2917
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeA",
        "optional": false,
        "typeAnnotation": null,
        "start": 2951,
        "end": 2956
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2963,
              "end": 2967
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "TypeA",
                  "raw": "\"TypeA\"",
                  "start": 2969,
                  "end": 2976
                },
                "start": 2969,
                "end": 2976
              },
              "start": 2967,
              "end": 2976
            },
            "accessibility": null,
            "static": false,
            "start": 2963,
            "end": 2977
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2982,
              "end": 2988
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "Cool stuff!",
                  "raw": "\"Cool stuff!\"",
                  "start": 2990,
                  "end": 3003
                },
                "start": 2990,
                "end": 3003
              },
              "start": 2988,
              "end": 3003
            },
            "accessibility": null,
            "static": false,
            "start": 2982,
            "end": 3004
          }
        ],
        "start": 2957,
        "end": 3006
      },
      "declare": false,
      "start": 2941,
      "end": 3006
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeB",
        "optional": false,
        "typeAnnotation": null,
        "start": 3018,
        "end": 3023
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3030,
              "end": 3034
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "TypeB",
                  "raw": "\"TypeB\"",
                  "start": 3036,
                  "end": 3043
                },
                "start": 3036,
                "end": 3043
              },
              "start": 3034,
              "end": 3043
            },
            "accessibility": null,
            "static": false,
            "start": 3030,
            "end": 3044
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3049,
              "end": 3055
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 3057,
                  "end": 3058
                },
                "start": 3057,
                "end": 3058
              },
              "start": 3055,
              "end": 3058
            },
            "accessibility": null,
            "static": false,
            "start": 3049,
            "end": 3059
          }
        ],
        "start": 3024,
        "end": 3061
      },
      "declare": false,
      "start": 3008,
      "end": 3061
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Type",
        "optional": false,
        "typeAnnotation": null,
        "start": 3068,
        "end": 3072
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeA",
              "optional": false,
              "typeAnnotation": null,
              "start": 3075,
              "end": 3080
            },
            "typeArguments": null,
            "start": 3075,
            "end": 3080
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeB",
              "optional": false,
              "typeAnnotation": null,
              "start": 3083,
              "end": 3088
            },
            "typeArguments": null,
            "start": 3083,
            "end": 3088
          }
        ],
        "start": 3075,
        "end": 3088
      },
      "declare": false,
      "start": 3063,
      "end": 3089
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isType",
        "optional": false,
        "typeAnnotation": null,
        "start": 3108,
        "end": 3114
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 3118,
              "end": 3125
            },
            "start": 3116,
            "end": 3125
          },
          "start": 3115,
          "end": 3125
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 3128,
            "end": 3129
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Type",
                "optional": false,
                "typeAnnotation": null,
                "start": 3133,
                "end": 3137
              },
              "typeArguments": null,
              "start": 3133,
              "end": 3137
            },
            "start": 3133,
            "end": 3137
          },
          "start": 3128,
          "end": 3137
        },
        "start": 3126,
        "end": 3137
      },
      "body": null,
      "expression": false,
      "start": 3091,
      "end": 3138
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WorksProperly",
        "optional": false,
        "typeAnnotation": null,
        "start": 3149,
        "end": 3162
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Type",
                "optional": false,
                "typeAnnotation": null,
                "start": 3169,
                "end": 3173
              },
              "typeArguments": null,
              "start": 3169,
              "end": 3173
            },
            "start": 3167,
            "end": 3173
          },
          "start": 3163,
          "end": 3173
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3185,
                  "end": 3189
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3190,
                  "end": 3194
                },
                "optional": false,
                "computed": false,
                "start": 3185,
                "end": 3194
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "TypeA",
                "raw": "\"TypeA\"",
                "start": 3199,
                "end": 3206
              },
              "start": 3185,
              "end": 3206
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3224,
                        "end": 3230
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3233,
                          "end": 3237
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Value1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3238,
                          "end": 3244
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3233,
                        "end": 3244
                      },
                      "definite": false,
                      "start": 3224,
                      "end": 3244
                    }
                  ],
                  "declare": false,
                  "start": 3218,
                  "end": 3245
                }
              ],
              "start": 3208,
              "end": 3251
            },
            "alternate": null,
            "start": 3181,
            "end": 3251
          }
        ],
        "start": 3175,
        "end": 3253
      },
      "expression": false,
      "start": 3140,
      "end": 3253
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DoesNotWork",
        "optional": false,
        "typeAnnotation": null,
        "start": 3264,
        "end": 3275
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 3282,
              "end": 3289
            },
            "start": 3280,
            "end": 3289
          },
          "start": 3276,
          "end": 3289
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isType",
                "optional": false,
                "typeAnnotation": null,
                "start": 3301,
                "end": 3307
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3308,
                  "end": 3312
                }
              ],
              "optional": false,
              "start": 3301,
              "end": 3313
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3329,
                        "end": 3333
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3334,
                        "end": 3338
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3329,
                      "end": 3338
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "TypeA",
                      "raw": "\"TypeA\"",
                      "start": 3343,
                      "end": 3350
                    },
                    "start": 3329,
                    "end": 3350
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3372,
                              "end": 3378
                            },
                            "init": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "data",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3381,
                                "end": 3385
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Value1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3386,
                                "end": 3392
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3381,
                              "end": 3392
                            },
                            "definite": false,
                            "start": 3372,
                            "end": 3392
                          }
                        ],
                        "declare": false,
                        "start": 3366,
                        "end": 3393
                      }
                    ],
                    "start": 3352,
                    "end": 3403
                  },
                  "alternate": null,
                  "start": 3325,
                  "end": 3403
                }
              ],
              "start": 3315,
              "end": 3409
            },
            "alternate": null,
            "start": 3297,
            "end": 3409
          }
        ],
        "start": 3291,
        "end": 3411
      },
      "expression": false,
      "start": 3255,
      "end": 3411
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestA",
        "optional": false,
        "typeAnnotation": null,
        "start": 3440,
        "end": 3445
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 3454,
              "end": 3458
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "testA",
                  "raw": "'testA'",
                  "start": 3460,
                  "end": 3467
                },
                "start": 3460,
                "end": 3467
              },
              "start": 3458,
              "end": 3467
            },
            "accessibility": null,
            "static": false,
            "start": 3454,
            "end": 3468
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bananas",
              "optional": false,
              "typeAnnotation": null,
              "start": 3473,
              "end": 3480
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 3482,
                  "end": 3483
                },
                "start": 3482,
                "end": 3483
              },
              "start": 3480,
              "end": 3483
            },
            "accessibility": null,
            "static": false,
            "start": 3473,
            "end": 3484
          }
        ],
        "start": 3448,
        "end": 3486
      },
      "declare": false,
      "start": 3435,
      "end": 3486
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestB",
        "optional": false,
        "typeAnnotation": null,
        "start": 3495,
        "end": 3500
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 3509,
              "end": 3513
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "testB",
                  "raw": "'testB'",
                  "start": 3515,
                  "end": 3522
                },
                "start": 3515,
                "end": 3522
              },
              "start": 3513,
              "end": 3522
            },
            "accessibility": null,
            "static": false,
            "start": 3509,
            "end": 3523
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "apples",
              "optional": false,
              "typeAnnotation": null,
              "start": 3528,
              "end": 3534
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 3536,
                  "end": 3537
                },
                "start": 3536,
                "end": 3537
              },
              "start": 3534,
              "end": 3537
            },
            "accessibility": null,
            "static": false,
            "start": 3528,
            "end": 3538
          }
        ],
        "start": 3503,
        "end": 3540
      },
      "declare": false,
      "start": 3490,
      "end": 3540
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AllTests",
        "optional": false,
        "typeAnnotation": null,
        "start": 3549,
        "end": 3557
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TestA",
              "optional": false,
              "typeAnnotation": null,
              "start": 3560,
              "end": 3565
            },
            "typeArguments": null,
            "start": 3560,
            "end": 3565
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TestB",
              "optional": false,
              "typeAnnotation": null,
              "start": 3568,
              "end": 3573
            },
            "typeArguments": null,
            "start": 3568,
            "end": 3573
          }
        ],
        "start": 3560,
        "end": 3573
      },
      "declare": false,
      "start": 3544,
      "end": 3574
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MapOfAllTests",
        "optional": false,
        "typeAnnotation": null,
        "start": 3581,
        "end": 3594
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 3597,
          "end": 3603
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 3604,
              "end": 3610
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AllTests",
                "optional": false,
                "typeAnnotation": null,
                "start": 3612,
                "end": 3620
              },
              "typeArguments": null,
              "start": 3612,
              "end": 3620
            }
          ],
          "start": 3603,
          "end": 3621
        },
        "start": 3597,
        "end": 3621
      },
      "declare": false,
      "start": 3576,
      "end": 3622
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "doTestingStuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 3630,
            "end": 3644
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "mapOfTests",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MapOfAllTests",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3660,
                      "end": 3673
                    },
                    "typeArguments": null,
                    "start": 3660,
                    "end": 3673
                  },
                  "start": 3658,
                  "end": 3673
                },
                "start": 3648,
                "end": 3673
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ids",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 3680,
                      "end": 3686
                    },
                    "start": 3680,
                    "end": 3688
                  },
                  "start": 3678,
                  "end": 3688
                },
                "start": 3675,
                "end": 3688
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ids",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3699,
                        "end": 3702
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "forEach",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3703,
                        "end": 3710
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3699,
                      "end": 3710
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3711,
                            "end": 3713
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "VariableDeclaration",
                              "kind": "let",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "test",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3731,
                                    "end": 3735
                                  },
                                  "init": null,
                                  "definite": false,
                                  "start": 3731,
                                  "end": 3735
                                }
                              ],
                              "declare": false,
                              "start": 3727,
                              "end": 3736
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "test",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3745,
                                  "end": 3749
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "mapOfTests",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3752,
                                    "end": 3762
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "id",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3763,
                                    "end": 3765
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 3752,
                                  "end": 3766
                                },
                                "start": 3745,
                                "end": 3766
                              },
                              "directive": null,
                              "start": 3745,
                              "end": 3767
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "test",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3780,
                                    "end": 3784
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3785,
                                    "end": 3789
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3780,
                                  "end": 3789
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": "testA",
                                  "raw": "'testA'",
                                  "start": 3794,
                                  "end": 3801
                                },
                                "start": 3780,
                                "end": 3801
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "console",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3817,
                                          "end": 3824
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "log",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3825,
                                          "end": 3828
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 3817,
                                        "end": 3828
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "test",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3829,
                                            "end": 3833
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "bananas",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3834,
                                            "end": 3841
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 3829,
                                          "end": 3841
                                        }
                                      ],
                                      "optional": false,
                                      "start": 3817,
                                      "end": 3842
                                    },
                                    "directive": null,
                                    "start": 3817,
                                    "end": 3843
                                  }
                                ],
                                "start": 3803,
                                "end": 3853
                              },
                              "alternate": null,
                              "start": 3776,
                              "end": 3853
                            },
                            {
                              "type": "SwitchStatement",
                              "discriminant": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "test",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3870,
                                  "end": 3874
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3875,
                                  "end": 3879
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3870,
                                "end": 3879
                              },
                              "cases": [
                                {
                                  "type": "SwitchCase",
                                  "test": {
                                    "type": "Literal",
                                    "value": "testA",
                                    "raw": "'testA'",
                                    "start": 3900,
                                    "end": 3907
                                  },
                                  "consequent": [
                                    {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ExpressionStatement",
                                          "expression": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "console",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3927,
                                                "end": 3934
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "log",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3935,
                                                "end": 3938
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 3927,
                                              "end": 3938
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "test",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3939,
                                                  "end": 3943
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "bananas",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3944,
                                                  "end": 3951
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 3939,
                                                "end": 3951
                                              }
                                            ],
                                            "optional": false,
                                            "start": 3927,
                                            "end": 3952
                                          },
                                          "directive": null,
                                          "start": 3927,
                                          "end": 3953
                                        }
                                      ],
                                      "start": 3909,
                                      "end": 3967
                                    }
                                  ],
                                  "start": 3895,
                                  "end": 3967
                                }
                              ],
                              "start": 3862,
                              "end": 3977
                            }
                          ],
                          "start": 3717,
                          "end": 3983
                        },
                        "id": null,
                        "generator": false,
                        "start": 3711,
                        "end": 3983
                      }
                    ],
                    "optional": false,
                    "start": 3699,
                    "end": 3984
                  },
                  "directive": null,
                  "start": 3699,
                  "end": 3985
                }
              ],
              "start": 3693,
              "end": 3987
            },
            "id": null,
            "generator": false,
            "start": 3647,
            "end": 3987
          },
          "definite": false,
          "start": 3630,
          "end": 3987
        }
      ],
      "declare": false,
      "start": 3624,
      "end": 3988
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 3988
}
```

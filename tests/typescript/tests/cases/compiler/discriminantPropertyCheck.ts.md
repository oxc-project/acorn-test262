__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3988,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 12,
        "end": 25,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 12,
            "end": 17,
            "typeName": {
              "type": "Identifier",
              "start": 12,
              "end": 17,
              "decorators": [],
              "name": "Item1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 20,
            "end": 25,
            "typeName": {
              "type": "Identifier",
              "start": 20,
              "end": 25,
              "decorators": [],
              "name": "Item2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
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
        "end": 42,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 43,
        "end": 64,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 49,
            "end": 62,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 52,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 61,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 54,
                "end": 61
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
      "start": 66,
      "end": 175,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 81,
        "decorators": [],
        "name": "Item1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 90,
          "end": 94,
          "expression": {
            "type": "Identifier",
            "start": 90,
            "end": 94,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 95,
        "end": 175,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 101,
            "end": 111,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 105,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 110,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 107,
                "end": 110,
                "literal": {
                  "type": "Literal",
                  "start": 107,
                  "end": 110,
                  "value": "A",
                  "raw": "\"A\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 116,
            "end": 140,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 119,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 119,
              "end": 139,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 121,
                "end": 139,
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
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 145,
            "end": 158,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 148,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 148,
              "end": 157,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 150,
                "end": 157
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 163,
            "end": 173,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 166,
              "decorators": [],
              "name": "qux",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 166,
              "end": 172,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 168,
                "end": 172,
                "literal": {
                  "type": "Literal",
                  "start": 168,
                  "end": 172,
                  "value": true,
                  "raw": "true"
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
      "type": "TSInterfaceDeclaration",
      "start": 177,
      "end": 287,
      "id": {
        "type": "Identifier",
        "start": 187,
        "end": 192,
        "decorators": [],
        "name": "Item2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 201,
          "end": 205,
          "expression": {
            "type": "Identifier",
            "start": 201,
            "end": 205,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 206,
        "end": 287,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 212,
            "end": 222,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 212,
              "end": 216,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 216,
              "end": 221,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 218,
                "end": 221,
                "literal": {
                  "type": "Literal",
                  "start": 218,
                  "end": 221,
                  "value": "B",
                  "raw": "\"B\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 227,
            "end": 251,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 227,
              "end": 230,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 230,
              "end": 250,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 232,
                "end": 250,
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
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 256,
            "end": 269,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 256,
              "end": 259,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 259,
              "end": 268,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 261,
                "end": 268
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 274,
            "end": 285,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 274,
              "end": 277,
              "decorators": [],
              "name": "qux",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 277,
              "end": 284,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 279,
                "end": 284,
                "literal": {
                  "type": "Literal",
                  "start": 279,
                  "end": 284,
                  "value": false,
                  "raw": "false"
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
      "type": "FunctionDeclaration",
      "start": 289,
      "end": 392,
      "id": {
        "type": "Identifier",
        "start": 298,
        "end": 302,
        "decorators": [],
        "name": "goo1",
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
          "start": 303,
          "end": 310,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 304,
            "end": 310,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 306,
              "end": 310,
              "typeName": {
                "type": "Identifier",
                "start": 306,
                "end": 310,
                "decorators": [],
                "name": "Item",
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
        "start": 312,
        "end": 392,
        "body": [
          {
            "type": "IfStatement",
            "start": 318,
            "end": 390,
            "test": {
              "type": "LogicalExpression",
              "start": 322,
              "end": 359,
              "left": {
                "type": "BinaryExpression",
                "start": 322,
                "end": 336,
                "left": {
                  "type": "MemberExpression",
                  "start": 322,
                  "end": 328,
                  "object": {
                    "type": "Identifier",
                    "start": 322,
                    "end": 323,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 324,
                    "end": 328,
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 333,
                  "end": 336,
                  "value": "A",
                  "raw": "\"A\""
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 340,
                "end": 359,
                "left": {
                  "type": "MemberExpression",
                  "start": 340,
                  "end": 345,
                  "object": {
                    "type": "Identifier",
                    "start": 340,
                    "end": 341,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 342,
                    "end": 345,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "!==",
                "right": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 359,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 361,
              "end": 390,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 371,
                  "end": 384,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 371,
                    "end": 383,
                    "object": {
                      "type": "MemberExpression",
                      "start": 371,
                      "end": 376,
                      "object": {
                        "type": "Identifier",
                        "start": 371,
                        "end": 372,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 373,
                        "end": 376,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 377,
                      "end": 383,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
      "type": "FunctionDeclaration",
      "start": 394,
      "end": 539,
      "id": {
        "type": "Identifier",
        "start": 403,
        "end": 407,
        "decorators": [],
        "name": "goo2",
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
          "start": 408,
          "end": 415,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 409,
            "end": 415,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 411,
              "end": 415,
              "typeName": {
                "type": "Identifier",
                "start": 411,
                "end": 415,
                "decorators": [],
                "name": "Item",
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
        "start": 417,
        "end": 539,
        "body": [
          {
            "type": "IfStatement",
            "start": 423,
            "end": 537,
            "test": {
              "type": "LogicalExpression",
              "start": 427,
              "end": 464,
              "left": {
                "type": "BinaryExpression",
                "start": 427,
                "end": 446,
                "left": {
                  "type": "MemberExpression",
                  "start": 427,
                  "end": 432,
                  "object": {
                    "type": "Identifier",
                    "start": 427,
                    "end": 428,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 429,
                    "end": 432,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "!==",
                "right": {
                  "type": "Identifier",
                  "start": 437,
                  "end": 446,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 450,
                "end": 464,
                "left": {
                  "type": "MemberExpression",
                  "start": 450,
                  "end": 456,
                  "object": {
                    "type": "Identifier",
                    "start": 450,
                    "end": 451,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 452,
                    "end": 456,
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 461,
                  "end": 464,
                  "value": "A",
                  "raw": "\"A\""
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 466,
              "end": 537,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 476,
                  "end": 489,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 476,
                    "end": 488,
                    "object": {
                      "type": "MemberExpression",
                      "start": 476,
                      "end": 481,
                      "object": {
                        "type": "Identifier",
                        "start": 476,
                        "end": 477,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 478,
                        "end": 481,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 482,
                      "end": 488,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
      "type": "FunctionDeclaration",
      "start": 541,
      "end": 635,
      "id": {
        "type": "Identifier",
        "start": 550,
        "end": 554,
        "decorators": [],
        "name": "foo1",
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
          "start": 555,
          "end": 562,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 556,
            "end": 562,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 558,
              "end": 562,
              "typeName": {
                "type": "Identifier",
                "start": 558,
                "end": 562,
                "decorators": [],
                "name": "Item",
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
        "start": 564,
        "end": 635,
        "body": [
          {
            "type": "IfStatement",
            "start": 570,
            "end": 633,
            "test": {
              "type": "LogicalExpression",
              "start": 574,
              "end": 602,
              "left": {
                "type": "MemberExpression",
                "start": 574,
                "end": 579,
                "object": {
                  "type": "Identifier",
                  "start": 574,
                  "end": 575,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 576,
                  "end": 579,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 583,
                "end": 602,
                "left": {
                  "type": "MemberExpression",
                  "start": 583,
                  "end": 588,
                  "object": {
                    "type": "Identifier",
                    "start": 583,
                    "end": 584,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 585,
                    "end": 588,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "!==",
                "right": {
                  "type": "Identifier",
                  "start": 593,
                  "end": 602,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 604,
              "end": 633,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 614,
                  "end": 627,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 614,
                    "end": 626,
                    "object": {
                      "type": "MemberExpression",
                      "start": 614,
                      "end": 619,
                      "object": {
                        "type": "Identifier",
                        "start": 614,
                        "end": 615,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 616,
                        "end": 619,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 620,
                      "end": 626,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
      "type": "FunctionDeclaration",
      "start": 637,
      "end": 731,
      "id": {
        "type": "Identifier",
        "start": 646,
        "end": 650,
        "decorators": [],
        "name": "foo2",
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
          "start": 651,
          "end": 658,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 652,
            "end": 658,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 654,
              "end": 658,
              "typeName": {
                "type": "Identifier",
                "start": 654,
                "end": 658,
                "decorators": [],
                "name": "Item",
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
        "start": 660,
        "end": 731,
        "body": [
          {
            "type": "IfStatement",
            "start": 666,
            "end": 729,
            "test": {
              "type": "LogicalExpression",
              "start": 670,
              "end": 698,
              "left": {
                "type": "BinaryExpression",
                "start": 670,
                "end": 689,
                "left": {
                  "type": "MemberExpression",
                  "start": 670,
                  "end": 675,
                  "object": {
                    "type": "Identifier",
                    "start": 670,
                    "end": 671,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 672,
                    "end": 675,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "!==",
                "right": {
                  "type": "Identifier",
                  "start": 680,
                  "end": 689,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "start": 693,
                "end": 698,
                "object": {
                  "type": "Identifier",
                  "start": 693,
                  "end": 694,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 695,
                  "end": 698,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 700,
              "end": 729,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 710,
                  "end": 723,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 710,
                    "end": 722,
                    "object": {
                      "type": "MemberExpression",
                      "start": 710,
                      "end": 715,
                      "object": {
                        "type": "Identifier",
                        "start": 710,
                        "end": 711,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 712,
                        "end": 715,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 716,
                      "end": 722,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
      "type": "FunctionDeclaration",
      "start": 733,
      "end": 827,
      "id": {
        "type": "Identifier",
        "start": 742,
        "end": 746,
        "decorators": [],
        "name": "foo3",
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
          "start": 747,
          "end": 754,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 748,
            "end": 754,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 750,
              "end": 754,
              "typeName": {
                "type": "Identifier",
                "start": 750,
                "end": 754,
                "decorators": [],
                "name": "Item",
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
        "start": 756,
        "end": 827,
        "body": [
          {
            "type": "IfStatement",
            "start": 762,
            "end": 825,
            "test": {
              "type": "LogicalExpression",
              "start": 766,
              "end": 794,
              "left": {
                "type": "MemberExpression",
                "start": 766,
                "end": 771,
                "object": {
                  "type": "Identifier",
                  "start": 766,
                  "end": 767,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 768,
                  "end": 771,
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 775,
                "end": 794,
                "left": {
                  "type": "MemberExpression",
                  "start": 775,
                  "end": 780,
                  "object": {
                    "type": "Identifier",
                    "start": 775,
                    "end": 776,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 777,
                    "end": 780,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "!==",
                "right": {
                  "type": "Identifier",
                  "start": 785,
                  "end": 794,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 796,
              "end": 825,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 806,
                  "end": 819,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 806,
                    "end": 818,
                    "object": {
                      "type": "MemberExpression",
                      "start": 806,
                      "end": 811,
                      "object": {
                        "type": "Identifier",
                        "start": 806,
                        "end": 807,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 808,
                        "end": 811,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 812,
                      "end": 818,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
      "type": "FunctionDeclaration",
      "start": 829,
      "end": 923,
      "id": {
        "type": "Identifier",
        "start": 838,
        "end": 842,
        "decorators": [],
        "name": "foo4",
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
          "start": 843,
          "end": 850,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 844,
            "end": 850,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 846,
              "end": 850,
              "typeName": {
                "type": "Identifier",
                "start": 846,
                "end": 850,
                "decorators": [],
                "name": "Item",
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
        "start": 852,
        "end": 923,
        "body": [
          {
            "type": "IfStatement",
            "start": 858,
            "end": 921,
            "test": {
              "type": "LogicalExpression",
              "start": 862,
              "end": 890,
              "left": {
                "type": "BinaryExpression",
                "start": 862,
                "end": 881,
                "left": {
                  "type": "MemberExpression",
                  "start": 862,
                  "end": 867,
                  "object": {
                    "type": "Identifier",
                    "start": 862,
                    "end": 863,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 864,
                    "end": 867,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "!==",
                "right": {
                  "type": "Identifier",
                  "start": 872,
                  "end": 881,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "start": 885,
                "end": 890,
                "object": {
                  "type": "Identifier",
                  "start": 885,
                  "end": 886,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 887,
                  "end": 890,
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 892,
              "end": 921,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 902,
                  "end": 915,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 902,
                    "end": 914,
                    "object": {
                      "type": "MemberExpression",
                      "start": 902,
                      "end": 907,
                      "object": {
                        "type": "Identifier",
                        "start": 902,
                        "end": 903,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 904,
                        "end": 907,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 908,
                      "end": 914,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
      "type": "FunctionDeclaration",
      "start": 925,
      "end": 1019,
      "id": {
        "type": "Identifier",
        "start": 934,
        "end": 938,
        "decorators": [],
        "name": "foo5",
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
          "start": 939,
          "end": 946,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 940,
            "end": 946,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 942,
              "end": 946,
              "typeName": {
                "type": "Identifier",
                "start": 942,
                "end": 946,
                "decorators": [],
                "name": "Item",
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
        "start": 948,
        "end": 1019,
        "body": [
          {
            "type": "IfStatement",
            "start": 954,
            "end": 1017,
            "test": {
              "type": "LogicalExpression",
              "start": 958,
              "end": 986,
              "left": {
                "type": "MemberExpression",
                "start": 958,
                "end": 963,
                "object": {
                  "type": "Identifier",
                  "start": 958,
                  "end": 959,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 960,
                  "end": 963,
                  "decorators": [],
                  "name": "qux",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 967,
                "end": 986,
                "left": {
                  "type": "MemberExpression",
                  "start": 967,
                  "end": 972,
                  "object": {
                    "type": "Identifier",
                    "start": 967,
                    "end": 968,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 969,
                    "end": 972,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "!==",
                "right": {
                  "type": "Identifier",
                  "start": 977,
                  "end": 986,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 988,
              "end": 1017,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 998,
                  "end": 1011,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 998,
                    "end": 1010,
                    "object": {
                      "type": "MemberExpression",
                      "start": 998,
                      "end": 1003,
                      "object": {
                        "type": "Identifier",
                        "start": 998,
                        "end": 999,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1000,
                        "end": 1003,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1004,
                      "end": 1010,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
      "type": "FunctionDeclaration",
      "start": 1021,
      "end": 1157,
      "id": {
        "type": "Identifier",
        "start": 1030,
        "end": 1034,
        "decorators": [],
        "name": "foo6",
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
          "start": 1035,
          "end": 1042,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1036,
            "end": 1042,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1038,
              "end": 1042,
              "typeName": {
                "type": "Identifier",
                "start": 1038,
                "end": 1042,
                "decorators": [],
                "name": "Item",
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
        "start": 1044,
        "end": 1157,
        "body": [
          {
            "type": "IfStatement",
            "start": 1050,
            "end": 1155,
            "test": {
              "type": "LogicalExpression",
              "start": 1054,
              "end": 1082,
              "left": {
                "type": "BinaryExpression",
                "start": 1054,
                "end": 1073,
                "left": {
                  "type": "MemberExpression",
                  "start": 1054,
                  "end": 1059,
                  "object": {
                    "type": "Identifier",
                    "start": 1054,
                    "end": 1055,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1056,
                    "end": 1059,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "!==",
                "right": {
                  "type": "Identifier",
                  "start": 1064,
                  "end": 1073,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "start": 1077,
                "end": 1082,
                "object": {
                  "type": "Identifier",
                  "start": 1077,
                  "end": 1078,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1079,
                  "end": 1082,
                  "decorators": [],
                  "name": "qux",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1084,
              "end": 1155,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1094,
                  "end": 1107,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 1094,
                    "end": 1106,
                    "object": {
                      "type": "MemberExpression",
                      "start": 1094,
                      "end": 1099,
                      "object": {
                        "type": "Identifier",
                        "start": 1094,
                        "end": 1095,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1096,
                        "end": 1099,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1100,
                      "end": 1106,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
      "type": "TSEnumDeclaration",
      "start": 1181,
      "end": 1212,
      "id": {
        "type": "Identifier",
        "start": 1186,
        "end": 1191,
        "decorators": [],
        "name": "Types",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 1192,
        "end": 1212,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1194,
            "end": 1201,
            "id": {
              "type": "Identifier",
              "start": 1194,
              "end": 1197,
              "decorators": [],
              "name": "Str",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 1200,
              "end": 1201,
              "value": 1,
              "raw": "1"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 1203,
            "end": 1210,
            "id": {
              "type": "Identifier",
              "start": 1203,
              "end": 1206,
              "decorators": [],
              "name": "Num",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 1209,
              "end": 1210,
              "value": 2,
              "raw": "2"
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1214,
      "end": 1248,
      "id": {
        "type": "Identifier",
        "start": 1219,
        "end": 1227,
        "decorators": [],
        "name": "Instance",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1230,
        "end": 1247,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1230,
            "end": 1237,
            "typeName": {
              "type": "Identifier",
              "start": 1230,
              "end": 1237,
              "decorators": [],
              "name": "StrType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 1240,
            "end": 1247,
            "typeName": {
              "type": "Identifier",
              "start": 1240,
              "end": 1247,
              "decorators": [],
              "name": "NumType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1250,
      "end": 1331,
      "id": {
        "type": "Identifier",
        "start": 1260,
        "end": 1267,
        "decorators": [],
        "name": "StrType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1268,
        "end": 1331,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1274,
            "end": 1290,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1274,
              "end": 1278,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1278,
              "end": 1289,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1280,
                "end": 1289,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 1280,
                  "end": 1289,
                  "left": {
                    "type": "Identifier",
                    "start": 1280,
                    "end": 1285,
                    "decorators": [],
                    "name": "Types",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1286,
                    "end": 1289,
                    "decorators": [],
                    "name": "Str",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1295,
            "end": 1309,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1295,
              "end": 1300,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1300,
              "end": 1308,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1302,
                "end": 1308
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1314,
            "end": 1329,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1314,
              "end": 1320,
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1320,
              "end": 1328,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1322,
                "end": 1328
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
      "start": 1333,
      "end": 1394,
      "id": {
        "type": "Identifier",
        "start": 1343,
        "end": 1350,
        "decorators": [],
        "name": "NumType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1351,
        "end": 1394,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1357,
            "end": 1373,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1357,
              "end": 1361,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1361,
              "end": 1372,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1363,
                "end": 1372,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 1363,
                  "end": 1372,
                  "left": {
                    "type": "Identifier",
                    "start": 1363,
                    "end": 1368,
                    "decorators": [],
                    "name": "Types",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1369,
                    "end": 1372,
                    "decorators": [],
                    "name": "Num",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1378,
            "end": 1392,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1378,
              "end": 1383,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1383,
              "end": 1391,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1385,
                "end": 1391
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
      "start": 1396,
      "end": 1705,
      "id": {
        "type": "Identifier",
        "start": 1405,
        "end": 1410,
        "decorators": [],
        "name": "func2",
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
          "start": 1411,
          "end": 1425,
          "decorators": [],
          "name": "inst",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1415,
            "end": 1425,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1417,
              "end": 1425,
              "typeName": {
                "type": "Identifier",
                "start": 1417,
                "end": 1425,
                "decorators": [],
                "name": "Instance",
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
        "start": 1427,
        "end": 1705,
        "body": [
          {
            "type": "WhileStatement",
            "start": 1433,
            "end": 1703,
            "test": {
              "type": "Literal",
              "start": 1440,
              "end": 1444,
              "value": true,
              "raw": "true"
            },
            "body": {
              "type": "BlockStatement",
              "start": 1446,
              "end": 1703,
              "body": [
                {
                  "type": "SwitchStatement",
                  "start": 1456,
                  "end": 1697,
                  "discriminant": {
                    "type": "MemberExpression",
                    "start": 1464,
                    "end": 1473,
                    "object": {
                      "type": "Identifier",
                      "start": 1464,
                      "end": 1468,
                      "decorators": [],
                      "name": "inst",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1469,
                      "end": 1473,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 1489,
                      "end": 1578,
                      "test": {
                        "type": "MemberExpression",
                        "start": 1494,
                        "end": 1503,
                        "object": {
                          "type": "Identifier",
                          "start": 1494,
                          "end": 1499,
                          "decorators": [],
                          "name": "Types",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1500,
                          "end": 1503,
                          "decorators": [],
                          "name": "Str",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "consequent": [
                        {
                          "type": "BlockStatement",
                          "start": 1505,
                          "end": 1578,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1523,
                              "end": 1541,
                              "expression": {
                                "type": "MemberExpression",
                                "start": 1523,
                                "end": 1540,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 1523,
                                  "end": 1533,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 1523,
                                    "end": 1527,
                                    "decorators": [],
                                    "name": "inst",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1528,
                                    "end": 1533,
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1534,
                                  "end": 1540,
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "directive": null
                            },
                            {
                              "type": "BreakStatement",
                              "start": 1558,
                              "end": 1564,
                              "label": null
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "SwitchCase",
                      "start": 1591,
                      "end": 1687,
                      "test": {
                        "type": "MemberExpression",
                        "start": 1596,
                        "end": 1605,
                        "object": {
                          "type": "Identifier",
                          "start": 1596,
                          "end": 1601,
                          "decorators": [],
                          "name": "Types",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1602,
                          "end": 1605,
                          "decorators": [],
                          "name": "Num",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "consequent": [
                        {
                          "type": "BlockStatement",
                          "start": 1607,
                          "end": 1687,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1625,
                              "end": 1650,
                              "expression": {
                                "type": "MemberExpression",
                                "start": 1625,
                                "end": 1649,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 1625,
                                  "end": 1635,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 1625,
                                    "end": 1629,
                                    "decorators": [],
                                    "name": "inst",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1630,
                                    "end": 1635,
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1636,
                                  "end": 1649,
                                  "decorators": [],
                                  "name": "toExponential",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "directive": null
                            },
                            {
                              "type": "BreakStatement",
                              "start": 1667,
                              "end": 1673,
                              "label": null
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1729,
      "end": 1776,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1735,
          "end": 1775,
          "id": {
            "type": "Identifier",
            "start": 1735,
            "end": 1736,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1739,
            "end": 1775,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1740,
                "end": 1750,
                "decorators": [],
                "name": "_a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1742,
                  "end": 1750,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1744,
                    "end": 1750
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1752,
                "end": 1762,
                "decorators": [],
                "name": "_b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1754,
                  "end": 1762,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1756,
                    "end": 1762
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1763,
              "end": 1769,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1765,
                "end": 1769
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 1773,
              "end": 1775,
              "body": []
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1778,
      "end": 1821,
      "id": {
        "type": "Identifier",
        "start": 1788,
        "end": 1789,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1790,
        "end": 1821,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1794,
            "end": 1805,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1794,
              "end": 1795,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1796,
              "end": 1804,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1798,
                "end": 1804
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1808,
            "end": 1819,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1808,
              "end": 1809,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1810,
              "end": 1818,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1812,
                "end": 1818
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
      "start": 1823,
      "end": 1864,
      "id": {
        "type": "Identifier",
        "start": 1833,
        "end": 1834,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1835,
        "end": 1864,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1839,
            "end": 1849,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1839,
              "end": 1840,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1840,
              "end": 1848,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1842,
                "end": 1848
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1852,
            "end": 1862,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1852,
              "end": 1853,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1853,
              "end": 1861,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1855,
                "end": 1861
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
      "type": "TSTypeAliasDeclaration",
      "start": 1866,
      "end": 1881,
      "id": {
        "type": "Identifier",
        "start": 1871,
        "end": 1872,
        "decorators": [],
        "name": "U",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1875,
        "end": 1880,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1875,
            "end": 1876,
            "typeName": {
              "type": "Identifier",
              "start": 1875,
              "end": 1876,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 1879,
            "end": 1880,
            "typeName": {
              "type": "Identifier",
              "start": 1879,
              "end": 1880,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1883,
      "end": 1906,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1889,
          "end": 1905,
          "id": {
            "type": "Identifier",
            "start": 1889,
            "end": 1893,
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1890,
              "end": 1893,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1892,
                "end": 1893,
                "typeName": {
                  "type": "Identifier",
                  "start": 1892,
                  "end": 1893,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1896,
            "end": 1905,
            "expression": {
              "type": "ObjectExpression",
              "start": 1896,
              "end": 1898,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1902,
              "end": 1905
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1908,
      "end": 1934,
      "expression": {
        "type": "LogicalExpression",
        "start": 1908,
        "end": 1933,
        "left": {
          "type": "LogicalExpression",
          "start": 1908,
          "end": 1918,
          "left": {
            "type": "MemberExpression",
            "start": 1908,
            "end": 1911,
            "object": {
              "type": "Identifier",
              "start": 1908,
              "end": 1909,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1910,
              "end": 1911,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "start": 1915,
            "end": 1918,
            "object": {
              "type": "Identifier",
              "start": 1915,
              "end": 1916,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1917,
              "end": 1918,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "CallExpression",
          "start": 1922,
          "end": 1933,
          "callee": {
            "type": "Identifier",
            "start": 1922,
            "end": 1923,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 1924,
              "end": 1927,
              "object": {
                "type": "Identifier",
                "start": 1924,
                "end": 1925,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1926,
                "end": 1927,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            {
              "type": "MemberExpression",
              "start": 1929,
              "end": 1932,
              "object": {
                "type": "Identifier",
                "start": 1929,
                "end": 1930,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1931,
                "end": 1932,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1936,
      "end": 1962,
      "expression": {
        "type": "LogicalExpression",
        "start": 1936,
        "end": 1961,
        "left": {
          "type": "LogicalExpression",
          "start": 1936,
          "end": 1946,
          "left": {
            "type": "MemberExpression",
            "start": 1936,
            "end": 1939,
            "object": {
              "type": "Identifier",
              "start": 1936,
              "end": 1937,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1938,
              "end": 1939,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "start": 1943,
            "end": 1946,
            "object": {
              "type": "Identifier",
              "start": 1943,
              "end": 1944,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1945,
              "end": 1946,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "CallExpression",
          "start": 1950,
          "end": 1961,
          "callee": {
            "type": "Identifier",
            "start": 1950,
            "end": 1951,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 1952,
              "end": 1955,
              "object": {
                "type": "Identifier",
                "start": 1952,
                "end": 1953,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1954,
                "end": 1955,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            {
              "type": "MemberExpression",
              "start": 1957,
              "end": 1960,
              "object": {
                "type": "Identifier",
                "start": 1957,
                "end": 1958,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1959,
                "end": 1960,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1986,
      "end": 2012,
      "id": {
        "type": "Identifier",
        "start": 1991,
        "end": 1999,
        "decorators": [],
        "name": "Additive",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 2002,
        "end": 2011,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 2002,
            "end": 2005,
            "literal": {
              "type": "Literal",
              "start": 2002,
              "end": 2005,
              "value": "+",
              "raw": "'+'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 2008,
            "end": 2011,
            "literal": {
              "type": "Literal",
              "start": 2008,
              "end": 2011,
              "value": "-",
              "raw": "'-'"
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2013,
      "end": 2045,
      "id": {
        "type": "Identifier",
        "start": 2018,
        "end": 2032,
        "decorators": [],
        "name": "Multiplicative",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 2035,
        "end": 2044,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 2035,
            "end": 2038,
            "literal": {
              "type": "Literal",
              "start": 2035,
              "end": 2038,
              "value": "*",
              "raw": "'*'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 2041,
            "end": 2044,
            "literal": {
              "type": "Literal",
              "start": 2041,
              "end": 2044,
              "value": "/",
              "raw": "'/'"
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2047,
      "end": 2090,
      "id": {
        "type": "Identifier",
        "start": 2057,
        "end": 2068,
        "decorators": [],
        "name": "AdditiveObj",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 2069,
        "end": 2090,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2075,
            "end": 2088,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2075,
              "end": 2078,
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2078,
              "end": 2088,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2080,
                "end": 2088,
                "typeName": {
                  "type": "Identifier",
                  "start": 2080,
                  "end": 2088,
                  "decorators": [],
                  "name": "Additive",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 2092,
      "end": 2147,
      "id": {
        "type": "Identifier",
        "start": 2102,
        "end": 2119,
        "decorators": [],
        "name": "MultiplicativeObj",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 2120,
        "end": 2147,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2126,
            "end": 2145,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2126,
              "end": 2129,
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2129,
              "end": 2145,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2131,
                "end": 2145,
                "typeName": {
                  "type": "Identifier",
                  "start": 2131,
                  "end": 2145,
                  "decorators": [],
                  "name": "Multiplicative",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "TSTypeAliasDeclaration",
      "start": 2149,
      "end": 2191,
      "id": {
        "type": "Identifier",
        "start": 2154,
        "end": 2157,
        "decorators": [],
        "name": "Obj",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 2160,
        "end": 2191,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 2160,
            "end": 2171,
            "typeName": {
              "type": "Identifier",
              "start": 2160,
              "end": 2171,
              "decorators": [],
              "name": "AdditiveObj",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 2174,
            "end": 2191,
            "typeName": {
              "type": "Identifier",
              "start": 2174,
              "end": 2191,
              "decorators": [],
              "name": "MultiplicativeObj",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2193,
      "end": 2336,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 2200,
        "end": 2336,
        "id": {
          "type": "Identifier",
          "start": 2209,
          "end": 2212,
          "decorators": [],
          "name": "foo",
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
            "start": 2213,
            "end": 2221,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2216,
              "end": 2221,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2218,
                "end": 2221,
                "typeName": {
                  "type": "Identifier",
                  "start": 2218,
                  "end": 2221,
                  "decorators": [],
                  "name": "Obj",
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
          "start": 2223,
          "end": 2336,
          "body": [
            {
              "type": "SwitchStatement",
              "start": 2229,
              "end": 2334,
              "discriminant": {
                "type": "MemberExpression",
                "start": 2237,
                "end": 2244,
                "object": {
                  "type": "Identifier",
                  "start": 2237,
                  "end": 2240,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2241,
                  "end": 2244,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "cases": [
                {
                  "type": "SwitchCase",
                  "start": 2256,
                  "end": 2328,
                  "test": {
                    "type": "Literal",
                    "start": 2261,
                    "end": 2264,
                    "value": "+",
                    "raw": "'+'"
                  },
                  "consequent": [
                    {
                      "type": "BlockStatement",
                      "start": 2266,
                      "end": 2328,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 2280,
                          "end": 2298,
                          "expression": {
                            "type": "CallExpression",
                            "start": 2280,
                            "end": 2297,
                            "callee": {
                              "type": "Identifier",
                              "start": 2280,
                              "end": 2288,
                              "decorators": [],
                              "name": "onlyPlus",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "start": 2289,
                                "end": 2296,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2289,
                                  "end": 2292,
                                  "decorators": [],
                                  "name": "obj",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2293,
                                  "end": 2296,
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            ],
                            "optional": false
                          },
                          "directive": null
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 2311,
                          "end": 2318,
                          "argument": null
                        }
                      ]
                    }
                  ]
                }
              ]
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
      "type": "FunctionDeclaration",
      "start": 2338,
      "end": 2383,
      "id": {
        "type": "Identifier",
        "start": 2347,
        "end": 2355,
        "decorators": [],
        "name": "onlyPlus",
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
          "start": 2356,
          "end": 2364,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2359,
            "end": 2364,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 2361,
              "end": 2364,
              "literal": {
                "type": "Literal",
                "start": 2361,
                "end": 2364,
                "value": "+",
                "raw": "'+'"
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2366,
        "end": 2383,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2370,
            "end": 2381,
            "argument": {
              "type": "Identifier",
              "start": 2377,
              "end": 2380,
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2407,
      "end": 2451,
      "id": {
        "type": "Identifier",
        "start": 2424,
        "end": 2429,
        "decorators": [],
        "name": "never",
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
          "start": 2430,
          "end": 2442,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2435,
            "end": 2442,
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 2437,
              "end": 2442
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2443,
        "end": 2450,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 2445,
          "end": 2450
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 2453,
      "end": 2503,
      "id": {
        "type": "Identifier",
        "start": 2464,
        "end": 2471,
        "decorators": [],
        "name": "BarEnum",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 2472,
        "end": 2503,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 2478,
            "end": 2486,
            "id": {
              "type": "Identifier",
              "start": 2478,
              "end": 2482,
              "decorators": [],
              "name": "bar1",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 2485,
              "end": 2486,
              "value": 1,
              "raw": "1"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 2492,
            "end": 2500,
            "id": {
              "type": "Identifier",
              "start": 2492,
              "end": 2496,
              "decorators": [],
              "name": "bar2",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 2499,
              "end": 2500,
              "value": 2,
              "raw": "2"
            },
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2505,
      "end": 2543,
      "id": {
        "type": "Identifier",
        "start": 2510,
        "end": 2520,
        "decorators": [],
        "name": "UnionOfBar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 2523,
        "end": 2542,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 2523,
            "end": 2531,
            "typeName": {
              "type": "Identifier",
              "start": 2523,
              "end": 2531,
              "decorators": [],
              "name": "TypeBar1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 2534,
            "end": 2542,
            "typeName": {
              "type": "Identifier",
              "start": 2534,
              "end": 2542,
              "decorators": [],
              "name": "TypeBar2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2544,
      "end": 2583,
      "id": {
        "type": "Identifier",
        "start": 2549,
        "end": 2557,
        "decorators": [],
        "name": "TypeBar1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2560,
        "end": 2582,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2562,
            "end": 2580,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2562,
              "end": 2566,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2566,
              "end": 2580,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2568,
                "end": 2580,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 2568,
                  "end": 2580,
                  "left": {
                    "type": "Identifier",
                    "start": 2568,
                    "end": 2575,
                    "decorators": [],
                    "name": "BarEnum",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2576,
                    "end": 2580,
                    "decorators": [],
                    "name": "bar1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
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
      "type": "TSTypeAliasDeclaration",
      "start": 2584,
      "end": 2623,
      "id": {
        "type": "Identifier",
        "start": 2589,
        "end": 2597,
        "decorators": [],
        "name": "TypeBar2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2600,
        "end": 2622,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2602,
            "end": 2620,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2602,
              "end": 2606,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2606,
              "end": 2620,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2608,
                "end": 2620,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 2608,
                  "end": 2620,
                  "left": {
                    "type": "Identifier",
                    "start": 2608,
                    "end": 2615,
                    "decorators": [],
                    "name": "BarEnum",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2616,
                    "end": 2620,
                    "decorators": [],
                    "name": "bar2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
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
      "start": 2625,
      "end": 2917,
      "id": {
        "type": "Identifier",
        "start": 2634,
        "end": 2639,
        "decorators": [],
        "name": "func3",
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
          "start": 2640,
          "end": 2666,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2645,
            "end": 2666,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2647,
              "end": 2666,
              "typeName": {
                "type": "Identifier",
                "start": 2647,
                "end": 2654,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2654,
                "end": 2666,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2655,
                    "end": 2665,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2655,
                      "end": 2665,
                      "decorators": [],
                      "name": "UnionOfBar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2668,
        "end": 2917,
        "body": [
          {
            "type": "IfStatement",
            "start": 2674,
            "end": 2915,
            "test": {
              "type": "BinaryExpression",
              "start": 2678,
              "end": 2702,
              "left": {
                "type": "MemberExpression",
                "start": 2678,
                "end": 2688,
                "object": {
                  "type": "Identifier",
                  "start": 2678,
                  "end": 2683,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2684,
                  "end": 2688,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "start": 2693,
                "end": 2702,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2704,
              "end": 2915,
              "body": [
                {
                  "type": "SwitchStatement",
                  "start": 2714,
                  "end": 2909,
                  "discriminant": {
                    "type": "MemberExpression",
                    "start": 2722,
                    "end": 2732,
                    "object": {
                      "type": "Identifier",
                      "start": 2722,
                      "end": 2727,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2728,
                      "end": 2732,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 2748,
                      "end": 2789,
                      "test": {
                        "type": "MemberExpression",
                        "start": 2753,
                        "end": 2765,
                        "object": {
                          "type": "Identifier",
                          "start": 2753,
                          "end": 2760,
                          "decorators": [],
                          "name": "BarEnum",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2761,
                          "end": 2765,
                          "decorators": [],
                          "name": "bar1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "consequent": [
                        {
                          "type": "BreakStatement",
                          "start": 2783,
                          "end": 2789,
                          "label": null
                        }
                      ]
                    },
                    {
                      "type": "SwitchCase",
                      "start": 2802,
                      "end": 2843,
                      "test": {
                        "type": "MemberExpression",
                        "start": 2807,
                        "end": 2819,
                        "object": {
                          "type": "Identifier",
                          "start": 2807,
                          "end": 2814,
                          "decorators": [],
                          "name": "BarEnum",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2815,
                          "end": 2819,
                          "decorators": [],
                          "name": "bar2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "consequent": [
                        {
                          "type": "BreakStatement",
                          "start": 2837,
                          "end": 2843,
                          "label": null
                        }
                      ]
                    },
                    {
                      "type": "SwitchCase",
                      "start": 2856,
                      "end": 2899,
                      "test": null,
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "start": 2881,
                          "end": 2899,
                          "expression": {
                            "type": "CallExpression",
                            "start": 2881,
                            "end": 2898,
                            "callee": {
                              "type": "Identifier",
                              "start": 2881,
                              "end": 2886,
                              "decorators": [],
                              "name": "never",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "start": 2887,
                                "end": 2897,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2887,
                                  "end": 2892,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2893,
                                  "end": 2897,
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            ],
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    }
                  ]
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
      "start": 2941,
      "end": 3006,
      "id": {
        "type": "Identifier",
        "start": 2951,
        "end": 2956,
        "decorators": [],
        "name": "TypeA",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 2957,
        "end": 3006,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2963,
            "end": 2977,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2963,
              "end": 2967,
              "decorators": [],
              "name": "Name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2967,
              "end": 2976,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 2969,
                "end": 2976,
                "literal": {
                  "type": "Literal",
                  "start": 2969,
                  "end": 2976,
                  "value": "TypeA",
                  "raw": "\"TypeA\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2982,
            "end": 3004,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2982,
              "end": 2988,
              "decorators": [],
              "name": "Value1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2988,
              "end": 3003,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 2990,
                "end": 3003,
                "literal": {
                  "type": "Literal",
                  "start": 2990,
                  "end": 3003,
                  "value": "Cool stuff!",
                  "raw": "\"Cool stuff!\""
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
      "type": "TSInterfaceDeclaration",
      "start": 3008,
      "end": 3061,
      "id": {
        "type": "Identifier",
        "start": 3018,
        "end": 3023,
        "decorators": [],
        "name": "TypeB",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 3024,
        "end": 3061,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 3030,
            "end": 3044,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3030,
              "end": 3034,
              "decorators": [],
              "name": "Name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3034,
              "end": 3043,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 3036,
                "end": 3043,
                "literal": {
                  "type": "Literal",
                  "start": 3036,
                  "end": 3043,
                  "value": "TypeB",
                  "raw": "\"TypeB\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 3049,
            "end": 3059,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3049,
              "end": 3055,
              "decorators": [],
              "name": "Value2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3055,
              "end": 3058,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 3057,
                "end": 3058,
                "literal": {
                  "type": "Literal",
                  "start": 3057,
                  "end": 3058,
                  "value": 0,
                  "raw": "0"
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
      "type": "TSTypeAliasDeclaration",
      "start": 3063,
      "end": 3089,
      "id": {
        "type": "Identifier",
        "start": 3068,
        "end": 3072,
        "decorators": [],
        "name": "Type",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 3075,
        "end": 3088,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 3075,
            "end": 3080,
            "typeName": {
              "type": "Identifier",
              "start": 3075,
              "end": 3080,
              "decorators": [],
              "name": "TypeA",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 3083,
            "end": 3088,
            "typeName": {
              "type": "Identifier",
              "start": 3083,
              "end": 3088,
              "decorators": [],
              "name": "TypeB",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 3091,
      "end": 3138,
      "id": {
        "type": "Identifier",
        "start": 3108,
        "end": 3114,
        "decorators": [],
        "name": "isType",
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
          "start": 3115,
          "end": 3125,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3116,
            "end": 3125,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 3118,
              "end": 3125
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3126,
        "end": 3137,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 3128,
          "end": 3137,
          "parameterName": {
            "type": "Identifier",
            "start": 3128,
            "end": 3129,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3133,
            "end": 3137,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3133,
              "end": 3137,
              "typeName": {
                "type": "Identifier",
                "start": 3133,
                "end": 3137,
                "decorators": [],
                "name": "Type",
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
      "start": 3140,
      "end": 3253,
      "id": {
        "type": "Identifier",
        "start": 3149,
        "end": 3162,
        "decorators": [],
        "name": "WorksProperly",
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
          "start": 3163,
          "end": 3173,
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3167,
            "end": 3173,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3169,
              "end": 3173,
              "typeName": {
                "type": "Identifier",
                "start": 3169,
                "end": 3173,
                "decorators": [],
                "name": "Type",
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
        "start": 3175,
        "end": 3253,
        "body": [
          {
            "type": "IfStatement",
            "start": 3181,
            "end": 3251,
            "test": {
              "type": "BinaryExpression",
              "start": 3185,
              "end": 3206,
              "left": {
                "type": "MemberExpression",
                "start": 3185,
                "end": 3194,
                "object": {
                  "type": "Identifier",
                  "start": 3185,
                  "end": 3189,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3190,
                  "end": 3194,
                  "decorators": [],
                  "name": "Name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 3199,
                "end": 3206,
                "value": "TypeA",
                "raw": "\"TypeA\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3208,
              "end": 3251,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 3218,
                  "end": 3245,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3224,
                      "end": 3244,
                      "id": {
                        "type": "Identifier",
                        "start": 3224,
                        "end": 3230,
                        "decorators": [],
                        "name": "value1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 3233,
                        "end": 3244,
                        "object": {
                          "type": "Identifier",
                          "start": 3233,
                          "end": 3237,
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3238,
                          "end": 3244,
                          "decorators": [],
                          "name": "Value1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
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
      "type": "FunctionDeclaration",
      "start": 3255,
      "end": 3411,
      "id": {
        "type": "Identifier",
        "start": 3264,
        "end": 3275,
        "decorators": [],
        "name": "DoesNotWork",
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
          "start": 3276,
          "end": 3289,
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3280,
            "end": 3289,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 3282,
              "end": 3289
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3291,
        "end": 3411,
        "body": [
          {
            "type": "IfStatement",
            "start": 3297,
            "end": 3409,
            "test": {
              "type": "CallExpression",
              "start": 3301,
              "end": 3313,
              "callee": {
                "type": "Identifier",
                "start": 3301,
                "end": 3307,
                "decorators": [],
                "name": "isType",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 3308,
                  "end": 3312,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3315,
              "end": 3409,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 3325,
                  "end": 3403,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 3329,
                    "end": 3350,
                    "left": {
                      "type": "MemberExpression",
                      "start": 3329,
                      "end": 3338,
                      "object": {
                        "type": "Identifier",
                        "start": 3329,
                        "end": 3333,
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3334,
                        "end": 3338,
                        "decorators": [],
                        "name": "Name",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 3343,
                      "end": 3350,
                      "value": "TypeA",
                      "raw": "\"TypeA\""
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 3352,
                    "end": 3403,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 3366,
                        "end": 3393,
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 3372,
                            "end": 3392,
                            "id": {
                              "type": "Identifier",
                              "start": 3372,
                              "end": 3378,
                              "decorators": [],
                              "name": "value1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "MemberExpression",
                              "start": 3381,
                              "end": 3392,
                              "object": {
                                "type": "Identifier",
                                "start": 3381,
                                "end": 3385,
                                "decorators": [],
                                "name": "data",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 3386,
                                "end": 3392,
                                "decorators": [],
                                "name": "Value1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      }
                    ]
                  },
                  "alternate": null
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
      "type": "TSTypeAliasDeclaration",
      "start": 3435,
      "end": 3486,
      "id": {
        "type": "Identifier",
        "start": 3440,
        "end": 3445,
        "decorators": [],
        "name": "TestA",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 3448,
        "end": 3486,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 3454,
            "end": 3468,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3454,
              "end": 3458,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3458,
              "end": 3467,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 3460,
                "end": 3467,
                "literal": {
                  "type": "Literal",
                  "start": 3460,
                  "end": 3467,
                  "value": "testA",
                  "raw": "'testA'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 3473,
            "end": 3484,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3473,
              "end": 3480,
              "decorators": [],
              "name": "bananas",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3480,
              "end": 3483,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 3482,
                "end": 3483,
                "literal": {
                  "type": "Literal",
                  "start": 3482,
                  "end": 3483,
                  "value": 3,
                  "raw": "3"
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
      "type": "TSTypeAliasDeclaration",
      "start": 3490,
      "end": 3540,
      "id": {
        "type": "Identifier",
        "start": 3495,
        "end": 3500,
        "decorators": [],
        "name": "TestB",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 3503,
        "end": 3540,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 3509,
            "end": 3523,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3509,
              "end": 3513,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3513,
              "end": 3522,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 3515,
                "end": 3522,
                "literal": {
                  "type": "Literal",
                  "start": 3515,
                  "end": 3522,
                  "value": "testB",
                  "raw": "'testB'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 3528,
            "end": 3538,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3528,
              "end": 3534,
              "decorators": [],
              "name": "apples",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3534,
              "end": 3537,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 3536,
                "end": 3537,
                "literal": {
                  "type": "Literal",
                  "start": 3536,
                  "end": 3537,
                  "value": 5,
                  "raw": "5"
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
      "type": "TSTypeAliasDeclaration",
      "start": 3544,
      "end": 3574,
      "id": {
        "type": "Identifier",
        "start": 3549,
        "end": 3557,
        "decorators": [],
        "name": "AllTests",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 3560,
        "end": 3573,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 3560,
            "end": 3565,
            "typeName": {
              "type": "Identifier",
              "start": 3560,
              "end": 3565,
              "decorators": [],
              "name": "TestA",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 3568,
            "end": 3573,
            "typeName": {
              "type": "Identifier",
              "start": 3568,
              "end": 3573,
              "decorators": [],
              "name": "TestB",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3576,
      "end": 3622,
      "id": {
        "type": "Identifier",
        "start": 3581,
        "end": 3594,
        "decorators": [],
        "name": "MapOfAllTests",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3597,
        "end": 3621,
        "typeName": {
          "type": "Identifier",
          "start": 3597,
          "end": 3603,
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3603,
          "end": 3621,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 3604,
              "end": 3610
            },
            {
              "type": "TSTypeReference",
              "start": 3612,
              "end": 3620,
              "typeName": {
                "type": "Identifier",
                "start": 3612,
                "end": 3620,
                "decorators": [],
                "name": "AllTests",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3624,
      "end": 3988,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3630,
          "end": 3987,
          "id": {
            "type": "Identifier",
            "start": 3630,
            "end": 3644,
            "decorators": [],
            "name": "doTestingStuff",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 3647,
            "end": 3987,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 3648,
                "end": 3673,
                "decorators": [],
                "name": "mapOfTests",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3658,
                  "end": 3673,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3660,
                    "end": 3673,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3660,
                      "end": 3673,
                      "decorators": [],
                      "name": "MapOfAllTests",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 3675,
                "end": 3688,
                "decorators": [],
                "name": "ids",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3678,
                  "end": 3688,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 3680,
                    "end": 3688,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 3680,
                      "end": 3686
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 3693,
              "end": 3987,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3699,
                  "end": 3985,
                  "expression": {
                    "type": "CallExpression",
                    "start": 3699,
                    "end": 3984,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 3699,
                      "end": 3710,
                      "object": {
                        "type": "Identifier",
                        "start": 3699,
                        "end": 3702,
                        "decorators": [],
                        "name": "ids",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3703,
                        "end": 3710,
                        "decorators": [],
                        "name": "forEach",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 3711,
                        "end": 3983,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3711,
                            "end": 3713,
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 3717,
                          "end": 3983,
                          "body": [
                            {
                              "type": "VariableDeclaration",
                              "start": 3727,
                              "end": 3736,
                              "kind": "let",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 3731,
                                  "end": 3735,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 3731,
                                    "end": 3735,
                                    "decorators": [],
                                    "name": "test",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "init": null,
                                  "definite": false
                                }
                              ],
                              "declare": false
                            },
                            {
                              "type": "ExpressionStatement",
                              "start": 3745,
                              "end": 3767,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 3745,
                                "end": 3766,
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "start": 3745,
                                  "end": 3749,
                                  "decorators": [],
                                  "name": "test",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "start": 3752,
                                  "end": 3766,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 3752,
                                    "end": 3762,
                                    "decorators": [],
                                    "name": "mapOfTests",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 3763,
                                    "end": 3765,
                                    "decorators": [],
                                    "name": "id",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": true
                                }
                              },
                              "directive": null
                            },
                            {
                              "type": "IfStatement",
                              "start": 3776,
                              "end": 3853,
                              "test": {
                                "type": "BinaryExpression",
                                "start": 3780,
                                "end": 3801,
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 3780,
                                  "end": 3789,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 3780,
                                    "end": 3784,
                                    "decorators": [],
                                    "name": "test",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 3785,
                                    "end": 3789,
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "start": 3794,
                                  "end": 3801,
                                  "value": "testA",
                                  "raw": "'testA'"
                                }
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "start": 3803,
                                "end": 3853,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 3817,
                                    "end": 3843,
                                    "expression": {
                                      "type": "CallExpression",
                                      "start": 3817,
                                      "end": 3842,
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 3817,
                                        "end": 3828,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 3817,
                                          "end": 3824,
                                          "decorators": [],
                                          "name": "console",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 3825,
                                          "end": 3828,
                                          "decorators": [],
                                          "name": "log",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "MemberExpression",
                                          "start": 3829,
                                          "end": 3841,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 3829,
                                            "end": 3833,
                                            "decorators": [],
                                            "name": "test",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 3834,
                                            "end": 3841,
                                            "decorators": [],
                                            "name": "bananas",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        }
                                      ],
                                      "optional": false
                                    },
                                    "directive": null
                                  }
                                ]
                              },
                              "alternate": null
                            },
                            {
                              "type": "SwitchStatement",
                              "start": 3862,
                              "end": 3977,
                              "discriminant": {
                                "type": "MemberExpression",
                                "start": 3870,
                                "end": 3879,
                                "object": {
                                  "type": "Identifier",
                                  "start": 3870,
                                  "end": 3874,
                                  "decorators": [],
                                  "name": "test",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3875,
                                  "end": 3879,
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "cases": [
                                {
                                  "type": "SwitchCase",
                                  "start": 3895,
                                  "end": 3967,
                                  "test": {
                                    "type": "Literal",
                                    "start": 3900,
                                    "end": 3907,
                                    "value": "testA",
                                    "raw": "'testA'"
                                  },
                                  "consequent": [
                                    {
                                      "type": "BlockStatement",
                                      "start": 3909,
                                      "end": 3967,
                                      "body": [
                                        {
                                          "type": "ExpressionStatement",
                                          "start": 3927,
                                          "end": 3953,
                                          "expression": {
                                            "type": "CallExpression",
                                            "start": 3927,
                                            "end": 3952,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 3927,
                                              "end": 3938,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 3927,
                                                "end": 3934,
                                                "decorators": [],
                                                "name": "console",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 3935,
                                                "end": 3938,
                                                "decorators": [],
                                                "name": "log",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "MemberExpression",
                                                "start": 3939,
                                                "end": 3951,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 3939,
                                                  "end": 3943,
                                                  "decorators": [],
                                                  "name": "test",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 3944,
                                                  "end": 3951,
                                                  "decorators": [],
                                                  "name": "bananas",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              }
                                            ],
                                            "optional": false
                                          },
                                          "directive": null
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        "id": null,
                        "generator": false
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

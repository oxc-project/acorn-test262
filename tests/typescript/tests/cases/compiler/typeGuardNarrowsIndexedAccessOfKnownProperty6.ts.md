__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "aIndex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "key",
                  "raw": "\"key\"",
                  "start": 22,
                  "end": 27
                },
                "start": 22,
                "end": 27
              },
              "start": 20,
              "end": 27
            },
            "start": 14,
            "end": 27
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 27
        }
      ],
      "declare": true,
      "start": 0,
      "end": 28
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 40,
                      "end": 43
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 48,
                              "end": 49
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 52,
                                "end": 58
                              },
                              "start": 50,
                              "end": 58
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 48,
                            "end": 58
                          }
                        ],
                        "start": 46,
                        "end": 60
                      },
                      "start": 44,
                      "end": 60
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 40,
                    "end": 60
                  }
                ],
                "start": 38,
                "end": 62
              },
              "start": 36,
              "end": 62
            },
            "start": 35,
            "end": 62
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 65,
            "end": 67
          },
          "definite": false,
          "start": 35,
          "end": 67
        }
      ],
      "declare": false,
      "start": 29,
      "end": 68
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 74
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "aIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 81
          },
          "optional": false,
          "computed": true,
          "start": 73,
          "end": 82
        },
        "operator": "&&",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 87
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "aIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 94
            },
            "optional": false,
            "computed": true,
            "start": 86,
            "end": 95
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 97
          },
          "optional": false,
          "computed": false,
          "start": 86,
          "end": 97
        },
        "start": 73,
        "end": 97
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 105,
                  "end": 106
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aIndex",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 107,
                  "end": 113
                },
                "optional": false,
                "computed": true,
                "start": 105,
                "end": 114
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 115,
                "end": 116
              },
              "optional": false,
              "computed": false,
              "start": 105,
              "end": 116
            },
            "directive": null,
            "start": 105,
            "end": 116
          }
        ],
        "start": 99,
        "end": 128
      },
      "alternate": null,
      "start": 69,
      "end": 128
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
            "name": "bIndex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "key",
                  "raw": "\"key\"",
                  "start": 152,
                  "end": 157
                },
                "start": 152,
                "end": 157
              },
              "start": 150,
              "end": 157
            },
            "start": 144,
            "end": 157
          },
          "init": null,
          "definite": false,
          "start": 144,
          "end": 157
        }
      ],
      "declare": true,
      "start": 130,
      "end": 158
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 170,
                      "end": 173
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 177,
                              "end": 178
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 181,
                                "end": 187
                              },
                              "start": 179,
                              "end": 187
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 177,
                            "end": 187
                          }
                        ],
                        "start": 175,
                        "end": 189
                      },
                      "start": 173,
                      "end": 189
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 170,
                    "end": 189
                  }
                ],
                "start": 168,
                "end": 191
              },
              "start": 166,
              "end": 191
            },
            "start": 165,
            "end": 191
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 199
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 201,
                  "end": 203
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 196,
                "end": 203
              }
            ],
            "start": 194,
            "end": 205
          },
          "definite": false,
          "start": 165,
          "end": 205
        }
      ],
      "declare": false,
      "start": 159,
      "end": 206
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 212
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 213,
            "end": 219
          },
          "optional": false,
          "computed": true,
          "start": 211,
          "end": 220
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 221,
          "end": 222
        },
        "optional": false,
        "computed": false,
        "start": 211,
        "end": 222
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 230,
                  "end": 231
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bIndex",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 232,
                  "end": 238
                },
                "optional": false,
                "computed": true,
                "start": 230,
                "end": 239
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 241
              },
              "optional": false,
              "computed": false,
              "start": 230,
              "end": 241
            },
            "directive": null,
            "start": 230,
            "end": 241
          }
        ],
        "start": 224,
        "end": 253
      },
      "alternate": null,
      "start": 207,
      "end": 253
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
            "name": "cIndex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 277,
                  "end": 278
                },
                "start": 277,
                "end": 278
              },
              "start": 275,
              "end": 278
            },
            "start": 269,
            "end": 278
          },
          "init": null,
          "definite": false,
          "start": 269,
          "end": 278
        }
      ],
      "declare": true,
      "start": 255,
      "end": 279
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 290,
        "end": 293
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 300,
              "end": 301
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 303,
                    "end": 309
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 312,
                    "end": 321
                  }
                ],
                "start": 303,
                "end": 321
              },
              "start": 301,
              "end": 321
            },
            "accessibility": null,
            "static": false,
            "start": 300,
            "end": 322
          }
        ],
        "start": 294,
        "end": 324
      },
      "declare": false,
      "start": 280,
      "end": 324
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 334,
                    "end": 337
                  },
                  "typeArguments": null,
                  "start": 334,
                  "end": 337
                },
                "start": 334,
                "end": 339
              },
              "start": 332,
              "end": 339
            },
            "start": 331,
            "end": 339
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 342,
            "end": 344
          },
          "definite": false,
          "start": 331,
          "end": 344
        }
      ],
      "declare": false,
      "start": 325,
      "end": 345
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 350,
            "end": 351
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "cIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 352,
            "end": 358
          },
          "optional": false,
          "computed": true,
          "start": 350,
          "end": 359
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 360,
          "end": 361
        },
        "optional": false,
        "computed": false,
        "start": 350,
        "end": 361
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 369,
                  "end": 370
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cIndex",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 371,
                  "end": 377
                },
                "optional": false,
                "computed": true,
                "start": 369,
                "end": 378
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 379,
                "end": 380
              },
              "optional": false,
              "computed": false,
              "start": 369,
              "end": 380
            },
            "directive": null,
            "start": 369,
            "end": 380
          }
        ],
        "start": 363,
        "end": 392
      },
      "alternate": null,
      "start": 346,
      "end": 392
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 392
}
```

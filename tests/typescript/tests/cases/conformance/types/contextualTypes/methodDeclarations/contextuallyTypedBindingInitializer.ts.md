__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Show",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
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
              "name": "show",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 25
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "type": "TSNumberKeyword",
                        "start": 31,
                        "end": 37
                      },
                      "start": 29,
                      "end": 37
                    },
                    "start": 28,
                    "end": 37
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 42,
                    "end": 48
                  },
                  "start": 39,
                  "end": 48
                },
                "start": 27,
                "end": 48
              },
              "start": 25,
              "end": 48
            },
            "accessibility": null,
            "static": false,
            "start": 21,
            "end": 49
          }
        ],
        "start": 15,
        "end": 51
      },
      "declare": false,
      "start": 0,
      "end": 51
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 62
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "show",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 69
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "show",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 65,
                  "end": 69
                },
                "right": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 72,
                      "end": 73
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 77,
                        "end": 78
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 79,
                        "end": 87
                      },
                      "optional": false,
                      "computed": false,
                      "start": 77,
                      "end": 87
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 77,
                    "end": 89
                  },
                  "id": null,
                  "generator": false,
                  "start": 72,
                  "end": 89
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 89
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 65,
              "end": 89
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Show",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 97
              },
              "typeArguments": null,
              "start": 93,
              "end": 97
            },
            "start": 91,
            "end": 97
          },
          "start": 63,
          "end": 97
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 99,
        "end": 101
      },
      "expression": false,
      "start": 52,
      "end": 101
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 113
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Literal",
                "value": "show",
                "raw": "\"show\"",
                "start": 116,
                "end": 122
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "showRename",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 124,
                  "end": 134
                },
                "right": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 137,
                      "end": 138
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 142,
                        "end": 143
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 144,
                        "end": 152
                      },
                      "optional": false,
                      "computed": false,
                      "start": 142,
                      "end": 152
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 142,
                    "end": 154
                  },
                  "id": null,
                  "generator": false,
                  "start": 137,
                  "end": 154
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 124,
                "end": 154
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 116,
              "end": 154
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Show",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 162
              },
              "typeArguments": null,
              "start": 158,
              "end": 162
            },
            "start": 156,
            "end": 162
          },
          "start": 114,
          "end": 162
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 164,
        "end": 166
      },
      "expression": false,
      "start": 102,
      "end": 166
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 176,
        "end": 178
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Literal",
                "value": "show",
                "raw": "\"show\"",
                "start": 182,
                "end": 188
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "showRename",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 201
                },
                "right": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 204,
                      "end": 205
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 209,
                        "end": 210
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 211,
                        "end": 219
                      },
                      "optional": false,
                      "computed": false,
                      "start": 209,
                      "end": 219
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 209,
                    "end": 221
                  },
                  "id": null,
                  "generator": false,
                  "start": 204,
                  "end": 221
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 191,
                "end": 221
              },
              "method": false,
              "shorthand": false,
              "computed": true,
              "optional": false,
              "start": 181,
              "end": 221
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Show",
                "optional": false,
                "typeAnnotation": null,
                "start": 225,
                "end": 229
              },
              "typeArguments": null,
              "start": 225,
              "end": 229
            },
            "start": 223,
            "end": 229
          },
          "start": 179,
          "end": 229
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 231,
        "end": 233
      },
      "expression": false,
      "start": 167,
      "end": 233
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Nested",
        "optional": false,
        "typeAnnotation": null,
        "start": 245,
        "end": 251
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
              "name": "nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 264
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Show",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 266,
                  "end": 270
                },
                "typeArguments": null,
                "start": 266,
                "end": 270
              },
              "start": 264,
              "end": 270
            },
            "accessibility": null,
            "static": false,
            "start": 258,
            "end": 270
          }
        ],
        "start": 252,
        "end": 272
      },
      "declare": false,
      "start": 235,
      "end": 272
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff",
        "optional": false,
        "typeAnnotation": null,
        "start": 282,
        "end": 284
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 287,
                "end": 293
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 287,
                  "end": 293
                },
                "right": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "show",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 298,
                        "end": 302
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 304,
                            "end": 305
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 309,
                              "end": 310
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toString",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 311,
                              "end": 319
                            },
                            "optional": false,
                            "computed": false,
                            "start": 309,
                            "end": 319
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 309,
                          "end": 321
                        },
                        "id": null,
                        "generator": false,
                        "start": 304,
                        "end": 321
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 298,
                      "end": 321
                    }
                  ],
                  "start": 296,
                  "end": 323
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 287,
                "end": 323
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 287,
              "end": 323
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 327,
                "end": 333
              },
              "typeArguments": null,
              "start": 327,
              "end": 333
            },
            "start": 325,
            "end": 333
          },
          "start": 285,
          "end": 333
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 335,
        "end": 337
      },
      "expression": false,
      "start": 273,
      "end": 337
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tuples",
        "optional": false,
        "typeAnnotation": null,
        "start": 349,
        "end": 355
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 366
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 369,
                    "end": 375
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 377,
                    "end": 383
                  }
                ],
                "start": 368,
                "end": 384
              },
              "start": 366,
              "end": 384
            },
            "accessibility": null,
            "static": false,
            "start": 362,
            "end": 385
          }
        ],
        "start": 356,
        "end": 387
      },
      "declare": false,
      "start": 339,
      "end": 387
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 397,
        "end": 398
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 401,
                "end": 405
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 401,
                  "end": 405
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 409,
                      "end": 416
                    },
                    {
                      "type": "Literal",
                      "value": 1234,
                      "raw": "1234",
                      "start": 418,
                      "end": 422
                    }
                  ],
                  "start": 408,
                  "end": 423
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 401,
                "end": 423
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 401,
              "end": 423
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Tuples",
                "optional": false,
                "typeAnnotation": null,
                "start": 427,
                "end": 433
              },
              "typeArguments": null,
              "start": 427,
              "end": 433
            },
            "start": 425,
            "end": 433
          },
          "start": 399,
          "end": 433
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 435,
        "end": 437
      },
      "expression": false,
      "start": 388,
      "end": 437
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringUnion",
        "optional": false,
        "typeAnnotation": null,
        "start": 449,
        "end": 460
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 467,
              "end": 471
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 473,
                      "end": 478
                    },
                    "start": 473,
                    "end": 478
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 481,
                      "end": 486
                    },
                    "start": 481,
                    "end": 486
                  }
                ],
                "start": 473,
                "end": 486
              },
              "start": 471,
              "end": 486
            },
            "accessibility": null,
            "static": false,
            "start": 467,
            "end": 487
          }
        ],
        "start": 461,
        "end": 489
      },
      "declare": false,
      "start": 439,
      "end": 489
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null,
        "start": 499,
        "end": 500
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 503,
                "end": 507
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 503,
                  "end": 507
                },
                "right": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 510,
                  "end": 515
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 503,
                "end": 515
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 503,
              "end": 515
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StringUnion",
                "optional": false,
                "typeAnnotation": null,
                "start": 519,
                "end": 530
              },
              "typeArguments": null,
              "start": 519,
              "end": 530
            },
            "start": 517,
            "end": 530
          },
          "start": 501,
          "end": 530
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 532,
        "end": 534
      },
      "expression": false,
      "start": 490,
      "end": 534
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringIdentity",
        "optional": false,
        "typeAnnotation": null,
        "start": 546,
        "end": 560
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringIdentity",
              "optional": false,
              "typeAnnotation": null,
              "start": 567,
              "end": 581
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 585,
                    "end": 591
                  },
                  "start": 583,
                  "end": 591
                },
                "start": 582,
                "end": 591
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 594,
                "end": 600
              },
              "start": 592,
              "end": 600
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 567,
            "end": 601
          }
        ],
        "start": 561,
        "end": 603
      },
      "declare": false,
      "start": 536,
      "end": 603
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "stringIdentity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 610,
                  "end": 624
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 626,
                    "end": 628
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 631,
                        "end": 634
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 638,
                      "end": 641
                    },
                    "id": null,
                    "generator": false,
                    "start": 631,
                    "end": 641
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 626,
                  "end": 641
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 610,
                "end": 641
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringIdentity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 645,
                  "end": 659
                },
                "typeArguments": null,
                "start": 645,
                "end": 659
              },
              "start": 643,
              "end": 659
            },
            "start": 608,
            "end": 659
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
                  "name": "stringIdentity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 664,
                  "end": 678
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 680,
                      "end": 681
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 685,
                    "end": 686
                  },
                  "id": null,
                  "generator": false,
                  "start": 680,
                  "end": 686
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 664,
                "end": 686
              }
            ],
            "start": 662,
            "end": 687
          },
          "definite": false,
          "start": 608,
          "end": 687
        }
      ],
      "declare": false,
      "start": 604,
      "end": 688
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 690
}
```

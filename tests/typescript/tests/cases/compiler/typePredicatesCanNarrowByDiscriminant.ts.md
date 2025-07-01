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
            "name": "fruit",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
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
                          "name": "kind",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 33,
                          "end": 37
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "apple",
                              "raw": "'apple'",
                              "start": 39,
                              "end": 46
                            },
                            "start": 39,
                            "end": 46
                          },
                          "start": 37,
                          "end": 46
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 33,
                        "end": 46
                      }
                    ],
                    "start": 31,
                    "end": 47
                  },
                  {
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
                          "name": "kind",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 52,
                          "end": 56
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "banana",
                              "raw": "'banana'",
                              "start": 58,
                              "end": 66
                            },
                            "start": 58,
                            "end": 66
                          },
                          "start": 56,
                          "end": 66
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 52,
                        "end": 66
                      }
                    ],
                    "start": 50,
                    "end": 68
                  },
                  {
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
                          "name": "kind",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 73,
                          "end": 77
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "cherry",
                              "raw": "'cherry'",
                              "start": 79,
                              "end": 87
                            },
                            "start": 79,
                            "end": 87
                          },
                          "start": 77,
                          "end": 87
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 73,
                        "end": 87
                      }
                    ],
                    "start": 71,
                    "end": 89
                  }
                ],
                "start": 31,
                "end": 89
              },
              "start": 29,
              "end": 89
            },
            "start": 24,
            "end": 89
          },
          "init": null,
          "definite": false,
          "start": 24,
          "end": 89
        }
      ],
      "declare": true,
      "start": 10,
      "end": 89
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isOneOf",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 115
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 117
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 116,
            "end": 117
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 120
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 129,
                "end": 130
              },
              "typeArguments": null,
              "start": 129,
              "end": 130
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 119,
            "end": 130
          }
        ],
        "start": 115,
        "end": 131
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "item",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 138,
                "end": 139
              },
              "typeArguments": null,
              "start": 138,
              "end": 139
            },
            "start": 136,
            "end": 139
          },
          "start": 132,
          "end": 139
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 157,
                    "end": 158
                  },
                  "typeArguments": null,
                  "start": 157,
                  "end": 158
                },
                "start": 157,
                "end": 160
              },
              "start": 148,
              "end": 160
            },
            "start": 146,
            "end": 160
          },
          "start": 141,
          "end": 160
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "item",
            "optional": false,
            "typeAnnotation": null,
            "start": 163,
            "end": 167
          },
          "asserts": false,
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
                "start": 171,
                "end": 172
              },
              "typeArguments": null,
              "start": 171,
              "end": 172
            },
            "start": 171,
            "end": 172
          },
          "start": 163,
          "end": 172
        },
        "start": 161,
        "end": 172
      },
      "body": null,
      "expression": false,
      "start": 91,
      "end": 172
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isOneOf",
          "optional": false,
          "typeAnnotation": null,
          "start": 177,
          "end": 184
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "fruit",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 190
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 195
            },
            "optional": false,
            "computed": false,
            "start": 185,
            "end": 195
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "apple",
                  "raw": "'apple'",
                  "start": 198,
                  "end": 205
                },
                {
                  "type": "Literal",
                  "value": "banana",
                  "raw": "'banana'",
                  "start": 207,
                  "end": 215
                }
              ],
              "start": 197,
              "end": 216
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 220,
                "end": 225
              },
              "typeArguments": null,
              "start": 220,
              "end": 225
            },
            "start": 197,
            "end": 225
          }
        ],
        "optional": false,
        "start": 177,
        "end": 226
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "fruit",
                "optional": false,
                "typeAnnotation": null,
                "start": 234,
                "end": 239
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 244
              },
              "optional": false,
              "computed": false,
              "start": 234,
              "end": 244
            },
            "directive": null,
            "start": 234,
            "end": 244
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "fruit",
              "optional": false,
              "typeAnnotation": null,
              "start": 249,
              "end": 254
            },
            "directive": null,
            "start": 249,
            "end": 254
          }
        ],
        "start": 228,
        "end": 256
      },
      "alternate": null,
      "start": 173,
      "end": 256
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
            "name": "fruit2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
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
                          "name": "kind",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 282,
                          "end": 286
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "apple",
                              "raw": "'apple'",
                              "start": 288,
                              "end": 295
                            },
                            "start": 288,
                            "end": 295
                          },
                          "start": 286,
                          "end": 295
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 282,
                        "end": 295
                      }
                    ],
                    "start": 280,
                    "end": 296
                  },
                  {
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
                          "name": "kind",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 301,
                          "end": 305
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "banana",
                              "raw": "'banana'",
                              "start": 307,
                              "end": 315
                            },
                            "start": 307,
                            "end": 315
                          },
                          "start": 305,
                          "end": 315
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 301,
                        "end": 315
                      }
                    ],
                    "start": 299,
                    "end": 317
                  },
                  {
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
                          "name": "kind",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 322,
                          "end": 326
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "cherry",
                              "raw": "'cherry'",
                              "start": 328,
                              "end": 336
                            },
                            "start": 328,
                            "end": 336
                          },
                          "start": 326,
                          "end": 336
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 322,
                        "end": 336
                      }
                    ],
                    "start": 320,
                    "end": 338
                  }
                ],
                "start": 280,
                "end": 338
              },
              "start": 278,
              "end": 338
            },
            "start": 272,
            "end": 338
          },
          "init": null,
          "definite": false,
          "start": 272,
          "end": 338
        }
      ],
      "declare": true,
      "start": 258,
      "end": 338
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
            "name": "kind",
            "optional": false,
            "typeAnnotation": null,
            "start": 345,
            "end": 349
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "fruit2",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 358
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 359,
              "end": 363
            },
            "optional": false,
            "computed": false,
            "start": 352,
            "end": 363
          },
          "definite": false,
          "start": 345,
          "end": 363
        }
      ],
      "declare": false,
      "start": 339,
      "end": 364
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isOneOf",
          "optional": false,
          "typeAnnotation": null,
          "start": 369,
          "end": 376
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "kind",
            "optional": false,
            "typeAnnotation": null,
            "start": 377,
            "end": 381
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "apple",
                  "raw": "'apple'",
                  "start": 384,
                  "end": 391
                },
                {
                  "type": "Literal",
                  "value": "banana",
                  "raw": "'banana'",
                  "start": 393,
                  "end": 401
                }
              ],
              "start": 383,
              "end": 402
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 406,
                "end": 411
              },
              "typeArguments": null,
              "start": 406,
              "end": 411
            },
            "start": 383,
            "end": 411
          }
        ],
        "optional": false,
        "start": 369,
        "end": 412
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "fruit2",
                "optional": false,
                "typeAnnotation": null,
                "start": 420,
                "end": 426
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 427,
                "end": 431
              },
              "optional": false,
              "computed": false,
              "start": 420,
              "end": 431
            },
            "directive": null,
            "start": 420,
            "end": 431
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "fruit2",
              "optional": false,
              "typeAnnotation": null,
              "start": 436,
              "end": 442
            },
            "directive": null,
            "start": 436,
            "end": 442
          }
        ],
        "start": 414,
        "end": 444
      },
      "alternate": null,
      "start": 365,
      "end": 444
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 10,
  "end": 444
}
```

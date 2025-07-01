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
        "name": "NumList",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 17
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 26
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "n",
                  "raw": "'n'",
                  "start": 28,
                  "end": 31
                },
                "start": 28,
                "end": 31
              },
              "start": 26,
              "end": 31
            },
            "accessibility": null,
            "static": false,
            "start": 22,
            "end": 32
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 39,
                    "end": 45
                  },
                  "start": 37,
                  "end": 45
                },
                "start": 36,
                "end": 45
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 48,
                "end": 54
              },
              "start": 46,
              "end": 54
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 35,
            "end": 55
          }
        ],
        "start": 18,
        "end": 57
      },
      "declare": false,
      "start": 0,
      "end": 57
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StrList",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 75
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 84
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "s",
                  "raw": "'s'",
                  "start": 86,
                  "end": 89
                },
                "start": 86,
                "end": 89
              },
              "start": 84,
              "end": 89
            },
            "accessibility": null,
            "static": false,
            "start": 80,
            "end": 90
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 97,
                    "end": 103
                  },
                  "start": 95,
                  "end": 103
                },
                "start": 94,
                "end": 103
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 106,
                "end": 112
              },
              "start": 104,
              "end": 112
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 93,
            "end": 113
          }
        ],
        "start": 76,
        "end": 115
      },
      "declare": false,
      "start": 58,
      "end": 115
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
          "start": 133,
          "end": 136
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "start": 137,
                "end": 138
              },
              "constraint": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NumList",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 147,
                      "end": 154
                    },
                    "typeArguments": null,
                    "start": 147,
                    "end": 154
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "StrList",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 157,
                      "end": 164
                    },
                    "typeArguments": null,
                    "start": 157,
                    "end": 164
                  }
                ],
                "start": 147,
                "end": 164
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 137,
              "end": 164
            }
          ],
          "start": 136,
          "end": 165
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 171,
                      "end": 172
                    },
                    "typeArguments": null,
                    "start": 171,
                    "end": 172
                  },
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "NumList",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 176,
                          "end": 183
                        },
                        "typeArguments": null,
                        "start": 176,
                        "end": 183
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "StrList",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 186,
                          "end": 193
                        },
                        "typeArguments": null,
                        "start": 186,
                        "end": 193
                      }
                    ],
                    "start": 176,
                    "end": 193
                  }
                ],
                "start": 171,
                "end": 194
              },
              "start": 169,
              "end": 194
            },
            "start": 166,
            "end": 194
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
                    "name": "zz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 204,
                    "end": 206
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 209,
                      "end": 212
                    },
                    "property": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 213,
                      "end": 214
                    },
                    "optional": false,
                    "computed": true,
                    "start": 209,
                    "end": 215
                  },
                  "definite": false,
                  "start": 204,
                  "end": 215
                }
              ],
              "declare": false,
              "start": 200,
              "end": 216
            }
          ],
          "start": 196,
          "end": 228
        },
        "expression": false,
        "start": 124,
        "end": 228
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 117,
      "end": 228
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TypedArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 264,
          "end": 274
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
                "name": "Int32Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 277,
                "end": 287
              },
              "typeArguments": null,
              "start": 277,
              "end": 287
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Uint8Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 290,
                "end": 300
              },
              "typeArguments": null,
              "start": 290,
              "end": 300
            }
          ],
          "start": 277,
          "end": 300
        },
        "declare": false,
        "start": 259,
        "end": 301
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 252,
      "end": 301
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "isTypedArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 319,
          "end": 331
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 335,
                "end": 337
              },
              "start": 333,
              "end": 337
            },
            "start": 332,
            "end": 337
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 340,
              "end": 341
            },
            "asserts": false,
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
                      "name": "Int32Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 345,
                      "end": 355
                    },
                    "typeArguments": null,
                    "start": 345,
                    "end": 355
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Uint8Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 358,
                      "end": 368
                    },
                    "typeArguments": null,
                    "start": 358,
                    "end": 368
                  }
                ],
                "start": 345,
                "end": 368
              },
              "start": 345,
              "end": 368
            },
            "start": 340,
            "end": 368
          },
          "start": 338,
          "end": 368
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 380,
                    "end": 381
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Int32Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 393,
                    "end": 403
                  },
                  "start": 380,
                  "end": 403
                },
                "operator": "||",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 407,
                    "end": 408
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Uint8Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 420,
                    "end": 430
                  },
                  "start": 407,
                  "end": 430
                },
                "start": 380,
                "end": 430
              },
              "start": 373,
              "end": 431
            }
          ],
          "start": 369,
          "end": 433
        },
        "expression": false,
        "start": 310,
        "end": 433
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 303,
      "end": 433
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "flatten",
          "optional": false,
          "typeAnnotation": null,
          "start": 451,
          "end": 458
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "start": 459,
                "end": 460
              },
              "constraint": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 469,
                    "end": 475
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TypedArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 476,
                      "end": 486
                    },
                    "typeArguments": null,
                    "start": 476,
                    "end": 486
                  }
                ],
                "start": 469,
                "end": 486
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 459,
              "end": 486
            }
          ],
          "start": 458,
          "end": 487
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
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
                  "start": 493,
                  "end": 494
                },
                "typeArguments": null,
                "start": 493,
                "end": 494
              },
              "start": 491,
              "end": 494
            },
            "start": 488,
            "end": 494
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
                  "name": "isTypedArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 504,
                  "end": 516
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arr",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 517,
                    "end": 520
                  }
                ],
                "optional": false,
                "start": 504,
                "end": 521
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
                        "name": "arr",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 531,
                        "end": 534
                      },
                      "property": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 535,
                        "end": 536
                      },
                      "optional": false,
                      "computed": true,
                      "start": 531,
                      "end": 537
                    },
                    "directive": null,
                    "start": 531,
                    "end": 538
                  }
                ],
                "start": 523,
                "end": 542
              },
              "alternate": null,
              "start": 500,
              "end": 542
            }
          ],
          "start": 496,
          "end": 544
        },
        "expression": false,
        "start": 442,
        "end": 544
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 435,
      "end": 544
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 544
}
```

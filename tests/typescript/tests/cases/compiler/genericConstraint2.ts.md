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
        "name": "Comparable",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
      },
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
              "start": 21,
              "end": 22
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 21,
            "end": 22
          }
        ],
        "start": 20,
        "end": 23
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "comparer",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 38
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "other",
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
                      "start": 46,
                      "end": 47
                    },
                    "typeArguments": null,
                    "start": 46,
                    "end": 47
                  },
                  "start": 44,
                  "end": 47
                },
                "start": 39,
                "end": 47
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 50,
                "end": 56
              },
              "start": 48,
              "end": 56
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 30,
            "end": 57
          }
        ],
        "start": 24,
        "end": 59
      },
      "declare": false,
      "start": 0,
      "end": 59
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "compare",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 77
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
              "start": 78,
              "end": 79
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Comparable",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 98
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 99,
                      "end": 100
                    },
                    "typeArguments": null,
                    "start": 99,
                    "end": 100
                  }
                ],
                "start": 98,
                "end": 101
              },
              "start": 88,
              "end": 101
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 78,
            "end": 101
          }
        ],
        "start": 77,
        "end": 102
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 107
              },
              "typeArguments": null,
              "start": 106,
              "end": 107
            },
            "start": 104,
            "end": 107
          },
          "start": 103,
          "end": 107
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
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
                "start": 112,
                "end": 113
              },
              "typeArguments": null,
              "start": 112,
              "end": 113
            },
            "start": 110,
            "end": 113
          },
          "start": 109,
          "end": 113
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 116,
          "end": 122
        },
        "start": 114,
        "end": 122
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 134
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 138,
                "end": 142
              },
              "start": 133,
              "end": 142
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 151,
                    "end": 152
                  },
                  "operator": "==",
                  "right": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 156,
                    "end": 160
                  },
                  "start": 151,
                  "end": 160
                },
                "consequent": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 163,
                  "end": 164
                },
                "alternate": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 168,
                    "end": 169
                  },
                  "prefix": true,
                  "start": 167,
                  "end": 169
                },
                "start": 151,
                "end": 169
              },
              "start": 144,
              "end": 170
            },
            "alternate": null,
            "start": 129,
            "end": 170
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 179,
                "end": 180
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 184,
                "end": 188
              },
              "start": 179,
              "end": 188
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 197,
                "end": 198
              },
              "start": 190,
              "end": 199
            },
            "alternate": null,
            "start": 175,
            "end": 199
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 211,
                  "end": 212
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "comparer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 213,
                  "end": 221
                },
                "optional": false,
                "computed": false,
                "start": 211,
                "end": 221
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 222,
                  "end": 223
                }
              ],
              "optional": false,
              "start": 211,
              "end": 224
            },
            "start": 204,
            "end": 225
          }
        ],
        "start": 123,
        "end": 227
      },
      "expression": false,
      "start": 61,
      "end": 227
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComparableString",
        "optional": false,
        "typeAnnotation": null,
        "start": 235,
        "end": 251
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Comparable",
            "optional": false,
            "typeAnnotation": null,
            "start": 263,
            "end": 273
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 274,
                "end": 280
              }
            ],
            "start": 273,
            "end": 281
          },
          "start": 263,
          "end": 281
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 287,
              "end": 298
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currentValue",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 320,
                        "end": 326
                      },
                      "start": 318,
                      "end": 326
                    },
                    "start": 306,
                    "end": 326
                  },
                  "readonly": false,
                  "static": false,
                  "start": 299,
                  "end": 326
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 328,
                "end": 331
              },
              "expression": false,
              "start": 298,
              "end": 331
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 287,
            "end": 331
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "localeCompare",
              "optional": false,
              "typeAnnotation": null,
              "start": 337,
              "end": 350
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "other",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 351,
                  "end": 356
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 375,
                      "end": 376
                    },
                    "start": 368,
                    "end": 377
                  }
                ],
                "start": 358,
                "end": 383
              },
              "expression": false,
              "start": 350,
              "end": 383
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 337,
            "end": 383
          }
        ],
        "start": 281,
        "end": 385
      },
      "abstract": false,
      "declare": false,
      "start": 229,
      "end": 385
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 391,
            "end": 392
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComparableString",
              "optional": false,
              "typeAnnotation": null,
              "start": 399,
              "end": 415
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 416,
                "end": 419
              }
            ],
            "start": 395,
            "end": 420
          },
          "definite": false,
          "start": 391,
          "end": 420
        }
      ],
      "declare": false,
      "start": 387,
      "end": 421
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 426,
            "end": 427
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComparableString",
              "optional": false,
              "typeAnnotation": null,
              "start": 434,
              "end": 450
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "b",
                "raw": "\"b\"",
                "start": 451,
                "end": 454
              }
            ],
            "start": 430,
            "end": 455
          },
          "definite": false,
          "start": 426,
          "end": 455
        }
      ],
      "declare": false,
      "start": 422,
      "end": 456
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 461,
            "end": 462
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "compare",
              "optional": false,
              "typeAnnotation": null,
              "start": 465,
              "end": 472
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ComparableString",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 473,
                    "end": 489
                  },
                  "typeArguments": null,
                  "start": 473,
                  "end": 489
                }
              ],
              "start": 472,
              "end": 490
            },
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 491,
                "end": 492
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 494,
                "end": 495
              }
            ],
            "optional": false,
            "start": 465,
            "end": 496
          },
          "definite": false,
          "start": 461,
          "end": 496
        }
      ],
      "declare": false,
      "start": 457,
      "end": 497
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 497
}
```

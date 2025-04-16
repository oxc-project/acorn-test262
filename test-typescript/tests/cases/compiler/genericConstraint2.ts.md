__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 497,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "name": "Comparable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 23,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 24,
        "end": 59,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 30,
            "end": 57,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 38,
              "name": "comparer",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 39,
                "end": 47,
                "name": "other",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 44,
                  "end": 47,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 46,
                    "end": 47,
                    "typeName": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 47,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 56,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 50,
                "end": 56
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 61,
      "end": 227,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 77,
        "name": "compare",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 103,
          "end": 107,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 104,
            "end": 107,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 106,
              "end": 107,
              "typeName": {
                "type": "Identifier",
                "start": 106,
                "end": 107,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 109,
          "end": 113,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 110,
            "end": 113,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 112,
              "end": 113,
              "typeName": {
                "type": "Identifier",
                "start": 112,
                "end": 113,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 123,
        "end": 227,
        "body": [
          {
            "type": "IfStatement",
            "start": 129,
            "end": 170,
            "test": {
              "type": "BinaryExpression",
              "start": 133,
              "end": 142,
              "left": {
                "type": "Identifier",
                "start": 133,
                "end": 134,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 138,
                "end": 142,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "ReturnStatement",
              "start": 144,
              "end": 170,
              "argument": {
                "type": "ConditionalExpression",
                "start": 151,
                "end": 169,
                "test": {
                  "type": "BinaryExpression",
                  "start": 151,
                  "end": 160,
                  "left": {
                    "type": "Identifier",
                    "start": 151,
                    "end": 152,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "==",
                  "right": {
                    "type": "Literal",
                    "start": 156,
                    "end": 160,
                    "value": null,
                    "raw": "null"
                  }
                },
                "consequent": {
                  "type": "Literal",
                  "start": 163,
                  "end": 164,
                  "value": 0,
                  "raw": "0"
                },
                "alternate": {
                  "type": "UnaryExpression",
                  "start": 167,
                  "end": 169,
                  "operator": "-",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 168,
                    "end": 169,
                    "value": 1,
                    "raw": "1"
                  }
                }
              }
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 175,
            "end": 199,
            "test": {
              "type": "BinaryExpression",
              "start": 179,
              "end": 188,
              "left": {
                "type": "Identifier",
                "start": 179,
                "end": 180,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 184,
                "end": 188,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "ReturnStatement",
              "start": 190,
              "end": 199,
              "argument": {
                "type": "Literal",
                "start": 197,
                "end": 198,
                "value": 1,
                "raw": "1"
              }
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 204,
            "end": 225,
            "argument": {
              "type": "CallExpression",
              "start": 211,
              "end": 224,
              "callee": {
                "type": "MemberExpression",
                "start": 211,
                "end": 221,
                "object": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 212,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 221,
                  "name": "comparer",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 222,
                  "end": 223,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 77,
        "end": 102,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 78,
            "end": 101,
            "name": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 88,
              "end": 101,
              "typeName": {
                "type": "Identifier",
                "start": 88,
                "end": 98,
                "name": "Comparable",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 98,
                "end": 101,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 99,
                    "end": 100,
                    "typeName": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 100,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 114,
        "end": 122,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 116,
          "end": 122
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 229,
      "end": 385,
      "id": {
        "type": "Identifier",
        "start": 235,
        "end": 251,
        "name": "ComparableString",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 281,
        "end": 385,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 287,
            "end": 331,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 287,
              "end": 298,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 298,
              "end": 331,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 299,
                  "end": 326,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 306,
                    "end": 326,
                    "name": "currentValue",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 318,
                      "end": 326,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 320,
                        "end": 326
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 328,
                "end": 331,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 337,
            "end": 383,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 337,
              "end": 350,
              "name": "localeCompare",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 350,
              "end": 383,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 351,
                  "end": 356,
                  "name": "other",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 358,
                "end": 383,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 368,
                    "end": 377,
                    "argument": {
                      "type": "Literal",
                      "start": 375,
                      "end": 376,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 263,
          "end": 281,
          "expression": {
            "type": "Identifier",
            "start": 263,
            "end": 273,
            "name": "Comparable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 273,
            "end": 281,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 274,
                "end": 280
              }
            ]
          }
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 387,
      "end": 421,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 391,
          "end": 420,
          "id": {
            "type": "Identifier",
            "start": 391,
            "end": 392,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 395,
            "end": 420,
            "callee": {
              "type": "Identifier",
              "start": 399,
              "end": 415,
              "name": "ComparableString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 416,
                "end": 419,
                "value": "a",
                "raw": "\"a\""
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 422,
      "end": 456,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 426,
          "end": 455,
          "id": {
            "type": "Identifier",
            "start": 426,
            "end": 427,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 430,
            "end": 455,
            "callee": {
              "type": "Identifier",
              "start": 434,
              "end": 450,
              "name": "ComparableString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 451,
                "end": 454,
                "value": "b",
                "raw": "\"b\""
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 457,
      "end": 497,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 461,
          "end": 496,
          "id": {
            "type": "Identifier",
            "start": 461,
            "end": 462,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 465,
            "end": 496,
            "callee": {
              "type": "Identifier",
              "start": 465,
              "end": 472,
              "name": "compare",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 491,
                "end": 492,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 494,
                "end": 495,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 472,
              "end": 490,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 473,
                  "end": 489,
                  "typeName": {
                    "type": "Identifier",
                    "start": 473,
                    "end": 489,
                    "name": "ComparableString",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

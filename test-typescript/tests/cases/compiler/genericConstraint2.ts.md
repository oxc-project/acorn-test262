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
      "body": {
        "type": "TSInterfaceBody",
        "start": 24,
        "end": 59,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 30,
            "end": 57,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 38,
              "decorators": [],
              "name": "comparer",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 39,
                "end": 47,
                "decorators": [],
                "name": "other",
                "optional": false,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "decorators": [],
        "name": "Comparable",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 23,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 61,
      "end": 227,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 123,
        "end": 227,
        "body": [
          {
            "type": "IfStatement",
            "start": 129,
            "end": 170,
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "start": 144,
              "end": 170,
              "argument": {
                "type": "ConditionalExpression",
                "start": 151,
                "end": 169,
                "alternate": {
                  "type": "UnaryExpression",
                  "start": 167,
                  "end": 169,
                  "argument": {
                    "type": "Literal",
                    "start": 168,
                    "end": 169,
                    "raw": "1",
                    "value": 1
                  },
                  "operator": "-",
                  "prefix": true
                },
                "consequent": {
                  "type": "Literal",
                  "start": 163,
                  "end": 164,
                  "raw": "0",
                  "value": 0
                },
                "test": {
                  "type": "BinaryExpression",
                  "start": 151,
                  "end": 160,
                  "operator": "==",
                  "left": {
                    "type": "Identifier",
                    "start": 151,
                    "end": 152,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 156,
                    "end": 160,
                    "raw": "null",
                    "value": null
                  }
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 133,
              "end": 142,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 133,
                "end": 134,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 138,
                "end": 142,
                "raw": "null",
                "value": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 175,
            "end": 199,
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "start": 190,
              "end": 199,
              "argument": {
                "type": "Literal",
                "start": 197,
                "end": 198,
                "raw": "1",
                "value": 1
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 179,
              "end": 188,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 179,
                "end": 180,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 184,
                "end": 188,
                "raw": "null",
                "value": null
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 204,
            "end": 225,
            "argument": {
              "type": "CallExpression",
              "start": 211,
              "end": 224,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 222,
                  "end": 223,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 211,
                "end": 221,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 212,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 221,
                  "decorators": [],
                  "name": "comparer",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 77,
        "decorators": [],
        "name": "compare",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 103,
          "end": 107,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 109,
          "end": 113,
          "decorators": [],
          "name": "y",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 114,
        "end": 122,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 116,
          "end": 122
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 77,
        "end": 102,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 78,
            "end": 101,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 88,
              "end": 101,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 88,
                "end": 98,
                "decorators": [],
                "name": "Comparable",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 229,
      "end": 385,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 281,
        "end": 385,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 287,
            "end": 331,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 287,
              "end": 298,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 298,
              "end": 331,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 328,
                "end": 331,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                    "decorators": [],
                    "name": "currentValue",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 318,
                      "end": 326,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 320,
                        "end": 326
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 337,
            "end": 383,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 337,
              "end": 350,
              "decorators": [],
              "name": "localeCompare",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 350,
              "end": 383,
              "async": false,
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
                      "raw": "0",
                      "value": 0
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 351,
                  "end": 356,
                  "decorators": [],
                  "name": "other",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 235,
        "end": 251,
        "decorators": [],
        "name": "ComparableString",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 263,
          "end": 281,
          "expression": {
            "type": "Identifier",
            "start": 263,
            "end": 273,
            "decorators": [],
            "name": "Comparable",
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
      "superClass": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 391,
            "end": 392,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 395,
            "end": 420,
            "arguments": [
              {
                "type": "Literal",
                "start": 416,
                "end": 419,
                "raw": "\"a\"",
                "value": "a"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 399,
              "end": 415,
              "decorators": [],
              "name": "ComparableString",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 426,
            "end": 427,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 430,
            "end": 455,
            "arguments": [
              {
                "type": "Literal",
                "start": 451,
                "end": 454,
                "raw": "\"b\"",
                "value": "b"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 434,
              "end": 450,
              "decorators": [],
              "name": "ComparableString",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 461,
            "end": 462,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 465,
            "end": 496,
            "arguments": [
              {
                "type": "Identifier",
                "start": 491,
                "end": 492,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 494,
                "end": 495,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 465,
              "end": 472,
              "decorators": [],
              "name": "compare",
              "optional": false
            },
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
                    "decorators": [],
                    "name": "ComparableString",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

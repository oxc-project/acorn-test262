__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 596,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 596,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 212,
        "end": 596,
        "body": [
          {
            "type": "IfStatement",
            "start": 218,
            "end": 494,
            "alternate": {
              "type": "BlockStatement",
              "start": 287,
              "end": 494,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 399,
                  "end": 422,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 399,
                    "end": 421,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 411,
                        "end": 420,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 411,
                          "end": 416,
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 417,
                          "end": 420,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 399,
                      "end": 410,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 399,
                        "end": 406,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 407,
                        "end": 410,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 238,
              "end": 277,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 248,
                  "end": 271,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 248,
                    "end": 270,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 260,
                        "end": 269,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 260,
                          "end": 265,
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 266,
                          "end": 269,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 248,
                      "end": 259,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 248,
                        "end": 255,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 256,
                        "end": 259,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "CallExpression",
              "start": 222,
              "end": 236,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 230,
                  "end": 235,
                  "decorators": [],
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 222,
                "end": 229,
                "decorators": [],
                "name": "hasAFoo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "FunctionDeclaration",
            "start": 500,
            "end": 594,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 556,
              "end": 594,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 566,
                  "end": 588,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 573,
                    "end": 587,
                    "operator": "in",
                    "left": {
                      "type": "Literal",
                      "start": 573,
                      "end": 578,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 582,
                      "end": 587,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 509,
              "end": 516,
              "decorators": [],
              "name": "hasAFoo",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [
              {
                "type": "Identifier",
                "start": 517,
                "end": 538,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 522,
                  "end": 538,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 524,
                    "end": 538,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 524,
                        "end": 529,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 524,
                          "end": 529,
                          "decorators": [],
                          "name": "First",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 532,
                        "end": 538,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 532,
                          "end": 538,
                          "decorators": [],
                          "name": "Second",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 539,
              "end": 555,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 541,
                "end": 555,
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "start": 541,
                  "end": 546,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 550,
                  "end": 555,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 550,
                    "end": 555,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 550,
                      "end": 555,
                      "decorators": [],
                      "name": "First",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 29,
        "decorators": [],
        "name": "needsToNarrowTheType",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 163,
          "end": 210,
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 168,
            "end": 210,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 170,
              "end": 210,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 170,
                  "end": 175,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 170,
                    "end": 175,
                    "decorators": [],
                    "name": "First",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 178,
                  "end": 186,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 178,
                    "end": 186,
                    "decorators": [],
                    "name": "SubFirst",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 189,
                  "end": 201,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 189,
                    "end": 201,
                    "decorators": [],
                    "name": "SubFirstMore",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 204,
                  "end": 210,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 210,
                    "decorators": [],
                    "name": "Second",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 29,
        "end": 162,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 30,
            "end": 59,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 44,
              "end": 59,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 46,
                  "end": 57,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 49,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 49,
                    "end": 57,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 51,
                      "end": 57
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 30,
              "end": 35,
              "decorators": [],
              "name": "First",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 61,
            "end": 91,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 76,
              "end": 91,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 78,
                  "end": 89,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 81,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 81,
                    "end": 89,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 83,
                      "end": 89
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 61,
              "end": 67,
              "decorators": [],
              "name": "Second",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 93,
            "end": 115,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 110,
              "end": 115,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 110,
                "end": 115,
                "decorators": [],
                "name": "First",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 93,
              "end": 101,
              "decorators": [],
              "name": "SubFirst",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 117,
            "end": 161,
            "const": false,
            "constraint": {
              "type": "TSIntersectionType",
              "start": 138,
              "end": 161,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 138,
                  "end": 143,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 138,
                    "end": 143,
                    "decorators": [],
                    "name": "First",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 146,
                  "end": 161,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 147,
                      "end": 160,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 147,
                        "end": 152,
                        "decorators": [],
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 152,
                        "end": 160,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 154,
                          "end": 160
                        }
                      }
                    }
                  ]
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 117,
              "end": 129,
              "decorators": [],
              "name": "SubFirstMore",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

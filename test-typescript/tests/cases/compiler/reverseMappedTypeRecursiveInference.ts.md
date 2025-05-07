__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 257,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 48,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 14,
        "end": 48,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 26,
          "end": 33,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 32,
            "end": 33,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 21,
          "end": 22,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 36,
          "end": 45,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 39,
            "end": 45,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 40,
                "end": 44,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 42,
                  "end": 43,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 40,
                  "end": 41,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 36,
            "end": 39,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 8,
        "end": 11,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 9,
            "end": 10,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 50,
      "end": 129,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 58,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 64,
        "end": 129,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 76,
          "end": 83,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 82,
            "end": 83,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 71,
          "end": 72,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 86,
          "end": 126,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 86,
            "end": 90,
            "indexType": {
              "type": "TSTypeReference",
              "start": 88,
              "end": 89,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 88,
                "end": 89,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 86,
              "end": 87,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 86,
                "end": 87,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "extendsType": {
            "type": "TSObjectKeyword",
            "start": 99,
            "end": 105
          },
          "falseType": {
            "type": "TSStringKeyword",
            "start": 120,
            "end": 126
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 108,
            "end": 117,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 111,
              "end": 117,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 112,
                  "end": 116,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 114,
                    "end": 115,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 114,
                      "end": 115,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 112,
                    "end": 113,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 113,
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 108,
              "end": 111,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 58,
        "end": 61,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 59,
            "end": 60,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 131,
      "end": 218,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 166,
        "end": 218,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 170,
            "end": 189,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 170,
              "end": 188,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 182,
                  "end": 187,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 170,
                "end": 181,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 170,
                  "end": 177,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 181,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 192,
            "end": 216,
            "argument": {
              "type": "TSAsExpression",
              "start": 199,
              "end": 215,
              "expression": {
                "type": "Identifier",
                "start": 199,
                "end": 208,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 212,
                "end": 215
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
        "start": 140,
        "end": 144,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 148,
          "end": 161,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 153,
            "end": 161,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 155,
              "end": 161,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 158,
                "end": 161,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 159,
                    "end": 160,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 159,
                      "end": 160,
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 155,
                "end": 158,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 162,
        "end": 165,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 164,
          "end": 165,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 164,
            "end": 165,
            "decorators": [],
            "name": "V",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 144,
        "end": 147,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 145,
            "end": 146,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 220,
      "end": 245,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 244,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 239,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 229,
              "end": 239,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 231,
                "end": 239,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 234,
                  "end": 239,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 235,
                      "end": 238
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 234,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 242,
            "end": 244,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 247,
      "end": 257,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 247,
        "end": 256,
        "arguments": [
          {
            "type": "Identifier",
            "start": 252,
            "end": 255,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 247,
          "end": 251,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

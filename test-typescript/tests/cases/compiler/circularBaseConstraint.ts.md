__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 225,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 36,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 34,
        "end": 35,
        "typeName": {
          "type": "Identifier",
          "start": 34,
          "end": 35,
          "decorators": [],
          "name": "T",
          "optional": false
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 28,
        "end": 31,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 29,
            "end": 30,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
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
      "type": "TSTypeAliasDeclaration",
      "start": 38,
      "end": 181,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 50,
        "end": 180,
        "checkType": {
          "type": "TSTypeReference",
          "start": 50,
          "end": 51,
          "typeName": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSArrayType",
          "start": 60,
          "end": 65,
          "elementType": {
            "type": "TSAnyKeyword",
            "start": 60,
            "end": 63
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 84,
          "end": 180,
          "checkType": {
            "type": "TSTypeReference",
            "start": 84,
            "end": 88,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 85,
              "end": 88,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 86,
                  "end": 87,
                  "typeName": {
                    "type": "Identifier",
                    "start": 86,
                    "end": 87,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          "extendsType": {
            "type": "TSInferType",
            "start": 97,
            "end": 106,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 103,
              "end": 106,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 103,
                "end": 106,
                "decorators": [],
                "name": "key",
                "optional": false
              },
              "out": false
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 175,
            "end": 180
          },
          "trueType": {
            "type": "TSConditionalType",
            "start": 113,
            "end": 168,
            "checkType": {
              "type": "TSTypeReference",
              "start": 113,
              "end": 116,
              "typeName": {
                "type": "Identifier",
                "start": 113,
                "end": 116,
                "decorators": [],
                "name": "key",
                "optional": false
              }
            },
            "extendsType": {
              "type": "TSTypeOperator",
              "start": 125,
              "end": 132,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 131,
                "end": 132,
                "typeName": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 132,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 163,
              "end": 168
            },
            "trueType": {
              "type": "TSTypeReference",
              "start": 143,
              "end": 152,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 144,
                "end": 152,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 145,
                    "end": 151,
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 147,
                      "end": 150,
                      "typeName": {
                        "type": "Identifier",
                        "start": 147,
                        "end": 150,
                        "decorators": [],
                        "name": "key",
                        "optional": false
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 145,
                      "end": 146,
                      "typeName": {
                        "type": "Identifier",
                        "start": 145,
                        "end": 146,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 143,
                "end": 144,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          }
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "start": 72,
          "end": 77
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 44,
        "end": 47,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 45,
            "end": 46,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
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
      "start": 183,
      "end": 224,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 201,
        "end": 224,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 207,
            "end": 222,
            "expression": {
              "type": "TSAsExpression",
              "start": 207,
              "end": 221,
              "expression": {
                "type": "TemplateLiteral",
                "start": 207,
                "end": 213,
                "expressions": [
                  {
                    "type": "Identifier",
                    "start": 210,
                    "end": 211,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 207,
                    "end": 210,
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 211,
                    "end": 213,
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 217,
                "end": 221,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 218,
                  "end": 221,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 219,
                      "end": 220,
                      "typeName": {
                        "type": "Identifier",
                        "start": 219,
                        "end": 220,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 217,
                  "end": 218,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
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
        "start": 192,
        "end": 195,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 195,
        "end": 198,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 196,
            "end": 197,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 196,
              "end": 197,
              "decorators": [],
              "name": "T",
              "optional": false
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

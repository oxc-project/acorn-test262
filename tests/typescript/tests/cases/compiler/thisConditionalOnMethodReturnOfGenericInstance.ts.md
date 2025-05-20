__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 361,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 64,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 64,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 62,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 34,
              "decorators": [],
              "name": "unmeasurableUsage",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 61,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 37,
                "end": 61,
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 44,
                  "end": 51,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 50,
                    "end": 51,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 50,
                      "end": 51,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 40,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "nameType": null,
                "optional": "-",
                "readonly": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 56,
                  "end": 60,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 58,
                    "end": 59,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 59,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 56,
                    "end": 57,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 57,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 66,
      "end": 179,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 90,
        "end": 179,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 96,
            "end": 177,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 96,
              "end": 102,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 102,
              "end": 177,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 151,
                "end": 177,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 161,
                    "end": 171,
                    "argument": {
                      "type": "Literal",
                      "start": 168,
                      "end": 170,
                      "raw": "\"\"",
                      "value": ""
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 104,
                "end": 150,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 106,
                  "end": 150,
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 106,
                      "end": 112
                    },
                    {
                      "type": "TSConditionalType",
                      "start": 116,
                      "end": 149,
                      "checkType": {
                        "type": "TSThisType",
                        "start": 116,
                        "end": 120
                      },
                      "extendsType": {
                        "type": "TSTypeReference",
                        "start": 129,
                        "end": 130,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 129,
                          "end": 130,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "falseType": {
                        "type": "TSNullKeyword",
                        "start": 145,
                        "end": 149
                      },
                      "trueType": {
                        "type": "TSUndefinedKeyword",
                        "start": 133,
                        "end": 142
                      }
                    }
                  ]
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 73,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 85,
        "end": 86,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 86,
        "end": 89,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 87,
            "end": 88,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 73,
        "end": 76,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 74,
            "end": 75,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 181,
      "end": 235,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 211,
        "end": 235,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 217,
            "end": 233,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 217,
              "end": 223,
              "decorators": [],
              "name": "marker",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 224,
              "end": 232,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 226,
                "end": 232
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 187,
        "end": 188,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 206,
        "end": 207,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 207,
        "end": 210,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 208,
            "end": 209,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 208,
              "end": 209,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 188,
        "end": 197,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 189,
            "end": 196,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 193,
              "end": 196
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 189,
              "end": 190,
              "decorators": [],
              "name": "T",
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
      "start": 237,
      "end": 259,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 243,
          "end": 258,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 243,
            "end": 244,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 247,
            "end": 258,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 251,
              "end": 252,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 252,
              "end": 256,
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "start": 253,
                  "end": 255,
                  "members": []
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 261,
      "end": 282,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 267,
          "end": 281,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 268,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 271,
            "end": 281,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 271,
              "end": 279,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 271,
                "end": 272,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 273,
                "end": 279,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

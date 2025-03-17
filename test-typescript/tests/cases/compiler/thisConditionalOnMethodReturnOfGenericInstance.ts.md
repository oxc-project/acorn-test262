__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 362,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 64,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 64,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 62,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 34,
              "name": "unmeasurableUsage",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 61,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 37,
                "end": 61,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 39,
                  "end": 51,
                  "name": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 40,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 44,
                    "end": 51,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 50,
                      "end": 51,
                      "typeName": {
                        "type": "Identifier",
                        "start": 50,
                        "end": 51,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 56,
                  "end": 60,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 56,
                    "end": 57,
                    "typeName": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 57,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 58,
                    "end": 59,
                    "typeName": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 59,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "optional": "-",
                "readonly": null,
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 44,
                  "end": 51,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 50,
                    "end": 51,
                    "typeName": {
                      "type": "Identifier",
                      "start": 50,
                      "end": 51,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 40,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 66,
      "end": 179,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 73,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 85,
        "end": 86,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 90,
        "end": 179,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 96,
            "end": 177,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 96,
              "end": 102,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 102,
              "end": 177,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 129,
                          "end": 130,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "trueType": {
                        "type": "TSUndefinedKeyword",
                        "start": 133,
                        "end": 142
                      },
                      "falseType": {
                        "type": "TSNullKeyword",
                        "start": 145,
                        "end": 149
                      }
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 73,
        "end": 76,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 74,
            "end": 75,
            "name": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 86,
        "end": 89,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 87,
            "end": 88,
            "typeName": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
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
    {
      "type": "ClassDeclaration",
      "start": 181,
      "end": 235,
      "id": {
        "type": "Identifier",
        "start": 187,
        "end": 188,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 206,
        "end": 207,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 211,
        "end": 235,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 217,
            "end": 233,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 217,
              "end": 223,
              "name": "marker",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 188,
        "end": 197,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 189,
            "end": 196,
            "name": {
              "type": "Identifier",
              "start": 189,
              "end": 190,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 193,
              "end": 196
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 207,
        "end": 210,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 208,
            "end": 209,
            "typeName": {
              "type": "Identifier",
              "start": 208,
              "end": 209,
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
    {
      "type": "VariableDeclaration",
      "start": 237,
      "end": 259,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 243,
          "end": 258,
          "id": {
            "type": "Identifier",
            "start": 243,
            "end": 244,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 247,
            "end": 258,
            "callee": {
              "type": "Identifier",
              "start": 251,
              "end": 252,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 268,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 271,
            "end": 281,
            "callee": {
              "type": "MemberExpression",
              "start": 271,
              "end": 279,
              "object": {
                "type": "Identifier",
                "start": 271,
                "end": 272,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 273,
                "end": 279,
                "name": "method",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

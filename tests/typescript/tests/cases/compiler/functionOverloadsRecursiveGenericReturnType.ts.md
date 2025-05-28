__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 227,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 32,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 32,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 30,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 26,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 29,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 28,
                "end": 29,
                "typeName": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 29,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 34,
      "end": 78,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 41,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 41,
        "end": 44,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 42,
            "end": 43,
            "name": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 44,
        "end": 78,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 50,
            "end": 76,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 63,
              "decorators": [],
              "name": "GetEnumerator",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 75,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 65,
                "end": 75,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 68,
                  "end": 75,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 71,
                    "end": 75,
                    "typeName": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 72,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 72,
                      "end": 75,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 73,
                          "end": 74,
                          "typeName": {
                            "type": "Identifier",
                            "start": 73,
                            "end": 74,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 80,
      "end": 116,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 95,
        "decorators": [],
        "name": "Choice",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 95,
        "end": 98,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 96,
            "end": 97,
            "name": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 99,
          "end": 108,
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 103,
            "end": 108,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 105,
              "end": 108,
              "elementType": {
                "type": "TSTypeReference",
                "start": 105,
                "end": 106,
                "typeName": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 106,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 109,
        "end": 115,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 111,
          "end": 115,
          "typeName": {
            "type": "Identifier",
            "start": 111,
            "end": 112,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 112,
            "end": 115,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 113,
                "end": 114,
                "typeName": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 114,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 117,
      "end": 158,
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 132,
        "decorators": [],
        "name": "Choice",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 132,
        "end": 135,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 133,
            "end": 134,
            "name": {
              "type": "Identifier",
              "start": 133,
              "end": 134,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "RestElement",
          "start": 136,
          "end": 150,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 139,
            "end": 145,
            "decorators": [],
            "name": "v_args",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 145,
            "end": 150,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 147,
              "end": 150,
              "elementType": {
                "type": "TSTypeReference",
                "start": 147,
                "end": 148,
                "typeName": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 148,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 151,
        "end": 157,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 153,
          "end": 157,
          "typeName": {
            "type": "Identifier",
            "start": 153,
            "end": 154,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 154,
            "end": 157,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 155,
                "end": 156,
                "typeName": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 156,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 159,
      "end": 227,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 174,
        "decorators": [],
        "name": "Choice",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 174,
        "end": 177,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 175,
            "end": 176,
            "name": {
              "type": "Identifier",
              "start": 175,
              "end": 176,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "RestElement",
          "start": 178,
          "end": 194,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 181,
            "end": 187,
            "decorators": [],
            "name": "v_args",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 187,
            "end": 194,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 189,
              "end": 194,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 189,
                "end": 192
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 195,
        "end": 201,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 197,
          "end": 201,
          "typeName": {
            "type": "Identifier",
            "start": 197,
            "end": 198,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 198,
            "end": 201,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 199,
                "end": 200,
                "typeName": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 200,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 201,
        "end": 227,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 207,
            "end": 225,
            "argument": {
              "type": "NewExpression",
              "start": 214,
              "end": 224,
              "callee": {
                "type": "Identifier",
                "start": 218,
                "end": 219,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 219,
                "end": 222,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 220,
                    "end": 221,
                    "typeName": {
                      "type": "Identifier",
                      "start": 220,
                      "end": 221,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              },
              "arguments": []
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

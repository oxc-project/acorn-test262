__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 187,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 32,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 32,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 30,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 26,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 29,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 28,
                "end": 29,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 29,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
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
        "name": "B",
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
      "type": "ClassDeclaration",
      "start": 33,
      "end": 77,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 43,
        "end": 77,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 49,
            "end": 75,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 62,
              "decorators": [],
              "name": "GetEnumerator",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 74,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 64,
                "end": 74,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 67,
                  "end": 74,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 70,
                    "end": 74,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 71,
                      "end": 74,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 72,
                          "end": 73,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 72,
                            "end": 73,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 70,
                      "end": 71,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
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
        "start": 39,
        "end": 40,
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
        "start": 40,
        "end": 43,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 41,
            "end": 42,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 78,
      "end": 119,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 93,
        "decorators": [],
        "name": "Choice",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 97,
          "end": 111,
          "argument": {
            "type": "Identifier",
            "start": 100,
            "end": 106,
            "decorators": [],
            "name": "v_args",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 106,
            "end": 111,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 108,
              "end": 111,
              "elementType": {
                "type": "TSTypeReference",
                "start": 108,
                "end": 109,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 109,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 112,
        "end": 118,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 114,
          "end": 118,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 115,
            "end": 118,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 116,
                "end": 117,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 117,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 114,
            "end": 115,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 93,
        "end": 96,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 94,
            "end": 95,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
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
      "type": "FunctionDeclaration",
      "start": 120,
      "end": 187,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 161,
        "end": 187,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 167,
            "end": 185,
            "argument": {
              "type": "NewExpression",
              "start": 174,
              "end": 184,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 178,
                "end": 179,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 179,
                "end": 182,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 180,
                    "end": 181,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 180,
                      "end": 181,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
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
        "start": 129,
        "end": 135,
        "decorators": [],
        "name": "Choice",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 139,
          "end": 153,
          "argument": {
            "type": "Identifier",
            "start": 142,
            "end": 148,
            "decorators": [],
            "name": "v_args",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 148,
            "end": 153,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 150,
              "end": 153,
              "elementType": {
                "type": "TSTypeReference",
                "start": 150,
                "end": 151,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 151,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 154,
        "end": 160,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 156,
          "end": 160,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 157,
            "end": 160,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 158,
                "end": 159,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 159,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 156,
            "end": 157,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 135,
        "end": 138,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 136,
            "end": 137,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 136,
              "end": 137,
              "decorators": [],
              "name": "T",
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

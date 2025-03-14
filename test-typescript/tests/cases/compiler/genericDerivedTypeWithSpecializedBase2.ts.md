genericDerivedTypeWithSpecializedBase2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 175,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 51,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 38,
        "end": 51,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 44,
            "end": 49,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 48,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 47,
                "end": 48,
                "typeName": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 48,
                  "decorators": [],
                  "name": "T",
                  "optional": false
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
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 37,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 36,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 18,
              "end": 36,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 20,
                  "end": 34,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 20,
                    "end": 26,
                    "decorators": [],
                    "name": "length",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 26,
                    "end": 34,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 28,
                      "end": 34
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
      "start": 53,
      "end": 95,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 82,
        "end": 95,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 88,
            "end": 93,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 92,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 91,
                "end": 92,
                "typeName": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 92,
                  "decorators": [],
                  "name": "U",
                  "optional": false
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
        "start": 59,
        "end": 60,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 72,
        "end": 73,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 73,
        "end": 81,
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 74,
            "end": 80
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 60,
        "end": 63,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 61,
            "end": 62,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 97,
      "end": 139,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 101,
          "end": 138,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 101,
            "end": 138,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 138,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 104,
                "end": 138,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 105,
                  "end": 138,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 106,
                      "end": 137,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 108,
                          "end": 123,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 108,
                            "end": 114,
                            "decorators": [],
                            "name": "length",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
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
                          "type": "TSPropertySignature",
                          "start": 124,
                          "end": 135,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 124,
                            "end": 127,
                            "decorators": [],
                            "name": "foo",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 127,
                            "end": 135,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 129,
                              "end": 135
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 105,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 140,
      "end": 157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 156,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 156,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 145,
              "end": 156,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 147,
                "end": 156,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 148,
                  "end": 156,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 149,
                      "end": 155
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 148,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 158,
      "end": 164,
      "expression": {
        "type": "AssignmentExpression",
        "start": 158,
        "end": 163,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 158,
          "end": 159,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 162,
          "end": 163,
          "decorators": [],
          "name": "y",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```

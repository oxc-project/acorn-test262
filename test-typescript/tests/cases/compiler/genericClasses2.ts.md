genericClasses2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 234,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 27,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 27,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 25,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 24,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 23,
                "end": 24,
                "typeName": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 16,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
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
      "start": 29,
      "end": 100,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 40,
        "end": 100,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 43,
            "end": 55,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
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
              "start": 51,
              "end": 54,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 53,
                "end": 54,
                "typeName": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 54,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 57,
            "end": 74,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
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
              "start": 65,
              "end": 73,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 67,
                "end": 73,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 70,
                  "end": 73,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 71,
                      "end": 72,
                      "typeName": {
                        "type": "Identifier",
                        "start": 71,
                        "end": 72,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 70,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 76,
            "end": 98,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 97,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 86,
                "end": 97,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 89,
                  "end": 97,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 90,
                      "end": 96
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 89,
                  "decorators": [],
                  "name": "Foo",
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
        "start": 35,
        "end": 36,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 36,
        "end": 39,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 37,
            "end": 38,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
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
      "type": "VariableDeclaration",
      "start": 102,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 120,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 120,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 109,
              "end": 120,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 111,
                "end": 120,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 112,
                  "end": 120,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 113,
                      "end": 119
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 112,
                  "decorators": [],
                  "name": "C",
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
      "start": 123,
      "end": 136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 135,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 128,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 131,
            "end": 135,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 131,
              "end": 133,
              "decorators": [],
              "name": "v1",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 134,
              "end": 135,
              "decorators": [],
              "name": "x",
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
      "start": 159,
      "end": 174,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 163,
          "end": 173,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 163,
            "end": 164,
            "decorators": [],
            "name": "w",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 167,
            "end": 173,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 167,
              "end": 171,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 167,
                "end": 169,
                "decorators": [],
                "name": "v1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 170,
                "end": 171,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "decorators": [],
              "name": "a",
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
      "start": 197,
      "end": 212,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 201,
          "end": 211,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 202,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 205,
            "end": 211,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 205,
              "end": 209,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 205,
                "end": 207,
                "decorators": [],
                "name": "v1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 208,
                "end": 209,
                "decorators": [],
                "name": "z",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 210,
              "end": 211,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```

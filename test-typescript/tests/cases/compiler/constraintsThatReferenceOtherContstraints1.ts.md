__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 368,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 20,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 20,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "Object",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 22,
      "end": 51,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 48,
        "end": 51,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 31,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 31,
        "end": 47,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 32,
            "end": 33,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 35,
            "end": 46,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 45,
              "end": 46,
              "typeName": {
                "type": "Identifier",
                "start": 45,
                "end": 46,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
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
      "type": "ClassDeclaration",
      "start": 52,
      "end": 222,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 93,
        "end": 222,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 99,
            "end": 125,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 103,
              "decorators": [],
              "name": "data",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 103,
              "end": 124,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 105,
                "end": 124,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 108,
                  "end": 124,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 109,
                      "end": 115,
                      "typeName": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 115,
                        "decorators": [],
                        "name": "Object",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 117,
                      "end": 123,
                      "typeName": {
                        "type": "Identifier",
                        "start": 117,
                        "end": 123,
                        "decorators": [],
                        "name": "Object",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 108,
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
        "start": 58,
        "end": 61,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 61,
        "end": 92,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 62,
            "end": 78,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 72,
              "end": 78,
              "typeName": {
                "type": "Identifier",
                "start": 72,
                "end": 78,
                "decorators": [],
                "name": "Object",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 80,
            "end": 91,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 90,
              "end": 91,
              "typeName": {
                "type": "Identifier",
                "start": 90,
                "end": 91,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
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
      "start": 224,
      "end": 277,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 228,
          "end": 276,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 228,
            "end": 276,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 229,
              "end": 276,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 231,
                "end": 276,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 234,
                  "end": 276,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 236,
                      "end": 249,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 238,
                          "end": 247,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 238,
                            "end": 239,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 239,
                            "end": 247,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 241,
                              "end": 247
                            }
                          }
                        }
                      ]
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 251,
                      "end": 275,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 253,
                          "end": 263,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 253,
                            "end": 254,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 254,
                            "end": 262,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 256,
                              "end": 262
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 264,
                          "end": 273,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 264,
                            "end": 265,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 265,
                            "end": 273,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 267,
                              "end": 273
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 234,
                  "decorators": [],
                  "name": "Foo",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

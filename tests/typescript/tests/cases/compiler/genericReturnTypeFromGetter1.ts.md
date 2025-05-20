__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 195,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 54,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 54,
        "body": {
          "type": "TSInterfaceBody",
          "start": 22,
          "end": 54,
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 27,
              "end": 52,
              "params": [
                {
                  "type": "Identifier",
                  "start": 32,
                  "end": 47,
                  "decorators": [],
                  "name": "dbSet",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 37,
                    "end": 47,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 39,
                      "end": 47,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 44,
                        "end": 47,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 45,
                            "end": 46,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 45,
                              "end": 46,
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
                        "start": 39,
                        "end": 44,
                        "decorators": [],
                        "name": "DbSet",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 48,
                "end": 51,
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
              "typeParameters": null
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 18,
          "end": 21,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 19,
              "end": 20,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 19,
                "end": 20,
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
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 55,
      "end": 195,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 62,
        "end": 195,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 77,
          "end": 195,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 83,
              "end": 98,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 83,
                "end": 94,
                "decorators": [],
                "name": "_entityType",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 94,
                "end": 97,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 96,
                  "end": 97,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 97,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "value": null
            },
            {
              "type": "MethodDefinition",
              "start": 101,
              "end": 146,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 105,
                "end": 115,
                "decorators": [],
                "name": "entityType",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 115,
                "end": 146,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 118,
                  "end": 146,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 120,
                      "end": 144,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 127,
                        "end": 143,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 127,
                          "end": 131
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 132,
                          "end": 143,
                          "decorators": [],
                          "name": "_entityType",
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
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 68,
          "end": 73,
          "decorators": [],
          "name": "DbSet",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
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
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

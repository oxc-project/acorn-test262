__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 196,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 54,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 54,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 18,
          "end": 21,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 19,
              "end": 20,
              "name": {
                "type": "Identifier",
                "start": 19,
                "end": 20,
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
        "body": {
          "type": "TSInterfaceBody",
          "start": 22,
          "end": 54,
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 27,
              "end": 52,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 32,
                  "end": 47,
                  "name": "dbSet",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 37,
                    "end": 47,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 39,
                      "end": 47,
                      "typeName": {
                        "type": "Identifier",
                        "start": 39,
                        "end": 44,
                        "name": "DbSet",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 44,
                        "end": 47,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 45,
                            "end": 46,
                            "typeName": {
                              "type": "Identifier",
                              "start": 45,
                              "end": 46,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
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
              }
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 55,
      "end": 195,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 62,
        "end": 195,
        "id": {
          "type": "Identifier",
          "start": 68,
          "end": 73,
          "name": "DbSet",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 77,
          "end": 195,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 83,
              "end": 98,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 83,
                "end": 94,
                "name": "_entityType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 94,
                "end": 97,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 96,
                  "end": 97,
                  "typeName": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 97,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 101,
              "end": 146,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 105,
                "end": 115,
                "name": "entityType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 115,
                "end": 146,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "object": {
                          "type": "ThisExpression",
                          "start": 127,
                          "end": 131
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 132,
                          "end": 143,
                          "name": "_entityType",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
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
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

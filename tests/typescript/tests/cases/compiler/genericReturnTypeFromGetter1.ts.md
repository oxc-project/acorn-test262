__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 18
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 19,
                "end": 20
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 19,
              "end": 20
            }
          ],
          "start": 18,
          "end": 21
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dbSet",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DbSet",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 39,
                        "end": 44
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 45,
                              "end": 46
                            },
                            "typeArguments": null,
                            "start": 45,
                            "end": 46
                          }
                        ],
                        "start": 44,
                        "end": 47
                      },
                      "start": 39,
                      "end": 47
                    },
                    "start": 37,
                    "end": 47
                  },
                  "start": 32,
                  "end": 47
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 50,
                    "end": 51
                  },
                  "typeArguments": null,
                  "start": 50,
                  "end": 51
                },
                "start": 48,
                "end": 51
              },
              "start": 27,
              "end": 52
            }
          ],
          "start": 22,
          "end": 54
        },
        "declare": false,
        "start": 7,
        "end": 54
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 54
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "DbSet",
          "optional": false,
          "typeAnnotation": null,
          "start": 68,
          "end": 73
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 74,
                "end": 75
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 74,
              "end": 75
            }
          ],
          "start": 73,
          "end": 76
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "_entityType",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 94
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 96,
                    "end": 97
                  },
                  "typeArguments": null,
                  "start": 96,
                  "end": 97
                },
                "start": 94,
                "end": 97
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 83,
              "end": 98
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "entityType",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 115
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 127,
                          "end": 131
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_entityType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 132,
                          "end": 143
                        },
                        "optional": false,
                        "computed": false,
                        "start": 127,
                        "end": 143
                      },
                      "start": 120,
                      "end": 144
                    }
                  ],
                  "start": 118,
                  "end": 146
                },
                "expression": false,
                "start": 115,
                "end": 146
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 101,
              "end": 146
            }
          ],
          "start": 77,
          "end": 195
        },
        "abstract": false,
        "declare": false,
        "start": 62,
        "end": 195
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 55,
      "end": 195
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 195
}
```

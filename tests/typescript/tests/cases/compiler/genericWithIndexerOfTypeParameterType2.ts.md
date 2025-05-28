__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 269,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 101,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 101,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 23,
          "decorators": [],
          "name": "Collection",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 23,
          "end": 53,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 24,
              "end": 52,
              "name": {
                "type": "Identifier",
                "start": 24,
                "end": 29,
                "decorators": [],
                "name": "TItem",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 38,
                "end": 52,
                "typeName": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 52,
                  "decorators": [],
                  "name": "CollectionItem",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
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
          "start": 54,
          "end": 101,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 60,
              "end": 99,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 60,
                "end": 71,
                "decorators": [],
                "name": "_itemsByKey",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 71,
                "end": 98,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 73,
                  "end": 98,
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "start": 75,
                      "end": 96,
                      "parameters": [
                        {
                          "type": "Identifier",
                          "start": 76,
                          "end": 87,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 79,
                            "end": 87,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 81,
                              "end": 87
                            }
                          }
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 88,
                        "end": 95,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 90,
                          "end": 95,
                          "typeName": {
                            "type": "Identifier",
                            "start": 90,
                            "end": 95,
                            "decorators": [],
                            "name": "TItem",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null
                    }
                  ]
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 103,
      "end": 165,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 110,
        "end": 165,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 116,
          "end": 120,
          "decorators": [],
          "name": "List",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "start": 129,
          "end": 139,
          "decorators": [],
          "name": "Collection",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 139,
          "end": 149,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 140,
              "end": 148,
              "typeName": {
                "type": "Identifier",
                "start": 140,
                "end": 148,
                "decorators": [],
                "name": "ListItem",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 149,
          "end": 165,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 155,
              "end": 163,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 155,
                "end": 158,
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 158,
                "end": 163,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 161,
                  "end": 163,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 167,
      "end": 197,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 174,
        "end": 197,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 180,
          "end": 194,
          "decorators": [],
          "name": "CollectionItem",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 195,
          "end": 197,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 199,
      "end": 269,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 206,
        "end": 269,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 212,
          "end": 220,
          "decorators": [],
          "name": "ListItem",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "start": 229,
          "end": 243,
          "decorators": [],
          "name": "CollectionItem",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 244,
          "end": 269,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 250,
              "end": 267,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 250,
                "end": 257,
                "decorators": [],
                "name": "__isNew",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 257,
                "end": 266,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 259,
                  "end": 266
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

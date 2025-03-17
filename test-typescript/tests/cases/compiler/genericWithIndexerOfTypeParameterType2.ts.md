__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 270,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 101,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 101,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 23,
          "name": "Collection",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 54,
          "end": 101,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 60,
              "end": 99,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 60,
                "end": 71,
                "name": "_itemsByKey",
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
                          "name": "key",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 79,
                            "end": 87,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 81,
                              "end": 87
                            }
                          },
                          "decorators": [],
                          "optional": false
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
                            "name": "TItem",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
              "accessibility": null
            }
          ]
        },
        "decorators": [],
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
                "name": "TItem",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 38,
                "end": 52,
                "typeName": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 52,
                  "name": "CollectionItem",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 103,
      "end": 165,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 110,
        "end": 165,
        "id": {
          "type": "Identifier",
          "start": 116,
          "end": 120,
          "name": "List",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "Identifier",
          "start": 129,
          "end": 139,
          "name": "Collection",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 149,
          "end": 165,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 155,
              "end": 163,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 155,
                "end": 158,
                "name": "Bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 158,
                "end": 163,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 161,
                  "end": 163,
                  "body": []
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
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
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
                "name": "ListItem",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 167,
      "end": 197,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 174,
        "end": 197,
        "id": {
          "type": "Identifier",
          "start": 180,
          "end": 194,
          "name": "CollectionItem",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 195,
          "end": 197,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 199,
      "end": 269,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 206,
        "end": 269,
        "id": {
          "type": "Identifier",
          "start": 212,
          "end": 220,
          "name": "ListItem",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "Identifier",
          "start": 229,
          "end": 243,
          "name": "CollectionItem",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 244,
          "end": 269,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 250,
              "end": 267,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 250,
                "end": 257,
                "name": "__isNew",
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
                "start": 257,
                "end": 266,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 259,
                  "end": 266
                }
              },
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
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

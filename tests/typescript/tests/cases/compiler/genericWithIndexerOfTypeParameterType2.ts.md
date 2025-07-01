__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Collection",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 23
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TItem",
                "optional": false,
                "typeAnnotation": null,
                "start": 24,
                "end": 29
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CollectionItem",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 38,
                  "end": 52
                },
                "typeArguments": null,
                "start": 38,
                "end": 52
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 24,
              "end": 52
            }
          ],
          "start": 23,
          "end": 53
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
                "name": "_itemsByKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 60,
                "end": 71
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "parameters": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 81,
                              "end": 87
                            },
                            "start": 79,
                            "end": 87
                          },
                          "start": 76,
                          "end": 87
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TItem",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 90,
                            "end": 95
                          },
                          "typeArguments": null,
                          "start": 90,
                          "end": 95
                        },
                        "start": 88,
                        "end": 95
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null,
                      "start": 75,
                      "end": 96
                    }
                  ],
                  "start": 73,
                  "end": 98
                },
                "start": 71,
                "end": 98
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
              "start": 60,
              "end": 99
            }
          ],
          "start": 54,
          "end": 101
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 101
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 101
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "List",
          "optional": false,
          "typeAnnotation": null,
          "start": 116,
          "end": 120
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Collection",
          "optional": false,
          "typeAnnotation": null,
          "start": 129,
          "end": 139
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ListItem",
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 148
              },
              "typeArguments": null,
              "start": 140,
              "end": 148
            }
          ],
          "start": 139,
          "end": 149
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 158
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
                  "body": [],
                  "start": 161,
                  "end": 163
                },
                "expression": false,
                "start": 158,
                "end": 163
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 155,
              "end": 163
            }
          ],
          "start": 149,
          "end": 165
        },
        "abstract": false,
        "declare": false,
        "start": 110,
        "end": 165
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 103,
      "end": 165
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CollectionItem",
          "optional": false,
          "typeAnnotation": null,
          "start": 180,
          "end": 194
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 195,
          "end": 197
        },
        "abstract": false,
        "declare": false,
        "start": 174,
        "end": 197
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 167,
      "end": 197
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ListItem",
          "optional": false,
          "typeAnnotation": null,
          "start": 212,
          "end": 220
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "CollectionItem",
          "optional": false,
          "typeAnnotation": null,
          "start": 229,
          "end": 243
        },
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
                "name": "__isNew",
                "optional": false,
                "typeAnnotation": null,
                "start": 250,
                "end": 257
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 259,
                  "end": 266
                },
                "start": 257,
                "end": 266
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
              "start": 250,
              "end": 267
            }
          ],
          "start": 244,
          "end": 269
        },
        "abstract": false,
        "declare": false,
        "start": 206,
        "end": 269
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 199,
      "end": 269
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 269
}
```

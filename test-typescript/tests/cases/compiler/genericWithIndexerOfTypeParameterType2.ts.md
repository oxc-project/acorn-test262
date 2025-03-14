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
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 101,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 54,
          "end": 101,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 60,
              "end": 99,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 60,
                "end": 71,
                "decorators": [],
                "name": "_itemsByKey",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
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
                      "readonly": false,
                      "static": false,
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
                            "optional": false
                          }
                        }
                      }
                    }
                  ]
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
          "start": 13,
          "end": 23,
          "decorators": [],
          "name": "Collection",
          "optional": false
        },
        "implements": [],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 23,
          "end": 53,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 24,
              "end": 52,
              "const": false,
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
                  "optional": false
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 24,
                "end": 29,
                "decorators": [],
                "name": "TItem",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 103,
      "end": 165,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 110,
        "end": 165,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 149,
          "end": 165,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 155,
              "end": 163,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 155,
                "end": 158,
                "decorators": [],
                "name": "Bar",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 158,
                "end": 163,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 161,
                  "end": 163,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 116,
          "end": 120,
          "decorators": [],
          "name": "List",
          "optional": false
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 129,
          "end": 139,
          "decorators": [],
          "name": "Collection",
          "optional": false
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
                "optional": false
              }
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 167,
      "end": 197,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 174,
        "end": 197,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 195,
          "end": 197,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 180,
          "end": 194,
          "decorators": [],
          "name": "CollectionItem",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 199,
      "end": 269,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 206,
        "end": 269,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 244,
          "end": 269,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 250,
              "end": 267,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 250,
                "end": 257,
                "decorators": [],
                "name": "__isNew",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
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
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 212,
          "end": 220,
          "decorators": [],
          "name": "ListItem",
          "optional": false
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 229,
          "end": 243,
          "decorators": [],
          "name": "CollectionItem",
          "optional": false
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

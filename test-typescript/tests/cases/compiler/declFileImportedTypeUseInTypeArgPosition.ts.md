__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 156,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 17,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 17,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "List",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
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
    {
      "type": "TSModuleDeclaration",
      "start": 18,
      "end": 65,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 40,
        "end": 65,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 46,
            "end": 63,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 56,
              "end": 63,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 52,
              "end": 55,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 33,
        "end": 39,
        "raw": "'mod1'",
        "value": "mod1"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 67,
      "end": 154,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 88,
        "end": 154,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 94,
            "end": 121,
            "id": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 105,
              "end": 120,
              "expression": {
                "type": "Literal",
                "start": 113,
                "end": 119,
                "raw": "'mod1'",
                "value": "mod1"
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 126,
            "end": 152,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 133,
              "end": 152,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 137,
                  "end": 151,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 151,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 138,
                      "end": 151,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 140,
                        "end": 151,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 144,
                          "end": 151,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 145,
                              "end": 150,
                              "typeArguments": null,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 145,
                                "end": 150,
                                "left": {
                                  "type": "Identifier",
                                  "start": 145,
                                  "end": 146,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 147,
                                  "end": 150,
                                  "decorators": [],
                                  "name": "Foo",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 140,
                          "end": 144,
                          "decorators": [],
                          "name": "List",
                          "optional": false,
                          "typeAnnotation": null
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
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 82,
        "end": 87,
        "raw": "'moo'",
        "value": "moo"
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

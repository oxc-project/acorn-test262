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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
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
        "start": 14,
        "end": 17,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 18,
      "end": 65,
      "id": {
        "type": "Literal",
        "start": 33,
        "end": 39,
        "value": "mod1",
        "raw": "'mod1'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 40,
        "end": 65,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 46,
            "end": 63,
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
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 56,
              "end": 63,
              "body": []
            },
            "abstract": false,
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 67,
      "end": 154,
      "id": {
        "type": "Literal",
        "start": 82,
        "end": 87,
        "value": "moo",
        "raw": "'moo'"
      },
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
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 105,
              "end": 120,
              "expression": {
                "type": "Literal",
                "start": 113,
                "end": 119,
                "value": "mod1",
                "raw": "'mod1'"
              }
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 126,
            "end": 152,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 133,
              "end": 152,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 137,
                  "end": 151,
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 140,
                          "end": 144,
                          "decorators": [],
                          "name": "List",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 144,
                          "end": 151,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 145,
                              "end": 150,
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
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 25
            },
            "typeParameters": null,
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
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 36,
                    "end": 38
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 40,
                      "end": 46
                    },
                    "start": 38,
                    "end": 46
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
                  "start": 36,
                  "end": 47
                }
              ],
              "start": 26,
              "end": 53
            },
            "abstract": false,
            "declare": false,
            "start": 18,
            "end": 53
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "beez",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 76,
                          "end": 81
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 82,
                                "end": 83
                              },
                              "typeArguments": null,
                              "start": 82,
                              "end": 83
                            }
                          ],
                          "start": 81,
                          "end": 84
                        },
                        "start": 76,
                        "end": 84
                      },
                      "start": 74,
                      "end": 84
                    },
                    "start": 70,
                    "end": 84
                  },
                  "init": null,
                  "definite": false,
                  "start": 70,
                  "end": 84
                }
              ],
              "declare": false,
              "start": 66,
              "end": 85
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 59,
            "end": 85
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "beez2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 101,
                    "end": 106
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 113,
                      "end": 118
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 119,
                            "end": 120
                          },
                          "typeArguments": null,
                          "start": 119,
                          "end": 120
                        }
                      ],
                      "start": 118,
                      "end": 121
                    },
                    "arguments": [],
                    "start": 109,
                    "end": 123
                  },
                  "definite": false,
                  "start": 101,
                  "end": 123
                }
              ],
              "declare": false,
              "start": 97,
              "end": 124
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 90,
            "end": 124
          }
        ],
        "start": 12,
        "end": 126
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 126
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 126
}
```

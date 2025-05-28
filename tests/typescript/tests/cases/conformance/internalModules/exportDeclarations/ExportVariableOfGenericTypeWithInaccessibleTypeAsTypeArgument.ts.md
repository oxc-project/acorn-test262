__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 123,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 123,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 123,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 15,
            "end": 50,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 23,
              "end": 50,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 33,
                  "end": 44,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 35,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 35,
                    "end": 43,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 37,
                      "end": 43
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
          {
            "type": "ExportNamedDeclaration",
            "start": 56,
            "end": 82,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 63,
              "end": 82,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 67,
                  "end": 81,
                  "id": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 81,
                    "decorators": [],
                    "name": "beez",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 71,
                      "end": 81,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 73,
                        "end": 81,
                        "typeName": {
                          "type": "Identifier",
                          "start": 73,
                          "end": 78,
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 78,
                          "end": 81,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 79,
                              "end": 80,
                              "typeName": {
                                "type": "Identifier",
                                "start": 79,
                                "end": 80,
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 87,
            "end": 121,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 94,
              "end": 121,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 98,
                  "end": 120,
                  "id": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 103,
                    "decorators": [],
                    "name": "beez2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 106,
                    "end": 120,
                    "callee": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 115,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 115,
                      "end": 118,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 116,
                          "end": 117,
                          "typeName": {
                            "type": "Identifier",
                            "start": 116,
                            "end": 117,
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    "arguments": []
                  },
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
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

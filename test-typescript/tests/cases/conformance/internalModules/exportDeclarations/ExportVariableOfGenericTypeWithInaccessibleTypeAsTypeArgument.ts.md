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
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 23,
              "end": 50,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 33,
                  "end": 44,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 35,
                    "name": "id",
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
                    "start": 35,
                    "end": 43,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 37,
                      "end": 43
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
          {
            "type": "ExportNamedDeclaration",
            "start": 56,
            "end": 82,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 63,
              "end": 82,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 67,
                  "end": 81,
                  "id": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 81,
                    "name": "beez",
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
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                                "name": "B",
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
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 87,
            "end": 121,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 94,
              "end": 121,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 98,
                  "end": 120,
                  "id": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 103,
                    "name": "beez2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 106,
                    "end": 120,
                    "callee": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 115,
                      "name": "Array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
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
                            "name": "B",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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

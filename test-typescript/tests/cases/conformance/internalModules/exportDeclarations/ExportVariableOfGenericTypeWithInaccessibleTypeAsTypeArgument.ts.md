ExportVariableOfGenericTypeWithInaccessibleTypeAsTypeArgument.ts
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
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 123,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 15,
            "end": 50,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 23,
              "end": 50,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 33,
                  "end": 44,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 35,
                    "decorators": [],
                    "name": "id",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
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
                  "value": null
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 56,
            "end": 82,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 63,
              "end": 82,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 67,
                  "end": 81,
                  "definite": false,
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
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 73,
                          "end": 78,
                          "decorators": [],
                          "name": "Array",
                          "optional": false
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 87,
            "end": 121,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 94,
              "end": 121,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 98,
                  "end": 120,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 103,
                    "decorators": [],
                    "name": "beez2",
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 106,
                    "end": 120,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 115,
                      "decorators": [],
                      "name": "Array",
                      "optional": false
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
                            "optional": false
                          }
                        }
                      ]
                    }
                  }
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
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```

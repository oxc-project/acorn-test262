interMixingModulesInterfaces3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 205,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 185,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 185,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 16,
            "end": 106,
            "body": {
              "type": "TSModuleBlock",
              "start": 25,
              "end": 106,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 35,
                  "end": 100,
                  "attributes": [],
                  "declaration": {
                    "type": "FunctionDeclaration",
                    "start": 42,
                    "end": 100,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 64,
                      "end": 100,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 78,
                          "end": 90,
                          "argument": {
                            "type": "Literal",
                            "start": 85,
                            "end": 89,
                            "raw": "null",
                            "value": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 58,
                      "decorators": [],
                      "name": "createB",
                      "optional": false
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 60,
                      "end": 63,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 62,
                        "end": 63,
                        "typeName": {
                          "type": "Identifier",
                          "start": 62,
                          "end": 63,
                          "decorators": [],
                          "name": "B",
                          "optional": false
                        }
                      }
                    }
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
              "start": 23,
              "end": 24,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "kind": "module"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 112,
            "end": 183,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 119,
              "end": 183,
              "body": {
                "type": "TSInterfaceBody",
                "start": 131,
                "end": 183,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 141,
                    "end": 154,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 141,
                      "end": 145,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 145,
                      "end": 153,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 147,
                        "end": 153
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 163,
                    "end": 177,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 168,
                      "decorators": [],
                      "name": "value",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 168,
                      "end": 176,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 170,
                        "end": 176
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 129,
                "end": 130,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            },
            "exportKind": "type",
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
    },
    {
      "type": "VariableDeclaration",
      "start": 187,
      "end": 205,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 191,
          "end": 204,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 197,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 192,
              "end": 197,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 194,
                "end": 197,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 194,
                  "end": 197,
                  "left": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 195,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 196,
                    "end": 197,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 200,
            "end": 204,
            "raw": "null",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```

__ESTREE_TEST__:PASS:
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
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 87,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 23,
              "end": 87,
              "body": {
                "type": "TSInterfaceBody",
                "start": 35,
                "end": 87,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 45,
                    "end": 58,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 49,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 49,
                      "end": 57,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 51,
                        "end": 57
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 67,
                    "end": 81,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 72,
                      "decorators": [],
                      "name": "value",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 72,
                      "end": 80,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 74,
                        "end": 80
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 33,
                "end": 34,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "TSModuleDeclaration",
            "start": 93,
            "end": 183,
            "body": {
              "type": "TSModuleBlock",
              "start": 102,
              "end": 183,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 112,
                  "end": 177,
                  "attributes": [],
                  "declaration": {
                    "type": "FunctionDeclaration",
                    "start": 119,
                    "end": 177,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 141,
                      "end": 177,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 155,
                          "end": 167,
                          "argument": {
                            "type": "Literal",
                            "start": 162,
                            "end": 166,
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
                      "start": 128,
                      "end": 135,
                      "decorators": [],
                      "name": "createB",
                      "optional": false
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 137,
                      "end": 140,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 139,
                        "end": 140,
                        "typeName": {
                          "type": "Identifier",
                          "start": 139,
                          "end": 140,
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
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "kind": "module"
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
  "sourceType": "script",
  "hashbang": null
}
```

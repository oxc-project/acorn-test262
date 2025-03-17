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
        "end": 185,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 16,
            "end": 106,
            "id": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 25,
              "end": 106,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 35,
                  "end": 100,
                  "declaration": {
                    "type": "FunctionDeclaration",
                    "start": 42,
                    "end": 100,
                    "id": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 58,
                      "name": "createB",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "value": null,
                            "raw": "null"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
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
                          "name": "B",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 112,
            "end": 183,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 119,
              "end": 183,
              "id": {
                "type": "Identifier",
                "start": 129,
                "end": 130,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 141,
                      "end": 145,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 145,
                      "end": 153,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 147,
                        "end": 153
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 163,
                    "end": 177,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 168,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 168,
                      "end": 176,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 170,
                        "end": 176
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
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
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 197,
            "name": "x",
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
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 196,
                    "end": 197,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 200,
            "end": 204,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

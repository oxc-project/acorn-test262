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
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 37
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 48,
                      "end": 52
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 54,
                        "end": 60
                      },
                      "start": 52,
                      "end": 60
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 48,
                    "end": 61
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 70,
                      "end": 75
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 77,
                        "end": 83
                      },
                      "start": 75,
                      "end": 83
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 70,
                    "end": 84
                  }
                ],
                "start": 38,
                "end": 90
              },
              "declare": false,
              "start": 26,
              "end": 90
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 19,
            "end": 90
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 107
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "createB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 134,
                      "end": 141
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 145,
                          "end": 146
                        },
                        "typeArguments": null,
                        "start": 145,
                        "end": 146
                      },
                      "start": 143,
                      "end": 146
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 168,
                            "end": 172
                          },
                          "start": 161,
                          "end": 173
                        }
                      ],
                      "start": 147,
                      "end": 183
                    },
                    "expression": false,
                    "start": 125,
                    "end": 183
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 118,
                  "end": 183
                }
              ],
              "start": 108,
              "end": 189
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 96,
            "end": 189
          }
        ],
        "start": 12,
        "end": 191
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 191
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 200,
                    "end": 201
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 202,
                    "end": 203
                  },
                  "start": 200,
                  "end": 203
                },
                "typeArguments": null,
                "start": 200,
                "end": 203
              },
              "start": 198,
              "end": 203
            },
            "start": 197,
            "end": 203
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 206,
            "end": 210
          },
          "definite": false,
          "start": 197,
          "end": 210
        }
      ],
      "declare": false,
      "start": 193,
      "end": 211
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 211
}
```

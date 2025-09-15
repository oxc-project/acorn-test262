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
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 113,
                "end": 114
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
                        "start": 141,
                        "end": 148
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
                            "start": 152,
                            "end": 153
                          },
                          "typeArguments": null,
                          "start": 152,
                          "end": 153
                        },
                        "start": 150,
                        "end": 153
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
                              "start": 175,
                              "end": 179
                            },
                            "start": 168,
                            "end": 180
                          }
                        ],
                        "start": 154,
                        "end": 190
                      },
                      "expression": false,
                      "start": 132,
                      "end": 190
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 125,
                    "end": 190
                  }
                ],
                "start": 115,
                "end": 196
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 103,
              "end": 196
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 96,
            "end": 196
          }
        ],
        "start": 12,
        "end": 198
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 198
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
                    "start": 207,
                    "end": 208
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 209,
                    "end": 210
                  },
                  "start": 207,
                  "end": 210
                },
                "typeArguments": null,
                "start": 207,
                "end": 210
              },
              "start": 205,
              "end": 210
            },
            "start": 204,
            "end": 210
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 213,
                  "end": 214
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 215,
                  "end": 216
                },
                "optional": false,
                "computed": false,
                "start": 213,
                "end": 216
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "createB",
                "optional": false,
                "typeAnnotation": null,
                "start": 217,
                "end": 224
              },
              "optional": false,
              "computed": false,
              "start": 213,
              "end": 224
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 213,
            "end": 226
          },
          "definite": false,
          "start": 204,
          "end": 226
        }
      ],
      "declare": false,
      "start": 200,
      "end": 227
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 227
}
```

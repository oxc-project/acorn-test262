__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 221,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 192,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 192,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 113,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 23,
              "end": 113,
              "body": {
                "type": "TSModuleBlock",
                "start": 32,
                "end": 113,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 42,
                    "end": 107,
                    "attributes": [],
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 49,
                      "end": 107,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 71,
                        "end": 107,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 85,
                            "end": 97,
                            "argument": {
                              "type": "Literal",
                              "start": 92,
                              "end": 96,
                              "raw": "null",
                              "value": null,
                              "regex": null,
                              "bigint": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 65,
                        "decorators": [],
                        "name": "createB",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 67,
                        "end": 70,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 69,
                          "end": 70,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 69,
                            "end": 70,
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeParameters": null
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
                "start": 30,
                "end": 31,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "module"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 119,
            "end": 190,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 126,
              "end": 190,
              "body": {
                "type": "TSInterfaceBody",
                "start": 138,
                "end": 190,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 148,
                    "end": 161,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 152,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 152,
                      "end": 160,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 154,
                        "end": 160
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 170,
                    "end": 184,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 170,
                      "end": 175,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 175,
                      "end": 183,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 177,
                        "end": 183
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 136,
                "end": 137,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 194,
      "end": 221,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 220,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 204,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 204,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 201,
                "end": 204,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 201,
                  "end": 204,
                  "left": {
                    "type": "Identifier",
                    "start": 201,
                    "end": 202,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 203,
                    "end": 204,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 207,
            "end": 220,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 207,
              "end": 218,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 207,
                "end": 210,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 208,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 210,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 211,
                "end": 218,
                "decorators": [],
                "name": "createB",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
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

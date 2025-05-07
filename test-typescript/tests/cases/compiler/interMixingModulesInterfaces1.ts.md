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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 49,
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 72,
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 93,
            "end": 190,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 100,
              "end": 190,
              "body": {
                "type": "TSModuleBlock",
                "start": 109,
                "end": 190,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 119,
                    "end": 184,
                    "attributes": [],
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 126,
                      "end": 184,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 148,
                        "end": 184,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 162,
                            "end": 174,
                            "argument": {
                              "type": "Literal",
                              "start": 169,
                              "end": 173,
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
                        "start": 135,
                        "end": 142,
                        "decorators": [],
                        "name": "createB",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 144,
                        "end": 147,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 146,
                          "end": 147,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 146,
                            "end": 147,
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
                "start": 107,
                "end": 108,
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

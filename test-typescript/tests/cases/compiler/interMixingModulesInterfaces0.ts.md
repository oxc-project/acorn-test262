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
        "end": 192,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 113,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 23,
              "end": 113,
              "id": {
                "type": "Identifier",
                "start": 30,
                "end": 31,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 32,
                "end": 113,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 42,
                    "end": 107,
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 49,
                      "end": 107,
                      "id": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 65,
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
                        "start": 67,
                        "end": 70,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 69,
                          "end": 70,
                          "typeName": {
                            "type": "Identifier",
                            "start": 69,
                            "end": 70,
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 119,
            "end": 190,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 126,
              "end": 190,
              "id": {
                "type": "Identifier",
                "start": 136,
                "end": 137,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 138,
                "end": 190,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 148,
                    "end": 161,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 152,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 152,
                      "end": 160,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 154,
                        "end": 160
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 170,
                    "end": 184,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 170,
                      "end": 175,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 175,
                      "end": 183,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 177,
                        "end": 183
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
      "start": 194,
      "end": 221,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 220,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 204,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 204,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 201,
                "end": 204,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 201,
                  "end": 204,
                  "left": {
                    "type": "Identifier",
                    "start": 201,
                    "end": 202,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 203,
                    "end": 204,
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
            "type": "CallExpression",
            "start": 207,
            "end": 220,
            "callee": {
              "type": "MemberExpression",
              "start": 207,
              "end": 218,
              "object": {
                "type": "MemberExpression",
                "start": 207,
                "end": 210,
                "object": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 208,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 210,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 211,
                "end": 218,
                "name": "createB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
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

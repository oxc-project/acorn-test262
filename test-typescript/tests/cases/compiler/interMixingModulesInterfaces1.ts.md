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
            "end": 87,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 23,
              "end": 87,
              "id": {
                "type": "Identifier",
                "start": 33,
                "end": 34,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 49,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 49,
                      "end": 57,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 51,
                        "end": 57
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 67,
                    "end": 81,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 72,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 72,
                      "end": 80,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 74,
                        "end": 80
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 93,
            "end": 190,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 100,
              "end": 190,
              "id": {
                "type": "Identifier",
                "start": 107,
                "end": 108,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 109,
                "end": 190,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 119,
                    "end": 184,
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 126,
                      "end": 184,
                      "id": {
                        "type": "Identifier",
                        "start": 135,
                        "end": 142,
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
                        "start": 144,
                        "end": 147,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 146,
                          "end": 147,
                          "typeName": {
                            "type": "Identifier",
                            "start": 146,
                            "end": 147,
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

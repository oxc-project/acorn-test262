typeNamedUndefined1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 294,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 178,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 178,
        "body": {
          "type": "TSModuleBlock",
          "start": 20,
          "end": 178,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 26,
              "end": 45,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 32,
                  "end": 44,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
                    "decorators": [],
                    "name": "s",
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 36,
                    "end": 44,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 42,
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false
                    },
                    "optional": false
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 50,
              "end": 83,
              "attributes": [],
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "start": 57,
                "end": 83,
                "declare": false,
                "id": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 71,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 74,
                  "end": 82,
                  "exprName": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 82,
                    "decorators": [],
                    "name": "s",
                    "optional": false
                  }
                }
              },
              "exportKind": "type",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 88,
              "end": 176,
              "attributes": [],
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 95,
                "end": 176,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 131,
                  "end": 176,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 161,
                      "end": 170,
                      "argument": {
                        "type": "Identifier",
                        "start": 168,
                        "end": 169,
                        "decorators": [],
                        "name": "p",
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 105,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 106,
                    "end": 118,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 107,
                      "end": 118,
                      "typeAnnotation": {
                        "type": "TSUndefinedKeyword",
                        "start": 109,
                        "end": 118
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 119,
                  "end": 130,
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "start": 121,
                    "end": 130
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
          "start": 17,
          "end": 19,
          "decorators": [],
          "name": "ns",
          "optional": false
        },
        "kind": "namespace"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 180,
      "end": 264,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 187,
        "end": 264,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 215,
          "end": 264,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 253,
              "end": 262,
              "argument": {
                "type": "Identifier",
                "start": 260,
                "end": 261,
                "decorators": [],
                "name": "p",
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 196,
          "end": 197,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 198,
            "end": 213,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 213,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 201,
                "end": 213,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 201,
                  "end": 213,
                  "left": {
                    "type": "Identifier",
                    "start": 201,
                    "end": 203,
                    "decorators": [],
                    "name": "ns",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 213,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false
                  }
                }
              }
            }
          }
        ]
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 266,
      "end": 293,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 273,
        "end": 293,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 278,
          "end": 287,
          "decorators": [],
          "name": "undefined",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 290,
          "end": 292,
          "literal": {
            "type": "Literal",
            "start": 290,
            "end": 292,
            "raw": "\"\"",
            "value": ""
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```

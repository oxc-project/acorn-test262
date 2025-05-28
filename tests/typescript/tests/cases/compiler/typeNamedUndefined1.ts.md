__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 293,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 178,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 178,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 19,
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 20,
          "end": 178,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 26,
              "end": 45,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 32,
                  "end": 44,
                  "id": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 36,
                    "end": 44,
                    "callee": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 42,
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 50,
              "end": 83,
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "start": 57,
                "end": 83,
                "id": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 71,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 88,
              "end": 176,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 95,
                "end": 176,
                "id": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 105,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
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
                },
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
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "expression": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 180,
      "end": 264,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 187,
        "end": 264,
        "id": {
          "type": "Identifier",
          "start": 196,
          "end": 197,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 213,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": null,
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
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 266,
      "end": 293,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 273,
        "end": 293,
        "id": {
          "type": "Identifier",
          "start": 278,
          "end": 287,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 290,
          "end": 292,
          "literal": {
            "type": "Literal",
            "start": 290,
            "end": 292,
            "value": "",
            "raw": "\"\""
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

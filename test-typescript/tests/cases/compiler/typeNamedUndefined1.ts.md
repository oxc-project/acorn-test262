__ESTREE_TEST__:PASS:
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
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 178,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 19,
          "name": "ns",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 32,
                  "end": 44,
                  "id": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 36,
                    "end": 44,
                    "callee": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 42,
                      "name": "Symbol",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "definite": false
                }
              ],
              "kind": "const",
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
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 106,
                    "end": 118,
                    "name": "p",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 107,
                      "end": 118,
                      "typeAnnotation": {
                        "type": "TSUndefinedKeyword",
                        "start": 109,
                        "end": 118
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
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
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "namespace",
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
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 198,
            "end": 213,
            "name": "p",
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
                    "name": "ns",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 213,
                    "name": "undefined",
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
          }
        ],
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
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "name": "undefined",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

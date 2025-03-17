__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 146,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 57,
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
        "end": 57,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 55,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 22,
              "end": 55,
              "id": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "name": "B",
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
                  "start": 36,
                  "end": 40,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 37,
                    "end": 40,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 39,
                      "end": 40,
                      "typeName": {
                        "type": "Identifier",
                        "start": 39,
                        "end": 40,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                "start": 42,
                "end": 55,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 44,
                    "end": 53,
                    "argument": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 52,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 32,
                "end": 35,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 33,
                    "end": 34,
                    "name": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 34,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": null
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
      "type": "TSModuleDeclaration",
      "start": 59,
      "end": 125,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 67,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 68,
        "end": 125,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 74,
            "end": 123,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 81,
              "end": 123,
              "id": {
                "type": "Identifier",
                "start": 88,
                "end": 89,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 90,
                "end": 123,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 100,
                    "end": 117,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 107,
                      "end": 117,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 111,
                          "end": 116,
                          "id": {
                            "type": "Identifier",
                            "start": 111,
                            "end": 112,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 115,
                            "end": 116,
                            "value": 1,
                            "raw": "1"
                          },
                          "definite": false
                        }
                      ],
                      "kind": "var",
                      "declare": false
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
      "start": 127,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 137,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 137,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 137,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 134,
                "end": 137,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 134,
                  "end": 137,
                  "left": {
                    "type": "Identifier",
                    "start": 134,
                    "end": 135,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 137,
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 139,
      "end": 146,
      "expression": {
        "type": "CallExpression",
        "start": 139,
        "end": 145,
        "callee": {
          "type": "MemberExpression",
          "start": 139,
          "end": 142,
          "object": {
            "type": "Identifier",
            "start": 139,
            "end": 140,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 141,
            "end": 142,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 143,
            "end": 144,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

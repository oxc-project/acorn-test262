genericFunduleInModule2.ts
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
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 57,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 55,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 22,
              "end": 55,
              "async": false,
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
                      "decorators": [],
                      "name": "x",
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
                "start": 31,
                "end": 32,
                "decorators": [],
                "name": "B",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 36,
                  "end": 40,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 32,
                "end": 35,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 33,
                    "end": 34,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 34,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
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
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 59,
      "end": 125,
      "body": {
        "type": "TSModuleBlock",
        "start": 68,
        "end": 125,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 74,
            "end": 123,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 81,
              "end": 123,
              "body": {
                "type": "TSModuleBlock",
                "start": 90,
                "end": 123,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 100,
                    "end": 117,
                    "attributes": [],
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 107,
                      "end": 117,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 111,
                          "end": 116,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 111,
                            "end": 112,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 115,
                            "end": 116,
                            "raw": "1",
                            "value": 1
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var"
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
                "start": 88,
                "end": 89,
                "decorators": [],
                "name": "B",
                "optional": false
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
        "start": 66,
        "end": 67,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "kind": "module"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 137,
            "decorators": [],
            "name": "b",
            "optional": false,
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
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 137,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 139,
      "end": 146,
      "expression": {
        "type": "CallExpression",
        "start": 139,
        "end": 145,
        "arguments": [
          {
            "type": "Literal",
            "start": 143,
            "end": 144,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 139,
          "end": 142,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 139,
            "end": 140,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 141,
            "end": 142,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```

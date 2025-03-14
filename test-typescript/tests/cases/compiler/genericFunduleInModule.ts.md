__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 132,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 111,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 111,
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 60,
            "end": 109,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 67,
              "end": 109,
              "body": {
                "type": "TSModuleBlock",
                "start": 76,
                "end": 109,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 86,
                    "end": 103,
                    "attributes": [],
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 93,
                      "end": 103,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 97,
                          "end": 102,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 97,
                            "end": 98,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 101,
                            "end": 102,
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
                "start": 74,
                "end": 75,
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
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 113,
      "end": 124,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 123,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 123,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 123,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 120,
                "end": 123,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 120,
                  "end": 123,
                  "left": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 121,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 122,
                    "end": 123,
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
      "start": 125,
      "end": 132,
      "expression": {
        "type": "CallExpression",
        "start": 125,
        "end": 131,
        "arguments": [
          {
            "type": "Literal",
            "start": 129,
            "end": 130,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 125,
          "end": 128,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 125,
            "end": 126,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 127,
            "end": 128,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

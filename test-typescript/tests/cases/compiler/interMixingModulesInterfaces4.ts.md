__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 223,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 190,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 190,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 118,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 23,
              "end": 118,
              "body": {
                "type": "TSModuleBlock",
                "start": 32,
                "end": 118,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 42,
                    "end": 112,
                    "attributes": [],
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 49,
                      "end": 112,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 76,
                        "end": 112,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 90,
                            "end": 102,
                            "argument": {
                              "type": "Literal",
                              "start": 97,
                              "end": 101,
                              "raw": "null",
                              "value": null
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
                        "optional": false
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 67,
                        "end": 75,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 69,
                          "end": 75
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
                "start": 30,
                "end": 31,
                "decorators": [],
                "name": "B",
                "optional": false
              },
              "kind": "module"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 124,
            "end": 188,
            "body": {
              "type": "TSInterfaceBody",
              "start": 136,
              "end": 188,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 146,
                  "end": 159,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 150,
                    "decorators": [],
                    "name": "name",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 150,
                    "end": 158,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 152,
                      "end": 158
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 168,
                  "end": 182,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 168,
                    "end": 173,
                    "decorators": [],
                    "name": "value",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 173,
                    "end": 181,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 175,
                      "end": 181
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 134,
              "end": 135,
              "decorators": [],
              "name": "B",
              "optional": false
            }
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
      "start": 192,
      "end": 223,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 222,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 206,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 198,
              "end": 206,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 200,
                "end": 206
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 209,
            "end": 222,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 209,
              "end": 220,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 209,
                "end": 212,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 210,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 212,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 213,
                "end": 220,
                "decorators": [],
                "name": "createB",
                "optional": false
              }
            },
            "optional": false
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

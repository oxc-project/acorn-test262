__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 222,
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
            "type": "TSInterfaceDeclaration",
            "start": 16,
            "end": 80,
            "body": {
              "type": "TSInterfaceBody",
              "start": 28,
              "end": 80,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 38,
                  "end": 51,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 42,
                    "decorators": [],
                    "name": "name",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 42,
                    "end": 50,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 44,
                      "end": 50
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 60,
                  "end": 74,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 65,
                    "decorators": [],
                    "name": "value",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 65,
                    "end": 73,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 67,
                      "end": 73
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 86,
            "end": 188,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 93,
              "end": 188,
              "body": {
                "type": "TSModuleBlock",
                "start": 102,
                "end": 188,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 112,
                    "end": 182,
                    "attributes": [],
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 119,
                      "end": 182,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 146,
                        "end": 182,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 160,
                            "end": 172,
                            "argument": {
                              "type": "Literal",
                              "start": 167,
                              "end": 171,
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
                        "start": 128,
                        "end": 135,
                        "decorators": [],
                        "name": "createB",
                        "optional": false
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 137,
                        "end": 145,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 139,
                          "end": 145
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
                "start": 100,
                "end": 101,
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
      "start": 192,
      "end": 222,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 221,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 205,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 205,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 199,
                "end": 205
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 208,
            "end": 221,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 208,
              "end": 219,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 208,
                "end": 211,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 208,
                  "end": 209,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 211,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 212,
                "end": 219,
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

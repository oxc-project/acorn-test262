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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 190,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 16,
            "end": 80,
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 42,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 42,
                    "end": 50,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 44,
                      "end": 50
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 60,
                  "end": 74,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 65,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 65,
                    "end": 73,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 67,
                      "end": 73
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 86,
            "end": 188,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 93,
              "end": 188,
              "id": {
                "type": "Identifier",
                "start": 100,
                "end": 101,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 102,
                "end": 188,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 112,
                    "end": 182,
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 119,
                      "end": 182,
                      "id": {
                        "type": "Identifier",
                        "start": 128,
                        "end": 135,
                        "decorators": [],
                        "name": "createB",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
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
                      },
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
                              "value": null,
                              "raw": "null"
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
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 192,
      "end": 222,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 221,
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
            "callee": {
              "type": "MemberExpression",
              "start": 208,
              "end": 219,
              "object": {
                "type": "MemberExpression",
                "start": 208,
                "end": 211,
                "object": {
                  "type": "Identifier",
                  "start": 208,
                  "end": 209,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 211,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 212,
                "end": 219,
                "decorators": [],
                "name": "createB",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

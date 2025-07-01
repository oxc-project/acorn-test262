__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 31
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "createB",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 58,
                        "end": 65
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 69,
                          "end": 75
                        },
                        "start": 67,
                        "end": 75
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 97,
                              "end": 101
                            },
                            "start": 90,
                            "end": 102
                          }
                        ],
                        "start": 76,
                        "end": 112
                      },
                      "expression": false,
                      "start": 49,
                      "end": 112
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 42,
                    "end": 112
                  }
                ],
                "start": 32,
                "end": 118
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 23,
              "end": 118
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 16,
            "end": 118
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 135
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 146,
                    "end": 150
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 152,
                      "end": 158
                    },
                    "start": 150,
                    "end": 158
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 146,
                  "end": 159
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 168,
                    "end": 173
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 175,
                      "end": 181
                    },
                    "start": 173,
                    "end": 181
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 168,
                  "end": 182
                }
              ],
              "start": 136,
              "end": 188
            },
            "declare": false,
            "start": 124,
            "end": 188
          }
        ],
        "start": 9,
        "end": 190
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 190
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 200,
                "end": 206
              },
              "start": 198,
              "end": 206
            },
            "start": 196,
            "end": 206
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 210
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 211,
                  "end": 212
                },
                "optional": false,
                "computed": false,
                "start": 209,
                "end": 212
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "createB",
                "optional": false,
                "typeAnnotation": null,
                "start": 213,
                "end": 220
              },
              "optional": false,
              "computed": false,
              "start": 209,
              "end": 220
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 209,
            "end": 222
          },
          "definite": false,
          "start": 196,
          "end": 222
        }
      ],
      "declare": false,
      "start": 192,
      "end": 223
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 223
}
```

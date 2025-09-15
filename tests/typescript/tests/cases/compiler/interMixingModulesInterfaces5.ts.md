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
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 30
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
                    "start": 41,
                    "end": 45
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 47,
                      "end": 53
                    },
                    "start": 45,
                    "end": 53
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 41,
                  "end": 54
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
                    "start": 63,
                    "end": 68
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 70,
                      "end": 76
                    },
                    "start": 68,
                    "end": 76
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 63,
                  "end": 77
                }
              ],
              "start": 31,
              "end": 83
            },
            "declare": false,
            "start": 19,
            "end": 83
          },
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
                "start": 106,
                "end": 107
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
                        "start": 134,
                        "end": 141
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
                          "start": 145,
                          "end": 151
                        },
                        "start": 143,
                        "end": 151
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
                              "start": 173,
                              "end": 177
                            },
                            "start": 166,
                            "end": 178
                          }
                        ],
                        "start": 152,
                        "end": 188
                      },
                      "expression": false,
                      "start": 125,
                      "end": 188
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 118,
                    "end": 188
                  }
                ],
                "start": 108,
                "end": 194
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 96,
              "end": 194
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 89,
            "end": 194
          }
        ],
        "start": 12,
        "end": 196
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 196
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
                "start": 205,
                "end": 211
              },
              "start": 203,
              "end": 211
            },
            "start": 202,
            "end": 211
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
                  "start": 214,
                  "end": 215
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 216,
                  "end": 217
                },
                "optional": false,
                "computed": false,
                "start": 214,
                "end": 217
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "createB",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 225
              },
              "optional": false,
              "computed": false,
              "start": 214,
              "end": 225
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 214,
            "end": 227
          },
          "definite": false,
          "start": 202,
          "end": 227
        }
      ],
      "declare": false,
      "start": 198,
      "end": 228
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 228
}
```

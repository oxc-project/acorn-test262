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
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 37
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
                        "start": 64,
                        "end": 71
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
                          "start": 75,
                          "end": 81
                        },
                        "start": 73,
                        "end": 81
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
                              "start": 103,
                              "end": 107
                            },
                            "start": 96,
                            "end": 108
                          }
                        ],
                        "start": 82,
                        "end": 118
                      },
                      "expression": false,
                      "start": 55,
                      "end": 118
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 48,
                    "end": 118
                  }
                ],
                "start": 38,
                "end": 124
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 26,
              "end": 124
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 124
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 141
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
                    "start": 152,
                    "end": 156
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 158,
                      "end": 164
                    },
                    "start": 156,
                    "end": 164
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 152,
                  "end": 165
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
                    "start": 174,
                    "end": 179
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 181,
                      "end": 187
                    },
                    "start": 179,
                    "end": 187
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 174,
                  "end": 188
                }
              ],
              "start": 142,
              "end": 194
            },
            "declare": false,
            "start": 130,
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
                "start": 206,
                "end": 212
              },
              "start": 204,
              "end": 212
            },
            "start": 202,
            "end": 212
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
                  "start": 215,
                  "end": 216
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 217,
                  "end": 218
                },
                "optional": false,
                "computed": false,
                "start": 215,
                "end": 218
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "createB",
                "optional": false,
                "typeAnnotation": null,
                "start": 219,
                "end": 226
              },
              "optional": false,
              "computed": false,
              "start": 215,
              "end": 226
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 215,
            "end": 228
          },
          "definite": false,
          "start": 202,
          "end": 228
        }
      ],
      "declare": false,
      "start": 198,
      "end": 229
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 229
}
```

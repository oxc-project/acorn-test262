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
        "name": "Keyboard",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 15
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Key",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 35
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "UP",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 38,
                      "end": 40
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 38,
                    "end": 40
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DOWN",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 42,
                      "end": 46
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 42,
                    "end": 46
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LEFT",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 48,
                      "end": 52
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 48,
                    "end": 52
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RIGHT",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 54,
                      "end": 59
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 54,
                    "end": 59
                  }
                ],
                "start": 36,
                "end": 61
              },
              "const": false,
              "declare": false,
              "start": 27,
              "end": 61
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 20,
            "end": 61
          }
        ],
        "start": 16,
        "end": 63
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 63
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "App",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 75
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Key",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 90
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Keyboard",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 101
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Key",
                "optional": false,
                "typeAnnotation": null,
                "start": 102,
                "end": 105
              },
              "start": 93,
              "end": 105
            },
            "importKind": "value",
            "start": 80,
            "end": 106
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 129
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 135,
                        "end": 138
                      },
                      "typeArguments": null,
                      "start": 135,
                      "end": 138
                    },
                    "start": 133,
                    "end": 138
                  },
                  "start": 130,
                  "end": 138
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 141,
                  "end": 145
                },
                "start": 139,
                "end": 145
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 146,
                "end": 148
              },
              "expression": false,
              "start": 117,
              "end": 148
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 110,
            "end": 148
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 155
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 156,
                    "end": 159
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "UP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 160,
                    "end": 162
                  },
                  "optional": false,
                  "computed": false,
                  "start": 156,
                  "end": 162
                }
              ],
              "optional": false,
              "start": 152,
              "end": 163
            },
            "directive": null,
            "start": 152,
            "end": 164
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 167,
                "end": 170
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 171,
                    "end": 174
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DOWN",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 175,
                    "end": 179
                  },
                  "optional": false,
                  "computed": false,
                  "start": 171,
                  "end": 179
                }
              ],
              "optional": false,
              "start": 167,
              "end": 180
            },
            "directive": null,
            "start": 167,
            "end": 181
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 184,
                "end": 187
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 188,
                    "end": 191
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "LEFT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 192,
                    "end": 196
                  },
                  "optional": false,
                  "computed": false,
                  "start": 188,
                  "end": 196
                }
              ],
              "optional": false,
              "start": 184,
              "end": 197
            },
            "directive": null,
            "start": 184,
            "end": 198
          }
        ],
        "start": 76,
        "end": 200
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 65,
      "end": 200
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 200
}
```

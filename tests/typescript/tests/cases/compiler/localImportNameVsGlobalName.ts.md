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
        "start": 10,
        "end": 18
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
                "start": 35,
                "end": 38
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
                      "start": 41,
                      "end": 43
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 41,
                    "end": 43
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DOWN",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 45,
                      "end": 49
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 45,
                    "end": 49
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LEFT",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 51,
                      "end": 55
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 51,
                    "end": 55
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RIGHT",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 57,
                      "end": 62
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 57,
                    "end": 62
                  }
                ],
                "start": 39,
                "end": 64
              },
              "const": false,
              "declare": false,
              "start": 30,
              "end": 64
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 23,
            "end": 64
          }
        ],
        "start": 19,
        "end": 66
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 66
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "App",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 81
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
              "start": 93,
              "end": 96
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Keyboard",
                "optional": false,
                "typeAnnotation": null,
                "start": 99,
                "end": 107
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Key",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 111
              },
              "start": 99,
              "end": 111
            },
            "importKind": "value",
            "start": 86,
            "end": 112
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
                "start": 132,
                "end": 135
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
                        "start": 141,
                        "end": 144
                      },
                      "typeArguments": null,
                      "start": 141,
                      "end": 144
                    },
                    "start": 139,
                    "end": 144
                  },
                  "start": 136,
                  "end": 144
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 147,
                  "end": 151
                },
                "start": 145,
                "end": 151
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 152,
                "end": 154
              },
              "expression": false,
              "start": 123,
              "end": 154
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 116,
            "end": 154
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
                "start": 158,
                "end": 161
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
                    "start": 162,
                    "end": 165
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "UP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 166,
                    "end": 168
                  },
                  "optional": false,
                  "computed": false,
                  "start": 162,
                  "end": 168
                }
              ],
              "optional": false,
              "start": 158,
              "end": 169
            },
            "directive": null,
            "start": 158,
            "end": 170
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
                "start": 173,
                "end": 176
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
                    "start": 177,
                    "end": 180
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DOWN",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 181,
                    "end": 185
                  },
                  "optional": false,
                  "computed": false,
                  "start": 177,
                  "end": 185
                }
              ],
              "optional": false,
              "start": 173,
              "end": 186
            },
            "directive": null,
            "start": 173,
            "end": 187
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
                "start": 190,
                "end": 193
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
                    "start": 194,
                    "end": 197
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "LEFT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 198,
                    "end": 202
                  },
                  "optional": false,
                  "computed": false,
                  "start": 194,
                  "end": 202
                }
              ],
              "optional": false,
              "start": 190,
              "end": 203
            },
            "directive": null,
            "start": 190,
            "end": 204
          }
        ],
        "start": 82,
        "end": 206
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 68,
      "end": 206
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 206
}
```

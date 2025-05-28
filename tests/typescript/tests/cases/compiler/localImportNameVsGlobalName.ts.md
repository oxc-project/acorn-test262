__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 200,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 63,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 15,
        "decorators": [],
        "name": "Keyboard",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 16,
        "end": 63,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 20,
            "end": 61,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 27,
              "end": 61,
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 35,
                "decorators": [],
                "name": "Key",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSEnumBody",
                "start": 36,
                "end": 61,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 38,
                    "end": 40,
                    "id": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 40,
                      "decorators": [],
                      "name": "UP",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 42,
                    "end": 46,
                    "id": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 46,
                      "decorators": [],
                      "name": "DOWN",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 48,
                    "end": 52,
                    "id": {
                      "type": "Identifier",
                      "start": 48,
                      "end": 52,
                      "decorators": [],
                      "name": "LEFT",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 54,
                    "end": 59,
                    "id": {
                      "type": "Identifier",
                      "start": 54,
                      "end": 59,
                      "decorators": [],
                      "name": "RIGHT",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  }
                ]
              },
              "const": false,
              "declare": false
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
      "type": "TSModuleDeclaration",
      "start": 65,
      "end": 200,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 75,
        "decorators": [],
        "name": "App",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 76,
        "end": 200,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 80,
            "end": 106,
            "id": {
              "type": "Identifier",
              "start": 87,
              "end": 90,
              "decorators": [],
              "name": "Key",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 93,
              "end": 105,
              "left": {
                "type": "Identifier",
                "start": 93,
                "end": 101,
                "decorators": [],
                "name": "Keyboard",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 102,
                "end": 105,
                "decorators": [],
                "name": "Key",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 110,
            "end": 148,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 117,
              "end": 148,
              "id": {
                "type": "Identifier",
                "start": 126,
                "end": 129,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 130,
                  "end": 138,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 133,
                    "end": 138,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 135,
                      "end": 138,
                      "typeName": {
                        "type": "Identifier",
                        "start": 135,
                        "end": 138,
                        "decorators": [],
                        "name": "Key",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 139,
                "end": 145,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 141,
                  "end": 145
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 146,
                "end": 148,
                "body": []
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExpressionStatement",
            "start": 152,
            "end": 164,
            "expression": {
              "type": "CallExpression",
              "start": 152,
              "end": 163,
              "callee": {
                "type": "Identifier",
                "start": 152,
                "end": 155,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 156,
                  "end": 162,
                  "object": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 159,
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 162,
                    "decorators": [],
                    "name": "UP",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 167,
            "end": 181,
            "expression": {
              "type": "CallExpression",
              "start": 167,
              "end": 180,
              "callee": {
                "type": "Identifier",
                "start": 167,
                "end": 170,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 171,
                  "end": 179,
                  "object": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 174,
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 175,
                    "end": 179,
                    "decorators": [],
                    "name": "DOWN",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 184,
            "end": 198,
            "expression": {
              "type": "CallExpression",
              "start": 184,
              "end": 197,
              "callee": {
                "type": "Identifier",
                "start": 184,
                "end": 187,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 188,
                  "end": 196,
                  "object": {
                    "type": "Identifier",
                    "start": 188,
                    "end": 191,
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 192,
                    "end": 196,
                    "decorators": [],
                    "name": "LEFT",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

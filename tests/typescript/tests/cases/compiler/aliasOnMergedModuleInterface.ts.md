__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "foo",
        "raw": "\"foo\"",
        "start": 15,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 38
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 66,
                      "end": 67
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [],
                      "start": 68,
                      "end": 79
                    },
                    "declare": false,
                    "start": 56,
                    "end": 79
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 49,
                  "end": 79
                }
              ],
              "start": 39,
              "end": 85
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 27,
            "end": 85
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 101
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 112,
                    "end": 115
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 122,
                          "end": 128
                        },
                        "start": 120,
                        "end": 128
                      },
                      "start": 116,
                      "end": 128
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 131,
                          "end": 132
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 133,
                          "end": 134
                        },
                        "start": 131,
                        "end": 134
                      },
                      "typeArguments": null,
                      "start": 131,
                      "end": 134
                    },
                    "start": 129,
                    "end": 134
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 112,
                  "end": 135
                }
              ],
              "start": 102,
              "end": 141
            },
            "declare": false,
            "start": 90,
            "end": 141
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 156
            },
            "start": 146,
            "end": 157
          }
        ],
        "start": 21,
        "end": 159
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 159
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 160
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 68
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "foo",
          "raw": "\"foo\"",
          "start": 79,
          "end": 84
        },
        "start": 71,
        "end": 85
      },
      "importKind": "value",
      "start": 58,
      "end": 85
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 96
                },
                "typeArguments": null,
                "start": 93,
                "end": 96
              },
              "start": 91,
              "end": 96
            },
            "start": 90,
            "end": 96
          },
          "init": null,
          "definite": false,
          "start": 90,
          "end": 96
        }
      ],
      "declare": false,
      "start": 86,
      "end": 97
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 99
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 100,
            "end": 103
          },
          "optional": false,
          "computed": false,
          "start": 98,
          "end": 103
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 104,
            "end": 111
          }
        ],
        "optional": false,
        "start": 98,
        "end": 112
      },
      "directive": null,
      "start": 98,
      "end": 113
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 142,
                    "end": 145
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 146,
                    "end": 147
                  },
                  "start": 142,
                  "end": 147
                },
                "typeArguments": null,
                "start": 142,
                "end": 147
              },
              "start": 140,
              "end": 147
            },
            "start": 139,
            "end": 147
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 150,
                "end": 153
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 157
              },
              "optional": false,
              "computed": false,
              "start": 150,
              "end": 157
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 158,
                "end": 165
              }
            ],
            "optional": false,
            "start": 150,
            "end": 166
          },
          "definite": false,
          "start": 139,
          "end": 166
        }
      ],
      "declare": false,
      "start": 135,
      "end": 167
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 58,
  "end": 217
}
```

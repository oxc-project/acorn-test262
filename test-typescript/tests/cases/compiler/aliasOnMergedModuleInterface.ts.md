__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 157,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 156,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "value": "foo",
        "raw": "\"foo\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 156,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 27,
            "end": 82,
            "id": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 36,
              "end": 82,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 46,
                  "end": 76,
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "start": 53,
                    "end": 76,
                    "id": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 64,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "extends": [],
                    "typeParameters": null,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 65,
                      "end": 76,
                      "body": []
                    },
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "type"
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 87,
            "end": 138,
            "id": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 99,
              "end": 138,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 109,
                  "end": 132,
                  "key": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 112,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 113,
                      "end": 125,
                      "name": "name",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 117,
                        "end": 125,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 119,
                          "end": 125
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 126,
                    "end": 131,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 128,
                      "end": 131,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 128,
                        "end": 131,
                        "left": {
                          "type": "Identifier",
                          "start": 128,
                          "end": 129,
                          "name": "B",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 131,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSExportAssignment",
            "start": 143,
            "end": 154,
            "expression": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 58,
  "end": 218,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 58,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 68,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 71,
        "end": 85,
        "expression": {
          "type": "Literal",
          "start": 79,
          "end": 84,
          "value": "foo",
          "raw": "\"foo\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 96,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 96,
            "name": "z",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 91,
              "end": 96,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 93,
                "end": 96,
                "typeName": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 96,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 98,
      "end": 113,
      "expression": {
        "type": "CallExpression",
        "start": 98,
        "end": 112,
        "callee": {
          "type": "MemberExpression",
          "start": 98,
          "end": 103,
          "object": {
            "type": "Identifier",
            "start": 98,
            "end": 99,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 100,
            "end": 103,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 104,
            "end": 111,
            "value": "hello",
            "raw": "\"hello\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 135,
      "end": 167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 139,
          "end": 166,
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 147,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 147,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 142,
                "end": 147,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 142,
                  "end": 147,
                  "left": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 145,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 147,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 150,
            "end": 166,
            "callee": {
              "type": "MemberExpression",
              "start": 150,
              "end": 157,
              "object": {
                "type": "Identifier",
                "start": 150,
                "end": 153,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 154,
                "end": 157,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 158,
                "end": 165,
                "value": "hello",
                "raw": "\"hello\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

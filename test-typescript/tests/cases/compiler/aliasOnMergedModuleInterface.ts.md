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
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 156,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 27,
            "end": 82,
            "body": {
              "type": "TSModuleBlock",
              "start": 36,
              "end": 82,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 46,
                  "end": 76,
                  "attributes": [],
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "start": 53,
                    "end": 76,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 65,
                      "end": 76,
                      "body": []
                    },
                    "declare": false,
                    "extends": [],
                    "id": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 64,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null
                  },
                  "exportKind": "type",
                  "source": null,
                  "specifiers": []
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "module"
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 87,
            "end": 138,
            "body": {
              "type": "TSInterfaceBody",
              "start": 99,
              "end": 138,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 109,
                  "end": 132,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 112,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 113,
                      "end": 125,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 117,
                        "end": 125,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 119,
                          "end": 125
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 126,
                    "end": 131,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 128,
                      "end": 131,
                      "typeArguments": null,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 128,
                        "end": 131,
                        "left": {
                          "type": "Identifier",
                          "start": 128,
                          "end": 129,
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 131,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSExportAssignment",
            "start": 143,
            "end": 154,
            "expression": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "raw": "\"foo\"",
        "value": "foo"
      }
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
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 71,
        "end": 85,
        "expression": {
          "type": "Literal",
          "start": 79,
          "end": 84,
          "raw": "\"foo\"",
          "value": "foo"
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 96,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 91,
              "end": 96,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 93,
                "end": 96,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 96,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 98,
      "end": 113,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 98,
        "end": 112,
        "arguments": [
          {
            "type": "Literal",
            "start": 104,
            "end": 111,
            "raw": "\"hello\"",
            "value": "hello"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 98,
          "end": 103,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 98,
            "end": 99,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 100,
            "end": 103,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 147,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 147,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 142,
                "end": 147,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 142,
                  "end": 147,
                  "left": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 145,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 147,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 150,
            "end": 166,
            "arguments": [
              {
                "type": "Literal",
                "start": 158,
                "end": 165,
                "raw": "\"hello\"",
                "value": "hello"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 150,
              "end": 157,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 150,
                "end": 153,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 154,
                "end": 157,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

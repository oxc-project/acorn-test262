file1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 72,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 17,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 17,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 18,
      "end": 57,
      "body": {
        "type": "TSModuleBlock",
        "start": 32,
        "end": 57,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 38,
            "end": 55,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 45,
              "end": 55,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 49,
                  "end": 54,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 50,
                    "decorators": [],
                    "name": "v",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 53,
                    "end": 54,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 31,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "TSExportAssignment",
      "start": 58,
      "end": 71,
      "expression": {
        "type": "Identifier",
        "start": 67,
        "end": 70,
        "decorators": [],
        "name": "foo",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
file2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 145,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "x",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 29,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 28,
          "raw": "\"./file1\"",
          "value": "./file1"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 32,
      "end": 40,
      "expression": {
        "type": "AssignmentExpression",
        "start": 32,
        "end": 39,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 32,
          "end": 35,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 38,
          "end": 39,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 75,
      "end": 144,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 100,
        "end": 144,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 106,
            "end": 123,
            "body": {
              "type": "TSInterfaceBody",
              "start": 118,
              "end": 123,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 120,
                  "end": 121,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 121,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 128,
            "end": 142,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 132,
                "end": 141,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 141,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 133,
                    "end": 141,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 135,
                      "end": 141
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 90,
        "end": 99,
        "raw": "\"./file1\"",
        "value": "./file1"
      }
    }
  ],
  "sourceType": "module"
}
```
file3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 72,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 28,
        "raw": "\"./file1\"",
        "value": "./file1"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 30,
      "end": 47,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 37,
        "end": 46,
        "raw": "\"./file2\"",
        "value": "./file2"
      },
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 59,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 58,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 58,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 58,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 55,
                "end": 58,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 55,
                  "end": 58,
                  "left": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 58,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 60,
      "end": 72,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 71,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 68,
            "end": 71,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module"
}
```

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 135,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 65,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 65,
        "body": {
          "type": "TSModuleBlock",
          "start": 25,
          "end": 65,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 31,
              "end": 63,
              "attributes": [],
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "start": 38,
                "end": 63,
                "declare": false,
                "id": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 46,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 49,
                  "end": 62,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 51,
                      "end": 60,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 51,
                        "end": 52,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 52,
                        "end": 60,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 54,
                          "end": 60
                        }
                      }
                    }
                  ]
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
          "start": 17,
          "end": 24,
          "decorators": [],
          "name": "Library",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "namespace"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 84,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 84,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 84,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 73,
                "end": 84,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 73,
                  "end": 84,
                  "left": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 80,
                    "decorators": [],
                    "name": "Library",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 84,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
      "start": 101,
      "end": 113,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 101,
        "end": 112,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 101,
          "end": 108,
          "decorators": [],
          "name": "Library",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 109,
          "end": 112,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        }
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
  "start": 0,
  "end": 185,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 30,
        "raw": "'./file1'",
        "value": "./file1",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 15,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 15,
            "decorators": [],
            "name": "Lib",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSModuleDeclaration",
      "start": 32,
      "end": 108,
      "body": {
        "type": "TSModuleBlock",
        "start": 46,
        "end": 108,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 76,
            "end": 106,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 83,
              "end": 106,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 89,
                  "end": 105,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 89,
                    "end": 100,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 92,
                      "end": 100,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 94,
                        "end": 100
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "start": 103,
                    "end": 105,
                    "raw": "\"\"",
                    "value": "",
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "declare": false,
              "kind": "const"
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
        "start": 42,
        "end": 45,
        "decorators": [],
        "name": "Lib",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "ExpressionStatement",
      "start": 109,
      "end": 117,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 109,
        "end": 116,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 109,
          "end": 112,
          "decorators": [],
          "name": "Lib",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 113,
          "end": 116,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 133,
      "end": 148,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 147,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 147,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 138,
              "end": 147,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 140,
                "end": 147,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 140,
                  "end": 147,
                  "left": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 143,
                    "decorators": [],
                    "name": "Lib",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 147,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
      "type": "ExportNamedDeclaration",
      "start": 171,
      "end": 185,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 180,
          "end": 183,
          "exported": {
            "type": "Identifier",
            "start": 180,
            "end": 183,
            "decorators": [],
            "name": "Lib",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 180,
            "end": 183,
            "decorators": [],
            "name": "Lib",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

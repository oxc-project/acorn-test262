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
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 65,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 24,
          "name": "Library",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 25,
          "end": 65,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 31,
              "end": 63,
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "start": 38,
                "end": 63,
                "id": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 46,
                  "name": "Bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 49,
                  "end": 62,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 51,
                      "end": 60,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 51,
                        "end": 52,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 52,
                        "end": 60,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 54,
                          "end": 60
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
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
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 84,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 84,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 73,
                "end": 84,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 73,
                  "end": 84,
                  "left": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 80,
                    "name": "Library",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 84,
                    "name": "Bar",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 101,
      "end": 113,
      "expression": {
        "type": "MemberExpression",
        "start": 101,
        "end": 112,
        "object": {
          "type": "Identifier",
          "start": 101,
          "end": 108,
          "name": "Library",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 109,
          "end": 112,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
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
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 15,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 15,
            "name": "Lib",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 30,
        "value": "./file1",
        "raw": "'./file1'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 32,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 45,
        "name": "Lib",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 46,
        "end": 108,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 76,
            "end": 106,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 83,
              "end": 106,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 89,
                  "end": 105,
                  "id": {
                    "type": "Identifier",
                    "start": 89,
                    "end": 100,
                    "name": "foo",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 92,
                      "end": 100,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 94,
                        "end": 100
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 103,
                    "end": 105,
                    "value": "",
                    "raw": "\"\""
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 109,
      "end": 117,
      "expression": {
        "type": "MemberExpression",
        "start": 109,
        "end": 116,
        "object": {
          "type": "Identifier",
          "start": 109,
          "end": 112,
          "name": "Lib",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 113,
          "end": 116,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 147,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 138,
              "end": 147,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 140,
                "end": 147,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 140,
                  "end": 147,
                  "left": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 143,
                    "name": "Lib",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 147,
                    "name": "Bar",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 171,
      "end": 185,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 180,
          "end": 183,
          "local": {
            "type": "Identifier",
            "start": 180,
            "end": 183,
            "name": "Lib",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 180,
            "end": 183,
            "name": "Lib",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

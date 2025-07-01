__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Library",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 24
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 46
                },
                "typeParameters": null,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 51,
                        "end": 52
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 54,
                          "end": 60
                        },
                        "start": 52,
                        "end": 60
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 51,
                      "end": 60
                    }
                  ],
                  "start": 49,
                  "end": 62
                },
                "declare": false,
                "start": 38,
                "end": 63
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 31,
              "end": 63
            }
          ],
          "start": 25,
          "end": 65
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 65
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 65
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
                    "name": "Library",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 73,
                    "end": 80
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 81,
                    "end": 84
                  },
                  "start": 73,
                  "end": 84
                },
                "typeArguments": null,
                "start": 73,
                "end": 84
              },
              "start": 71,
              "end": 84
            },
            "start": 70,
            "end": 84
          },
          "init": null,
          "definite": false,
          "start": 70,
          "end": 84
        }
      ],
      "declare": false,
      "start": 66,
      "end": 85
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Library",
          "optional": false,
          "typeAnnotation": null,
          "start": 101,
          "end": 108
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 109,
          "end": 112
        },
        "optional": false,
        "computed": false,
        "start": 101,
        "end": 112
      },
      "directive": null,
      "start": 101,
      "end": 113
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 135
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Lib",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 15
          },
          "start": 7,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file1",
        "raw": "'./file1'",
        "start": 21,
        "end": 30
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 31
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Lib",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 45
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 94,
                        "end": 100
                      },
                      "start": 92,
                      "end": 100
                    },
                    "start": 89,
                    "end": 100
                  },
                  "init": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 103,
                    "end": 105
                  },
                  "definite": false,
                  "start": 89,
                  "end": 105
                }
              ],
              "declare": false,
              "start": 83,
              "end": 106
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 76,
            "end": 106
          }
        ],
        "start": 46,
        "end": 108
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 32,
      "end": 108
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Lib",
          "optional": false,
          "typeAnnotation": null,
          "start": 109,
          "end": 112
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 113,
          "end": 116
        },
        "optional": false,
        "computed": false,
        "start": 109,
        "end": 116
      },
      "directive": null,
      "start": 109,
      "end": 117
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
                    "name": "Lib",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 140,
                    "end": 143
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 144,
                    "end": 147
                  },
                  "start": 140,
                  "end": 147
                },
                "typeArguments": null,
                "start": 140,
                "end": 147
              },
              "start": 138,
              "end": 147
            },
            "start": 137,
            "end": 147
          },
          "init": null,
          "definite": false,
          "start": 137,
          "end": 147
        }
      ],
      "declare": false,
      "start": 133,
      "end": 148
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Lib",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 183
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Lib",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 183
          },
          "exportKind": "value",
          "start": 180,
          "end": 183
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 171,
      "end": 185
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 185
}
```

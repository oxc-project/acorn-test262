__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 114,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 21,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 21,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 20,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 20,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 12,
                "end": 20,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 14,
                  "end": 20
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 49,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 29,
        "end": 49,
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 38,
          "end": 40,
          "decorators": [],
          "name": "fn",
          "optional": false
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 42,
          "end": 48,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 44,
            "end": 48
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 50,
      "end": 88,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 57,
        "end": 88,
        "body": {
          "type": "TSInterfaceBody",
          "start": 73,
          "end": 88,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 75,
              "end": 86,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 75,
                "end": 76,
                "decorators": [],
                "name": "n",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 76,
                "end": 86,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 78,
                  "end": 86,
                  "exprName": {
                    "type": "Identifier",
                    "start": 85,
                    "end": 86,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 67,
          "end": 72,
          "decorators": [],
          "name": "Thing",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 89,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 112,
        "decorators": [],
        "name": "Foo",
        "optional": false
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
  "end": 79,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 28,
        "raw": "'./foo'",
        "value": "./foo"
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
            "name": "Foo",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 30,
      "end": 39,
      "expression": {
        "type": "CallExpression",
        "start": 30,
        "end": 38,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 30,
          "end": 36,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 30,
            "end": 33,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 34,
            "end": 36,
            "decorators": [],
            "name": "fn",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 40,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 56,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 56,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 47,
                "end": 56,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 47,
                  "end": 56,
                  "left": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 50,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 56,
                    "decorators": [],
                    "name": "Thing",
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
      "start": 58,
      "end": 78,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 77,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 71,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 71,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 65,
                "end": 71
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 74,
            "end": 77,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "n",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

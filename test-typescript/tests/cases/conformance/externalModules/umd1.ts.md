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
        "body": null,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 38,
          "end": 40,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
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
        },
        "typeParameters": null
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
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 75,
                "end": 76,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
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
        "optional": false,
        "typeAnnotation": null
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
  "start": 34,
  "end": 83,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 34,
      "end": 43,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 34,
        "end": 42,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 34,
          "end": 40,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 34,
            "end": 37,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 38,
            "end": 40,
            "decorators": [],
            "name": "fn",
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
      "start": 44,
      "end": 61,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 60,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 60,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 60,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 51,
                "end": 60,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 51,
                  "end": 60,
                  "left": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 54,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 60,
                    "decorators": [],
                    "name": "Thing",
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
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 62,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 66,
          "end": 81,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 66,
            "end": 75,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 75,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 69,
                "end": 75
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 78,
            "end": 81,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
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

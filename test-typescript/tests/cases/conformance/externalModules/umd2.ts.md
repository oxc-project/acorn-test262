foo.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 75,
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
      "type": "TSNamespaceExportDeclaration",
      "start": 50,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 73,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
a.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 9,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 8,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 6,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 3,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
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
      "start": 10,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 26,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 26,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 26,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 17,
                "end": 26,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 17,
                  "end": 26,
                  "left": {
                    "type": "Identifier",
                    "start": 17,
                    "end": 20,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 21,
                    "end": 26,
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
      "start": 28,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 47,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 41,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 41,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 35,
                "end": 41
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 44,
            "end": 47,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
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
  "sourceType": "module"
}
```

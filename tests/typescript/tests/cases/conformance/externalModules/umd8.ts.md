__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 133,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 39,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 19,
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 20,
        "end": 39,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 23,
            "end": 37,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 26,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 26,
              "end": 37,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 28,
                "end": 36,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 30,
                  "end": 36
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "TSModuleDeclaration",
      "start": 40,
      "end": 91,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 63,
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 64,
        "end": 91,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 67,
            "end": 89,
            "id": {
              "type": "Identifier",
              "start": 77,
              "end": 85,
              "decorators": [],
              "name": "SubThing",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 86,
              "end": 89,
              "body": []
            },
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSExportAssignment",
      "start": 92,
      "end": 107,
      "expression": {
        "type": "Identifier",
        "start": 101,
        "end": 106,
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 108,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 128,
        "end": 131,
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
  "end": 195,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 34,
      "end": 62,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 41,
          "end": 48,
          "local": {
            "type": "Identifier",
            "start": 46,
            "end": 48,
            "decorators": [],
            "name": "ff",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 54,
        "end": 61,
        "value": "./foo",
        "raw": "'./foo'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 64,
      "end": 75,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 74,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 74,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 74,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 71,
                "end": 74,
                "typeName": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 74,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 99,
      "end": 107,
      "expression": {
        "type": "CallExpression",
        "start": 99,
        "end": 106,
        "callee": {
          "type": "MemberExpression",
          "start": 99,
          "end": 104,
          "object": {
            "type": "Identifier",
            "start": 99,
            "end": 100,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 101,
            "end": 104,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 108,
      "end": 128,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 127,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 127,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 127,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 115,
                "end": 127,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 115,
                  "end": 127,
                  "left": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 118,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 127,
                    "decorators": [],
                    "name": "SubThing",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 150,
      "end": 167,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 166,
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 160,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 160,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 157,
                "end": 160
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 163,
            "end": 166,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

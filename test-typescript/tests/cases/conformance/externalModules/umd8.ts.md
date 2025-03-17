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
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 19,
        "name": "Thing",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 20,
        "end": 39,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 23,
            "end": 37,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 26,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 26,
              "end": 37,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 28,
                "end": 36,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 30,
                  "end": 36
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 40,
      "end": 91,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 63,
        "name": "Thing",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "SubThing",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
        "name": "Thing",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
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
  "start": 34,
  "end": 196,
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
            "name": "ff",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 64,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 74,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 74,
            "name": "y",
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
                  "name": "Foo",
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
      "kind": "let",
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
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 101,
            "end": 104,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 108,
      "end": 128,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 127,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 127,
            "name": "z",
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
                    "name": "Foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 127,
                    "name": "SubThing",
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 150,
      "end": 167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 166,
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 160,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 160,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 157,
                "end": 160
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 163,
            "end": 166,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

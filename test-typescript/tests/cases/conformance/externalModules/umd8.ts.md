foo.d.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 20,
        "end": 39,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 23,
            "end": 37,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 26,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 26,
              "end": 37,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              }
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 19,
        "decorators": [],
        "name": "Thing",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 40,
      "end": 91,
      "body": {
        "type": "TSModuleBlock",
        "start": 64,
        "end": 91,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 67,
            "end": 89,
            "body": {
              "type": "TSInterfaceBody",
              "start": 86,
              "end": 89,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 77,
              "end": 85,
              "decorators": [],
              "name": "SubThing",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 63,
        "decorators": [],
        "name": "Thing",
        "optional": false
      },
      "kind": "namespace"
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
  "start": 34,
  "end": 196,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 34,
      "end": 62,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 54,
        "end": 61,
        "raw": "'./foo'",
        "value": "./foo"
      },
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
            "optional": false
          }
        }
      ]
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
          "definite": false,
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
                  "optional": false
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
      "type": "ExpressionStatement",
      "start": 99,
      "end": 107,
      "expression": {
        "type": "CallExpression",
        "start": 99,
        "end": 106,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 99,
          "end": 104,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 99,
            "end": 100,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 101,
            "end": 104,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false
      }
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
          "definite": false,
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
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 127,
                    "decorators": [],
                    "name": "SubThing",
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
      "start": 150,
      "end": 167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 166,
          "definite": false,
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
            "optional": false
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

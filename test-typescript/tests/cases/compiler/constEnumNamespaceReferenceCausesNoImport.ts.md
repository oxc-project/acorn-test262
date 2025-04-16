__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 116,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 65,
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 65,
        "id": {
          "type": "Identifier",
          "start": 18,
          "end": 30,
          "name": "ConstFooEnum",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "members": [
          {
            "type": "TSEnumMember",
            "start": 37,
            "end": 41,
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 41,
              "name": "Some",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 47,
            "end": 53,
            "id": {
              "type": "Identifier",
              "start": 47,
              "end": 53,
              "name": "Values",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 59,
            "end": 63,
            "id": {
              "type": "Identifier",
              "start": 59,
              "end": 63,
              "name": "Here",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ],
        "const": true,
        "declare": false,
        "body": {
          "type": "TSEnumBody",
          "start": 31,
          "end": 65,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 37,
              "end": 41,
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 41,
                "name": "Some",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "initializer": null,
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 47,
              "end": 53,
              "id": {
                "type": "Identifier",
                "start": 47,
                "end": 53,
                "name": "Values",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "initializer": null,
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 59,
              "end": 63,
              "id": {
                "type": "Identifier",
                "start": 59,
                "end": 63,
                "name": "Here",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "initializer": null,
              "computed": false
            }
          ]
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "EmptyStatement",
      "start": 65,
      "end": 66
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 67,
      "end": 116,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 74,
        "end": 116,
        "id": {
          "type": "Identifier",
          "start": 83,
          "end": 90,
          "name": "fooFunc",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 99,
          "end": 116,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 92,
          "end": 98,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 94,
            "end": 98
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 140,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 15,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 15,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 28,
        "value": "./foo",
        "raw": "\"./foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 31,
      "end": 140,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 45,
        "name": "check",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 46,
          "end": 65,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 47,
            "end": 65,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 49,
              "end": 65,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 49,
                "end": 65,
                "left": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 52,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 65,
                  "name": "ConstFooEnum",
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 73,
        "end": 140,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 77,
            "end": 138,
            "discriminant": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 94,
                "end": 134,
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "start": 128,
                    "end": 134,
                    "label": null
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 99,
                  "end": 120,
                  "object": {
                    "type": "MemberExpression",
                    "start": 99,
                    "end": 115,
                    "object": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 102,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 103,
                      "end": 115,
                      "name": "ConstFooEnum",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 120,
                    "name": "Some",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 66,
        "end": 72,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 68,
          "end": 72
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

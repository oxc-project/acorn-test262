__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 108,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 107,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 107,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 33,
          "name": "ConstEnumOnlyModule",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 34,
          "end": 107,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 38,
              "end": 105,
              "declaration": {
                "type": "TSEnumDeclaration",
                "start": 45,
                "end": 105,
                "id": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 68,
                  "name": "ConstFooEnum",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 75,
                    "end": 79,
                    "id": {
                      "type": "Identifier",
                      "start": 75,
                      "end": 79,
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
                    "start": 85,
                    "end": 91,
                    "id": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 91,
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
                    "start": 97,
                    "end": 101,
                    "id": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 101,
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
                  "start": 69,
                  "end": 105,
                  "members": [
                    {
                      "type": "TSEnumMember",
                      "start": 75,
                      "end": 79,
                      "id": {
                        "type": "Identifier",
                        "start": 75,
                        "end": 79,
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
                      "start": 85,
                      "end": 91,
                      "id": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 91,
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
                      "start": 97,
                      "end": 101,
                      "id": {
                        "type": "Identifier",
                        "start": 97,
                        "end": 101,
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
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
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
  "end": 64,
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
      "type": "TSExportAssignment",
      "start": 30,
      "end": 63,
      "expression": {
        "type": "MemberExpression",
        "start": 39,
        "end": 62,
        "object": {
          "type": "Identifier",
          "start": 39,
          "end": 42,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 43,
          "end": 62,
          "name": "ConstEnumOnlyModule",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
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
  "end": 145,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 35,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 34,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 33,
          "value": "./reexport",
          "raw": "\"./reexport\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 36,
      "end": 145,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 50,
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
          "start": 51,
          "end": 70,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 52,
            "end": 70,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 54,
              "end": 70,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 54,
                "end": 70,
                "left": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 57,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 70,
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
        "start": 78,
        "end": 145,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 82,
            "end": 143,
            "discriminant": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 99,
                "end": 139,
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "start": 133,
                    "end": 139,
                    "label": null
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 104,
                  "end": 125,
                  "object": {
                    "type": "MemberExpression",
                    "start": 104,
                    "end": 120,
                    "object": {
                      "type": "Identifier",
                      "start": 104,
                      "end": 107,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 120,
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
                    "start": 121,
                    "end": 125,
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
        "start": 71,
        "end": 77,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 73,
          "end": 77
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

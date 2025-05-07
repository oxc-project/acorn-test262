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
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 107,
        "body": {
          "type": "TSModuleBlock",
          "start": 34,
          "end": 107,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 38,
              "end": 105,
              "attributes": [],
              "declaration": {
                "type": "TSEnumDeclaration",
                "start": 45,
                "end": 105,
                "body": {
                  "type": "TSEnumBody",
                  "start": 69,
                  "end": 105,
                  "members": [
                    {
                      "type": "TSEnumMember",
                      "start": 75,
                      "end": 79,
                      "computed": false,
                      "id": {
                        "type": "Identifier",
                        "start": 75,
                        "end": 79,
                        "decorators": [],
                        "name": "Some",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "initializer": null
                    },
                    {
                      "type": "TSEnumMember",
                      "start": 85,
                      "end": 91,
                      "computed": false,
                      "id": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 91,
                        "decorators": [],
                        "name": "Values",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "initializer": null
                    },
                    {
                      "type": "TSEnumMember",
                      "start": 97,
                      "end": 101,
                      "computed": false,
                      "id": {
                        "type": "Identifier",
                        "start": 97,
                        "end": 101,
                        "decorators": [],
                        "name": "Here",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "initializer": null
                    }
                  ]
                },
                "const": true,
                "declare": false,
                "id": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 68,
                  "decorators": [],
                  "name": "ConstFooEnum",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 33,
          "decorators": [],
          "name": "ConstEnumOnlyModule",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 28,
        "raw": "\"./foo\"",
        "value": "./foo",
        "regex": null,
        "bigint": null
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
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSExportAssignment",
      "start": 30,
      "end": 63,
      "expression": {
        "type": "MemberExpression",
        "start": 39,
        "end": 62,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 39,
          "end": 42,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 43,
          "end": 62,
          "decorators": [],
          "name": "ConstEnumOnlyModule",
          "optional": false,
          "typeAnnotation": null
        }
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
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 34,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 33,
          "raw": "\"./reexport\"",
          "value": "./reexport",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 36,
      "end": 145,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 78,
        "end": 145,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 82,
            "end": 143,
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
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 104,
                    "end": 120,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 104,
                      "end": 107,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 120,
                      "decorators": [],
                      "name": "ConstFooEnum",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 125,
                    "decorators": [],
                    "name": "Some",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 50,
        "decorators": [],
        "name": "check",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 51,
          "end": 70,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 52,
            "end": 70,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 54,
              "end": 70,
              "typeArguments": null,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 54,
                "end": 70,
                "left": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 57,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 70,
                  "decorators": [],
                  "name": "ConstFooEnum",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 71,
        "end": 77,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 73,
          "end": 77
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

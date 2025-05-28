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
          "decorators": [],
          "name": "ConstEnumOnlyModule",
          "optional": false,
          "typeAnnotation": null
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
                  "decorators": [],
                  "name": "ConstFooEnum",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                        "decorators": [],
                        "name": "Some",
                        "optional": false,
                        "typeAnnotation": null
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
                        "decorators": [],
                        "name": "Values",
                        "optional": false,
                        "typeAnnotation": null
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
                        "decorators": [],
                        "name": "Here",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "initializer": null,
                      "computed": false
                    }
                  ]
                },
                "const": true,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 43,
          "end": 62,
          "decorators": [],
          "name": "ConstEnumOnlyModule",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
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
        "decorators": [],
        "name": "check",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              },
              "typeArguments": null
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 99,
                "end": 139,
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
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 120,
                      "decorators": [],
                      "name": "ConstFooEnum",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 125,
                    "decorators": [],
                    "name": "Some",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "start": 133,
                    "end": 139,
                    "label": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

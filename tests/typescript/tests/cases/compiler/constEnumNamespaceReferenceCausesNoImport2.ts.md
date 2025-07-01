__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConstEnumOnlyModule",
          "optional": false,
          "typeAnnotation": null,
          "start": 14,
          "end": 33
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSEnumDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ConstFooEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 68
                },
                "body": {
                  "type": "TSEnumBody",
                  "members": [
                    {
                      "type": "TSEnumMember",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Some",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 75,
                        "end": 79
                      },
                      "initializer": null,
                      "computed": false,
                      "start": 75,
                      "end": 79
                    },
                    {
                      "type": "TSEnumMember",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Values",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 85,
                        "end": 91
                      },
                      "initializer": null,
                      "computed": false,
                      "start": 85,
                      "end": 91
                    },
                    {
                      "type": "TSEnumMember",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Here",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 97,
                        "end": 101
                      },
                      "initializer": null,
                      "computed": false,
                      "start": 97,
                      "end": 101
                    }
                  ],
                  "start": 69,
                  "end": 105
                },
                "const": true,
                "declare": false,
                "start": 45,
                "end": 105
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 38,
              "end": 105
            }
          ],
          "start": 34,
          "end": 107
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 107
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 107
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 108
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 15
          },
          "start": 7,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./foo",
        "raw": "\"./foo\"",
        "start": 21,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 29
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 39,
          "end": 42
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConstEnumOnlyModule",
          "optional": false,
          "typeAnnotation": null,
          "start": 43,
          "end": 62
        },
        "optional": false,
        "computed": false,
        "start": 39,
        "end": 62
      },
      "start": 30,
      "end": 63
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 64
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 10
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./reexport",
          "raw": "\"./reexport\"",
          "start": 21,
          "end": 33
        },
        "start": 13,
        "end": 34
      },
      "importKind": "value",
      "start": 0,
      "end": 35
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "check",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 50
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 54,
                  "end": 57
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ConstFooEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 58,
                  "end": 70
                },
                "start": 54,
                "end": 70
              },
              "typeArguments": null,
              "start": 54,
              "end": 70
            },
            "start": 52,
            "end": 70
          },
          "start": 51,
          "end": 70
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 73,
          "end": 77
        },
        "start": 71,
        "end": 77
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 91
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 104,
                      "end": 107
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ConstFooEnum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 108,
                      "end": 120
                    },
                    "optional": false,
                    "computed": false,
                    "start": 104,
                    "end": 120
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Some",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 121,
                    "end": 125
                  },
                  "optional": false,
                  "computed": false,
                  "start": 104,
                  "end": 125
                },
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 133,
                    "end": 139
                  }
                ],
                "start": 99,
                "end": 139
              }
            ],
            "start": 82,
            "end": 143
          }
        ],
        "start": 78,
        "end": 145
      },
      "expression": false,
      "start": 36,
      "end": 145
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 145
}
```

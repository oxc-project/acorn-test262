__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Other",
          "optional": false,
          "typeAnnotation": null,
          "start": 20,
          "end": 25
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "other",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 35
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 37,
                  "end": 43
                },
                "start": 35,
                "end": 43
              },
              "accessibility": null,
              "static": false,
              "start": 30,
              "end": 43
            }
          ],
          "start": 28,
          "end": 45
        },
        "declare": true,
        "start": 7,
        "end": 46
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 46
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SomeType",
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 75
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 80,
                "end": 83
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Other",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 85,
                    "end": 90
                  },
                  "typeArguments": null,
                  "start": 85,
                  "end": 90
                },
                "start": 83,
                "end": 90
              },
              "accessibility": null,
              "static": false,
              "start": 80,
              "end": 90
            }
          ],
          "start": 78,
          "end": 92
        },
        "declare": true,
        "start": 54,
        "end": 93
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 47,
      "end": 93
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 94
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OtherType",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 21
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSImportType",
          "source": {
            "type": "Literal",
            "value": "./inner",
            "raw": "'./inner'",
            "start": 31,
            "end": 40
          },
          "options": null,
          "qualifier": {
            "type": "Identifier",
            "decorators": [],
            "name": "Other",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 47
          },
          "typeArguments": null,
          "start": 24,
          "end": 47
        },
        "declare": false,
        "start": 7,
        "end": 48
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 48
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SomeType",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 69
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSImportType",
          "source": {
            "type": "Literal",
            "value": "./inner",
            "raw": "'./inner'",
            "start": 79,
            "end": 88
          },
          "options": null,
          "qualifier": {
            "type": "Identifier",
            "decorators": [],
            "name": "SomeType",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 98
          },
          "typeArguments": null,
          "start": 72,
          "end": 98
        },
        "declare": false,
        "start": 56,
        "end": 99
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 49,
      "end": 99
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 100
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
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "SomeType",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 17
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "SomeType",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 17
          },
          "importKind": "value",
          "start": 9,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "some-dep",
        "raw": "\"some-dep\"",
        "start": 25,
        "end": 35
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 36
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 54
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SomeType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 65,
                        "end": 73
                      },
                      "typeArguments": null,
                      "start": 65,
                      "end": 73
                    },
                    "start": 63,
                    "end": 73
                  },
                  "start": 58,
                  "end": 73
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 89,
                      "end": 94
                    },
                    "start": 82,
                    "end": 95
                  }
                ],
                "start": 78,
                "end": 97
              },
              "id": null,
              "generator": false,
              "start": 57,
              "end": 97
            },
            "definite": false,
            "start": 51,
            "end": 97
          }
        ],
        "declare": false,
        "start": 45,
        "end": 98
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 38,
      "end": 98
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 116
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SomeType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 127,
                        "end": 135
                      },
                      "typeArguments": null,
                      "start": 127,
                      "end": 135
                    },
                    "start": 125,
                    "end": 135
                  },
                  "start": 120,
                  "end": 135
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 151,
                        "end": 156
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 157,
                        "end": 160
                      },
                      "optional": false,
                      "computed": false,
                      "start": 151,
                      "end": 160
                    },
                    "start": 144,
                    "end": 161
                  }
                ],
                "start": 140,
                "end": 163
              },
              "id": null,
              "generator": false,
              "start": 119,
              "end": 163
            },
            "definite": false,
            "start": 113,
            "end": 163
          }
        ],
        "declare": false,
        "start": 107,
        "end": 164
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 100,
      "end": 164
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 164
}
```

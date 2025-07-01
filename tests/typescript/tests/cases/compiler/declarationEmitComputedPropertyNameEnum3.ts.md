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
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 20
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
                  "name": "Enum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 41
                },
                "body": {
                  "type": "TSEnumBody",
                  "members": [
                    {
                      "type": "TSEnumMember",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 48,
                        "end": 49
                      },
                      "initializer": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 52,
                        "end": 55
                      },
                      "computed": false,
                      "start": 48,
                      "end": 55
                    },
                    {
                      "type": "TSEnumMember",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 61,
                        "end": 62
                      },
                      "initializer": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "\"b\"",
                        "start": 65,
                        "end": 68
                      },
                      "computed": false,
                      "start": 61,
                      "end": 68
                    }
                  ],
                  "start": 42,
                  "end": 73
                },
                "const": false,
                "declare": false,
                "start": 32,
                "end": 73
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 25,
              "end": 73
            }
          ],
          "start": 21,
          "end": 75
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 75
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 75
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Type",
          "optional": false,
          "typeAnnotation": null,
          "start": 88,
          "end": 92
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 97,
                "end": 98
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": true,
                      "optional": false,
                      "readonly": false,
                      "key": {
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
                          "name": "Enum",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 108,
                          "end": 112
                        },
                        "optional": false,
                        "computed": false,
                        "start": 104,
                        "end": 112
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 115,
                            "end": 116
                          },
                          "start": 115,
                          "end": 116
                        },
                        "start": 113,
                        "end": 116
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 103,
                      "end": 116
                    }
                  ],
                  "start": 101,
                  "end": 118
                },
                "start": 99,
                "end": 118
              },
              "accessibility": null,
              "static": false,
              "start": 97,
              "end": 118
            }
          ],
          "start": 95,
          "end": 120
        },
        "declare": false,
        "start": 83,
        "end": 121
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 76,
      "end": 121
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 122
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
            "name": "Type",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 18
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Type",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 18
          },
          "importKind": "type",
          "start": 9,
          "end": 18
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./type",
        "raw": "\"./type\"",
        "start": 26,
        "end": 34
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 35
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
              "start": 50,
              "end": 53
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 62,
                      "end": 64
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 68,
                        "end": 72
                      },
                      "typeArguments": null,
                      "start": 68,
                      "end": 72
                    },
                    "start": 62,
                    "end": 72
                  },
                  "start": 58,
                  "end": 73
                }
              ],
              "start": 56,
              "end": 75
            },
            "definite": false,
            "start": 50,
            "end": 75
          }
        ],
        "declare": false,
        "start": 44,
        "end": 76
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 37,
      "end": 76
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 76
}
```

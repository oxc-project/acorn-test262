__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 122,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 75,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 75,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 20,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 21,
          "end": 75,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 25,
              "end": 73,
              "declaration": {
                "type": "TSEnumDeclaration",
                "start": 32,
                "end": 73,
                "id": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 41,
                  "decorators": [],
                  "name": "Enum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "body": {
                  "type": "TSEnumBody",
                  "start": 42,
                  "end": 73,
                  "members": [
                    {
                      "type": "TSEnumMember",
                      "start": 48,
                      "end": 55,
                      "id": {
                        "type": "Identifier",
                        "start": 48,
                        "end": 49,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "initializer": {
                        "type": "Literal",
                        "start": 52,
                        "end": 55,
                        "value": "a",
                        "raw": "\"a\""
                      },
                      "computed": false
                    },
                    {
                      "type": "TSEnumMember",
                      "start": 61,
                      "end": 68,
                      "id": {
                        "type": "Identifier",
                        "start": 61,
                        "end": 62,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "initializer": {
                        "type": "Literal",
                        "start": 65,
                        "end": 68,
                        "value": "b",
                        "raw": "\"b\""
                      },
                      "computed": false
                    }
                  ]
                },
                "const": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 76,
      "end": 121,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 83,
        "end": 121,
        "id": {
          "type": "Identifier",
          "start": 88,
          "end": 92,
          "decorators": [],
          "name": "Type",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 95,
          "end": 120,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 97,
              "end": 118,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 97,
                "end": 98,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 99,
                "end": 118,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 101,
                  "end": 118,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 103,
                      "end": 116,
                      "computed": true,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "MemberExpression",
                        "start": 104,
                        "end": 112,
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
                          "end": 112,
                          "decorators": [],
                          "name": "Enum",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 113,
                        "end": 116,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 115,
                          "end": 116,
                          "literal": {
                            "type": "Literal",
                            "start": 115,
                            "end": 116,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
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
  "end": 76,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 35,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 18,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 18,
            "decorators": [],
            "name": "Type",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 18,
            "decorators": [],
            "name": "Type",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "type"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 26,
        "end": 34,
        "value": "./type",
        "raw": "\"./type\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 76,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 44,
        "end": 76,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 50,
            "end": 75,
            "id": {
              "type": "Identifier",
              "start": 50,
              "end": 53,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 56,
              "end": 75,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 58,
                  "end": 73,
                  "argument": {
                    "type": "TSAsExpression",
                    "start": 62,
                    "end": 72,
                    "expression": {
                      "type": "ObjectExpression",
                      "start": 62,
                      "end": 64,
                      "properties": []
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 68,
                      "end": 72,
                      "typeName": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 72,
                        "decorators": [],
                        "name": "Type",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
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

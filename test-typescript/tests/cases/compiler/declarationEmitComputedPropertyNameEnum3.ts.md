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
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 75,
        "body": {
          "type": "TSModuleBlock",
          "start": 21,
          "end": 75,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 25,
              "end": 73,
              "attributes": [],
              "declaration": {
                "type": "TSEnumDeclaration",
                "start": 32,
                "end": 73,
                "body": {
                  "type": "TSEnumBody",
                  "start": 42,
                  "end": 73,
                  "members": [
                    {
                      "type": "TSEnumMember",
                      "start": 48,
                      "end": 55,
                      "computed": false,
                      "id": {
                        "type": "Identifier",
                        "start": 48,
                        "end": 49,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      },
                      "initializer": {
                        "type": "Literal",
                        "start": 52,
                        "end": 55,
                        "raw": "\"a\"",
                        "value": "a"
                      }
                    },
                    {
                      "type": "TSEnumMember",
                      "start": 61,
                      "end": 68,
                      "computed": false,
                      "id": {
                        "type": "Identifier",
                        "start": 61,
                        "end": 62,
                        "decorators": [],
                        "name": "B",
                        "optional": false
                      },
                      "initializer": {
                        "type": "Literal",
                        "start": 65,
                        "end": 68,
                        "raw": "\"b\"",
                        "value": "b"
                      }
                    }
                  ]
                },
                "const": false,
                "declare": false,
                "id": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 41,
                  "decorators": [],
                  "name": "Enum",
                  "optional": false
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
          "start": 17,
          "end": 20,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "kind": "namespace"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 76,
      "end": 121,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 83,
        "end": 121,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 88,
          "end": 92,
          "decorators": [],
          "name": "Type",
          "optional": false
        },
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
              "key": {
                "type": "Identifier",
                "start": 97,
                "end": 98,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": true,
              "readonly": false,
              "static": false,
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
                      "key": {
                        "type": "MemberExpression",
                        "start": 104,
                        "end": 112,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 104,
                          "end": 107,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 108,
                          "end": 112,
                          "decorators": [],
                          "name": "Enum",
                          "optional": false
                        }
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "0",
                            "value": 0
                          }
                        }
                      }
                    }
                  ]
                }
              }
            }
          ]
        }
      },
      "exportKind": "type",
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
  "end": 77,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 35,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 26,
        "end": 34,
        "raw": "\"./type\"",
        "value": "./type"
      },
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
            "optional": false
          },
          "importKind": "type",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 18,
            "decorators": [],
            "name": "Type",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 76,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 44,
        "end": 76,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 50,
            "end": 75,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 50,
              "end": 53,
              "decorators": [],
              "name": "foo",
              "optional": false
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
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
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

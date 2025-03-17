__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 94,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 48,
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 48,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 18,
            "end": 46,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 25,
              "end": 46,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 31,
                  "end": 45,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 31,
                    "end": 34,
                    "decorators": [],
                    "name": "sym",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 37,
                    "end": 45,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 37,
                      "end": 43,
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
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
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 49,
      "end": 93,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 56,
        "end": 93,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 61,
          "end": 65,
          "decorators": [],
          "name": "Type",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 68,
          "end": 92,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 70,
              "end": 90,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 70,
                "end": 71,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 72,
                "end": 90,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 74,
                  "end": 90,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 76,
                      "end": 88,
                      "accessibility": null,
                      "computed": true,
                      "key": {
                        "type": "MemberExpression",
                        "start": 77,
                        "end": 84,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 77,
                          "end": 80,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 81,
                          "end": 84,
                          "decorators": [],
                          "name": "sym",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 85,
                        "end": 88,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 87,
                          "end": 88,
                          "literal": {
                            "type": "Literal",
                            "start": 87,
                            "end": 88,
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
        },
        "typeParameters": null
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
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "type",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 18,
            "decorators": [],
            "name": "Type",
            "optional": false,
            "typeAnnotation": null
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 72,
                        "decorators": [],
                        "name": "Type",
                        "optional": false,
                        "typeAnnotation": null
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

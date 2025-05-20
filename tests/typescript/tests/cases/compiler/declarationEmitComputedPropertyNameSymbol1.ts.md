__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 55,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 55,
        "body": {
          "type": "TSModuleBlock",
          "start": 21,
          "end": 55,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 25,
              "end": 53,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 32,
                "end": 53,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 38,
                    "end": 52,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 41,
                      "decorators": [],
                      "name": "sym",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "CallExpression",
                      "start": 44,
                      "end": 52,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 44,
                        "end": 50,
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
          "start": 17,
          "end": 20,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "namespace"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 56,
      "end": 100,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 63,
        "end": 100,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 68,
          "end": 72,
          "decorators": [],
          "name": "Type",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 75,
          "end": 99,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 77,
              "end": 97,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 77,
                "end": 78,
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
                "start": 79,
                "end": 97,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 81,
                  "end": 97,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 83,
                      "end": 95,
                      "accessibility": null,
                      "computed": true,
                      "key": {
                        "type": "MemberExpression",
                        "start": 84,
                        "end": 91,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 84,
                          "end": 87,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 91,
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
                        "start": 92,
                        "end": 95,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 94,
                          "end": 95,
                          "literal": {
                            "type": "Literal",
                            "start": 94,
                            "end": 95,
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
  "end": 76,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 35,
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
      ],
      "phase": null,
      "attributes": []
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

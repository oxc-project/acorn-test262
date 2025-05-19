__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 87,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 41,
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 41,
        "body": {
          "type": "TSEnumBody",
          "start": 17,
          "end": 41,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 21,
              "end": 28,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "Literal",
                "start": 25,
                "end": 28,
                "raw": "\"a\"",
                "value": "a"
              }
            },
            {
              "type": "TSEnumMember",
              "start": 32,
              "end": 39,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "Literal",
                "start": 36,
                "end": 39,
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
          "start": 12,
          "end": 16,
          "decorators": [],
          "name": "Enum",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 43,
      "end": 86,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 50,
        "end": 86,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 55,
          "end": 59,
          "decorators": [],
          "name": "Type",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 62,
          "end": 85,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 64,
              "end": 83,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 64,
                "end": 65,
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
                "start": 66,
                "end": 83,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 68,
                  "end": 83,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 70,
                      "end": 81,
                      "accessibility": null,
                      "computed": true,
                      "key": {
                        "type": "MemberExpression",
                        "start": 71,
                        "end": 77,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 71,
                          "end": 75,
                          "decorators": [],
                          "name": "Enum",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 76,
                          "end": 77,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 78,
                        "end": 81,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 80,
                          "end": 81,
                          "literal": {
                            "type": "Literal",
                            "start": 80,
                            "end": 81,
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

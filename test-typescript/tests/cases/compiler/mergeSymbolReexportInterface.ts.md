__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 73,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 25,
        "raw": "'.'",
        "value": ".",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 12,
            "decorators": [],
            "name": "Row2",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 12,
            "decorators": [],
            "name": "Row2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 26,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 46,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 40,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 40,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 36,
                "end": 40,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 40,
                  "decorators": [],
                  "name": "Row2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 43,
            "end": 46,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 47,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 70,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 58,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 58,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 57,
                "end": 58,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 58,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 61,
            "end": 70,
            "properties": [
              {
                "type": "Property",
                "start": 63,
                "end": 68,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 64,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 66,
                  "end": 68,
                  "raw": "''",
                  "value": "",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
  "end": 89,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 10,
        "raw": "'.'",
        "value": ".",
        "regex": null,
        "bigint": null
      },
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 11,
      "end": 87,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 30,
        "end": 87,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 34,
            "end": 59,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 39,
              "end": 43,
              "decorators": [],
              "name": "Row2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 46,
              "end": 59,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 48,
                  "end": 57,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 49,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 49,
                    "end": 57,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 51,
                      "end": 57
                    }
                  }
                }
              ]
            },
            "typeParameters": null
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 62,
            "end": 85,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 71,
              "end": 85,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 73,
                  "end": 83,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 74,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 75,
                    "end": 83,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 77,
                      "end": 83
                    }
                  }
                }
              ]
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 26,
        "end": 29,
        "raw": "'.'",
        "value": ".",
        "regex": null,
        "bigint": null
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
  "end": 37,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 35,
      "attributes": [],
      "declaration": null,
      "exportKind": "type",
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 34,
        "raw": "'./common'",
        "value": "./common",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 13,
          "end": 17,
          "exported": {
            "type": "Identifier",
            "start": 13,
            "end": 17,
            "decorators": [],
            "name": "Row2",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 13,
            "end": 17,
            "decorators": [],
            "name": "Row2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
  "end": 35,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 35,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 35,
        "body": {
          "type": "TSInterfaceBody",
          "start": 22,
          "end": 35,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 24,
              "end": 33,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 24,
                "end": 25,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 25,
                "end": 33,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 27,
                  "end": 33
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 21,
          "decorators": [],
          "name": "Row2",
          "optional": false,
          "typeAnnotation": null
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

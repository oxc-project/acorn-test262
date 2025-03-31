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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 12,
            "name": "Row2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 12,
            "name": "Row2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 25,
        "value": ".",
        "raw": "'.'"
      },
      "attributes": [],
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 40,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 40,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 36,
                "end": 40,
                "typeName": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 40,
                  "name": "Row2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 43,
            "end": 46,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 58,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 58,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 57,
                "end": 58,
                "typeName": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 58,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 64,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 66,
                  "end": 68,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 10,
        "value": ".",
        "raw": "'.'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 11,
      "end": 87,
      "id": {
        "type": "Literal",
        "start": 26,
        "end": 29,
        "value": ".",
        "raw": "'.'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 30,
        "end": 87,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 34,
            "end": 59,
            "id": {
              "type": "Identifier",
              "start": 39,
              "end": 43,
              "name": "Row2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 46,
              "end": 59,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 48,
                  "end": 57,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 49,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 49,
                    "end": 57,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 51,
                      "end": 57
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 62,
            "end": 85,
            "id": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 71,
              "end": 85,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 73,
                  "end": 83,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 74,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 75,
                    "end": 83,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 77,
                      "end": 83
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 13,
          "end": 17,
          "local": {
            "type": "Identifier",
            "start": 13,
            "end": 17,
            "name": "Row2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 13,
            "end": 17,
            "name": "Row2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 34,
        "value": "./common",
        "raw": "'./common'"
      },
      "attributes": [],
      "exportKind": "type"
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
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 35,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 21,
          "name": "Row2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 22,
          "end": 35,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 24,
              "end": 33,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 24,
                "end": 25,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 25,
                "end": 33,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 27,
                  "end": 33
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
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

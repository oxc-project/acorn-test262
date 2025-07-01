__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
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
                    "name": "sym",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 31,
                    "end": 34
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 37,
                      "end": 43
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 37,
                    "end": 45
                  },
                  "definite": false,
                  "start": 31,
                  "end": 45
                }
              ],
              "declare": false,
              "start": 25,
              "end": 46
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 46
          }
        ],
        "start": 14,
        "end": 48
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
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
          "name": "Type",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 65
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
                "start": 70,
                "end": 71
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
                          "start": 77,
                          "end": 80
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "sym",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 81,
                          "end": 84
                        },
                        "optional": false,
                        "computed": false,
                        "start": 77,
                        "end": 84
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 87,
                            "end": 88
                          },
                          "start": 87,
                          "end": 88
                        },
                        "start": 85,
                        "end": 88
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 76,
                      "end": 88
                    }
                  ],
                  "start": 74,
                  "end": 90
                },
                "start": 72,
                "end": 90
              },
              "accessibility": null,
              "static": false,
              "start": 70,
              "end": 90
            }
          ],
          "start": 68,
          "end": 92
        },
        "declare": false,
        "start": 56,
        "end": 93
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 49,
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

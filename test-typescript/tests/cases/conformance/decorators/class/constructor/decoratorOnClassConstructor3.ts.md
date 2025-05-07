__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 116,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 21,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 21,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 18,
          "end": 21,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 17,
          "decorators": [],
          "name": "base",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 115,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 29,
        "end": 115,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 112,
          "end": 115,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 38,
          "end": 41,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 42,
            "end": 56,
            "decorators": [],
            "name": "target",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 50,
                "end": 56,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 56,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 58,
            "end": 86,
            "decorators": [],
            "name": "propertyKey",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 86,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 71,
                "end": 86,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 71,
                    "end": 77
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 80,
                    "end": 86
                  }
                ]
              }
            }
          },
          {
            "type": "Identifier",
            "start": 88,
            "end": 110,
            "decorators": [],
            "name": "parameterIndex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 110,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 104,
                "end": 110
              }
            }
          }
        ],
        "returnType": null,
        "typeParameters": null
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 177,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 24,
        "raw": "\"./0\"",
        "value": "./0",
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
            "name": "base",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 12,
            "decorators": [],
            "name": "base",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 25,
      "end": 48,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 43,
        "end": 48,
        "raw": "\"./0\"",
        "value": "./0",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 33,
          "end": 36,
          "imported": {
            "type": "Identifier",
            "start": 33,
            "end": 36,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 33,
            "end": 36,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 89,
      "end": 177,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 96,
        "end": 177,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 117,
          "end": 177,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 123,
              "end": 175,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 123,
                "end": 134,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 134,
                "end": 175,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 151,
                  "end": 175,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 161,
                      "end": 169,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 161,
                        "end": 168,
                        "arguments": [],
                        "callee": {
                          "type": "Super",
                          "start": 161,
                          "end": 166
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 140,
                    "end": 149,
                    "decorators": [
                      {
                        "type": "Decorator",
                        "start": 135,
                        "end": 139,
                        "expression": {
                          "type": "Identifier",
                          "start": 136,
                          "end": 139,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 144,
                      "end": 149,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 146,
                        "end": 149
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 102,
          "end": 103,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 113,
          "end": 117,
          "decorators": [],
          "name": "base",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": null,
        "typeParameters": null
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

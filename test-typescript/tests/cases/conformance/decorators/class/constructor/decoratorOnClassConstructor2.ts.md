__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 134,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 18,
      "end": 39,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 25,
        "end": 39,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 36,
          "end": 39,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 31,
          "end": 35,
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
      "start": 40,
      "end": 133,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 47,
        "end": 133,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 130,
          "end": 133,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 56,
          "end": 59,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 60,
            "end": 74,
            "decorators": [],
            "name": "target",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 74,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 68,
                "end": 74,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 74,
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
            "start": 76,
            "end": 104,
            "decorators": [],
            "name": "propertyKey",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 104,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 89,
                "end": 104,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 89,
                    "end": 95
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 98,
                    "end": 104
                  }
                ]
              }
            }
          },
          {
            "type": "Identifier",
            "start": 106,
            "end": 128,
            "decorators": [],
            "name": "parameterIndex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 128,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 122,
                "end": 128
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
  "end": 143,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 27,
        "raw": "\"./0.ts\"",
        "value": "./0.ts"
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
      "start": 28,
      "end": 54,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 46,
        "end": 54,
        "raw": "\"./0.ts\"",
        "value": "./0.ts"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 36,
          "end": 39,
          "imported": {
            "type": "Identifier",
            "start": 36,
            "end": 39,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 36,
            "end": 39,
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
      "start": 55,
      "end": 143,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 62,
        "end": 143,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 83,
          "end": 143,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 89,
              "end": 141,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 89,
                "end": 100,
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
                "start": 100,
                "end": 141,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 117,
                  "end": 141,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 127,
                      "end": 135,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 127,
                        "end": 134,
                        "arguments": [],
                        "callee": {
                          "type": "Super",
                          "start": 127,
                          "end": 132
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
                    "start": 106,
                    "end": 115,
                    "decorators": [
                      {
                        "type": "Decorator",
                        "start": 101,
                        "end": 105,
                        "expression": {
                          "type": "Identifier",
                          "start": 102,
                          "end": 105,
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
                      "start": 110,
                      "end": 115,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 112,
                        "end": 115
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
          "start": 68,
          "end": 69,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 79,
          "end": 83,
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

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
          "optional": false
        },
        "implements": [],
        "superClass": null
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
          "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 74,
                  "decorators": [],
                  "name": "Object",
                  "optional": false
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
        ]
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
        "value": "./0"
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 12,
            "decorators": [],
            "name": "base",
            "optional": false
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
        "value": "./0"
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 33,
            "end": 36,
            "decorators": [],
            "name": "foo",
            "optional": false
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
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 123,
                "end": 134,
                "decorators": [],
                "name": "constructor",
                "optional": false
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
                        "optional": false
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
                          "optional": false
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
                ]
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
          "optional": false
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 113,
          "end": 117,
          "decorators": [],
          "name": "base",
          "optional": false
        }
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

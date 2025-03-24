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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 25,
        "end": 39,
        "id": {
          "type": "Identifier",
          "start": 31,
          "end": 35,
          "name": "base",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 36,
          "end": 39,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 40,
      "end": 133,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 47,
        "end": 133,
        "id": {
          "type": "Identifier",
          "start": 56,
          "end": 59,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 60,
            "end": 74,
            "name": "target",
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
                  "name": "Object",
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
          {
            "type": "Identifier",
            "start": 76,
            "end": 104,
            "name": "propertyKey",
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
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 106,
            "end": 128,
            "name": "parameterIndex",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 128,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 122,
                "end": 128
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 130,
          "end": 133,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 12,
            "name": "base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 12,
            "name": "base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 27,
        "value": "./0.ts",
        "raw": "\"./0.ts\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 28,
      "end": 54,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 36,
          "end": 39,
          "imported": {
            "type": "Identifier",
            "start": 36,
            "end": 39,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 36,
            "end": 39,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 46,
        "end": 54,
        "value": "./0.ts",
        "raw": "\"./0.ts\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 55,
      "end": 143,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 62,
        "end": 143,
        "id": {
          "type": "Identifier",
          "start": 68,
          "end": 69,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "Identifier",
          "start": 79,
          "end": 83,
          "name": "base",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 83,
          "end": 143,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 89,
              "end": 141,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 89,
                "end": 100,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 100,
                "end": 141,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 106,
                    "end": 115,
                    "name": "prop",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 110,
                      "end": 115,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 112,
                        "end": 115
                      }
                    },
                    "decorators": [
                      {
                        "type": "Decorator",
                        "start": 101,
                        "end": 105,
                        "expression": {
                          "type": "Identifier",
                          "start": 102,
                          "end": 105,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 117,
                  "end": 141,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 127,
                      "end": 135,
                      "expression": {
                        "type": "CallExpression",
                        "start": 127,
                        "end": 134,
                        "callee": {
                          "type": "Super",
                          "start": 127,
                          "end": 132
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "directive": null
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

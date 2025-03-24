__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 128,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 56,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 56,
        "body": {
          "type": "TSInterfaceBody",
          "start": 24,
          "end": 56,
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 27,
              "end": 38,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 29,
                "end": 37,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 31,
                  "end": 37
                }
              },
              "typeParameters": null
            },
            {
              "type": "TSPropertySignature",
              "start": 40,
              "end": 54,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 40,
                "end": 45,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 45,
                "end": 53,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 47,
                  "end": 53
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
          "end": 23,
          "decorators": [],
          "name": "Scalar",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 58,
      "end": 128,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 65,
        "end": 128,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 104,
          "end": 128,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 107,
              "end": 126,
              "argument": {
                "type": "TSAsExpression",
                "start": 114,
                "end": 125,
                "expression": {
                  "type": "Literal",
                  "start": 114,
                  "end": 118,
                  "raw": "null",
                  "value": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 122,
                  "end": 125
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 74,
          "end": 80,
          "decorators": [],
          "name": "scalar",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 81,
            "end": 94,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 94,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 88,
                "end": 94
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 95,
          "end": 103,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 97,
            "end": 103,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 97,
              "end": 103,
              "decorators": [],
              "name": "Scalar",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
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
  "end": 110,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 49,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 48,
        "raw": "'../lib/operators/scalar'",
        "value": "../lib/operators/scalar"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "decorators": [],
            "name": "scalar",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "decorators": [],
            "name": "scalar",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 51,
      "end": 110,
      "declaration": {
        "type": "ObjectExpression",
        "start": 66,
        "end": 109,
        "properties": [
          {
            "type": "Property",
            "start": 69,
            "end": 107,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 75,
              "decorators": [],
              "name": "xs",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "FunctionExpression",
              "start": 75,
              "end": 107,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 78,
                "end": 107,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 82,
                    "end": 104,
                    "argument": {
                      "type": "CallExpression",
                      "start": 89,
                      "end": 103,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 96,
                          "end": 102,
                          "raw": "\"14px\"",
                          "value": "14px"
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 95,
                        "decorators": [],
                        "name": "scalar",
                        "optional": false,
                        "typeAnnotation": null
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
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

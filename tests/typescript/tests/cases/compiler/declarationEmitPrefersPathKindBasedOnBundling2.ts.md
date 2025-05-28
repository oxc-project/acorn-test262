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
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 56,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 23,
          "decorators": [],
          "name": "Scalar",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 24,
          "end": 56,
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 27,
              "end": 38,
              "typeParameters": null,
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
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 40,
              "end": 54,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 40,
                "end": 45,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 45,
                "end": 53,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 47,
                  "end": 53
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 58,
      "end": 128,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 65,
        "end": 128,
        "id": {
          "type": "Identifier",
          "start": 74,
          "end": 80,
          "decorators": [],
          "name": "scalar",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
            "typeName": {
              "type": "Identifier",
              "start": 97,
              "end": 103,
              "decorators": [],
              "name": "Scalar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
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
                  "value": null,
                  "raw": "null"
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
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "decorators": [],
            "name": "scalar",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 48,
        "value": "../lib/operators/scalar",
        "raw": "'../lib/operators/scalar'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
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
            "kind": "get",
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 75,
              "decorators": [],
              "name": "xs",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 75,
              "end": 107,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "callee": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 95,
                        "decorators": [],
                        "name": "scalar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 96,
                          "end": 102,
                          "value": "14px",
                          "raw": "\"14px\""
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false
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

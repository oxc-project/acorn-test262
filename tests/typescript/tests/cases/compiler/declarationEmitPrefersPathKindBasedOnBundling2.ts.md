__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Scalar",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 23
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 31,
                  "end": 37
                },
                "start": 29,
                "end": 37
              },
              "start": 27,
              "end": 38
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 40,
                "end": 45
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 47,
                  "end": 53
                },
                "start": 45,
                "end": 53
              },
              "accessibility": null,
              "static": false,
              "start": 40,
              "end": 54
            }
          ],
          "start": 24,
          "end": 56
        },
        "declare": false,
        "start": 7,
        "end": 56
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 56
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "scalar",
          "optional": false,
          "typeAnnotation": null,
          "start": 74,
          "end": 80
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 88,
                "end": 94
              },
              "start": 86,
              "end": 94
            },
            "start": 81,
            "end": 94
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Scalar",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 103
            },
            "typeArguments": null,
            "start": 97,
            "end": 103
          },
          "start": 95,
          "end": 103
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 114,
                  "end": 118
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 122,
                  "end": 125
                },
                "start": 114,
                "end": 125
              },
              "start": 107,
              "end": 126
            }
          ],
          "start": 104,
          "end": 128
        },
        "expression": false,
        "start": 65,
        "end": 128
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 58,
      "end": 128
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 128
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
            "name": "scalar",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 15
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "scalar",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 15
          },
          "importKind": "value",
          "start": 9,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "../lib/operators/scalar",
        "raw": "'../lib/operators/scalar'",
        "start": 23,
        "end": 48
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 49
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "get",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "xs",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 75
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "scalar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 89,
                        "end": 95
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "14px",
                          "raw": "\"14px\"",
                          "start": 96,
                          "end": 102
                        }
                      ],
                      "optional": false,
                      "start": 89,
                      "end": 103
                    },
                    "start": 82,
                    "end": 104
                  }
                ],
                "start": 78,
                "end": 107
              },
              "expression": false,
              "start": 75,
              "end": 107
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 69,
            "end": 107
          }
        ],
        "start": 66,
        "end": 109
      },
      "exportKind": "value",
      "start": 51,
      "end": 110
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 110
}
```

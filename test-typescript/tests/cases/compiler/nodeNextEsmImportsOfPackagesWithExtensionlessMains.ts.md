__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 34,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 34,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 34,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 23,
          "name": "address",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": null,
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 25,
          "end": 33,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 27,
            "end": 33
          }
        }
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
  "end": 131,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 27,
        "name": "nullthrows",
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
          "start": 28,
          "end": 34,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 29,
            "end": 34,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 31,
              "end": 34
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 35,
        "end": 40,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 37,
          "end": 40
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 42,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 70,
        "name": "nullthrows",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 71,
        "end": 110,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 77,
            "end": 108,
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 85,
                "end": 106,
                "local": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 95,
                  "name": "nullthrows",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exported": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 106,
                  "name": "default",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exportKind": "value"
              }
            ],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSExportAssignment",
      "start": 111,
      "end": 131,
      "expression": {
        "type": "Identifier",
        "start": 120,
        "end": 130,
        "name": "nullthrows",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
  "end": 234,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "name": "ip",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 24,
        "value": "ip",
        "raw": "'ip'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 26,
      "end": 62,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 33,
          "end": 43,
          "local": {
            "type": "Identifier",
            "start": 33,
            "end": 43,
            "name": "nullthrows",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 49,
        "end": 61,
        "value": "nullthrows",
        "raw": "'nullthrows'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 159,
      "end": 234,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 166,
        "end": 234,
        "id": {
          "type": "Identifier",
          "start": 175,
          "end": 185,
          "name": "getAddress",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 196,
          "end": 234,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 200,
              "end": 232,
              "argument": {
                "type": "CallExpression",
                "start": 207,
                "end": 231,
                "callee": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 217,
                  "name": "nullthrows",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "CallExpression",
                    "start": 218,
                    "end": 230,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 218,
                      "end": 228,
                      "object": {
                        "type": "Identifier",
                        "start": 218,
                        "end": 220,
                        "name": "ip",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 221,
                        "end": 228,
                        "name": "address",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 187,
          "end": 195,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 189,
            "end": 195
          }
        }
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

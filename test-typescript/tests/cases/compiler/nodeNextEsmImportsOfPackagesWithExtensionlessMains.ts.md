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
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 34,
        "async": false,
        "body": null,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 23,
          "decorators": [],
          "name": "address",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 25,
          "end": 33,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 27,
            "end": 33
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
  "end": 131,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 41,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 27,
        "decorators": [],
        "name": "nullthrows",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 28,
          "end": 34,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 29,
            "end": 34,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 31,
              "end": 34
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 35,
        "end": 40,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 37,
          "end": 40
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 42,
      "end": 110,
      "body": {
        "type": "TSModuleBlock",
        "start": 71,
        "end": 110,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 77,
            "end": 108,
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 85,
                "end": 106,
                "exported": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 106,
                  "decorators": [],
                  "name": "default",
                  "optional": false,
                  "typeAnnotation": null
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 95,
                  "decorators": [],
                  "name": "nullthrows",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 70,
        "decorators": [],
        "name": "nullthrows",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "TSExportAssignment",
      "start": 111,
      "end": 131,
      "expression": {
        "type": "Identifier",
        "start": 120,
        "end": 130,
        "decorators": [],
        "name": "nullthrows",
        "optional": false,
        "typeAnnotation": null
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
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 24,
        "raw": "'ip'",
        "value": "ip"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "decorators": [],
            "name": "ip",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 26,
      "end": 62,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 49,
        "end": 61,
        "raw": "'nullthrows'",
        "value": "nullthrows"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 33,
          "end": 43,
          "local": {
            "type": "Identifier",
            "start": 33,
            "end": 43,
            "decorators": [],
            "name": "nullthrows",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 159,
      "end": 234,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 166,
        "end": 234,
        "async": false,
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
                "arguments": [
                  {
                    "type": "CallExpression",
                    "start": 218,
                    "end": 230,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 218,
                      "end": 228,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 218,
                        "end": 220,
                        "decorators": [],
                        "name": "ip",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 221,
                        "end": 228,
                        "decorators": [],
                        "name": "address",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 217,
                  "decorators": [],
                  "name": "nullthrows",
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
        "id": {
          "type": "Identifier",
          "start": 175,
          "end": 185,
          "decorators": [],
          "name": "getAddress",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 187,
          "end": 195,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 189,
            "end": 195
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

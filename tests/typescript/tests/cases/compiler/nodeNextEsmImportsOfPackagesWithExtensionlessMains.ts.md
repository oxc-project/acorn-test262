__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "address",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 23
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 27,
            "end": 33
          },
          "start": 25,
          "end": 33
        },
        "body": null,
        "expression": false,
        "start": 7,
        "end": 34
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 34
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 34
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nullthrows",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 27
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 31,
              "end": 34
            },
            "start": 29,
            "end": 34
          },
          "start": 28,
          "end": 34
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 37,
          "end": 40
        },
        "start": 35,
        "end": 40
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 41
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nullthrows",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 70
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nullthrows",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 95
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "default",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 99,
                  "end": 106
                },
                "exportKind": "value",
                "start": 85,
                "end": 106
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 77,
            "end": 108
          }
        ],
        "start": 71,
        "end": 110
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 42,
      "end": 110
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "nullthrows",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 130
      },
      "start": 111,
      "end": 131
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 131
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ip",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 14
          },
          "start": 7,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "ip",
        "raw": "'ip'",
        "start": 20,
        "end": 24
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 25
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "nullthrows",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 43
          },
          "start": 33,
          "end": 43
        }
      ],
      "source": {
        "type": "Literal",
        "value": "nullthrows",
        "raw": "'nullthrows'",
        "start": 49,
        "end": 61
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 26,
      "end": 62
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "getAddress",
          "optional": false,
          "typeAnnotation": null,
          "start": 175,
          "end": 185
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 189,
            "end": 195
          },
          "start": 187,
          "end": 195
        },
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
                  "name": "nullthrows",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 217
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ip",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 218,
                        "end": 220
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "address",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 221,
                        "end": 228
                      },
                      "optional": false,
                      "computed": false,
                      "start": 218,
                      "end": 228
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 218,
                    "end": 230
                  }
                ],
                "optional": false,
                "start": 207,
                "end": 231
              },
              "start": 200,
              "end": 232
            }
          ],
          "start": 196,
          "end": 234
        },
        "expression": false,
        "start": 166,
        "end": 234
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 159,
      "end": 234
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 234
}
```

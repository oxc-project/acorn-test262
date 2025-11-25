__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 8,
        "end": 14
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "React",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "TSImportType",
                        "source": {
                          "type": "Literal",
                          "value": "./module",
                          "raw": "\"./module\"",
                          "start": 48,
                          "end": 58
                        },
                        "options": null,
                        "qualifier": null,
                        "typeArguments": null,
                        "start": 41,
                        "end": 59
                      },
                      "typeArguments": null,
                      "start": 34,
                      "end": 59
                    },
                    "start": 32,
                    "end": 59
                  },
                  "start": 27,
                  "end": 59
                },
                "init": null,
                "definite": false,
                "start": 27,
                "end": 59
              }
            ],
            "declare": false,
            "start": 21,
            "end": 60
          }
        ],
        "start": 15,
        "end": 62
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 0,
      "end": 62
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 64,
      "end": 75
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 76
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 14
      },
      "start": 0,
      "end": 15
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 41
      },
      "start": 16,
      "end": 42
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 67
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "createRef",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 92
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 96,
                "end": 99
              },
              "start": 94,
              "end": 99
            },
            "body": null,
            "expression": false,
            "start": 74,
            "end": 100
          }
        ],
        "start": 68,
        "end": 102
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 44,
      "end": 102
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 103
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 11
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 17
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "createRef",
          "optional": false,
          "typeAnnotation": null,
          "start": 18,
          "end": 27
        },
        "optional": false,
        "computed": false,
        "start": 12,
        "end": 27
      },
      "directive": null,
      "start": 12,
      "end": 28
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 29
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 7
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 11
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 11
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 12,
            "end": 19
          }
        ],
        "optional": false,
        "start": 0,
        "end": 20
      },
      "directive": null,
      "start": 0,
      "end": 21
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 22,
          "end": 27
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "createRef",
          "optional": false,
          "typeAnnotation": null,
          "start": 28,
          "end": 37
        },
        "optional": false,
        "computed": false,
        "start": 22,
        "end": 37
      },
      "directive": null,
      "start": 22,
      "end": 38
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 38
}
```

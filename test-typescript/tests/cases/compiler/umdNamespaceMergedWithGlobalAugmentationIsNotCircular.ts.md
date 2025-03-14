global.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 76,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 62,
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 62,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 21,
            "end": 60,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 27,
                "end": 59,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 59,
                  "decorators": [],
                  "name": "React",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 32,
                    "end": 59,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 34,
                      "end": 59,
                      "exprName": {
                        "type": "TSImportType",
                        "start": 41,
                        "end": 59,
                        "argument": {
                          "type": "TSLiteralType",
                          "start": 48,
                          "end": 58,
                          "literal": {
                            "type": "Literal",
                            "start": 48,
                            "end": 58,
                            "raw": "\"./module\"",
                            "value": "./module"
                          }
                        },
                        "options": null,
                        "qualifier": null,
                        "typeArguments": null
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 8,
        "end": 14,
        "decorators": [],
        "name": "global",
        "optional": false
      },
      "kind": "global"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 64,
      "end": 75,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
module.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 103,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 15,
      "expression": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "decorators": [],
        "name": "React",
        "optional": false
      }
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 16,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 41,
        "decorators": [],
        "name": "React",
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 44,
      "end": 102,
      "body": {
        "type": "TSModuleBlock",
        "start": 68,
        "end": 102,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 74,
            "end": 100,
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 83,
              "end": 92,
              "decorators": [],
              "name": "createRef",
              "optional": false
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 99,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 96,
                "end": 99
              }
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 67,
        "decorators": [],
        "name": "React",
        "optional": false
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "module"
}
```
some_module.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 29,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 11,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 12,
      "end": 28,
      "expression": {
        "type": "MemberExpression",
        "start": 12,
        "end": 27,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 12,
          "end": 17,
          "decorators": [],
          "name": "React",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 18,
          "end": 27,
          "decorators": [],
          "name": "createRef",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module"
}
```
emits.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 38,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 21,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 20,
        "arguments": [
          {
            "type": "Literal",
            "start": 12,
            "end": 19,
            "raw": "\"hello\"",
            "value": "hello"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 11,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 7,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "log",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 22,
      "end": 38,
      "expression": {
        "type": "MemberExpression",
        "start": 22,
        "end": 37,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 22,
          "end": 27,
          "decorators": [],
          "name": "React",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 28,
          "end": 37,
          "decorators": [],
          "name": "createRef",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module"
}
```

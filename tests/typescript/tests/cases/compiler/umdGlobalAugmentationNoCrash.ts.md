__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
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
                      },
                      "typeArguments": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "global"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 63,
      "end": 73,
      "attributes": [],
      "declaration": null,
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
  "end": 58,
  "body": [
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 0,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 25,
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 27,
      "end": 57,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 34,
        "end": 57,
        "async": false,
        "body": null,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 43,
          "end": 46,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 48,
          "end": 56,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 50,
            "end": 56
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
  "end": 21,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 9,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 10,
      "end": 20,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 10,
        "end": 19,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 10,
          "end": 15,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        }
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
  "end": 32,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 21,
      "directive": null,
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
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 22,
      "end": 32,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 22,
        "end": 31,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 22,
          "end": 27,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 28,
          "end": 31,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

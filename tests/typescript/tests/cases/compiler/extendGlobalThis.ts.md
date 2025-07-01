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
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "globalThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 41
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 63,
                            "end": 69
                          },
                          "start": 61,
                          "end": 69
                        },
                        "start": 57,
                        "end": 69
                      },
                      "init": null,
                      "definite": false,
                      "start": 57,
                      "end": 69
                    }
                  ],
                  "declare": false,
                  "start": 53,
                  "end": 70
                }
              ],
              "start": 43,
              "end": 76
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 21,
            "end": 76
          }
        ],
        "start": 15,
        "end": 78
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 0,
      "end": 78
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 80,
      "end": 89
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 90
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./extention",
        "raw": "\"./extention\"",
        "start": 7,
        "end": 20
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 21
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "globalThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 33
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "tests",
            "optional": false,
            "typeAnnotation": null,
            "start": 34,
            "end": 39
          },
          "optional": false,
          "computed": false,
          "start": 23,
          "end": 39
        },
        "right": {
          "type": "Literal",
          "value": "a-b",
          "raw": "\"a-b\"",
          "start": 42,
          "end": 47
        },
        "start": 23,
        "end": 47
      },
      "directive": null,
      "start": 23,
      "end": 48
    },
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
            "start": 49,
            "end": 56
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 60
          },
          "optional": false,
          "computed": false,
          "start": 49,
          "end": 60
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "globalThis",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 61,
                  "end": 71
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 72,
                  "end": 76
                },
                "optional": false,
                "computed": false,
                "start": 61,
                "end": 76
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "split",
                "optional": false,
                "typeAnnotation": null,
                "start": 77,
                "end": 82
              },
              "optional": false,
              "computed": false,
              "start": 61,
              "end": 82
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "-",
                "raw": "\"-\"",
                "start": 83,
                "end": 86
              }
            ],
            "optional": false,
            "start": 61,
            "end": 87
          }
        ],
        "optional": false,
        "start": 49,
        "end": 88
      },
      "directive": null,
      "start": 49,
      "end": 89
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 89
}
```

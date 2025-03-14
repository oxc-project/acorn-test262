__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 90,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 78,
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 78,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 21,
            "end": 76,
            "body": {
              "type": "TSModuleBlock",
              "start": 43,
              "end": 76,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 53,
                  "end": 70,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 57,
                      "end": 69,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 57,
                        "end": 69,
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 61,
                          "end": 69,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 63,
                            "end": 69
                          }
                        }
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 41,
              "decorators": [],
              "name": "globalThis",
              "optional": false
            },
            "kind": "namespace"
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
      "start": 80,
      "end": 89,
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
  "end": 90,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 21,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 20,
        "raw": "\"./extention\"",
        "value": "./extention"
      },
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 23,
      "end": 48,
      "expression": {
        "type": "AssignmentExpression",
        "start": 23,
        "end": 47,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 23,
          "end": 39,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 23,
            "end": 33,
            "decorators": [],
            "name": "globalThis",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 34,
            "end": 39,
            "decorators": [],
            "name": "tests",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 42,
          "end": 47,
          "raw": "\"a-b\"",
          "value": "a-b"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 49,
      "end": 89,
      "expression": {
        "type": "CallExpression",
        "start": 49,
        "end": 88,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 61,
            "end": 87,
            "arguments": [
              {
                "type": "Literal",
                "start": 83,
                "end": 86,
                "raw": "\"-\"",
                "value": "-"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 61,
              "end": 82,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 61,
                "end": 76,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 71,
                  "decorators": [],
                  "name": "globalThis",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 76,
                  "decorators": [],
                  "name": "test",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 77,
                "end": 82,
                "decorators": [],
                "name": "split",
                "optional": false
              }
            },
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 49,
          "end": 60,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 49,
            "end": 56,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 57,
            "end": 60,
            "decorators": [],
            "name": "log",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

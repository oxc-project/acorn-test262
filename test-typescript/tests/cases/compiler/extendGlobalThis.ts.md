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
      "id": {
        "type": "Identifier",
        "start": 8,
        "end": 14,
        "name": "global",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 78,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 21,
            "end": 76,
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 41,
              "name": "globalThis",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                      "id": {
                        "type": "Identifier",
                        "start": 57,
                        "end": 69,
                        "name": "test",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 61,
                          "end": 69,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 63,
                            "end": 69
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            },
            "kind": "namespace",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 80,
      "end": 89,
      "declaration": null,
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
  "end": 90,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 21,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 20,
        "value": "./extention",
        "raw": "\"./extention\""
      },
      "attributes": [],
      "importKind": "value"
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
          "object": {
            "type": "Identifier",
            "start": 23,
            "end": 33,
            "name": "globalThis",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 34,
            "end": 39,
            "name": "tests",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 42,
          "end": 47,
          "value": "a-b",
          "raw": "\"a-b\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 49,
      "end": 89,
      "expression": {
        "type": "CallExpression",
        "start": 49,
        "end": 88,
        "callee": {
          "type": "MemberExpression",
          "start": 49,
          "end": 60,
          "object": {
            "type": "Identifier",
            "start": 49,
            "end": 56,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 57,
            "end": 60,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 61,
            "end": 87,
            "callee": {
              "type": "MemberExpression",
              "start": 61,
              "end": 82,
              "object": {
                "type": "MemberExpression",
                "start": 61,
                "end": 76,
                "object": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 71,
                  "name": "globalThis",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 76,
                  "name": "test",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 77,
                "end": 82,
                "name": "split",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 83,
                "end": 86,
                "value": "-",
                "raw": "\"-\""
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

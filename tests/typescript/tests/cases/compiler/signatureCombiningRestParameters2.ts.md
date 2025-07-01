__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Console",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 17
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 25
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "message",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 36,
                    "end": 39
                  },
                  "start": 34,
                  "end": 39
                },
                "start": 26,
                "end": 39
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optionalParams",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 44,
                  "end": 58
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 60,
                      "end": 63
                    },
                    "start": 60,
                    "end": 65
                  },
                  "start": 58,
                  "end": 65
                },
                "value": null,
                "start": 41,
                "end": 65
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 68,
                "end": 72
              },
              "start": 66,
              "end": 72
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 22,
            "end": 73
          }
        ],
        "start": 18,
        "end": 75
      },
      "declare": false,
      "start": 0,
      "end": 75
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "logs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 87,
                  "end": 93
                },
                "start": 87,
                "end": 95
              },
              "start": 85,
              "end": 95
            },
            "start": 81,
            "end": 95
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 98,
            "end": 100
          },
          "definite": false,
          "start": 81,
          "end": 100
        }
      ],
      "declare": false,
      "start": 77,
      "end": 101
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "originalLog",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 126,
                    "end": 133
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 134,
                    "end": 137
                  },
                  "start": 126,
                  "end": 137
                },
                "typeArguments": null,
                "start": 119,
                "end": 137
              },
              "start": 117,
              "end": 137
            },
            "start": 106,
            "end": 137
          },
          "init": null,
          "definite": false,
          "start": 106,
          "end": 137
        }
      ],
      "declare": false,
      "start": 102,
      "end": 138
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
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 146
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 147,
            "end": 150
          },
          "optional": false,
          "computed": false,
          "start": 139,
          "end": 150
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 157,
                "end": 161
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 154,
              "end": 161
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
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
                      "name": "logs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 170,
                      "end": 174
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "push",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 175,
                      "end": 179
                    },
                    "optional": false,
                    "computed": false,
                    "start": 170,
                    "end": 179
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 183,
                        "end": 187
                      },
                      "start": 180,
                      "end": 187
                    }
                  ],
                  "optional": false,
                  "start": 170,
                  "end": 188
                },
                "directive": null,
                "start": 170,
                "end": 189
              }
            ],
            "start": 166,
            "end": 191
          },
          "id": null,
          "generator": false,
          "start": 153,
          "end": 191
        },
        "start": 139,
        "end": 191
      },
      "directive": null,
      "start": 139,
      "end": 192
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 192
}
```

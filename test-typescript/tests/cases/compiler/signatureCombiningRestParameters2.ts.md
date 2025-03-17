__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 193,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 17,
        "name": "Console",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 18,
        "end": 75,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 22,
            "end": 73,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "name": "log",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 26,
                "end": 39,
                "name": "message",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 34,
                  "end": 39,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 36,
                    "end": 39
                  }
                },
                "decorators": [],
                "optional": true
              },
              {
                "type": "RestElement",
                "start": 41,
                "end": 65,
                "argument": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 58,
                  "name": "optionalParams",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 58,
                  "end": 65,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 60,
                    "end": 65,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 60,
                      "end": 63
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 72,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 68,
                "end": 72
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 101,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 100,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 95,
            "name": "logs",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 95,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 87,
                "end": 95,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 87,
                  "end": 93
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 98,
            "end": 100,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 102,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 137,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 137,
            "name": "originalLog",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 137,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 119,
                "end": 137,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 126,
                  "end": 137,
                  "left": {
                    "type": "Identifier",
                    "start": 126,
                    "end": 133,
                    "name": "console",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 134,
                    "end": 137,
                    "name": "log",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 139,
      "end": 192,
      "expression": {
        "type": "AssignmentExpression",
        "start": 139,
        "end": 191,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 139,
          "end": 150,
          "object": {
            "type": "Identifier",
            "start": 139,
            "end": 146,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 147,
            "end": 150,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 153,
          "end": 191,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "RestElement",
              "start": 154,
              "end": 161,
              "argument": {
                "type": "Identifier",
                "start": 157,
                "end": 161,
                "name": "args",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "body": {
            "type": "BlockStatement",
            "start": 166,
            "end": 191,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 170,
                "end": 189,
                "expression": {
                  "type": "CallExpression",
                  "start": 170,
                  "end": 188,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 170,
                    "end": 179,
                    "object": {
                      "type": "Identifier",
                      "start": 170,
                      "end": 174,
                      "name": "logs",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 179,
                      "name": "push",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "start": 180,
                      "end": 187,
                      "argument": {
                        "type": "Identifier",
                        "start": 183,
                        "end": 187,
                        "name": "args",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "directive": null
              }
            ]
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

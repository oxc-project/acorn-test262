__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 192,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 75,
      "body": {
        "type": "TSInterfaceBody",
        "start": 18,
        "end": 75,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 22,
            "end": 73,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 26,
                "end": 39,
                "decorators": [],
                "name": "message",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 34,
                  "end": 39,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 36,
                    "end": 39
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 41,
                "end": 65,
                "argument": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 58,
                  "decorators": [],
                  "name": "optionalParams",
                  "optional": false,
                  "typeAnnotation": null
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
            "readonly": false,
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
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 17,
        "decorators": [],
        "name": "Console",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 95,
            "decorators": [],
            "name": "logs",
            "optional": false,
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
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 98,
            "end": 100,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 137,
            "decorators": [],
            "name": "originalLog",
            "optional": false,
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
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 134,
                    "end": 137,
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 139,
      "end": 192,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 139,
        "end": 191,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 139,
          "end": 150,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 139,
            "end": 146,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 147,
            "end": 150,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 153,
          "end": 191,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 166,
            "end": 191,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 170,
                "end": 189,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 170,
                  "end": 188,
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "start": 180,
                      "end": 187,
                      "argument": {
                        "type": "Identifier",
                        "start": 183,
                        "end": 187,
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 170,
                    "end": 179,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 170,
                      "end": 174,
                      "decorators": [],
                      "name": "logs",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 179,
                      "decorators": [],
                      "name": "push",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "RestElement",
              "start": 154,
              "end": 161,
              "argument": {
                "type": "Identifier",
                "start": 157,
                "end": 161,
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

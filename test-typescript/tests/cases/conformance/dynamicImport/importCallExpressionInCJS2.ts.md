0.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 62,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 61,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 29,
        "end": 61,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 44,
          "end": 61,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 46,
              "end": 59,
              "argument": {
                "type": "Literal",
                "start": 53,
                "end": 58,
                "raw": "\"foo\"",
                "value": "foo"
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 38,
          "end": 41,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 46,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 45,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 45,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 25,
          "end": 45,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 27,
              "end": 43,
              "argument": {
                "type": "Literal",
                "start": 34,
                "end": 42,
                "raw": "\"backup\"",
                "value": "backup"
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 22,
          "decorators": [],
          "name": "backup",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 201,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 176,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 46,
        "end": 176,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 52,
            "end": 74,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 56,
                "end": 73,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "decorators": [],
                  "name": "j",
                  "optional": false
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 60,
                  "end": 73,
                  "argument": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 73,
                    "decorators": [],
                    "name": "promise",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 79,
            "end": 154,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 87,
              "end": 154,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 97,
                  "end": 121,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 97,
                    "end": 120,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 98,
                      "decorators": [],
                      "name": "j",
                      "optional": false
                    },
                    "right": {
                      "type": "AwaitExpression",
                      "start": 101,
                      "end": 120,
                      "argument": {
                        "type": "ImportExpression",
                        "start": 107,
                        "end": 120,
                        "options": null,
                        "source": {
                          "type": "Literal",
                          "start": 114,
                          "end": 119,
                          "raw": "\"./1\"",
                          "value": "./1"
                        }
                      }
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 130,
                  "end": 148,
                  "argument": {
                    "type": "CallExpression",
                    "start": 137,
                    "end": 147,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 137,
                      "end": 145,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 138,
                        "decorators": [],
                        "name": "j",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 139,
                        "end": 145,
                        "decorators": [],
                        "name": "backup",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "UnaryExpression",
              "start": 83,
              "end": 85,
              "argument": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "j",
                "optional": false
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "ReturnStatement",
            "start": 159,
            "end": 174,
            "argument": {
              "type": "CallExpression",
              "start": 166,
              "end": 173,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 166,
                "end": 171,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 167,
                  "decorators": [],
                  "name": "j",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 171,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 22,
        "decorators": [],
        "name": "compute",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 23,
          "end": 44,
          "decorators": [],
          "name": "promise",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 30,
            "end": 44,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 32,
              "end": 44,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 39,
                "end": 44,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 40,
                    "end": 43
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 32,
                "end": 39,
                "decorators": [],
                "name": "Promise",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 178,
      "end": 201,
      "expression": {
        "type": "CallExpression",
        "start": 178,
        "end": 200,
        "arguments": [
          {
            "type": "ImportExpression",
            "start": 186,
            "end": 199,
            "options": null,
            "source": {
              "type": "Literal",
              "start": 193,
              "end": 198,
              "raw": "\"./0\"",
              "value": "./0"
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 178,
          "end": 185,
          "decorators": [],
          "name": "compute",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```

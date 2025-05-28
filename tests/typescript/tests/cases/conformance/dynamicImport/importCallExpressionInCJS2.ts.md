__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 39,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 39,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 22,
          "end": 39,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 24,
              "end": 37,
              "argument": {
                "type": "Literal",
                "start": 31,
                "end": 36,
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
  "end": 46,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 45,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 45,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 22,
          "decorators": [],
          "name": "backup",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
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
                "value": "backup",
                "raw": "\"backup\""
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
  "end": 201,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 176,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 22,
        "decorators": [],
        "name": "compute",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
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
              "typeName": {
                "type": "Identifier",
                "start": 32,
                "end": 39,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
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
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 46,
        "end": 176,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 52,
            "end": 74,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 56,
                "end": 73,
                "id": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "decorators": [],
                  "name": "j",
                  "optional": false,
                  "typeAnnotation": null
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
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 79,
            "end": 154,
            "test": {
              "type": "UnaryExpression",
              "start": 83,
              "end": 85,
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "AwaitExpression",
                      "start": 101,
                      "end": 120,
                      "argument": {
                        "type": "ImportExpression",
                        "start": 107,
                        "end": 120,
                        "source": {
                          "type": "Literal",
                          "start": 114,
                          "end": 119,
                          "value": "./1",
                          "raw": "\"./1\""
                        },
                        "options": null,
                        "phase": null
                      }
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 130,
                  "end": 148,
                  "argument": {
                    "type": "CallExpression",
                    "start": 137,
                    "end": 147,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 137,
                      "end": 145,
                      "object": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 138,
                        "decorators": [],
                        "name": "j",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 139,
                        "end": 145,
                        "decorators": [],
                        "name": "backup",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 159,
            "end": 174,
            "argument": {
              "type": "CallExpression",
              "start": 166,
              "end": 173,
              "callee": {
                "type": "MemberExpression",
                "start": 166,
                "end": 171,
                "object": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 167,
                  "decorators": [],
                  "name": "j",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 171,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 178,
      "end": 201,
      "expression": {
        "type": "CallExpression",
        "start": 178,
        "end": 200,
        "callee": {
          "type": "Identifier",
          "start": 178,
          "end": 185,
          "decorators": [],
          "name": "compute",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ImportExpression",
            "start": 186,
            "end": 199,
            "source": {
              "type": "Literal",
              "start": 193,
              "end": 198,
              "value": "./0",
              "raw": "\"./0\""
            },
            "options": null,
            "phase": null
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

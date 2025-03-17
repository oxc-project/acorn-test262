__ESTREE_TEST__:PASS:
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
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 29,
        "end": 61,
        "id": {
          "type": "Identifier",
          "start": 38,
          "end": 41,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
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
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
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
          "name": "backup",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
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
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
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
        "name": "compute",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "Identifier",
          "start": 23,
          "end": 44,
          "name": "promise",
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
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "name": "j",
                  "typeAnnotation": null,
                  "decorators": [],
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
                    "name": "promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
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
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "name": "j",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
                      "name": "j",
                      "typeAnnotation": null,
                      "decorators": [],
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
                        "source": {
                          "type": "Literal",
                          "start": 114,
                          "end": 119,
                          "value": "./1",
                          "raw": "\"./1\""
                        },
                        "options": null
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
                        "name": "j",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 139,
                        "end": 145,
                        "name": "backup",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
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
                  "name": "j",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 171,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "name": "compute",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
            "options": null
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

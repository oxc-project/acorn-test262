__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 19
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 31,
                "end": 36
              },
              "start": 24,
              "end": 37
            }
          ],
          "start": 22,
          "end": 39
        },
        "expression": false,
        "start": 7,
        "end": 39
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 39
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 40
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "backup",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 22
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": "backup",
                "raw": "\"backup\"",
                "start": 34,
                "end": 42
              },
              "start": 27,
              "end": 43
            }
          ],
          "start": 25,
          "end": 45
        },
        "expression": false,
        "start": 7,
        "end": 45
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 45
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 46
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "compute",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 22
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "promise",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 39
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 40,
                    "end": 43
                  }
                ],
                "start": 39,
                "end": 44
              },
              "start": 32,
              "end": 44
            },
            "start": 30,
            "end": 44
          },
          "start": 23,
          "end": 44
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "j",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 57
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 66,
                    "end": 73
                  },
                  "start": 60,
                  "end": 73
                },
                "definite": false,
                "start": 56,
                "end": 73
              }
            ],
            "declare": false,
            "start": 52,
            "end": 74
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 85
              },
              "prefix": true,
              "start": 83,
              "end": 85
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "j",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 97,
                      "end": 98
                    },
                    "right": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "ImportExpression",
                        "source": {
                          "type": "Literal",
                          "value": "./1",
                          "raw": "\"./1\"",
                          "start": 114,
                          "end": 119
                        },
                        "options": null,
                        "phase": null,
                        "start": 107,
                        "end": 120
                      },
                      "start": 101,
                      "end": 120
                    },
                    "start": 97,
                    "end": 120
                  },
                  "directive": null,
                  "start": 97,
                  "end": 121
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "j",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 137,
                        "end": 138
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "backup",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 139,
                        "end": 145
                      },
                      "optional": false,
                      "computed": false,
                      "start": 137,
                      "end": 145
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 137,
                    "end": 147
                  },
                  "start": 130,
                  "end": 148
                }
              ],
              "start": 87,
              "end": 154
            },
            "alternate": null,
            "start": 79,
            "end": 154
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "j",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 166,
                  "end": 167
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 168,
                  "end": 171
                },
                "optional": false,
                "computed": false,
                "start": 166,
                "end": 171
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 166,
              "end": 173
            },
            "start": 159,
            "end": 174
          }
        ],
        "start": 46,
        "end": 176
      },
      "expression": false,
      "start": 0,
      "end": 176
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "compute",
          "optional": false,
          "typeAnnotation": null,
          "start": 178,
          "end": 185
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./0",
              "raw": "\"./0\"",
              "start": 193,
              "end": 198
            },
            "options": null,
            "phase": null,
            "start": 186,
            "end": 199
          }
        ],
        "optional": false,
        "start": 178,
        "end": 200
      },
      "directive": null,
      "start": 178,
      "end": 201
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 201
}
```

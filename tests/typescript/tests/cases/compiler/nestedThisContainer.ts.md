__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 151,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 15,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSAnyKeyword",
        "start": 11,
        "end": 14
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 23,
          "end": 36,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 23,
            "end": 31,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 31,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 28,
                "end": 31,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 31,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 34,
            "end": 36,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 39,
      "end": 93,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 39,
        "end": 92,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 39,
          "end": 46,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 39,
            "end": 42,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 43,
            "end": 46,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 49,
          "end": 92,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 61,
            "end": 92,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 67,
                "end": 90,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 73,
                    "end": 89,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 82,
                      "decorators": [],
                      "name": "self",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 77,
                        "end": 82,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 79,
                          "end": 82,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 79,
                            "end": 82,
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    "init": {
                      "type": "ThisExpression",
                      "start": 85,
                      "end": 89
                    }
                  }
                ],
                "declare": false,
                "kind": "const"
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 95,
      "end": 151,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 95,
        "end": 150,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 95,
          "end": 102,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 95,
            "end": 98,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 99,
            "end": 102,
            "decorators": [],
            "name": "zab",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 106,
          "end": 149,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 118,
            "end": 149,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 124,
                "end": 147,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 130,
                    "end": 146,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 139,
                      "decorators": [],
                      "name": "self",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 134,
                        "end": 139,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 136,
                          "end": 139,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 136,
                            "end": 139,
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    "init": {
                      "type": "ThisExpression",
                      "start": 142,
                      "end": 146
                    }
                  }
                ],
                "declare": false,
                "kind": "const"
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
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

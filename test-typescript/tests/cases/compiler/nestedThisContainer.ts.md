__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 152,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 15,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSAnyKeyword",
        "start": 11,
        "end": 14
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 23,
            "end": 31,
            "name": "foo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 31,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 28,
                "end": 31,
                "typeName": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 31,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 34,
            "end": 36,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 39,
      "end": 93,
      "expression": {
        "type": "AssignmentExpression",
        "start": 39,
        "end": 92,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 39,
          "end": 46,
          "object": {
            "type": "Identifier",
            "start": 39,
            "end": 42,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 43,
            "end": 46,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 49,
          "end": 92,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
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
                    "id": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 82,
                      "name": "self",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 77,
                        "end": 82,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 79,
                          "end": 82,
                          "typeName": {
                            "type": "Identifier",
                            "start": 79,
                            "end": 82,
                            "name": "Foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "ThisExpression",
                      "start": 85,
                      "end": 89
                    },
                    "definite": false
                  }
                ],
                "kind": "const",
                "declare": false
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 95,
      "end": 151,
      "expression": {
        "type": "AssignmentExpression",
        "start": 95,
        "end": 150,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 95,
          "end": 102,
          "object": {
            "type": "Identifier",
            "start": 95,
            "end": 98,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 99,
            "end": 102,
            "name": "zab",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 106,
          "end": 149,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
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
                    "id": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 139,
                      "name": "self",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 134,
                        "end": 139,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 136,
                          "end": 139,
                          "typeName": {
                            "type": "Identifier",
                            "start": 136,
                            "end": 139,
                            "name": "Foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "ThisExpression",
                      "start": 142,
                      "end": 146
                    },
                    "definite": false
                  }
                ],
                "kind": "const",
                "declare": false
              }
            ]
          },
          "declare": false,
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

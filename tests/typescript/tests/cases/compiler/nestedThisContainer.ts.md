__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSAnyKeyword",
        "start": 11,
        "end": 14
      },
      "declare": false,
      "start": 0,
      "end": 15
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 28,
                  "end": 31
                },
                "typeArguments": null,
                "start": 28,
                "end": 31
              },
              "start": 26,
              "end": 31
            },
            "start": 23,
            "end": 31
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 34,
            "end": 36
          },
          "definite": false,
          "start": 23,
          "end": 36
        }
      ],
      "declare": false,
      "start": 17,
      "end": 37
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 42
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 46
          },
          "optional": false,
          "computed": false,
          "start": 39,
          "end": 46
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
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
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "self",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 79,
                            "end": 82
                          },
                          "typeArguments": null,
                          "start": 79,
                          "end": 82
                        },
                        "start": 77,
                        "end": 82
                      },
                      "start": 73,
                      "end": 82
                    },
                    "init": {
                      "type": "ThisExpression",
                      "start": 85,
                      "end": 89
                    },
                    "definite": false,
                    "start": 73,
                    "end": 89
                  }
                ],
                "declare": false,
                "start": 67,
                "end": 90
              }
            ],
            "start": 61,
            "end": 92
          },
          "expression": false,
          "start": 49,
          "end": 92
        },
        "start": 39,
        "end": 92
      },
      "directive": null,
      "start": 39,
      "end": 93
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 98
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "zab",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 102
          },
          "optional": false,
          "computed": false,
          "start": 95,
          "end": 102
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
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
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "self",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 136,
                            "end": 139
                          },
                          "typeArguments": null,
                          "start": 136,
                          "end": 139
                        },
                        "start": 134,
                        "end": 139
                      },
                      "start": 130,
                      "end": 139
                    },
                    "init": {
                      "type": "ThisExpression",
                      "start": 142,
                      "end": 146
                    },
                    "definite": false,
                    "start": 130,
                    "end": 146
                  }
                ],
                "declare": false,
                "start": 124,
                "end": 147
              }
            ],
            "start": 118,
            "end": 149
          },
          "expression": false,
          "start": 106,
          "end": 149
        },
        "start": 95,
        "end": 150
      },
      "directive": null,
      "start": 95,
      "end": 151
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 151
}
```

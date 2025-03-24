__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 230,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 48,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 20,
                "end": 48,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 30,
                    "end": 42,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 37,
                      "end": 41
                    }
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
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 111,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 69,
        "end": 111,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 75,
            "end": 109,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 78,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 78,
              "end": 109,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 81,
                "end": 109,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 91,
                    "end": 103,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 98,
                      "end": 102
                    }
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
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 67,
        "end": 68,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 112,
      "end": 172,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 130,
        "end": 172,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 136,
            "end": 170,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 139,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 139,
              "end": 170,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 142,
                "end": 170,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 152,
                    "end": 164,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 159,
                      "end": 163
                    }
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
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 119,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 128,
        "end": 129,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 173,
      "end": 182,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 181,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 181,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 178,
              "end": 181,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 180,
                "end": 181,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 181,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 183,
      "end": 211,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 187,
          "end": 210,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 187,
            "end": 188,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 191,
            "end": 210,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 191,
              "end": 208,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 191,
                "end": 204,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 191,
                  "end": 202,
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "start": 191,
                    "end": 198,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 191,
                      "end": 196,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 191,
                        "end": 192,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 193,
                        "end": 196,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 202,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 205,
                "end": 208,
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

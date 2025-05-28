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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 48,
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
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 48,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 111,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 69,
        "end": 111,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 75,
            "end": 109,
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
            "value": {
              "type": "FunctionExpression",
              "start": 78,
              "end": 109,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 112,
      "end": 172,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 130,
        "end": 172,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 136,
            "end": 170,
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
            "value": {
              "type": "FunctionExpression",
              "start": 139,
              "end": 170,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 173,
      "end": 182,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 181,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 181,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 183,
      "end": 211,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 187,
          "end": 210,
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
            "callee": {
              "type": "MemberExpression",
              "start": 191,
              "end": 208,
              "object": {
                "type": "CallExpression",
                "start": 191,
                "end": 204,
                "callee": {
                  "type": "MemberExpression",
                  "start": 191,
                  "end": 202,
                  "object": {
                    "type": "CallExpression",
                    "start": 191,
                    "end": 198,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 191,
                      "end": 196,
                      "object": {
                        "type": "Identifier",
                        "start": 191,
                        "end": 192,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 193,
                        "end": 196,
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
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 202,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 205,
                "end": 208,
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

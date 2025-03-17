__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 231,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 48,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 67,
        "end": 68,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 69,
        "end": 111,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 75,
            "end": 109,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 78,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 78,
              "end": 109,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 112,
      "end": 172,
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 119,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 128,
        "end": 129,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 130,
        "end": 172,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 136,
            "end": 170,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 139,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 139,
              "end": 170,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 181,
            "name": "c",
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
                  "name": "C",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 187,
            "end": 188,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 193,
                        "end": 196,
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
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 202,
                    "name": "bar",
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
              },
              "property": {
                "type": "Identifier",
                "start": 205,
                "end": 208,
                "name": "baz",
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

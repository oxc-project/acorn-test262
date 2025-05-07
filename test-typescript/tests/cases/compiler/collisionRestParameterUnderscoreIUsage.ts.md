__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 214,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 49,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 49,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 49,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 21,
                "end": 49,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 23,
                    "end": 47,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 23,
                      "end": 26,
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 27,
                        "end": 39,
                        "decorators": [],
                        "name": "msg",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 31,
                          "end": 39,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 33,
                            "end": 39
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 40,
                      "end": 46,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 42,
                        "end": 46
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 51,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 92,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 57,
            "decorators": [],
            "name": "_i",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 60,
            "end": 92,
            "raw": "\"This is what I'd expect to see\"",
            "value": "This is what I'd expect to see",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 94,
      "end": 203,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 104,
        "end": 203,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 110,
            "end": 201,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 110,
              "end": 121,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 121,
              "end": 201,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 138,
                "end": 201,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 148,
                    "end": 164,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 148,
                      "end": 163,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 160,
                          "end": 162,
                          "decorators": [],
                          "name": "_i",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 148,
                        "end": 159,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 148,
                          "end": 155,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 156,
                          "end": 159,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 122,
                  "end": 136,
                  "argument": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 129,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 129,
                    "end": 136,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 131,
                      "end": 136,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 131,
                        "end": 134
                      }
                    }
                  },
                  "value": null
                }
              ],
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
        "start": 100,
        "end": 103,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 204,
      "end": 214,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 204,
        "end": 213,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 208,
          "end": 211,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

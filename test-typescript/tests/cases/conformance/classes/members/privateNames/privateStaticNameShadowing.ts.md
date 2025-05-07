__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 312,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 309,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 309,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 33,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 21,
              "end": 23,
              "name": "f"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 26,
              "end": 32,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 26,
                "end": 30,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "PrivateIdentifier",
                  "start": 28,
                  "end": 30,
                  "name": "m"
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 38,
            "end": 73,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 49,
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
              "start": 49,
              "end": 73,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 73,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 60,
                    "end": 67,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 60,
                      "end": 66,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 60,
                        "end": 64,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 60,
                          "end": 61,
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 62,
                          "end": 64,
                          "name": "m"
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
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 78,
            "end": 305,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 85,
              "end": 87,
              "name": "m"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 87,
              "end": 305,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 90,
                "end": 305,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 98,
                    "end": 116,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 104,
                        "end": 115,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 104,
                          "end": 110,
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 105,
                            "end": 110,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 107,
                              "end": 110
                            }
                          }
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 113,
                          "end": 115,
                          "properties": []
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 143,
                    "end": 162,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 149,
                        "end": 161,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 149,
                          "end": 156,
                          "decorators": [],
                          "name": "_a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 151,
                            "end": 156,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 153,
                              "end": 156
                            }
                          }
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 159,
                          "end": 161,
                          "properties": []
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 203,
                    "end": 210,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 203,
                      "end": 209,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 203,
                        "end": 207,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 203,
                          "end": 204,
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 205,
                          "end": 207,
                          "name": "m"
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 290,
                    "end": 299,
                    "argument": {
                      "type": "Literal",
                      "start": 297,
                      "end": 298,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
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
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

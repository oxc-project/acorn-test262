__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 296,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 1,
      "end": 16,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "name": "Based",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 16,
        "body": []
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
      "start": 17,
      "end": 296,
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 30,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 39,
        "end": 44,
        "name": "Based",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 296,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 51,
            "end": 68,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 67,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 61,
                "end": 67
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 73,
            "end": 294,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 84,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 84,
              "end": 294,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 294,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 97,
                    "end": 225,
                    "id": {
                      "type": "Identifier",
                      "start": 103,
                      "end": 109,
                      "name": "innver",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 110,
                      "end": 225,
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "start": 124,
                          "end": 142,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 131,
                            "end": 132,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": null,
                          "decorators": [],
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 132,
                            "end": 141,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 134,
                              "end": 141
                            }
                          },
                          "accessibility": "public"
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 155,
                          "end": 215,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 155,
                            "end": 166,
                            "name": "constructor",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "constructor",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 166,
                            "end": 215,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
                            "body": {
                              "type": "BlockStatement",
                              "start": 169,
                              "end": 215,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 187,
                                  "end": 201,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 187,
                                    "end": 200,
                                    "operator": "=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 187,
                                      "end": 193,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 187,
                                        "end": 191
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 192,
                                        "end": 193,
                                        "name": "y",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "start": 196,
                                      "end": 200,
                                      "value": true,
                                      "raw": "true"
                                    }
                                  },
                                  "directive": null
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
                    "type": "ExpressionStatement",
                    "start": 234,
                    "end": 242,
                    "expression": {
                      "type": "CallExpression",
                      "start": 234,
                      "end": 241,
                      "callee": {
                        "type": "Super",
                        "start": 234,
                        "end": 239
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 251,
                    "end": 263,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 251,
                      "end": 262,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 251,
                        "end": 257,
                        "object": {
                          "type": "ThisExpression",
                          "start": 251,
                          "end": 255
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 256,
                          "end": 257,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 260,
                        "end": 262,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 272,
                    "end": 288,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 276,
                        "end": 287,
                        "id": {
                          "type": "Identifier",
                          "start": 276,
                          "end": 280,
                          "name": "that",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 283,
                          "end": 287
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

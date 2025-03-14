__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 190,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 10,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 10,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "EmptyStatement",
      "start": 10,
      "end": 11
    },
    {
      "type": "ClassDeclaration",
      "start": 13,
      "end": 158,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 158,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 27,
            "end": 30,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 27,
              "end": 29,
              "name": "x"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 35,
            "end": 156,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 38,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 39,
              "end": 156,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 42,
                "end": 156,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 52,
                    "end": 70,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 58,
                        "end": 69,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 58,
                          "end": 59,
                          "decorators": [],
                          "name": "c",
                          "optional": false
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 62,
                          "end": 69,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 66,
                            "end": 67,
                            "decorators": [],
                            "name": "C",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 79,
                    "end": 84,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 79,
                      "end": 83,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 79,
                        "end": 80,
                        "decorators": [],
                        "name": "c",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 81,
                        "end": 83,
                        "name": "x"
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 103,
                    "end": 124,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 109,
                        "end": 123,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 109,
                          "end": 113,
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 110,
                            "end": 113,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 112,
                              "end": 113,
                              "typeName": {
                                "type": "Identifier",
                                "start": 112,
                                "end": 113,
                                "decorators": [],
                                "name": "D",
                                "optional": false
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 116,
                          "end": 123,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 120,
                            "end": 121,
                            "decorators": [],
                            "name": "C",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 133,
                    "end": 138,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 133,
                      "end": 137,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 133,
                        "end": 134,
                        "decorators": [],
                        "name": "d",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 135,
                        "end": 137,
                        "name": "x"
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 159,
      "end": 189,
      "body": {
        "type": "TSInterfaceBody",
        "start": 171,
        "end": 189,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 177,
            "end": 187,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 183,
              "end": 186,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 185,
                "end": 186,
                "typeName": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 186,
                  "decorators": [],
                  "name": "D",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 170,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

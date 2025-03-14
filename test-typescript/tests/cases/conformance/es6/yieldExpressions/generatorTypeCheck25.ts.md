__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 223,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 23,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 23,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 21,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 21,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 15,
                "end": 21
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 24,
      "end": 59,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 46,
        "end": 59,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 48,
            "end": 57,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 57,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 51,
                "end": 57
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 33,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 42,
        "end": 45,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 60,
      "end": 83,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 70,
        "end": 83,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 72,
            "end": 81,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 81,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 75,
                "end": 81
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 69,
        "decorators": [],
        "name": "Baz",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 84,
      "end": 223,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 223,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 111,
            "decorators": [],
            "name": "g3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 111,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 92,
                "end": 111,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 95,
                  "end": 111,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 98,
                    "end": 111,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 106,
                      "end": 111,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 107,
                          "end": 110,
                          "typeName": {
                            "type": "Identifier",
                            "start": 107,
                            "end": 110,
                            "decorators": [],
                            "name": "Foo",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 106,
                      "decorators": [],
                      "name": "Iterable",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 114,
            "end": 223,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 127,
              "end": 223,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 133,
                  "end": 139,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 133,
                    "end": 138,
                    "argument": null,
                    "delegate": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 144,
                  "end": 158,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 144,
                    "end": 157,
                    "argument": {
                      "type": "NewExpression",
                      "start": 150,
                      "end": 157,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 154,
                        "end": 157,
                        "decorators": [],
                        "name": "Bar",
                        "optional": false
                      }
                    },
                    "delegate": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 163,
                  "end": 177,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 163,
                    "end": 176,
                    "argument": {
                      "type": "NewExpression",
                      "start": 169,
                      "end": 176,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 173,
                        "end": 176,
                        "decorators": [],
                        "name": "Baz",
                        "optional": false
                      }
                    },
                    "delegate": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 182,
                  "end": 199,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 182,
                    "end": 198,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 189,
                      "end": 198,
                      "elements": [
                        {
                          "type": "NewExpression",
                          "start": 190,
                          "end": 197,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 194,
                            "end": 197,
                            "decorators": [],
                            "name": "Bar",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "delegate": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 204,
                  "end": 221,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 204,
                    "end": 220,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 211,
                      "end": 220,
                      "elements": [
                        {
                          "type": "NewExpression",
                          "start": 212,
                          "end": 219,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 216,
                            "end": 219,
                            "decorators": [],
                            "name": "Baz",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "delegate": true
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": []
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

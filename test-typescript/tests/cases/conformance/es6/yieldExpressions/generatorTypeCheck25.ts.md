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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 23,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 21,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
              "start": 13,
              "end": 21,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 15,
                "end": 21
              }
            },
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
      "start": 24,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 33,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 42,
        "end": 45,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 46,
        "end": 59,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 48,
            "end": 57,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
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
              "start": 49,
              "end": 57,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 51,
                "end": 57
              }
            },
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
      "start": 60,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 69,
        "name": "Baz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 70,
        "end": 83,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 72,
            "end": 81,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "name": "z",
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
              "start": 73,
              "end": 81,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 75,
                "end": 81
              }
            },
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
      "start": 84,
      "end": 223,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 223,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 111,
            "name": "g3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 111,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 92,
                "end": 111,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 95,
                  "end": 111,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 98,
                    "end": 111,
                    "typeName": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 106,
                      "name": "Iterable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "name": "Foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 114,
            "end": 223,
            "id": null,
            "expression": false,
            "generator": true,
            "async": false,
            "params": [],
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
                    "delegate": false,
                    "argument": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 144,
                  "end": 158,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 144,
                    "end": 157,
                    "delegate": false,
                    "argument": {
                      "type": "NewExpression",
                      "start": 150,
                      "end": 157,
                      "callee": {
                        "type": "Identifier",
                        "start": 154,
                        "end": 157,
                        "name": "Bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 163,
                  "end": 177,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 163,
                    "end": 176,
                    "delegate": false,
                    "argument": {
                      "type": "NewExpression",
                      "start": 169,
                      "end": 176,
                      "callee": {
                        "type": "Identifier",
                        "start": 173,
                        "end": 176,
                        "name": "Baz",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 182,
                  "end": 199,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 182,
                    "end": 198,
                    "delegate": true,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 189,
                      "end": 198,
                      "elements": [
                        {
                          "type": "NewExpression",
                          "start": 190,
                          "end": 197,
                          "callee": {
                            "type": "Identifier",
                            "start": 194,
                            "end": 197,
                            "name": "Bar",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 204,
                  "end": 221,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 204,
                    "end": 220,
                    "delegate": true,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 211,
                      "end": 220,
                      "elements": [
                        {
                          "type": "NewExpression",
                          "start": 212,
                          "end": 219,
                          "callee": {
                            "type": "Identifier",
                            "start": 216,
                            "end": 219,
                            "name": "Baz",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "typeArguments": null
                        }
                      ]
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

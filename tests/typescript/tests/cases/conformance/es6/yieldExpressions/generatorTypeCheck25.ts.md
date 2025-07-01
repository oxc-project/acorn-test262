__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 13
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 15,
                "end": 21
              },
              "start": 13,
              "end": 21
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 12,
            "end": 21
          }
        ],
        "start": 10,
        "end": 23
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 23
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 30,
        "end": 33
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 45
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 49
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 51,
                "end": 57
              },
              "start": 49,
              "end": 57
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 48,
            "end": 57
          }
        ],
        "start": 46,
        "end": 59
      },
      "abstract": false,
      "declare": false,
      "start": 24,
      "end": 59
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 69
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 73
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 75,
                "end": 81
              },
              "start": 73,
              "end": 81
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 72,
            "end": 81
          }
        ],
        "start": 70,
        "end": 83
      },
      "abstract": false,
      "declare": false,
      "start": 60,
      "end": 83
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Iterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 98,
                      "end": 106
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 107,
                            "end": 110
                          },
                          "typeArguments": null,
                          "start": 107,
                          "end": 110
                        }
                      ],
                      "start": 106,
                      "end": 111
                    },
                    "start": 98,
                    "end": 111
                  },
                  "start": 95,
                  "end": 111
                },
                "start": 92,
                "end": 111
              },
              "start": 90,
              "end": 111
            },
            "start": 88,
            "end": 111
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "delegate": false,
                    "argument": null,
                    "start": 133,
                    "end": 138
                  },
                  "directive": null,
                  "start": 133,
                  "end": 139
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "delegate": false,
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 154,
                        "end": 157
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 150,
                      "end": 157
                    },
                    "start": 144,
                    "end": 157
                  },
                  "directive": null,
                  "start": 144,
                  "end": 158
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "delegate": false,
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Baz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 173,
                        "end": 176
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 169,
                      "end": 176
                    },
                    "start": 163,
                    "end": 176
                  },
                  "directive": null,
                  "start": 163,
                  "end": 177
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "delegate": true,
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 194,
                            "end": 197
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 190,
                          "end": 197
                        }
                      ],
                      "start": 189,
                      "end": 198
                    },
                    "start": 182,
                    "end": 198
                  },
                  "directive": null,
                  "start": 182,
                  "end": 199
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "delegate": true,
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Baz",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 216,
                            "end": 219
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 212,
                          "end": 219
                        }
                      ],
                      "start": 211,
                      "end": 220
                    },
                    "start": 204,
                    "end": 220
                  },
                  "directive": null,
                  "start": 204,
                  "end": 221
                }
              ],
              "start": 127,
              "end": 223
            },
            "expression": false,
            "start": 114,
            "end": 223
          },
          "definite": false,
          "start": 88,
          "end": 223
        }
      ],
      "declare": false,
      "start": 84,
      "end": 223
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 223
}
```

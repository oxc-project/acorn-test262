__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 184,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 79,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 79,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 27,
            "end": 77,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 34,
              "end": 77,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 75,
                "end": 77,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 35,
                  "end": 70,
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 41,
                    "end": 70,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 43,
                      "end": 70,
                      "abstract": false,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 48,
                          "end": 62,
                          "argument": {
                            "type": "Identifier",
                            "start": 51,
                            "end": 55,
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 55,
                            "end": 62,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 57,
                              "end": 62,
                              "elementType": {
                                "type": "TSAnyKeyword",
                                "start": 57,
                                "end": 60
                              }
                            }
                          },
                          "value": null
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 64,
                        "end": 70,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 67,
                          "end": 70
                        }
                      },
                      "typeParameters": null
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 18,
        "decorators": [],
        "name": "decorator",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 81,
      "end": 171,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 104,
        "end": 171,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 110,
            "end": 169,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 128,
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 128,
              "end": 169,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 136,
                "end": 169,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 146,
                    "end": 163,
                    "argument": {
                      "type": "NewExpression",
                      "start": 153,
                      "end": 162,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 157,
                        "end": 160,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 130,
                "end": 135,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 132,
                  "end": 135,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 135,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 81,
          "end": 93,
          "expression": {
            "type": "CallExpression",
            "start": 82,
            "end": 93,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 82,
              "end": 91,
              "decorators": [],
              "name": "decorator",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
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
      "start": 172,
      "end": 183,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 172,
        "end": 182,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 172,
          "end": 180,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 172,
            "end": 175,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 176,
            "end": 180,
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

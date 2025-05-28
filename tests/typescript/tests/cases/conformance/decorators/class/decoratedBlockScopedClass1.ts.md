__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 183,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 79,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 18,
        "decorators": [],
        "name": "decorator",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
              "expression": false,
              "async": false,
              "typeParameters": null,
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
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 48,
                          "end": 62,
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "start": 51,
                            "end": 55,
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null
                          },
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
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 75,
                "end": 77,
                "body": []
              },
              "id": null,
              "generator": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 81,
      "end": 171,
      "decorators": [
        {
          "type": "Decorator",
          "start": 81,
          "end": 93,
          "expression": {
            "type": "CallExpression",
            "start": 82,
            "end": 93,
            "callee": {
              "type": "Identifier",
              "start": 82,
              "end": 91,
              "decorators": [],
              "name": "decorator",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 104,
        "end": 171,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 110,
            "end": 169,
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
            "value": {
              "type": "FunctionExpression",
              "start": 128,
              "end": 169,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 130,
                "end": 135,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 132,
                  "end": 135,
                  "typeName": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 135,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
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
                      "callee": {
                        "type": "Identifier",
                        "start": 157,
                        "end": 160,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": []
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 172,
      "end": 183,
      "expression": {
        "type": "CallExpression",
        "start": 172,
        "end": 182,
        "callee": {
          "type": "MemberExpression",
          "start": 172,
          "end": 180,
          "object": {
            "type": "Identifier",
            "start": 172,
            "end": 175,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 176,
            "end": 180,
            "decorators": [],
            "name": "func",
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
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

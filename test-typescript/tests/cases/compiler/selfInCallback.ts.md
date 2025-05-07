__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 119,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 119,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 119,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 11,
            "end": 25,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 20,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 23,
              "end": 24,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 27,
            "end": 63,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 42,
              "decorators": [],
              "name": "callback",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 63,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 56,
                "end": 63,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 57,
                    "end": 62,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 57,
                      "end": 61,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 57,
                        "end": 59,
                        "decorators": [],
                        "name": "cb",
                        "optional": false,
                        "typeAnnotation": null
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
                  "type": "Identifier",
                  "start": 43,
                  "end": 54,
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 45,
                    "end": 54,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 46,
                      "end": 54,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 48,
                        "end": 54,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 50,
                          "end": 54
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
          },
          {
            "type": "MethodDefinition",
            "start": 65,
            "end": 117,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 76,
              "decorators": [],
              "name": "doit",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 76,
              "end": 117,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 79,
                "end": 117,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 83,
                    "end": 114,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 83,
                      "end": 113,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 97,
                          "end": 112,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 101,
                            "end": 112,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 102,
                                "end": 111,
                                "directive": null,
                                "expression": {
                                  "type": "BinaryExpression",
                                  "start": 102,
                                  "end": 111,
                                  "operator": "+",
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 102,
                                    "end": 109,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 102,
                                      "end": 106
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 107,
                                      "end": 109,
                                      "decorators": [],
                                      "name": "p1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "start": 110,
                                    "end": 111,
                                    "raw": "1",
                                    "value": 1,
                                    "regex": null,
                                    "bigint": null
                                  }
                                }
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "returnType": null,
                          "typeParameters": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 83,
                        "end": 96,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 83,
                          "end": 87
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 96,
                          "decorators": [],
                          "name": "callback",
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
        "name": "C",
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

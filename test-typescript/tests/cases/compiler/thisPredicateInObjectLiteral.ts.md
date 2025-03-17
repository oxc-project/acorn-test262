__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 201,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 101,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 100,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 26,
            "name": "foo2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 29,
            "end": 100,
            "properties": [
              {
                "type": "Property",
                "start": 35,
                "end": 97,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 43,
                  "name": "isNumber",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 43,
                  "end": 97,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 69,
                    "end": 97,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 79,
                        "end": 91,
                        "argument": {
                          "type": "Literal",
                          "start": 86,
                          "end": 90,
                          "value": true,
                          "raw": "true"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 45,
                    "end": 68,
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "start": 47,
                      "end": 68,
                      "parameterName": {
                        "type": "TSThisType",
                        "start": 47,
                        "end": 51
                      },
                      "asserts": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 55,
                        "end": 68,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 55,
                          "end": 68,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 57,
                              "end": 66,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 57,
                                "end": 58,
                                "name": "b",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 58,
                                "end": 66,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 60,
                                  "end": 66
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      }
                    }
                  }
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 121,
      "end": 200,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 199,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 131,
            "name": "foo3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 134,
            "end": 199,
            "properties": [
              {
                "type": "Property",
                "start": 140,
                "end": 196,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 148,
                  "name": "isNumber",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 148,
                  "end": 196,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 149,
                      "end": 155,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 150,
                        "end": 155,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 152,
                          "end": 155
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 168,
                    "end": 196,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 178,
                        "end": 190,
                        "argument": {
                          "type": "Literal",
                          "start": 185,
                          "end": 189,
                          "value": true,
                          "raw": "true"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 156,
                    "end": 167,
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "start": 158,
                      "end": 167,
                      "parameterName": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 159,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "asserts": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 163,
                        "end": 167,
                        "typeAnnotation": {
                          "type": "TSThisType",
                          "start": 163,
                          "end": 167
                        }
                      }
                    }
                  }
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

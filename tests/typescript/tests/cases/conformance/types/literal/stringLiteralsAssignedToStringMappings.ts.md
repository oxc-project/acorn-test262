__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 174,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 44,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 43,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 43,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 43,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 15,
                "end": 43,
                "typeName": {
                  "type": "Identifier",
                  "start": 15,
                  "end": 24,
                  "decorators": [],
                  "name": "Uppercase",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 24,
                  "end": 43,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 25,
                      "end": 42,
                      "typeName": {
                        "type": "Identifier",
                        "start": 25,
                        "end": 34,
                        "decorators": [],
                        "name": "Lowercase",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 34,
                        "end": 42,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 35,
                            "end": 41
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 62,
      "expression": {
        "type": "AssignmentExpression",
        "start": 54,
        "end": 61,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 54,
          "end": 55,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 58,
          "end": 61,
          "value": "A",
          "raw": "\"A\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 71,
      "end": 79,
      "expression": {
        "type": "AssignmentExpression",
        "start": 71,
        "end": 78,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 71,
          "end": 72,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 75,
          "end": 78,
          "value": "a",
          "raw": "\"a\""
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 81,
      "end": 130,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 129,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 129,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 129,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 96,
                "end": 129,
                "typeName": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 105,
                  "decorators": [],
                  "name": "Uppercase",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 105,
                  "end": 129,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 106,
                      "end": 128,
                      "typeName": {
                        "type": "Identifier",
                        "start": 106,
                        "end": 115,
                        "decorators": [],
                        "name": "Lowercase",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 115,
                        "end": 128,
                        "params": [
                          {
                            "type": "TSTemplateLiteralType",
                            "start": 116,
                            "end": 127,
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "start": 116,
                                "end": 119,
                                "value": {
                                  "cooked": "",
                                  "raw": ""
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "start": 125,
                                "end": 127,
                                "value": {
                                  "cooked": "",
                                  "raw": ""
                                },
                                "tail": true
                              }
                            ],
                            "types": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 119,
                                "end": 125
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 140,
      "end": 148,
      "expression": {
        "type": "AssignmentExpression",
        "start": 140,
        "end": 147,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 140,
          "end": 141,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 144,
          "end": 147,
          "value": "1",
          "raw": "\"1\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 157,
      "end": 165,
      "expression": {
        "type": "AssignmentExpression",
        "start": 157,
        "end": 164,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 157,
          "end": 158,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 161,
          "end": 164,
          "value": "a",
          "raw": "\"a\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 166,
      "end": 174,
      "expression": {
        "type": "AssignmentExpression",
        "start": 166,
        "end": 173,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 166,
          "end": 167,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 170,
          "end": 173,
          "value": "A",
          "raw": "\"A\""
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

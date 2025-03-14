__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 106,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 66,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 66,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 66,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 7,
                "end": 66,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 7,
                    "end": 35,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 9,
                        "end": 33,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 9,
                          "end": 10,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 10,
                          "end": 33,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 12,
                            "end": 33,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 13,
                                "end": 22,
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 14,
                                  "end": 22,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 16,
                                    "end": 22
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 24,
                              "end": 33,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 27,
                                "end": 33
                              }
                            }
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 38,
                    "end": 66,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 40,
                        "end": 64,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 40,
                          "end": 41,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 41,
                          "end": 64,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 43,
                            "end": 64,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 44,
                                "end": 53,
                                "decorators": [],
                                "name": "n",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 45,
                                  "end": 53,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 47,
                                    "end": 53
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 55,
                              "end": 64,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 58,
                                "end": 64
                              }
                            }
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 68,
      "end": 105,
      "expression": {
        "type": "AssignmentExpression",
        "start": 68,
        "end": 104,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 68,
          "end": 69,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 72,
          "end": 104,
          "properties": [
            {
              "type": "Property",
              "start": 78,
              "end": 87,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 81,
                "end": 87,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 87,
                  "decorators": [],
                  "name": "s",
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 81,
                    "end": 82,
                    "decorators": [],
                    "name": "s",
                    "optional": false
                  }
                ]
              }
            },
            {
              "type": "Property",
              "start": 93,
              "end": 102,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 93,
                "end": 94,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 96,
                "end": 102,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 102,
                  "decorators": [],
                  "name": "n",
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 96,
                    "end": 97,
                    "decorators": [],
                    "name": "n",
                    "optional": false
                  }
                ]
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

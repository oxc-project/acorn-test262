__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 105,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 67,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 66,
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 9,
                          "end": 10,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 10,
                          "end": 33,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 12,
                            "end": 33,
                            "typeParameters": null,
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
                        },
                        "accessibility": null,
                        "static": false
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 40,
                          "end": 41,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 41,
                          "end": 64,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 43,
                            "end": 64,
                            "typeParameters": null,
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
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
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
          "optional": false,
          "typeAnnotation": null
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
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 81,
                "end": 87,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 81,
                    "end": 82,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 87,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 93,
              "end": 102,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 93,
                "end": 94,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 96,
                "end": 102,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 96,
                    "end": 97,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 102,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

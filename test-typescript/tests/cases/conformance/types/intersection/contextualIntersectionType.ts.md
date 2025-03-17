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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 66,
            "name": "x",
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
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                                "name": "s",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 14,
                                  "end": 22,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 16,
                                    "end": 22
                                  }
                                },
                                "decorators": [],
                                "optional": false
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
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                                "name": "n",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 45,
                                  "end": 53,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 47,
                                    "end": 53
                                  }
                                },
                                "decorators": [],
                                "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
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
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 81,
                "end": 87,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 81,
                    "end": 82,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 87,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 93,
              "end": 102,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 93,
                "end": 94,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 96,
                "end": 102,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 96,
                    "end": 97,
                    "name": "n",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 102,
                  "name": "n",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              "kind": "init",
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

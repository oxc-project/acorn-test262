__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 163,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 87,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 87,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 41,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 41,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 10,
                "end": 41,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 12,
                    "end": 24,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 12,
                      "end": 15,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 15,
                      "end": 23,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 17,
                        "end": 23
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 25,
                    "end": 39,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 25,
                      "end": 28,
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 28,
                      "end": 39,
                      "typeAnnotation": {
                        "type": "TSUndefinedKeyword",
                        "start": 30,
                        "end": 39
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 44,
            "end": 87,
            "properties": [
              {
                "type": "Property",
                "start": 46,
                "end": 52,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 49,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 51,
                  "end": 52,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "SpreadElement",
                "start": 54,
                "end": 85,
                "argument": {
                  "type": "ObjectExpression",
                  "start": 58,
                  "end": 85,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 60,
                      "end": 83,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 64,
                        "end": 67,
                        "decorators": [],
                        "name": "bar",
                        "optional": false
                      },
                      "kind": "set",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 67,
                        "end": 83,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 80,
                          "end": 83,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 68,
                            "end": 78,
                            "decorators": [],
                            "name": "_v",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 70,
                              "end": 78,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 72,
                                "end": 78
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 88,
      "end": 162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 162,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 116,
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 116,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 98,
                "end": 116,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 100,
                    "end": 114,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 100,
                      "end": 103,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 103,
                      "end": 114,
                      "typeAnnotation": {
                        "type": "TSUndefinedKeyword",
                        "start": 105,
                        "end": 114
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 119,
            "end": 162,
            "properties": [
              {
                "type": "Property",
                "start": 121,
                "end": 127,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 124,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 126,
                  "end": 127,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "SpreadElement",
                "start": 129,
                "end": 160,
                "argument": {
                  "type": "ObjectExpression",
                  "start": 133,
                  "end": 160,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 135,
                      "end": 158,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 139,
                        "end": 142,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      },
                      "kind": "set",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 142,
                        "end": 158,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 155,
                          "end": 158,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 143,
                            "end": 153,
                            "decorators": [],
                            "name": "_v",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 145,
                              "end": 153,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 147,
                                "end": 153
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

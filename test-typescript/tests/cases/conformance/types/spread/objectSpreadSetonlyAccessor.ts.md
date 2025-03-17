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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 41,
            "name": "o1",
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 12,
                      "end": 15,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 15,
                      "end": 23,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 17,
                        "end": 23
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 25,
                    "end": 39,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 25,
                      "end": 28,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 28,
                      "end": 39,
                      "typeAnnotation": {
                        "type": "TSUndefinedKeyword",
                        "start": 30,
                        "end": 39
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 49,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 51,
                  "end": 52,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 64,
                        "end": 67,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 67,
                        "end": 83,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 68,
                            "end": 78,
                            "name": "_v",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 70,
                              "end": 78,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 72,
                                "end": 78
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BlockStatement",
                          "start": 80,
                          "end": 83,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "set",
                      "optional": false
                    }
                  ]
                }
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
      "start": 88,
      "end": 162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 162,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 116,
            "name": "o2",
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 100,
                      "end": 103,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 103,
                      "end": 114,
                      "typeAnnotation": {
                        "type": "TSUndefinedKeyword",
                        "start": 105,
                        "end": 114
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 124,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 126,
                  "end": 127,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 139,
                        "end": 142,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 142,
                        "end": 158,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 143,
                            "end": 153,
                            "name": "_v",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 145,
                              "end": 153,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 147,
                                "end": 153
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BlockStatement",
                          "start": 155,
                          "end": 158,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "set",
                      "optional": false
                    }
                  ]
                }
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

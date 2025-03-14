__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 72,
  "end": 321,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 72,
      "end": 320,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 113,
        "end": 320,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 119,
            "end": 318,
            "argument": {
              "type": "ObjectExpression",
              "start": 126,
              "end": 318,
              "properties": [
                {
                  "type": "Property",
                  "start": 136,
                  "end": 177,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "kind": "get",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 141,
                    "end": 177,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 144,
                      "end": 177,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 158,
                          "end": 167,
                          "argument": {
                            "type": "Identifier",
                            "start": 165,
                            "end": 166,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                },
                {
                  "type": "Property",
                  "start": 187,
                  "end": 228,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 192,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "kind": "get",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 192,
                    "end": 228,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 195,
                      "end": 228,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 209,
                          "end": 218,
                          "argument": {
                            "type": "Identifier",
                            "start": 216,
                            "end": 217,
                            "decorators": [],
                            "name": "y",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                },
                {
                  "type": "Property",
                  "start": 238,
                  "end": 312,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 238,
                    "end": 242,
                    "decorators": [],
                    "name": "dist",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 244,
                    "end": 312,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 256,
                      "end": 312,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 270,
                          "end": 302,
                          "argument": {
                            "type": "CallExpression",
                            "start": 277,
                            "end": 301,
                            "arguments": [
                              {
                                "type": "BinaryExpression",
                                "start": 287,
                                "end": 300,
                                "operator": "+",
                                "left": {
                                  "type": "BinaryExpression",
                                  "start": 287,
                                  "end": 292,
                                  "operator": "*",
                                  "left": {
                                    "type": "Identifier",
                                    "start": 287,
                                    "end": 288,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 291,
                                    "end": 292,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false
                                  }
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "start": 295,
                                  "end": 300,
                                  "operator": "*",
                                  "left": {
                                    "type": "Identifier",
                                    "start": 295,
                                    "end": 296,
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 299,
                                    "end": 300,
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 277,
                              "end": 286,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 277,
                                "end": 281,
                                "decorators": [],
                                "name": "Math",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 282,
                                "end": 286,
                                "decorators": [],
                                "name": "sqrt",
                                "optional": false
                              }
                            },
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 90,
        "decorators": [],
        "name": "makePoint",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 91,
          "end": 100,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 92,
            "end": 100,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 94,
              "end": 100
            }
          }
        },
        {
          "type": "Identifier",
          "start": 102,
          "end": 111,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 103,
            "end": 111,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 105,
              "end": 111
            }
          }
        }
      ]
    },
    {
      "type": "EmptyStatement",
      "start": 320,
      "end": 321
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

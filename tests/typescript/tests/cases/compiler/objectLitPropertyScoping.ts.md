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
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 90,
        "decorators": [],
        "name": "makePoint",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      ],
      "returnType": null,
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
                  "kind": "get",
                  "key": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 141,
                    "end": 177,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 187,
                  "end": 228,
                  "kind": "get",
                  "key": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 192,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 192,
                    "end": 228,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 238,
                  "end": 312,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 238,
                    "end": 242,
                    "decorators": [],
                    "name": "dist",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 244,
                    "end": 312,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                            "callee": {
                              "type": "MemberExpression",
                              "start": 277,
                              "end": 286,
                              "object": {
                                "type": "Identifier",
                                "start": 277,
                                "end": 281,
                                "decorators": [],
                                "name": "Math",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 282,
                                "end": 286,
                                "decorators": [],
                                "name": "sqrt",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "BinaryExpression",
                                "start": 287,
                                "end": 300,
                                "left": {
                                  "type": "BinaryExpression",
                                  "start": 287,
                                  "end": 292,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 287,
                                    "end": 288,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "operator": "*",
                                  "right": {
                                    "type": "Identifier",
                                    "start": 291,
                                    "end": 292,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "operator": "+",
                                "right": {
                                  "type": "BinaryExpression",
                                  "start": 295,
                                  "end": 300,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 295,
                                    "end": 296,
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "operator": "*",
                                  "right": {
                                    "type": "Identifier",
                                    "start": 299,
                                    "end": 300,
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            ],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
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

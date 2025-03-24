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
        "name": "makePoint",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 91,
          "end": 100,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 92,
            "end": 100,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 94,
              "end": 100
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 102,
          "end": 111,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 103,
            "end": 111,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 105,
              "end": 111
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 141,
                    "end": 177,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "get",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 187,
                  "end": 228,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 192,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 192,
                    "end": 228,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "get",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 238,
                  "end": 312,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 238,
                    "end": 242,
                    "name": "dist",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 244,
                    "end": 312,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                                "name": "Math",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 282,
                                "end": 286,
                                "name": "sqrt",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
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
                                    "name": "x",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "operator": "*",
                                  "right": {
                                    "type": "Identifier",
                                    "start": 291,
                                    "end": 292,
                                    "name": "x",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
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
                                    "name": "y",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "operator": "*",
                                  "right": {
                                    "type": "Identifier",
                                    "start": 299,
                                    "end": 300,
                                    "name": "y",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                }
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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

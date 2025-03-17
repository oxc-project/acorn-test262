__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 250,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 209,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 208,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 63,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 66,
            "end": 208,
            "properties": [
              {
                "type": "Property",
                "start": 72,
                "end": 206,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 73,
                  "end": 93,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 79,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 93,
                    "decorators": [],
                    "name": "asyncIterator",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 94,
                  "end": 206,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 97,
                    "end": 206,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 107,
                        "end": 200,
                        "argument": {
                          "type": "ObjectExpression",
                          "start": 114,
                          "end": 199,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 128,
                              "end": 189,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 128,
                                "end": 132,
                                "decorators": [],
                                "name": "next",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": true,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "FunctionExpression",
                                "start": 132,
                                "end": 189,
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 135,
                                  "end": 189,
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "start": 153,
                                      "end": 175,
                                      "argument": {
                                        "type": "ObjectExpression",
                                        "start": 160,
                                        "end": 174,
                                        "properties": [
                                          {
                                            "type": "Property",
                                            "start": 162,
                                            "end": 172,
                                            "computed": false,
                                            "key": {
                                              "type": "Identifier",
                                              "start": 162,
                                              "end": 166,
                                              "decorators": [],
                                              "name": "then",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "kind": "init",
                                            "method": true,
                                            "optional": false,
                                            "shorthand": false,
                                            "value": {
                                              "type": "FunctionExpression",
                                              "start": 166,
                                              "end": 172,
                                              "async": false,
                                              "body": {
                                                "type": "BlockStatement",
                                                "start": 169,
                                                "end": 172,
                                                "body": []
                                              },
                                              "declare": false,
                                              "expression": false,
                                              "generator": false,
                                              "id": null,
                                              "params": [],
                                              "returnType": null,
                                              "typeParameters": null
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
                                "id": null,
                                "params": [],
                                "returnType": null,
                                "typeParameters": null
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
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 211,
      "end": 250,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 231,
        "end": 250,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 237,
            "end": 248,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 237,
              "end": 247,
              "argument": {
                "type": "Identifier",
                "start": 244,
                "end": 247,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "delegate": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 227,
        "end": 228,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

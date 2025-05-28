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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 208,
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
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 73,
                  "end": 93,
                  "object": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 79,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 93,
                    "decorators": [],
                    "name": "asyncIterator",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 94,
                  "end": 206,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 128,
                                "end": 132,
                                "decorators": [],
                                "name": "next",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "start": 132,
                                "end": 189,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
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
                                            "kind": "init",
                                            "key": {
                                              "type": "Identifier",
                                              "start": 162,
                                              "end": 166,
                                              "decorators": [],
                                              "name": "then",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "value": {
                                              "type": "FunctionExpression",
                                              "start": 166,
                                              "end": 172,
                                              "id": null,
                                              "generator": false,
                                              "async": false,
                                              "declare": false,
                                              "typeParameters": null,
                                              "params": [],
                                              "returnType": null,
                                              "body": {
                                                "type": "BlockStatement",
                                                "start": 169,
                                                "end": 172,
                                                "body": []
                                              },
                                              "expression": false
                                            },
                                            "method": true,
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
                              "method": true,
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
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 211,
      "end": 250,
      "id": {
        "type": "Identifier",
        "start": 227,
        "end": 228,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 231,
        "end": 250,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 237,
            "end": 248,
            "expression": {
              "type": "YieldExpression",
              "start": 237,
              "end": 247,
              "delegate": true,
              "argument": {
                "type": "Identifier",
                "start": 244,
                "end": 247,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

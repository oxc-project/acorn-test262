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
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 63,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": true,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 73,
                  "end": 93,
                  "object": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 79,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 93,
                    "name": "asyncIterator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 94,
                  "end": 206,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                              "method": true,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 128,
                                "end": 132,
                                "name": "next",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "start": 132,
                                "end": 189,
                                "id": null,
                                "expression": false,
                                "generator": false,
                                "async": false,
                                "params": [],
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
                                            "method": true,
                                            "shorthand": false,
                                            "computed": false,
                                            "key": {
                                              "type": "Identifier",
                                              "start": 162,
                                              "end": 166,
                                              "name": "then",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "value": {
                                              "type": "FunctionExpression",
                                              "start": 166,
                                              "end": 172,
                                              "id": null,
                                              "expression": false,
                                              "generator": false,
                                              "async": false,
                                              "params": [],
                                              "body": {
                                                "type": "BlockStatement",
                                                "start": 169,
                                                "end": 172,
                                                "body": []
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
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
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
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

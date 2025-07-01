__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 63
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 73,
                    "end": 79
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "asyncIterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 80,
                    "end": 93
                  },
                  "optional": false,
                  "computed": false,
                  "start": 73,
                  "end": 93
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "next",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 128,
                                "end": 132
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "ObjectExpression",
                                        "properties": [
                                          {
                                            "type": "Property",
                                            "kind": "init",
                                            "key": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "then",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 162,
                                              "end": 166
                                            },
                                            "value": {
                                              "type": "FunctionExpression",
                                              "id": null,
                                              "generator": false,
                                              "async": false,
                                              "declare": false,
                                              "typeParameters": null,
                                              "params": [],
                                              "returnType": null,
                                              "body": {
                                                "type": "BlockStatement",
                                                "body": [],
                                                "start": 169,
                                                "end": 172
                                              },
                                              "expression": false,
                                              "start": 166,
                                              "end": 172
                                            },
                                            "method": true,
                                            "shorthand": false,
                                            "computed": false,
                                            "optional": false,
                                            "start": 162,
                                            "end": 172
                                          }
                                        ],
                                        "start": 160,
                                        "end": 174
                                      },
                                      "start": 153,
                                      "end": 175
                                    }
                                  ],
                                  "start": 135,
                                  "end": 189
                                },
                                "expression": false,
                                "start": 132,
                                "end": 189
                              },
                              "method": true,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 128,
                              "end": 189
                            }
                          ],
                          "start": 114,
                          "end": 199
                        },
                        "start": 107,
                        "end": 200
                      }
                    ],
                    "start": 97,
                    "end": 206
                  },
                  "expression": false,
                  "start": 94,
                  "end": 206
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 72,
                "end": 206
              }
            ],
            "start": 66,
            "end": 208
          },
          "definite": false,
          "start": 60,
          "end": 208
        }
      ],
      "declare": false,
      "start": 56,
      "end": 209
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 227,
        "end": 228
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 244,
                "end": 247
              },
              "start": 237,
              "end": 247
            },
            "directive": null,
            "start": 237,
            "end": 248
          }
        ],
        "start": 231,
        "end": 250
      },
      "expression": false,
      "start": 211,
      "end": 250
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 250
}
```

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 185,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 44,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 22,
        "name": "alert",
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
          "start": 23,
          "end": 36,
          "name": "message",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 36,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 33,
              "end": 36
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 37,
        "end": 43,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 39,
          "end": 43
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 152,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 152,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 50,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 53,
            "end": 152,
            "properties": [
              {
                "type": "Property",
                "start": 59,
                "end": 150,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 66,
                  "name": "doStuff",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 68,
                  "end": 150,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 69,
                      "end": 77,
                      "name": "callback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "start": 82,
                    "end": 150,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 88,
                      "end": 150,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 98,
                          "end": 112,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 102,
                              "end": 111,
                              "id": {
                                "type": "Identifier",
                                "start": 102,
                                "end": 107,
                                "name": "_this",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "Literal",
                                "start": 110,
                                "end": 111,
                                "value": 2,
                                "raw": "2"
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 121,
                          "end": 144,
                          "argument": {
                            "type": "CallExpression",
                            "start": 128,
                            "end": 143,
                            "callee": {
                              "type": "Identifier",
                              "start": 128,
                              "end": 136,
                              "name": "callback",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 137,
                                "end": 142,
                                "name": "_this",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
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
      "type": "ExpressionStatement",
      "start": 153,
      "end": 185,
      "expression": {
        "type": "CallExpression",
        "start": 153,
        "end": 184,
        "callee": {
          "type": "Identifier",
          "start": 153,
          "end": 158,
          "name": "alert",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 159,
            "end": 183,
            "callee": {
              "type": "MemberExpression",
              "start": 159,
              "end": 168,
              "object": {
                "type": "Identifier",
                "start": 159,
                "end": 160,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 161,
                "end": 168,
                "name": "doStuff",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 169,
                "end": 182,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 169,
                    "end": 170,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 174,
                  "end": 182,
                  "callee": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 179,
                    "name": "alert",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 180,
                      "end": 181,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

targetTypeObjectLiteral.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 110,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 110,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 110,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 43,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 43,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 7,
                "end": 43,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 9,
                    "end": 19,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9,
                      "end": 10,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 10,
                      "end": 18,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 12,
                        "end": 18
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 20,
                    "end": 42,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 20,
                      "end": 21,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 21,
                      "end": 41,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 23,
                        "end": 41,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 24,
                            "end": 32,
                            "decorators": [],
                            "name": "w",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 25,
                              "end": 32,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 26,
                                "end": 32
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 33,
                          "end": 41,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 35,
                            "end": 41
                          }
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 46,
            "end": 110,
            "properties": [
              {
                "type": "Property",
                "start": 53,
                "end": 58,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 54,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 56,
                  "end": 58,
                  "raw": "12",
                  "value": 12
                }
              },
              {
                "type": "Property",
                "start": 65,
                "end": 107,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 66,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 68,
                  "end": 107,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 80,
                    "end": 107,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 91,
                        "end": 100,
                        "argument": {
                          "type": "Literal",
                          "start": 98,
                          "end": 99,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 77,
                      "end": 78,
                      "decorators": [],
                      "name": "w",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```

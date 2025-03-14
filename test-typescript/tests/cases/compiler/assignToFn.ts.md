assignToFn.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 126,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 125,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 125,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 15,
            "end": 56,
            "body": {
              "type": "TSInterfaceBody",
              "start": 27,
              "end": 56,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 30,
                  "end": 50,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 31,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 32,
                      "end": 40,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 33,
                        "end": 40,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 34,
                          "end": 40
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 41,
                    "end": 49,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 42,
                      "end": 49
                    }
                  },
                  "static": false
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "I",
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 62,
            "end": 105,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 66,
                "end": 104,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 69,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 67,
                    "end": 69,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 68,
                      "end": 69,
                      "typeName": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 69,
                        "decorators": [],
                        "name": "I",
                        "optional": false
                      }
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 70,
                  "end": 104,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 72,
                      "end": 102,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 72,
                        "end": 73,
                        "decorators": [],
                        "name": "f",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 74,
                        "end": 102,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 86,
                          "end": 102,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 88,
                              "end": 100,
                              "argument": {
                                "type": "Literal",
                                "start": 95,
                                "end": 99,
                                "raw": "true",
                                "value": true
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
                            "start": 83,
                            "end": 84,
                            "decorators": [],
                            "name": "n",
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
          },
          {
            "type": "ExpressionStatement",
            "start": 111,
            "end": 123,
            "expression": {
              "type": "AssignmentExpression",
              "start": 111,
              "end": 122,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 111,
                "end": 114,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 112,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 114,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 115,
                "end": 122,
                "raw": "\"hello\"",
                "value": "hello"
              }
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```

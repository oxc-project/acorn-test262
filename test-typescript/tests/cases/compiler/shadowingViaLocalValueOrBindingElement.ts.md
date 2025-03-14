shadowingViaLocalValueOrBindingElement.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 244,
  "body": [
    {
      "type": "IfStatement",
      "start": 0,
      "end": 244,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 10,
        "end": 244,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 16,
            "end": 22,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 20,
                "end": 21,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 21,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 27,
            "end": 242,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 37,
              "end": 242,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 47,
                  "end": 57,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 51,
                      "end": 56,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 51,
                        "end": 52,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 55,
                        "end": 56,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 75,
                  "end": 100,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 79,
                      "end": 99,
                      "definite": false,
                      "id": {
                        "type": "ObjectPattern",
                        "start": 79,
                        "end": 88,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 81,
                            "end": 86,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 81,
                              "end": 82,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "AssignmentPattern",
                              "start": 81,
                              "end": 86,
                              "decorators": [],
                              "left": {
                                "type": "Identifier",
                                "start": 81,
                                "end": 82,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              },
                              "optional": false,
                              "right": {
                                "type": "Literal",
                                "start": 85,
                                "end": 86,
                                "raw": "0",
                                "value": 0
                              }
                            }
                          }
                        ]
                      },
                      "init": {
                        "type": "ObjectExpression",
                        "start": 91,
                        "end": 99,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 93,
                            "end": 97,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 93,
                              "end": 94,
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
                              "start": 96,
                              "end": 97,
                              "raw": "0",
                              "value": 0
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
                  "type": "VariableDeclaration",
                  "start": 118,
                  "end": 146,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 122,
                      "end": 145,
                      "definite": false,
                      "id": {
                        "type": "ObjectPattern",
                        "start": 122,
                        "end": 134,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 124,
                            "end": 132,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 124,
                              "end": 125,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "AssignmentPattern",
                              "start": 127,
                              "end": 132,
                              "decorators": [],
                              "left": {
                                "type": "Identifier",
                                "start": 127,
                                "end": 128,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              },
                              "optional": false,
                              "right": {
                                "type": "Literal",
                                "start": 131,
                                "end": 132,
                                "raw": "0",
                                "value": 0
                              }
                            }
                          }
                        ]
                      },
                      "init": {
                        "type": "ObjectExpression",
                        "start": 137,
                        "end": 145,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 139,
                            "end": 143,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 139,
                              "end": 140,
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
                              "start": 142,
                              "end": 143,
                              "raw": "0",
                              "value": 0
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
                  "type": "VariableDeclaration",
                  "start": 164,
                  "end": 185,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 168,
                      "end": 184,
                      "definite": false,
                      "id": {
                        "type": "ObjectPattern",
                        "start": 168,
                        "end": 173,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 170,
                            "end": 171,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 170,
                              "end": 171,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 170,
                              "end": 171,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "init": {
                        "type": "ObjectExpression",
                        "start": 176,
                        "end": 184,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 178,
                            "end": 182,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 178,
                              "end": 179,
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
                              "start": 181,
                              "end": 182,
                              "raw": "0",
                              "value": 0
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
                  "type": "VariableDeclaration",
                  "start": 203,
                  "end": 227,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 207,
                      "end": 226,
                      "definite": false,
                      "id": {
                        "type": "ObjectPattern",
                        "start": 207,
                        "end": 215,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 209,
                            "end": 213,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 209,
                              "end": 210,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Identifier",
                              "start": 212,
                              "end": 213,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "init": {
                        "type": "ObjectExpression",
                        "start": 218,
                        "end": 226,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 220,
                            "end": 224,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 220,
                              "end": 221,
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
                              "start": 223,
                              "end": 224,
                              "raw": "0",
                              "value": 0
                            }
                          }
                        ]
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
            },
            "test": {
              "type": "Literal",
              "start": 31,
              "end": 35,
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 4,
        "end": 8,
        "raw": "true",
        "value": true
      }
    }
  ],
  "sourceType": "script"
}
```

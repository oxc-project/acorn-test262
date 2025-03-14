captureSuperPropertyAccessInSuperCall01.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 167,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 84,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 84,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 11,
            "end": 44,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 22,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 44,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 40,
                "end": 44,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 23,
                  "end": 38,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 24,
                    "end": 38,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 26,
                      "end": 38,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 29,
                        "end": 38,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 32,
                          "end": 38
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 46,
            "end": 82,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 57,
              "decorators": [],
              "name": "blah",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 57,
              "end": 82,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 68,
                "end": 82,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 70,
                    "end": 80,
                    "argument": {
                      "type": "Literal",
                      "start": 77,
                      "end": 79,
                      "raw": "\"\"",
                      "value": ""
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 59,
                "end": 67,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 61,
                  "end": 67
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 86,
      "end": 167,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 104,
        "end": 167,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 107,
            "end": 165,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 118,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 118,
              "end": 165,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 121,
                "end": 165,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 125,
                    "end": 162,
                    "expression": {
                      "type": "CallExpression",
                      "start": 125,
                      "end": 162,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 131,
                          "end": 161,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 137,
                            "end": 161,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 139,
                                "end": 159,
                                "argument": {
                                  "type": "CallExpression",
                                  "start": 146,
                                  "end": 158,
                                  "arguments": [],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 146,
                                    "end": 156,
                                    "computed": false,
                                    "object": {
                                      "type": "Super",
                                      "start": 146,
                                      "end": 151
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 152,
                                      "end": 156,
                                      "decorators": [],
                                      "name": "blah",
                                      "optional": false
                                    }
                                  },
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": []
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 125,
                        "end": 130
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 93,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```

captureThisInSuperCall.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 144,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 37,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 37,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 35,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 25,
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
              "start": 25,
              "end": 35,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 35,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 26,
                  "end": 31,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 27,
                    "end": 31,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 28,
                      "end": 31
                    }
                  }
                }
              ]
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
      "start": 39,
      "end": 144,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 57,
        "end": 144,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 63,
            "end": 121,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 74,
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
              "start": 74,
              "end": 121,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 77,
                "end": 121,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 79,
                    "end": 119,
                    "expression": {
                      "type": "CallExpression",
                      "start": 79,
                      "end": 118,
                      "arguments": [
                        {
                          "type": "ObjectExpression",
                          "start": 85,
                          "end": 117,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 87,
                              "end": 116,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 87,
                                "end": 91,
                                "decorators": [],
                                "name": "test",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "start": 93,
                                "end": 116,
                                "async": false,
                                "body": {
                                  "type": "CallExpression",
                                  "start": 99,
                                  "end": 116,
                                  "arguments": [],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 99,
                                    "end": 114,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 99,
                                      "end": 103
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 104,
                                      "end": 114,
                                      "decorators": [],
                                      "name": "someMethod",
                                      "optional": false
                                    }
                                  },
                                  "optional": false
                                },
                                "expression": true,
                                "generator": false,
                                "id": null,
                                "params": []
                              }
                            }
                          ]
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 79,
                        "end": 84
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
          },
          {
            "type": "MethodDefinition",
            "start": 127,
            "end": 142,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 137,
              "decorators": [],
              "name": "someMethod",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 137,
              "end": 142,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 140,
                "end": 142,
                "body": []
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
        "start": 45,
        "end": 46,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 55,
        "end": 56,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```

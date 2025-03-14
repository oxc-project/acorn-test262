superAccess.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 561,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 93,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 93,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 19,
            "end": 41,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 28,
              "decorators": [],
              "name": "S1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 36,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 30,
                "end": 36
              }
            },
            "value": {
              "type": "Literal",
              "start": 39,
              "end": 40,
              "raw": "5",
              "value": 5
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 46,
            "end": 74,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 56,
              "decorators": [],
              "name": "S2",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 64,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 58,
                "end": 64
              }
            },
            "value": {
              "type": "Literal",
              "start": 67,
              "end": 73,
              "raw": "\"test\"",
              "value": "test"
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 79,
            "end": 91,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 83,
              "end": 90,
              "async": false,
              "body": {
                "type": "Literal",
                "start": 89,
                "end": 90,
                "raw": "5",
                "value": 5
              },
              "expression": true,
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
        "start": 6,
        "end": 12,
        "decorators": [],
        "name": "MyBase",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 95,
      "end": 561,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 126,
        "end": 561,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 132,
            "end": 559,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 135,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 135,
              "end": 559,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 138,
                "end": 559,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 148,
                    "end": 166,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 152,
                        "end": 165,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 152,
                          "end": 154,
                          "decorators": [],
                          "name": "l3",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 157,
                          "end": 165,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 157,
                            "end": 162
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 163,
                            "end": 165,
                            "decorators": [],
                            "name": "S1",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 286,
                    "end": 304,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 290,
                        "end": 303,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 290,
                          "end": 292,
                          "decorators": [],
                          "name": "l4",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 295,
                          "end": 303,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 295,
                            "end": 300
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 301,
                            "end": 303,
                            "decorators": [],
                            "name": "S2",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 424,
                    "end": 443,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 428,
                        "end": 442,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 428,
                          "end": 430,
                          "decorators": [],
                          "name": "l5",
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 433,
                          "end": 442,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 433,
                            "end": 440,
                            "computed": false,
                            "object": {
                              "type": "Super",
                              "start": 433,
                              "end": 438
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 439,
                              "end": 440,
                              "decorators": [],
                              "name": "f",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
        "start": 101,
        "end": 110,
        "decorators": [],
        "name": "MyDerived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 119,
        "end": 125,
        "decorators": [],
        "name": "MyBase",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```

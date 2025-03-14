superCallInsideClassExpression.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 185,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
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
      "start": 13,
      "end": 24,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 24,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 26,
      "end": 185,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 44,
        "end": 185,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 50,
            "end": 183,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 61,
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
              "start": 61,
              "end": 183,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 64,
                "end": 183,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 75,
                    "end": 177,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 79,
                        "end": 177,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 79,
                          "end": 80,
                          "decorators": [],
                          "name": "D",
                          "optional": false
                        },
                        "init": {
                          "type": "ClassExpression",
                          "start": 83,
                          "end": 177,
                          "abstract": false,
                          "body": {
                            "type": "ClassBody",
                            "start": 99,
                            "end": 177,
                            "body": [
                              {
                                "type": "MethodDefinition",
                                "start": 113,
                                "end": 167,
                                "computed": false,
                                "decorators": [],
                                "key": {
                                  "type": "Identifier",
                                  "start": 113,
                                  "end": 124,
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
                                  "start": 124,
                                  "end": 167,
                                  "async": false,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 127,
                                    "end": 167,
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "start": 145,
                                        "end": 153,
                                        "expression": {
                                          "type": "CallExpression",
                                          "start": 145,
                                          "end": 152,
                                          "arguments": [],
                                          "callee": {
                                            "type": "Super",
                                            "start": 145,
                                            "end": 150
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
                          "id": null,
                          "implements": [],
                          "superClass": {
                            "type": "Identifier",
                            "start": 97,
                            "end": 98,
                            "decorators": [],
                            "name": "C",
                            "optional": false
                          }
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
        "start": 32,
        "end": 33,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 42,
        "end": 43,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```

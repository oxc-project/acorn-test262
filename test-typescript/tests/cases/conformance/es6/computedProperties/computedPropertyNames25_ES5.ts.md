computedPropertyNames25_ES5.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 174,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 48,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 20,
              "end": 48,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 23,
                "end": 48,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 33,
                    "end": 42,
                    "argument": {
                      "type": "Literal",
                      "start": 40,
                      "end": 41,
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
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 174,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 72,
        "end": 174,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 78,
            "end": 172,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 81,
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
              "start": 81,
              "end": 172,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 84,
                "end": 172,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 94,
                    "end": 148,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 98,
                        "end": 147,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 98,
                          "end": 101,
                          "decorators": [],
                          "name": "obj",
                          "optional": false
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 104,
                          "end": 147,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 118,
                              "end": 137,
                              "computed": true,
                              "key": {
                                "type": "CallExpression",
                                "start": 119,
                                "end": 130,
                                "arguments": [],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 119,
                                  "end": 128,
                                  "computed": false,
                                  "object": {
                                    "type": "Super",
                                    "start": 119,
                                    "end": 124
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 125,
                                    "end": 128,
                                    "decorators": [],
                                    "name": "bar",
                                    "optional": false
                                  }
                                },
                                "optional": false
                              },
                              "kind": "init",
                              "method": true,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "FunctionExpression",
                                "start": 131,
                                "end": 137,
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 134,
                                  "end": 137,
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
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 157,
                    "end": 166,
                    "argument": {
                      "type": "Literal",
                      "start": 164,
                      "end": 165,
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
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 67,
        "end": 71,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```

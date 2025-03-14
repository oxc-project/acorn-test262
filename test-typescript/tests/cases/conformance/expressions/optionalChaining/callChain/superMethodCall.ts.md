superMethodCall.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 184,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 32,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 32,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 30,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 23,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": true,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 30,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 27,
                "end": 30,
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
      "start": 34,
      "end": 184,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 61,
        "end": 184,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 67,
            "end": 116,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 73,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 73,
              "end": 116,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 76,
                "end": 116,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 86,
                    "end": 110,
                    "argument": {
                      "type": "ChainExpression",
                      "start": 93,
                      "end": 109,
                      "expression": {
                        "type": "CallExpression",
                        "start": 93,
                        "end": 109,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 93,
                          "end": 105,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 93,
                            "end": 98
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 99,
                            "end": 105,
                            "decorators": [],
                            "name": "method",
                            "optional": false
                          }
                        },
                        "optional": true
                      }
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
            "start": 122,
            "end": 182,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 139,
              "decorators": [],
              "name": "asyncMethod",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 139,
              "end": 182,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 142,
                "end": 182,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 152,
                    "end": 176,
                    "argument": {
                      "type": "ChainExpression",
                      "start": 159,
                      "end": 175,
                      "expression": {
                        "type": "CallExpression",
                        "start": 159,
                        "end": 175,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 159,
                          "end": 171,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 159,
                            "end": 164
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 165,
                            "end": 171,
                            "decorators": [],
                            "name": "method",
                            "optional": false
                          }
                        },
                        "optional": true
                      }
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
        "start": 40,
        "end": 47,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 56,
        "end": 60,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```

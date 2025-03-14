__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 134,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 17,
      "end": 51,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 51,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 36,
            "end": 49,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 39,
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
              "start": 39,
              "end": 49,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 42,
                "end": 49,
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
        "start": 23,
        "end": 29,
        "decorators": [],
        "name": "Parent",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 53,
      "end": 134,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 78,
        "end": 134,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 84,
            "end": 132,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 87,
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
              "start": 87,
              "end": 132,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 90,
                "end": 132,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 100,
                    "end": 126,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 104,
                        "end": 125,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 104,
                          "end": 105,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 108,
                          "end": 125,
                          "async": false,
                          "body": {
                            "type": "CallExpression",
                            "start": 114,
                            "end": 125,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 114,
                              "end": 123,
                              "computed": false,
                              "object": {
                                "type": "Super",
                                "start": 114,
                                "end": 119
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 120,
                                "end": 123,
                                "decorators": [],
                                "name": "foo",
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
        "start": 59,
        "end": 62,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 71,
        "end": 77,
        "decorators": [],
        "name": "Parent",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

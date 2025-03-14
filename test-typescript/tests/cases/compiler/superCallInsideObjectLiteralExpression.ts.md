superCallInsideObjectLiteralExpression.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 129,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 29,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 29,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 27,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
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
              "start": 17,
              "end": 27,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 20,
                "end": 27,
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
      "start": 31,
      "end": 129,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 49,
        "end": 129,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 55,
            "end": 127,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 66,
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
              "start": 66,
              "end": 127,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 69,
                "end": 127,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 79,
                    "end": 121,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 83,
                        "end": 121,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 83,
                          "end": 84,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 87,
                          "end": 121,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 101,
                              "end": 111,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 101,
                                "end": 102,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "CallExpression",
                                "start": 104,
                                "end": 111,
                                "arguments": [],
                                "callee": {
                                  "type": "Super",
                                  "start": 104,
                                  "end": 109
                                },
                                "optional": false
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
        "start": 37,
        "end": 38,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 47,
        "end": 48,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```

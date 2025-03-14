__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 115,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 114,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 114,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 44,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 27,
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
              "start": 27,
              "end": 44,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 41,
                "end": 44,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 28,
                  "end": 36,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 36,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "Identifier",
                  "start": 38,
                  "end": 39,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 52,
            "end": 112,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 55,
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
              "start": 55,
              "end": 112,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 58,
                "end": 112,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 68,
                    "end": 83,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 72,
                        "end": 82,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 72,
                          "end": 73,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 76,
                          "end": 82,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 76,
                            "end": 80
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 81,
                            "end": 82,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 92,
                    "end": 106,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 99,
                      "end": 105,
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
                        "end": 105,
                        "decorators": [],
                        "name": "y",
                        "optional": false
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
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

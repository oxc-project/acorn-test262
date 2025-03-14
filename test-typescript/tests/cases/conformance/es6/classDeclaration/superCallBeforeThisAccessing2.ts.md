superCallBeforeThisAccessing2.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 211,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 1,
      "end": 38,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 38,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 36,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 29,
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
              "start": 29,
              "end": 36,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 36,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
                  "decorators": [],
                  "name": "c",
                  "optional": false
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
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 39,
      "end": 210,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 60,
        "end": 210,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 66,
            "end": 77,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 76,
              "decorators": [],
              "name": "_t",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 82,
            "end": 208,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 93,
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
              "start": 93,
              "end": 208,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 96,
                "end": 208,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 106,
                    "end": 131,
                    "expression": {
                      "type": "CallExpression",
                      "start": 106,
                      "end": 130,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 112,
                          "end": 129,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 118,
                            "end": 129,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 120,
                                "end": 127,
                                "expression": {
                                  "type": "MemberExpression",
                                  "start": 120,
                                  "end": 127,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 120,
                                    "end": 124
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 125,
                                    "end": 127,
                                    "decorators": [],
                                    "name": "_t",
                                    "optional": false
                                  }
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
                        "start": 106,
                        "end": 111
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
        "start": 45,
        "end": 46,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 55,
        "end": 59,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```

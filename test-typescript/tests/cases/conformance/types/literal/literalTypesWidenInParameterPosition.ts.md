literalTypesWidenInParameterPosition.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 162,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 145,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 145,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 34,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 30,
              "decorators": [],
              "name": "noWiden",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 33,
              "end": 34,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "MethodDefinition",
            "start": 39,
            "end": 143,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 50,
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
              "start": 50,
              "end": 143,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 71,
                "end": 143,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 81,
                    "end": 98,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 81,
                      "end": 97,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 81,
                        "end": 93,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 81,
                          "end": 85
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 86,
                          "end": 93,
                          "decorators": [],
                          "name": "noWiden",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 96,
                        "end": 97,
                        "raw": "5",
                        "value": 5
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 116,
                    "end": 131,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 116,
                      "end": 130,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 116,
                        "end": 126,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 116,
                          "end": 120
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 121,
                          "end": 126,
                          "decorators": [],
                          "name": "widen",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 129,
                        "end": 130,
                        "raw": "6",
                        "value": 6
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 51,
                  "end": 69,
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "AssignmentPattern",
                    "start": 60,
                    "end": 69,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 65,
                      "decorators": [],
                      "name": "widen",
                      "optional": false
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 68,
                      "end": 69,
                      "raw": "2",
                      "value": 2
                    }
                  },
                  "readonly": true,
                  "static": false
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
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 146,
      "end": 155,
      "expression": {
        "type": "NewExpression",
        "start": 146,
        "end": 154,
        "arguments": [
          {
            "type": "Literal",
            "start": 152,
            "end": 153,
            "raw": "7",
            "value": 7
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 150,
          "end": 151,
          "decorators": [],
          "name": "D",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```

classStaticBlockUseBeforeDef1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 146,
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
            "end": 23,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": null
          },
          {
            "type": "StaticBlock",
            "start": 28,
            "end": 62,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 45,
                "end": 56,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 45,
                  "end": 55,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 45,
                    "end": 51,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 45,
                      "end": 49
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 50,
                      "end": 51,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 54,
                    "end": 55,
                    "raw": "1",
                    "value": 1
                  }
                }
              }
            ]
          },
          {
            "type": "PropertyDefinition",
            "start": 67,
            "end": 85,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "MemberExpression",
              "start": 78,
              "end": 84,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 78,
                "end": 82
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 83,
                "end": 84,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 90,
            "end": 99,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": null
          },
          {
            "type": "StaticBlock",
            "start": 104,
            "end": 143,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 121,
                "end": 137,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 121,
                  "end": 136,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 121,
                    "end": 127,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 121,
                      "end": 125
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 126,
                      "end": 127,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "start": 130,
                    "end": 136,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 130,
                      "end": 134
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 135,
                      "end": 136,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  }
                }
              }
            ]
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
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```

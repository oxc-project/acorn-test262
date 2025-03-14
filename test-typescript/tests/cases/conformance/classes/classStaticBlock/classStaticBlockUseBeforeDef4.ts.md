classStaticBlockUseBeforeDef4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 173,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 172,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 172,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 14,
            "end": 32,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
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
            "start": 37,
            "end": 71,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 54,
                "end": 65,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 54,
                  "end": 64,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 54,
                    "end": 60,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 54,
                      "end": 58
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 59,
                      "end": 60,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 63,
                    "end": 64,
                    "raw": "1",
                    "value": 1
                  }
                }
              }
            ]
          },
          {
            "type": "AccessorProperty",
            "start": 76,
            "end": 103,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
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
              "start": 96,
              "end": 102,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 96,
                "end": 100
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 101,
                "end": 102,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          },
          {
            "type": "AccessorProperty",
            "start": 108,
            "end": 126,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
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
            "start": 131,
            "end": 170,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 148,
                "end": 164,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 148,
                  "end": 163,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 148,
                    "end": 154,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 148,
                      "end": 152
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 153,
                      "end": 154,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "start": 157,
                    "end": 163,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 157,
                      "end": 161
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 162,
                      "end": 163,
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

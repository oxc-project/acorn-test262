classStaticBlock9.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 96,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 96,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 36,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "BinaryExpression",
              "start": 27,
              "end": 36,
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "start": 27,
                "end": 32,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 28,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 32,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 35,
                "end": 36,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "StaticBlock",
            "start": 41,
            "end": 74,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 58,
                "end": 68,
                "expression": {
                  "type": "BinaryExpression",
                  "start": 58,
                  "end": 67,
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "start": 58,
                    "end": 63,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 59,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 63,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 66,
                    "end": 67,
                    "raw": "2",
                    "value": 2
                  }
                }
              }
            ]
          },
          {
            "type": "PropertyDefinition",
            "start": 79,
            "end": 94,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 89,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 92,
              "end": 93,
              "raw": "1",
              "value": 1
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
    }
  ],
  "sourceType": "script"
}
```

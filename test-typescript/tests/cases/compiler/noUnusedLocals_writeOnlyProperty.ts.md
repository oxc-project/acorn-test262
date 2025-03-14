noUnusedLocals_writeOnlyProperty.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 63,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 62,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 62,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 24,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "x",
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
            "start": 29,
            "end": 60,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 30,
              "end": 60,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 60,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 43,
                    "end": 54,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 43,
                      "end": 53,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 43,
                        "end": 49,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 43,
                          "end": 47
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 48,
                          "end": 49,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 52,
                        "end": 53,
                        "raw": "0",
                        "value": 0
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

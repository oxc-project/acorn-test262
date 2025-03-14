sourceMapValidationClassWithDefaultConstructorAndCapturedThisStatement.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 71,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 71,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 71,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 34,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 31,
              "end": 33,
              "raw": "10",
              "value": 10
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 39,
            "end": 69,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 53,
              "decorators": [],
              "name": "returnA",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 56,
              "end": 68,
              "async": false,
              "body": {
                "type": "MemberExpression",
                "start": 62,
                "end": 68,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 62,
                  "end": 66
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 68,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              },
              "expression": true,
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
        "end": 13,
        "decorators": [],
        "name": "Greeter",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```

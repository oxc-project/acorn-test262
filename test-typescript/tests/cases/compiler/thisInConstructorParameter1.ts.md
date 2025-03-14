thisInConstructorParameter1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 59,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 59,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 59,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 25,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "decorators": [],
              "name": "y",
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
            "start": 30,
            "end": 57,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 41,
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
              "start": 41,
              "end": 57,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 54,
                "end": 57,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 42,
                  "end": 52,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "MemberExpression",
                    "start": 46,
                    "end": 52,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 46,
                      "end": 50
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 52,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  }
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
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```

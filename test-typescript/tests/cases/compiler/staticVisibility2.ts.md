staticVisibility2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 121,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 121,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 121,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 19,
            "end": 37,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 36,
              "decorators": [],
              "name": "sideLength",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 119,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 53,
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
              "start": 53,
              "end": 119,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 74,
                "end": 119,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 84,
                    "end": 113,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 84,
                      "end": 112,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 84,
                        "end": 99,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 84,
                          "end": 88
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 89,
                          "end": 99,
                          "decorators": [],
                          "name": "sideLength",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 102,
                        "end": 112,
                        "decorators": [],
                        "name": "sideLength",
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 54,
                  "end": 72,
                  "decorators": [],
                  "name": "sideLength",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 64,
                    "end": 72,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 66,
                      "end": 72
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
        "end": 12,
        "decorators": [],
        "name": "Square",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```

assignToPrototype1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 105,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 60,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 20,
        "end": 60,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 24,
            "end": 58,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 27,
              "decorators": [],
              "name": "add",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 27,
              "end": 58,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 28,
                  "end": 38,
                  "decorators": [],
                  "name": "dx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 30,
                    "end": 38,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 32,
                      "end": 38
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 40,
                  "end": 50,
                  "decorators": [],
                  "name": "dy",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 42,
                    "end": 50,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 44,
                      "end": 50
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 51,
                "end": 57,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 53,
                  "end": 57
                }
              }
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 19,
        "decorators": [],
        "name": "Point",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 62,
      "end": 105,
      "expression": {
        "type": "AssignmentExpression",
        "start": 62,
        "end": 104,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 62,
          "end": 81,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 62,
            "end": 77,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 62,
              "end": 67,
              "decorators": [],
              "name": "Point",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 68,
              "end": 77,
              "decorators": [],
              "name": "prototype",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 78,
            "end": 81,
            "decorators": [],
            "name": "add",
            "optional": false
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 84,
          "end": 104,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 101,
            "end": 104,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 93,
              "end": 95,
              "decorators": [],
              "name": "dx",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 97,
              "end": 99,
              "decorators": [],
              "name": "dy",
              "optional": false
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
}
```

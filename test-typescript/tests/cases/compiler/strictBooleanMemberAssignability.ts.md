strictBooleanMemberAssignability.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 80,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 80,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 80,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 28,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 19,
              "decorators": [],
              "name": "def",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 28,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 21,
                "end": 28
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 33,
            "end": 78,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 44,
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
              "start": 44,
              "end": 78,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 47,
                "end": 78,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 57,
                    "end": 72,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 57,
                      "end": 72,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 57,
                        "end": 65,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 57,
                          "end": 61
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 62,
                          "end": 65,
                          "decorators": [],
                          "name": "def",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 68,
                        "end": 72,
                        "raw": "true",
                        "value": true
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
        "end": 9,
        "decorators": [],
        "name": "Abc",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```

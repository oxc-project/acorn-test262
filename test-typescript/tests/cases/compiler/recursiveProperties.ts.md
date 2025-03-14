recursiveProperties.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 127,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 56,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 56,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 54,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 26,
              "decorators": [],
              "name": "testProp",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 26,
              "end": 54,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 29,
                "end": 54,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 31,
                    "end": 52,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 38,
                      "end": 51,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 38,
                        "end": 42
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 43,
                        "end": 51,
                        "decorators": [],
                        "name": "testProp",
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
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 58,
      "end": 127,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 66,
        "end": 127,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 72,
            "end": 125,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 84,
              "decorators": [],
              "name": "testProp",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 84,
              "end": 125,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 99,
                "end": 125,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 101,
                    "end": 123,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 101,
                      "end": 122,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 101,
                        "end": 114,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 101,
                          "end": 105
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 106,
                          "end": 114,
                          "decorators": [],
                          "name": "testProp",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 117,
                        "end": 122,
                        "decorators": [],
                        "name": "value",
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
                  "start": 85,
                  "end": 97,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 90,
                    "end": 97,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 91,
                      "end": 97
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
        "start": 64,
        "end": 65,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 130,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 130,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 130,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 20,
            "end": 128,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 31,
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
              "start": 31,
              "end": 128,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 80,
                "end": 128,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 90,
                    "end": 122,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 90,
                      "end": 121,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 90,
                        "end": 96,
                        "decorators": [],
                        "name": "param2",
                        "optional": false
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 99,
                        "end": 121,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 99,
                          "end": 105,
                          "decorators": [],
                          "name": "param2",
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 108,
                          "end": 121,
                          "raw": "\"dummy value\"",
                          "value": "dummy value"
                        }
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
                  "start": 32,
                  "end": 46,
                  "decorators": [],
                  "name": "param1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 38,
                    "end": 46,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 40,
                      "end": 46
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 48,
                  "end": 62,
                  "decorators": [],
                  "name": "param2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 54,
                    "end": 62,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 56,
                      "end": 62
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 64,
                  "end": 78,
                  "decorators": [],
                  "name": "param3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 70,
                    "end": 78,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 72,
                      "end": 78
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
        "end": 13,
        "decorators": [],
        "name": "greeter",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

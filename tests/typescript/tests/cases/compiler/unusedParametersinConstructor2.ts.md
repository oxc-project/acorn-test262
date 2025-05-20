__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 114,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 114,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 114,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 20,
            "end": 112,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 31,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 31,
              "end": 112,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 64,
                "end": 112,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 74,
                    "end": 106,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 74,
                      "end": 105,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 74,
                        "end": 80,
                        "decorators": [],
                        "name": "param2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 83,
                        "end": 105,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 83,
                          "end": 89,
                          "decorators": [],
                          "name": "param2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 92,
                          "end": 105,
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
                }
              ],
              "returnType": null,
              "typeParameters": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

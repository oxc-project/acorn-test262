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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 130,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 20,
            "end": 128,
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
            "value": {
              "type": "FunctionExpression",
              "start": 31,
              "end": 128,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              ],
              "returnType": null,
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 99,
                        "end": 121,
                        "left": {
                          "type": "Identifier",
                          "start": 99,
                          "end": 105,
                          "decorators": [],
                          "name": "param2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "start": 108,
                          "end": 121,
                          "value": "dummy value",
                          "raw": "\"dummy value\""
                        }
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

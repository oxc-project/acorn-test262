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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "name": "greeter",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 114,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 20,
            "end": 112,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 31,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 31,
              "end": 112,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 32,
                  "end": 46,
                  "name": "param1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 38,
                    "end": 46,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 40,
                      "end": 46
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 48,
                  "end": 62,
                  "name": "param2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 54,
                    "end": 62,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 56,
                      "end": 62
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 64,
                "end": 112,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 74,
                    "end": 106,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 74,
                      "end": 105,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 74,
                        "end": 80,
                        "name": "param2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 83,
                        "end": 105,
                        "left": {
                          "type": "Identifier",
                          "start": 83,
                          "end": 89,
                          "name": "param2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "start": 92,
                          "end": 105,
                          "value": "dummy value",
                          "raw": "\"dummy value\""
                        }
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

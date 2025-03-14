unusedMultipleParameter1InContructor.ts
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
        "start": 12,
        "end": 130,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 128,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 29,
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
              "start": 29,
              "end": 128,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 63,
                "end": 128,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 73,
                    "end": 89,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 77,
                        "end": 88,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 77,
                          "end": 83,
                          "decorators": [],
                          "name": "unused",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 86,
                          "end": 88,
                          "raw": "20",
                          "value": 20
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 98,
                    "end": 122,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 98,
                      "end": 121,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 98,
                        "end": 105,
                        "decorators": [],
                        "name": "person2",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 108,
                        "end": 121,
                        "raw": "\"Dummy value\"",
                        "value": "Dummy value"
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
                  "start": 30,
                  "end": 44,
                  "decorators": [],
                  "name": "person",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 36,
                    "end": 44,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 38,
                      "end": 44
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 46,
                  "end": 61,
                  "decorators": [],
                  "name": "person2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 53,
                    "end": 61,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 55,
                      "end": 61
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
        "end": 11,
        "decorators": [],
        "name": "Dummy",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```

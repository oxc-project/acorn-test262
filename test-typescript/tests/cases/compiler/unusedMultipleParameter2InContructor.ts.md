unusedMultipleParameter2InContructor.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 147,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 147,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 147,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 145,
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
              "end": 145,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 80,
                "end": 145,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 90,
                    "end": 106,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 94,
                        "end": 105,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 94,
                          "end": 100,
                          "decorators": [],
                          "name": "unused",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 103,
                          "end": 105,
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
                    "start": 115,
                    "end": 139,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 115,
                      "end": 138,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 115,
                        "end": 122,
                        "decorators": [],
                        "name": "person2",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 125,
                        "end": 138,
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
                },
                {
                  "type": "Identifier",
                  "start": 63,
                  "end": 78,
                  "decorators": [],
                  "name": "person3",
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

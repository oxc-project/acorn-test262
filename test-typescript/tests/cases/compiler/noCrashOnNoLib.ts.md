__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 91,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 91,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 91,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 17,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 20,
          "end": 91,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 26,
              "end": 38,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 30,
                  "end": 37,
                  "id": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 37,
                    "name": "e",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 31,
                      "end": 37,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 33,
                        "end": 37,
                        "elementType": {
                          "type": "TSTypeLiteral",
                          "start": 33,
                          "end": 35,
                          "members": []
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            {
              "type": "WhileStatement",
              "start": 43,
              "end": 89,
              "test": {
                "type": "Literal",
                "start": 50,
                "end": 54,
                "value": true,
                "raw": "true"
              },
              "body": {
                "type": "BlockStatement",
                "start": 56,
                "end": 89,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 64,
                    "end": 83,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 64,
                      "end": 82,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 64,
                        "end": 65,
                        "name": "e",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "start": 68,
                        "end": 82,
                        "elements": [
                          {
                            "type": "SpreadElement",
                            "start": 69,
                            "end": 81,
                            "argument": {
                              "type": "LogicalExpression",
                              "start": 73,
                              "end": 80,
                              "left": {
                                "type": "Identifier",
                                "start": 73,
                                "end": 74,
                                "name": "e",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "||",
                              "right": {
                                "type": "ArrayExpression",
                                "start": 78,
                                "end": 80,
                                "elements": []
                              }
                            }
                          }
                        ]
                      }
                    },
                    "directive": null
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

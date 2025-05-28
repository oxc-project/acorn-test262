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
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 20,
          "end": 91,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 26,
              "end": 38,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 30,
                  "end": 37,
                  "id": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 37,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
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
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
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
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null
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
                                "decorators": [],
                                "name": "e",
                                "optional": false,
                                "typeAnnotation": null
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
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

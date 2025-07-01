__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 17
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 33,
                          "end": 35
                        },
                        "start": 33,
                        "end": 37
                      },
                      "start": 31,
                      "end": 37
                    },
                    "start": 30,
                    "end": 37
                  },
                  "init": null,
                  "definite": false,
                  "start": 30,
                  "end": 37
                }
              ],
              "declare": false,
              "start": 26,
              "end": 38
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 50,
                "end": 54
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 64,
                        "end": 65
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "SpreadElement",
                            "argument": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "e",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 73,
                                "end": 74
                              },
                              "operator": "||",
                              "right": {
                                "type": "ArrayExpression",
                                "elements": [],
                                "start": 78,
                                "end": 80
                              },
                              "start": 73,
                              "end": 80
                            },
                            "start": 69,
                            "end": 81
                          }
                        ],
                        "start": 68,
                        "end": 82
                      },
                      "start": 64,
                      "end": 82
                    },
                    "directive": null,
                    "start": 64,
                    "end": 83
                  }
                ],
                "start": 56,
                "end": 89
              },
              "start": 43,
              "end": 89
            }
          ],
          "start": 20,
          "end": 91
        },
        "expression": false,
        "start": 7,
        "end": 91
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 91
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 91
}
```

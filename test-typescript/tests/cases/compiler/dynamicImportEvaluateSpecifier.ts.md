__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 334,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 66,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 65,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 61,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 64,
            "end": 65,
            "raw": "0",
            "value": 0
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 68,
      "end": 88,
      "directive": null,
      "expression": {
        "type": "ImportExpression",
        "start": 68,
        "end": 87,
        "options": null,
        "source": {
          "type": "CallExpression",
          "start": 75,
          "end": 86,
          "arguments": [
            {
              "type": "UpdateExpression",
              "start": 82,
              "end": 85,
              "argument": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "++",
              "prefix": false
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 75,
            "end": 81,
            "decorators": [],
            "name": "String",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 89,
      "end": 109,
      "directive": null,
      "expression": {
        "type": "ImportExpression",
        "start": 89,
        "end": 108,
        "options": null,
        "source": {
          "type": "CallExpression",
          "start": 96,
          "end": 107,
          "arguments": [
            {
              "type": "UpdateExpression",
              "start": 103,
              "end": 106,
              "argument": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "++",
              "prefix": false
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 96,
            "end": 102,
            "decorators": [],
            "name": "String",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 247,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 246,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 124,
            "decorators": [],
            "name": "getPath",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 127,
            "end": 246,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 139,
              "end": 246,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 216,
                  "end": 244,
                  "argument": {
                    "type": "Literal",
                    "start": 223,
                    "end": 243,
                    "raw": "\"/root/my/cool/path\"",
                    "value": "/root/my/cool/path"
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 249,
      "end": 333,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 255,
          "end": 332,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 255,
            "end": 267,
            "decorators": [],
            "name": "someFunction",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 270,
            "end": 332,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 282,
              "end": 332,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 285,
                  "end": 330,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 291,
                      "end": 329,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 291,
                        "end": 297,
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "start": 300,
                        "end": 329,
                        "argument": {
                          "type": "ImportExpression",
                          "start": 306,
                          "end": 329,
                          "options": null,
                          "source": {
                            "type": "AwaitExpression",
                            "start": 313,
                            "end": 328,
                            "argument": {
                              "type": "CallExpression",
                              "start": 319,
                              "end": 328,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 319,
                                "end": 326,
                                "decorators": [],
                                "name": "getPath",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "typeArguments": null
                            }
                          }
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

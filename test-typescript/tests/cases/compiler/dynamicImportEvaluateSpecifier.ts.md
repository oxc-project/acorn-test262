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
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 61,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 64,
            "end": 65,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 68,
      "end": 88,
      "expression": {
        "type": "ImportExpression",
        "start": 68,
        "end": 87,
        "source": {
          "type": "CallExpression",
          "start": 75,
          "end": 86,
          "callee": {
            "type": "Identifier",
            "start": 75,
            "end": 81,
            "name": "String",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "UpdateExpression",
              "start": 82,
              "end": 85,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "options": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 89,
      "end": 109,
      "expression": {
        "type": "ImportExpression",
        "start": 89,
        "end": 108,
        "source": {
          "type": "CallExpression",
          "start": 96,
          "end": 107,
          "callee": {
            "type": "Identifier",
            "start": 96,
            "end": 102,
            "name": "String",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "UpdateExpression",
              "start": 103,
              "end": 106,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "options": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 124,
            "name": "getPath",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 127,
            "end": 246,
            "id": null,
            "expression": false,
            "generator": false,
            "async": true,
            "params": [],
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
                    "value": "/root/my/cool/path",
                    "raw": "\"/root/my/cool/path\""
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 255,
            "end": 267,
            "name": "someFunction",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 270,
            "end": 332,
            "id": null,
            "expression": false,
            "generator": false,
            "async": true,
            "params": [],
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
                      "id": {
                        "type": "Identifier",
                        "start": 291,
                        "end": 297,
                        "name": "result",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "start": 300,
                        "end": 329,
                        "argument": {
                          "type": "ImportExpression",
                          "start": 306,
                          "end": 329,
                          "source": {
                            "type": "AwaitExpression",
                            "start": 313,
                            "end": 328,
                            "argument": {
                              "type": "CallExpression",
                              "start": 319,
                              "end": 328,
                              "callee": {
                                "type": "Identifier",
                                "start": 319,
                                "end": 326,
                                "name": "getPath",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "optional": false,
                              "typeArguments": null
                            }
                          },
                          "options": null
                        }
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

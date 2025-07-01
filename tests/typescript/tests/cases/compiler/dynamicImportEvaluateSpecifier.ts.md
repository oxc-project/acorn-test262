__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 61
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 64,
            "end": 65
          },
          "definite": false,
          "start": 60,
          "end": 65
        }
      ],
      "declare": false,
      "start": 56,
      "end": 66
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "String",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 81
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 82,
                "end": 83
              },
              "start": 82,
              "end": 85
            }
          ],
          "optional": false,
          "start": 75,
          "end": 86
        },
        "options": null,
        "phase": null,
        "start": 68,
        "end": 87
      },
      "directive": null,
      "start": 68,
      "end": 88
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "String",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 102
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 103,
                "end": 104
              },
              "start": 103,
              "end": 106
            }
          ],
          "optional": false,
          "start": 96,
          "end": 107
        },
        "options": null,
        "phase": null,
        "start": 89,
        "end": 108
      },
      "directive": null,
      "start": 89,
      "end": 109
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "getPath",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 124
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "/root/my/cool/path",
                    "raw": "\"/root/my/cool/path\"",
                    "start": 223,
                    "end": 243
                  },
                  "start": 216,
                  "end": 244
                }
              ],
              "start": 139,
              "end": 246
            },
            "id": null,
            "generator": false,
            "start": 127,
            "end": 246
          },
          "definite": false,
          "start": 117,
          "end": 246
        }
      ],
      "declare": false,
      "start": 111,
      "end": 247
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "someFunction",
            "optional": false,
            "typeAnnotation": null,
            "start": 255,
            "end": 267
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 291,
                        "end": 297
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "ImportExpression",
                          "source": {
                            "type": "AwaitExpression",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "getPath",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 319,
                                "end": 326
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 319,
                              "end": 328
                            },
                            "start": 313,
                            "end": 328
                          },
                          "options": null,
                          "phase": null,
                          "start": 306,
                          "end": 329
                        },
                        "start": 300,
                        "end": 329
                      },
                      "definite": false,
                      "start": 291,
                      "end": 329
                    }
                  ],
                  "declare": false,
                  "start": 285,
                  "end": 330
                }
              ],
              "start": 282,
              "end": 332
            },
            "id": null,
            "generator": false,
            "start": 270,
            "end": 332
          },
          "definite": false,
          "start": 255,
          "end": 332
        }
      ],
      "declare": false,
      "start": 249,
      "end": 333
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 333
}
```

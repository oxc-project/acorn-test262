__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 88,
  "end": 272,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 88,
      "end": 98,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 98,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 94,
            "decorators": [],
            "name": "id",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 97,
            "end": 98,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 173,
      "end": 272,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 179,
          "end": 272,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 179,
            "end": 183,
            "decorators": [],
            "name": "send",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 186,
            "end": 272,
            "async": false,
            "body": {
              "type": "NewExpression",
              "start": 198,
              "end": 272,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 210,
                  "end": 271,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 231,
                    "end": 271,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 235,
                        "end": 269,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 235,
                          "end": 269,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 235,
                            "end": 249,
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "start": 235,
                              "end": 243,
                              "decorators": [],
                              "name": "handlers",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "UpdateExpression",
                              "start": 244,
                              "end": 248,
                              "argument": {
                                "type": "Identifier",
                                "start": 246,
                                "end": 248,
                                "decorators": [],
                                "name": "id",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "operator": "++",
                              "prefix": true
                            }
                          },
                          "right": {
                            "type": "ArrayExpression",
                            "start": 252,
                            "end": 269,
                            "elements": [
                              {
                                "type": "Identifier",
                                "start": 253,
                                "end": 260,
                                "decorators": [],
                                "name": "resolve",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "Identifier",
                                "start": 262,
                                "end": 268,
                                "decorators": [],
                                "name": "reject",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 211,
                      "end": 218,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 220,
                      "end": 226,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 202,
                "end": 209,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 186,
                "end": 194,
                "decorators": [],
                "name": "handlers",
                "optional": false,
                "typeAnnotation": null
              }
            ],
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

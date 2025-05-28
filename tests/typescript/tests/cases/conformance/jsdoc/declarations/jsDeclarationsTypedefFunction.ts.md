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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 98,
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
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 173,
      "end": 272,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 179,
          "end": 272,
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
            "expression": true,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "NewExpression",
              "start": 198,
              "end": 272,
              "callee": {
                "type": "Identifier",
                "start": 202,
                "end": 209,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 210,
                  "end": 271,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
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
                  "body": {
                    "type": "BlockStatement",
                    "start": 231,
                    "end": 271,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 235,
                        "end": 269,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 235,
                          "end": 269,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 235,
                            "end": 249,
                            "object": {
                              "type": "Identifier",
                              "start": 235,
                              "end": 243,
                              "decorators": [],
                              "name": "handlers",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "UpdateExpression",
                              "start": 244,
                              "end": 248,
                              "operator": "++",
                              "prefix": true,
                              "argument": {
                                "type": "Identifier",
                                "start": 246,
                                "end": 248,
                                "decorators": [],
                                "name": "id",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "computed": true
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
                        },
                        "directive": null
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

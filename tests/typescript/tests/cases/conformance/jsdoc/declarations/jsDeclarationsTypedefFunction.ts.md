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
            "name": "id",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 94
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 97,
            "end": 98
          },
          "definite": false,
          "start": 92,
          "end": 98
        }
      ],
      "declare": false,
      "start": 88,
      "end": 98
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
            "name": "send",
            "optional": false,
            "typeAnnotation": null,
            "start": 179,
            "end": 183
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "handlers",
                "optional": false,
                "typeAnnotation": null,
                "start": 186,
                "end": 194
              }
            ],
            "returnType": null,
            "body": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 202,
                "end": 209
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 211,
                      "end": 218
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 220,
                      "end": 226
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "handlers",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 235,
                              "end": 243
                            },
                            "property": {
                              "type": "UpdateExpression",
                              "operator": "++",
                              "prefix": true,
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "id",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 246,
                                "end": 248
                              },
                              "start": 244,
                              "end": 248
                            },
                            "optional": false,
                            "computed": true,
                            "start": 235,
                            "end": 249
                          },
                          "right": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "resolve",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 253,
                                "end": 260
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "reject",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 262,
                                "end": 268
                              }
                            ],
                            "start": 252,
                            "end": 269
                          },
                          "start": 235,
                          "end": 269
                        },
                        "directive": null,
                        "start": 235,
                        "end": 269
                      }
                    ],
                    "start": 231,
                    "end": 271
                  },
                  "id": null,
                  "generator": false,
                  "start": 210,
                  "end": 271
                }
              ],
              "start": 198,
              "end": 272
            },
            "id": null,
            "generator": false,
            "start": 186,
            "end": 272
          },
          "definite": false,
          "start": 179,
          "end": 272
        }
      ],
      "declare": false,
      "start": 173,
      "end": 272
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 88,
  "end": 272
}
```

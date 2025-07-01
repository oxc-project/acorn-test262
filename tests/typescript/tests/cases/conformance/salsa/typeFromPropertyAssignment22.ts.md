__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Installer",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 18
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 28,
                  "end": 32
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 33,
                  "end": 37
                },
                "optional": false,
                "computed": false,
                "start": 28,
                "end": 37
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 40,
                "end": 41
              },
              "start": 28,
              "end": 41
            },
            "directive": null,
            "start": 28,
            "end": 41
          }
        ],
        "start": 22,
        "end": 43
      },
      "expression": false,
      "start": 0,
      "end": 43
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Installer",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 53
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 63
            },
            "optional": false,
            "computed": false,
            "start": 44,
            "end": 63
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "loadArgMetadata",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 79
          },
          "optional": false,
          "computed": false,
          "start": 44,
          "end": 79
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 96
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 160,
                      "end": 164
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
                              "type": "ThisExpression",
                              "start": 179,
                              "end": 183
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "args",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 184,
                              "end": 188
                            },
                            "optional": false,
                            "computed": false,
                            "start": 179,
                            "end": 188
                          },
                          "right": {
                            "type": "Literal",
                            "value": "hi",
                            "raw": "'hi'",
                            "start": 191,
                            "end": 195
                          },
                          "start": 179,
                          "end": 195
                        },
                        "directive": null,
                        "start": 179,
                        "end": 195
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 204,
                              "end": 208
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "newProperty",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 209,
                              "end": 220
                            },
                            "optional": false,
                            "computed": false,
                            "start": 204,
                            "end": 220
                          },
                          "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 223,
                            "end": 224
                          },
                          "start": 204,
                          "end": 224
                        },
                        "directive": null,
                        "start": 204,
                        "end": 224
                      }
                    ],
                    "start": 169,
                    "end": 230
                  },
                  "id": null,
                  "generator": false,
                  "start": 159,
                  "end": 230
                },
                "directive": null,
                "start": 159,
                "end": 230
              }
            ],
            "start": 98,
            "end": 232
          },
          "expression": false,
          "start": 82,
          "end": 232
        },
        "start": 44,
        "end": 232
      },
      "directive": null,
      "start": 44,
      "end": 232
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 237,
            "end": 238
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Installer",
              "optional": false,
              "typeAnnotation": null,
              "start": 245,
              "end": 254
            },
            "typeArguments": null,
            "arguments": [],
            "start": 241,
            "end": 256
          },
          "definite": false,
          "start": 237,
          "end": 256
        }
      ],
      "declare": false,
      "start": 233,
      "end": 256
    },
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
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 257,
            "end": 258
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "newProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 259,
            "end": 270
          },
          "optional": false,
          "computed": false,
          "start": 257,
          "end": 270
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 274
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 275,
            "end": 279
          },
          "optional": false,
          "computed": false,
          "start": 273,
          "end": 279
        },
        "start": 257,
        "end": 279
      },
      "directive": null,
      "start": 257,
      "end": 279
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 316
}
```

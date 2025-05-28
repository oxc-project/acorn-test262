__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 316,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 18,
        "decorators": [],
        "name": "Installer",
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
        "start": 22,
        "end": 43,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 28,
            "end": 41,
            "expression": {
              "type": "AssignmentExpression",
              "start": 28,
              "end": 41,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 28,
                "end": 37,
                "object": {
                  "type": "ThisExpression",
                  "start": 28,
                  "end": 32
                },
                "property": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 37,
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 40,
                "end": 41,
                "value": 0,
                "raw": "0"
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 44,
      "end": 232,
      "expression": {
        "type": "AssignmentExpression",
        "start": 44,
        "end": 232,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 44,
          "end": 79,
          "object": {
            "type": "MemberExpression",
            "start": 44,
            "end": 63,
            "object": {
              "type": "Identifier",
              "start": 44,
              "end": 53,
              "decorators": [],
              "name": "Installer",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 54,
              "end": 63,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 64,
            "end": 79,
            "decorators": [],
            "name": "loadArgMetadata",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 82,
          "end": 232,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 92,
              "end": 96,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 98,
            "end": 232,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 159,
                "end": 230,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 159,
                  "end": 230,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 160,
                      "end": 164,
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 169,
                    "end": 230,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 179,
                        "end": 195,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 179,
                          "end": 195,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 179,
                            "end": 188,
                            "object": {
                              "type": "ThisExpression",
                              "start": 179,
                              "end": 183
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 184,
                              "end": 188,
                              "decorators": [],
                              "name": "args",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 191,
                            "end": 195,
                            "value": "hi",
                            "raw": "'hi'"
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 204,
                        "end": 224,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 204,
                          "end": 224,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 204,
                            "end": 220,
                            "object": {
                              "type": "ThisExpression",
                              "start": 204,
                              "end": 208
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 209,
                              "end": 220,
                              "decorators": [],
                              "name": "newProperty",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 223,
                            "end": 224,
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                },
                "directive": null
              }
            ]
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 233,
      "end": 256,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 237,
          "end": 256,
          "id": {
            "type": "Identifier",
            "start": 237,
            "end": 238,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 241,
            "end": 256,
            "callee": {
              "type": "Identifier",
              "start": 245,
              "end": 254,
              "decorators": [],
              "name": "Installer",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 257,
      "end": 279,
      "expression": {
        "type": "AssignmentExpression",
        "start": 257,
        "end": 279,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 257,
          "end": 270,
          "object": {
            "type": "Identifier",
            "start": 257,
            "end": 258,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 259,
            "end": 270,
            "decorators": [],
            "name": "newProperty",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 273,
          "end": 279,
          "object": {
            "type": "Identifier",
            "start": 273,
            "end": 274,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 275,
            "end": 279,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

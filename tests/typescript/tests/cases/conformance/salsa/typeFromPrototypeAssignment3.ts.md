__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 289,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 44,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 18,
        "decorators": [],
        "name": "Multimap3",
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
        "start": 21,
        "end": 44,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 27,
            "end": 42,
            "expression": {
              "type": "AssignmentExpression",
              "start": 27,
              "end": 41,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 27,
                "end": 36,
                "object": {
                  "type": "ThisExpression",
                  "start": 27,
                  "end": 31
                },
                "property": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 36,
                  "decorators": [],
                  "name": "_map",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "ObjectExpression",
                "start": 39,
                "end": 41,
                "properties": []
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "EmptyStatement",
      "start": 44,
      "end": 45
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 210,
      "expression": {
        "type": "AssignmentExpression",
        "start": 47,
        "end": 210,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 47,
          "end": 66,
          "object": {
            "type": "Identifier",
            "start": 47,
            "end": 56,
            "decorators": [],
            "name": "Multimap3",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 57,
            "end": 66,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 69,
          "end": 210,
          "properties": [
            {
              "type": "Property",
              "start": 156,
              "end": 208,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 156,
                "end": 159,
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 159,
                "end": 208,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 160,
                    "end": 163,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 165,
                  "end": 208,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 175,
                      "end": 202,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 182,
                        "end": 201,
                        "object": {
                          "type": "MemberExpression",
                          "start": 182,
                          "end": 191,
                          "object": {
                            "type": "ThisExpression",
                            "start": 182,
                            "end": 186
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 187,
                            "end": 191,
                            "decorators": [],
                            "name": "_map",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "BinaryExpression",
                          "start": 192,
                          "end": 200,
                          "left": {
                            "type": "Identifier",
                            "start": 192,
                            "end": 195,
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "start": 198,
                            "end": 200,
                            "value": "",
                            "raw": "''"
                          }
                        },
                        "optional": false,
                        "computed": true
                      }
                    }
                  ]
                },
                "expression": false
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 237,
      "end": 265,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 243,
          "end": 264,
          "id": {
            "type": "Identifier",
            "start": 243,
            "end": 246,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 249,
            "end": 264,
            "callee": {
              "type": "Identifier",
              "start": 253,
              "end": 262,
              "decorators": [],
              "name": "Multimap3",
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
      "type": "VariableDeclaration",
      "start": 266,
      "end": 289,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 272,
          "end": 289,
          "id": {
            "type": "Identifier",
            "start": 272,
            "end": 273,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 276,
            "end": 289,
            "callee": {
              "type": "MemberExpression",
              "start": 276,
              "end": 283,
              "object": {
                "type": "Identifier",
                "start": 276,
                "end": 279,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 280,
                "end": 283,
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 284,
                "end": 288,
                "value": "hi",
                "raw": "'hi'"
              }
            ],
            "optional": false
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

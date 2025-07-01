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
        "name": "Multimap3",
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
                  "start": 27,
                  "end": 31
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 32,
                  "end": 36
                },
                "optional": false,
                "computed": false,
                "start": 27,
                "end": 36
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 39,
                "end": 41
              },
              "start": 27,
              "end": 41
            },
            "directive": null,
            "start": 27,
            "end": 42
          }
        ],
        "start": 21,
        "end": 44
      },
      "expression": false,
      "start": 0,
      "end": 44
    },
    {
      "type": "EmptyStatement",
      "start": 44,
      "end": 45
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
            "name": "Multimap3",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 56
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 66
          },
          "optional": false,
          "computed": false,
          "start": 47,
          "end": 66
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null,
                "start": 156,
                "end": 159
              },
              "value": {
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
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 160,
                    "end": 163
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 182,
                            "end": 186
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_map",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 187,
                            "end": 191
                          },
                          "optional": false,
                          "computed": false,
                          "start": 182,
                          "end": 191
                        },
                        "property": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 192,
                            "end": 195
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "value": "",
                            "raw": "''",
                            "start": 198,
                            "end": 200
                          },
                          "start": 192,
                          "end": 200
                        },
                        "optional": false,
                        "computed": true,
                        "start": 182,
                        "end": 201
                      },
                      "start": 175,
                      "end": 202
                    }
                  ],
                  "start": 165,
                  "end": 208
                },
                "expression": false,
                "start": 159,
                "end": 208
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 156,
              "end": 208
            }
          ],
          "start": 69,
          "end": 210
        },
        "start": 47,
        "end": 210
      },
      "directive": null,
      "start": 47,
      "end": 210
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
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 243,
            "end": 246
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Multimap3",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 262
            },
            "typeArguments": null,
            "arguments": [],
            "start": 249,
            "end": 264
          },
          "definite": false,
          "start": 243,
          "end": 264
        }
      ],
      "declare": false,
      "start": 237,
      "end": 265
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 272,
            "end": 273
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 276,
                "end": 279
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null,
                "start": 280,
                "end": 283
              },
              "optional": false,
              "computed": false,
              "start": 276,
              "end": 283
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hi",
                "raw": "'hi'",
                "start": 284,
                "end": 288
              }
            ],
            "optional": false,
            "start": 276,
            "end": 289
          },
          "definite": false,
          "start": 272,
          "end": 289
        }
      ],
      "declare": false,
      "start": 266,
      "end": 289
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 289
}
```

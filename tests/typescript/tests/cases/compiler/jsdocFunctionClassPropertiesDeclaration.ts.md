__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 74,
  "end": 205,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 74,
      "end": 205,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 81,
        "end": 205,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 100,
          "end": 205,
          "body": [
            {
              "type": "IfStatement",
              "start": 106,
              "end": 171,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 134,
                "end": 171,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 144,
                    "end": 165,
                    "argument": {
                      "type": "NewExpression",
                      "start": 151,
                      "end": 164,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 159,
                          "end": 160,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 162,
                          "end": 163,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 155,
                        "end": 158,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "test": {
                "type": "UnaryExpression",
                "start": 110,
                "end": 132,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 112,
                  "end": 131,
                  "operator": "instanceof",
                  "left": {
                    "type": "ThisExpression",
                    "start": 112,
                    "end": 116
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 131,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "operator": "!",
                "prefix": true
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 176,
              "end": 187,
              "directive": null,
              "expression": {
                "type": "AssignmentExpression",
                "start": 176,
                "end": 186,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 176,
                  "end": 182,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 176,
                    "end": 180
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 181,
                    "end": 182,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "right": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 186,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 192,
              "end": 203,
              "directive": null,
              "expression": {
                "type": "AssignmentExpression",
                "start": 192,
                "end": 202,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 192,
                  "end": 198,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 192,
                    "end": 196
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 197,
                    "end": 198,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "right": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 202,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 90,
          "end": 93,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 94,
            "end": 95,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 97,
            "end": 98,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

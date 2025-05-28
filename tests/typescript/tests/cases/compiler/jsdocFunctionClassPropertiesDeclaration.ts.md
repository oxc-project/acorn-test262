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
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 81,
        "end": 205,
        "id": {
          "type": "Identifier",
          "start": 90,
          "end": 93,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
        "body": {
          "type": "BlockStatement",
          "start": 100,
          "end": 205,
          "body": [
            {
              "type": "IfStatement",
              "start": 106,
              "end": 171,
              "test": {
                "type": "UnaryExpression",
                "start": 110,
                "end": 132,
                "operator": "!",
                "argument": {
                  "type": "BinaryExpression",
                  "start": 112,
                  "end": 131,
                  "left": {
                    "type": "ThisExpression",
                    "start": 112,
                    "end": 116
                  },
                  "operator": "instanceof",
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
                "prefix": true
              },
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
                      "callee": {
                        "type": "Identifier",
                        "start": 155,
                        "end": 158,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
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
                      ]
                    }
                  }
                ]
              },
              "alternate": null
            },
            {
              "type": "ExpressionStatement",
              "start": 176,
              "end": 187,
              "expression": {
                "type": "AssignmentExpression",
                "start": 176,
                "end": 186,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 176,
                  "end": 182,
                  "object": {
                    "type": "ThisExpression",
                    "start": 176,
                    "end": 180
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 181,
                    "end": 182,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
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
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 192,
              "end": 203,
              "expression": {
                "type": "AssignmentExpression",
                "start": 192,
                "end": 202,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 192,
                  "end": 198,
                  "object": {
                    "type": "ThisExpression",
                    "start": 192,
                    "end": 196
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 197,
                    "end": 198,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
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
              },
              "directive": null
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

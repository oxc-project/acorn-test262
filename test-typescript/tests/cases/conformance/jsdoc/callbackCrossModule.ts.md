__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 146,
  "end": 197,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 146,
      "end": 164,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 146,
        "end": 164,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 146,
          "end": 160,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 146,
            "end": 152,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 153,
            "end": 160,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 163,
          "end": 164,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 165,
      "end": 196,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 178,
        "end": 196,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 184,
            "end": 194,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 184,
              "end": 194,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 184,
                "end": 190,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 184,
                  "end": 188
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 190,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 193,
                "end": 194,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
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
        "start": 174,
        "end": 175,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 39,
  "end": 149,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 39,
      "end": 148,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 53,
        "end": 148,
        "body": [
          {
            "type": "IfStatement",
            "start": 59,
            "end": 120,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 76,
              "end": 120,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 63,
              "end": 74,
              "operator": "===",
              "left": {
                "type": "Literal",
                "start": 63,
                "end": 64,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "BinaryExpression",
                "start": 69,
                "end": 74,
                "operator": "-",
                "left": {
                  "type": "Literal",
                  "start": 69,
                  "end": 70,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                },
                "right": {
                  "type": "Literal",
                  "start": 73,
                  "end": 74,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 125,
            "end": 146,
            "argument": {
              "type": "CallExpression",
              "start": 132,
              "end": 146,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 134,
                  "end": 145,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 136,
                      "end": 144,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 136,
                        "end": 138,
                        "decorators": [],
                        "name": "ok",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 140,
                        "end": 144,
                        "raw": "true",
                        "value": true,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 132,
                "end": 133,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 49,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 50,
          "end": 51,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

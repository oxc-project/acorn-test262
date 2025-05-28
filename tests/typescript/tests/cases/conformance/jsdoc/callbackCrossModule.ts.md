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
      "expression": {
        "type": "AssignmentExpression",
        "start": 146,
        "end": 164,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 146,
          "end": 160,
          "object": {
            "type": "Identifier",
            "start": 146,
            "end": 152,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 153,
            "end": 160,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 165,
      "end": 196,
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 175,
        "decorators": [],
        "name": "C",
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
        "start": 178,
        "end": 196,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 184,
            "end": 194,
            "expression": {
              "type": "AssignmentExpression",
              "start": 184,
              "end": 194,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 184,
                "end": 190,
                "object": {
                  "type": "ThisExpression",
                  "start": 184,
                  "end": 188
                },
                "property": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 190,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 193,
                "end": 194,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
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
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 49,
        "decorators": [],
        "name": "f",
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
          "start": 50,
          "end": 51,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 53,
        "end": 148,
        "body": [
          {
            "type": "IfStatement",
            "start": 59,
            "end": 120,
            "test": {
              "type": "BinaryExpression",
              "start": 63,
              "end": 74,
              "left": {
                "type": "Literal",
                "start": 63,
                "end": 64,
                "value": 1,
                "raw": "1"
              },
              "operator": "===",
              "right": {
                "type": "BinaryExpression",
                "start": 69,
                "end": 74,
                "left": {
                  "type": "Literal",
                  "start": 69,
                  "end": 70,
                  "value": 2,
                  "raw": "2"
                },
                "operator": "-",
                "right": {
                  "type": "Literal",
                  "start": 73,
                  "end": 74,
                  "value": 1,
                  "raw": "1"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 76,
              "end": 120,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 125,
            "end": 146,
            "argument": {
              "type": "CallExpression",
              "start": 132,
              "end": 146,
              "callee": {
                "type": "Identifier",
                "start": 132,
                "end": 133,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 136,
                        "end": 138,
                        "decorators": [],
                        "name": "ok",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 140,
                        "end": 144,
                        "value": true,
                        "raw": "true"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

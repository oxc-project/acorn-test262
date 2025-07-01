__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 152
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 160
          },
          "optional": false,
          "computed": false,
          "start": 146,
          "end": 160
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 163,
          "end": 164
        },
        "start": 146,
        "end": 164
      },
      "directive": null,
      "start": 146,
      "end": 164
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 174,
        "end": 175
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
                  "start": 184,
                  "end": 188
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 189,
                  "end": 190
                },
                "optional": false,
                "computed": false,
                "start": 184,
                "end": 190
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 193,
                "end": 194
              },
              "start": 184,
              "end": 194
            },
            "directive": null,
            "start": 184,
            "end": 194
          }
        ],
        "start": 178,
        "end": 196
      },
      "expression": false,
      "start": 165,
      "end": 196
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 146,
  "end": 197
}
```
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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 49
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 51
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 63,
                "end": 64
              },
              "operator": "===",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 69,
                  "end": 70
                },
                "operator": "-",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 73,
                  "end": 74
                },
                "start": 69,
                "end": 74
              },
              "start": 63,
              "end": 74
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 76,
              "end": 120
            },
            "alternate": null,
            "start": 59,
            "end": 120
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 133
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ok",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 136,
                        "end": 138
                      },
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 140,
                        "end": 144
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 136,
                      "end": 144
                    }
                  ],
                  "start": 134,
                  "end": 145
                }
              ],
              "optional": false,
              "start": 132,
              "end": 146
            },
            "start": 125,
            "end": 146
          }
        ],
        "start": 53,
        "end": 148
      },
      "expression": false,
      "start": 39,
      "end": 148
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 39,
  "end": 149
}
```

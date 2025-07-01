__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 30
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 30
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 25,
                "end": 30
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 32
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 47,
                      "end": 52
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 54,
                      "end": 56
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 47,
                    "end": 56
                  },
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 64,
                        "end": 68
                      },
                      "consequent": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 71,
                        "end": 73
                      },
                      "alternate": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 76,
                        "end": 78
                      },
                      "start": 64,
                      "end": 78
                    },
                    "start": 60,
                    "end": 79
                  }
                ],
                "start": 43,
                "end": 82
              },
              "id": null,
              "generator": false,
              "start": 36,
              "end": 83
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 35,
            "end": 86
          },
          "definite": false,
          "start": 23,
          "end": 86
        }
      ],
      "declare": false,
      "start": 17,
      "end": 87
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 135,
                  "end": 141
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 135,
                  "end": 141
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 135,
                "end": 141
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 133,
            "end": 143
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 150,
                  "end": 156
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 158,
                  "end": 160
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 150,
                "end": 160
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 174,
                        "end": 178
                      },
                      "consequent": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 181,
                        "end": 183
                      },
                      "alternate": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 186,
                        "end": 188
                      },
                      "start": 174,
                      "end": 188
                    },
                    "id": null,
                    "generator": false,
                    "start": 168,
                    "end": 188
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 167,
                  "end": 191
                },
                "start": 164,
                "end": 191
              }
            ],
            "start": 146,
            "end": 194
          },
          "definite": false,
          "start": 133,
          "end": 194
        }
      ],
      "declare": false,
      "start": 127,
      "end": 195
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 17,
  "end": 195
}
```

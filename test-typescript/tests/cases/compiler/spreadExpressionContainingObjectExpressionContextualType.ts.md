__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 195,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 87,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 23,
          "end": 86,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 23,
            "end": 32,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 25,
                "end": 30,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 30,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 30,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 35,
            "end": 86,
            "arguments": [],
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 36,
              "end": 83,
              "async": false,
              "body": {
                "type": "ObjectExpression",
                "start": 43,
                "end": 82,
                "properties": [
                  {
                    "type": "Property",
                    "start": 47,
                    "end": 56,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 47,
                      "end": 52,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 54,
                      "end": 56,
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "SpreadElement",
                    "start": 60,
                    "end": 79,
                    "argument": {
                      "type": "ConditionalExpression",
                      "start": 64,
                      "end": 78,
                      "alternate": {
                        "type": "ObjectExpression",
                        "start": 76,
                        "end": 78,
                        "properties": []
                      },
                      "consequent": {
                        "type": "ObjectExpression",
                        "start": 71,
                        "end": 73,
                        "properties": []
                      },
                      "test": {
                        "type": "Literal",
                        "start": 64,
                        "end": 68,
                        "raw": "true",
                        "value": true,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                ]
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 127,
      "end": 195,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 194,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 133,
            "end": 143,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 135,
                "end": 141,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 141,
                  "decorators": [],
                  "name": "value2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 141,
                  "decorators": [],
                  "name": "value2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 146,
            "end": 194,
            "properties": [
              {
                "type": "Property",
                "start": 150,
                "end": 160,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 156,
                  "decorators": [],
                  "name": "value2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 158,
                  "end": 160,
                  "raw": "\"\"",
                  "value": "",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "SpreadElement",
                "start": 164,
                "end": 191,
                "argument": {
                  "type": "CallExpression",
                  "start": 167,
                  "end": 191,
                  "arguments": [],
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 168,
                    "end": 188,
                    "async": false,
                    "body": {
                      "type": "ConditionalExpression",
                      "start": 174,
                      "end": 188,
                      "alternate": {
                        "type": "ObjectExpression",
                        "start": 186,
                        "end": 188,
                        "properties": []
                      },
                      "consequent": {
                        "type": "ObjectExpression",
                        "start": 181,
                        "end": 183,
                        "properties": []
                      },
                      "test": {
                        "type": "Literal",
                        "start": 174,
                        "end": 178,
                        "raw": "true",
                        "value": true,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

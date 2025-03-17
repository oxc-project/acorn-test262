__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 196,
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
          "id": {
            "type": "ObjectPattern",
            "start": 23,
            "end": 32,
            "properties": [
              {
                "type": "Property",
                "start": 25,
                "end": 30,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 30,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 30,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 35,
            "end": 86,
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 36,
              "end": 83,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "ObjectExpression",
                "start": 43,
                "end": 82,
                "properties": [
                  {
                    "type": "Property",
                    "start": 47,
                    "end": 56,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 47,
                      "end": 52,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 54,
                      "end": 56,
                      "value": "",
                      "raw": "\"\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "SpreadElement",
                    "start": 60,
                    "end": 79,
                    "argument": {
                      "type": "ConditionalExpression",
                      "start": 64,
                      "end": 78,
                      "test": {
                        "type": "Literal",
                        "start": 64,
                        "end": 68,
                        "value": true,
                        "raw": "true"
                      },
                      "consequent": {
                        "type": "ObjectExpression",
                        "start": 71,
                        "end": 73,
                        "properties": []
                      },
                      "alternate": {
                        "type": "ObjectExpression",
                        "start": 76,
                        "end": 78,
                        "properties": []
                      }
                    }
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "ObjectPattern",
            "start": 133,
            "end": 143,
            "properties": [
              {
                "type": "Property",
                "start": 135,
                "end": 141,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 141,
                  "name": "value2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 141,
                  "name": "value2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 156,
                  "name": "value2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 158,
                  "end": 160,
                  "value": "",
                  "raw": "\"\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "SpreadElement",
                "start": 164,
                "end": 191,
                "argument": {
                  "type": "CallExpression",
                  "start": 167,
                  "end": 191,
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 168,
                    "end": 188,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "ConditionalExpression",
                      "start": 174,
                      "end": 188,
                      "test": {
                        "type": "Literal",
                        "start": 174,
                        "end": 178,
                        "value": true,
                        "raw": "true"
                      },
                      "consequent": {
                        "type": "ObjectExpression",
                        "start": 181,
                        "end": 183,
                        "properties": []
                      },
                      "alternate": {
                        "type": "ObjectExpression",
                        "start": 186,
                        "end": 188,
                        "properties": []
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

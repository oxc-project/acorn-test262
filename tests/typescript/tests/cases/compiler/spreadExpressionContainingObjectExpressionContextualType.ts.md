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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 23,
          "end": 86,
          "id": {
            "type": "ObjectPattern",
            "start": 23,
            "end": 32,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 25,
                "end": 30,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 30,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 30,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
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
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "ObjectExpression",
                "start": 43,
                "end": 82,
                "properties": [
                  {
                    "type": "Property",
                    "start": 47,
                    "end": 56,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 47,
                      "end": 52,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 54,
                      "end": 56,
                      "value": "",
                      "raw": "\"\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
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
              "id": null,
              "generator": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 127,
      "end": 195,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 194,
          "id": {
            "type": "ObjectPattern",
            "start": 133,
            "end": 143,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 135,
                "end": 141,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 141,
                  "decorators": [],
                  "name": "value2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 141,
                  "decorators": [],
                  "name": "value2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 156,
                  "decorators": [],
                  "name": "value2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 158,
                  "end": 160,
                  "value": "",
                  "raw": "\"\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
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
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                    "id": null,
                    "generator": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                }
              }
            ]
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

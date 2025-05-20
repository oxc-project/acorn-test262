__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 70,
  "end": 175,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 70,
      "end": 175,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 174,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 77,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 112,
            "end": 173,
            "properties": [
              {
                "type": "Property",
                "start": 118,
                "end": 142,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 124,
                  "decorators": [],
                  "name": "isEven",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 126,
                  "end": 142,
                  "async": false,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 131,
                    "end": 142,
                    "operator": "===",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 131,
                      "end": 136,
                      "operator": "%",
                      "left": {
                        "type": "Identifier",
                        "start": 131,
                        "end": 132,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 135,
                        "end": 136,
                        "raw": "2",
                        "value": 2
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 141,
                      "end": 142,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 126,
                      "end": 127,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 148,
                "end": 171,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 153,
                  "decorators": [],
                  "name": "isOdd",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 155,
                  "end": 171,
                  "async": false,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 160,
                    "end": 171,
                    "operator": "===",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 160,
                      "end": 165,
                      "operator": "%",
                      "left": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 161,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 164,
                        "end": 165,
                        "raw": "2",
                        "value": 2
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 170,
                      "end": 171,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 155,
                      "end": 156,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
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

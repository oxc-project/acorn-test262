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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 174,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 124,
                  "decorators": [],
                  "name": "isEven",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 126,
                  "end": 142,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
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
                  "body": {
                    "type": "BinaryExpression",
                    "start": 131,
                    "end": 142,
                    "left": {
                      "type": "BinaryExpression",
                      "start": 131,
                      "end": 136,
                      "left": {
                        "type": "Identifier",
                        "start": 131,
                        "end": 132,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "%",
                      "right": {
                        "type": "Literal",
                        "start": 135,
                        "end": 136,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 141,
                      "end": 142,
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 148,
                "end": 171,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 153,
                  "decorators": [],
                  "name": "isOdd",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 155,
                  "end": 171,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
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
                  "body": {
                    "type": "BinaryExpression",
                    "start": 160,
                    "end": 171,
                    "left": {
                      "type": "BinaryExpression",
                      "start": 160,
                      "end": 165,
                      "left": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 161,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "%",
                      "right": {
                        "type": "Literal",
                        "start": 164,
                        "end": 165,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 170,
                      "end": 171,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
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

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 226,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 226,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 226,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 21,
            "decorators": [],
            "name": "testArrayWithFunc",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 24,
            "end": 226,
            "elements": [
              {
                "type": "FunctionExpression",
                "start": 54,
                "end": 91,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 65,
                  "end": 91,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 75,
                      "end": 85,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 79,
                          "end": 84,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 79,
                            "end": 80,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "Literal",
                            "start": 83,
                            "end": 84,
                            "raw": "1",
                            "value": 1
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "let"
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "Literal",
                "start": 119,
                "end": 122,
                "raw": "'1'",
                "value": "1"
              },
              {
                "type": "Literal",
                "start": 151,
                "end": 152,
                "raw": "2",
                "value": 2
              },
              {
                "type": "ObjectExpression",
                "start": 180,
                "end": 188,
                "properties": [
                  {
                    "type": "Property",
                    "start": 182,
                    "end": 186,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 182,
                      "end": 183,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 185,
                      "end": 186,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              {
                "type": "ArrayExpression",
                "start": 215,
                "end": 224,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 216,
                    "end": 217,
                    "raw": "1",
                    "value": 1
                  },
                  {
                    "type": "Literal",
                    "start": 219,
                    "end": 220,
                    "raw": "2",
                    "value": 2
                  },
                  {
                    "type": "Literal",
                    "start": 222,
                    "end": 223,
                    "raw": "3",
                    "value": 3
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

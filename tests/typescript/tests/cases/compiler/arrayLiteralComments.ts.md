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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 226,
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
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 65,
                  "end": 91,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 75,
                      "end": 85,
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 79,
                          "end": 84,
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
                            "value": 1,
                            "raw": "1"
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    }
                  ]
                },
                "expression": false
              },
              {
                "type": "Literal",
                "start": 119,
                "end": 122,
                "value": "1",
                "raw": "'1'"
              },
              {
                "type": "Literal",
                "start": 151,
                "end": 152,
                "value": 2,
                "raw": "2"
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 182,
                      "end": 183,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 185,
                      "end": 186,
                      "value": 1,
                      "raw": "1"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
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
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 219,
                    "end": 220,
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "Literal",
                    "start": 222,
                    "end": 223,
                    "value": 3,
                    "raw": "3"
                  }
                ]
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

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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 21,
            "name": "testArrayWithFunc",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                          "id": {
                            "type": "Identifier",
                            "start": 79,
                            "end": 80,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                      "kind": "let",
                      "declare": false
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 182,
                      "end": 183,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 185,
                      "end": 186,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
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
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

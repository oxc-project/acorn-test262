__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testArrayWithFunc",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 21
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "FunctionExpression",
                "id": null,
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
                      "type": "VariableDeclaration",
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 79,
                            "end": 80
                          },
                          "init": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 83,
                            "end": 84
                          },
                          "definite": false,
                          "start": 79,
                          "end": 84
                        }
                      ],
                      "declare": false,
                      "start": 75,
                      "end": 85
                    }
                  ],
                  "start": 65,
                  "end": 91
                },
                "expression": false,
                "start": 54,
                "end": 91
              },
              {
                "type": "Literal",
                "value": "1",
                "raw": "'1'",
                "start": 119,
                "end": 122
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 151,
                "end": 152
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 182,
                      "end": 183
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 185,
                      "end": 186
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 182,
                    "end": 186
                  }
                ],
                "start": 180,
                "end": 188
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 216,
                    "end": 217
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 219,
                    "end": 220
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 222,
                    "end": 223
                  }
                ],
                "start": 215,
                "end": 224
              }
            ],
            "start": 24,
            "end": 226
          },
          "definite": false,
          "start": 4,
          "end": 226
        }
      ],
      "declare": false,
      "start": 0,
      "end": 226
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 226
}
```

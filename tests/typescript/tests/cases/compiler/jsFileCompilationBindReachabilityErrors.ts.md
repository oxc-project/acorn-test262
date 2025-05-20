__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 272,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 162,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 19,
        "end": 162,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 25,
            "end": 160,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 46,
                "end": 115,
                "consequent": [
                  {
                    "type": "IfStatement",
                    "start": 67,
                    "end": 115,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 74,
                      "end": 115,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 92,
                          "end": 101,
                          "argument": {
                            "type": "Identifier",
                            "start": 99,
                            "end": 100,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 72,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 51,
                  "end": 53,
                  "raw": "10",
                  "value": 10
                }
              },
              {
                "type": "SwitchCase",
                "start": 124,
                "end": 154,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 145,
                    "end": 154,
                    "argument": {
                      "type": "Identifier",
                      "start": 152,
                      "end": 153,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 129,
                  "end": 131,
                  "raw": "20",
                  "value": 20
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 16,
          "end": 17,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 164,
      "end": 249,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 179,
        "end": 249,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 185,
            "end": 194,
            "argument": {
              "type": "Identifier",
              "start": 192,
              "end": 193,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "FunctionDeclaration",
            "start": 199,
            "end": 222,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 215,
              "end": 222,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 208,
              "end": 212,
              "decorators": [],
              "name": "bar2",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "VariableDeclaration",
            "start": 227,
            "end": 238,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 231,
                "end": 237,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 232,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 235,
                  "end": 237,
                  "raw": "10",
                  "value": 10
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 173,
        "end": 176,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "LabeledStatement",
      "start": 251,
      "end": 272,
      "body": {
        "type": "VariableDeclaration",
        "start": 260,
        "end": 272,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 264,
            "end": 271,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 264,
              "end": 266,
              "decorators": [],
              "name": "x2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 269,
              "end": 271,
              "raw": "10",
              "value": 10
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "label": {
        "type": "Identifier",
        "start": 251,
        "end": 257,
        "decorators": [],
        "name": "label1",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

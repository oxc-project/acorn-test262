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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      "body": {
        "type": "BlockStatement",
        "start": 19,
        "end": 162,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 25,
            "end": 160,
            "discriminant": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 46,
                "end": 115,
                "test": {
                  "type": "Literal",
                  "start": 51,
                  "end": 53,
                  "value": 10,
                  "raw": "10"
                },
                "consequent": [
                  {
                    "type": "IfStatement",
                    "start": 67,
                    "end": 115,
                    "test": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 72,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                    "alternate": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 124,
                "end": 154,
                "test": {
                  "type": "Literal",
                  "start": 129,
                  "end": 131,
                  "value": 20,
                  "raw": "20"
                },
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
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 164,
      "end": 249,
      "id": {
        "type": "Identifier",
        "start": 173,
        "end": 176,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
            "id": {
              "type": "Identifier",
              "start": 208,
              "end": 212,
              "decorators": [],
              "name": "bar2",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 215,
              "end": 222,
              "body": []
            },
            "expression": false
          },
          {
            "type": "VariableDeclaration",
            "start": 227,
            "end": 238,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 231,
                "end": 237,
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
                  "value": 10,
                  "raw": "10"
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
      "type": "LabeledStatement",
      "start": 251,
      "end": 272,
      "label": {
        "type": "Identifier",
        "start": 251,
        "end": 257,
        "decorators": [],
        "name": "label1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "VariableDeclaration",
        "start": 260,
        "end": 272,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 264,
            "end": 271,
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
              "value": 10,
              "raw": "10"
            },
            "definite": false
          }
        ],
        "declare": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

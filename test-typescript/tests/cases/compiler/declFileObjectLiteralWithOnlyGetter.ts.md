__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 150,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 90,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 35,
        "end": 90,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 42,
            "end": 88,
            "argument": {
              "type": "ObjectExpression",
              "start": 49,
              "end": 87,
              "properties": [
                {
                  "type": "Property",
                  "start": 59,
                  "end": 80,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 63,
                    "end": 64,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 64,
                    "end": 80,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 67,
                      "end": 80,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 69,
                          "end": 78,
                          "argument": {
                            "type": "Identifier",
                            "start": 76,
                            "end": 77,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
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
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 23,
        "decorators": [],
        "name": "makePoint",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 24,
          "end": 33,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 25,
            "end": 33,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 27,
              "end": 33
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 90,
      "end": 91
    },
    {
      "type": "VariableDeclaration",
      "start": 92,
      "end": 122,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 101,
          "end": 121,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 101,
            "end": 106,
            "decorators": [],
            "name": "point",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 109,
            "end": 121,
            "arguments": [
              {
                "type": "Literal",
                "start": 119,
                "end": 120,
                "raw": "2",
                "value": 2
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 109,
              "end": 118,
              "decorators": [],
              "name": "makePoint",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 123,
      "end": 149,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 148,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 136,
            "end": 148,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 136,
              "end": 141,
              "decorators": [],
              "name": "point",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 147,
              "end": 148,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
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

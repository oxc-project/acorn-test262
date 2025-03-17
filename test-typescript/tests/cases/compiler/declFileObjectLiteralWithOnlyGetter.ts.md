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
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 23,
        "name": "makePoint",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 24,
          "end": 33,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 25,
            "end": 33,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 27,
              "end": 33
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 63,
                    "end": 64,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 64,
                    "end": 80,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "get",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 101,
            "end": 106,
            "name": "point",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 109,
            "end": 121,
            "callee": {
              "type": "Identifier",
              "start": 109,
              "end": 118,
              "name": "makePoint",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 119,
                "end": 120,
                "value": 2,
                "raw": "2"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 136,
            "end": 148,
            "object": {
              "type": "Identifier",
              "start": 136,
              "end": 141,
              "name": "point",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 147,
              "end": 148,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
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

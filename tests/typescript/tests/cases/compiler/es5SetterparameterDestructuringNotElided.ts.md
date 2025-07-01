__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 22,
                  "end": 25
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "start",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 27,
                          "end": 32
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "end",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 34,
                          "end": 37
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 41,
                              "end": 44
                            },
                            {
                              "type": "TSAnyKeyword",
                              "start": 46,
                              "end": 49
                            }
                          ],
                          "start": 40,
                          "end": 50
                        },
                        "start": 38,
                        "end": 50
                      },
                      "start": 26,
                      "end": 50
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "UnaryExpression",
                          "operator": "void",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "start",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 67,
                            "end": 72
                          },
                          "prefix": true,
                          "start": 62,
                          "end": 72
                        },
                        "directive": null,
                        "start": 62,
                        "end": 73
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "UnaryExpression",
                          "operator": "void",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "end",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 87,
                            "end": 90
                          },
                          "prefix": true,
                          "start": 82,
                          "end": 90
                        },
                        "directive": null,
                        "start": 82,
                        "end": 91
                      }
                    ],
                    "start": 52,
                    "end": 97
                  },
                  "expression": false,
                  "start": 25,
                  "end": 97
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 18,
                "end": 97
              }
            ],
            "start": 12,
            "end": 100
          },
          "definite": false,
          "start": 6,
          "end": 100
        }
      ],
      "declare": false,
      "start": 0,
      "end": 101
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 101
}
```

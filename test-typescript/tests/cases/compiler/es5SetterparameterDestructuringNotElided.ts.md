__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 101,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 100,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 12,
            "end": 100,
            "properties": [
              {
                "type": "Property",
                "start": 18,
                "end": 97,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 25,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 25,
                  "end": 97,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "ArrayPattern",
                      "start": 26,
                      "end": 50,
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 27,
                          "end": 32,
                          "name": "start",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 34,
                          "end": 37,
                          "name": "end",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 38,
                        "end": 50,
                        "typeAnnotation": {
                          "type": "TSTupleType",
                          "start": 40,
                          "end": 50,
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
                          ]
                        }
                      }
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 52,
                    "end": 97,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 62,
                        "end": 73,
                        "expression": {
                          "type": "UnaryExpression",
                          "start": 62,
                          "end": 72,
                          "operator": "void",
                          "prefix": true,
                          "argument": {
                            "type": "Identifier",
                            "start": 67,
                            "end": 72,
                            "name": "start",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 82,
                        "end": 91,
                        "expression": {
                          "type": "UnaryExpression",
                          "start": 82,
                          "end": 90,
                          "operator": "void",
                          "prefix": true,
                          "argument": {
                            "type": "Identifier",
                            "start": 87,
                            "end": 90,
                            "name": "end",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "set",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

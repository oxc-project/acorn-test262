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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 100,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 25,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 25,
                  "end": 97,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "ArrayPattern",
                      "start": 26,
                      "end": 50,
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 27,
                          "end": 32,
                          "decorators": [],
                          "name": "start",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 34,
                          "end": 37,
                          "decorators": [],
                          "name": "end",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
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
                  "returnType": null,
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
                          "argument": {
                            "type": "Identifier",
                            "start": 67,
                            "end": 72,
                            "decorators": [],
                            "name": "start",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "prefix": true
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
                          "argument": {
                            "type": "Identifier",
                            "start": 87,
                            "end": 90,
                            "decorators": [],
                            "name": "end",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "prefix": true
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
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

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 261,
  "end": 432,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 261,
      "end": 318,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 279,
        "end": 318,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 283,
            "end": 316,
            "argument": {
              "type": "Literal",
              "start": 310,
              "end": 314,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 270,
        "end": 273,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 274,
          "end": 277,
          "decorators": [],
          "name": "fns",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 320,
      "end": 432,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 326,
          "end": 431,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 332,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 335,
            "end": 431,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 339,
                "end": 430,
                "properties": [
                  {
                    "type": "Property",
                    "start": 343,
                    "end": 427,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 343,
                      "end": 346,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 348,
                      "end": 427,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 354,
                          "end": 404,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 354,
                            "end": 356,
                            "decorators": [],
                            "name": "fn",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 395,
                            "end": 404,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 402,
                              "end": 404,
                              "body": []
                            },
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 396,
                                "end": 397,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "returnType": null,
                            "typeParameters": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 410,
                          "end": 422,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 410,
                            "end": 415,
                            "decorators": [],
                            "name": "thing",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 417,
                            "end": 422,
                            "raw": "\"asd\"",
                            "value": "asd"
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 335,
              "end": 338,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

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
      "end": 150,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 19,
        "name": "main",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 150,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 28,
            "end": 148,
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "start": 39,
              "end": 53,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 51,
                  "end": 53,
                  "id": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 53,
                    "name": "d1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "await using",
              "declare": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 57,
              "end": 139,
              "elements": [
                {
                  "type": "ObjectExpression",
                  "start": 58,
                  "end": 94,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 60,
                      "end": 92,
                      "method": true,
                      "shorthand": false,
                      "computed": true,
                      "key": {
                        "type": "MemberExpression",
                        "start": 67,
                        "end": 86,
                        "object": {
                          "type": "Identifier",
                          "start": 67,
                          "end": 73,
                          "name": "Symbol",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 74,
                          "end": 86,
                          "name": "asyncDispose",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 87,
                        "end": 92,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": true,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 90,
                          "end": 92,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                {
                  "type": "ObjectExpression",
                  "start": 96,
                  "end": 121,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 98,
                      "end": 119,
                      "method": true,
                      "shorthand": false,
                      "computed": true,
                      "key": {
                        "type": "MemberExpression",
                        "start": 99,
                        "end": 113,
                        "object": {
                          "type": "Identifier",
                          "start": 99,
                          "end": 105,
                          "name": "Symbol",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 106,
                          "end": 113,
                          "name": "dispose",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 114,
                        "end": 119,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 117,
                          "end": 119,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                {
                  "type": "Literal",
                  "start": 123,
                  "end": 127,
                  "value": null,
                  "raw": "null"
                },
                {
                  "type": "Identifier",
                  "start": 129,
                  "end": 138,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ]
            },
            "body": {
              "type": "BlockStatement",
              "start": 141,
              "end": 148,
              "body": []
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 106,
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
        "end": 106,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 28,
            "end": 104,
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "start": 39,
              "end": 47,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 45,
                  "end": 47,
                  "id": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 47,
                    "name": "d1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "using",
              "declare": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 51,
              "end": 95,
              "elements": [
                {
                  "type": "ObjectExpression",
                  "start": 52,
                  "end": 77,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 54,
                      "end": 75,
                      "method": true,
                      "shorthand": false,
                      "computed": true,
                      "key": {
                        "type": "MemberExpression",
                        "start": 55,
                        "end": 69,
                        "object": {
                          "type": "Identifier",
                          "start": 55,
                          "end": 61,
                          "name": "Symbol",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 62,
                          "end": 69,
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
                        "start": 70,
                        "end": 75,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 73,
                          "end": 75,
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
                  "start": 79,
                  "end": 83,
                  "value": null,
                  "raw": "null"
                },
                {
                  "type": "Identifier",
                  "start": 85,
                  "end": 94,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ]
            },
            "body": {
              "type": "BlockStatement",
              "start": 97,
              "end": 104,
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

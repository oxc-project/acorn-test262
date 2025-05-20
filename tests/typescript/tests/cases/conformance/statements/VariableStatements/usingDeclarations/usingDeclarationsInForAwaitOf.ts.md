__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 106,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 106,
      "async": true,
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
            "body": {
              "type": "BlockStatement",
              "start": 97,
              "end": 104,
              "body": []
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 39,
              "end": 47,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 45,
                  "end": 47,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 47,
                    "decorators": [],
                    "name": "d1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "using"
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
                      "computed": true,
                      "key": {
                        "type": "MemberExpression",
                        "start": 55,
                        "end": 69,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 55,
                          "end": 61,
                          "decorators": [],
                          "name": "Symbol",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 62,
                          "end": 69,
                          "decorators": [],
                          "name": "dispose",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "kind": "init",
                      "method": true,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 70,
                        "end": 75,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 73,
                          "end": 75,
                          "body": []
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
                },
                {
                  "type": "Literal",
                  "start": 79,
                  "end": 83,
                  "raw": "null",
                  "value": null
                },
                {
                  "type": "Identifier",
                  "start": 85,
                  "end": 94,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 15,
        "end": 19,
        "decorators": [],
        "name": "main",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

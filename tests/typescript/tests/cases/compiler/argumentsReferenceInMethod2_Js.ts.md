__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 125,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 125,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 125,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 50,
            "end": 123,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 51,
              "end": 123,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 52,
                  "end": 60,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 55,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "start": 58,
                    "end": 60,
                    "properties": []
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 62,
                "end": 123,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 96,
                    "end": 120,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 96,
                      "end": 119,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 96,
                        "end": 113,
                        "object": {
                          "type": "ThisExpression",
                          "start": 96,
                          "end": 100
                        },
                        "property": {
                          "type": "Literal",
                          "start": 101,
                          "end": 112,
                          "value": "arguments",
                          "raw": "\"arguments\""
                        },
                        "optional": false,
                        "computed": true
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 116,
                        "end": 119,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
